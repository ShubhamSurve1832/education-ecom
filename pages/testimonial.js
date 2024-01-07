import React from 'react'
import Head from 'next/head'
// import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Footer from "../components/footer";
import CommonForm from '../components/CommonForm'
import AchieversSection from '../CPA/AchieversSection' //CMS AVAILABLE
// import achieverData from '../database/data/achieversSection.json'
import CpacmaPlacement from '../CPAInner/cpacmaPlacement' //CMS AVAILABLE
import indexData from '../database/index.json'
import { urlConstants as urlConstant } from '../constants/urlConstants';


const Testmonial = () => {

    // TESTIMONIAL PAGE : US CPA (Certified Public Accountant) Licensee
    const [licenseData, setLicenseLogosData] = useState({
        testimonialPage: {}
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.achiverSection,
            responseType: 'json',
        })
            .then((res) =>
                setLicenseLogosData((prevState) => (
                    { testimonialPage: res.data.testimonialPage }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])

    // TESTIMONIAL PAGE : US CPA (Certified Public Accountant) Licensee
    const [placementsData, setPlacementsData] = useState({
        testimonialPage: {}
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.achiverSection,
            responseType: 'json',
        })
            .then((res) =>
                setPlacementsData((prevState) => (
                    { testimonialPage: res.data.placementAlumnis }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])

    // TESTIMONIAL PAGE : US CPA (Certified Public Accountant) Licensee
    const [achieverData, setAchieverData] = useState({
        testimonialPage: {}
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.achiverSection,
            responseType: 'json',
        })
            .then((res) =>
                setAchieverData((prevState) => (
                    { testimonialPage: res.data.testimonialOnePage }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])

    // console.log(licenseData.testimonialPage)
    return (
        <>
            <Head>
                <title>Alumni & Placements - Simandhar Education</title>
                <meta content='Elevate your career prospects with Simandhar placement services. Discover unparalleled opportunities and expert guidance for landing your dream job.' name='description'></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta content='CPA, CMA, US CPA, CPA alumni, Placement, CPA placement, CPA exam, Placement assitance, EA' name='keywords'></meta>
                <link rel="canonical" href="https://simandhareducation.com/testimonial" />
                <script type='application/ld+json' dangerouslySetInnerHTML={{
                    __html:
                        `{
                            "@context": "https://schema.org",
                            "@type": "VideoObject",
                            "name": "How Simandhar Alumni got placed in Big4 & MNC's during Pandemic Situation |US CPA CMA Job Placement",
                            "description": "How Simandhar Alumni got placed in Big4 & MNC's during Pandemic Situation.
                          
                          Simandhar Education provides you with access to Live Interactive classes from anywhere in the world & Supports its students by placing them in Top F & A companies, Big 4 etc.",
                            "thumbnailUrl": "https://i.ytimg.com/vi/wFyMBS1cIig/maxresdefault.jpg",
                            "uploadDate": "2021-01-25",
                            "duration": "PT0M49S",
                            "contentUrl": "https://youtu.be/wFyMBS1cIig"
                          }`}} />
            </Head>

            <Header />
            {/* <section className="testmonial-hero-section">
                <h1 className="heading02">Simandhar's Alumni & Placements</h1>
                <div className="container-l">
                    <div className="hero-flex">
                        <div className="left-form-box right-form-box">
                            <CommonForm showTitle={true} showcourse={true} indexData={indexData.testimonialTitle} formName='Testimonial Need Placement Info' />
                        </div>
                        <div className="right-video-box">
                            <div className='iframe-box'>
                            <iframe src="https://www.youtube.com/embed/wFyMBS1cIig" allowFullscreen='true' />
                            </div>
                            <Image loading='lazy' src="/img/placement_video_img.webp"fill={true} sizes='100vw' className='resp-img' alt='' />
                        </div>
                    </div>
                </div>
            </section> */}

            <div className='text-center testimonial-achivers'>
                <AchieversSection achieverData={licenseData.testimonialPage} showData={false} showbtn={true} />
            </div>

            <CpacmaPlacement achieverData={placementsData.testimonialPage} />
            <div className='testimonial-achiver'>
                <AchieversSection achieverData={achieverData.testimonialPage} showData={true} showlogo={true} showbtn={true} showAchiverbtn={true} />
            </div>
            <Footer />
        </>
    )
}

export default Testmonial