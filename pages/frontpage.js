import React from 'react'

const frontpage = () => {
  return (
    <div>frontpage</div>
  )
}

export default frontpage

// import Head from "next/head";
// import { useEffect, useState, useRef } from "react";
// import _ from 'lodash'
// import axios from "axios";
// import dynamic from "next/dynamic";

// //components
// const Format = dynamic(() => import('../layout/format'))
// const Banner = dynamic(() => import('../home/bannerSection'))
// const Usp = dynamic(() => import('../home/uspSection'))
// const Eduction = dynamic(() => import('../home/educationSection'))
// const Programm = dynamic(() => import('../home/programmSection'))
// const Placement = dynamic(() => import('../home/placementSection'))
// const Founder = dynamic(() => import('../home/founderSection'))
// const Video = dynamic(() => import('../home/videoSection'))
// const AchieversSection = dynamic(() => import('../CPA/AchieversSection'))
// const Partner = dynamic(() => import('../home/partnerSection'))
// const Award = dynamic(() => import('../home/awardSection'))
// const ContactUs = dynamic(() => import('../home/contactUsSection'))
// const Header = dynamic(() => import('../components/Header'))
// const Footer = dynamic(() => import('../components/footer'))
// const Spinner = dynamic(() => import('../components/comman/Spinner'))

// // import Banner from "../home/bannerSection";
// // import Usp from "../home/uspSection";
// // import Eduction from "../home/educationSection";
// // import Programm from "../home/programmSection";
// // import Placement from "../home/placementSection";
// // import Founder from "../home/founderSection";
// // import Video from "../home/videoSection";
// // import AchieversSection from "../CPA/AchieversSection";
// // import Partner from "../home/partnerSection";
// // import Award from "../home/awardSection";
// // import ContactUs from "../home/contactUsSection";
// // import OfferSection from "../home/OfferSection";
// // import Header from "../components/Header";
// // import Footer from "../components/footer";
// // import Spinner from '../components/comman/Spinner';

// // Data
// import indexData from "../database/index.json";
// import { urlConstants as urlConstant } from "@/constants/urlConstants";

// export default function Home({ showPopup }) {
//   // const [isLoading, setIsLoading] = useState(true);
//   //  Simulate loading data
//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setIsLoading(false);
//   //   }, 2000);
//   // }, []);


//   let gl_flag = true;
//   if ( typeof navigator !== 'undefined' && ((navigator.userAgent.toLowerCase().indexOf('chrome-lighthouse') > -1) || (navigator.userAgent.toLowerCase().indexOf('pingdompagespeed')  > -1 ) ) ){
//       gl_flag = false;
//     }

//   //BANNER PAGE DATA
//   const [bannerData, setBannerData] = useState({
//     bannerData: {},
//   });
    
//   useEffect(() => {
//     axios({
//       method: "get",
//       url: urlConstant.indexData,
//       responseType: "json",
//     })
//       .then((res) =>
//         setBannerData((prevState) => ({
//           bannerData: res.data.homeScreenBanners,
//         }))
//       )
//       .catch((err) => console.log("error is ", err.message));
//   }, []);
  

//   // ACHIVER SECTION
//   const [data, setData] = useState({
//     homePage: {},
//   });
//   useEffect(() => {
//     axios({
//       method: "get",
//       url: urlConstant.achiverSection,
//       responseType: "json",
//     })
//       .then((res) => setData((prevState) => ({ homePage: res.data.homePage })))
//       .catch((err) => console.log("error is ", err.message));
//   }, []);

//   //OFFER ROW PAGE DATA
//   const [offerData, setOfferData] = useState({
//     offerRow: {},
//   });
//   useEffect(() => {
//     axios({
//       method: "get",
//       url: urlConstant.indexData,
//       responseType: "json",
//     })
//       .then((res) =>
//         setOfferData((prevState) => ({ offerRow: res.data.offerRow }))
//       )
//       .catch((err) => console.log("error is ", err.message));
//   }, []);

//   //INDEX PAGE DATA
//   const [placementAlumniData, setPlacementAlumniData] = useState({
//     placementAlumni: {},
//   });
  
//   useEffect(() => {
//     axios({
//       method: "get",
//       url: urlConstant.indexData,
//       responseType: "json",
//     })
//       .then((res) =>
//         setPlacementAlumniData((prevState) => ({
//           placementAlumni: res.data.placementAlumni,
//         }))
//       )
//       .catch((err) => console.log("error is ", err.message));
//   }, []);
//   // VIDEO DATA
//   const [videoData, setvideoData] = useState({
//     homePage: {},
//   });
//   useEffect(() => {
//     axios({
//       method: "get",
//       url: urlConstant.videoSection,
//       responseType: "json",
//     })
//       .then((res) =>
//         setvideoData((prevState) => ({ homePage: res.data.homePage }))
//       )
//       .catch((err) => console.log("error is ", err.message));
//   }, []);

//   // EDUCATION SECTION HOME PAGE
//   const [educationData, setEducationData] = useState({
//     education: {},
//   });
//   useEffect(() => {
//     axios({
//       method: "get",
//       url: urlConstant.indexData,
//       responseType: "json",
//     })
//       .then((res) =>
//         setEducationData((prevState) => ({ education: res.data.education }))
//       )
//       .catch((err) => console.log("error is ", err.message));
//   }, []);

//   // EDUCATION SECTION HOME PAGE
//   const [corporateTabData, setCorporateTabData] = useState({
//     corporateTab: {},
//   });
//   useEffect(() => {
//     axios({
//       method: "get",
//       url: urlConstant.indexData,
//       responseType: "json",
//     })
//       .then((res) =>
//         setCorporateTabData((prevState) => ({
//           corporateTab: res.data.corporateTab,
//         }))
//       )
//       .catch((err) => console.log("error is ", err.message));
//   }, []);

//   // program DATA
//   const [programData, setProgramData] = useState({
//     homePage: {},
//   });
//   useEffect(() => {
//     axios({
//       method: "get",
//       url: urlConstant.indexData,
//       responseType: "json",
//     })
//       .then((res) =>
//         setProgramData((prevState) => ({ homePage: res.data.programTab }))
//       )
//       .catch((err) => console.log("error is ", err.message));
//   }, []);



//   const myRef = useRef();
//   useEffect(() => {
//   }, []);
//   const [navBar, setNavBar] = useState(false);

//   const changebackground = () => {
//     console.log(window.scrollY);
//     if (window.scrollY >= 2000) {
//       setNavBar(true);
//     } else {
//       setNavBar(false);
//     }
//   };


//   return (
//     <>
//       <Head>
//         <title>Best US CPA Training Institute India | Course Eligibility, Duration & Fee | Simandhar Education</title>
//         <meta content='Simandhar Education is a leading online CPA, CMA, and EA Institute offering live classes in Accounting & Finance with 100% Job assistance' name='description' />
//         <meta content='CPA Online training course, CPA, CMA, US CPA courses, US CMA courses, CMA exam, certified management accountant, CMA usa online classes certified public accountant, cma usa, cpa usa, CMA Online training, best cpa institute in Hyderabad, best cpa training centre in Hyderabad, cpa usa from india, cpa coaching centres in india, cpa course in Hyderabad, cpa course from India, cma course details, Certified Public Accountant, Certified Management Accountant, Becker professional education, Enrolled agent Course, IFRS Course, Simandhar Education,CIA course,cia in india,ea course,cia training institute , CPA USA in Bangalore, CPA Training in Bangalore, CPA Coaching in Bangalore, CPA Classes in Bangalore, cpa in bangalore, us cpa in bangalore, cpa in bangalore, CMA USA in Bangalore, CMA Training in Bangalore, CMA Coaching in Bangalore, CMA Classes in Bangalore, cma in bangalore, us cma in bangalore, cma in bangalore, US CMA, US CMA Course, US CMA Syllabus, US CMA Course Details, CPA USA in Bangalore, CPA Training in Bangalore, CPA Coaching in Bangalore, CPA Classes in Bangalore, cpa in bangalore, us cpa in bangalore, cpa in bangalore, CPA Exam in India, CPA India, CPA Exam Available in India, CPA, CPA Course, CPA USA course, CPA USA Course details, CPA in India .US CPA Course, US CPA Exam cpa course in delhi, US CPA coaching in Delhi, CPA Coaching in Delhi, CPA USA in Delhi, CPA USA in Gurgaon, CPA Coaching in Mumbai, CPA Course near me, CMA Program, CMA Certification Certified Management Accountant, US CMA Salary, CMA in Bangalore, CMA USA in Bangalore, CMA Training in Bangalore, CMA Coaching in Bangalore, CMA Classes in Bangalore, US CMA in Bangalore, CMA course in delhi, US CMA coaching in Delhi, CPA Coaching in Delhi, CPA USA in Delhi, CMA USA in Gurgaon, CMA Coaching in Mumbai, CMA Course near me, cma course in bangalore, cma training in bangalore, cma colleges in bangalore, cma course colleges in bangalore, wiley cma, cma exam academy, best cma institute in bangalore, best cma coaching in bangalore, best cfa coaching in bangalore, cpa coaching, uscpa, cma full form' name='keywords' />
//         <link rel="canonical" href="https://simandhareducation.com/" />
//         {/* </meta> */}

//         <script type='application/ld+json' dangerouslySetInnerHTML={{
//           __html: `{  "@context": "https://schema.org/", 
//             "@type": "BreadcrumbList", 
//             "itemListElement": [{
//               "@type": "ListItem", 
//               "position": 1, 
//               "name": "Home page",
//               "item": "https://simandhareducation.com/"  
//             },{
//               "@type": "ListItem", 
//               "position": 2, 
//               "name": "About us page",
//               "item": "https://simandhareducation.com/about-simandhar"  
//             },{
//               "@type": "ListItem", 
//               "position": 3, 
//               "name": "CPA course",
//               "item": "https://simandhareducation.com/course/cpa/"  
//             },{
//               "@type": "ListItem", 
//               "position": 4, 
//               "name": "CMA course",
//               "item": "https://simandhareducation.com/course/cma/"  
//             },{
//               "@type": "ListItem", 
//               "position": 5, 
//               "name": "EA course",
//               "item": "https://simandhareducation.com/course/ea/"  
//             },{
//               "@type": "ListItem", 
//               "position": 6, 
//               "name": "CIA course",
//               "item": "https://simandhareducation.com/course/cia/"  
//             },{
//               "@type": "ListItem", 
//               "position": 7, 
//               "name": "IFRS course",
//               "item": "https://simandhareducation.com/course/ifrs/"  
//             },{
//               "@type": "ListItem", 
//               "position": 8, 
//               "name": "ACCA course",
//               "item": "https://simandhareducation.com/acca/"  
//             },{
//               "@type": "ListItem", 
//               "position": 9, 
//               "name": "Data Analytics",
//               "item": "https://simandhareducation.com/data-analytics/"  
//             },{
//               "@type": "ListItem", 
//               "position": 10, 
//               "name": "Simandhar saamarth",
//               "item": "https://simandhareducation.com/saamarth/"  
//             },{
//               "@type": "ListItem", 
//               "position": 11, 
//               "name": "Corporate Event",
//               "item": "https://simandhareducation.com/webinars"  
//             },{
//               "@type": "ListItem", 
//               "position": 12, 
//               "name": "Free resources",
//               "item": "https://simandhareducation.com/free-resources"  
//             },{
//               "@type": "ListItem", 
//               "position": 13, 
//               "name": "Student corner",
//               "item": "https://simandhareducation.com/blogs/category/student-corner/"  
//             },{
//               "@type": "ListItem", 
//               "position": 14, 
//               "name": "Sripal Jain USA visit page",
//               "item": "https://simandhareducation.com/sripal-jain-usa-visit-updates"  
//             },{
//               "@type": "ListItem", 
//               "position": 15, 
//               "name": "Corporate journey",
//               "item": "https://simandhareducation.com/news-events"  
//             },{
//               "@type": "ListItem", 
//               "position": 16, 
//               "name": "Corporate tie ups",
//               "item": "https://simandhareducation.com/tie-ups"  
//             },{
//               "@type": "ListItem", 
//               "position": 17, 
//               "name": "SEC page",
//               "item": "https://simandhareducation.com/sec"  
//             },{
//               "@type": "ListItem", 
//               "position": 18, 
//               "name": "testimonial page",
//               "item": "https://simandhareducation.com/testimonial"  
//             },{
//               "@type": "ListItem", 
//               "position": 19, 
//               "name": "testimonial videos",
//               "item": "https://simandhareducation.com/testimonial-videos"  
//             },{
//               "@type": "ListItem", 
//               "position": 20, 
//               "name": "Blogs",
//               "item": "https://simandhareducation.com/blogs/"  
//             },{
//               "@type": "ListItem", 
//               "position": 21, 
//               "name": "Career page",
//               "item": "https://simandhareducation.com/career/job"  
//             },{
//               "@type": "ListItem", 
//               "position": 22, 
//               "name": "Contact us",
//               "item": "https://simandhareducation.com/contact-simandhar"  
//             }]
//           }
//         `}} />

//         <script type='application/ld+json' dangerouslySetInnerHTML={{
//           __html:
//             `{
//               "@context": "https://schema.org",
//               "@type": "VideoObject",
//               "name": "Sirin rathod Testimonial",
//               "description": "Simandhar takes pride in being able to change the lives of finance aspirants. Sirin Rathod cleared the CPA exam in just 6 months and was placed in one of the BIG 4 within one month of completing her CPA course. This is an inspiration for so many future aspirants.",
//               "thumbnailUrl": "https://i.ytimg.com/vi/OjXrESqsjPg/maxresdefault.jpg",
//               "uploadDate": "2023-01-09",
//               "duration": "PT0M47S",
//               "contentUrl": "https://youtu.be/OjXrESqsjPg"
//             }`}} />

//         <script type='application/ld+json' dangerouslySetInnerHTML={{
//           __html:
//             `{
//               "@context": "https://schema.org",
//               "@type": "VideoObject",
//               "name": "How Teja, CPA alumni from Simandhar got placed in the USA after pursuing MASTER'S",
//               "description": "In this video, we'll tell you how Teja, CPA alumni from Simandhar got placed in the USA after pursuing MASTER'S",
//               "thumbnailUrl": "https://i.ytimg.com/vi/3JQXsk7JKFI/maxresdefault.jpg",
//               "uploadDate": "2022-12-23",
//               "duration": "PT1M40S",
//               "contentUrl": "https://youtu.be/3JQXsk7JKFI"
//             }`}} />

//         <script type='application/ld+json' dangerouslySetInnerHTML={{
//           __html:
//             `{
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               "name": "Simandhar Education",
//               "url": "https://simandhareducation.com/",
//               "logo": "https://simandhar-edu-assets.s3.ap-south-1.amazonaws.com/logo/New+Simandhar+Education+Logo+2022.svg",
//               "sameAs": [
//                 "https://www.facebook.com/SimandharEducationCPACMA/",
//                 "https://twitter.com/simandharedu?lang=en",
//                 "https://www.instagram.com/simandhar_education/",
//                 "https://www.youtube.com/channel/UCNtcsDN1WhnsdS_m2wY-Z-g",
//                 "https://www.linkedin.com/company/simandhar-education/?originalSubdomain=in"
//               ]
//           }`}} />
//         <script type='application/ld+json' dangerouslySetInnerHTML={{
//           __html:
//             `{
//               "@context": "https://schema.org",
//               "@type": "VideoObject",
//               "name": "simandhareducation",
//               "description": "Excellence Personified! Heartiest Congratulations to our Elijah Watt Sells Awardee or setting a new standard of brilliance!",
//               "thumbnailUrl": "https://youtu.be/q1v1GAECVSY",
//               "uploadDate": "2023-04-23",
//               "duration": "PT1M15S"              
//           }`}} />


//       </Head>
//       {/* {
//         isLoading ? (<Spinner />) : ( */}


//       <Format>
//         {/* <div className={navBar ? "hide" : ""}> */}
//         <Header />

//         {/* </div> */}
//         {/*<OfferSection indexData={offerData.offerRow} />  Done */}
        
//         <Banner showPopup={showPopup} indexData={bannerData.bannerData} />

//         <Usp indexData={indexData.homeUSP} />
//         <Programm indexData={programData.homePage} />
        
//         { gl_flag ?  <Eduction indexData={educationData.education} /> : '' }

//         { gl_flag ? <Placement indexData={placementAlumniData.placementAlumni} /> : '' }
//         { gl_flag ? <Founder indexData={indexData.founder} /> : '' }
        
//         { gl_flag ?  <Video videoData={videoData.homePage} /> : '' }
//         { gl_flag ?  <AchieversSection achieverData={data.homePage} showData={true} /> : '' }
//         { gl_flag ?  <Partner ref={myRef} indexData={corporateTabData.corporateTab} /> : '' }
//         { gl_flag ? <Award indexData={indexData.awardBannerData} />  : '' }
        
//         { gl_flag ?  <ContactUs /> : '' }
//         { gl_flag ?  <Footer /> : '' }
        
//       </Format>
//       {/* )} */}
//     </>
//   );
// }