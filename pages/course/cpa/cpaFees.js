import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Head from 'next/head'
import Header from '../../../components/Header'
import Footer from "../../../components/footer";
import CpaFees from '../../../CPAInner/uscpaFees' //CMS AVAILABLE
import { uscpaFees, uscmaFees } from '../../../database/data/fees.json'
import { urlConstants as urlConstant } from '../../../constants/urlConstants';


const cpaFees = () => {
    const [feesData, setFeesData] = useState({})
    useEffect(() => {
        fetchData()
    }, [])

    let fetchData = async () => {
        let res = await fetch(urlConstant.getFees)
        // console.log(feesData)

        let Feesdata =  await res.json();
        setFeesData({ ...Feesdata.uscpaFees })
    }
    return (
        <>
            <Head>
                <title>CPA Exam Fees and Pricing: Affordable Options at Simandhar</title>
                <meta content='Discover affordable CPA exam fees and pricing options at Simandhar. Prepare for your CPA journey without breaking the bank. Start your path to success today!"' name='description'></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta content='CPA fees, Simandhar CPA fees, CPA cost, Cost of CPA, CPA tital cost, CPA Fees in India, CPA exam fees' name='keywords'></meta>
                <link rel="canonical" href="https://simandhareducation.com/course/cpa/cpaFees" />

            </Head>
            <div className='width-50'>
                <Header showData={true} />
            </div>
            <CpaFees cpaTable={true} FeesData={feesData} />
            <Footer />
        </>
    )
}

export default cpaFees