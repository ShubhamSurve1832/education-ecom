import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Head from 'next/head'

import dynamic from "next/dynamic";
const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/footer'))
const Careers = dynamic(() => import('../CPAInner/careersContent'))
const CareerData = dynamic(() => import('../database/data/careerPage.json'))
import { urlConstants as urlConstant } from '../constants/urlConstants'


// import Header from '../components/Header'
// import Footer from "../components/footer";
// import Careers from '../CPAInner/careersContent'
// import CareerData from '../database/data/careerPage.json'
const careers = () => {
    // CAREER SECTION
    const [careerData, setCareerData] = useState({
        careerCard: [],
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.getCareerData,
            responseType: 'json',
        })
            .then((res) =>
            setCareerData((prevState) => (
                    { careerCard: res.data.careerCard }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])
    return (
        <>
            <Head>
                <title>Careers - Simandhar Education</title>
                <meta content='Unleash your potential and embark on a rewarding career with Simandhar. Explore limitless opportunities and shape your future success in a dynamic and supportive environment.' name='description'></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta content='CPA, CMA, EA, CPA career, Simandhar education, US CPA' name='keywords'></meta>
                <link rel="canonical" href="https://simandhareducation.com/careers" />
            </Head>
            <div className='width-50'>
                <Header showData={false} />
            </div>
            <Careers CareerData={careerData.careerCard} />
            <Footer />
        </>
    )
}

export default careers