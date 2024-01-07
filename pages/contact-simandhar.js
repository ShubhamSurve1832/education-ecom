import React from 'react'
import Head from 'next/head'

import dynamic from "next/dynamic";
const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/footer'))
const Contact = dynamic(() => import('../CPA/contactUs'))
// import Header from '../components/Header'
// import Contact from '../CPA/contactUs';
// import Footer from "../components/footer";
const contact = () => {
  return (
    <>
    <Head>
        <title>Contact Us - Simandhar Education</title>
        <meta content='Connect with Simandhar through our Contact Us page. Reach out for inquiries, assistance, or collaboration opportunities. We are here to provide prompt and helpful support.' name='description'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta content='Contact us, Simandhar education, CPA , CMA, EA' name='keywords'></meta>
        <link rel="canonical" href="https://simandhareducation.com/contact-simandhar" />
      </Head>
      <Header />

      <div className="cpaInnerCon">
      <Contact />
      </div>

      <Footer/>

    </>
  )
}

export default contact