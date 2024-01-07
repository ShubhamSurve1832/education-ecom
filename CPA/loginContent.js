import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';

import { urlConstants as urlConstant, urlConstants } from '../constants/urlConstants';
import { AUTH_KEY_NAME, statusConstants as statusConstant, statusConstants, token } from '../constants/statusCodes';
import { isEmailDisallowed, isUserLoggedIn, validateEmail } from '../utils';
import { useSelector, useDispatch } from "react-redux";
import { addToCartAction } from '../redux/actions/cart';
import { updateUserAction } from '../redux/actions/user';
import secureLocalStorage from 'react-secure-storage';

const loginContent = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);


    const { signUpMessage, resetPasswordMessage, resetPasswordSignupMessage } = router.query;

    const [formValues, setFormValues] = useState({ email: "", password: "" });
    const [error, setError] = useState({ email: "", password: "" });
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState('');
    const [cartData, setCartData] = useState([]);


    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    const isValid = () => {
        const errors = {};

        if (!formValues.email) {
            errors.email = 'Please enter your email.';
        } else {
            const isValidEmail = validateEmail(formValues.email);
            if (!isValidEmail) {
                errors.email = 'Invalid email address.';
            } else if (isEmailDisallowed(formValues.email)) {
                errors.email = 'Email addresses from this domain are not allowed.';
            }
        }

        if (!formValues.password) {
            errors.password = 'Please enter your password.';
        }

        setError(errors);

        return Object.keys(errors).length === 0; // Returns true if there are no errors
    };


    const getCart = async () => {
        try {
            setButtonDisabled(true);
            const headers = {
                Authorization: `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`,
            }
            const response = await axios.get(urlConstant.getCart, { headers: headers });

            if (response.status === statusConstant.ok) {
                response.data.courses.map((cartItem) => {
                    dispatch(addToCartAction(cartItem));
                });
            }

            setLoading(false);
        } catch (error) {
            setError('Error retrieving cart data.');
            setLoading(false);
            setButtonDisabled(false);
        } finally {
            setButtonDisabled(false);
        }
    };

    const handleCart = async (e, course) => {
        // console.log("🚀 ~ file: loginContent.js:77 ~ handleCart ~ course:", course)
        e.preventDefault();
        if (!course.inCart) {
            try {
                const defaultMessage = 'You can add only one CPA Course bundle - Becker Unlimited or Becker Limited.';
                if (course.sequence === 1) {
                    if (cartItems.some(item => item.sequence === 2)) {
                        toast.error(defaultMessage);
                        return;
                    }
                } else if (course.sequence === 2) {
                    if (cartItems.some(item => item.sequence === 1)) {
                        toast.error(defaultMessage);
                        return;
                    }
                }
            } catch (error) {
                // console.log("🚀 ~ file: CourseList.js:28 ~ handleCart ~ error:", error)
            }
        }
        try {
            setButtonDisabled(true);
            const token = `${getCookie(AUTH_KEY_NAME) ? getCookie(AUTH_KEY_NAME) : ''}`
            if (token) {
                const headers = {
                    Authorization: `JWT ${token}`,
                }
                try {
                    const object = {
                        courseId: course._id
                    }
                    let response = await axios.post(urlConstants.addToCart, object, { headers: headers });
                    if (response.status === statusConstants.ok) {
                        dispatch(addToCartAction(course));
                    }
                } catch (error) {
                    // console.log("🚀 ~ file: CourseList.js:41 ~ handleCart ~ error:", error)
                    toast.error('An error occurred during adding to cart. Please try again later.', error)
                } finally {
                    setButtonDisabled(false);
                }
            }
        } catch (error) {
            setButtonDisabled(false);
            // console.log("🚀 ~ file: loginContent.js:125 ~ handleCart ~ error:", error)
        } finally {
            setButtonDisabled(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError({});
        router.query = {}

        setApiError('');
        try {
            if (isValid()) {
                setButtonDisabled(true);
                const object = {
                    email: formValues.email,
                    password: formValues.password
                }
                const response = await axios.post(urlConstant.signIn, object);

                if (response.status === statusConstant.ok) {
                    const headers = {
                        Authorization: `JWT ${response.data.token}`,
                    }
                    secureLocalStorage.setItem("RelatedProspectId",response.data.prospectusId)
                    // Call Student
                    const studentProfile = await axios.get(urlConstant.studentProfile, { headers: headers })
                    const mergedObject = { ...response.data, ...studentProfile.data };

                    setCookie(AUTH_KEY_NAME, mergedObject.token, {
                        expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
                    });

                    localStorage.setItem(AUTH_KEY_NAME, JSON.stringify(mergedObject));
                    dispatch(updateUserAction(JSON.parse(localStorage.getItem(AUTH_KEY_NAME))));
                    // Get Current Cart Items & then push it to cart.
                    // console.log('cartItems ====>', cartItems);

                    for (let cart of cartItems) {
                        await handleCart(e, cart)
                    }

                    // Call Cart    
                    await getCart();

                    const redirectTo = router.query.redirectTo || '/';

                    router.push({
                        pathname: redirectTo,
                    });

                } else if (response.status === statusConstant.Unauthorized) {
                    setApiError(response.data.message);
                } else if (response.status === statusConstant.conflict) {
                    if (!response.data.isSynced) {
                        // Show Modal
                    }
                }
            }
        } catch (error) {
            // console.log("🚀 ~ file: loginContent.js:187 ~ handleSubmit ~ error:", error)
            if (error.response && error.response.data.message) {
                setApiError(error.response.data.message);
            } else {
                setApiError('An error occurred during sign-in. Please try again later.');
            }
            setButtonDisabled(false);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <>
            <section className='loginPage mt-4'>
                <div className="banner">
                    <div className="bannerImg">
                        <Image loading='lazy' src="/img/loginBg.png" alt="login button" fill={true} sizes='100vw' className='resp-img' />
                    </div>
                    <div className="bannerTxt">
                        <h2 className="heading02">Accelerate your career with Simandhar</h2>
                    </div>
                </div>
                <div className="loginFields">
                    <div className="usersClick">
                        <Link className="heading04" href="/signup">Sign Up</Link>
                        <Link className="heading04 active" href="/login">Login</Link>
                    </div>

                    <form action="" className='loginform mt-4'>
                        <div className="inputFields">
                            <input type="text" name="email" placeholder='Enter Email' onChange={(e) => handleChange(e)} onKeyDown={handleKeyDown} />
                            {error && <span className='danger'>{error.email}</span>}
                        </div>
                        <div className="inputFields mt-4">
                            <input type="password" name="password" placeholder='Password' onChange={(e) => handleChange(e)} onKeyDown={handleKeyDown} />
                            {error && <span className='danger'>{error.password}</span>}
                        </div>
                        {signUpMessage && <span className='success'>{signUpMessage}</span>}
                        {resetPasswordMessage && <span className='success'>{resetPasswordMessage}</span>}
                        {resetPasswordSignupMessage && <span className='success'>{resetPasswordSignupMessage}</span>}
                        {apiError && <span className='danger'>{apiError}</span>}
                    </form>
                    <div className="twoBtm mt-4">
                        <div className="loginBtn ">

                            <button className={`btn maroon-btn maroon-btn-arrow ${isButtonDisabled ? 'disabled' : ''}`} onClick={(e) => handleSubmit(e)} disabled={isButtonDisabled}>{isButtonDisabled ? 'Logging in...' : 'Login'}</button>
                        </div>
                        <div className="forrgotBtn">
                            <Link href="/forgot"><p>Forgot Password</p></Link>
                        </div>
                    </div>
                    { }

                    {/* <div className="loginoption mt-4">
                        <h2 className="heading04">Or Login With </h2>
                    <Link href="/shoppingCart"><Image loading='lazy' src="/img/google-login.png" alt=""fill={true} sizes='100vw' className='resp-img' /></Link>
                    <Link href="/shoppingCart"><Image loading='lazy' src="/img/facebook-login.png" alt=""fill={true} sizes='100vw' className='resp-img' /></Link>
                    </div> */}

                </div>
            </section>
        </>
    )
}

export default loginContent