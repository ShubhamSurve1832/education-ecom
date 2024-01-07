import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import { urlConstants as urlConstant } from '../constants/urlConstants';
import { statusConstants as statusConstant } from '../constants/statusCodes';
import { toast } from 'react-hot-toast';

const newPasswordContent = () => {
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const router = useRouter();
    const { cet } = router.query;

    const [formValues, setFormValues] = useState({ password: "", confirmPassword: "" });
    const [error, setError] = useState({ password: "", confirmPassword: "", passwordMismatched: "" });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    const isValid = () => {
        const errors = {};
        if (!formValues.password) {
            errors.password = 'Please enter a password.';
        }
        if (!formValues.confirmPassword) {
            errors.confirmPassword = 'Please re-enter your password.';
        }
        if (formValues.confirmPassword && formValues.password !== formValues.confirmPassword) {
            errors.passwordMismatched = 'Passwords do not match!';
        }

        setError(errors);
        return Object.keys(errors).length === 0; // Returns true if there are no errors
    };

    const handleSubmit = async () => {
        setButtonDisabled(true);
        setError({})
        try {
            if (isValid()) {
                const object = {
                    token: cet,
                    password: formValues.password,
                    // confirmPassword: formValues.confirmPassword
                }
                const response = await axios.post(urlConstant.resetPassword, object);

                if (response.status === statusConstant.ok) {
                    toast.success('Password updated successfully!');
                    router.push({
                        pathname: '/login',
                        query: { resetPasswordMessage: response.data.message + " Please login now" }, // Pass the value as a query parameter
                    });
                }
            }
        } catch (error) {
            if (error.response && error.response.status === statusConstant.badRequest) {
                toast.error('Token is invalid or expired!');
            } else {
                toast.error('An error occurred during setting new password. Please try again later.');
            }
        } finally {
            setButtonDisabled(false);
        }

    }
    return (
        <>
            <section className='loginPage forgotPage mt-4'>
                <div className="banner">
                    <div className="bannerImg">
                        <Image loading='lazy' src="/img/loginBg.png" alt="login button" fill={true} sizes='100vw' className='resp-img' />
                    </div>
                    <div className="bannerTxt">
                        <h2 className="heading02">Take the next steps in your career with Simandhar</h2>
                    </div>
                </div>
                <div className="loginFields">
                    <div className="usersClick">
                        <Link className="heading04" href="">Choose New Password</Link>
                    </div>
                    <p className='mt-4'>Almost done. Enter your new password and you’re all set</p>
                    <form action="" className='loginform mt-4'>
                        <div className="inputFields">
                            <input type="password" name="password" placeholder='New password' onChange={(e) => handleChange(e)} />
                            {error && error.password && <span className='danger'>{error.password}</span>}
                        </div>
                        <div className="inputFields mt-4">
                            <input type="password" name="confirmPassword" placeholder='Confirm new password' onChange={(e) => handleChange(e)} />
                            {error && error.confirmPassword && <p className='danger'>{error.confirmPassword}</p>}
                            {error && error.passwordMismatched && <p className='danger'>{error.passwordMismatched}</p>}
                        </div>
                    </form>
                    <div className="twoBtm mt-4">
                        <div className="loginBtn ">
                            <button className={`btn maroon-btn maroon-btn-arrow ${isButtonDisabled ? 'disabled' : ''}`} onClick={(e) => handleSubmit(e)}>
                                {isButtonDisabled ? 'Wait...' : 'Reset Password'}
                            </button>
                        </div>
                    </div>
                    <p className='mt-4'>Back to<Link href="/login"> Log in</Link></p>
                </div>
            </section>
        </>
    )
}

export default newPasswordContent