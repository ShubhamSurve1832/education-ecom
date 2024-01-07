import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image";
import { IoCaretForward } from "react-icons/io5";
import { AiFillStar } from 'react-icons/ai';
import Slider from "react-slick";
import axios from 'axios'
import _ from 'lodash'
import { urlConstants as urlConstant } from '../constants/urlConstants'
import Countdown from '../components/CountDown'



import dynamic from "next/dynamic";
// const Header = dynamic(() => import('../components/Header'))
// const Footer = dynamic(() => import('../components/footer'))
const CommonFormPop = dynamic(() => import('../components/CommonFormPop'))
const JournerySection = dynamic(() => import('../CPA/JournerySection'))
const HelpSection = dynamic(() => import('../CPA/HelpSection'))
const AchieversSection = dynamic(() => import('../CPA/AchieversSection'))
// const CareerSection = dynamic(() => import('../../CPA/CareerSection'))
const PlacementSection = dynamic(() => import('../CPA/PlacementSection'))

// import Header from '../components/Header'
// import Footer from "../components/footer";
// import CommonForm from '../components/CommonForm'
const workshop = () => {
    const [isShow, setIsShow] = useState(false)
    const showPopup = () => {
        setIsShow(!isShow)
    }

    var partnerSlider = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [corporateLogo, setCorporateLogo] = useState({
        corporateLogo: {},
    });
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.corporateLogos,
            responseType: "json",
        })
            .then((res) =>
                setCorporateLogo((prevState) => ({
                    corporateLogo: res.data.CorporateLogos,
                }))
            )
            .catch((err) => console.log("error is ", err.message));
    }, []);
    let lists = _.get(corporateLogo, "corporateLogo.lists", [])
    // console.log("hhiii", lists)

    // CPA Journey. Simplified!
  const [journeyData, setJourneyData] = useState({
    cpajourney: {}
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.juorneySection,
      responseType: "json"
    })

      .then((res) =>
        setJourneyData((prevState) => (
          { cpajourney: res.data.cpaPage }
        )))

      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])
  
  // HELP SECTION
  const [helpData, seHelpData] = useState({
    cpaPage: {},
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.helpSection,
      responseType: 'json',
    })
      .then((res) =>
        seHelpData((prevState) => (
          { cpaPage: res.data.cpaPage }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // CPA Corporate Logos
  const [corporateLogosData, setCorporateLogosData] = useState({
    corporateLogos: {}
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.corporateLogos,
      responseType: "json"
    })

      .then((res) =>
        setCorporateLogosData((prevState) => (
          { corporateLogos: res.data.partnerCpaPage }
        )))

      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

   // ACHIVER SECTION
   const [data, setData] = useState({
    cpaPage: {},
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.achiverSection,
      responseType: 'json',
    })
      .then((res) =>
        setData((prevState) => (
          { cpaPage: res.data.cpaPage }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])


    return (
        <>
            <Head>
                <title>  Global Career Guidance Workshop in Hyderabad | Simandhar Education</title>
                <meta name="title" content="Global Career Guidance Workshop in Hyderabad | Simandhar Education"></meta>
                <meta name="description" content="Join our exclusive workshop led by renowned instructor Mr. Sripal Jain. Perfect for CAs, CA dropouts, B.Com graduates, and undergraduates. Register now for a special spot discount and unlock a brighter future."></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta name="keywords" content="Exclusive Opportunity, Register Now, Global Career Guidance Workshop, Career Prospects, CAs, CA Dropouts, BCom Graduates, Undergraduates, Hyderabad Workshop, Simandhar Education, CPA, CMA, EA, ACCA"></meta>
            </Head>
            <div className='event-header'>
                <div className='container-l'>
                    <div className='logo'>
                        <Link href='/'>   <Image loading='lazy' src="/img/logo.png" fill={true} sizes='100vw' className="resp-img" alt="Simandhar logo" /></Link>
                    </div>
                    <div className='event-time'>
                        <p>
                            {/* <i><IoCaretForward /></i> */}
                            {/* <span>Countdown</span> */}
                        </p>
                        {/* <span>LIVE NOW</span> */}
                        {/* <Countdown /> */}
                    </div>
                    <div className='reg-btn'>
                    <button className='btn maroon-btn' onClick={showPopup}>Register Now</button>
                    </div>
                </div>
            </div>

            <section className='event-banner-section'onClick={showPopup} >
         
                <Image loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Sripal-Sir-Workshop_Website-Landing-Page.jpg" fill={true} sizes='100vw' className="resp-img" alt="Hyderabad Career Guidance Workshop" /> 
            </section>

            <section className='seat-section'>
                <div className='container-l'>
                    <h3>Attend the FREE Workshop and make your dream, a reality</h3>
                    <button className='btn white-btn white-btn-arrow' onClick={showPopup}>Register Now</button>
                </div>
            </section>

            <section className='section life-career-section'>
                <div className='container'>
                    <h1 className='heading02' style={{color:"white"}}>GLOBAL CAREER GUIDANCE WORKSHOP</h1>
                   <p>Global Career Guidance exclusive workshop, a golden opportunity for CAs, CA dropouts, B.Com graduates, and undergraduates to supercharge your career prospects. Led by the renowned global instructor, Mr. Sripal Jain, this workshop promises to be a transformative experience. Mark your calendars for the date and time, and take advantage of our special spot registration discount, offering savings of up to Rs. 20,000 on all courses. Join us at the Simandhar Office in Hyderabad and unlock the door to a brighter future. Don't hesitate; REGISTER NOW to secure your place at this career-defining event!

                    </p>
                </div>
                <section className='section why-edu-section-2 '  >
                <div className='container'>
                    <h2 className='heading02 text-center'>Event Details:</h2>
                    <div className='why-edu-row'>
                        <div className='why-edu-box'  >
                        Date<br/> October 14th, 2023<br/><br/>
                        Time<br/> 11:30 AM (IST)
                        </div>
                       
                        <div className='why-edu-box'>
                        Host <br/>The Global Instructor, Mr. Sripal Jain (CA, CPA) and Co-Founder Simandhar Education
                        </div>
                        <div className='why-edu-box'>
                        Venue <br/>Simandhar Education, Hyderabad office. 
Plot Number: 39/A Dr.Subba Rao Colony, Picket, Secunderabad, Telangana 500026

                        </div>
                        
                    </div>
                </div>
                </section>
              
            </section>
            <div className='container mt-4'>
                    <h2 className='heading04'>Why Should You Attend?</h2>
                  <ul className='why-should'>
                    <li>On Spot Registration Discount! Save Up to Rs. 20,000/- on All Courses</li>
                    <li>Get a chance to win gift vouchers worth Rs 2000/-</li>
                    <li>Expert Guidance: Sripal Jain, a highly respected Chartered Accountant, Certified Public Accountant and a Global Instructor, will lead this informative session. His wealth of knowledge and experience will provide you with invaluable insights into your professional journey.</li>
                    <li>Plan Ahead: Learn about the essential steps and strategies required to achieve your goals in 2023-24. We'll help you chart a clear path to success.</li>
                    <li>FREE Access: Yes, you read that right! This workshop is absolutely FREE. No hidden fees or obligations. We believe in providing opportunities for everyone to excel in their careers.</li>
                  </ul>
                </div>
                <div className='container mt-4'>
                    <h2 className='heading04'>What You'll Discover</h2>
                   <ul>
                    <li>Course Eligibility: Understand the prerequisites and qualifications required to pursue US CPA, US CMA, ACCA, or Enrolled Agent.</li>
                    <li>Exam Structure: Gain insights into the exam format, sections, and scoring.</li>
                    <li>Study Resources: Discover the best study materials and resources to ace the exams.</li>
                    <li>Q&A Session: Get your questions answered by the expert and clarify any doubts you may have.</li>
                   </ul>
                </div>
            <section >
            <div className='container mt-4'>

                <h2 className='heading04'>How to Register</h2>
                <p>Reserve your spot today by clicking the "Register Now" button below. Don't miss out on this opportunity to shape your future and embark on a rewarding journey in 2024.</p>
                </div>
                </section>

                <section >
            <div className='container mt-4'>

                <h2 className='heading04'>Join Us in Achieving Your Goals</h2>
                <p>At Simandhar Education, we are committed to nurturing talent and helping individuals like you reach their professional aspirations. Join us on October 14th, 2023, at 11:00 AM (IST) for this Global Career Guidance workshop and take the first step towards a career in BIG 4 & MNCs. Don't let this opportunity pass you by! Register now and let's make your dream a reality.</p>
                </div>
                </section>

                <JournerySection journeyData={journeyData.cpajourney} />
                <HelpSection helpData={helpData.cpaPage} />
                <div className='cpa-achivers'>
            <AchieversSection achieverData={data.cpaPage} showData={true} showAchiverbtn={true} /> 
          </div>
          <PlacementSection PlacementData={corporateLogosData.corporateLogos} /> 

          
            <section className='excite-section'>
                <div className='container'>
                    <h2 className='heading04'>Excited for the event?</h2>
                    <button className='btn white-btn white-btn-arrow' onClick={showPopup}>Register Now</button>
                </div>
            </section>
            <div className='download-overlay' onClick={showPopup} style={{ display: isShow ? 'block' : 'none' }}></div>

                        <div className='download-popup right-form-box backer' style={{ display: !isShow ? 'none' : 'block' }}>
                            <span className='close-pp' onClick={showPopup} style={{ display: isShow ? 'block' : 'none' }}>
                                <Image loading='lazy' src="/img/white_cross.png" alt="" fill={true} sizes='100vw' className='resp-img' />
                            </span>
                            <CommonFormPop showcourse={true} showIcon={true} Qualification={true} showHeading2={true} showTitle={true}  formName="Workshop" />
                            </div>


        </>
    )
}

export default workshop