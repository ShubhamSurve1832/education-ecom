import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from '../components/Header'
import Footer from '../components/footer'

const Errors = () => {
  return (
    <>
    <Head>
      <title> 404</title>
    </Head>
       <Header />
      <section className="Errors-section">
      <div className="container">
          <div className="image">
          <Image loading='lazy' 
            src={"/img/Oops-img.png"}
           fill={true} sizes='100vw' 
            className="resp-img "
            alt="Error Image"
          />
          </div>
          <h2 className="heading02">Oops!</h2>
          <p className="para1">404 Error - Page Not Found</p>
          <p className="messg">The page you are looking for doesn't exist.</p>
          <p><Link href="/" className="btn maroon-btn maroon-arrow-btn">Back to Homepage</Link></p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Errors