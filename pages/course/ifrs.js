import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from "../../components/footer"
import BannerSection from '../../CPA/BannerSection'
import ExamSection from '../../CPA/ExamSection'
import HelpSection from '../../CPA/HelpSection'
import Gallery from '../../CPA/Gallery'
import CurriculumSectionone from '../../CPA/CurriculumSectionone'
import CpaContent from '../../contentpartner/IrfsContent'
import TableSection from '../../CPA/ifrsTableone'
import AchieversSection from '../../CPA/AchieversSection'
import FaqSectionIfrs from '../../CPA/FaqSectionIfrs'
import { urlConstants as urlConstant } from '../../constants/urlConstants'

import bannerData from '../../database/data/banner.json'
import examData from '../../database/data/exam.json'
import helpData from '../../database/data/helpSection.json'
import galleryData from '../../database/data/gallerySection.json'
import CurriculumSectiononeData from '../../database/data/curriculumsectionOne.json'
import contentPartnerData from '../../database/data/contentSection.json'
import achieverData from '../../database/data/achieversSection.json'

const ifrs = () => {
    // BANNER SECTION    
    const [bannerData, setBannerData] = useState({
        ifrsPage: {}
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.heroBanner,
            responseType: "json"
        })

            .then((res) =>
                setBannerData((prevState) => (
                    { ifrsPage: res.data.ifrsPage }
                )))

            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])

    // EXAM SECTION    
    const [examData, setExamData] = useState({
        ifrsPage: {}
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.examSection,
            responseType: "json"
        })
            .then((res) =>
                setExamData((prevState) => (
                    { ifrsPage: res.data.ifrsPage }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])

    // HELP SECTION
    const [helpData, setHelpData] = useState({
        ifrsPage: {},
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.helpSection,
            responseType: 'json',
        })
            .then((res) =>
                setHelpData((prevState) => (
                    { ifrsPage: res.data.ifrsPage }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])

    // GALLERY SECTION 
    const [galleryData, setGalleryData] = useState({
        ifrsGallery: [],
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.gallerySection,
            responseType: 'json',
        })
            .then((res) =>
                setGalleryData((prevState) => (
                    { ifrsGallery: res.data.ifrsGallery }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])

    // CURRICULUM SECTION
    const [CurriculumData, setCurriculumData] = useState({
        curriculum: {},
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.curriculumSectionOne,
            responseType: 'json',
        })
            .then((res) =>
                setCurriculumData((prevState) => (
                    { curriculum: res.data.ifrsPage }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])

    // ACHIVER SECTION
    const [achieverData, setAchieverData] = useState({
        ifrsPage: {},
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.achiverSection,
            responseType: 'json',
        })
            .then((res) =>
                setAchieverData((prevState) => (
                    { ifrsPage: res.data.ifrsPage }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])
    // console.log(CurriculumData.curriculum)
    return (
        <>
            <Head>
                <title>IFRS Course Duration, Syllabus & Fee | IASB | Diploma in IFRS | Simandhar Education</title>
                <meta content='International Financial Reporting Standards are a set of accounting standards used globally to provide a consistent and transparent framework for financial reporting.' name='description'></meta>
                <meta content='IFRS,IFRS Course,IFRS Training,IFRS Course in Hyderabad,IFRS Training in Hyderabad,IFRS Coaching in India,IFRS Coaching in Delhi,IFRS Classes in India,IFRS Certification in India,IFRS Online Course,IFRS Online Course In India,IFRS Online Training,IFRS Course Details,IFRS Exam in India,IFRS from India,IFRS Course Fees in India,IFRS Course In India,IFRS Certification Course in Hyderabad,IFRS Training in India,IFRS Certification Salary in India,IFRS Certification in India,IFRS Certification Course in India,Best IFRS Certification in India,IFRS Certification Salary in India' name='keywords'></meta>
                <link rel="canonical" href="https://simandhareducation.com/course/ifrs" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <script type='application/ld+json' dangerouslySetInnerHTML={{
                    __html:
                        `{
                            "@context": "https://schema.org",
                            "@type": "VideoObject",
                            "name": "Introduction to Diploma in IFRS",
                            "description": "This video is regarding the introduction to Diploma in IFRS.
                          Simandhar in Alliance with BDO
                          
                          If you want more session then enrol with our IFRS program and enjoy our IFRS study material and recorded sessions.",
                            "thumbnailUrl": "https://i.ytimg.com/vi/h5Ea2zY2bz4/maxresdefault.jpg",
                            "uploadDate": "2020-03-10",
                            "duration": "PT50M37S",
                            "contentUrl": "https://youtu.be/h5Ea2zY2bz4"
                          }`}} />

                    <script type='application/ld+json' dangerouslySetInnerHTML={{
                    __html:
                        `{
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [{
                              "@type": "Question",
                              "name": "What should actually take the IFRS course?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "These are the ones who should be taking the course.
                          
                          MBAs majored in Finance and working in the accounting domain.
                          Chartered Accountants, and other finance professionals.
                          Semi-qualified CA, ICWA, CS working in the accounting domain.
                          Finance managers and Chief accountants."
                              }
                            },{
                              "@type": "Question",
                              "name": "What is the eiligibilty criteria for dipIFR certification?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "One of the requirements needs to be fulfilled to be eligible but in case you are already an auditor or a professional accountant you are eligible right away.
                          
                          2 years of accounting experience & a degree attracting at least ACCA exemptions F1-F4.
                          3 years of accounting experience.
                          ACCA affiliate status.
                          2 years of experience and ACCA certification in IFRS."
                              }
                            },{
                              "@type": "Question",
                              "name": "How  can a candidate prepare for the dipIFR examination better?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Candidates are advised to practice the prior papers as if they were really sitting for the examination. Past papers are published on the ACCA website and it is also recommended that candidates use the revision blanks published by the various approved content providers."
                              }
                            },{
                              "@type": "Question",
                              "name": "What is IFRS?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "IFRS is basically International Financial Reporting Standards which are accounting standards issued by the IFRS Foundation and the International Accounting Standards Board (IASB). IFRS requires businesses to report their financial results and financial position using the same standards and rules; this means that, barring any fraudulent manipulation, there is considerable uniformity in the financial reporting of all businesses using IFRS, which makes it easier to compare and contrast their financial results."
                              }
                            },{
                              "@type": "Question",
                              "name": "What is the IFRS diploma or DipIFR?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Diploma in International Financial Reporting (DipIFR) is an international qualification in IFRS developed by the leading professional accounting organisation which is known as the Association of Chartered Certified Accountants (ACCA) – which helps to develop knowledge in the area of International Financial Reporting Standards (IFRS)."
                              }
                            },{
                              "@type": "Question",
                              "name": "What is the salary trend for IFRS india?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "IFRS professionals working in the top global auditing firms earn a starting annual package of Rs 8 lacs to Rs 15 lacs per annum as per the LinkedIn salary report. There is another report that shows that many of the accounting consultants who are specialized in the IFRS work in India have an average salary take can go up to 19 lakhs. As one gains experience, the salary accordingly increases."
                              }
                            },{
                              "@type": "Question",
                              "name": "What is the cost for the ACCAs diploma in IFRS?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Every attempt of the IFRS course will cost around 15k-20k and of course any of the additional training charges will be an extra cost and is certainly not included in this."
                              }
                            },{
                              "@type": "Question",
                              "name": "Does simandhar provide live classes for IFRS?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Simandhar Education provides you with Live Interactive classes which you can access from anywhere in the world. Simandhar also provides the facility to access recorded videos for students who seek to revisit the material taught."
                              }
                            },{
                              "@type": "Question",
                              "name": "How is simandhar education different from other instituesfor IFRS?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Simandhar provides the candidate with live interactive classes which can be accessed from all over the world.
                          All the teachers here at Simandhar are extremely qualified and professional who are here to help and guide students in every manner.
                          Simandhar also records all the videos of the classes so students can access them when they want in case, they want to revisit the topic that is taught.
                          The course at Simandhar is inexpensive."
                              }
                            }]
                          }`}} />

                    <script type='application/ld+json' dangerouslySetInnerHTML={{
                    __html:
                        `{
                        
                    }`}} />
            </Head>
            <Header />
            <div className="banner-ifrsPage">
                <BannerSection bannerData={bannerData.ifrsPage} />
            </div>
            <div className='ifrs-exam-section'>
                <ExamSection examData={examData.ifrsPage} />
            </div>
            <div className='background-none key-takeways ifrs-help-section' >
                <HelpSection helpData={helpData.ifrsPage} />
            </div>
            <div className="ifrs-gallery-page">
                <Gallery galleryData={galleryData.ifrsGallery} />
            </div>
            <div className='ifrs-tab cma-tab'>
                <CurriculumSectionone CurriculumSectiononeData={CurriculumData.curriculum} />
            </div>
            <CpaContent />
            <TableSection />
            <div className='ifsr-achiever'>
                <AchieversSection achieverData={achieverData.ifrsPage} showData={true} />
            </div>
            <FaqSectionIfrs />
            <Footer />
        </>
    )
}

export default ifrs