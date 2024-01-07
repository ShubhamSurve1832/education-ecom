import React from 'react'
import axios from 'axios';
import Head from 'next/head'
import { useState, useEffect } from 'react';
import { urlConstants as urlConstant } from '../constants/urlConstants';

import dynamic from "next/dynamic";
const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/footer'))
const AchieversSection = dynamic(() => import('../CPA/AchieversSection'))
const SECFeactures = dynamic(() => import('../CPA/SECFeactures'))
const StudentEngagement = dynamic(() => import('../CPA/StudentEngagement'))
const SecBanner = dynamic(() => import('../CPA/secBanner'))
const NewsLetter = dynamic(() => import('../CPA/NewsLetter'))
const SocialMedia = dynamic(() => import('../CPA/SocialMedia'))
const FaqSection = dynamic(() => import('../CPA/FaqSEC'))
const indexData = dynamic(() => import('../database/index.json'))


// import Header from '../components/Header'
// import Footer from "../components/footer";
// import StudentEngagement from '../CPA/StudentEngagement'
// import SECFeactures from '../CPA/SECFeactures'
// import AchieversSection from '../CPA/AchieversSection'
// import SecBanner from '../CPA/secBanner'
// import achieverData from '../database/data/achieversSection.json'
// import NewsLetter from '../CPA/NewsLetter'
// import SocialMedia from '../CPA/SocialMedia'
// import FaqSection from '../CPA/FaqSEC'
// import indexData from '../database/index.json'


const sec = () => {
     // FEATURES DATA
     const [FeacturesData, setFeacturesData] = useState({
        homePage: {},
      });
      useEffect(() => {
        axios({
          method: "get",
          url: urlConstant.indexData,
          responseType: "json",
        })
          .then((res) =>
          setFeacturesData((prevState) => ({ homePage: res.data.SECFeactures }))
          )
          .catch((err) => console.log("error is ", err.message));
      }, []);

    // ACHIVER SECTION
    const [achieverData, setAchieverData] = useState({
        secPage: {},
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.achiverSection,
            responseType: 'json',
        })
            .then((res) =>
                setAchieverData((prevState) => (
                    { secPage: res.data.secPage }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])

    return (
        <>
            <Head>
                <title>SEC - Student Engagement Council</title>
                <meta content="The Simandhar's Student Engagement Council (SEC) is dedicated to deepening student engagement within the accounting domain and providing them corporate exposure via sessions and interactive events." name='description'></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta content='SEC, CPA, CMA, CPA alumni, CMA alumni, Student engagment council' name='keywords'></meta>
                <link rel="canonical" href="https://simandhareducation.com/sec" />
            </Head>
            <div className="width-50">
                <Header />
            </div>
            <StudentEngagement />
            <SecBanner />
            <SECFeactures indexData={FeacturesData.homePage} />
            <AchieversSection achieverData={achieverData.secPage} showData={true} />
            <NewsLetter />
            <SocialMedia />
            <FaqSection />
            <Footer />



        </>
    )
}

export default sec