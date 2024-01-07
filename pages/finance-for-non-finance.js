import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header'
import Footer from "../components/footer";
import BannerSection from '../CPA/BannerSection'
import TableSection from '../CPA/saamarthTabelone'
import TableSectiontwo from '../CPA/saamarthTabeltwo'
import HelpSection from '../CPA/HelpSection'
import CpaContent from '../contentpartner/SsContent'
import FaqSectionSaamarth from '../CPA/FaqSectionSaamarth'
import WorkshopRedifine from '../CPA/WorkshopRedifine'
import SaamarthForm from '../CPA/SaamarthForm'



import bannerData from '../database/data/banner.json'
import helpData from '../database/data/helpSection.json'
import contentPartnerData from '../database/data/contentSection.json'
import { urlConstants as urlConstant } from '../constants/urlConstants';

const saamarth = () => {
  // BANNER SECTION    
  const [bannerData, setBannerData] = useState({
    saamarthPage: {}
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.heroBanner,
      responseType: "json"
    })

      .then((res) =>
        setBannerData((prevState) => (
          { saamarthPage: res.data.saamarthPage }
        )))

      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // HELP SECTION
  const [helpData, seHelpData] = useState({
    saamarthPage: {},
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.helpSection,
      responseType: 'json',
    })
      .then((res) =>
        seHelpData((prevState) => (
          { saamarthPage: res.data.saamarthPage }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // CONTENT PARTNER SECTION
  // const [contentPartnerData, setContentPartnerData] = useState({
  //   contentPartner: {},
  // })
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://se.staticwebsite.in/posts/getContentSection",
  //     responseType: 'json',
  //   })
  //     .then((res) =>
  //       setContentPartnerData((prevState) => (
  //         { contentPartner: res.data.eaPage }
  //       )))
  //     .catch((err) =>
  //       console.log("error is ", err.message)
  //     )
  // }, [])


  return (
    <>
      <Head>
        <title>Finance for Non-Finance | Making Every Accounting Aspirant Job-Ready | Simandhar Education</title>
        <meta content='Simandhar’s Saamarth Workshop makes every accounting aspirant - US CPA, US CPA, and EA students job-ready, through soft-skills training and grooming sessions.' name='description'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta content='CPA, Certified Public Accountant, CPA Course, US CPA, Becker CPA, Simandhar CPA, AICPA, CPA Exam preparation, accounting course, 4 CPA exams, CPA subjects, CPA Syllabus, CPA testing center, CPA exam centers in India, CPA in india, CPA eligibility, CPA Curriculum, CA vs CPA, CPA exam pattern, CPA passing score, CPA duration, CPA license, CPA Exam in India, CMA, certified management accountant, US CMA, CMA USA in India, CMA full form, CMA exam, CMA Course, cma usa salary in india, cma usa course fees in india, cma usa salary in india,cma usa course fees in india, us cma salary in india' name='keywords'></meta>
        <link rel="canonical" href="https://simandhareducation.com/saamarth" />

        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What is simandhar samanrth workshp?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simandhar’s Saamarth workshop is dedicated to training accounting aspirants to help them secure their dream jobs. The workshop includes key accounting concepts revision, soft skills training, resume building sessions, and grooming sessions."
                }
              },{
                "@type": "Question",
                "name": "Who can attend the work shop? I am not student/alumni of simandhar? Am i eligibile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The workshop is open to both Simandhar student/alumni and non-Simandhar student. Any accounting aspirant who wants to build a prospective career in the finance and accounting fields can attend the workshop."
                }
              },{
                "@type": "Question",
                "name": "What will i get from the work shop?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The workshop will improve your overall skillset and confidence level to get your dream job in the Big 4s. By the end of this workshop, you will understand what interviewers will expect from the candidates and prepare accordingly. You can also attend exclusive placement drives conducted by Simandhar in collaboration with Big 4s and other Top MNCs."
                }
              },{
                "@type": "Question",
                "name": "What is the fee for the work shop?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The workshop fee is Rs. 15,000/- inclusive of taxes (validity of one year)"
                }
              },{
                "@type": "Question",
                "name": "what are the ways simandhar will support me in placements?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simandhar has a strong network of exclusive corporate relationships with the Big 4s such as Deloitte, EY, KPMG, PwC, and other Top MNCs. We have partnered with many companies for recruitment. You will be eligible for these exclusive placement drives. You will be mentored and have mock interviews before attending the real-interview to help you get your dream job."
                }
              }]
            }`}} />

      </Head>
      <Header />
      <div className="banner-saamarthPage">
        <BannerSection bannerData={bannerData.saamarthPage} showData={true} showImage={true} />
      </div>
      <div className="saamarthPage-table pt-8">
        <TableSection />
      </div>
      <SaamarthForm />
      <div className="saamarthPage-tabletwo">
        <TableSectiontwo />
      </div>

      <div className='background-none key-takeways saamarth-help-section' >
        <HelpSection helpData={helpData.saamarthPage} />
      </div>
      <WorkshopRedifine />

      {/* <div className="saamarthPage-tablethree">
                <TableSectiontwo  showData={true}/>
            </div> */}

      <div className="saamarthPagepartner">
        <CpaContent />
      </div>
      <FaqSectionSaamarth />
      <Footer />
    </>
  )
}

export default saamarth