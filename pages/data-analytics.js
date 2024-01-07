import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header'
import Footer from "../components/footer";
import BannerSection from '../CPA/BannerSection'
import ExamSection from '../CPA/ExamSection'
import Batches from '../CPA/Batches'
import AchieversSection from '../CPA/AchieversSection'
import Analytics from '../CPA/AnalyticsSection'
import DaContent from '../contentpartner/DaContent'
import Highlight from '../CPA/Highlights'


// import bannerData from '../database/data/banner.json'
// import achieverData from '../database/data/achieversSection.json'
// import contentPartnerData from '../database/data/contentSection.json'
// import examData from '../database/data/exam.json'
import batcheData from '../database/index.json'
import { urlConstants as urlConstant } from '../constants/urlConstants';

export default function DataAnalytics() {

  // BANNER SECTION    
  const [bannerData, setBannerData] = useState({
    daPage: {}
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.heroBanner,
      responseType: "json"
    })

      .then((res) =>
        setBannerData((prevState) => (
          { daPage: res.data.daPage }
        )))

      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // EXAM SECTION    
  const [examData, setExamData] = useState({
    daPage: {}
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.examSection,
      responseType: "json"
    })

      .then((res) =>
        setExamData((prevState) => (
          { daPage: res.data.daPage }
        )))

      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // ACHIVER SECTION
  const [achieverData, setAchieverDataData] = useState({
    daPage: {},
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.achiverSection,
      responseType: 'json',
    })
      .then((res) =>
        setAchieverDataData((prevState) => (
          { daPage: res.data.daPage }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // CONTENT PARTNER SECTION
  const [batcheData, setBatcheData] = useState({
    batchesDataPage: {},
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.indexData,
      responseType: 'json',
    })
      .then((res) =>
        setBatcheData((prevState) => (
          { batchesDataPage: res.data.batchesDataPage }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  return (
    <>
      <Head>
        <title>Data Analytics Course in Finance | Simandhar Education</title>
        <meta content='Data Analytics Course is an overview of financial analytics Data Analytics will help you make well-informed choices that are backed by data in corporate finance' name='description'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta content='data analytics in corporate finance,learning finance and data analytics courses,big data analytics in finance,use case of big data analytics in finance,data analytics applications in finance,data analytics in finance course,data analytics in finance function,data analytics in finance syllabus,data analytics projects in finance,data analytics use cases in finance how is data analytics used in finance,importance of data analytics in finance, masters in finance and data analytics,use of data analytics in finance, advantages of data analytics in finance' name='keywords'></meta>
        <link rel="canonical" href="https://simandhareducation.com/data-analytics" />
      </Head>
      <Header />
      {/* <CpaProgram /> */}
      {/* <div className='da-banner'>
        <BannerSection bannerData={bannerData.daPage} showData={true} showImage={true}/>
      </div> */}
      <div>
        <img src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/DA-Landing-Page_Opt2.jpg" alt="" />
      </div>
        <section className='analytics-section section'>
                <div className="container-l">
                    <h2 className='heading02'>About Data Analytics</h2>
                    <h3 className="title01">This course combines simple statistical and data visualisation tools to give participants the skills they need to analyse data. Participants should be able to execute the required financial analysis using strong tools by the end of this course. As an analyst, manager, or consultant, you'll need to understand financial data. </h3>
                    </div></section>
      
      <div className='da-exam'>
        <ExamSection examData={examData.daPage} /></div>
      {/* <Batches batcheData={batcheData.batchesDataPage} /> */}
     
      <div>
        <Analytics />
      </div>
      <div>
        <Highlight />
      </div>
      <div className='ifrs-content'>
        <DaContent />
      </div>
      <div className='da-achievers'>
        <AchieversSection achieverData={achieverData.daPage} showData={true} showData1={true} />
        </div>
      
      <Footer />


    </>
  )
}
