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

import dynamic from "next/dynamic";2
// const Header = dynamic(() => import('../components/Header'))
// const Footer = dynamic(() => import('../components/footer'))
const CommonForm = dynamic(() => import('../../components/BangaloreForm'))

// import Header from '../components/Header'
// import Footer from "../components/footer";
// import CommonForm from '../components/CommonForm'
const kerala = () => {
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
    return (
        <>
            <Head>
                <title> Finance Industry Game-Changer Event with Mr. Sripal Jain in Kerala | Simandhar Education</title>
                <meta name="title" content="Finance Industry Game-Changer Event with Mr. Sripal Jain in Kerala | Simandhar Education"></meta>
                <meta name="description" content="Join us for a game-changing finance industry event in Kerala featuring Mr. Sripal Jain, a globally renowned instructor and CA, US CPA. Don't miss this unique opportunity to meet him in person and interact with an expert in the field."></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta name="keywords" content=" Finance industry event, Game-changing event, Kerala, Global instructor, CA, US CPA, Expert in finance, Kerala event, Simandhar Education, US CMA, EA, Seker2023, Accounting"></meta>
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
                        <button className='btn maroon-btn' onClick={showPopup}>
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
            <section className='event-banner-section' onClick={showPopup}>
                <Image loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Kerala_Event_Landing-Page+(1).jpg" fill={true} sizes='100vw' className="resp-img" alt=" Simandhar Kerala event" />
            </section>
            <section className='seat-section'>
                <div className='container-l'>
                    <h2>Limited Seats Available</h2>
                    <span className='btn white-btn white-btn-arrow' onClick={showPopup}>RSVP</span>
                </div>
            </section>
            <section className='section life-career-section'>
                <div className='container'>
                    <h1 className='heading02' style={{color:'white'}}>Experience a Life and Career Transformation at Simandhar's Kerala Event</h1>
                    <p>Get ready to witness a game-changing event in the finance industry! Join us as we bring the Global instructor, Mr. Sripal Jain, CA, US CPA, to ‘God’s Own Country, Kerala’. This is a unique opportunity to meet him in person and directly interact with a renowned expert in the field.</p>
                    <p>Simandhar Education is dedicated to empowering accounting students and professionals, equipping them with the essential skills to thrive in the future and excel in their careers. With industry leaders leading the way, this event aims to inspire and propel aspiring accountants towards achieving their dreams in the corporate world.</p>
                </div>
                <div className='container mt-4'>
                    <h2 className='heading04'>Unlock Your Potential and Unleash Success</h2>
                    <p>Are you ready to unlock your true potential and the doors to success? This event is your stepping stone towards a brighter future. By attending, you will discover innovative strategies, industry trends, and professional development techniques that will set you apart from the competition.</p>

                </div>
                <div className='container mt-4'>
                    <h2 className='heading04'>Network with Like-minded Professionals and Expand Your Horizons</h2>
                    <p>Simandhar's Kerala event brings together a community of like-minded individuals who share their passion for accounting and finance. Connect with fellow students and professionals, exchange ideas, and forge valuable connections that can shape your career trajectory.</p>
                    <p>Take advantage of this transformative event that will revolutionize your life and career. Join us at Simandhar's Kerala event and embark on a journey towards unlimited possibilities.</p>
                    <p className='heading04'>&quot;Education is not just about gaining knowledge; it&#39;s about undergoing a profound
                        transformation.&quot; - Sripal Jain</p>
                </div>
                <section className='section why-edu-section-2 '  >
                <div className='container'>
                    <h2 className='heading02 text-center'>Event Details:</h2>
                    <div className='why-edu-row'>
                        <div className='why-edu-box'  >
                        Date<br/> 4 November, 2023
                        </div>
                        <div className='why-edu-box'>
                        Time<br/>10:00 am to 1:00 pm
                        </div>
                        <div className='why-edu-box'>
                        Venue <br/> IMA House, Cochin

                        </div>
                        
                    </div>
                </div>
                </section>
            </section>
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

            <section className='section corporate-section partner-section'>
                <div className='container-l'>
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

            <section className='section courses-section'>
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
            </section>

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
                    <h2>Want to know more about the Kerala event?</h2>
                    <span className='btn white-btn white-btn-arrow' onClick={showPopup}>Register Now</span>
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
                    <button className='btn white-btn white-btn-arrow' onClick={showPopup}>Register Now</button>
                </div>
            </section>
            <div className="popup-overlay" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></div>
            <div className='event-popup' style={{ display: isShow ? 'block' : 'none' }}>
                <h6>Kerala Event Registration</h6>
                <button className="close-evnt" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></button>
                <CommonForm showRadioStatus={true} showcourse={true} formName="kerala event registration" />
            </div>

        </>
    )
}

export default kerala