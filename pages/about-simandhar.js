import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import dynamic from "next/dynamic";
import axios from 'axios';

const AboutUsBanner = dynamic(() => import('../about/AboutUsBanner')) //CMS NOT AVAILABLE
const ExpPlaceInfo = dynamic(() => import('../about/ExpPlaceInfo')) //CMS NOT AVAILABLE
const TESeducation = dynamic(() => import('../about/TESection')) //CMS NOT AVAILABLE
const VisionSection = dynamic(() => import('../about/VisionSection')) //CMS NOT AVAILABLE
const PrinceSection = dynamic(() => import('../about/PrinceSection')) //CMS NOT AVAILABLE
const PartnersSection = dynamic(() => import('../about/PartnersSection')) //CMS AVAILABLE
const RightStep = dynamic(() => import('../about/RightStep')) //CMS //CMS AVAILABLE AVAILABLE
const Header = dynamic(() => import('../components/Header'))

// import AboutUsBanner from '../about/AboutUsBanner';
// import ExpPlaceInfo from '../about/ExpPlaceInfo';
// import TESeducation from '../about/TESection';
// import VisionSection from '../about/VisionSection';
// import PrinceSection from '../about/PrinceSection';
// import PartnersSection from '../about/PartnersSection';
// import RightStep from '../about/RightStep';
// import Header from '../components/Header'
import Footer from "../components/footer";
import { urlConstants as urlConstant } from "@/constants/urlConstants";
import aboutUsData from '../database/aboutUs.json'
const aboutUS = () => {

  const [aboutUsData, setAboutUsData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let res = await axios.get(urlConstant.aboutUsData);
    setAboutUsData({ ...res.data })
  }
  // console.log(aboutUsData)

  return (
    <>
      <Head>
        <title>Learn About Simandhar: Our Mission, Team, and Expertise.</title>
        <meta content='Simandhar Education is Established 2017 by Sripal Jain (CA, CPA (USA)) quality education to prepare aspirants for success in the CPA, CMA, EA, IFRS professional exam.' name='description'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta content='cpa course in Hyderabad, cma institute in Hyderabad, cma course fees in india, cma india, us cpa coaching in india, certified management accountant in usa, best cpa coaching centres in india' name='keywords'></meta>
        <link rel="canonical" href="https://simandhareducation.com/about-simandhar" />
      </Head>
      <Header />
      <AboutUsBanner />
      <ExpPlaceInfo aboutUsData={aboutUsData.ExpPlaceInfo ? aboutUsData.ExpPlaceInfo : ''} />
      <TESeducation aboutUsData={aboutUsData.TESection ? aboutUsData.TESection : ""} />
      <VisionSection aboutUsData={aboutUsData.MVPdata ? aboutUsData.MVPdata : ""} />
      <RightStep />
      <PrinceSection aboutUsData={aboutUsData.princeData ? aboutUsData.princeData : ''} />
        <PartnersSection aboutUsData={aboutUsData.partnerData ? aboutUsData.partnerData :''} />
      <Footer />
    </>
  )
}

export default aboutUS;