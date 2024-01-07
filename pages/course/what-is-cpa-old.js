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
            {/* <script type='application/ld+json' dangerouslySetInnerHTML={{
                __html:    `
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [{
                        "@type": "Question",
                        "name": "What is CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CPA (Certified Public Accountant) is a designation given by AICPA to the individuals who have passed the Uniform CPA exam, met the required and relevant experience. The CPA designation enforces high professional standards in the field of accounting."
                        }
                        },{
                        "@type": "Question",
                        "name": "Who are eligible for CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The CPA Exams are administered by AICPA, the world's largest accounting body. AICPA offers membership to all the aspirants successfully clearing all 4 CPA exams. CPA license, however, is issued by the 55 state boards of accountancy of the US that are part of NASBA. Each state board has different eligibility criteria that the aspirant needs to meet to take the US CPA exams.
                    
                    Master's Degree in any of the streams of Commerce, Accounting or Finance
                    An aspirant needs 120 credits to take the US CPA exams and 150 credits to get his CPA license
                    It's considered that one year of University education in India is equal to 30 credits of US education
                    In some cases, first division graduates of a three-year degree from NAAC-A accredited universities of India are qualified to take the US CPA exams too."
                        }
                        },{
                        "@type": "Question",
                        "name": "Which companies hire CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "There are indeed many job opportunities in India for US CPA qualified professionals. Obviously, there are the big 4s like Deloitte, EY, etc where CPAs have an opportunity. Apart from the big 4s there are many more international companies like PwC India hiring CPAs even right now. According to Naukri.com there are around 26,426 job openings for a CPA in India as of now and this number keeps increasing, changing every day."
                        }
                        },{
                        "@type": "Question",
                        "name": "How many sections are in CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "There are four sections in the CPA exam:
                    
                    Regulation (REG)
                    Auditing and Attestation (AUD)
                    Financial Accounting and Reporting (FAR)
                    Business Environment and Concepts (BEC)"
                        }
                        },{
                        "@type": "Question",
                        "name": "What is the minimum passing score for CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You need a score of 75 or higher to pass the CPA exam. Specifically, you must earn a 75 or higher on each of the four tests that make up the CPA exam."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is there any negetive marketing for CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "There is no negative marking in the US CPA exam."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is the duration of CPA exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "There are four sections in the CPA exam. The total duration of the exam is 16 hours (4 hours for each section)."
                        }
                        },{
                        "@type": "Question",
                        "name": "What are the corporate tie ups for Simandhar education for CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Simandhar Education has corporate tie-ups with Invesco, EY, Citrin Cooperman, etc."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is CPA tougher that CA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CPA has 4 papers compared to the CA exam which has 3 levels and 18 papers on a whole. Moreover, CPA takes less than a year to complete. The CA, on the other hand, takes close to 5 years to complete."
                        }
                        },{
                        "@type": "Question",
                        "name": "Does ACCA give credit for CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, ACCA doesn't give credit for CPA. NASBA (National Association of State Boards of Accountancy) and the state board of accountancy govern CPA's eligibility rules."
                        }
                        },{
                        "@type": "Question",
                        "name": "Who is the lead instructor at simandhar education for CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Mr. Sripal Jain (CA, CPA) is the Co-Founder and Lead Instructor at Simandhar Education."
                        }
                        },{
                        "@type": "Question",
                        "name": "Any exemptions for CA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CA and US CPA are both professional qualifications. However, the qualities, structures, and durations differ completely; also please note there are no exemptions in any of the subjects as ICAI currently don't have MOU with AICPA, so you will need to write four sections in order to pass the CPA exam."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is the cost of CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CPA exam fee is $1000 and International testing fee is $1500. Additionally, $225 for evaluation making the overall CPA exam cost INR 2, 00,000 without training fee."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is the scope of US CPA in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "There are many US firms all over the globe, and a lot of accountancy related assignments are being outsourced to India. There are many US companies now in India, so the job scope is good. Companies like Deloitte, EY, Amazon, Synchrony, Invesco and so many more frequently hire in India."
                        }
                        },{
                        "@type": "Question",
                        "name": "IS ACCA better than US CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ACCA is a UK program, it is a good course, but the scope for jobs in UK companies is limited worldwide."
                        }
                        },{
                        "@type": "Question",
                        "name": "Which state will i be eligible from?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We select the state for you based on your educational background and make sure you get maximum credits as required. US CPA is a uniform exam and the paper will be the same no matter which state you apply from."
                        }
                        },{
                        "@type": "Question",
                        "name": "How many papaers are there in the CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CPA US is a 4- paper exam- Online 50% MCQ, 50% SIMS (Case Law based questions)
                    
                    FAR - Financial accounting and reporting-
                    AUD - Audit
                    BEC - Business environment
                    REG - Regulation or US taxation
                    Exam format: MCQs, simulations, and written communications.The student will have access to Authoritative literature when he is answering Simulations part in all the 4 papers. Authoritative literature comprises of GAAP, IRS, GAAS where a student can use it to answer, but it requires a lot of practice to locate the exact answer as it is too vast to search."
                        }
                        },{
                        "@type": "Question",
                        "name": "gradution degree from IGNOU considered vaild for a CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, a graduation degree from IGNOU is considered valid for the CPA exam. IGNOU Graduation can give you 60 or 90 credits depending on the MOU, if the MOU is for 1 year- then 60 credits, if you're writing B. Com for 3 years – 90 credits."
                        }
                        },{
                        "@type": "Question",
                        "name": "What are the differences between a CFA and CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A qualifications are both related to finance, there are significant differences between the two. A CFA's expertise is focused on the investment industry. Consequently, CFAs work as portfolio managers, investment advisors, and research analysts.
                    
                    A CPA, on the other hand, is a specialist in accounting and taxes. You can find CPAs working in public accounting and also in the finance departments of small and large businesses."
                        }
                        },{
                        "@type": "Question",
                        "name": "Can i do CPA after completing B.com?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "B.Com gives you a total of 90 credits and to qualify for the CPA exam you need 120 credits but there are certain states which allow you to sit for CPA exam even with 90 credits provided you sign an undertaking that you will meet the balance credits within 18 months of appearing for the first paper. Yes, you can do CPA but you need to sign an undertaking and we will help you with a bridge course to meet the balance credits. Additionally, B. Com with NAAC A- First division is also an eligibility criterion."
                        }
                        },{
                        "@type": "Question",
                        "name": "CFA vs CPA: What is a better qualification?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A CPA's knowledge is more broad-based. An individual who holds the CPA license would have proper expertise in a wide-variety of finance-related areas. A CFA is a more specialized course and is targeted at those who want to work in the investment management profession. Compare and know the details of both CPA vs CFA designations."
                        }
                        },{
                        "@type": "Question",
                        "name": "What are the educational requirments for the CPA exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "To be eligible to appear for the US CPA exam one must have 120 credits, each graduation is converted into 30 years of credits thereby adding 90 credits for 3 years, if your NAAC A, the first division you will get 30 additional credits. To apply for the license, one must have 150 credits. Although certain other requirements vary by jurisdiction. Each jurisdiction has specific requirements about education, experience, and residency. Refer to your jurisdiction's application materials for additional information."
                        }
                        },{
                        "@type": "Question",
                        "name": "How often can i take the CPA examination?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The continuous testing window is applied now; they will need to apply for NTS again and write the exam."
                        }
                        },{
                        "@type": "Question",
                        "name": "How many questions are on the CPA exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The exam has 324 multiple-choice questions, 20 simulation questions, and 3 written communication (essay) questions."
                        }
                        },{
                        "@type": "Question",
                        "name": "Who can take the CPA exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both US residents and foreign nationals who meet the requirements of a particular state board can take the CPA exam."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is there a time limit to complete all the 4 parts of the CPA exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The aspirant who is willing to take the CPA exam must have to pass all four sections (AUD, FAR, BEC & REG) within 18 months. The sections can be taken in any order as per the candidate’s wish and the credit for any of the sections shall be valid for 18 months from the actual exam date. Also, the credit of the examination expires by section. Once the candidate passed outside the period of 18 months then he/she has to retake those sections."
                        }
                        },{
                        "@type": "Question",
                        "name": "What does a cpa do exactly?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "There are many US firms all over the globe, and a lot of accountancy related assignments are being outsourced to India. There are many US companies now in India, so the job scope is good. Companies like Deloitte, EY, Amazon, Synchrony, Invesco and so many more frequently hire in India."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is a CPA difficult than CA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "US CPA is a designation given to the individuals who have passed the uniform CPA exam and met required educational qualifications. Chartered Accountant (CA) is the professional who has passed the CA exam.
                    
                    When it comes to which course is difficult between CPA and CA, we can’t come to a conclusion of stating a particular course. But, we have to know the exam pattern of both CPA and CA.
                    
                    The CPA exam has 4 parts:
                    
                    Audit
                    Regulation
                    FAR
                    BEC
                    The CA exam has 3 levels:
                    
                    Foundation level
                    Intermediate level
                    Final level"
                        }
                        },{
                        "@type": "Question",
                        "name": "Is CPA a stressful job?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In general, the US CPAs work with strict reporting deadlines at heavily regulated industries. It often leads to overtime work regularly. Maybe general accounting work leads to boring work for most people. Apart from the work of CPA, the designation itself has a huge demand across many countries."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is getting a CPA worth it?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CPA can bring many and better opportunities for you. After US CPA, you can explore opportunities in organizations that require knowledge of US GAAP, US Tax and US Audit. CPA US has global recognition, and the scope is not just limited to India or the US, but you can find opportunities across the globe."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is harder CPA or CFA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "US CPA and CFA both are well-respected credentials. The US CPA exam consists of 4 exam parts: AUD, BEC, FAR & REG. Whereas CFA is a three-level exam covering some topics like Economics, Accounting, Ethics, Security Analysis and Money Management. The Chartered Financial Analyst (CFA) has a lower entry-barrier when compared to the US CPA."
                        }
                        },{
                        "@type": "Question",
                        "name": "How long does a CPA take?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "One must have to pass the CPA exam within 18 months and meet the required relevant experience of 2 to 3 years in accounting or finance to become a licenced CPA."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is CPA hard to pass?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Definitely not. The CPA exam just consists of 4 papers, and it's very easy to pass. The exam consists of Multiple Choice Questions, Task-based simulations and Written communication tasks."
                        }
                        },{
                        "@type": "Question",
                        "name": "Who earns more CPA or CFA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "According to Payscale, the US CPA's average salary is INR 7,00,000 per year and the average salary of a CFA INR 5,50,000 per year."
                        }
                        },{
                        "@type": "Question",
                        "name": "How long does it take to clear CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A minimum of 12 to 18 months time is enough to clear the CPA exam."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is the salary of CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Certified Public Accountants are in demand across many industries. They can command high salaries because of their expertise in financing. Also, many companies retain the CPA's accounting talent by paying good salaries along with hikes and bonuses.
                    
                    The average salary for a Certified Public Accountant (CPA) in India is ₹701,387."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is CPA worth it in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The CPA certification paves countless opportunities to work for some of the most renowned companies around the world.
                    
                    Mentioned below are some of the best jobs in India for a CPA:
                    
                    Senior Financial Analyst
                    Risk and Compliance Professional
                    Corporate Controller
                    Accounting Software Developer
                    Information technology Accountant
                    Personal Financial Advisor
                    Finance Director
                    There are indeed many job opportunities in India for US CPA qualified professionals. Obviously, there are Big 4s like Deloitte, EY, etc, where CPAs have an opportunity. Apart from the big 4s, many more international companies like PwC India hire CPAs even right now. According to Naukri.com, there are around 26,426 job openings for a CPA in India as of now, and this number keeps increasing, changing every day."
                        }
                        },{
                        "@type": "Question",
                        "name": "How much does a CPA with 5 years of experience make?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "With more than five years of experience, a US CPA can earn between $68,000 to $130,000."
                        }
                        },{
                        "@type": "Question",
                        "name": "Can i be a accountant without CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, you can become an accountant without a CPA designation. The regular Accountant does the reporting and recording of financial transactions. Anyone who does accounting without any professional degree can call themselves an accountant. Without any certification degree, the accountants can perform some tasks like general accounting and bookkeeping."
                        }
                        },{
                        "@type": "Question",
                        "name": "Do you have to have a masters to be a CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The educational requirement is to have 120 or 150 credits depending on the state you want to apply for from a NAAC recognized college. A candidate must also have certain designated hours in accounting and each university academic year in India provides 30 credits.Completing your three-year graduation would provide you with 30*3=90 credits unless you have passed it with first-class you will get 120 credits. In any other case to get the rest credits you must either go for a master's degree or a diploma course at any professional course such as CA/CWA etc. You must also keep in mind that you complete the required hours in accounting or else you will have to take extra classes to complete the rest credits."
                        }
                        },{
                        "@type": "Question",
                        "name": "What are the 4 CPA exams?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The 4 CPA exams are:
                    
                    Business Environment and Concepts (BEC)
                    Auditing and Attestation (AUD)
                    Regulation (REG)
                    Financial Accounting and Reporting (FAR)"
                        }
                        },{
                        "@type": "Question",
                        "name": "Who earns more CA or CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The average salary CPAs earn (in India) is found to be INR 7,68,552 per year. Most people move on to other jobs if they have more than 10 years' experience as CPA. A Chartered Accountant (in India) earns INR 6,08,976 per year on an average."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is CA better than CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both CA and CPA are highly qualified professional certifications, but the CA course (which is limited to only India) has a strong focus on the technical aspects of accounting and complex tax matters. The CPA course (globally recognized) has a broader focus on accounting and business management."
                        }
                        },{
                        "@type": "Question",
                        "name": "Can CPA be done with out CA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Nowadays, no state board allows associate degree or 3-year degree holders to get the CPA license. Colorado and Michigan used to recognize CA certificates as a prerequisite to sit for the exam, and many Indian candidates applied through them."
                        }
                        },{
                        "@type": "Question",
                        "name": "Can i do CA and CPA together?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CA and CPA both great professions together are definitely an amazing combination. If you are a Chartered Accountant who wishes to explore the world and global opportunities, also get proper experience in MNCs then going for CPA (Certified Public Accountant) certification is your chance to unlock the arena of career options."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is it good to do CPA after CA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CPA is a globally recognized accounting professional, even a B.Com graduate who is unable to do Chartered Accountancy because of the time span of 5 years can do CPA and get a good salary. Being a CPA one can go abroad and set up their own practice or get employment."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is CA ineter eligible for CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Candidates who passed CA (Inter) or CWA (Inter) or CS (Inter) exams are eligible for CPA. And, candidates who have passed MBA (finance) with 70% marks and above (with minimum 4 elective subjects in finance) are eligible for accelerated CPA course."
                        }
                        },{
                        "@type": "Question",
                        "name": "Can i do both CPA and CMA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. The most valuable addition of a CMA certification for an existing CPA is to see how he/she is equipped with working in management accounting, especially the costing area. If the CPA qualification and the external audit job doesn't cover much on management accounting, a CMA certification can help fill the gap."
                        }
                        },{
                        "@type": "Question",
                        "name": "Can indian CMA do CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. In fact, some CMAs go on to get the CPA to further widen their career opportunities. But again, candidates still must meet all of the requirements for the CPA license;they won't get any exam exemptions if a candidate is a CMA holder."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is it worth doing CPA Austraila?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Holding an international designation like CPA Australia is always a value-addition to existing qualifications, provides good career opportunities and helps you stand out from other professionals."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is CMA exam harder than CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most people find that the CPA is a bit harder. However, CMA can be more useful for accounting professionals. People who take the CMA will find a greater focus on management accounting. If this is the field they work in already, this is going to be an easier exam."
                        }
                        },{
                        "@type": "Question",
                        "name": "How benificals is CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Having a CPA license also opens the doors to more benefits, whether that comes in the form of better benefits for a higher ranking job or through negotiating power. Since CPAs are in higher demand than their non-CPA counterparts, CPAs can negotiate better benefits."
                        }
                        },{
                        "@type": "Question",
                        "name": "Should i get CPA and CMA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Doubling down on accounting credentials, especially obtaining both your CPA license and CMA certification can broaden your knowledge base of accounting concepts and skills, enhance your marketability and provide numerous other benefits."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is CPA qualification?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Certified Public Accountant (CPA) qualification is a certification that public accountants can obtain in order to provide accounting and financial services to businesses and individuals. A CPA provides assurance for investors, creditors, and other stakeholders who need to evaluate an organization's financial performance."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is a CPA license worth it?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Passing the CPA Exam can not only help elevate your personal credentials, but may also help distinguish you from other candidates when applying to new job positions. To get the most out of your accounting career, getting your CPA license is the key to doing so."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is a CPA a good career?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A CPA can be a great career for someone who has the right experience and skill sets. They work in some of the most prestigious industries such as banking, finance, and healthcare. With some experience, they can also land jobs with other companies in different industries."
                        }
                        },{
                        "@type": "Question",
                        "name": "How many times can you take the CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The AICPA does not limit the number of times you may take the CPA Exam. With a pass rate of approximately 50%, steep examination requirements, and regularly updating materials, many candidates will take one or more sections multiple times on their path to the CPA certification."
                        }
                        },{
                        "@type": "Question",
                        "name": "What kind of jobs can you get with a CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "There are many different jobs that you can get with a CPA, so you'll want to explore your options. Some job opportunities include business taxes, management consulting firms, credit counseling agencies, and private equity firms."
                        }
                        },{
                        "@type": "Question",
                        "name": "How much time should i study for CPA exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In general, it's recommended that CPA candidates study for 300-400 hours for the CPA exam in total to ensure you pass. Essentially, this equates to about 80-100 hours of CPA study hours for each exam section."
                        }
                        },{
                        "@type": "Question",
                        "name": "What if i fail my CPA exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If you failed a CPA exam section, you can sit for it in the next month or two and score 75 or above. You only need 2-6 weeks to study for this retake, assuming you can put in around 15-20 hours per week of CPA exam study time."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is the CPA exam called?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Uniform Certified Public Accountant Examination (CPA Exam) is the examination administered to people who wish to become U.S. Certified Public Accountants."
                        }
                        },{
                        "@type": "Question",
                        "name": "How many times a year CPA exam conducted?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The CPA exams are conducted four times a year. The months when the Exams are conducted are termed as testing windows. The Testing windows are open for the following four time periods every year.
                    
                    January 1 - March 10
                    April 1 - June 10
                    July 1 - September 10
                    October 1 - December 10"
                        }
                        },{
                        "@type": "Question",
                        "name": "Are CPA exams in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "After a successful pilot testing of the CPA exam in India during 2020, the American Institute of Certified Public Accountants (AICPA) and National Association of State Boards of Accountancy (NASBA) have decided to switch to continuous CPA Exam testing from January 1, 2021."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is better MBA or CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The choice totally depends on you. CPA is a better course than an MBA if accounting is your interest. It also opens the avenues of the international job market and you get perfectly equipped for the various job roles across the world."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is a CPA course in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Certified Public Accountant or CPA course is equivalent to the CA course in India. CPA course is a license issued by any State out of the 55 States of the USA. After the completion of course, the CPA professionals can find high-profile jobs in the sectors of banking, construction, financial services and manufacturing etc."
                        }
                        },{
                        "@type": "Question",
                        "name": "Should i get my MBA or CPA first?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If you are interested in management opportunities or general business consulting, then an MBA would be better. On the other hand, you should become a CPA, especially if you want to work for a big four accounting firm."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is a CPA career?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A certified public accountant, or CPA, is a finance professional who has passed the CPA exam and helps individuals, organizations and businesses interpret and communicate their financial data. CPAs assist with managing expenses, investments, taxes, audits and planning and reaching financial goals."
                        }
                        },{
                        "@type": "Question",
                        "name": "Are CA abd CPA the same?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The main difference between CAs and CPAs is that the CPA is used in the United States, while CA is used in India. If these CA professionals pass a test, their qualifications can transfer to the United States, working as CPAs."
                        }
                        },{
                        "@type": "Question",
                        "name": "What should i study after CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "What you should study after CPA depends on what you want to do. If you want to go into the finance industry, then it is best to take a course in accounting. If you want to work in marketing, then it is best to take a course in marketing or management."
                        }
                        },{
                        "@type": "Question",
                        "name": "Can you shit for a CPA with an MBA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It is possible to sit for the Certified Public Accountant (CPA) exam with a Master of Business Administration (MBA), especially if the candidate has met the 150 semester hours of college coursework required to be licensed."
                        }
                        },{
                        "@type": "Question",
                        "name": "Can i do both CPA and CFA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. The CPA and CFA combination is best suited if you plan to work in the research department within investment banks, hedge funds, and mutual funds or plan to hold another job in the investment or finance community."
                        }
                        },{
                        "@type": "Question",
                        "name": "Can CPA exams be written in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Testing for CPA Exam candidates at test centres in India will begin on January 1, 2021. Also, the candidates may begin to use the scheduler on November 2, 2020."
                        }
                        },{
                        "@type": "Question",
                        "name": "What are the CPA exams locations/centeres in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Indian candidates may schedule to take the \"US CPA Exam\" in the Prometric locations given below:
                    
                    Hyderabad
                    Ahmedabad
                    Mumbai
                    Delhi
                    Bangalore
                    Chennai
                    Kolkata
                    Trivandrum"
                        }
                        },{
                        "@type": "Question",
                        "name": "What is the CPA salary in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Certified Public Accountants are in demand across many industries. They can command high salaries because of their expertise in financing. Also, many companies retain the CPA's accounting talent by paying good salaries along with hikes and bonuses.
                    
                    The average salary for a Certified Public Accountant (CPA) in India is ₹701,387."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is a CPA license?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The CPA exam requirements vary by state jurisdiction. Every state board of accountancy has a different set of requirements, but most states have a core set of qualifications for a candidate to be eligible for the CPA exam.
                    
                    Below are the requirements to obtain CPA license.
                    
                    In general, many states ask for 150 credit hours in some specific courses from a university or an accredited institute under NASBA.
                    The candidate should pass the Ethics exam.
                    Must have 2,000 hours of work experience in taxation, auditing, accounting and management consultancy.
                    Age limit: 18+ years."
                        }
                        },{
                        "@type": "Question",
                        "name": "CAn CA intermediate do CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Candidates who passed CA (Inter) exam are also eligible to do CPA."
                        }
                        },{
                        "@type": "Question",
                        "name": "Which study material simandhar follows for CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Simandhar Education follows Becker (a global education provider headquartered in the US) study material for CPA."
                        }
                        },{
                        "@type": "Question",
                        "name": "Does Simandhar provide live classes for CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Simandhar Education provides you with access to Live Interactive classes from anywhere in the world and provides the facility to access recorded videos for students who seek to revisit the material taught."
                        }
                        },{
                        "@type": "Question",
                        "name": "How is Simandhar education different from other institutes for CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The reasons behind \"How Simandhar Education different from other Institutes\" are:
                    
                    The Becker product and live classes are very effective.
                    CPA course at Simandhar is inexpensive.
                    It has good placement assistance.
                    It is associated with all Big 4s & multinationals, and alumni of Simandhar have placed in MNCs.
                    Simandhar has a wide network of world-class trainers, teachers and industry-experts across domains, especially CPA, CMA, EA, CIA, IFRS & HRCI."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is the pass percentage of the CPA exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "2020 CPA Exam Pass Rates
                    
                    Section	First Quarter	Second Quarter	Third Quarter
                    AUD	BEC	FAR	REG
                    47.97%	61.76%	46.37%	55.42%
                    65.29%	76.92%	62.86%	74.97%
                    56.89%	69.89%	55.67%	66.12%"
                        }
                        },{
                        "@type": "Question",
                        "name": "How are the faculties at Simandhar education for CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Simandhar Education provides you with access to Live Interactive classes from anywhere in the world.
                    Provides the facility to access recorded videos for students who seek to revisit the material taught.
                    Supports its students by placing them in Top F & A companies, Big 4 etc.
                    All the teachers at Simandhar are CPA qualified and rank holder Chartered Accountants (CAs) from India.
                    Personal grooming sessions for interviews.
                    Attention on individual candidates.
                    It provides placement opportunities."
                        }
                        },{
                        "@type": "Question",
                        "name": "How many hours do faculty teach at simandhar education for CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "275+ hours of video lessons per section by Top CPA."
                        }
                        },{
                        "@type": "Question",
                        "name": "Does the US CMA give credit for CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, US CMA doesn't give credit for CPA."
                        }
                        },{
                        "@type": "Question",
                        "name": "Does simandhar education provide evolution and licensing assitance for CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Simandhar Education provides evaluation and licensing assistance for CPA. The CPA aspirant must have 2,000 hours of work experience in taxation, auditing, accounting and management consultancy (need not be under a CPA supervisor, Mr.Sripal Jain (CA,CPA) can verify for you)."
                        }
                        },{
                        "@type": "Question",
                        "name": "Do i need a license if i work in any US company?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "US CPA license is used mainly when one wants to be self-employed and practice as a Certified Public Accountant living in the US."
                        }
                        },{
                        "@type": "Question",
                        "name": "CFA vs CPA: which is better qualification?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A CPA's knowledge is more broad-based. An individual who holds the CPA license would have expertise in a wide variety of finance-related areas. A CFA is a more specialized course and is targeted at those who want to work in the investment management profession. Compare the details of CPA vs CFA designations."
                        }
                        },{
                        "@type": "Question",
                        "name": "What does a CPA do?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Certified Public Accountants work in a wide range of professions. You can find them in banking, financial services, government jobs, and education. However, most CPAs are employed in public accounting or corporate accounting."
                        }
                        },{
                        "@type": "Question",
                        "name": "Are the CPA USA exams in an open book format?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, the exam is NOT in an open book format. You are not allowed any resources in the testing center while taking the exam."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is a notice to schdule , and when will i receive mine?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Notice to Schedule (NTS) is your notification that you may begin scheduling your examination with Prometric. It is a Hall ticket. NTS is issued in 2-4 weeks of exam application at the CPA Central."
                        }
                        },{
                        "@type": "Question",
                        "name": "Who needs a CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Certified Public Accountants provide a range of services across different types of organizations.
                    
                    Public accounting firms: CPAs are involved in the preparation, review, and auditing of their clients' financial statements. Their expert knowledge in the fields of accounting, taxes, and related areas helps them to fulfil this role.
                    Large corporations: Big companies need the services of CPAs. In these organizations, CPAs work in accounting, internal auditing, and tax accounting. They play a crucial role in preparing the corporation's financial statements and ensuring that these adhere to the required regulatory norms.
                    Small businesses: CPAs can play an important role in small companies as well. They provide financial advice and can help with the firm's accounting records. Many small businesses use CPAs to assist them with their taxes and to represent them before the IRS.
                    You can also find CPAs working in government organizations and the educational sector. If you choose to work in public accounting, you could join one of the \"Big 4\" accounting firms – Deloitte,
                    PricewaterhouseCoopers, Ernst & Young, or KPMG. These firms, as well as their smaller counterparts, provide accounting, auditing, tax, and consulting services. Many CPAs also opt to work in corporations and government entities. Their job could involve managerial or tax accounting, internal auditing, or financial analysis."
                        }
                        },{
                        "@type": "Question",
                        "name": "What are the eligibilty requirments for US CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "To be eligible to appear for the US CPA exam one must have 120 credits, each graduation is converted into 30 years of credits thereby adding 90 credits for 3 years, if your NAAC A, the first division you will get 30 additional credits. To apply for the license, one must have 150 credits. Although certain other requirements vary by jurisdiction. Each jurisdiction has specific requirements about education, experience, and residency. Refer to your jurisdiction's application materials for any additional information."
                        }
                        },{
                        "@type": "Question",
                        "name": "How long will my NTS be valid?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Your NTS will be valid for a specific amount of time. This time varies by jurisdiction. For most of the states, it is valid for 6 months whereas for a few it has 9 months validity. You must sit for the examination before your NTS expires. If you do not sit for the examination within the established time frame, your NTS will be expired and you will need to submit a new application to receive a new NTS. The expiration date will be mentioned on the NTS."
                        }
                        },{
                        "@type": "Question",
                        "name": "How is the CPA exam scored?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You need a score of 75 or higher to pass the CPA exam. Specifically, you must earn a 75 or higher on each of the four tests that make up the CPA exam."
                        }
                        },{
                        "@type": "Question",
                        "name": "I have passed all the four sections. Do my credits expire?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If you are appearing for exams in any country other than the US you will have to take the license within 3 years of passing the CPA exam or your credits will lapse. If you appear for the exam in the US you have to apply for a license within 10 years."
                        }
                        },{
                        "@type": "Question",
                        "name": "Can we hold a license of multiple states?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, you can hold a multiple state license provided you meet the CPE (Continuous Professional Education) as per the state rule."
                        }
                        },{
                        "@type": "Question",
                        "name": "When can i take the CPA exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "To decide when to take the CPA exam, follow these steps:
                    
                    Submit your application and all required fees to your state board of accountancy. When the state board approves your application, it contacts the National Association of State Boards of Accountancy (NASBA).
                    NASBA reviews the state board information, including the tests you are allowed to take. NASBA sends you a Notice to Schedule (NTS).Use your NTS to contact
                    Use your NTS to contact Prometric and set up a date and time to take your test. The CPA exam provides testing windows, which are basically periods of when the candidates can take tests."
                        }
                        },{
                        "@type": "Question",
                        "name": "Who administer the CPA exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The US exam is administered by AICPA (American Institute of Certified Public Accountants), which is the largest accounting body in the world."
                        }
                        },{
                        "@type": "Question",
                        "name": "What does a CPA do on daily basic?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The daily responsibilities of the CPA include:
                    
                    Updating and organizing accounting records as needed.
                    Performing detailed audits in financial documents.
                    Analyzing and preparing reports on transactions."
                        }
                        },{
                        "@type": "Question",
                        "name": "How much does a CPA degree cost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The US CPA exam fee will be around $3,000. In India, the cost of the US CPA exam is approximately 2.25L approx.
                    
                    CPA Auditing and Attestation (AUD) Exam Fee - $250
                    CPA Regulation (REG) Exam Fee - $250
                    CPA Business Environment and Concepts (BEC) - $250
                    CPA Financial Accounting and Reporting - $250
                    For the US CPA exam papers, $1500 is paid as the International testing fees for the students who plan to take the exams out of the US.250 USD is paid for the CPA application.
                    
                    225 USD is paid to the National Association of State Boards of Accountancy (NASBA)."
                        }
                        },{
                        "@type": "Question",
                        "name": "What happens after you pass the CPA exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "After passing the CPA exam, there's a need to wait for congratulatory messages from the state board. Sometimes, it could be many months. Also, don't freak if you get it within a week.You have to do something valuable before getting the congratulatory letter.
                    
                    Take a print out of the CPA licensing form and verify it with the suitable person and ask for the favour. It’s a time taking process, but you have to do it.If you want to upgrade your career, it’s the right time to spend on drafting your resume.Take Ethics exam of CPA:
                    
                    The next is to take the CPA ethics exam, don’t bother about the exam if it is not mentioned in the congratulatory letter, as many states don’t have this need. Some states like California, run their CPA exam. But, whereas many other states ask the candidates for the competition of the test.
                    
                    Fulfil the work experience:Many states need Certified Public Accountants to accumulate relevant experience in accounting. Sufficient experience in public accounting is enough in taxation and general accounting. The majority of the states in the U.S require you to supervise your experience and should be verified with a CPA license."
                        }
                        },{
                        "@type": "Question",
                        "name": "Can i study CPA by myself?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely Not. Only when you have good knowledge in US auditing standards, US GAAP, and US tax laws can you study CPA by yourself if you are new to CPA syllabus/material and then go for training from some of the best institutes like Simandhar Education."
                        }
                        },{
                        "@type": "Question",
                        "name": "What to do once you pass all 4 CPA exams?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "After passing the CPA exam, there’s a need to wait for congratulatory messages from the state board. Sometimes, it could be many months. Also, don’t freak if you get within a week.
                    
                    You have to do something valuable before getting the congratulatory letter.
                    
                    Take a print out of the CPA licensing form and verify it with the suitable person and ask for the favour. It’s a time taking process, but you have to do it.If you want to upgrade your career, it’s the right time to spend on drafting your resume.
                    
                    ake Ethics exam of CPA:The next is to take the CPA ethics exam, don’t bother about the exam if it is not mentioned in the congratulatory letter, as many states don’t have this need. Some states like California, run their CPA exam. But, whereas many other states ask the candidates for the competition of the test.
                    
                    Fulfil the work experience:Many states need Certified Public Accountants to accumulate relevant experience in accounting. Sufficient experience in public accounting is enough in taxation and general accounting. Majority of the states in the U.S require you to supervise your experience and should be verified with a CPA license."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is CPA in demand?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "There are indeed many job opportunities in India for US CPA qualified professionals. Obviously, there are big 4s like Deloitte, EY, etc., where CPAs have an opportunity. Apart from the big 4s, many more international companies like PwC India hire CPAs even right now. According to Naukri.com, there are around 26,426 job openings for a CPA in India as of now, and this number keeps increasing, changing every day."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is CPA a degree or diploma?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CPA (Certified Public Accountant) is a designation given by AICPA to the individuals who have passed the Uniform CPA exam, met the required and relevant experience. The CPA designation enforces high professional standards in the field of accounting."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is the syllabus of CPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CPA exam consists of 4 sections.
                    
                    Auditing and Attestation (AUD)
                    Regulation (REG)
                    Financial Accounting and Reporting (FAR)
                    Business Environment and Concepts (BEC)
                    There are 3 types of questions in the CPA exam:
                    
                    Multiple-Choice Questions (MCQs) vary from one sentence to paragraph length questions with 4 options. Task-Based Simulations (TBS) require candidates to type in answers and may include research questions, journal entries, reconciling accounts, filling out a form with MCQs, or filling out sections of reports. Written communication tasks test the candidate's ability through writing; they must be in the BEC section.
                    
                    CPA Exam Content Areas by Sections:
                    
                    Auditing and Attestation (AUD):
                    
                    Developing a Planned Response & Assessing Risk (20 to 30%)
                    Professional Responsibilities, Ethics & General Principles (15 to 25%)
                    Obtaining Evidence & Performing Further Procedures (30 to 40%)
                    Reporting and Forming Conclusions (15 to 25%)
                    Regulation (REG):
                    
                    Federal Tax Procedures, Professional Responsibilities and Ethics (10 to 20%)
                    Business Law (10 to 20%)
                    Federal Taxation of Property Transactions (12 to 22%)
                    Federal Taxation of Individuals (15 to 25%)
                    Federal Taxation of Entities (28 to 38%)
                    Financial Accounting and Reporting (FAR):
                    
                    Standard-Setting, Conceptual Framework, and Financial Reporting (25 to 35%)
                    Select Financial Statement Accounts (30 to 40%)
                    Select Transactions (20 to 30%)
                    State and Local Governments (5 to 15%)
                    Business Environment and Concepts (BEC):
                    
                    Business Environment and Concepts (BEC):
                    Economic Concepts and Analysis (17 to 27%)
                    Financial Management (11 to 21%)
                    Information Technology (15 to 25%)
                    Operations Management (15 to 25%)"
                        }
                        },{
                        "@type": "Question",
                        "name": "Can i pusue CPA from india?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Testing for CPA Exam candidates at test centers in India has begun on January 1, 2021. The CPA aspirants can take the exam sections without restrictions, other than waiting to receive scores from prior attempts of the same section or a major change to the exam. Continuous Testing will replace the existing limited CPA Exam Testing Window model, which only permits candidates to test in India during designated time frames.
                    
                    The 55 U.S. Accountancy Boards support the move to continuous testing in India. This shift to a continuous testing model in India signifies the power of alignment among state boards, NASBA, AICPA and Prometric as these organizations continue to support Exam candidates on their journey to CPA. Candidates are asked to visit the NASBA's website to confirm that their Accountancy Board has transitioned to the Continuous Testing model.
                    
                    Exam Locations: In India, the CPA exam will happen in Hyderabad, Ahmedabad, Mumbai, Delhi, Bangalore, Chennai, Kolkata and Trivandrum."
                        }
                        },{
                        "@type": "Question",
                        "name": "How many subjects are there in the CPA exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "There are 4 subjects in the CPA exam:
                    
                    Business Environment and Concepts (BEC)
                    Auditing and Attestation (AUD)
                    Regulation (REG)
                    Financial Accounting and Reporting (FAR)"
                        }
                        },{
                        "@type": "Question",
                        "name": "What is the difference between a CPA and an accoutnat?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A Certified Public Accountant (CPA) is a professional accountant who has met state qualifications and has acquired an additional level of credibility and expertise. A US CPA is equivalent to an Indian CA. To be licensed as a CPA, an accountant must pass the Uniform Certified Public Accountant Examination and meet other educational and work criteria necessary to become a CPA. As opposed to accountants, only CPAs can perform mandatory audits for publicly traded U.S. companies.An accountant is a practitioner who engages in accounting through preparation and audit of financial statements, bookkeeping, and financial analysis. Accountants are a level up from bookkeepers. They can (but usually don\'t) perform bookkeeping functions. Still, they usually prepare detailed financial statements, perform audits of the books of public companies, and prepare reports for tax purposes."
                        }
                        },{
                        "@type": "Question",
                        "name": "Who earns more CPA and CMA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CPA professionals usually pursue the career of an accountant or financial advisor. ... Over the course of the career, the average salary of a CPA hovers around $120,000, while that of a CMA is around $100,000."
                        }
                        },{
                        "@type": "Question",
                        "name": "Is the CPA exam multiple coice?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The CPA Examination comprises four sections: Auditing and Attestation (AUD), Business Environment and Concepts (BEC), Financial Accounting and Reporting (FAR) and Regulation (REG). All four sections contain multiple-choice questions (MCQ) and task-based simulations (TBS)."
                        }
                        },{
                        "@type": "Question",
                        "name": "",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": ""
                        }
                        }]
                    }`}} /> */}
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
            <section className='whatiscpa-top-section'>
                <div className="container">
                    <div className="left-box">
                        <h3>Simandhar Education Watt Sells Award Training Institute for US CPA Course or Certified Public Accountant</h3>
                        <p className="strip">Prepare with India's Trusted Institute</p>
                        <h4>What is CPA or US CPA Course?</h4>
                        <p className='text-center'>(Certified Public Accountant)</p>
                        <p>A Certified Public Accountant is a professional who has earned the CPA license from any of the 55 state accountancy boards of the USA all of which are part of NASBA (National Association of the State Boards of Accountancy). Each state board has the authority to grant a CPA license. One must meet all the requirements of the state board including Education, Experience, and Examinations.</p>
                        <p>The CPA course or the US CPA is like the CA (Chartered Accountant) course in India but with only 4 exams. Due to the widespread awareness and acceptance of CPA credentials, it’s understood that a CPA possesses the required knowledge of all accounting areas as analyzing financial statements, financial planning, tax preparation, internal auditing, income tax, and other specializations of accounting. In a nutshell, a CPA is someone who has mastered all the elements of the accounting profession. This is also one of the many reasons, professional organizations seek CPAs for complex accounting and finance jobs.</p>
                    </div>
                    <div className="right-form-box">
                        <CommonForm  formName="what is cpa" Qualification={true} setCourse="CPA" />
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
                <HelpSection helpData={helpData2.takeaWays} />
            </section>

            <section className='st-journey-section'>
                <AchieversSection achieverData={data.homePage} showData={true} />{" "}
            </section>

            <section className='section study-portal-section'>
                <div className="container">
                    <div className="left-box">
                        <h5>TO UNDERSTAND COMPLETE BECKER STUDY <br /> PORTAL</h5>
                        <p>Register yourself to understand Becker US CPA study portal</p>
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
                    <h2 className="heading02">WHY SIMANDHAR EDUCATION</h2>
                    <p>Simandhar Education is an initiative by Sripal Jain, CPA, CMA, with the vision of training and guiding Indian students & professionals in obtaining the internationally-acclaimed CPA designation which would add to their knowledge base, enhance their credibility, and give them a global perspective.</p>
                    <p>Simandhar Education in alliance with Becker Professional Education, the most acclaimed CPA Review supplier in the USA and CMA program supplier in the USA, is putting forth a thorough CPA Review Program and CMA program to prepare aspirants for success in CPA and CMA Exam of USA.   </p>
                    <p>Simandhar Education, inaugurated with an objective to dedicate its utmost inputs to help CPA, CMA, CFA, CA professional students to accomplish their goals. The main theme is to facilitate students</p>
                </div>
            </section>

            <section className='section study-portal-section'>
                <div className="container">
                    <div className="left-box">
                        <h5>WANT TO KNOW COMPLETE INFORMATION <br /> ABOUT US CPA</h5>
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