import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { isEmailDisallowed, validateEmail } from '../utils';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import _ from 'lodash'

import { urlConstants as urlConstant, FRONTEND_BASE_URL } from '../constants/urlConstants';
import { statusConstants as statusConstant, statusConstants } from '../constants/statusCodes';
import { useRouter } from 'next/router';

const forgotContent = () => {
    const router = useRouter();
    const { message, email } = router.query;
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const [formValues, setFormValues] = useState({ email: "" });
    const [error, setError] = useState({ email: "" });
    const [btnText, setBtnText] = useState('Submit')

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
    let emailid = _.get(formValues, "email");

    const isValid = () => {
        const errors = {};

        if (!formValues.email) {
            errors.email = 'Please enter your email!';
        } else {
            const isValidEmail = validateEmail(formValues.email);
            if (!isValidEmail) {
                errors.email = 'Invalid email address';
            }else if (isEmailDisallowed(formValues.email)) {
                errors.email = 'Email addresses from this domain are not allowed.';
            }
        }

        setError(errors);
        return Object.keys(errors).length === 0;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isValid()) {
                setButtonDisabled(true);
                setBtnText('Submitting...')
                const object = {
                    email: formValues.email,
                    reRedirectUrl: FRONTEND_BASE_URL + "newpassword"
                }
                const response = await axios.post(urlConstant.forgotPassword, object);

                if (response.status === statusConstant.ok) {
                    setButtonDisabled(true);
                    setBtnText('Email Sent...')
                    toast.success(`Your Password Reset link has been sent to ${emailid}`);
                }
            }
        } catch (error) {
            console.log("🚀 ~ file: forgotContent.js:65 ~ handleSubmit ~ error:", error)
            if (error.response.status === statusConstants.badRequest) {
                setButtonDisabled(false);
                setBtnText('Submit');
                toast.error(error.response.data.message);
            } else {
                toast.error('An error occurred during forgot password. Please try again later.');
                setButtonDisabled(false);
            }
        }
    }

    useEffect(() => {
        if (email) {
            setFormValues({ ...formValues, email: email });
        }
    }, [email]);
    return (
        <>
            <section className='loginPage forgotPage mt-4'>
                <div className="banner">
                    <div className="bannerImg">
                        <Image loading='lazy' src="/img/loginBg.png" alt="login button" fill={true} sizes='100vw' className='resp-img' />
                    </div>
                    <div className="bannerTxt">
                        <h2 className="heading02">Simandhar bridges the gap between you and potential employers</h2>
                    </div>
                </div>
                <div className="loginFields">
                    <div className="usersClick">
                        <Link className="heading04" href="">Forgot Password</Link>
                    </div>
                    <p className='mt-4'>Please enter your email address below and we will send you an email with
                        <br /> instructions on how to reset your password.</p>
                    <form className='loginform mt-4'>
                        <div className="inputFields">
                            <input type="text" name="email" placeholder='Enter Email' onChange={(e) => handleChange(e)} defaultValue={email && email} />
                            {error && <span className='danger'>{error.email}</span>}
                            {message && <span className='success'>{message}</span>}
                        </div>
                        <div className="twoBtm mt-4">
                            <div className="loginBtn ">
                                <button className={`btn maroon-btn maroon-btn-arrow ${isButtonDisabled ? 'disabled' : ''}`} onClick={(e) => handleSubmit(e)} disabled={isButtonDisabled}>
                                    {btnText}
                                </button>
                            </div>
                        </div>
                    </form>
                    <p className='mt-4'>Back to<Link href="/login" className='bold'> Log in</Link></p>
                </div>
            </section>
        </>
    )
}

export default forgotContent