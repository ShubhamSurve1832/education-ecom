import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../../../components/Header'
import Footer from "../../../components/footer";
import CpaFees from '../../../CPAInner/uscpaFees'
import { uscmaFees } from '../../../database/data/fees.json'
import { urlConstants as urlConstant } from '../../../constants/urlConstants';


const cmaFees = () => {
    const [feesData, setFeesData] = useState({})
    useEffect(() => {
        fetchData()
    }, [])

    let fetchData = async () => {
        let res = await fetch(urlConstant.getFees)
        let Feesdata =  await res.json();
        setFeesData({ ...Feesdata.uscmaFees })
    }


    return (
        <>
            <Head>
                <title>CMA Exam Fees and Pricing: Affordable Options at Simandhar Education | US CMA</title>
                <meta content='Discover affordable CMA exam fees and pricing options at Simandhar. Prepare for your CMA journey without breaking the bank. Start your path to success today!"' name='description'></meta>
                <meta content='CMA fees, Simandhar CMA fees, CMA cost, Cost of CMA, CMA tital cost, CMA Fees in India, CMA exam fees' name='keywords'></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <link rel="canonical" href="https://simandhareducation.com/course/cma/cmaFees" />
            </Head>
            <div className='width-50'>
                <Header showData1={true} />
            </div>
            <CpaFees cpaTable={false} FeesData={feesData} />
            <Footer />
        </>
    )
}

export default cmaFees