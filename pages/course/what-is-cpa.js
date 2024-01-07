import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image";
import { IoCaretForward } from "react-icons/io5";
import { BiMobile } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import Slider from "react-slick";
import axios from 'axios'
import _ from 'lodash'
import { urlConstants as urlConstant } from '../../constants/urlConstants'
import CorporateRecord from '../../CPAInner/corporateRecord'
import HelpSection from '../../CPA/HelpSection';
import PartnersSection from '../../about/PartnersSection';
import aboutUsData from '../../database/aboutUs.json'
import AchieversSection from '../../CPA/AchieversSection';
import CommonForm from '../../components/CommonForm'
import DownloadFormComponents from '../../components/download_form'
import white_cross from '../../public/img/white_cross.png'
import indexData from '../../database/index.json'



//const CorporateRecord = dynamic(() => import('../CPAInner/corporateRecord'))

import dynamic from "next/dynamic";

// const Header = dynamic(() => import('../components/Header'))
// const Footer = dynamic(() => import('../components/footer'))
// const CommonForm = dynamic(() => import('../components/CommonForm'))

// import Header from '../components/Header'
// import Footer from "../components/footer";

const WhatIsCpa = () => {
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

    //corporateEventData
    const [corporateEventData1, setCorporateEventData1] = useState({
        WhatisCpaWebinardata: {},
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.corporateData,
            responseType: 'json',
        })
            .then((res) =>
                setCorporateEventData1((prevState) => (
                    { WhatisCpaWebinardata: res.data.WhatisCpaWebinardata }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])

    // console.log(corporateEventData1.WhatisCpaWebinardata)

    // HELP SECTION
    const [helpData2, setHelpData2] = useState({
        takeaWays: {},
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.helpSection,
            responseType: 'json',
        })
            .then((res) =>
                setHelpData2((prevState) => (
                    { takeaWays: res.data.CPAHighlights }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])

    // ACHIVER SECTION
    const [data, setData] = useState({
        homePage: {},
    });
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.achiverSection,
            responseType: "json",
        })
            .then((res) => setData((prevState) => ({ homePage: res.data.ourUsCpaStudentsJourney })))
            .catch((err) => console.log("error is ", err.message));
    }, []);

    const [isShow2, setIsShow2] = useState(false);
    const showDwnPopup = () => {
        setIsShow2(!isShow2);
    };
    const [isShow1, setIsShow1] = useState(false);
    const showDwnPopup1 = () => {
        setIsShow1(!isShow1);
    };
    return (
        <>
            <Head>
                <title>US CPA Course | Syllabus, Eligibility, Duration, Exam, License, & Fee | Simandhar Education</title>
                <meta name="description" content="Best US CPA Course at Simandhar Education. We are providing US CPA Course Details , Syllabus, Eligibility, Evaluation, Fees, CPA Salary & Become JOB READY, Instructor-Led by Sripal Jain, partnered with Becker and AICPA, Try our Free Trial Class Now! Contact us @ 7780273388"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
              
            </Head>
            
           
            <div className='event-header'>
                <div className='container-l'>
                    <div className='logo'>
                        <Link href='/'>   <Image loading='lazy' src="/img/logo.png" fill={true} sizes='100vw' className="resp-img" alt="Simandhar logo" /></Link>
                    </div>
                    <div className='reg-btn'>
                        <a className='btn maroon-btn no-arrow' href="tel:7780273388"> <BiMobile /> 7780273388</a>
                    </div>
                </div>
            </div>
          
          
                
               
               
                {/* <section className='whatiscpa-top-section'>
                
                <div className="container">
                
                    <div className="">
                    <h3>Simandhar Education Watt Sells Award Training Institute for US CPA Course or Certified Public Accountant</h3>
                        <p className="strip">Prepare with India's Trusted Institute</p>
                     </div>
                     </div>
                     </section> */}
                    {/* <a href="https://www.simandhareducation.com/courseDetail/Certified-Public-Accountant-Becker-Limited-Access" > <img src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Great-Accounting-Festival-2700x260+(1).jpg" width={"100%"} height={"auto"} alt="cpa offer"/> </a> */}

            <section className='whatiscpa-top-section-4'>
          <div className='whatiscpa-top-section'>
                
                <div className="container">
                
                    <div className="left-box">
                    <h3>Simandhar Education Watt Sells Award Training Institute for US CPA Course or Certified Public Accountant</h3>
                        <p className="strip">Prepare with India's Trusted Institute</p>
                     
                        <h4>What is CPA or US CPA Course?</h4>
                        <p className='text-center'>(Certified Public Accountant)</p>
                        <p>A Certified Public Accountant is a professional who has earned the CPA license from any of the 55 state accountancy boards of the USA all of which are part of NASBA (National Association of the State Boards of Accountancy). Each state board has the authority to grant a CPA license. One must meet all the requirements of the state board including Education, Experience, and Examinations.</p>
                        <p>The CPA course or the US CPA is like the CA (Chartered Accountant) course in India but with only 4 exams. Due to the widespread awareness and acceptance of CPA credentials, it’s understood that a CPA possesses the required knowledge of all accounting areas as analyzing financial statements, financial planning, tax preparation, internal auditing, income tax, and other specializations of accounting. In a nutshell, a CPA is someone who has mastered all the elements of the accounting profession. This is also one of the many reasons, professional organizations seek CPAs for complex accounting and finance jobs.</p>
                    </div>
                    {/* <div className="right-form-box">
                        <CommonForm  formName="what is cpa" Qualification={true} setCourse="CPA" />
                    </div> */}
                </div>
                </div>
            </section>

            {/* <div className='whatiscpa-top-section-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/bChMSnjmVgA?si=4DomdZlb5BpLotai&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='col-md-2'>
                        </div>
                    
                        <div className='col-md-4'>
                        <CommonForm  formName="what is cpa" Qualification={true} setCourse="CPA" />

                        </div>      
                </div>
                   
            </div>
            </div> */}

            <section className='whatiscpa-top-section-2'>
                
                <div className="container">
                
                    <div className="left-box">
                    <iframe width="100%" height="455" src="https://www.youtube.com/embed/bChMSnjmVgA?si=rs-JyCa1B4zkTZQa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                   
                    </div>
                    <div className="right-form-box">
                        <CommonForm  formName="what is cpa" Qualification={true} setCourse="CPA" otpVerify={true} />
                    </div>
                </div>
            </section>

            <section className='section oPlacements-section'>
                <div className="container">
                    <div className="corporate-record">
                        <CorporateRecord corporateEventData={corporateEventData1.WhatisCpaWebinardata} />
                    </div>
                </div>
            </section>

            <section className="cpa-highlights">
               
               
            </section>

            <section className='st-journey-section'>
                <AchieversSection achieverData={data.homePage} showData={true} />{" "}
            </section>

            <section className='section study-portal-section'>
                <div className="container">
                    <div className="left-box">
                        <h5>TO UNDERSTAND COMPLETE BECKER STUDY  PORTAL</h5>
                        <p>Register yourself...</p>
                    </div>
                    <div className="right-box">
                        <a href="https://www.becker.com/cpa-review/course-demos" target='_blank' className="btn white-btn no-arrow">FREE BECKER 15 DAYS TRAIL</a>
                    </div>
                </div>
            </section>

            <section className='section life-career-section eligibility-section'>
                <div className='container'>
                    <h2 className='heading02'>CPA EXAMS ELIGIBILITY</h2>
                    <p><em>The CPA Exams are administered by AICPA, the world’s largest accounting body. AICPA offers membership to all the aspirants successfully clearing all 4 CPA exams. CPA license, however, is issued by the 55 state boards of accountancy of the US that are part of NASBA. Each state board has different eligibility criteria, that needs to be met by the aspirant to take the US CPA exams</em></p>
                </div>
                <div className="container grid-col-2">
                    <p>Master’s Degree in any of the streams of Commerce, Accounting or Finance</p>
                    <p>An aspirant needs 120 credits to take the US CPA exams and 150 credits to get his CPA license</p>
                    <p>It's considered that one year of University education in India is equal to 30 credits of US education</p>
                    <p>In some cases, first division graduates of a three-year degree from NAAC-A accredited universities of India are qualified to take the US CPA exams too.</p>
                </div>
            </section>

            <section className='section study-portal-section'>
                <div className="container">
                    <div className="left-box">
                        <h5>YOUR FITMENT INTO US CPA</h5>
                        <p>Each state board has different eligibility criteria, that needs to be met by <br /> the aspirant to take the US CPA exams</p>
                    </div>
                    <div className="right-box eligible-box">
                        <a className="btn white-btn" onClick={showDwnPopup}>CHECK YOUR ELIGIBILITY</a>
                        <span>Our Evaluation Team will check & update you</span>
                        <div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow2 ? 'block' : 'none' }}></div>

                        <div className='download-popup right-form-box backer' style={{ display: !isShow2 ? 'none' : 'block' }}>
                            <span className='close-pp' onClick={showDwnPopup} style={{ display: isShow2 ? 'block' : 'none' }}>
                                <Image loading='lazy' src="/img/white_cross.png" alt="white cross icon" fill={true} sizes='100vw' className='resp-img' />
                            </span>
                            <CommonForm showIcon={true} Qualification={true} showHeading2={true} showTitle={true} indexData={indexData.WhatIsCpa} setCourse="CPA" formName="What is CPA CHECK YOUR ELIGIBILITY" />
                        </div>
                    </div>
                </div>
            </section>



            <section className="section why-simandhar-section">
                <div className="container-m">
                    <h2 className="heading02">WHY SIMANDHAR EDUCATION?</h2>
                    <p>Simandhar Education is an initiative by Sripal Jain, CPA, CMA, with the vision of training and guiding Indian students & professionals in obtaining the internationally-acclaimed CPA designation which would add to their knowledge base, enhance their credibility, and give them a global perspective.</p>
                    <p>Simandhar Education in alliance with Becker Professional Education, the most acclaimed CPA Review supplier in the USA and CMA program supplier in the USA, is putting forth a thorough CPA Review Program and CMA program to prepare aspirants for success in CPA and CMA Exam of USA.   </p>
                    <p>Simandhar Education, inaugurated with an objective to dedicate its utmost inputs to help CPA, CMA, CFA, CA professional students to accomplish their goals. The main theme is to facilitate students</p>
                </div>
            </section>

            <section className='section study-portal-section'>
                <div className="container">
                    <div className="left-box">
                        <h5>WANT TO KNOW COMPLETE INFORMATION <br /> ABOUT US CPA?</h5>
                    </div>
                    <div className="right-box eligible-box">
                        <a className="btn white-btn" onClick={showDwnPopup1}>DOWNLOAD FREE PROSPECTUS</a>
                        <div className='download-overlay' onClick={showDwnPopup1} style={{ display: isShow1 ? 'block' : 'none' }}></div>
                        <div className='download-popup' style={{ display: !isShow1 ? 'none' : 'block' }}>
                            <span className='close-pp dwn-load' onClick={showDwnPopup1} style={{ display: isShow1 ? 'block' : 'none' }}>
                                <Image loading='lazy' src={white_cross} alt="white cross " fill={true} sizes='100vw' className='resp-img' />
                            </span>
                            <DownloadFormComponents setCourse="CPA" showHeading2={true} indexData={indexData.downloadProspectus} DownloadForm={indexData.SimandharCMA} Qualification={true} formName="what is cpa Prospectus" />
                        </div>
                    </div>
                </div>
            </section>

            <PartnersSection aboutUsData={aboutUsData.partnerData} />

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

            <section class="values student-journy-section">
                <h2 className="heading02">Our Students Journey</h2>
                <div class="four-box-grid">
                    <div class="grid-box">
                        <h4 class="heading02">10000+</h4>
                        <h4 class="title">Lovely Students</h4>
                    </div>
                    <div class="grid-box">
                        <h4 class="heading02">500+</h4>
                        <h4 class="title">Placements</h4>
                    </div>
                    <div class="grid-box">
                        <h4 class="heading02">10</h4>
                        <h4 class="title">Top Instructors</h4>
                    </div>
                    <div class="grid-box">
                        <h4 class="heading02">100</h4>
                        <h4 class="title">Corporate Events</h4>
                    </div>
                </div>
            </section>





            <section className='section why-journy-section'>
                <div className='container'>
                    <h2 className='heading03'>HOW SIMANDHAR HELPS YOU TO BE US CPA READY</h2>
                    <div className='why-journy-row'>
                        <div className="why-journy-box">
                            <i><AiFillStar /></i>
                            <div>
                                <h2 className='heading04'>Comprehensive Study Material</h2>
                                <p>Becker CPA review, along with Simandhar CPA, gives you everything required for a CPA aspirant to clear all four exams. Mock tests, revision tests, quizzes, counseling sessions, and personal mentoring by licensed CPAs make sure that you do not miss out on the details of anything</p>
                            </div>
                        </div>
                        <div className="why-journy-box">
                            <i><AiFillStar /></i>
                            <div>
                                <h2 className='heading04'>End to End Evaluation Assistance</h2>
                                <p>Applying for CPA is a task in itself. But don’t you worry, we have you covered. Our expert crew will guide you through each step of the process, making your life easier and let you focus on studies and studies alone.</p>
                            </div>
                        </div>
                        <div className="why-journy-box">
                            <i><AiFillStar /></i>
                            <div>
                                <h2 className='heading04'>Last Minute Revision</h2>
                                <p>While Simandhar provides the comfort of attending online classes, live classes allow us to interact with our clients and solve their problems ourselves. Our interactive classes are equally spaced and span anywhere between 1-3 hours, depending on the schedule. We make sure you don't get overburdened with the classes and syllabus.</p>
                            </div>
                        </div>
                        <div className="why-journy-box">
                            <i><AiFillStar /></i>
                            <div>
                                <h2 className='heading04'>Live Interactive Classes</h2>
                                <p>While Simandhar provides the comfort of attending online classes, live classes allow us to interact with our clients and solve their problems ourselves. Our interactive classes are equally spaced and span anywhere between 1-3 hours, depending on the schedule. We make sure you don't get overburdened with the classes and syllabus.</p>
                            </div>
                        </div>
                        <div className="why-journy-box">
                            <i><AiFillStar /></i>
                            <div>
                                <h2 className='heading04'>AI Mocks</h2>
                                <p>Becker’s Artificial Intelligence Adapt2U learning system takes you through your strengths and weaknesses and helps devise the exam strategy in a better way</p>
                            </div>
                        </div>
                        <div className="why-journy-box">
                            <i><AiFillStar /></i>
                            <div>
                                <h2 className='heading04'>Customer First Approach</h2>
                                <p>Customer centricity is Simandhar’s core tenet; everything we do is delight you and make the CPA journey smoother. We take care of it all, from scheduling classes as requested to supporting you through the nuts and bolts of paperwork required for CPA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='excite-section what-bottom'>
                <div className='container'>
                    <h2 className='heading04'>For Any Queries Related to US CPA</h2>
                    <div className="right-box eligible-box">
                        <button className='btn white-btn white-btn-arrow' onClick={showPopup}>CONTACT NOW</button>
                        {/* <a className="btn white-btn" onClick={showPopup}>DOWNLOAD FREE PROSPECTUS</a> */}
                        <div className='download-overlay' onClick={showPopup} style={{ display: isShow ? 'block' : 'none' }}></div>

                        <div className='download-popup right-form-box backer' style={{ display: !isShow ? 'none' : 'block' }}>
                            <span className='close-pp' onClick={showPopup} style={{ display: isShow ? 'block' : 'none' }}>
                                <Image loading='lazy' src="/img/white_cross.png" alt="" fill={true} sizes='100vw' className='resp-img' />
                            </span>
                            <CommonForm setCourse="CPA" showIcon={true} Qualification={true} showHeading2={true} showTitle={true} indexData={indexData.WhatIsCpa} formName="What is CPA contact us" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="popup-overlay" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></div>
            {/* <div className='event-popup' style={{ display: isShow ? 'block' : 'none' }}>
                <h6>Bangalore Event Registration</h6>
                <button className="close-evnt" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></button>
                <CommonForm showRadioStatus={true} showcourse={true} Qualification={true} formName="What is CPA" />
            </div> */}

        </>
    )
}

export default WhatIsCpa