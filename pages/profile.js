import React, { useState, useEffect } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { isEmailDisallowed, isUserLoggedIn, validateEmail } from '../utils/index';
import axios from 'axios'

import AccountSideBar from '../components/SideNavBar'
import Head from 'next/head'
import Header from '../components/Header'
import { urlConstants } from '../constants/urlConstants'
import { AUTH_KEY_NAME, statusConstants } from '../constants/statusCodes'
import { getCookie } from 'cookies-next'
import Spinner from '../components/comman/Spinner'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { updateUserAction } from './../redux/actions/user'
import secureLocalStorage from 'react-secure-storage';

const profile = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [error, setError] = useState({});
    // ADD WORK EXPERIANCE 
    const experienceFelids = { companyName: "", industry: "", startYear: "", endYear: "", functionalArea: "" };
    const [workExperience, setWorkExperience] = useState([experienceFelids]);

    const handleChange = (index, event) => {
        setbtnDisabled(false);
        const values = [...workExperience];
        values[index][event.target.name] = event.target.value;
        setWorkExperience(values);
    };
    const handleAdd = () => {
        const values = [...workExperience];
        values.push(experienceFelids);
        setWorkExperience(values);
        toast.success('Work experience Field has been added!')
    };
    const handleRemove = (index) => {
        const values = [...workExperience];
        values.splice(index, 1);
        setWorkExperience(values);
        toast.success(`Field for work experience has been removed`)
    };

    const getUserInfo = async () => {
        setLoading(true)
        try {
            const headers = {
                Authorization: `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`,
            }
            const response = await axios.get(urlConstants.studentProfile, { headers: headers });
            if (response.status === statusConstants.ok) {
                dispatch(updateUserAction(response.data))
                setValues(response.data);
                setWorkExperience(response.data.workExperience || [])
            }
        } catch (error) {
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getUserInfo();
    }, []);


    const [btnDisabled, setbtnDisabled] = useState(true);
    const handleBasicProfileChange = (e) => {
        setbtnDisabled(false);
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    const [workExperienceErrors, setWorkExperienceErrors] = useState([]);

    const validateFormValues = (workExperience) => {
        let errors = [];

        for (let i = 0; i < workExperience.length; i++) {
            let error = {};

            if (!workExperience[i].companyName) {
                error.companyName = 'Company name is required';
            }
            if (!workExperience[i].endYear) {
                error.endYear = 'End year is required';
            } else if (isNaN(workExperience[i].endYear)) {
                error.endYear = 'Enter valid End year';
            } else if (workExperience[i]?.endYear?.length >= 5) {
                error.endYear = 'Enter valid End year';

            }

            if (!workExperience[i].functionalArea) {
                error.functionalArea = 'Functional area is required';
            }
            if (!workExperience[i].industry) {
                error.industry = 'Industry is required';
            }
            if (!workExperience[i].startYear) {
                error.startYear = 'Start year is required';
            } else if (isNaN(workExperience[i].startYear)) {
                error.startYear = 'Enter valid Start year';
            } else if (workExperience[i]?.startYear?.length >= 5) {
                error.startYear = 'Enter valid Start year';

            }

            errors.push(error);

        }

        setWorkExperienceErrors(errors)
        return errors
    };

    let namevalid = /^[A-Za-z]+$/;
    const isValid = () => {
        const isValidEmail = validateEmail(values.email);
        const errors = {};

        if (!values.fullName) {
            errors.fullName = 'Please enter your full name.';
        }
        if (!namevalid.test(values.fullName.split(' ').join(''))) {
            errors.fullName = 'Please enter valid full name.';

        }

        if (!values.email) {
            errors.email = 'Please enter your email.';
        } else if (values.email && !isValidEmail) {
            errors.email = 'Invalid email address.';
        } else if (isEmailDisallowed(values.email)) {
            errors.email = 'Email address of this domain names are not allowed.';
        }

        if (!values.mobileNumber) {
            errors.mobileNumber = 'Please enter your mobile number.';
        } else if (isNaN(values.mobileNumber)) {
            errors.mobileNumber = 'Please enter valid mobile number';
        }

        const validationErrors = validateFormValues(workExperience);
        console.log("🚀 ~ file: profile.js:128 ~ isValid ~ validationErrors:", validationErrors)
        const filteredArray = validationErrors.filter((obj) => Object.keys(obj).length > 0);
        console.log("🚀 ~ file: profile.js:129 ~ isValid ~ filteredArray:", filteredArray)

        if (filteredArray.length > 0) {
            return false;
        }

        setError(errors);
        return Object.keys(errors).length === 0;
    }
    const handleSubmitProfile = async (e) => {
        e.preventDefault();
        const isValidOrNot = isValid();
        if (isValidOrNot) {
            try {
                setIsButtonDisabled(true);
                const object = {
                    fullName: values.fullName,
                    mobileNumber: values.mobileNumber,
                    gender: values.gender,
                    city: values.city,
                    country: values.country,
                    tncAccepted: values.tncAccepted,
                    profilePicture: values.profilePicture,
                    dob: values.dob,
                    workExperience: workExperience,
                    socialMediaProfile: {
                        fbProfile: values?.fbProfile,
                        linkedinProfile: values?.linkedinProfile,
                        twitterProfile: values?.twitterProfile,
                        userWebsite: values?.userWebsite,
                    },
                }
                const headers = {
                    Authorization: `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`,
                }

                const response = await axios.put(urlConstants.updateProfile, object, { headers: headers })

                if (response.status === statusConstants.ok) {
                    const lsData = JSON.parse(localStorage.getItem(AUTH_KEY_NAME));
                    lsData.fullName = values.fullName;
                    localStorage.setItem(AUTH_KEY_NAME, JSON.stringify(lsData))
                    dispatch(updateUserAction(lsData));
                    toast.success(response.data.message)
                }
            } catch (error) {
                console.log("🚀 ~ file: profile.js:124 ~ socialMediaProfile ~ error:", error)
                setIsButtonDisabled(false);
                toast.error(error.response.data.message)
            } finally {
                setIsButtonDisabled(false);
            }
        }

    }

    return (
        <>
            <Head>
                <title>Profile - Simandhar Education</title>
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
                <section className='profile NewOneProfile'>
                    <div className='container'>
                        <h4 className="heading04">Basic Information</h4>
                        {loading ? (<Spinner />) : (
                            <div className='form'>
                                <div>
                                    <div className='input-box'>
                                        <input
                                            type="text"
                                            name="fullName"
                                            pattern='/^[A-Za-z]+$/'
                                            placeholder='Enter Your Name'
                                            defaultValue={values && values.fullName}
                                            onChange={(e) => handleBasicProfileChange(e)}
                                        />
                                        {error && error.fullName && <span className='danger'>{error.fullName}</span>}
                                    </div>


                                    {/* <div className="input-box">
                                        <input type="text" name='lastName' placeholder='Enter Last Name ' defaultValue={lastName}
                                            {...register("lastName", {
                                                required: 'Last Name Required',
                                                pattern: {
                                                    value: /^[a-zA-Z]*$/,
                                                    message: 'Enter letters Only'
                                                },
                                                onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                            })}
                                            className={errors.name ? 'error-border' : null}
                                        />
                                        {errors.name && <span className='error-message'>{errors.name?.message}</span>}
                                    </div> */}

                                    <div className='input-box'>
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder='Enter Your Email Address'
                                            disabled
                                            defaultValue={values && values.email}
                                            onChange={(e) => handleBasicProfileChange(e)}
                                        />
                                        {error && error.email && <span className='danger'>{error.email}</span>}
                                    </div>

                                    <div className="input-box">
                                        <input type="tel" name="mobileNumber" defaultValue={values && values.mobileNumber} onChange={(e) => handleBasicProfileChange(e)} />
                                        {error && error.mobileNumber && <span className='danger'>{error.mobileNumber}</span>}
                                    </div>

                                    {/* <div className='input-box'>
                                        <DatePicker selected={selectedDate} name="dateOfBirth" onChange={date => setSelectedDate(date)} dateFormat="dd/MM/yyyy" maxDate={new Date()} showYearDropdown showMonthDropdown placeholderText='Enter DOB' defaultValue={date} />
                                    </div> */}
                                </div>

                                <div className="social-media-links form-box">
                                    <h3 className='title01'>Social Links</h3>
                                    <div className="input-box">
                                        <input type="text" name='fbProfile' placeholder='Your facebook handle' defaultValue={values && values.socialMediaProfile?.fbProfile} onChange={(e) => handleBasicProfileChange(e)} />
                                    </div>
                                    <div className="input-box">
                                        <input type="text" name='linkedinProfile' placeholder='Your linkedIn handle' defaultValue={values && values.socialMediaProfile?.linkedinProfile} onChange={(e) => handleBasicProfileChange(e)} />
                                    </div>
                                    <div className="input-box">
                                        <input type="text" name='twitterProfile' placeholder='Your twitter handle' defaultValue={values && values.socialMediaProfile?.twitterProfile} onChange={(e) => handleBasicProfileChange(e)} />
                                    </div>
                                    <div className="input-box">
                                        <input type="text" name='userWebsite' placeholder='Your website handle' defaultValue={values && values.socialMediaProfile?.userWebsite} onChange={(e) => handleBasicProfileChange(e)} />
                                    </div>
                                </div>

                                <div className="social-media-links form-box">
                                    <div className="flex">
                                        <h3 className='title01'>Work Experience</h3>
                                        <button className='addExp' onClick={handleAdd}>+ Add More Experience</button>
                                    </div>
                                    {workExperience && workExperience.map((field, index) => (
                                        <div key={index} className='pb-8'>
                                            <div className="input-box">
                                                <input type="text" name='companyName' placeholder='Enter Company Name' defaultValue={field.companyName} onChange={(e) => handleChange(index, e)} />
                                                {workExperienceErrors && workExperienceErrors[index]?.companyName && <span className='danger'>{workExperienceErrors[index]?.companyName}</span>}
                                            </div>

                                            <div className="input-box">
                                                <input type="text" name='industry' placeholder='Industry' defaultValue={field.industry} onChange={(e) => handleChange(index, e)} />
                                                {workExperienceErrors && workExperienceErrors[index]?.industry && <span className='danger'>{workExperienceErrors[index]?.industry}</span>}
                                            </div>

                                            <div className="input-box w-50">
                                                <input type="text" name='startYear' placeholder='Start Year' defaultValue={field.startYear} onChange={(e) => handleChange(index, e)} />
                                                {workExperienceErrors && workExperienceErrors[index]?.startYear && <span className='danger'>{workExperienceErrors[index]?.startYear}</span>}
                                            </div>

                                            <div className="input-box w-50">
                                                <input type="text" name='endYear' placeholder='End Year' defaultValue={field.endYear} onChange={(e) => handleChange(index, e)} />
                                                {workExperienceErrors && workExperienceErrors[index]?.endYear && <span className='danger'>{workExperienceErrors[index]?.endYear}</span>}
                                            </div>

                                            <div className="input-box">
                                                <input type="text" name='functionalArea' placeholder='Functional Area' defaultValue={field.functionalArea} onChange={(e) => handleChange(index, e)} />
                                                {workExperienceErrors && workExperienceErrors[index]?.functionalArea && <span className='danger'>{workExperienceErrors[index]?.functionalArea}</span>}
                                            </div>

                                            <div className="remove-btn">
                                                <button className='button' type="button" onClick={() => handleRemove(index)}>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                <div className='input-box sbt-btn'>
                                    <button className={`btn maroon-btn maroon-btn-arrow ${isButtonDisabled ? 'disabled' : ''}  ${btnDisabled ? 'disabled' : ''}`} onClick={(e) => handleSubmitProfile(e)}>
                                        {isButtonDisabled ? 'Wait...' : 'Submit'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div >
                </section>
            </div>
        </>
    )
}

export default profile