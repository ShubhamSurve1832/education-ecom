import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import _ from 'lodash'
import axios from "axios";

//components
import CourseList from "../components/CourseList";
import Header from "../components/Header";
import Footer from "../components/footer";
import { urlConstants } from "../constants/urlConstants";
import { AUTH_KEY_NAME, statusConstants } from "../constants/statusCodes";
import { getCookie } from "cookies-next";
import Spinner from "../components/comman/Spinner";
import { useSelector } from "react-redux";
import Script from "next/script";

const Academy = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  // COURSE LISTING
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCourses = async () => {
    try {
      setLoading(true);
      const headers = {
        Authorization: `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`,
      }
      const response = await axios.get(urlConstants.getAllCourses, { headers: headers });

      if (response.status === statusConstants.ok) {
        const updatedCourses = response.data.courses.map(course => {
          const isInCart = cartItems.some(item => item.title.trim() === course.title.trim());
          return {
            ...course,
            inCart: isInCart,
          };
        });
        setCourses(updatedCourses);
      }
    } catch (error) {
      console.log("🚀 ~ file: courseListing.js:30 ~ getCourses ~ error:", error)
      setError('Error retrieving Similar Courses.');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log("Environment ==>", process.env.NEXT_PUBLIC_ENV);
    getCourses();
  }, []);

  // if (typeof window === "object") {
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag() { dataLayer.push(arguments) }
  //   gtag('js', new Date());
  //   gtag('config', 'AW-826080113');
  // }

  // console.log("course Lists",courses)
  return (
    <>
      <Head>
        <title>Start CPA, CMA, EA Journey with Simandhar's 1-Click Purchase!</title>
        <meta name="description" content="Explore Simandhar's latest e-commerce platform and excel in your US CPA, US CMA, EA preparation with our premium study resources and professional mentorship" />
        <meta name="keywords" content="CPA, CPA course, CMA, CMA course, CMA exam, US CMA, US CPA, CPA course details, EA, ACCA, IFRS, CIA, Data Analytics, CPA cost, CMA cost, enrolled agent course, EA course" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <link rel="canonical" href="https://simandhareducation.com/academy" />
        {/* <!-- Google tag (gtag.js) --> */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-826080113"></script> */}
        {/* <script     type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'AW-826080113');`}}
        /> */}
        <script     type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
          `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],          
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=        
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);          
          })(window,document,'script','dataLayer','GTM-PW2JTZ3');`}}
        />

    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: `{
        "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "Simandhar E-Commerce",
      "image": "",
      "description": "Elevate your career with Simandhar Academy's elite courses. Explore CPA, CMA, EA, and more. Expert guidance, 100% job support. Shop now!",
      "brand": {
        "@type": "Brand",
        "name": "Simandhar Education"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.simandhareducation.com/academy",
        "priceCurrency": "",
        "price": ""
      }
      }`
    }} />

        
      </Head>
      {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PW2JTZ3" height="0" width="0" style={{"display":"none","visibility":"hidden"}}></iframe></noscript> */}

      <Header />

      <div className='course-listing-wrapper'>
        <h1 className='heading02'>Our Courses</h1>
        <section className='nc-section'>
          <div className='container-l'>
            {/* <h3 className='heading03'>New Course</h3> */}
            {/* <CourseList  /> */}
          </div>
        </section>
        <section className='ac-section'>
          <div className='container'>
            <h3 className='heading03'>All Courses</h3>
            <div className="course-listing-row">
              {/* <CourseFilter /> */}
              <div className="all-course-list">
                {loading ? (<Spinner />) : (<CourseList courseData={courses} />)}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      {/* </Format> */}
    </>
  );

}

export default Academy;