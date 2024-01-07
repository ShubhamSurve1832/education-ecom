import React, { useState, useEffect } from 'react'
import dynamic from "next/dynamic";
import Head from 'next/head'
import axios from 'axios';
import { urlConstants as urlConstant } from '../constants/urlConstants';
const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/footer'))
const CorporateEvent = dynamic(() => import('../CPAInner/CorporateEvents')) //CMS AVAILABLE
const CorporateRecord = dynamic(() => import('../CPAInner/corporateRecord')) //CMS AVAILABLE
const CorporateWebinars = dynamic(() => import('../CPAInner/corporateWebinars')) //CMS AVAILABLE
const corporateEventData = dynamic(() => import('../database/data/corporateData.json'))

// import Header from '../components/Header'
// import Footer from "../components/footer";
// import CorporateEvent from '../CPAInner/CorporateEvents'
// import CorporateRecord from '../CPAInner/corporateRecord'
// import CorporateWebinars from '../CPAInner/corporateWebinars'
// import corporateEventData from '../database/data/corporateData.json'

const CorporateEvents = () => {
    //corporateEventData
    const [corporateEventData, setCorporateEventData] = useState({
        corporateEventData: {},
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.corporateData,
            responseType: 'json',
        })
            .then((res) =>
                setCorporateEventData((prevState) => (
                    { corporateEventData: res.data.corporateEventData }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])

    //corporateEventData
    const [corporateEventData1, setCorporateEventData1] = useState({
        corporateWebinardata: {},
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.corporateData,
            responseType: 'json',
        })
            .then((res) =>
                setCorporateEventData1((prevState) => (
                    { corporateWebinardata: res.data.corporateWebinardata }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])

    //corporateEventData
    const [corporateEventData2, setCorporateEventData2] = useState({
        allWebinars: {},
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.corporateData,
            responseType: 'json',
        })
            .then((res) =>
                setCorporateEventData2((prevState) => (
                    { allWebinars: res.data.allWebinars }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])
    return (
        <>
            <Head>
                <title>CPA, CMA Webinar Corporate Session Feedback | Simandhar Education</title>
                <meta content='Numerous webinar sessions have helped our clients know the intricacies and nuances of the domains they plan on joining after finishing their course with us' name='description'></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta content='corporate, corporate session, corporate webinar, recorded webinars' name='keywords'></meta>
                <link rel="canonical" href="https://simandhareducation.com/corporate-events" />
            </Head>
            <Header />
            <CorporateEvent corporateEventData={corporateEventData.corporateEventData} />
            <div id="corporate-record">
                <CorporateRecord corporateEventData={corporateEventData1.corporateWebinardata} />
            </div>
            <CorporateWebinars corporateEventData={corporateEventData2.allWebinars} />
            <Footer />

        </>
    )
}

export default CorporateEvents