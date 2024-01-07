import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/footer'
import Spinner from 'react-bootstrap/Spinner';


const paymentFailure = () => {
  return (
    <>
      <Head>
        <title>Payment Failure</title>
      </Head>
      <Header />

      <section class="thankyou-section">
        <div className="container">
          <div className="image">
            <Image loading='lazy' 
              src={"/img/payment_failure_icon.png"}
             fill={true} sizes='100vw' 
              className="resp-img "
              alt=""
            />
          </div>
          <h2 className="heading03 mt-4" style={{ color: '#760B28', fontSize: '7rem' }}>Oops! </h2>
          <p className="para1 mt-4">We encountered an error while processing your order.</p>
          <div className="line">
          </div>
          <p className="contact-us">Would you like to connect already? <Link href="/contact" className="">Contact us</Link></p>
          <Link href="/"><p class="btn maroon-btn maroon-arrow-btn">
            Back to Homepage</p></Link>
        </div>
        {/* <div className="simple-spinner">
          <span></span>
        </div> */}
      </section>
      <Footer />
    </>
  )
}

export default paymentFailure;