import React from 'react'
import axios from 'axios';
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
// import Header from '../components/Header'
// import Footer from "../components/footer";
// import Video from '../home/videoSection'
// import CorporateLogos from '../CPA/CorporateLogos';
// import RegisterForm from '../components/registrationForm'
// import videoData from '../database/data/videoSection.json'

import { urlConstants as urlConstant } from '../constants/urlConstants';

import dynamic from "next/dynamic";
const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/footer'))
const Video = dynamic(() => import('../home/videoSection'))
const CorporateLogos = dynamic(() => import('../CPA/CorporateLogos'))
const RegisterForm = dynamic(() => import('../components/registrationForm'))
const videoData = dynamic(() => import('../database/data/videoSection.json'))

const corporateJurney = () => {
  // VIDEO DATA
  const [videoData, setvideoData] = useState({
    corporateJourneyPage: {},
  });
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.videoSection,
      responseType: "json",
    })
      .then((res) =>
        setvideoData((prevState) => ({ corporateJourneyPage: res.data.corporateJourneyPage }))
      )
      .catch((err) => console.log("error is ", err.message));
  }, []);

  // CORPORATE JOURNEY PAGE
  const [corporateLogosData, setCorporateLogosData] = useState({
    CorporateLogos: {}
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.corporateLogos,
      responseType: 'json',
    })
      .then((res) =>
        setCorporateLogosData((prevState) => (
          { CorporateLogos: res.data.CorporateLogos }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])
  // console.log(corporateLogosData.CorporateLogos)
  return (
    <>
      <Head>
        <title>Corporate Journey - Simandhar Education</title>
        <meta content='Discover how Sripal Jain"s leadership at Simandhar Education has revolutionized accounting and finance training, enabling professionals to excel in their careers.' name='description'></meta>
        <meta content='Corporate journey, Simandhar education, CPA, CMA, SImandhar corporate tie up, EA, Corporate journey, Big4, MNCs, ' name='keywords'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <link rel="canonical" href="https://simandhareducation.com/corpotate-journey" />
        
        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "Corporate Journey - Simandhar Education CPA USA and CMA USA",
              "description": "Our Corporate Journey till now.",
              "thumbnailUrl": "https://i.ytimg.com/vi/_xwBjbmRpl0/hqdefault.jpg",
              "uploadDate": "2020-10-12",
              "duration": "PT2M29S",
              "contentUrl": "https://youtu.be/_xwBjbmRpl0"
            }`}} />

        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "Our Co founder CA,CPA Sripal Jain Journey with Corporate leaders | CPA | Big 4 | CPA course  Simandhar",
              "description": "Simandhar Education believes in developing an ecosystem for CPA, CMA, and EA professionals. The entire Simandhar Education team is overjoyed to see Mr. Sripal Jain, meet visionary leaders not only in India, but all over the world! The major topic of discussion has been: the future of Finance in India. He has worked tirelessly to make Simandhar Education the most trusted institute in India",
              "thumbnailUrl": "https://i.ytimg.com/vi/juMQqBGsgp8/maxresdefault.jpg",
              "uploadDate": "2023-01-02",
              "duration": "PT1M48S",
              "contentUrl": "https://youtu.be/juMQqBGsgp8"
            }`}} />


      </Head>
      <Header />
      <div className="journey-page">
        <Video videoData={videoData.corporateJourneyPage} />
      </div>
      <section className="section text-center corporatjourney-section">
        <div className="container justify">
          <p>These sessions covered a range of topics, including revenue recognition, leases, and other financial and accounting matters.</p>
          <p className='mt-4'>Mr. Jain's dedication to continuous learning and improvement is evident through his attendance at these events and conferences. Learning is a constant process and Sripal keeps himself up to date on the latest trends hence provides the best practices and immense knowledge to the corporate world. His commitment to personal and professional development has undoubtedly contributed to his successful foundation of Simandhar Education. His passion for teaching serves as an inspiration to others who aspire to excel in their finance and accounting career. This network with BIG 4 accounting firms and other MNCs has proved to be a bridge between the CPA, CMA, EA candidates at Simandhar and the respective employers.</p>
          <p className='mt-4'>Sripal Jain's efforts in co-founding and leading Simandhar Education have been critical to the success and growth of the organisation. Under his leadership, Simandhar Education has achieved significant milestones, including the launch of new courses and certifications, expansion into new geographies, and the establishment of strategic partnerships with leading industry players. His unwavering commitment to quality, innovation and discipline has helped Simandhar Education become a trusted and valued provider of accounting and finance training, and his vision and leadership continue to drive the organisation's growth and success.</p>
        </div>
      </section>

      <CorporateLogos corporateLogosData={corporateLogosData.CorporateLogos} />

      <RegisterForm formName="corporate journey form" />
      <Footer />

    </>
  )
}

export default corporateJurney