import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import AccountSideBar from '../components/SideNavBar'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from "../components/footer";
import { isEmailDisallowed, validateEmail } from '../utils'
import axios from 'axios'
import { urlConstants } from '../constants/urlConstants'
import { AUTH_KEY_NAME, statusConstants } from '../constants/statusCodes'
import { toast } from 'react-hot-toast'
import { getCookie } from 'cookies-next'


const security = () => {

    const router = useRouter();
    const form = { oldPassword: "", password: "", confirmPassword: "" };

    const [formValues, setFormValues] = useState(form);
    const [error, setError] = useState(form);
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [apiError, setApiError] = useState('');
    const [userData, setUserData] = useState(null);

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            // Access localStorage here
            const user = JSON.parse(localStorage.getItem(AUTH_KEY_NAME));
            setUserData(user)
        }
    }, []);

    const isValid = () => {
        const errors = {};

        if (!formValues.oldPassword) {
            errors.oldPassword = 'Please enter your old password.';
        }

        if (!formValues.password) {
            errors.password = 'Please enter your password.';
        }

        if (!formValues.confirmPassword) {
            errors.confirmPassword = 'Please confirm your password.';
        }

        if (formValues.password && formValues.confirmPassword && formValues.password !== formValues.confirmPassword) {
            errors.confirmPassword = 'Both passwords should match!';
        }

        if (formValues.oldPassword && formValues.confirmPassword && formValues.oldPassword === formValues.confirmPassword) {
            errors.confirmPassword = 'Old & new password cannot be the same!';
        }

        setError(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        // console.log('ik');
        e.preventDefault();
        setError({});
        setApiError('');
        try {
            if (isValid()) {
                setButtonDisabled(true);
                const object = {
                    oldPassword: formValues.oldPassword,
                    password: formValues.password,
                    confirmPassword: formValues.confirmPassword,
                }

                const headers = {
                    Authorization: `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`,
                }

                const response = await axios.post(urlConstants.changePassword, object, { headers: headers });
                // console.log("🚀 ~ file: security.js:83 ~ handleSubmit ~ response:", response, response.status)

                if (response.status === statusConstants.ok) {
                    toast.success('Password has been changed successfully')
                }
            }
        } catch (error) {
            console.log("🚀 ~ file: security.js:94 ~ handleSubmit ~ error:", error)
            if (error.response && error.response.status === statusConstants.conflict) {
                toast.error(error.response.data.message)
            } else {
                setApiError('An error occurred during sign-up. Please try again later.');
            }
            setApiError(error.response.data.message);
            setButtonDisabled(false);
        } finally {
            setButtonDisabled(false);
        }
    }

    return (
        <>
            <Head>
                <title>Account Security - Simandhar Education</title>
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
            <div className='my-account-header'>
                <Header />
            </div>
            <div className='relative'>
                <AccountSideBar />
                <section className='security-page profile NewOneProfile'>

                    <div className="container">
                        <h4 className="heading04">Account Security</h4>
                        <div className='form'>
                            <div>
                                <div className='input-box'>
                                    <input type="password" name="oldPassword" placeholder='Enter Old Password' onChange={(e) => handleChange(e)} defaultValue={userData && userData.oldPassword} autoComplete='off' />
                                    {error.oldPassword && <span className='error-message'>{error.oldPassword}</span>}
                                </div>
                                <div className="input-box">
                                    <input type="password" name='password' placeholder='Enter New Password' onChange={(e) => handleChange(e)} />
                                    {error.password && <span className='error-message'>{error.password}</span>}
                                </div>
                                <div className="input-box">
                                    <input type="password" name='confirmPassword' placeholder='Re-type New Password' onChange={(e) => handleChange(e)} />
                                    {error.confirmPassword && <span className='error-message'>{error.confirmPassword}</span>}
                                    {apiError && <span className='error-message'>{apiError}</span>}
                                </div>
                            </div>
                            <div className='input-box sbt-btn'>
                                <button className={`btn maroon-btn maroon-btn-arrow ${isButtonDisabled ? 'disabled' : ''}`} onClick={(e) => handleSubmit(e)}>Change Password</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default security