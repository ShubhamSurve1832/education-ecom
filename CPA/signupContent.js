import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import axios from 'axios';

import { isEmailDisallowed, validateEmail, validateMobile } from '../utils';
import { FRONTEND_BASE_URL, PostActivityLeadAPI, ReferralFormAPI, ReferrarLeadCreate, urlConstants as urlConstant, urlConstants } from '../constants/urlConstants';
import { statusConstants as statusConstant } from '../constants/statusCodes';
import { listOfCountries, listOfStates } from '../constants/place'
import { toast } from 'react-hot-toast';
import moment from 'moment/moment';
import secureLocalStorage from 'react-secure-storage';

const signupContent = ({ formName }) => {

    let Date = moment().format('Y-M-D')?.split('-')
    Date[1] < 10 && Date.splice(1,1,0+""+Date[1])
    Date[2] < 10 && Date.splice(2,1,0+""+Date[2])

    let Time = moment().format('h:mm:ss')?.split(':')
    Time[0] < 10 && Time.splice(0,1,0+""+Time[0]) 
    // Time[2] < 10 && Time.splice(2,1,0+""+Time[2]) 

    // console.log(Date.join('-')+" "+Time?.join(':'));

    const router = useRouter();
    const form = { fullName: "", email: "", password: "", mobileNumber: "", gender: "", state: "", country: "" };

    const [formValues, setFormValues] = useState(form);
    const [error, setError] = useState(form);
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [apiError, setApiError] = useState('');
    const[resProspectusId,setResProspectusId] = useState('')

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
    // console.log(formValues.gender)

    const isValid = () => {
        const errors = {};

        if (!formValues.fullName) {
            errors.fullName = 'Please enter your full name.';
        }

        if (!formValues.email) {
            errors.email = 'Please enter your email.';
        } else if (!validateEmail(formValues.email)) {
            errors.email = 'Invalid email address.';
        } else if (isEmailDisallowed(formValues.email)) {
            errors.email = 'Email addresses from this domain are not allowed.';
        }

        if (!formValues.password) {
            errors.password = 'Please enter your password.';
        }

        if (!formValues.mobileNumber) {
            errors.mobileNumber = 'Please enter your mobile number.';
        }

        if (!formValues.gender) {
            errors.gender = 'Please select your gender.';
        }

        if (!formValues.state) {
            errors.state = 'Please select your state.';
        }

        if (!formValues.country) {
            errors.country = 'Please enter your country.';
        }

        setError(errors);

        return Object.keys(errors).length === 0;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError({});
        setApiError('');
        try {
            setButtonDisabled(true);
            if (isValid()) {
                

                let LeadData = [
                    {
                        "Attribute": "FirstName",
                        "Value": formValues.fullName
                    },
                    {
                        "Attribute": "EmailAddress",
                        "Value": formValues.email
                    },
                    {
                        "Attribute": "Phone",
                        "Value": formValues.mobileNumber
                    },{
                        "Attribute": "mx_Course",
                        "Value": ""
                    },
                    // {
                    //     "Attribute": "mx_Ecommerce_Course",
                    //     "Value": ""
                    // },
                    // ,                            ,
                    // {
                    //     "Attribute": "mx_Order_Transaction_Id",
                    //     "Value": ""
                    // },
                    {
                        "Attribute": "mx_Student_or_Professional",
                        "Value": "Student"
                    },
                    {
                        "Attribute": "Source",
                        "Value": "ECommerce"
                    },
                    {
                        "Attribute": "SearchBy",
                        "Value":"EmailAddress"
                    }                    
                ]

                // const response = await axios.post(urlConstant.signUp, object);
                // if (response.status === statusConstant.created) {
                   
                    const CaptureResponse = await axios.post(ReferralFormAPI, LeadData,
                    {
                        headers:{"Content-Type" : 'application/json'}
                    });
                    //  console.log("capture api",CaptureResponse.data.Message.RelatedId)
                     setResProspectusId(CaptureResponse.data.Message.RelatedId)
                    //  console.log(CaptureResponse.data.Message.RelatedId + "Testttt");
                     const object = {
                        fullName: formValues.fullName,
                        email: formValues.email,
                        password: formValues.password,
                        mobileNumber: formValues.mobileNumber,
                        gender: formValues.gender,
                        state: formValues.state,
                        country: formValues.country,
                        tncAccepted: true,
                        prospectusId:CaptureResponse.data.Message.RelatedId
                    }
                    console.log(object);
                    let postactivity = {
                        "RelatedProspectId": CaptureResponse.data.Message.RelatedId,
                        "ActivityEvent": 255,
                        "ActivityNote": "Signup Activity",
                        "ProcessFilesAsync": true,
                        // "ActivityDateTime": Date.join('-')+" "+Time?.join(':'),                        
                        "Fields": [
                            {
                                "SchemaName": "FirstName",
                                "Value": formValues.fullName
                            },
                            {
                                "SchemaName": "EmailAddress",
                                "Value": formValues.email
                            },
                            {
                                "SchemaName": "Phone",
                                "Value": formValues.mobileNumber
                            },{
                                "SchemaName": "mx_Course",
                                "Value": ""
                            },
                            {
                                "SchemaName": "mx_Student_or_Professional",
                                "Value": "Student"
                            },
                            {
                                "SchemaName": "Source",
                                "Value": "ECommerce"
                            },
                            {
                                "SchemaName": "SearchBy",
                                "Value":"EmailAddress"
                            }
                    // {
                            //     "Attribute": "mx_Ecommerce_Course",
                            //     "Value": ""
                            // },                            ,
                            // {
                            //     "Attribute": "mx_Order_Transaction_Id",
                            //     "Value": ""
                            // },
                        ]
                        }

                    if(CaptureResponse.status === 200){
                        const response = await axios.post(urlConstant.signUp, object);
                        const ActivityResponse = await axios.post(PostActivityLeadAPI, postactivity,
                        {
                            headers:{"Content-Type":"application/json"}
                        });
                        console.log(ActivityResponse)
                        secureLocalStorage.setItem('RelatedProspectId',ActivityResponse?.data?.Message?.RelatedId)
                        router.push({
                            pathname: '/login',
                            query: { signUpMessage: response.data.message }, // Pass the value as a query parameter
                        });
                    }else{
                        console.log("Error at PostActivityLeadAPI line number 203")
                    }
                   
                // }              

                // let leadData = {
                //     emailAddress: formValues.email,
                //     firstName: formValues.fullName,
                //     phone: formValues.mobileNumber,
                //     mxLeadSubSource: formName 
                // }
                // SendDataToLead(leadData, urlConstant.commonForm) 
                

            }
        } catch (error) {
            console.log(error.response.status)
            if (error.response.status === statusConstant.removed ) {
                showDwnPopup()
                // console.log("Reached here")
                // setError({ email: 'Email already exists. Please use a different email.' });
            } else {
                toast.error(error.response.data.ExceptionMessage ||error.response.data.message || 'Something Went wrong, please try again.')
                console.log(error);

            }
        } finally {
            setButtonDisabled(false);
        }
    }

    // const SendDataToLead = async (data, url)=>{
    //     try{
    //         let response = await axios.post(url,data, {
    //             headers:{
    //                 "Content-Type":"application/json"
    //             }
    //         })           
    //     } catch(err){
    //         console.log(err.message)
    //     }
    // }

    const handleModalActions = async (action) => {
        if (action === 'Yes') {
            try {
                const data = {
                    email: formValues.email,
                    reRedirectUrl: FRONTEND_BASE_URL + "newpassword"
                }

                const response = await axios.post(urlConstants.createAlphaUser, data);
                if (response.status === statusConstant.ok) {
                    router.push({
                        pathname: '/login',
                        query: { resetPasswordSignupMessage: response.data.message }, // Pass the value as a query parameter
                    });
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        } else if (action === 'No') {
            showDwnPopup()
        }
    }

    const [isShow, setIsShow] = useState(false);
    const showDwnPopup = () => {
        setIsShow(!isShow);
    };
    return (
        <>
            <section className='loginPage mt-4'>
                <div className="banner">
                    <div className="bannerImg">
                        <Image loading='lazy' src="/img/loginBg.png" alt="" fill={true} sizes='100vw' className='resp-img' />
                    </div>
                    <div className="bannerTxt">
                        <h2 className="heading02">Start Learning with Simandhar</h2>
                    </div>
                </div>
                <div className="loginFields">
                    <div className="usersClick">
                        <Link className="heading04 active" href="/signup">Sign Up</Link>
                        <Link className="heading04" href="/login">Login</Link>
                    </div>

                    <form action="" className='loginform mt-4'>
                        <div className="inputFields">
                            <input type="text" name="fullName" placeholder='Enter Full name' onChange={(e) => handleChange(e)} />
                            {error && error.fullName && <span className='danger'>{error.fullName}</span>}
                        </div>
                        <div className="inputFields mt-4">
                            <input type="text" name="email" placeholder='Enter Email' onChange={(e) => handleChange(e)} />
                            {error && error.email && <span className='danger'>{error.email}</span>}
                        </div>
                        <div className="inputFields mt-4">
                            <input type="password" name="password" placeholder='Password' onChange={(e) => handleChange(e)} />
                            {error && error.password && <span className='danger'>{error.password}</span>}
                        </div>
                        <div className="inputFields mt-4">
                            <input type="tel" name="mobileNumber" placeholder='Enter Mobile Number' onChange={(e) => handleChange(e)} />
                            {error && error.mobileNumber && <span className='danger'>{error.mobileNumber}</span>}
                        </div>
                        <div className='inputFields sradio-box mt-4'>
                            <span className='gender'>Gender</span>
                            <div className='radio-box'>
                                <input type="radio" name="gender" value="female" onChange={(e) => handleChange(e)} checked={formValues.gender==="female"} />
                                <label htmlFor="html">Female</label>
                            </div>
                            <div className='radio-box'>
                                <input type="radio" name="gender" value="male" onChange={(e) => handleChange(e)} checked={formValues.gender==="male"}/>
                                <label htmlFor="html">Male</label>
                            </div>
                            {error && error.gender && <span className='danger mt-3'>{error.gender}</span>}
                        </div>
                        <div className=" dropdown-signup input-box custom-select mt-4">
                            <select name="country" placeholder="Select Country" onChange={(e) => handleChange(e)}>
                                <option value="" selected="">Country</option>
                                {
                                    listOfCountries
                                        .sort((a, b) => a.localeCompare(b))
                                        .map((country, index) => {
                                            // console.log(states)
                                            return (
                                                <>
                                                    <option value={country} key={index}>{country}</option>
                                                </>
                                            )

                                        })
                                }
                            </select>
                            {/* <button onClick={handleRedirect}>Go to Next Page</button> */}
                            {error && error.country && <span className='danger'>{error.country}</span>}
                        </div>
                        <div className=" dropdown-signup input-box custom-select mt-4">
                            <select name="state" placeholder="Select State" onChange={(e) => handleChange(e)}>
                                <option value="" selected="">State</option>
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
                            {apiError && <span className='danger'>{apiError}</span>}
                        </div>

                    </form>

                    <div className='download-overlay' style={{ display: isShow ? 'block' : 'none' }}></div>
                    <div className="signup-popup mt-2" style={{ display: !isShow ? 'none' : 'block' }}>
                        <div className="box text-center" >
                            <span className='close-pp' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}>
                                <Image loading='lazy' src="/img/brown_cross.png" alt="cancel button" fill={true} sizes='100vw' className='resp-img' />
                            </span>
                            <h3>You already have an account  with the Simandhar LMS (Alphalearn).</h3>
                            <h4>Please click on 'Yes' to connect your new Simandhar Account with the existing LMS Account.</h4>
                            <h4>Alternatively, click 'No' to continue signup with a new Simandhar Account, using a different email address.</h4>
                            <div className='flex mt-2' >
                                <button className='btn maroon-btn' onClick={() => handleModalActions('Yes')}>YES</button>
                                <button className='btn maroon-btn' onClick={() => handleModalActions('No')}>NO</button>
                            </div>
                        </div>


                    </div>
                    <div className="twoBtm mt-4">
                        <div className="loginBtn ">
                            <button className={`btn maroon-btn maroon-btn-arrow ${isButtonDisabled ? 'disabled' : ''}`} onClick={(e) => handleSubmit(e)} disabled={isButtonDisabled}>{isButtonDisabled ? 'Signing up...' : 'Sign Up'}</button>
                        </div>
                    </div>

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

export default signupContent