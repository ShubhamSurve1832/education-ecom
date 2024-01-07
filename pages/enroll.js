import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/footer'

export default function PaymentForm() {
    return (
        <>
            <Head>
                <title>Enrollment - Payment Gateway | Simandhar Education</title>
            </Head>
           <Header />
            <iframe src="/pmt/simpmt2.html" width="100%" height="1800px" scrolling="no" />
            <Footer />
        </>
    )
}