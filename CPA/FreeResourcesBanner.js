import React from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import axios from 'axios';
import { useState, useEffect, useRef } from 'react'
import _ from 'lodash'
import Image from 'next/image';
import { urlConstants as urlConstant } from '../constants/urlConstants';
import indexData from '../database/index.json'
import { getCookie, setCookie } from 'cookies-next';
import DownloadFormComponents from '../components/download_form5'
import DownloadFormComponents2 from '../components/download_form6'

let cpa = _.get(indexData, "CpaFreeResources.form")
let cma = _.get(indexData, "McqsCMA.form")
let cia = _.get(indexData, "CiaFreeResources.form")
let ea = _.get(indexData, "McqsEA.form")

const FreeResourcesBanner = () => {
	const [isButtonDisabled, setButtonDisabled] = useState(false);
	const { register, handleSubmit, formState: { errors }, reset } = useForm();
	const router = useRouter()
	const buttonRef = useRef()

	// For Download MCQ on section
	const [selectedMcq, setSelectedMcq] = useState('');
	const handleSelectChange = (event) => {
		setSelectedMcq(event.target.value);
	};
	const handleDownload = () => {
		// Logic to download PDF based on selectedOption
		// For example, fetch the PDF file from a server and initiate download
		if (selectedMcq === 'CPA') {
			window.open(cpa);
		} else if (selectedMcq === 'CMA') {
			window.open(cma);

		} else if (selectedMcq === 'CIA') {
			window.open(cia);

		} else if (selectedMcq === 'EA') {
			window.open(ea);
		}
	};

	//Phone number validation
	const [values, setValues] = useState({})
	useEffect(() => {
		let url;
		if (window.location.href.includes('utm_source') && window.location.href.includes('utm_medium') && window.location.href.includes('utm_campaign')) {
			url = window.location.href;
			let utmSource = url.split('&')[0].split('?')[1].split('=')[1]
			setCookie('utmSource', utmSource)

			let utmMedium = url.split('&')[1].split("=")[1]
			setCookie('utmMedium', utmMedium)

			let utmCampaign = url.split('&')[2].split('=')[1]
			setCookie('utmCampaign', utmCampaign)
		}
		let utmSource = getCookie('utmSource');
		let utmMedium = getCookie('utmMedium');
		let utmCampaign = getCookie('utmCampaign');
		setValues(

			{
				name: "",
				email: "",
				number: "",
				course: selectedMcq,
				formName: "free-resource form",
				MainSource: utmSource ? utmSource : "Direct Traffic",
				utm_medium: utmMedium ? utmMedium : "",
				utm_campaign: utmCampaign ? utmCampaign : "",
			}
		)
	}, [])

	// console.log(values)
	const { name, email, number, course, formName, MainSource, utm_medium, utm_campaign } = values;
	const [success, setSuccess] = useState(false);


	const onFormSubmit = async (e) => {
		setButtonDisabled(true)
		try {

			let data = {
				"emailAddress": email,
				"firstName": name,
				"phone": number,
				"mxCourse": selectedMcq,
				"mxMainsource": formName,
				"mxLeadSubSource": MainSource,
				"SourceMedium": utm_medium,
				"SourceCampaign": utm_campaign


			};
			// console.log("data to our Database", data);      
			let config = {
				method: 'post',
				maxBodyLength: Infinity,
				url: urlConstant.commonForm,
				headers: {
					'Content-Type': 'application/json'
				},
				data: data
			};
			await axios.request(config)
				.then((response) => {
					console.log(JSON.stringify(response.data));
				})
				.catch((error) => {
					console.log(error);
				});

			handleDownload();
			router.push("/thankyou")
		}
		catch (err) {
			console.log(err)
		}

	}

	const [isShow, setIsShow] = useState(false);
	const showDwnPopup = () => {
		setIsShow(!isShow);
	};

	const [isShow1, setIsShow1] = useState(false);
	const showDwnPopup1 = () => {
		setIsShow1(!isShow1);
	};
	return (
		<>
			<section className="free-resources">
				<div className="free-banner">
					<div className='container'>
						<div className="twoBox">
							<div className="content">
								<div className="banner-text">
									<h2 className="heading02">Master the Exam with our Free Resources!</h2>
									<h3 className="heading01">Get access to Free MCQs pertaining
										to CPA / CMA / CIA / EA courses</h3>
								</div>
								{/* <div className='tab-box resource-btn'>
																	<a href="javascript:;" className="btn maroon-btn maroon-btn-arrow mt-35">Download Free Resources</a>
															</div> */}
							</div>
							<div className="freeBan">
								<Image loading='lazy' src="/img/freeImg.png" alt="free resource banner" fill={true} sizes='100vw' className='resp-img' />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <div className='' style={{ padding: "25px", textAlign: "center" }}>
				<h2 className='heading03' >Ready to try Simandhar's difference for yourself?</h2>
				<a href="https://www.youtube.com/watch?v=-0szUwKHRno" target='new' className="btn maroon-btn maroon-btn-arrow mt-35" style={{ margin: "20px" }}>Demo Webinar</a>
				<a href="/webinars" className="btn maroon-btn maroon-btn-arrow mt-35" style={{ margin: "20px" }} >Sign up for a live webinar
				</a>

			</div> */}

<div className='' style={{ padding: "25px", textAlign: "center" }}>
					<h2 className='heading03' >Ready to try Simandhar's difference for yourself?</h2>
					<a onClick={showDwnPopup} className="btn maroon-btn maroon-arrow-btn" style={{ margin: "20px" }}>Signup for Free Demo Webinar </a>
					<div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}></div>
					<div className='download-popup ' style={{ display: !isShow ? 'none' : 'block' }}>
						<span className='close-pp dwn-load' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}>
							<Image loading='lazy' src="/img/white_cross.png" alt="white cross icon" fill={true} sizes='100vw' className='resp-img' />
						</span>
						<DownloadFormComponents showHeading2={true} indexData={indexData.downloadProspectus} DownloadForm={indexData.SimandharCPA} formName="Free Trail" />
					</div>

					<a onClick={showDwnPopup1} className="btn maroon-btn maroon-arrow-btn" style={{ margin: "20px" }}>Signup for 15 Days Free Trial</a>
					<div className='download-overlay' onClick={showDwnPopup1} style={{ display: isShow1 ? 'block' : 'none' }}></div>
					<div className='download-popup ' style={{ display: !isShow1 ? 'none' : 'block' }}>
						<span className='close-pp dwn-load' onClick={showDwnPopup1} style={{ display: isShow1 ? 'block' : 'none' }}>
							<Image loading='lazy' src="/img/white_cross.png" alt="white cross icon" fill={true} sizes='100vw' className='resp-img' />
						</span>
						<DownloadFormComponents2 showHeading2={true} setCourse={"CPA"} indexData={indexData.downloadProspectus} DownloadForm={indexData.SimandharCPA} formName="Free Trial" />
					</div>
				</div>

			<section className="section free-resource-form">
				<div className="container">
					<div className="form">
						<form className='resource-form' method='post' onSubmit={handleSubmit(onFormSubmit)}>
							<div className="form-text">
								<h1 className="heading03">Unlock Your Free Course Material</h1>
							</div>
							<div className="input-text input-box">
								{/* className="res-text" */}
								<input id="enquiry" name="enquiry" type="text" placeholder="Enter Your Name" minLength="2" value={name}
									{...register("name", {
										required: "Name is required",
										pattern: {
											value: /^[a-zA-Z ]*$/,
											message: "Enter letters only"
										},
										onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
									})}
									className={errors.name ? 'error-border' : null} />
								{errors.name && <span className='error-message'>{errors.name?.message}</span>}

							</div>

							<div className="input-text input-box">
								<input id="enquiry" name="email" type="text" placeholder="Enter Your Email Address"
									{...register("email", {
										required: "Email Id is required",
										pattern: {
											value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
											message: "Enter valid email id"
										},
										onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
									})}
									className={errors.email ? 'error-border' : null}

									value={email}
								/>
								{errors.email && <span className='error-message'>{errors.email?.message}</span>}
							</div>


							<div className='input-text input-box'>
								<input id="enquiry" name="enquiry" type="tel" placeholder="Enter Your Mobile Number" minLength="10" maxLength="15"
									{...register("number",
										{
											required: "Number is required",
											pattern: {
												value: /^[6-9]\d{9,14}/,
												message: "Enter Valid Number"
											},
											minLength: {
												value: 10,
												message: "Enter Min 10 Number"
											},
											maxLength: {
												value: 15,
												message: "Enter Max 15 Number"
											},
											onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
										})}
									className={errors.number ? 'error-border' : null}
									//onChange={handleChange}
									value={number}
								/>
								{errors.number && <span className='error-message'>{errors.number?.message}</span>}
							</div>

							{/* <div className="input-box custom-select select-field">
								<select id="select-course" name="course" placeholder="Select Course" {...register("course",
									{
										required: "Select Course",
										onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
									})}
									className={errors.course ? 'error-border' : null}

									value={course}>
									<option value="" selected="">Select Course</option>
									<option value="US CPA">US CPA</option>
									<option value="US CMA">US CMA</option>
									<option value="EA">EA</option>
									<option value="CIA">CIA</option>
									<option value="IFRS">IFRS</option>
									<option value="Data Analytics">Data Analytics</option>
									<option value="Data Analytics">Simandhar Saamarth</option>
								</select>
								{errors.course && <span className='error-message'>{errors.course?.message}</span>}
							</div> */}

							<div className='input-box custom-select select-field' >
								<select required="Select Course" value={selectedMcq} onChange={handleSelectChange} >
									<option value="">Select Course</option>
									<option value="CPA">US CPA</option>
									<option value="CMA">US CMA</option>
									<option value="CIA">CIA</option>
									<option value="EA">EA</option>
								</select>
							</div>
							<div className='tab-box resource-btn' >
								<button className={`btn maroon-btn maroon-btn-arrow mt-35 ${isButtonDisabled ? 'disabled' : ''}`} type='submit'>Submit</button>
							</div>
						</form>
					</div>
				</div><br />
				
			</section>
		</>
	)
}


export default FreeResourcesBanner