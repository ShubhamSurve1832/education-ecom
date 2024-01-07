import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'
import BannerSection from '../../../CPA/BannerSection'
import HelpSection from '../../../CPA/HelpSection'
import AchieversSection from '../../../CPA/AchieversSection'
import CmaContent from '../../../contentpartner/CmaContent'
import DesignationSection from '../../../CPA/DesignationSection'
import ExamSection from '../../../CPA/ExamSection'
// import CpaProgram from '../components/CpaProgram'
import FaqSectionCma from '../../../CPA/FaqSectionCma'
import CurriculumSectionone from '../../../CPA/CurriculumSectionone'
import TableSection from '../../../CPA/tableSection'
import Header from '../../../components/Header'
import Footer from "../../../components/footer";
import { urlConstants as urlConstant } from '../../../constants/urlConstants'
import CommonForm from '../../../components/CommonForm'
import Image from 'next/image'
import white_cross from '../../../public/img/white_cross.png'
import indexData from '../../../database/index.json'





// import helpData from '../database/data/helpSection.json'
// import bannerData from '../database/data/banner.json'
// import achieverData from '../database/data/achieversSection.json'
// import contentPartnerData from '../database/data/contentSection.json'
// import examData from '../database/data/exam.json'
// import CurriculumSectiononeData from '../database/data/curriculumsectionOne.json'
// import ProgramData from '../database/data/program.json'

export default function CMA() {
  const [cmaBannerData, setCmaBannerData] = useState({
    cmaBanner: {}
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.heroBanner,
      responseType: "json"
    })

      .then((res) =>
        setCmaBannerData((prevState) => (
          { cmaBanner: res.data.cmaPage }
        )))

      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // EXAM SECTION    
  const [examData, setExamData] = useState({
    cmaData: {}
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.examSection,
      responseType: "json"
    })

      .then((res) =>
        setExamData((prevState) => (
          { cmaData: res.data.cmaPage }
        )))

      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // HELP SECTION
  const [helpData, setHelpData] = useState({
    cmaPage: {},
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.helpSection,
      responseType: 'json',
    })
      .then((res) =>
        setHelpData((prevState) => (
          { cmaPage: res.data.cmaPage }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // HELP SECTION
  const [helpData1, setHelpData1] = useState({
    cmaPage: {},
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.helpSection,
      responseType: 'json',
    })
      .then((res) =>
        setHelpData1((prevState) => (
          { cmaPage: res.data.cmaPageone }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

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
          { takeaWays: res.data.takeaWays }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // ACHIVER SECTION
  const [data, setData] = useState({
    cmaPage: {},
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.achiverSection,
      responseType: 'json',
    })
      .then((res) =>
        setData((prevState) => (
          { cmaPage: res.data.cmaPage }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // DESIGNATION SECTION
  const [designationData, setDesignationData] = useState({
    designationcontent: {},
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.contentSection,
      responseType: 'json',
    })
      .then((res) =>
        setDesignationData((prevState) => (
          { designationcontent: res.data.designation }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // CONTENT PARTNER SECTION
  // const [contentPartnerData, setContentPartnerData] = useState({
  //   contentPartner: {},
  // })
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: urlConstant.contentSection,
  //     responseType: 'json',
  //   })
  //     .then((res) =>
  //       setContentPartnerData((prevState) => (
  //         { contentPartner: res.data.cmaPage }
  //       )))
  //     .catch((err) =>
  //       console.log("error is ", err.message)
  //     )
  // }, [])

  // CURRICULUM SECTION
  const [CurriculumData, setCurriculumData] = useState({
    curriculum: {},
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.curriculumSectionOne,
      responseType: 'json',
    })
      .then((res) =>
        setCurriculumData((prevState) => (
          { curriculum: res.data.cmaPage }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // console.log("test data",CurriculumData.curriculum)

  const [isShow, setIsShow] = useState(false)
    const showPopup = () => {
        setIsShow(!isShow)
    }

  return (
    <>
      <Head>
        <title>US CMA Certification Course | Duration, Syllabus & Fee | IMA | Simandhar Education</title>
        <meta content='Get US CMA Course Details,Exam,Benefits, Syllabus, Salary,Eligibility ,Fees & Job Placement in India. The Certified Management Accountant is globally recognized, advanced-level credential appropriate for accountants and financial professionals in the business' name='description'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta content='CMA, certified management accountant, US CMA, CMA USA in India, CMA full form, CMA exam, CMA USA In hyderabad,CMA USA in Delhi,CMA USA in Bangalore,CMA USA in Mumbai,US CMA,CMA Course,CMA coaching in bangalore,pass rate of CMA exam,CMA requirements in india,CMA exam pattern,CMA exam schedule,CMA course details,CMA usa from india,best CMA coaching in india,CMA Evaluation Assistance,CMA Placement Assistance,Best CMA review course,Best CMA review course 2019 , CMA USA in Bangalore, CMA Training in Bangalore, CMA Coaching in Bangalore, CMA Classes in Bangalore, cma in bangalore, us cma in bangalore, cma in bangalore, US CMA, US CMA Course, US CMA Syllabus, US CMA Course Details, CMA Program, CMA Certification Certified Management Accountant, US CMA Salary, CMA in Bangalore, CMA USA in Bangalore, CMA Coaching in Bangalore, CMA Classes in Bangalore, US CMA in Bangalore, CMA course in delhi, US CMA coaching in Delhi, CPA Coaching in Delhi, CPA USA in Delhi, CMA USA in Gurgaon, CMA Coaching in Mumbai, CMA Course near me, cma course in bangalore, cma colleges in bangalore, cma course colleges in bangalore, wiley cma, cma exam academy, best cma institute in bangalore, best cma coaching in bangalore,CMA,US CMA,US CMA Course,US CMA Syllabus,US CMA Course Details,CMA Program,CMA Certification,Certified Management Accountant,US CMA Salary,CMA USA Coaching in Hyderabad,CMA Course in Hyderabad,CMA Course,cma usa salary in india,cma usa course fees in india,cma usa salary in india,cma usa course fees in india,us cma salary in india,cma usa salary,cma salary in india,cma course fees,cma coaching in Hyderabad,cma course in hyderabad,cma certification, cma usa eligibility,cma usa scope in india,cma usa training,cma usa syllabus,cma course in india,certified management accountant india,certified management accountant course in india' name='keywords'></meta>
        <link rel="canonical" href="https://simandhareducation.com/course/cma" />

        <script type='application/ld+json' dangerouslySetInnerHTML={{
        __html:
          `{
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "US CMA Course - 2023 | Know About CMA Course Details, Syllabus, Fees, Scope, Salary in India",
            "description": "US CMA is the highest level of certification in management accounting, awarded by the IMA.  
          
          Listen to Mr. Sripal Jain, CA, CPA, talk about the US CMA Course 2022, CMA USA, US CMA India, Syllabus, Subjects, Fees, Salary, course duration, exam pattern, and job prospects of US CMA.",
            "thumbnailUrl": "https://i.ytimg.com/vi/TZxeVEOXv5A/maxresdefault.jpg",
            "uploadDate": "2022-03-29",
            "duration": "PT5M10S",
            "contentUrl": "https://youtu.be/TZxeVEOXv5A"
          }`}} />

        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What is US CMA Course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Like we have Cost accountants in India, the US cost accountants are known as US CMA (Certified management accountants), the US CMA qualification is governed by IMA (Institute of Management accountants). Simandhar Education is the pioneer in US CMA Qualification and approved training partners of IMA, USA both in India as well as globally in alliance with Becker professional education, USA."
                }
              },{
                "@type": "Question",
                "name": "Is US CMA Valid in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There are lot of US companies operating in India, for example- Accenture, Capgemini, Cognizant, World bank, D.E.Shaw, Genpact- majority of them hire US CMA for FP&A profile- Financial planning and analysis, US CMA enjoys global recognition, thus there is ever increasing demand for US Certified management accountants in India."
                }
              },{
                "@type": "Question",
                "name": "Is US CMA Easy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "US CMA is typically composed of two parts, Part 1 and part 2. Compared to Indian qualifications, US CMA is easy to crack and pass percentage is also above 30-35% for US CMA, one need to have the passion to excel in planning and analysis section in order to be complete job ready in market."
                }
              },{
                "@type": "Question",
                "name": "What is US CMA Salary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "US CMA Salary as per IMA survey come closer to $1,01,000 per annum in US, however in India the US CMAs are typically hired at 3,50,000 -6,00,000 INR per annum respectively, the overall compensation may increase over the period, at Simandhar education we placed one of our alumni at INR 11,50,000 however placing candidates above such package is very rare and depends on one skillset."
                }
              },{
                "@type": "Question",
                "name": "Who Earns more CA or CMA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Chartered accountants are typically paid higher due to their attest functions and their reporting is primarily external, however CMA standalone also are hired at INR 6,00,000 per annum salary and we recommend that one select qualification based on one’s own interest and passion as CA deals majorly with Audit and Tax, CMA Deals with forecasting and planning."
                }
              },{
                "@type": "Question",
                "name": "Is CMA Equal to CA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CMA typically deals with business finance team and C majorly are hired in Corporate finance, CMAs popularly known as Cost management are primarily concerned on reporting to internal management, whereas CA report to external stakeholders. So ideally CMA and CA are very different in substance."
                }
              },{
                "@type": "Question",
                "name": "Can a student  do US CMA while pursuing BSC or BBA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, any student can do US CMA after clearing their 12th class exams, and while doing graduation as well. It is just a 6 to 8 months professional certification which is also globally recognized."
                }
              },{
                "@type": "Question",
                "name": "How do i get my US CMA Certificate without the 2 year's experience?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Once the student clears the CMA exams, they get an email confirming they have cleared both the papers, this email can be used to get a job. Once they get 2 years of experience, they can show that to IMA, and apply for the certificate."
                }
              },{
                "@type": "Question",
                "name": "What is the difference between ICWAI and US CMA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ICWAI takes 3 years to be completed and the student has to write about 20 test papers. The US CMA has just 2 exam papers and can be completed within 1 year. Since US companies are everywhere, the scope of jobs is evergreen in this sphere."
                }
              },{
                "@type": "Question",
                "name": "Who can apply for a scholarship for US CMA Exams?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Regular students going to college can apply for scholarships to IMA, requesting them to waive the paper fees for both the CMA exams. This request needs to go via the college through email to IMA. If the student gets a scholarship, he will pay only the IMA entrance fee and membership fee, the papers fees will be waived."
                }
              },{
                "@type": "Question",
                "name": "Is there any negative marking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No negative marking"
                }
              },{
                "@type": "Question",
                "name": "What is US CMA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CMA (Certified Management Accountant) certification has been the global benchmark for management accountants and financial professionals. The CMA is an advanced professional certification specifically designed to measure the critical accounting and financial management skills. This is especially relevant for success in a business environment"
                }
              },{
                "@type": "Question",
                "name": "Is US CMA Recognized in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Institute of Cost and Works Accountants of India (ICWAI) has entered into a Memorandum of Understanding (MoU) with the Institute of Management Accountants (IMA), USA to enable mutual recognition and cooperation between the two institutes to develop the profession of Management Accountancy for the benefit of their members and students in the pursuit of excellence in education and training and continuing professional development in Management Accountancy. b. The MoU will enable recognition of the professional qualification of the respective Institutes. A member of ICWAI can get enrolled as a member of IMA USA and vice versa."
                }
              },{
                "@type": "Question",
                "name": "What is the eligibility critera for CMA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There are some general requirements that one needs to follow in order to be eligible for the CMA certification.
            
            Candidate needs to have a bachelor's degree from any accredited college/university or a related professional certification
            Candidate needs to have an active membership in IMA (Institute of Management Accountants)
            Candidate has continuous years of professional experience in management accounting or financial management, which can be completed after passing the exam, but are required as a final step to certification
            One more important requirement is the candidate needs to pass both Part 1 & Part 2 of the CMA exam."
                }
              },{
                "@type": "Question",
                "name": "When can i take the CMA Exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The CMA exam is available during the following schedule:
            
            January and February
            May and June
            September and October
            To have your choice of date, time and location it is best that you schedule your appointment at least four weeks in advance. Once you are registered, you must take the exam part during your assigned testing session and in case for whatever reason you are unable to give your exam within that particular period, you will have to pay another registration fees as appointments cannot be rescheduled."
                }
              },{
                "@type": "Question",
                "name": "How can one register for the CMA Exam parts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With three testing windows every year you can sit for the exam at any time or place that is feasible for you. The CMA exam is basically a computer-based exam and is administered at hundreds of Prometric testing centres all over the world.
            
            Testing windows are offered in January/February, May/June, and September/October. You have to pick your window.
            You then have to register for the exam on the IMA website
            You will receive your Authorization number along with further instructions.
            Schedule your exam appointment with Prometric"
                }
              },{
                "@type": "Question",
                "name": "Will I have to take both the parts (CMA Part 1&2) exams together or in a sequential order?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, you can actually take these parts in any order. Most of the candidates choose to take the exam parts on separate days although you can even take both the parts together on the same day."
                }
              },{
                "@type": "Question",
                "name": "What is the passing score for the CMA Exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The minimum passing score for the CMA (Certified Management Accountant) Examination is 360 for both parts of the exam. The exam score range is 0-500."
                }
              },{
                "@type": "Question",
                "name": "How much is the fees for this CMA Certification?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The fees for the CMA certification includes credential review for educational and experience qualification, 6 months access to the CMA Exam Support package, final score report, & performance feedback reports for those who do not pass.
            
            For Professional Members:
            
            CMA Entrance Fee (non-refundable) - $250
            Exam Fee - $415 per part.
            For Student/Academic Members:
            
            CMA Entrance Fee (non-refundable) - $188
            Exam Fee - $311 per part."
                }
              },{
                "@type": "Question",
                "name": "Is it important to have an accounting background for doing the CMA Certification?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, it is not mandatory for you to hold an accounting background to pass the CMA exams, but yes it can be challenging while getting yourself acquainted with the finance and accounting terminologies if you do not have an accounting background. Depends on you."
                }
              },{
                "@type": "Question",
                "name": "What is the CMA Exam Window?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The US CMA exam is completely computerized, and you can take this exam at many Prometric centres all over the world. It’s essential to schedule the exam dates in one of the testing windows. Choose which suits you.
            
            Testing Window        Exam Dates
            Jan-Feb        1st January to 28th February
            May-Jun        1st May to 30th June
            Sep-Oct        1st September to 31st October"
                }
              },{
                "@type": "Question",
                "name": "What is the CMA Exam Retake Policy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Any part of the US CMA exam can be taken once in a testing window and retakes need a new registration along with fee payments."
                }
              },{
                "@type": "Question",
                "name": "What is the validity of the Exam part?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The US CMA aspirants have three years to take both parts of the CMA exam. If you do not complete both the US CMA parts, you have to retake them."
                }
              },{
                "@type": "Question",
                "name": "How does one become a CMA in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In India, a candidate is eligible to prepare and give the US CMA exam after his 12th. However, he would get his certification after he finishes his Bachelor’s degree from a recognized university/college with 2 years of relevant experience.
            One must pass both the parts (Financial Planning & Analysis and Financial Decision Making) of the US CMA exam within 3 years in order to have the US CMA certification.
            Working professionals with more than 2 years of experience in Management or Finance can also apply."
                }
              },{
                "@type": "Question",
                "name": "Can CMA Earns in Crores?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Qualification only is an entry to job, it doesn’t guarantee growth, for growth you need to show your application of skills and then one could earn crores."
                }
              },{
                "@type": "Question",
                "name": "How hard is US CMA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CMA USA is easier compared to other Indian qualifications like CA, CS, ICWAI, US CMA has two sections and takes relatively shorter duration to complete."
                }
              },{
                "@type": "Question",
                "name": "Is CMA harder than CA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CMA is highly respected credential,however the toughness of CA is higher side and we would opine that CMA is easier than CA and also enjoy good success rate."
                }
              },{
                "@type": "Question",
                "name": "How long is CMA Course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CMA course of US is composed of two sections- Part 1 and Part 2, it takes lesser than 12 months to complete and is 75% MCQ based and 25% essay."
                }
              },{
                "@type": "Question",
                "name": "What is CMA Salary India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CMA typically are hired at INR 5,00,000 - 6,50,000 per annum and tends to increase over period of time in India."
                }
              },{
                "@type": "Question",
                "name": "Which is better CMA US OR INDIAN CMA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both the courses - US CMA and Indian CMA enjoy good content, however following are the difference between US CMA and CMA india and the global recognition makes US CMA more appealing than Indian CMA.
            
            Duration : Duration of CMA USA is 6-8 months, however CMA india goes to above 3-4 years on an average
            
            Pass percentage : Pass percentage for CMA USA is 30-34%, whereas India CMA pass percentage is 2-3%
            
            Course pattern : US CMA has only 2 parts, whereas CMA india has three levels and goes above 3-4 years
            
            Recognition : US CMA is widely recognised, whereas Indian CMA is recognised in India, however Indian CMA has tied up with UK too but the scope is very limited
            
            Work experience : US CMA has 1 year post qualification experience requirement, but CMA india require 6 months articleship
            
            Simandhar Education is one of the leading Institute for US CMA in India and has been placing many US CMA candidates in India, The average salary of CMA USA In India is 5-6 lakhs per annum"
                }
              },{
                "@type": "Question",
                "name": "How do i pass US CMA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Always trust your preparation provider like Simandhar education and Becker, wake up early and ensure you devote daily 3-4 hours for your preparation, the CMA USA Course is lesser in duration and thus take less time to complete, with proper planning and focus – you shall easily pass the exams in first attempt."
                }
              },{
                "@type": "Question",
                "name": "Can a student write US CMA Exams in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, students can write US CMA exams in India and abroad as well."
                }
              },{
                "@type": "Question",
                "name": "Is there a good job scope for US CMA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many US-based companies are hiring for US CMA roles too. The course deals with all aspects of financial strategy, budgeting, cost management, etc. The only thing missing would be taxation, so anyone who is not much into core accounting or tax can opt for US CMA."
                }
              },{
                "@type": "Question",
                "name": "What is the time duration to clear the US CMA Exams?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Once the student clears the first paper, he gets 3 years to complete the last paper."
                }
              },{
                "@type": "Question",
                "name": "Why CMA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "International Credibility
            Strong Knowledge Base - Management Accounting and Financial Management
            Significant career progression opportunity"
                }
              },{
                "@type": "Question",
                "name": "How will US CMA benefit Indian candidates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Academics – 2 Exam Papers & one Level only.
            Duration – Shorter duration course, Indian certifications where pass percentage is less than 10%, in the case of US CMA pass percentage is about 50 % globally & will be 70% with the support by Simandhar Education."
                }
              },{
                "@type": "Question",
                "name": "What is IMA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Institute of Management Accountants is one of the largest and most respected associations focused exclusively on advancing the management accounting profession. IMA offers its members exclusive access to the CMA program. We are committed to helping you to expand your professional skills, better manage your organization, and enhance your career."
                }
              },{
                "@type": "Question",
                "name": "What is the duration of the Exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There are two parts to the exam. Each part is 3 hours long for 100 multiple choice questions, representing 75% of the exam score. The second section is essay writing representing the remaining 25%. You will be given 30 minutes for each of the two essays. The total testing duration is 4 hours.
            
            You must pass at least 50% of the first (i.e. multiple choice) section in order to advance to the essay questions. You can use any time remaining from the multiple-choice questions towards the essay portion.
            
            The exam is held with three examination windows in a year namely Jan & Feb/May & June/ Sept & Oct.
            
            What are the total marks & the minimum marks to pass? - The total marks per paper is 500, and minimum passing is 362 marks and minimum 75%."
                }
              },{
                "@type": "Question",
                "name": "What is the US CMA Exam pattern?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Each CMA exam part consists of 100 multiple choice questions and has two 30-minute essay questions. You will first have 3 hours to complete the multiple-choice section and one hour to complete the essays. The essays will be shown to you after you have completed the multiple-choice section of the exam or after 3 hours, whichever comes first.
            
            Once you complete and exit the multiple-choice section of the exam, you cannot go back. The essay section consists of 8-10 written response or calculation questions based on two scenarios, describing a typical business situation. You must answer at least 50% of the multiple-choice questions correctly to be eligible to take the essay section."
                }
              },{
                "@type": "Question",
                "name": "Can i retake the exam just in case?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can actually sit for as many testing windows do you need in your three-year period but an exam part can be taken only once in a window. All retakes require a new exam registration (not CMA entrance), along with payment of appropriate fees: $415 for professionals, $311 for Students/Academic members"
                }
              },{
                "@type": "Question",
                "name": "Where are the CMA Exam centres located in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Exams are administered through the worldwide network of Prometric Testing Centers and are available in accordance with local customs. There are many locations in India and throughout the U.S. and internationally. To locate a Testing Center and schedule exam appointments, visit https://www.prometric.com/test-takers/search/icma"
                }
              },{
                "@type": "Question",
                "name": "What topics does the CMA Part-1 consist of?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Part 1 of the US CMA certification mainly covers Financial Planning, Performance, and Analytics.
            
            The topics covered in CMA Part 1 are given below:
            
            External Financial Reporting Decisions 15%
            Planning, Budgeting, and Forecasting 20%
            Performance Management 20%
            Cost Management 15%
            Internal Controls 15%
            Technology and Analytics 15%"
                }
              },{
                "@type": "Question",
                "name": "What topics does the CMA Part-2 consist of?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Part 2 of the US CMA certification mainly covers Strategic Financial Management.
            
            The following six topics covered in CMA Part 2:
            
            Financial Statement Analysis – 20%
            Corporate Finance – 20%
            Decision Analysis – 25%
            Risk Management – 10%
            Investment Decision – 10%
            Professional Ethics – 15%"
                }
              },{
                "@type": "Question",
                "name": "What are the benefits of doing CMA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Business Approval : US CMA certification is considered one of the best accounting certifications. In US CMA, you can learn all about business aspects, accounting concepts and corporate governance.
            
            Career Opportunities : US CMA brings multiple career opportunities. You would be managing the accounts being a US CMA, so you can achieve a higher position in the management as well.
            
            Global Opportunities : US CMA certification gives you a better understanding of finance, business and accounts. US CMA holders get job opportunities all over the world. They are recognized at a global level.
            
            Financial Growth :US CMA certification holders earn 67% more than candidates having just a bachelor’s degree. Having a US CMA certification makes you eligible for good pay. The average annual salary of a US CMA in India would be around $10,687 in US, and 8 lakhs INR in India according to PayScale."
                }
              },{
                "@type": "Question",
                "name": "Does simandhar provide live classes for CMA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simandhar Education has Live Interactive classes which one can access from anywhere in the world and Simandhar also provides the facility to access recorded videos for students who seek to revisit the material taught."
                }
              },{
                "@type": "Question",
                "name": "How are the faculties at Simandhar Education for CMA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simandhar Education provides you with access to Live Interactive classes from anywhere in the world.
            Provides the facility to access recorded videos for students who seek to revisit the material taught
            Supports its students by placing them in Top F & A companies, Big 4 etc.
            Personal grooming sessions for interviews.
            Attention on individual candidates.
            It provides placement opportunities."
                }
              },{
                "@type": "Question",
                "name": "Which part of the CMA Exam does one need to write first?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It’s as per the candidate’s wish, experience, and preparation level for each CMA exam part."
                }
              },{
                "@type": "Question",
                "name": "What are the requirements to become a US CMA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bachelor’s degree.
            Pass both CMA exam parts.
            2 years of relevant work experience."
                }
              }]
            }`}} />


      </Head>
      <div className="width-50">
        <Header showData1={true} />
      </div>
      {/* <CpaProgram /> */}
      <BannerSection bannerData={cmaBannerData.cmaBanner} />
      <div className='cma-exam-section'>
        <ExamSection examData={examData.cmaData} /></div>

       <div style={{textAlign: "center"}}> <button className='btn maroon-btn' onClick={showPopup}>
                            Learn More
                        </button>
                        </div>
                        <div className="popup-overlay" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></div>
            <div className='event-popup' style={{ display: isShow ? 'block' : 'none' }}>
                <h6>Kindly submit your details</h6>
                <button className="close-evnt" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></button>
                <CommonForm showcity={true} setCourse={"CMA"} formName="CMA Page" />
            </div>
            <br/>
            <br/>
                            
      <div className='background-none key-takeways' >
        <HelpSection helpData={helpData.cmaPage} />
      </div>
      <DesignationSection contentPartnerData={designationData.designationcontent} />

      <div className='cma-tab'>
        <CurriculumSectionone CurriculumSectiononeData={CurriculumData.curriculum} />
      </div>
      <div style={{textAlign: "center" , paddingTop:"10px"}}> <button className='btn maroon-btn' onClick={showPopup}>
                            Learn More
                        </button>
                        </div>
                        <div className="popup-overlay" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></div>
            <div className='event-popup' style={{ display: isShow ? 'block' : 'none' }}>
                <h6>Kindly submit your details</h6>
                <button className="close-evnt" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></button>
                <CommonForm showcity={true} setCourse={"CMA"} formName="CMA Page" />
            </div>

      <CmaContent />
      <div className='cma-help'>
        <HelpSection helpData={helpData1.cmaPage} />
      </div>
      <div className='background-none '> <HelpSection helpData={helpData2.takeaWays} /></div>
      {/* <div className=''> <AchieversSection achieverData={data.cmaPage} showAchiverbtn={true} showData={true} /></div> */}
      <div className='cma-table'>
        <TableSection />
      </div>
      <FaqSectionCma />
      <Footer />


    </>
  )
}
