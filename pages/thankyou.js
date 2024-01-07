import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from '../components/Header'
import Footer from '../components/footer'
const ThankYou = () => {
  return (
    <>
    <Head>
    <title>Thank You</title>
     {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-826080113"></script>  */}
      {/*<script type='application/ld+json' dangerouslySetInnerHTML={{
      __html:    `
        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-826080113'); 
        `}} /> */}

        <script 
            dangerouslySetInnerHTML={{
            __html: `gtag('event', 'conversion', {'send_to': 'AW-826080113/MnnkCJbf0LYYEPH284kD'});`,
          }}
        />
    </Head>
      <Header />
      <section className="thankyou-section">
        <div className="container">
          <div className="image">
          <Image loading='lazy' 
            src={"/img/Thankyou-tickmark.png"}
           fill={true} sizes='100vw'
            className="resp-img "
            alt="Thank you icon"
          />
          </div>
          <h2 className="heading02">Thank You!</h2>
          <p className="para1">We really appreciate your interest, our experts will reach you soon.</p>
          <div className="line">

          </div>
          <p className="contact-us">Having trouble? <Link href="/contact-simandhar" className="">Contact us</Link></p>
          <Link href="/"><p className="btn maroon-btn maroon-arrow-btn">Back to Homepage</p></Link>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ThankYou