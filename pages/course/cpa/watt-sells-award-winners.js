import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../../components/Header';
import Footer from "../../../components/footer";
import CpacmaPlacement from '../../../CPAInner/cpacmaPlacement'
import achieverData from '../../../database/data/achieversSection.json'
import indexData from '../../../database/index.json'
import CommonForm from '../../../components/CommonForm';
import CpaProgram from '../../../components/CpaProgram';
import ElijahFaq from '../../../CPA/ElijahWattFaq'
import Link from 'next/link';
import CorporateData from '../../../database/data/corporateData.json'
import dynamic from "next/dynamic";
const CorporateRecord = dynamic(() => import('../../../CPAInner/corporateRecord'))
import { urlConstants as urlConstant } from '../../../constants/urlConstants';


const WattSellsAward = () => {
	const [isShow, setIsShow] = useState(false);
	const showDwnPopup = () => {
		setIsShow(!isShow);
	};

	//   BANNER SECTION 
	const [bannerData, setBannerData] = useState({
		data: {},
	});
	useEffect(() => {
		axios({
			method: "get",
			url: urlConstant.indexData,
			responseType: "json",
		})
			.then((res) =>
				setBannerData((prevState) => ({
					data: res.data.wattSellBanner,
				}))
			)
			.catch((err) => console.log("error is ", err.message));
	}, []);

	// ACHIVER SECTION
	const [achieverData, setAchieverData] = useState({
		sellsAward: {},
	})
	useEffect(() => {
		axios({
			method: "get",
			url: urlConstant.achiverSection,
			responseType: 'json',
		})
			.then((res) =>
				setAchieverData((prevState) => (
					{ sellsAward: res.data.sellsAward }
				)))
			.catch((err) =>
				console.log("error is ", err.message)
			)
	}, [])
	//Hear what topper has to say about his journey
	const [corporateEventData, setCorporateEventData] = useState({
		corporateWebinardata: {},
	})
	useEffect(() => {
		axios({
			method: "get",
			url: urlConstant.corporateData,
			responseType: 'json',
		})
			.then((res) =>
				setCorporateEventData((prevState) => (
					{ corporateWebinardata: res.data.corporateWebinardata }
				)))
			.catch((err) =>
				console.log("error is ", err.message)
			)
	}, [])

	// console.log(bannerData.data)
	return (
		<>
			<Head>
				<title>Elijah Watt Sells Award winner | CPA | Simandhar Education</title>
				<meta content='Congratulating Elijah Watt Sells Award Winners! Simandhar celebrates excellence in accounting with top performers recognized for their outstanding CPA exam scores.' name='description'></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
				<meta content='Elijah Watt Sells Award, CPA exam, Top performers, Outstanding scores, Accounting excellence, Simandhar recognition, CPA success, Achievements, Accounting professionals, Academic excellence, CPA course, CPA sucess, CPA scope, CPA jobs' name='keywords'></meta>
				<link rel="canonical" href="https://simandhareducation.com/course/cpa/watt-sells-award-winners" />

				<script type='application/ld+json' dangerouslySetInnerHTML={{
					__html:
						`{
						"@context": "https://schema.org",
						"@type": "VideoObject",
						"name": "Simandhar CPA Student does it again |CPA Watt Sells Winner | Trishla | CPA Course",
						"description": "Simandhar's Hat-trick! Third time in a row!
					
					Listen to CPA Alumni Trishla Maniar and Mr. Sripal Jain (CA, CPA ) about the journey of making it to the top! This Afternoon LIVE is at 12:30 pm with one of Simandhar's gems, who has won the AICPA WATT SELLS award for her excellence. She'll share her tips for passing your CPA exams.",
						"thumbnailUrl": "https://i.ytimg.com/vi/lS_nagRP5d8/maxresdefault.jpg",
						"uploadDate": "2022-11-24",
						"duration": "PT57M14S",
						"contentUrl": "https://www.youtube.com/live/lS_nagRP5d8?feature=share"
					}`}} />

				<script type='application/ld+json' dangerouslySetInnerHTML={{
					__html:
						`{
						"@context": "https://schema.org",
						"@type": "VideoObject",
						"name": "CPA Course | Watt Sells Award Winner 2021 | CPA Successful Journey with Simandhar Education",
						"description": "Kavneet was honored as one of the prestigious Elijah Watt Sells Award winners for 2021, which recognizes CPA candidates who have scored over 95.5 on all four sections of the CPA Exam, and passed all four sections on their first attempt.",
						"thumbnailUrl": "https://i.ytimg.com/vi/Y2wReiomuV4/maxresdefault.jpg",
						"uploadDate": "2021-08-24",
						"duration": "PT30M17S",
						"contentUrl": "https://www.youtube.com/live/Y2wReiomuV4?feature=share"
					}`}} />

				<script type='application/ld+json' dangerouslySetInnerHTML={{
					__html:
						`{
						"@context": "https://schema.org",
						"@type": "VideoObject",
						"name": "Q&A with Dhruv (Simandhar CPA Watt sells award winner )FAR -98, BEC-98, REG-97, AUD-91| CPA exam|CPA",
						"description": "Simandhar Did it again.
					
					The Elijah Watt Sells Award is the most prestigious award given for high-performance candidates in US CPA exams.
					
					Simandhar Education is delighted to announce the outstanding achievement of our CPA Alumni, Dhurv patel, for receiving Watt Sells Award by scoring 98 in BEC, 97 in REG, 98 in FAR, and 91 in AUD.",
						"thumbnailUrl": "https://i.ytimg.com/vi/rPS0jKiSA94/maxresdefault.jpg",
						"uploadDate": "2022-10-12",
						"duration": "PT50M50S",
						"contentUrl": "https://www.youtube.com/live/rPS0jKiSA94?feature=share"
					}`}} />

				<script type='application/ld+json' dangerouslySetInnerHTML={{
					__html:
						`{
						"@context": "https://schema.org",
						"@type": "FAQPage",
						"mainEntity": [{
							"@type": "Question",
							"name": "What is the Elijah watt sells award?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "The Watt Sells award, named after CPA pioneer Elijah Watt Sells, is presented to candidates who score a cumulative average score of 95.50 or higher in all four subjects of the CPA Course. Also, the candidates must have completed testing during one calendar year and passed all four sections on their first try."
							}
						},{
							"@type": "Question",
							"name": "Who is  Elijah watt sells",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Elijah watt sells, one of the first CPAs in the United States, was instrumental in establishing the AICPA and advancing professional education within the field. AICPA coined the award in his name to recognise his contributions."
							}
						},{
							"@type": "Question",
							"name": "When and why elijah watt sells award established?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "The AICPA established the Elijah Watt Sells Award in 1923 to recognize the exceptional performance of the candidates in the CPA course."
							}
						},{
							"@type": "Question",
							"name": "Who grants the elijah watt sells award?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "The American Institute of Certified Public Accountants (AICPA) is the United States' primary professional association for Certified Public Accountants (CPAs). It is the regulatory body that monitors the CPA course globally and is responsible for recognising talent by presenting the Elijah Watt Sells Award to candidates."
							}
						},{
							"@type": "Question",
							"name": "What is the process for receiving the elijah watt sells award?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "The Watt Sells Award does not need an application. If you are eligible, you will be notified in the spring of the year following your testing."
							}
						},{
							"@type": "Question",
							"name": "What are the qualification for elijah watt sells award?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "You must fulfill both of the following conditions to be considered for the Elijah Watt Sells Award:
					
					Obtain a cumulative average score of 95.50 on the CPA Exam in all four parts.
					Pass the CPA Exam in all four parts on the first try."
							}
						},{
							"@type": "Question",
							"name": "What are the advantages of being awarded the elijah watt sells award?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "The Elijah Watt Sells Award honours exceptional CPA Exam achievement. This accomplishment can help applicants stand out from other accounting resumes and boost their confidence as registered CPAs."
							}
						},{
							"@type": "Question",
							"name": "What is the number of elijah watt sells award winners anaully?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "The number of Elijah Watt Sells Award recipients is determined by the number of candidates who pass the CPA course and complete the qualifying requirements. The AICPA just announced that 57 candidates for the Elijah Watt Sells Award in 2021 have qualified."
							}
						}]
					}`}} />

				<script type='application/ld+json' dangerouslySetInnerHTML={{
					__html:
						`{
						
				}`}} />


			</Head>
			<div className='width-50'>
				<Header showData={true} />
			</div>

			{/* Award Section */}
			{/* <section className='award-banner'>
				<div className='container'>
					<div className='awards-heading'>
						<h4 className='heading04'>{bannerData.data.heading01}</h4>
						<h4 className='heading04'>{bannerData.data.heading02}</h4>
						<h4 className='heading04'>{bannerData.data.heading03}</h4>
					</div>
					<div className='awardies'>
						{
							bannerData.data.list && bannerData.data.list.map((data, id) => {
								// console.log(data)
								return (

									<div key={id} className='img-box'><Image loading='lazy' src={data.img} alt={data.alt} fill={true} sizes='100vw' className='resp-img' /></div>

								)
							})
						}
					</div>
				</div>
			</section> */}
			<div>
				<img width={"100%"} height={"auto"} src='https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/5th-Whatsell-Award_Desktop_27th-Dec23.jpg' alt='Elijah Watt Sells Award winners' />
			</div>


			{/* Award Winners */}
			<section className='award-winner-section'>
				<div className='container-l'>
					<div className='two-box-row'>
						<div className='left-box'>
							<h1 className='heading02'>Elijah Watt Sells Award Winners: Simandhar</h1>
							<p>The AICPA established the Elijah Watt Sells Award in 1923 to recognise exceptional performance on the CPA Exam. Sells, one of the first CPAs in the United States, was instrumental in establishing the AICPA and advancing professional education within the field. The Watt Sells award, named after CPA pioneer Elijah Watt Sells, is granted to candidates who achieve a cumulative average score of 95.50 or higher on each of the four portions of the Uniform CPA Examination, complete testing during the calendar year, and pass all four sections on their first try.</p>
						</div>
						<div className='right-form-box'>
							<CommonForm showTitle={true} showcity={true} indexData={indexData.elijahWattSells} formName="Elijah Watt Sells Award Free US CPA Eligibility Check" />
						</div>
					</div>
					<div className='mt-6'>
						<h2 className='heading03'>Elijah Watt Sells Award Winners at Simandhar Education</h2>
						<p>Simandhar Education is India that has gained the honour of the Watt Sells Award. We congratulate the winner on successfully obtaining his CPA certificate with the highest scores in the country.</p>
					</div>
					<div className='mt-6'>
						<h2 className="heading03">Know the CPA Topper</h2>
						<p>Our CPA Alumnus, <span>Khushbu Mittal</span> a B.Com graduate who embarked on her US CPA journey while excelling at Deloitte. With exceptional scores of 99 in FAR, 99 in REG, 96 in BEC, and 94 in AUD, she secured an impressive 97% total. Khushbu's relentless effort, coupled with Simandhar's guidance, earned her the prestigious Elijah Watts Sells Award in 2023—an extraordinary accomplishment on the US CPA examinations.</p>
						<p>Our US CPA alumnus, <span>Sachin Mall</span> is a B.Com graduate. After completing his graduation, he got himself enrolled for US CPA. Sachin achieved an outstanding 99 in FAR, 99 in REG, 97 in BEC, and 93 in AUD which got him a total score of 97%. Thanks to his tireless work and Simandhar's coaching. He received the Elijah Watts Sells Award in 2023 as an honorary recipient for his remarkable achievement on the US CPA examinations.</p>
						<p>US CPA Alumnus, <span>Trishla Maniar</span> has maintained the legacy of Simandhar Education by winning the Elijah Watt Award for 2022. Her exceptional performance in the US CPA exams has made us extremely proud. She scored 97 in BEC, 97 in REG, 98 in FAR, and 96 in AUD.</p>
						<p>Our US CPA alumnus, <span>Dhruv Patel</span> has set a new benchmark by winning the Elijah Watt Sells Award, an award for excellent performance in the US CPA. He scored in BEC 98, REG 97, FAR 98, and AUD 91, respectively, and was placed in EY by Simandhar in 4 days as an Advanced Analyst.</p>
						<p> <span> Kavneet Hanspal </span> is a CA-inter and a B.Com. graduate. After passing CA-inter, he took a break from CA training and opted to focus on US CPA. Kavneet scored 99 in BEC, 97 in REG, 96 in FAR, and 93 in AUD, for a total score of 96.25, thanks to his tireless work and Simandhar's coaching. He received the Elijah Watts Sells Award for 2021 as an honorary recipient for his remarkable achievement on the CPA examinations.</p>
						
						
						
					</div>



					<div id="corporate-record" className='tooper-journey pt-8'>
						<CorporateRecord corporateEventData={CorporateData.topperJourneyData} />
					</div>


					<div className='student-alumni mt-6'>
						<div className='container-l'>
							<h3 className='heading03'>The Pride of Simandhar – Our Students/Alumni</h3>
							<p>We always take pride in the achievements of our students.</p>
							<p>Our students, Khushbu Mittal, Sachin Mall, Trishla Maniar, Kavneet Hanspal and Dhruv Patel, have not just made Simandhar proud but our whole country by being the only Indians to win the Elijah Watt Sells award. Many of our students have been placed at the Big 4 and other major accounting firms and top MNCs. They have gone on to hold key positions in major corporations and have made significant contributions to their growth.</p>
							<p>No matter how high they reach in their careers, they will always be our alumni and a part of the Simandhar family.</p>
						</div>
					</div>

					<div className='palcement center-grid section'>
						<div className="">
							<CpacmaPlacement achieverData={achieverData.sellsAward} />

						</div>
					</div>

				</div>
				<div className='counseling-register text-center'>
					<div className='conatainer-l'>
						<h2 className='heading02'>Feel inspired by CPA World Toppers</h2>
						<h3 className='heading03'>Join us at Simandhar to make your US CPA dream come true.</h3>
						<h3 className='heading03'>For free counseling Register here!</h3>
						<div>
							<div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}></div>
							<div className='download-popup right-form-box' style={{ display: !isShow ? 'none' : 'block' }}>
								<span className='close-pp' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}>
									<Image loading='lazy' src="/img/brown_cross.png" alt="" fill={true} sizes='100vw' className='resp-img' />
								</span>
								<CommonForm indexData={indexData.ElijahWattFormHeading} formName="free counseling Register" showcourse={true} showTitle={true} /></div>
							<a className='btn white-btn white-btn-arrow' onClick={showDwnPopup}>Register</a>
						</div>
					</div>

				</div>
			</section>
			<ElijahFaq />
			<Footer />
		</>
	)
}

export default WattSellsAward