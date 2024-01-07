import Head from 'next/head'
import React, { useEffect } from 'react'
import { set, useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { useState, useRef } from 'react'
import { loadRazorpay } from '../utils/razorpay'; // Create this file in the 'utils' directory
import { toast } from 'react-hot-toast';
import { API_BASE_URL, urlConstants } from '../constants/urlConstants';
import axios from 'axios';
import { AUTH_KEY_NAME, statusConstants, token } from '../constants/statusCodes';
import Link from 'next/link';
import { listOfCountries, listOfStates } from '../constants/place'
import { formatAmount, isEmailDisallowed, validateEmail } from '../utils';
import { removeFromCartAction } from '../redux/actions/cart';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from 'cookies-next';
import Spinner from '../components/comman/Spinner';
import $ from 'jquery';
import CheckOutPopup from './checkout-popup';
import Image from 'next/image'
import dynamic from "next/dynamic";
const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/footer'))

// import Header from '../components/Header'

const checkout = () => {
    // const handleAdd =()=>{}
    let [popup, setpopup] = useState(false);
    let [agree, setagree] = useState(false);
    let [checkOutBtn, setCheckoutBtn] = useState(false);


    const handleCheckBtn = () => {

        if (!agree) {
            setagree(true);
            setpopup(true);
            setCheckoutBtn(true);
        } else {
            setagree(false);
            setpopup(false);
            setCheckoutBtn(false);
        }

    }

    const HandleClosePopup = () => {
        setagree(false);
        setpopup(false);
        setCheckoutBtn(false);
    }


    const handleAgreeBtnInPopup = () => {
        setagree(true);
        setpopup(false);
        setCheckoutBtn(true);
    }
    // console.log(agreePopu);


    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const userInfo = useSelector(state => state.user.user)

    const router = useRouter()

    const form = { address: "", zipCode: "", state: "", country: "" };
    const [formValues, setFormValues] = useState(form);
    const [error, setError] = useState();
    const [paymentError, setPaymentError] = useState(null);
    const [isButtonDisabled, setButtonDisabled] = useState({
        billingAddress: false,
        handlePayment: false
    });
    const [apiError, setApiError] = useState('');
    const [loading, setLoading] = useState(false);
    const [cartData, setCartData] = useState([]);
    const [alreadyBoughtCourses, setAlreadyBoughtCourses] = useState([]);

    const isValid = () => {
        const errors = {};

        if (cartData.courses.length === 0) {
            toast.error('Cart value should be greater than 0 to create order!')
            return false;
        }

        if (!formValues.address) {
            errors.address = 'Please enter your address.';
        }
        console.log(formValues.zipCode)
        if (!formValues.zipCode) {
            console.log("if")

            errors.zipCode = 'Please enter your zip code.';
        } else if (isNaN(formValues.zipCode)) {
            console.log("else")
            errors.zipCode = 'Please enter valid zip code.';

        }


        if (!formValues.country) {
            errors.country = 'Please select your country.';
        }

        if (!formValues.state) {
            errors.state = 'Please select your state.';
        }

        setError(errors);
        return Object.keys(errors).length === 0;
    };

    const saveBillingAddress = async (e) => {
        e.preventDefault();
        setError({});
        setApiError('');
        try {
            setButtonDisabled({
                ...isButtonDisabled,
                billingAddress: !isButtonDisabled.billingAddress
            });
            if (isValid()) {
                const headers = {
                    Authorization: `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`,
                }
                const object = {
                    address: formValues.address,
                    zipCode: formValues.zipCode,
                    country: formValues.country,
                    state: formValues.state,
                }
                const response = await axios.post(urlConstants.saveBillingAddress, object, { headers: headers });
                if (response.status === statusConstants.created) {

                }
            }
        } catch (error) {
            // console.log("🚀 ~ file: checkout.js:84 ~ handleSubmit ~ error:", error)
        } finally {
            setButtonDisabled({
                ...isButtonDisabled,
                billingAddress: !isButtonDisabled.billingAddress
            });
        }
    }

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    const [isShow, setIsShow] = useState(false);
    const showDwnPopup = () => {
        console.log('IN showDwnPopup ');
        setIsShow(!isShow);
    };

    const verifyPaymentResponse = async (object) => {
        // console.log("🚀 ~ file: checkout.js:111 ~ verifyPaymentResponse ~ object:", object)

        const headers = {
            Authorization: `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`,
        }

        const verifyPayment = await axios.post(urlConstants.verifyPayment, object, { headers: headers });

        if (verifyPayment.status === statusConstants.ok) {

            const generateInvoiceObject = {
                orderId: object.orderId
            }

            const invoiceResponse = await axios.post(urlConstants.generateInvoice, generateInvoiceObject, { headers: headers });
            // console.log("🚀 ~ file: checkout.js:126 ~ verifyPaymentResponse ~ invoiceResponse:", invoiceResponse)

            if (object.paymentSucess === 'success') {
                toast.success('Payment has been verified successfully!');
                router.push({
                    pathname: '/orderSuccessScreen',
                    query: { receipt: object.receiptId }
                });
            } else {
                toast.error('You payment has been failed!');
            }

            cartData.courses.map((course) => {
                dispatch(removeFromCartAction(course));
            });
        } else {
            toast.error('Unable to verify the payment!')
        }
    }

    const handlePayment = async (e) => {
        setButtonDisabled({
            ...isButtonDisabled,
            billingAddress: !isButtonDisabled.billingAddress
        });

        try {
            if (isValid()) {
                await saveBillingAddress(e);
                setButtonDisabled({
                    ...isButtonDisabled,
                    handlePayment: !isButtonDisabled.handlePayment
                });
                const { Razorpay } = await loadRazorpay(); // Load Razorpay script dynamically

                const headers = {
                    Authorization: `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`,
                }
                console.log("headers",headers)
                const createResponse = await axios.get(urlConstants.checkout, { headers: headers });
                // console.log("🚀 ~ file: checkout.js:103 ~ handlePayment ~ createResponse:", createResponse.data)
                //Update console log
                console.log("createResponse",createResponse)

                let object;
                console.log('OUT createResponse.status', createResponse.status);

                if (createResponse.status === statusConstants.ok) {
                    // console.log("🚀 ~ file: checkout.js:65 ~ handlePayment ~ createResponse:", createResponse);
                    const orderId = createResponse.data.orderId;
                    const receiptId = createResponse.data.receipt;
                    // console.log("🚀 ~ file: checkout.js:109 ~ handlePayment ~ receiptId:", receiptId)
                    const options = {
                        key: process.env.NEXT_PUBLIC_RAZORPAY_APY_KEY,
                        amount: createResponse.amount || 0,
                        currency: process.env.NEXT_PUBLIC_CURRENCY_KEY,
                        name: process.env.NEXT_PUBLIC_STORE_NAME,
                        description: 'Purchase Description',
                        order_id: orderId,

                        handler: async (response) => {
                            // console.log("🚀 ~ file: checkout.js:79 ~ handler: ~ response:", response)
                            if (response.razorpay_payment_id) {
                                toast.success('Payment has been completed successfully!');
                                try {
                                    object = {
                                        paymentSucess: "success",
                                        orderId: orderId,
                                        receiptId: receiptId,
                                        paymentId: response.razorpay_payment_id,
                                        signature: response.razorpay_signature
                                    }
                                    await verifyPaymentResponse(object)
                                } catch (err) {
                                    // console.log(err);
                                }
                            } else {
                                toast.error('Payment has been failed!')
                            }
                        },
                        prefill: {
                            name: JSON.parse(localStorage.getItem(AUTH_KEY_NAME)).fullName || '',
                            email: JSON.parse(localStorage.getItem(AUTH_KEY_NAME)).email || '',
                            contact: JSON.parse(localStorage.getItem(AUTH_KEY_NAME)).mobileNumber || '',
                            // contact: JSON.parse(localStorage.getItem(AUTH_KEY_NAME)).contact || '',
                        },
                        
                        // readonly:
                        // {
                        //     email:true,
                        //     contact:true
                        // }
                    };
                    const razorpayInstance = new Razorpay(options);
                    razorpayInstance.on('payment.failed', async function (response) {
                        object = {
                            paymentSucess: "failure",
                            code: response.error.code,
                            description: response.error.description,
                            source: response.error.source,
                            step: response.error.step,
                            reason: response.error.reason,
                            orderId: response.error.metadata.order_id,
                            paymentId: response.error.metadata.payment_id,
                            receiptId: receiptId
                        }

                        await verifyPaymentResponse(object)
                    });

                    // console.log("🚀 ~ file: checkout.js:167 ~ handlePayment ~ headers:", headers)

                    razorpayInstance.open();
                } else {
                    // console.log('Unable to create your order!');
                    toast.error('Unable to create your order!')
                }
            }
        } catch (error) {
            // console.log("🚀 ~ file: checkout.js:65 ~ handlePayment ~ error:", error)
            setPaymentError(error.message);
        } finally {
            // console.log(' I am in Finally');
            setButtonDisabled({
                ...isButtonDisabled,
                handlePayment: false,
                billingAddress: false,
            });
        }
    };

    const getCart = async () => {
        const token = `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`;
        if (token) {
            try {
                setLoading(true);
                const headers = {
                    Authorization: token,
                }
                const response = await axios.get(urlConstants.getCart, { headers: headers });

                if (response.status === statusConstants.ok) {
                    setCartData(response.data);
                }
            } catch (error) {
                // console.log("🚀 ~ file: checkout.js:189 ~ getCart ~ error:", error)
                setError('Error retrieving cart data.');
            } finally {
                setLoading(false);
            }
        }

    };

    useEffect(() => {
        getCart()
    }, [])

    const canAccessCheckoutPage = () => {
        cartItems.length > 0 && !getCookie(AUTH_KEY_NAME) ? router.push({ pathname: "/login", query: { redirectTo: "/checkout" } }) : '';
        cartItems.length === 0 ? router.push({ pathname: "/" }) : '';
    }

    const handleModalActions = async (action) => {
        router.push({
            pathname: '/cart',
        });
    }
    useEffect(() => {
        canAccessCheckoutPage()
    }, [])


    return (
        <>
            <Head>
                <title>Checkout - Simandhar Education</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
               {/* <!-- Google tag (gtag.js) --> */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-826080113"></script>
        <script     type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'AW-826080113');`}}
        /> */}
            </Head>
            <Header />
            <section className='section checkout-section'>
                <div className="container-l">
                    <h1 className="heading02 text-center">Checkout now</h1>
                    {
                        loading ? (<Spinner />) : (
                            <div className="box">
                                <div className="grid">
                                    <div>
                                        <form method="post">
                                            <div className="title02"> Billing Address</div>
                                            <div className='input-box'>
                                                <input type="text" name="address" placeholder='Enter Your Address' onChange={(e) => handleChange(e)} />
                                                {error && error.address && <span className='danger'>{error.address}</span>}
                                            </div>
                                            <div className='input-box'>
                                                <input type="text" name="zipCode" placeholder='Zip code' onChange={(e) => handleChange(e)} />
                                                {error && error.zipCode && <span className='danger'>{error.zipCode}</span>}
                                            </div>
                                            <div className="flex">
                                                <div className='input-box custom-select'>
                                                    <select id="select-course" name="country" placeholder='Select country' onChange={(e) => handleChange(e)}>
                                                        <option value="" selected>Select country</option>
                                                        {
                                                            listOfCountries
                                                                .sort((a, b) => a.localeCompare(b))
                                                                .map((country, index) => (
                                                                    <option value={country} key={index}>
                                                                        {country}
                                                                    </option>
                                                                ))
                                                        }

                                                    </select>
                                                    {error && error.country && <span className='danger'>{error.country}</span>}
                                                </div>

                                                <div className='input-box custom-select'>
                                                    <select id="select-states" name="state" placeholder='Select states' onChange={(e) => handleChange(e)}>
                                                        <option value="" selected>Select states</option>
                                                        {
                                                            !formValues.country ? (
                                                                <option value="">Select country first</option>
                                                            ) : (
                                                                formValues.country === 'India' ? (
                                                                    listOfStates
                                                                        .filter((state) => state !== 'Outside India')
                                                                        .sort((a, b) => a.localeCompare(b))
                                                                        .map((state) => (
                                                                            <option key={state} value={state}>
                                                                                {state}
                                                                            </option>
                                                                        ))
                                                                ) : (
                                                                    listOfStates.filter((state) => state === 'Outside India')
                                                                        .map((state) => (
                                                                            <option key={state} value={state}>
                                                                                {state}
                                                                            </option>
                                                                        ))
                                                                )
                                                            )

                                                        }
                                                    </select>
                                                    {error && error.state && <span className='danger'>{error.state}</span>}
                                                </div>
                                            </div>

                                            <p style={{ marginTop: '20px' }}>Simandhar education is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.</p>

                                            <div className="check-box-filed " id='check-box-filed1' onClick={handleCheckBtn}>
                                                <div className='chech-box-input'>
                                                    {agree ? <input type="checkbox" checked id='check-box-filed' /> : <input type="checkbox" id='check-box-filed' />}
                                                </div>
                                                <div className="check-box-heading"  >
                                                    <p>Tick the checkbox to read and accept </p>
                                                    <button type='button'>Terms and Conditions*</button>
                                                </div>
                                            </div>
                                        </form>


                                        {/* PAYMENT GETWAY INTEGRATION */}
                                        {/* <div className="payent-getway mt-5">
                                    <div className="title02">Payment method</div>
                                </div> */}

                                        {/* ORDER LISTS */}
                                        <div className="order-list mt-5">
                                            <h3 className="title02">Order details</h3>
                                            {
                                                cartData.courses ? (
                                                    cartData.courses.map((cartItem, index) => {
                                                        return (
                                                            <>
                                                                <div className="flex mt-2" key={cartItem._id}>
                                                                    <div className="flex">
                                                                        <p className="id"> {`${index + 1}.` + " "} </p>
                                                                        <p className="name">{cartItem.title}</p>
                                                                    </div>
                                                                    <div className="price-flex">
                                                                        <p className="price">{cartItem.price && formatAmount(cartItem.price.totalPrice) || 0}</p>
                                                                        <p className="price"> <strike> {cartItem.price && formatAmount(cartItem.price.discountPrice) || 0}</strike></p>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                ) : ('')
                                            }
                                        </div>
                                    </div>
                                    {/* SUMMARY BOX  */}
                                    <div className='summary-box'>
                                        <h3 className="title02">Summary</h3>
                                        {/* <div className='box'>
                                            <div className="flex">
                                                <p className="ogriginal-price">Original Price:</p>
                                                <p className="price">{cartData.totalPrice && formatAmount(cartData.totalPrice.discountPrice  || 0)}</p>
                                            </div>
                                            <div className="flex">
                                                <p className="Discount-price">Discounts:</p>
                                                <p className="price">-{formatAmount(cartData.totalPrice && cartData.totalPrice.discountPrice - cartData.totalPrice.totalPrice || 0)}</p>
                                            </div>
                                        </div> */}
                                        <div className='box mt-2'>
                                            <div className="flex bold">
                                                <p className="Subtotal">Subtotal</p>
                                                <p className="price">{cartData.totalPrice && formatAmount(cartData.totalPrice.totalPrice / 1.18 || 0)}</p>
                                            </div>
                                            <div className="flex bold">
                                                {formValues.state === 'Telangana' ? (<p className="Subtotal">Taxes (SGST 9% + CGST 9% ) </p>) : (<p className="Subtotal">Taxes (IGST 18%) </p>)}
                                                <p className="price">{formatAmount(cartData.totalPrice?.tax?.igst)}</p>
                                            </div>
                                            {/* <div className="flex">
                                        <p className="Discount-price">Discounts:</p>
                                        <p className="price">-{cartData.totalPrice.discountPrice - cartData.totalPrice.totalPrice}</p>
                                    </div> */}
                                        </div>
                                        <div className="flex mt-2">
                                            <p className='title01'>Total:</p>
                                            <p className="heading03">
                                                {cartData.totalPrice && formatAmount(cartData.totalPrice.totalPrice) || 0}
                                            </p>
                                        </div>
                                        <div className='CFA'>
                                            <p>**Convenience Fees Applicable</p>
                                        </div>
                                        <div className={`checkoutBtn check-out-button ${checkOutBtn === true && 'active'}`} id="check-out-button">
                                            <button className={`btn maroon-btn maroon-btn-arrow ${isButtonDisabled.billingAddress || isButtonDisabled.handlePayment ? 'disabled' : ''}`} disabled={isButtonDisabled.billingAddress || isButtonDisabled.handlePayment} onClick={(e) => handlePayment(e)}>Complete Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </section>

            <div className={`agree-popup ${popup && 'active'}`} id='agree-popup'>
                <CheckOutPopup closePopup={HandleClosePopup} agreePopup={handleAgreeBtnInPopup} />
            </div>
            <div className='download-overlay' style={{ display: isShow ? 'block' : 'none' }}></div>
            <div className="signup-popup mt-2" style={{ display: !isShow ? 'none' : 'block' }}>
                <div className="box text-center" >
                    <span className='close-pp' onClick={() => showDwnPopup()} style={{ display: isShow ? 'block' : 'none' }}>
                        <Image loading='lazy' src="/img/brown_cross.png" alt="cancel button" fill={true} sizes='100vw' className='resp-img' />
                    </span>
                    <h3>You already bought some products from your </h3>
                    <h4>Please remove the following items, then you can proceed with checkout</h4>
                    {
                        alreadyBoughtCourses && alreadyBoughtCourses.map((item, index) => (
                            <Link href={`/courseDetail/${item.sequence}`}>{item.title}</Link>
                        ))
                    }
                    <div className='flex mt-2' >
                        <button className='btn maroon-btn' onClick={() => handleModalActions()}>CART</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default checkout; 