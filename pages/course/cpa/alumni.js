import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../../components/Header'
import Footer from "../../../components/footer";
import RegistrationForm from '../../../components/registrationForm';
import VideoContainer from '../../../CPA/VideoContainer';
import AlumniCard1 from '../../../CPA/AlumniCard1';
import AlumniCard from '../../../CPA/AlumniCardcpa';
import VideoData from '../../../database/data/alumniPage.json'
import { urlConstants as urlConstant } from '../../../constants/urlConstants'
import AlumniCardData from '../../../database/data/alumniPage.json'
import AlumniCardInternational from '../../../CPA/AlumniCardcpaInternational'

const alumni = () => {

	//CPA ALUMINI CARD1 PAGE
	const [cpaAlumniData, setCpaAlumniData] = useState({
		CPAalumni: {},
	});
	useEffect(() => {
		axios({
			method: "get",
			url: urlConstant.getAlumniPage,
			responseType: "json",
		})
			.then((res) =>
				setCpaAlumniData((prevState) => ({
					CPAalumni: res.data.CPAalumni,
				}))
			)
			.catch((err) => console.log("error is ", err.message));
	}, []);

	//CPA ALUMINI CARD1 PAGE
	const [cpaAlumniCardData, setCpaAlumniCardTabData] = useState({
		cpaAlumniCard: [],
	});
	useEffect(() => {
		axios({
			method: "get",
			url: urlConstant.getAlumniPage,
			responseType: "json",
		})
			.then((res) =>
				setCpaAlumniCardTabData((prevState) => ({
					cpaAlumniCard: res.data.cpaAlumniCard,
				}))
			)
			.catch((err) => console.log("error is ", err.message));
	}, []);

	//CPA ALUMINI CARD1 PAGE
	const [cpaAlumniCardData1, setCpaAlumniCardTabData1] = useState({
		cpaAlumniCard1: [],
	});
	useEffect(() => {
		axios({
			method: "get",
			url: urlConstant.getAlumniPage,
			responseType: "json",
		})
			.then((res) =>
				setCpaAlumniCardTabData1((prevState) => ({
					cpaAlumniCard1: res.data.cpaAlumniCard1,
				}))
			)
			.catch((err) => console.log("error is ", err.message));
	}, []);

	// console.log("my datA",cpaAlumniData)
	return (
		<>
			<Head>
				<title>Simandhar US CPA Testimonials, Reviews & Feedback | Simandhareducation.com</title>
				<meta content='To know the genuine US CPA Simandhar Testimonials, Reviews, & Feedback for Simandhar Education please follow this page' name='description'></meta>
				<meta content='Simandhar Testimonials, Simandhar Reviews, Simandhar Feedback, Simandhar Positive Review, Simandhar Positive Testimonials, Simandhar Positive Feedback' name='keywords'></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
				<link rel="canonical" href="https://simandhareducation.com/course/cpa/alumni" />
				<script type='application/ld+json' dangerouslySetInnerHTML={{
				__html:
					`{
						"@context": "https://schema.org",
						"@type": "VideoObject",
						"name": "Simandhar CPA CMA placement amidst the pandemic | Big 4| CPA CMA jobs| US CPA US CMA|7-8 lakhs CTC",
						"description": "When one is consistent in their efforts, nothing can stop one from being successful.
					
					Hearty congratulations to all our US CPA and CMA Alumni who made us proud by getting placed in BIG4s and MNCs
					
					What our students say
					. We had webinars that helped to learn more about topics.
					. We were given individual and group-level tasks that helped in boosting our creative thinking.
					. Received continuous guidance from the industry experts until the exam
					. Regular MCQs and exam practice papers made the process easy.",
						"thumbnailUrl": "https://i.ytimg.com/vi/9zAlSa6qeEQ/hqdefault.jpg",
						"uploadDate": "2021-09-24",
						"duration": "PT3M9S",
						"contentUrl": "https://youtu.be/9zAlSa6qeEQ"
					}`}} />
			</Head>
			<div className='width-50'>
				<Header showData={true} />
			</div>
			<VideoContainer VideoData={cpaAlumniData.CPAalumni} />
			{/* <AlumniContent /> */}
			<section className="alumniSection">
				<div className="container">
					<div className="achievers">
						<h2 className="heading02 text-center">Our Achievers</h2>
						<h3 className="heading03 text-center">Think CPA, Think Simandhar</h3>
						<br/>
						<h3 className="heading02 text-center">US CPA International Alumni</h3>
						<div className="achieversBox">
						<AlumniCardInternational />
						</div>
						<h3 className="heading02 text-center">US CPA Indian Alumni</h3>
						
						<div className="achieversBox">
					

							<AlumniCard AlumniCardData={cpaAlumniCardData.cpaAlumniCard} />
							<AlumniCard1 companyName={true} AlumniCardData={cpaAlumniCardData1.cpaAlumniCard1} />
						</div>
						<div className="achieversBox">

						</div>
						{/* <div className="viewBtn text-center">
                            <a href="#" className="btn maroon-border-btn maroon-border-btn-arrow">View More</a>
                        </div> */}
					</div>
				</div>
			</section>
			<RegistrationForm />
			<Footer />
		</>
	)
}

export default alumni