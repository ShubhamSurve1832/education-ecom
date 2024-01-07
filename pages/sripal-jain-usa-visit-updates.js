import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import axios from 'axios';


import dynamic from "next/dynamic";
const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/footer'))
const Sripal = dynamic(() => import('../CPA/SripalJainSection'))
import { urlConstants as urlConstant } from '../constants/urlConstants'

// import Header from '../components/Header'
// import Footer from "../components/footer";
// import Sripal from '../CPA/SripalJainSection'
// import SripalData from '../database/data/sripalJain.json'

const sripal = () => {
    const [sripalData, setSripalData] = useState({
        sripalJain: {}
    })
    // SRIPAL USA VISIT PAGE
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.getSripalData,
            responseType: 'json',
        })
            .then((res) =>
                setSripalData((prevState) => (
                    { sripalJain: res.data.sripalJain }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])
    // console.log(sripalData.sripalJain)
    return (
        <>
            <Head>
                <title>Sripal Jain USA Visit</title>
                <meta content='Join Mr. Sripal Jain as he meets industry leaders in the USA, forging relationships and gaining insights in finance and accounting.' name='description'></meta>
                <meta content='CPA, CPA course, US CPA, Sripal Jain visit, CMA, EA, CPA exam, Sripal jain US visit' name='keywords'></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <link rel="canonical" href="https://simandhareducation.com/sripal-jain-usa-visit-updates" />
            </Head>
            <Header />
            <Sripal SripalData={sripalData.sripalJain} />
            <Footer />
        </>
    )
}

export default sripal