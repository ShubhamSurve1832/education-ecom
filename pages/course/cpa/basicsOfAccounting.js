import React from 'react'
import Head from 'next/head'
import Header from '../../../components/Header'
import Footer from "../../../components/footer";
import Image from 'next/image'
import CommonForm from '../../../components/CommonForm';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import indexData from '../../../database/index.json'
import RegistrationForm from '../../../components/registrationForm';
import HelpSection from '../../../CPA/HelpSection'
import helpData from '../../../database/data/helpSection.json'
import { urlConstants as urlConstant } from '../../../constants/urlConstants'
import axios from 'axios'
import _ from 'lodash';



const basicsOfAccounting = () => {
    // HELP SECTION
    // const [helpData, setHelpData] = useState({
    //     basicsOfAccounting: {},
    // })
    // useEffect(() => {
    //     axios({
    //     method: "get",
    //     url: urlConstant.helpSection,
    //     responseType: 'json',
    //     })
    //     .then((res) =>
    //         setHelpData((prevState) => (
    //         { basicsOfAccounting: res.data.basicsOfAccounting}
    //         )))
    //     .catch((err) =>
    //         console.log("error is ", err.message)
    //     )
    // }, [])

    const [helpData, setHelpData] = useState({});

    useEffect(() => {
      fetchData();
    }, []);
  
    let fetchData = async () => {
      let res = await axios.get(urlConstant.helpSection);
      setHelpData({ ...res.data.basicsOfAccounting })
    }
    
    let bannerData = _.get(helpData,"banner")
    console.log(bannerData)
    // const {CTAButtonLink, bannerText,imageAltText,shortDescription } = bannerData;

    return (<>
        <Head>
            <title>FNP | Learn Basic Accounting Concepts of US CPA | Simandhar Education</title>
            <meta content='Simandhar’s FNP (Finance for Non-Finance Professionals) course trains students from a non-accounting background on the basic US CPA and US CMA concepts.' name='description'></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
            <meta content='CPA, Certified Public Accountant, CPA Course, US CPA, Becker CPA, Simandhar CPA, AICPA, CPA Exam preparation, accounting course, 4 CPA exams, CPA subjects, CPA Syllabus, CPA testing center, CPA exam centers in India, CPA in india, CPA eligibility, CPA Curriculum, CA vs CPA, CPA exam pattern, CPA passing score, CPA duration, CPA license, CPA Exam in India, CMA, certified management accountant, US CMA, CMA USA in India, CMA full form, CMA exam, CMA Course,cma usa salary in india,cma usa course fees in india,cma usa salary in india,cma usa course fees in india,us cma salary in india ' name='keywords'></meta>
            <link rel="canonical" href="https://simandhareducation.com/course/cpa/basicsOfAccounting" />
        </Head>
        <div className='width-50'>
            <Header showData={true} />
        </div>

        <section className='accounting-banner'>
            <div className="can_banner">
                <div className="can_banner_img">
                    <Image loading='lazy' src="/img/accounting-banner.webp" alt={bannerData?.imageAltText}fill={true} sizes='100vw' className='resp-img' />
                </div>
                <div className="right-form-box">
                    <h3 className="heading03">{bannerData?.bannerText}</h3>
                    <h3 className="heading03">{bannerData?.shortDescription}</h3>

                    <div>
                        <h3 className='heading03'>Don’t Worry, We’ve Got You Covered </h3>
                    </div>

                    <h3 className="heading03">Simandhar’s Exclusive </h3>
                    <h3 className="heading03 bold">Finance for Non-Finance Professionals (FNP) </h3>
                </div>
            </div>
        </section>

        <section className='fnp-section'>
            <div className='container text-center'>
                <h1 className="heading02">What is Simandhar’s Finance for Non-Finance Professionals (FNP)?</h1>

                <p>Simandhar's Finance for Non-Finance Professionals is a course curated especially for students enrolled in CPA or CMA courses.</p>
                <p>Our team has rigorously designed this course to support the students from non-accounting backgrounds who are new to the concepts of finance and accounting in CPA/CMA. It helps students kickstart their preparation for the CPA and CMA exams without any difficulties.</p>
            </div>
        </section>

        <section className='register-section'>
            <div className='container-l'>
                <div className='left-box'>
                    <h2 className='heading02'>Create a strong foundation in the accounting concepts for CPA and CMA</h2>
                </div>
                <div className="right-form-box">
                    <CommonForm showTitle={true} indexData={indexData.basicsOfAccounting} showcity={true} formName="basics of accounting form" />
                </div>
            </div>
        </section>

        <section className='unique-section'>
            <div className='container-l'>
                <h2 className="heading02 text-center">What makes us Unique?</h2>
                <h3 className='heading04'>Trust only the best</h3>
                <div className='row-flex'>
                    <div className='column-flex'>
                        <h2 className='heading02'>10000+</h2>
                        <h3 className='title01'>Students</h3>
                    </div>
                    <div className='column-flex'>
                        <h2 className='heading02'>15+</h2>
                        <h3 className='title01'>Faculties</h3>
                    </div>
                    <div className='column-flex'>
                        <h2 className='heading02'>40+</h2>
                        <h3 className='title01'>Corporate Tie-Ups</h3>
                    </div>
                    <div className='column-flex'>
                        <h2 className='heading02'>500+</h2>
                        <h3 className='title01'>Placements</h3>
                    </div>
                </div>
            </div>
        </section>

        <section className='unique-grid background-none'>
            <HelpSection helpData={helpData} />  
            {/* <div className="container-l">
                <div className="grid">
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image loading='lazy' src="/img/cpa/key_img4.webp" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                        </div>
                        <h4 className="heading05">8000+ Students</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image loading='lazy' src="/img/cpa/key_img4.webp" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                        </div>

                        <h4 className="heading05">200+ Placement Partners</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image loading='lazy' src="/img/cpa/key_img4.webp" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                        </div>
                        <h4 className="heading05">10+ Top Instructor</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image loading='lazy' src="/img/cpa/key_img4.webp" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                        </div>

                        <h4 className="heading05">100+ Corporate Events</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image loading='lazy' src="/img/cpa/key_img4.webp" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                        </div>
                        <h4 className="heading05">Comprehensive Study Material</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image loading='lazy' src="/img/cpa/key_img4.webp" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                        </div>
                        <h4 className="heading05">Live Interactive Classes</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image loading='lazy' src="/img/cpa/key_img4.webp" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                        </div>
                        <h4 className="heading05">Recorded Videos</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image loading='lazy' src="/img/cpa/key_img4.webp" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                        </div>
                        <h4 className="heading05">100% Placement Assistance</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image loading='lazy' src="/img/cpa/key_img4.webp" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                        </div>
                        <h4 className="heading05">Free CPA Eligibility Check</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image loading='lazy' src="/img/cpa/key_img4.webp" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                        </div>
                        <h4 className="heading05">End to End Licensing Support</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image loading='lazy' src="/img/cpa/key_img4.webp" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                        </div>
                        <h4 className="heading05">CPA bridge course to meet the shortfall of credits</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image loading='lazy' src="/img/cpa/key_img4.webp" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                        </div>
                        <h4 className="heading05">Support & Counselling from Experts</h4>
                    </div>
                    <div className='grid-card'>
                        <div className='image-card'>
                            <Image loading='lazy' src="/img/cpa/key_img4.webp" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                        </div>
                        <h4 className="heading05">State-of-the-art Learning Management System</h4>
                    </div>
                </div>
            </div> */}
        </section>

        <section className='benifits-section'>
            <div className="container">
                <h2 className='heading02 text-center'>Who can Benefit from this Course?</h2>
                <div className="benefits-container">
                    <figure className='achiever-box'>
                        <div className='achiever-img resp-img-box'>
                            <Image loading='lazy' src='/img/course_banifits01.png'fill={true} sizes='100vw' className='resp-img' alt='Benefit to the student' />
                        </div>
                        <figcaption>
                            <p>This course benefits the students who come from non-financial backgrounds and are struggling with the fundamentals of accounting and finance.</p>
                        </figcaption>
                    </figure>
                    <figure className='achiever-box'>
                        <div className='achiever-img resp-img-box'>
                            <Image loading='lazy' src='/img/course_banifits02.png'fill={true} sizes='100vw' className='resp-img' alt='Beneficial for accounting professionals ' />
                        </div>
                        <figcaption>
                            <p>It is also beneficial for accounting professionals who want to review and improve their accounting knowledge.</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>

        <section className='mixed-gradient'>
            <div className='two-box-grid'>
                <div className='left-box text-center'>
                    <h5 className="heading05">We are trusted by 10000+ students globally.</h5>
                    <h5 className="heading05">Enroll now for CPA| CMA| EA| CIA| IFRS | ACCA</h5>
                    <h5 className="heading05">Join Simandhar to make your dreams come true.</h5>
                    <a href="#register" className='btn white-btn white-btn-arrow'>
                        Enroll Now
                    </a>
                </div>
                <div className='right-box text-center'>
                    <h5 className="heading05">Enroll with Simandhar & Ace US CPA Exam in 9 months.</h5>
                    <h5 className="heading05">Get Placed in Big 4s and Top MNCs.</h5>
                    <h5 className="heading05">To know about CPA eligibility and get CPA career counseling for free.</h5>
                    <a href="#register" className='btn white-btn white-btn-arrow'>
                        Contact Us
                    </a>
                </div>
            </div>
        </section>

        <section>
            <div className='container text-center'>
                <h2 className="heading02">Learn it for Free!</h2>
                <p>Simandhar Finance for Non-Finance Professionals Course is absolutely free for CPA and CMA aspirants enrolled with Simandhar Education!</p>
            </div>
        </section>

        <section className='simandhar-fnp'>
            <div className="container-l">
                <h2 className="heading02 text-center">What will you get from Simandhar’s Finance for Non-Finance Professionals?</h2>
                <div className="two-box-flex">
                    <div className="left-box">
                        <p>The course will help you get strong with the basic finance and accounting concepts to help you pursue the US CPA or US CMA with absolute confidence.</p>
                        <ul>
                            <li>Understanding the basic concepts of finance and accounting for a strong foundation</li>
                            <li>Learning the basic concepts of auditing, taxation, reporting, and regulation.</li>
                            <li>Introduction to cost management and accounting</li>
                            <li>Preparation of financial statements, balance sheets, and cash flow</li>
                            <li>Current trends and opportunities in the finance and accounting fields</li>
                            <li>1:1 mentoring session with Mr. Sripal Jain, CA, CPA</li>
                        </ul>

                    </div>
                    <div className="right-box">
                        <Image loading='lazy' src="/img/cpa/fnp_img01.webp" alt="Basic of accounting"fill={true} sizes='100vw' className='resp-img' />
                    </div>
                </div>
            </div>
        </section>

        <RegistrationForm />

        <Footer />
    </>
    )
}

export default basicsOfAccounting