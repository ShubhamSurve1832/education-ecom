import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image";
import { IoCaretForward } from "react-icons/io5";
import { AiFillStar } from 'react-icons/ai';
import Slider from "react-slick";
import axios from 'axios'
import _ from 'lodash'
import { urlConstants as urlConstant } from '../../constants/urlConstants'
import Countdown from '../../components/CountDown'



import dynamic from "next/dynamic";
// const Header = dynamic(() => import('../components/Header'))
// const Footer = dynamic(() => import('../components/footer'))
const CommonForm = dynamic(() => import('../../components/BangaloreForm'))
const JournerySection = dynamic(() => import('../../CPA/JournerySection'))
const HelpSection = dynamic(() => import('../../CPA/HelpSection'))
const AchieversSection = dynamic(() => import('../../CPA/AchieversSection'))
// const CareerSection = dynamic(() => import('../../CPA/CareerSection'))
const PlacementSection = dynamic(() => import('../../CPA/PlacementSection'))

// import Header from '../components/Header'
// import Footer from "../components/footer";
// import CommonForm from '../components/CommonForm'
const cpa = () => {
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
                <title> Sripal Jain is visiting Bangalore to guide you in your accounting career CPA, CMA - Simandhar Education</title>
                <meta name="title" content="Sripal Jain is Visiting Bangalore to guide you in your accounting career CPA, CMA, EA"></meta>
                <meta name="description" content="Sripal Jain Visits Bangalore for one-on-one mentoring for students looking out for accounting courses like CPA, CMA, EA, IFRS, ACCA, CIA, & Data Analytics"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta name="keywords" content="Bangalore tour, Bangalore Sripal Jain visit, Sripal Jain, CPA Course, CMA Course, Enrolled Agent Course, ACCA course, IFRS course, Certified Internal Auditor Course, Data Analytics in Finance, CPA Event in Bangalore"></meta>
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
                       <a href="https://bit.ly/3PRsUTc" target='new'>
                        <button className='btn maroon-btn'>
                            Register Now
                        </button></a> 
                    </div>
                </div>
            </div>

            <section className='event-banner-section' >
            <a href="https://bit.ly/3PRsUTc" target='new'>
                <Image loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/MicrosoftTeams-image+(3).png" fill={true} sizes='100vw' className="resp-img" alt="event banner" /> </a>
            </section>

            <section className='seat-section'>
                <div className='container-l'>
                    <h3>Join Our FREE Webinar and Let's Make Your Dream a Reality</h3>
                    <a href="https://bit.ly/3PRsUTc" target='new'>
                    <span className='btn white-btn white-btn-arrow' >Register Now</span></a>
                </div>
            </section>

            <section className='section life-career-section'>
                <div className='container'>
                    <h2 className='heading02'>Unlock Your Path to Becoming a US CPA in 2024</h2>
                   <p>Are you ready to take your career to new heights and become a certified US CPA in 2024? Look no further! Simandhar Education is thrilled to invite you to our exclusive CPA webinar. Whether you're an aspiring accountant or a finance professional aiming to enhance your career prospects, this webinar is your gateway to success.
                    </p>
                </div>
                <section className='section why-edu-section-2 '  >
                <div className='container'>
                    <h2 className='heading02 text-center'>Event Details:</h2>
                    <div className='why-edu-row'>
                        <div className='why-edu-box'  >
                        Date<br/> October 14th, 2023
                        </div>
                        <div className='why-edu-box'>
                        Time<br/> 4:00 PM (IST)
                        </div>
                        <div className='why-edu-box'>
                        Host <br/>Sripal Jain (CA, CPA), Co-Founder Simandhar Education
                        </div>
                        
                    </div>
                </div>
                </section>
              
            </section>
            <div className='container mt-4'>
                    <h2 className='heading04'>Why Should You Attend?</h2>
                  <ul className='why-should'>
                    <li>Expert Guidance: Sripal Jain, a highly respected Chartered Accountant and Certified Public Accountant, will lead this informative session. His wealth of knowledge and experience will provide you with invaluable insights into the CPA journey.</li>
                    <li>Plan Ahead: Learn about the essential steps and strategies required to achieve US CPA certification in 2024. We'll help you chart a clear path to success.</li>
                    <li>FREE Access: Yes, you read that right! This webinar is absolutely FREE. No hidden fees or obligations. We believe in providing opportunities for everyone to excel in their careers.</li>
                  </ul>
                </div>
                <div className='container mt-4'>
                    <h2 className='heading04'>What You'll Discover</h2>
                   <ul>
                    <li>CPA Eligibility: Understand the prerequisites and qualifications required to become a CPA.</li>
                    <li>Exam Structure: Gain insights into the CPA exam format, sections, and scoring.
</li>
                    <li>Study Resources: Discover the best study materials and resources to ace the CPA exams.</li>
                    <li>Success Stories: Hear from individuals who have successfully obtained their US CPA credentials.</li>
                    <li>Q&A Session: Get your questions answered by experts and clarify any doubts you may have.</li>
                   </ul>
                </div>
            <section >
            <div className='container mt-4'>

                <h2 className='heading04'>How to Register</h2>
                <p>Reserve your spot today by clicking the "Register Now" button below. Don't miss out on this opportunity to shape your future and embark on a rewarding CPA journey in 2024.</p>
                </div>
                </section>

                <section >
            <div className='container mt-4'>

                <h2 className='heading04'>Join Us in Achieving Your Goals</h2>
                <p>At Simandhar Education, we are committed to nurturing talent and helping individuals like you reach their professional aspirations. Join us on October 14th, 2023, at 5:00 PM (IST) for this FREE CPA webinar and take the first step towards becoming a US CPA in 2024. Don't let this opportunity pass you by! Register now and let's make your CPA dream a reality. </p>
                </div>
                </section>

                <JournerySection journeyData={journeyData.cpajourney} />
                <HelpSection helpData={helpData.cpaPage} />
                <div className='cpa-achivers'>
            <AchieversSection achieverData={data.cpaPage} showData={true} showAchiverbtn={true} /> 
          </div>
          <PlacementSection PlacementData={corporateLogosData.corporateLogos} /> 

            <section className='section journey-section text-center'>
                <div className='container'>
                    <h2 className='heading02'>Journey of Simandhar</h2>
                    <div className='journey-row'>
                        <div className='journey-box'>
                            <i><Image loading='lazy' alt="Lovely Students" src="/img/Lovely_Students.png" decoding="async" fill={true} className="resp-img" /></i>
                            <span>10000+</span>
                            <h5 className='heading06'>Lovely Students</h5>
                        </div>
                        <div className='journey-box'>
                            <i><Image loading='lazy' alt="Faculties" src="/img/Faculties.png" decoding="async" fill={true} className="resp-img" /></i>
                            <span>15+</span>
                            <h5 className='heading06'>Faculties</h5>
                        </div>
                        <div className='journey-box'>
                            <i><Image loading='lazy' alt="Corporate tie-ups" src="/img/Corporate_tie-ups.png" decoding="async" fill={true} className="resp-img" /></i>
                            <span>40+</span>
                            <h5 className='heading06'>Corporate tie-ups</h5>
                        </div>
                        <div className='journey-box'>
                            <i><Image loading='lazy' alt="Placements" src="/img/Placements.png" decoding="async" fill={true} className="resp-img" /></i>
                            <span>500+</span>
                            <h5 className='heading06'>Placements</h5>
                        </div>
                        <div className='journey-box'>
                            <i><Image loading='lazy' alt="Corporate Events" src="/img/Corporate_Events.png" decoding="async" fill={true} className="resp-img" /></i>
                            <span>100+</span>
                            <h5 className='heading06'>Corporate Events</h5>
                        </div>
                    </div>
                </div>
            </section>
            <div className='s'>

                <section className='section corporate-section partner-section'>
                    <div className='container-l container'>
                        <h2 className='heading02 text-center'>Our Corporate Tie-Ups</h2>
                        <div className="event-partner-slider">
                            <Slider {...partnerSlider}>
                                {lists.map((logos, index) => {
                                    return (
                                        <div className='part-box'>
                                            <Image loading='lazy' src={logos.path} fill={true} sizes='100vw' className="resp-img" alt="Simandhar logo" />
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                </section>
            </div>

            {/* <section className='section courses-section'>
                <div className='container-l'>
                    <h2 className='heading02 text-center'>Simandhar Courses</h2>
                    <div className='event-courses-row'>
                        <div className='event-course-box'>
                            <Link href='/course/cpa'>US CPA</Link>
                        </div>
                        <div className='event-course-box'>
                            <Link href='/course/cma'>US CMA</Link>
                        </div>
                        <div className='event-course-box'>
                            <Link href='/course/cia'>CIA</Link>
                        </div>
                        <div className='event-course-box'>
                            <Link href='/course/ea'>EA</Link>
                        </div>
                        <div className='event-course-box'>
                            <Link href='/course/ifrs'>IFRS</Link>
                        </div>
                        <div className='event-course-box'>
                            <Link href='/data-analytics'>Data Analytics</Link>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className='section why-edu-section ' >
                <div className='container'>
                    <h2 className='heading02 text-center'>Why Simandhar Education?</h2>
                    <div className='why-edu-row'>
                        <div className='why-edu-box'>
                            90% Pass rate
                        </div>
                        <div className='why-edu-box'>
                            Free eligibility check
                        </div>
                        <div className='why-edu-box'>
                            Live interactive classes
                        </div>
                        <div className='why-edu-box'>
                            Practical-oriented study materials
                        </div>
                        <div className='why-edu-box'>
                            Access to recorded sessions
                        </div>
                        <div className='why-edu-box'>
                            Dedicated study groups
                        </div>
                        <div className='why-edu-box'>
                            100% Placement guarantee
                        </div>
                        <div className='why-edu-box'>
                            Tie-ups with top MNCs and Big 4s
                        </div>
                        <div className='why-edu-box'>
                            End to end assistance
                        </div>
                    </div>
                </div>

                <div className='container part-row-section'>
                    <h2 className='heading02 text-center'>Official Partners</h2>
                    <div className="part-row">
                        <div className="part-box">
                            <Image loading='lazy' src="/img/Becker_logo.png" fill={true} sizes='100vw' className="resp-img" alt="event banner" />
                        </div>
                        <div className="part-box">
                            <Image loading='lazy' src="/img/aicpa.png" fill={true} sizes='100vw' className="resp-img" alt="event banner" />
                        </div>
                        <div className="part-box">
                            <Image loading='lazy' src="/img/ima.jpg" fill={true} sizes='100vw' className="resp-img" alt="event banner" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='seat-section'>
                <div className='container-l'>
                    <h2>I just wanted to know why we have this on the CPA webinar page.</h2>
                    <a href="https://bit.ly/3PRsUTc" target='new'> <span className='btn white-btn white-btn-arrow' >Register Now</span></a>
                </div>
            </section>

            <section className='section why-journy-section'>
                <div className='container'>
                    <h2 className='heading03'>Why you should start your journey with Simandhar, today?</h2>
                    <div className='why-journy-row'>
                        <div className="why-journy-box">
                            <i><AiFillStar /></i>
                            <div>
                                <h2 className='heading04'>Comprehensive Study Material</h2>
                                <p>Becker CPA review, along with Simandhar CPA, covers the complete curriculum of the four exams. The concepts are explained in a practical and simplified manner so that it will be easy for CPA aspirants to gain subject matter expertise.</p>
                            </div>
                        </div>
                        <div className="why-journy-box">
                            <i><AiFillStar /></i>
                            <div>
                                <h2 className='heading04'>End to End Evaluation Assistance</h2>
                                <p>Applying for CPA is a task in itself. But don’t worry, we have got you covered. Our expert crew will guide you through each step of the application process so that you can spend more time preparing for the exams.</p>
                            </div>
                        </div>
                        <div className="why-journy-box">
                            <i><AiFillStar /></i>
                            <div>
                                <h2 className='heading04'>Dedicated Study Groups</h2>
                                <p>We have dedicated study groups that allow you to get help and clear your queries instantly. Our counsellors are very active in the study groups and will address your doubts. They will share new updates and exam preparation strategies. Plus, other students will also share tips and their preparation strategies to keep you motivated.</p>
                            </div>
                        </div>
                        <div className="why-journy-box">
                            <i><AiFillStar /></i>
                            <div>
                                <h2 className='heading04'>AI Mocks</h2>
                                <p>Becker’s Artificial Intelligence Adapt2U learning system takes you through your strengths and weaknesses and helps devise the exam strategy in a better way.</p>
                            </div>
                        </div>
                        <div className="why-journy-box">
                            <i><AiFillStar /></i>
                            <div>
                                <h2 className='heading04'>Live Interactive Classes</h2>
                                <p>With Simandhar Education, students get the option to attend live classes as well as rewatch them in their own leisure time. The live classes will help the students get their doubts cleared up and have a better understanding of the concepts. Our interactive classes are equally spaced and span anywhere between 1-3 hours, depending on the schedule.</p>
                            </div>
                        </div>
                        <div className="why-journy-box">
                            <i><AiFillStar /></i>
                            <div>
                                <h2 className='heading04'>Student-Centric Approach</h2>
                                <p>Students' satisfaction is at the heart of everything we do. We make utmost efforts to ensure your CPA journey is smoother. We take care of it all, from scheduling classes as per your request to supporting you through the paperwork required for CPA. The only thing you have to do is stay focused and prepare well using our study materials.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='excite-section'>
                <div className='container'>
                    <h2 className='heading04'>Excited for the event?</h2>
                    <a href="https://bit.ly/3PRsUTc" target='new'>  <button className='btn white-btn white-btn-arrow' >Register Now</button> </a>
                </div>
            </section>
            <div className="popup-overlay" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></div>
            <div className='event-popup' style={{ display: isShow ? 'block' : 'none' }}>
                <h6>Bangalore Event Registration</h6>
                <button className="close-evnt" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></button>
                <CommonForm showRadioStatus={true} showcourse={true} formName="bangalore event registration" />
            </div>


        </>
    )
}

export default cpa