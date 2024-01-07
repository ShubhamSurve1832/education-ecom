import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Head from 'next/head'
import Header from '../../../components/Header'
import Footer from "../../../components/footer";
import CanadaBanner from '../../../CPAInner/canadaBanner'
import BannerSection from '../../../CPA/BannerSection' //CMS AVAILABLE
import JournerySection from '../../../CPA/JournerySection'
import CanadaTable from '../../../CPAInner/canadatable'
import FaqSection from '../../../CPA/FaqSectionCanada'
import { urlConstants as urlConstant } from '../../../constants/urlConstants';

import journeyData from '../../../database/data/journeySection.json'


import bannerData from '../../../database/data/banner.json'

const canada = () => {
	// BANNER SECTION    
	const [bannerData, setBannerData] = useState({
		canadaPage: {}
	})
	useEffect(() => {
		axios({
			method: "get",
			url: urlConstant.heroBanner,
			responseType: "json"
		})

			.then((res) =>
				setBannerData((prevState) => (
					{ canadaPage: res.data.canadaPage }
				)))

			.catch((err) =>
				console.log("error is ", err.message)
			)
	}, [])

	// CPA Journey. Simplified!
	const [journeyData, setJourneyData] = useState({
		canadaPage: {}
	})
	useEffect(() => {
		axios({
			method: "get",
			url: urlConstant.juorneySection,
			responseType: "json"
		})

			.then((res) =>
				setJourneyData((prevState) => (
					{ canadaPage: res.data.canadaPage }
				)))

			.catch((err) =>
				console.log("error is ", err.message)
			)
	}, [])
	return (
		<>
			<Head>
				<title>CPA USA in India|Simandhar CPA Canada Course |  Everything about US CPA Course and Jobs in India | Simandhar Education</title>
				<meta content='Unlock your CPA Canada journey with Simandhar. Navigate requirements, exams, and excel in your accounting career. Expert guidance for CPA Canada success.' name='description'></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
				<meta content='CPA, Certified Public Accountant, US CPA, Becker CPA, Simandhar CPA, AICPA, CPA Exam prep, accounting course, 4 CPA exams, CPA subjects, CPA Syllabus, CPA testing center, CPA testing windows, CPA exam centers i India, CPA in india, CPA eligibility, CPA Curriculum, CA vs CPA, CPA exam pattern, CPA passing score, CPA duration, CPA time, CPA license, CPA vs ACCA, US CPA vs US CMA, Simandhar LMS, CPA vs CMA, CPA fees, CPA price, CA for CS, CA for CMA, CPA for CA, public accountancy, CPA value, CPA Career, USP of CPA, Simandhar CPA, CPA vs CFA, CPA eligibility state , cpa canada , canada, us cpa in canada' name='keywords'></meta>
				<link rel="canonical" href="https://simandhareducation.com/course/cpa/canada" />
				<script type='application/ld+json' dangerouslySetInnerHTML={{
				__html:
					`{
						"@context": "https://schema.org",
						"@type": "VideoObject",
						"name": "How to get Job in Canada through US CPA",
						"description": "How to get a job in Canada through US CPA | Canada CPA | MOU Canada CPA|US CPA Course Exemptions |Fees
					
						Exclusive Interview by Sripal Jain CA, CPA USA with Ridhi Karbhari, CA, CPA USA, CPA ( Canada).",
						"thumbnailUrl": "https://i.ytimg.com/vi/PBFZmd2OHbU/maxresdefault.jpg",
						"uploadDate": "2019-07-24",
						"duration": "PT15M12S",
						"contentUrl": "https://youtu.be/PBFZmd2OHbU"
					}`}} />
				<script type='application/ld+json' dangerouslySetInnerHTML={{
				__html:
					`{
						"@context": "https://schema.org",
						"@type": "FAQPage",
						"mainEntity": [{
							"@type": "Question",
							"name": "What is CPA canada?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "CPA Canada is also known as Chartered Professional Accountants of Canada. It is basically the national organization that represents the Canadian accounting profession through the unification of the three biggest accounting organizations: CMA Canada, CGA Canada, & CICA. Canada made a big decision by merging its accounting qualifications - CA, CMA, CGA into one big ‘CPA’.
					
					CPA Canada is one of the prestigious accounting organizations globally and is immensely respected in the business, government and non-profit sectors."
							}
						},{
							"@type": "Question",
							"name": "How can a US CPA earn a Canadian CPA?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "U.S. CPAs can hold CPA Canada certification without additional exams.
					
					CPA Canada Requirements:
					
					Part 1 : 2hrs 30Min125 MCQ’s
					Part 2 : 2hrs 100 MCQ’s
					Part 3 : 2hrs100 MCQ’s"
							}
						},{
							"@type": "Question",
							"name": "What is mutual Recognition Agreement(MRA) ?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "From January 1, 2018, Mutual Recognition Agreement (MRA) has been established between
					
					All Canadian CPA bodies
					International Qualifications Appraisal Board (IQAB), representing AICPA and NASBA."
							}
						},{
							"@type": "Question",
							"name": "What is the salary of a certified public accountant(CPA) in canada?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "According to Payscale, the average salary of a Certified Public Accountant (CPA) in Canada is C$61,708."
							}
						},{
							"@type": "Question",
							"name": "When can i reschedule for the exam in case i don't clear them in the first attempt?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Confirm that you are a U.S. CPA
					Listing all relevant experience
					Submit the documents that are needed
					Then obtain Canadian CPA credential"
							}
						}]
					}`}} />
				
			</Head>
			<div className='width-50'>
				<Header showData={true} />
			</div>
			<div className="canada-banner">
				<CanadaBanner />
				<BannerSection bannerData={bannerData.canadaPage} /> 

			</div>
			<div className="canada-section container">
				<JournerySection journeyData={journeyData.canadaPage} />
			</div>
			<CanadaTable />
			<FaqSection />
			<Footer />
		</>
	)
}

export default canada