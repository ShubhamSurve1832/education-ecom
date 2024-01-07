import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Header from '../../../components/Header'
import Footer from "../../../components/footer";
import HelpSection from '../../../CPA/HelpSection'
import helpData from '../../../database/data/helpSection.json'
import RegistrationForm from '../../../components/registrationForm'
import BannerSection from '../../../CPA/BannerSection';
import CmaCurriculum from '../../../CPA/CmaCurriculum';


import bannerData from '../../../database/data/banner.json'
import { urlConstants as urlConstant } from '../../../constants/urlConstants'
import axios from 'axios'

const syllabus = () => {
   // HELP SECTION
   const [helpData, setHelpData] = useState({
    cmaSyllabusPage: {},
})
useEffect(() => {
    axios({
    method: "get",
    url: urlConstant.helpSection,
    responseType: 'json',
    })
    .then((res) =>
        setHelpData((prevState) => (
        { cmaSyllabusPage: res.data.cmaSyllabusPage}
        )))
    .catch((err) =>
        console.log("error is ", err.message)
    )
}, [])
    return (
        <>
            <Head>
                <title>What is the Syllabus of US CMA Subject wise? | Simandhar Education</title>
                <meta content='Certified Management Accountant (CMA) Part – 1, Financial Reporting, Planning, Performance, and Control & Certified Management Accountant (CMA) Part – 2 Financial Decision Making ' name='description'></meta>
                <meta content='us cma syllabus 2020 pdf, cma course structure, (CMA) Part – 1 syllabus,  CMA Financial Reporting syllabus,   CMA Financial Planning syllabus, syllabus, REG CPA Syllabus,  CMA Financial Performance syllabus, &  CMA Financial Control syllabus' name='keywords'></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <link rel="canonical" href="https://simandhareducation.com/course/cma/syllabus" />
                <script type='application/ld+json' dangerouslySetInnerHTML={{
                __html:
                    `{
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "name": "Integrated reporting | US CMA | Part 1| Wipro Analysis | Finance & Accounting Courses",
                        "description": "Confused about 'Finance & Accounting Courses?' Join our webinar hosted by Mr. Sripal Jain & clarify all your unresolved queries.
                      
                      The first step in deciding to do a professional course for yourself is to understand your needs, wants, and what you enjoy that could also be fruitful for your future. There are many domains that you could choose to pursue your course and career in. However, every course is unique in its own manner. For this purpose, you will need to know all about the related courses and disciplines that will keep you interested.",
                        "thumbnailUrl": "https://i.ytimg.com/vi/15yyFgj3Lb4/maxresdefault.jpg",
                        "uploadDate": "2020-09-20",
                        "duration": "PT38M48S",
                        "contentUrl": "https://www.youtube.com/live/15yyFgj3Lb4?feature=share"
                      }`}} />
                      
                <script type='application/ld+json' dangerouslySetInnerHTML={{
                __html:
                    `{
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "name": "US CMA Part 2 | Risk Management | Simandhar Education",
                        "description": "CPA CMA Part 2 webinar by Sripal Jain from Simandhar Education the Official partner of Becker professional education.",
                        "thumbnailUrl": "https://i.ytimg.com/vi/e7GBiE7ftxc/maxresdefault.jpg",
                        "uploadDate": "2019-05-20",
                        "duration": "PT94M45S",
                        "contentUrl": "https://youtu.be/e7GBiE7ftxc"
                }`}} />
            </Head>
            <div className="width-50">
                <Header showData1={true} />
            </div>
            <CmaCurriculum />
            {/* <BannerSection bannerData={bannerData.cmaSyllabusPage1} /> */}
            <div className="text-center cmasyllabus">
                <HelpSection helpData={helpData.cmaSyllabusPage} />
            </div>
            <RegistrationForm />
            <Footer />
        </>
    )
}

export default syllabus