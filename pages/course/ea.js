import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'
import BannerSection from '../../CPA/BannerSection'
import HelpSection from '../../CPA/HelpSection'
import AchieversSection from '../../CPA/AchieversSection'
import EaContent from '../../contentpartner/EaContent'
// import DesignationSection from '../CPA/DesignationSection'
import ExamSection from '../../CPA/ExamSection'
// import CpaProgram from '../components/CpaProgram'
import FaqSectionEa from '../../CPA/FaqSectionEa'
import Header from '../../components/Header'
import Gallery from '../../CPA/Gallery'
import CurriculumSection from '../../CPA/CurriculumSection'
import Video from '../../home/videoSection'
import Footer from "../../components/footer";





// import helpData from '../database/data/helpSection.json'
// import bannerData from '../database/data/banner.json'
// import achieverData from '../database/data/achieversSection.json'
// import contentPartnerData from '../database/data/contentSection.json'
// import examData from '../database/data/exam.json'
// import curriculumData from '../database/data/CurriculumData.json'
// import videoData from '../database/data/videoSection.json'
// import galleryData from '../database/data/gallerySection.json'
import EaCourseTable from '../../CPA/EaCourseSection'
import { urlConstants as urlConstant } from '../../constants/urlConstants'
import CommonForm from '../../components/CommonForm'



export default function EA() {

  
  const [isShow, setIsShow] = useState(false)
    const showPopup = () => {
        setIsShow(!isShow)
    }

  // BANNER SECTION    
  const [bannerData, setBannerData] = useState({
    eaPage: {}
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.heroBanner,
      responseType: "json"
    })

      .then((res) =>
        setBannerData((prevState) => (
          { eaPage: res.data.eaPage }
        )))

      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // EXAM SECTION    
  const [examData, setExamData] = useState({
    eaData: {}
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.examSection,
      responseType: "json"
    })

      .then((res) =>
        setExamData((prevState) => (
          { eaData: res.data.eaPage }
        )))

      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // HELP SECTION
  const [helpData, setHelpData] = useState({
    eaPage: {},
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.helpSection,
      responseType: 'json',
    })
      .then((res) =>
        setHelpData((prevState) => (
          { eaPage: res.data.eaPage }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // GALLERY SECTION
  const [galleryData, setGalleryData] = useState({
    eaGallery: [],
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.gallerySection,
      responseType: 'json',
    })
      .then((res) =>
        setGalleryData((prevState) => (
          { eaGallery: res.data.eaGallery }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // CURRICULUM SECTION
  const [CurriculumData, setCurriculumData] = useState({
    curriculum: {},
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.curriculumSection,
      responseType: 'json',
    })
      .then((res) =>
        setCurriculumData((prevState) => (
          { curriculum: res.data.eaPage }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // CONTENT PARTNER SECTION
  const [contentPartnerData, setContentPartnerData] = useState({
    contentPartner: {},
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.contentSection,
      responseType: 'json',
    })
      .then((res) =>
        setContentPartnerData((prevState) => (
          { contentPartner: res.data.eaPage }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // ACHIVER SECTION
  const [data, setData] = useState({
    eaPage: {},
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.achiverSection,
      responseType: 'json',
    })
      .then((res) =>
        setData((prevState) => (
          { eaPage: res.data.eaPage }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // VIDEO DATA
  const [videoData, setvideoData] = useState({
    eaPage: {},
  });
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.videoSection,
      responseType: "json",
    })
      .then((res) =>
        setvideoData((prevState) => ({ eaPage: res.data.eaPage }))
      )
      .catch((err) => console.log("error is ", err.message));
  }, []);


  return (
    <>
      <Head>
        <title>Enrolled Agent (EA) Course Elgibility Exam Fees Salary in India</title>
        <meta content='The EA Exam, officially known as the Special Enrollment Examination (SEE), is a three-part exam administered by Prometric on behalf of the Internal Revenue. Become an Enrolled Agent US tax expert.' name='description'></meta>
        <meta content='enrolled agent ,enrolled agent exam ,enrolled agent course in hyderabad, enrolled agent, study material ,irs enrolled agent exam study guide pdf, enrolled agent exam questions ,enrolled agent salary, irs enrolled agent exam. enrolled agent certification, irs enrolled agent, exam study guide, enrolled agent salary in india, what is an enrolled agent, irs enrolled agent study guide free download ,enrolled agent jobs, enrolled agent pdf ,us tax enrolled agent, enrolled agent course, enrolled agent exam india irs ,enrolled agent,  what is enrolled agent ,enrolled agent exam cost ,enrolled agent test, irs enrolled agent exam study guide pdf 2018 enrolled agent login enrolled agent usa enrolled agent exam part 2 questions enrolled agent exam pass rate enrolled agent exam part 3 questions  enrolled agent exam in india enrolled agent india enrolled agent study guide 2018 pdf irs enrolled agent practice exam enrolled agent jobs in canada enrolled agent from india enrolled agent course online enrolled agent course in india how to become an enrolled agent enrolled agent exam centers in india enrolled agent indian students enrolled agent books pdf enrolled agent jobs in hyderabad enrolled agent jobs in india how long does it take to become an enrolled agent enrolled agent study guide enrolled agent exam fees enrolled agent h and r block enrolled agent education requirements continuing education enrolled agent h devan brown enrolled agent registered tax return preparer vs enrolled ,agent prometric exam ,enrolled agent ,enrolled agent h&r block free study material for enrolled agent exam, enrolled agent (ea) .  education requirement for enrolled agent,Enrolled Agent,Enrolled Agent Exam,Enrolled Agent Salary in India,Enrolled Agent Course in India,Enrolled Agent Course Details,Enrolled Agent Salary,Enrolled Agent Training,Enrolled Agent Classes,Enrolled Agent Online Classes, Enrolled Agent Online Course,Enrolled Agent Course,Enrolled Agent Jobs in India,Enrolled Agent Course,Enrolled Agent Course in India,Enrolled Agent Course in Hyderabad,Enrolled Agent Jobs in Hyderabad' name='keywords'></meta>
        <link rel="canonical" href="https://simandhareducation.com/course/ea" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <script type='application/ld+json' dangerouslySetInnerHTML={{
        __html:
          `{
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "What is Enrolled Agent Course | How To Become An EA in 6 Months | EA Exam, Jobs, Salary, Syllabus",
            "description": "The Enrolled Agent is a nationally recognized certification for tax professionals issued by the Internal Revenue Service (IRS). Obtaining a PTIN Personal Tax Identification Number, passing all three parts of the IRS’s Special Enrollment Examination (SEE), and passing compliance and background checks are requirements for becoming an EA. There are no formal educational or work experience requirements, and however, candidates should have a solid understanding of taxes before taking the EA exam.",
            "thumbnailUrl": "https://i.ytimg.com/vi/qGA-o7zdcW4/maxresdefault.jpg",
            "uploadDate": "2020-01-25",
            "duration": "PT18M47S",
            "contentUrl": "https://youtu.be/qGA-o7zdcW4"
          }`}} />

      <script type='application/ld+json' dangerouslySetInnerHTML={{
        __html:
          `{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What is an Enrolled Agent (EA)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "An Enrolled Agent (EA) is the only federally licensed tax practitioner specializing in all areas of taxation. Enrolled Agents represent taxpayers before the Internal Revenue Service (IRS) for tax issues, including audits, collections and appeals."
              }
            },{
              "@type": "Question",
              "name": "How many parts does EA consist of?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "EA contains 3 parts
          
          Individuals
          Businesses
          Representation, practices & procedures
          You can take all 3 together but it is suggested to go for 1 paper compared to three at a time."
              }
            },{
              "@type": "Question",
              "name": "How many times can a student take 1 paper in a year?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Each paper can be taken 3 times in a year"
              }
            },{
              "@type": "Question",
              "name": "Is EA a self preparing course?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is best if you take assistance in the form of a coaching class than going for self-preparation because coaching classes help you to cover the topic in detail and gives a lot of practical examples to ensure that you are well prepared for the exams.
          
          Simandhar Education is one of the best coaching institute based in Hyderabad that impacts some quality education for aspirants who wish to become EAs. Do visit there website"
              }
            },{
              "@type": "Question",
              "name": "What includes in EA training?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The enrolled agent training includes IRS regulations, tax law related matters, and various situations related to the taxpayer. And most importantly, how the best and most effective outcome could be obtained for the taxpayer."
              }
            },{
              "@type": "Question",
              "name": "Is it suggestible to write all 3 exams in one day?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, It is suggested to take 1 paper at a time."
              }
            },{
              "@type": "Question",
              "name": "When are the exams conducted? Are they conducted in India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Because of covid19 pandemic issues exams are conducted in AUG & NOV’2020.
          
          Yes EA exams are conducted in India in all the metro cities for further information find the below link"
              }
            },{
              "@type": "Question",
              "name": "What is the time to complete all Three papers of the EA exam?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It should be completed within 2 years from the date of completion of the first exam."
              }
            },{
              "@type": "Question",
              "name": "How do you become an Enrolled Agent ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Each paper can be taken 3 times in a year
          
          Obtain a Preparer Tax Identification Number;
          Apply to take the Special Enrollment Examination (SEE);
          Achieve passing scores on all 3 parts of the SEE;
          Apply for enrollment;
          Pass a suitability check, which will include tax compliance to ensure that you have filed all necessary tax returns and there are no outstanding tax liabilities; and criminal background."
              }
            },{
              "@type": "Question",
              "name": "What is the Special Enrolment Exam (EA Exam)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The IRS selected Prometric to develop and administer the EA exam. The Exam Content Outlines (ECOs) and test questions were developed based on the survey's findings. The different parts of the exam can be taken in any order. Each year, some changes should be expected from prior examinations as emphasis shifts based on subsequent findings and since tax laws are passed or repealed.
          
          The only requirement is that applicants must pass all three sections in order to earn the EA certification. Prometric maintains a website where candidates can learn more about the SEE and register for the test."
              }
            },{
              "@type": "Question",
              "name": "How much does it cost to take the Special Enrollment Examination (SEE)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "There is a $182.00 fee per part paid at the time of appointment scheduling. The test fee is non-refundable and non-transferable."
              }
            },{
              "@type": "Question",
              "name": "What are IRS requirements to be Certified as Enrolled Agent (EA)? Education & Experience:",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "There isn't any particular educational or experience requirement for the exam. However, candidates should be proficient in answering income and tax accounting questions.
          
          Examination:
          
          You need to pass all three exam parts within a period of 2 years. You must have a Preparer Tax Identification Number (PTIN) renewed within the last year in order to register for the examination successfully.
          
          Ethics:
          
          You need to pass a suitability check which includes both a tax compliance check and a criminal background check. In order to maintain your designation, you would need to complete 2 hours of ethics continuing professional education each year after you pass your exam."
              }
            },{
              "@type": "Question",
              "name": "What are the basics that one needs to follow to become an EA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Become completely knowledgeable about the EA Exam.
          Applicants must obtain or review a PTIN.
          Schedule your EA exam.
          Prepare your study schedule for the EA exam.
          Take the Exam."
              }
            },{
              "@type": "Question",
              "name": "What are the benefits of becoming an EA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Being an EA gives one the opportunity to grow and move forward in their career.
          Being an EA increases your earning potential by an average of 10%.
          It is a prestigious credential and therefore, will, in turn, earn the respect of others.
          Helps you establish your expertise and improve your accounting skills and knowledge.
          Will help you with your personal as well as professional development."
              }
            },{
              "@type": "Question",
              "name": "Why should one become an EA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Practice before the IRS includes all matters related to presentations for the IRS, regarding client's rights, privileges and liability under laws and regulations that are administered by the IRS."
              }
            },{
              "@type": "Question",
              "name": "Are the EA exams conducted in India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, EA exams are conducted in India in all the metro cities and for further information, find the below link"
              }
            },{
              "@type": "Question",
              "name": "What is PTIN?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "PTIN stands for the Preparer tax identification number. It can be applied at any time during the year and should be renewed every year."
              }
            },{
              "@type": "Question",
              "name": "Who are eligible to do EA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All those who have completed +2 are eligible to enroll in the EA course."
              }
            },{
              "@type": "Question",
              "name": "What is the exam pattern for EA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Each part contains 100 MCQ’s with a duration of 3.5 hours and there is a 15 min break after completing 1 section (i.e., after completing 50 MCQ’s) Results are announced immediately once the exam gets over and students can take the printout of their results."
              }
            },{
              "@type": "Question",
              "name": "What are the Exam fees?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "203$ per part"
              }
            },{
              "@type": "Question",
              "name": "What are the Application fees?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "30$ (application fee needs to be paid after clearing 3 papers in EA)"
              }
            },{
              "@type": "Question",
              "name": "What is the future of an enrolled agent in India? Whether EA is globally recognized?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The primary role of an enrolled agent is to deal with every kind of taxation affair. They can also represent taxpayers before the IRS (Internal Revenue Services). Yes, it’s a globally recognized course having opportunities in all the US-based MNC’s."
              }
            },{
              "@type": "Question",
              "name": "Should I take the exam to become an EA (Enrolled Agent) while I am already a CPA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "If you wish to get into taxation that represents people before IRS, you could very well consider doing an EA course. Ideally, it will prove beneficial for aspirants who wish to get into US taxation. If you wish to pursue a career in the US, then EA is the way to go forward"
              }
            },{
              "@type": "Question",
              "name": "How Often and When Can I Sit for the EA Exam?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The exam window is from May 1 to February 28 of the following year. The test is not offered during the annual blackout period in March and April. During this time the test is updated for the most recent tax law."
              }
            },{
              "@type": "Question",
              "name": "When do I have to sit after I have registered to take the SEE?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Your examination appointment must be scheduled within one year of the date of registration. If space permits, you may register and schedule up to 2 days prior to your test date."
              }
            },{
              "@type": "Question",
              "name": "What are the pass rates of the EA exam?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Part        2017-2018        2018-2019        2019-2020
          Part 1: Individuals        61%        62%        61%
          Part 2: Businesses        64%        69%        70%
          Part 3: Representation, Practices and Procedures        86%        86%        81%"
              }
            },{
              "@type": "Question",
              "name": "Does Simandhar provide live classes for EA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Simandhar Education provides you with access to Live Interactive classes from anywhere in the world and provides the facility to access recorded videos for students who seek to revisit the material taught."
              }
            },{
              "@type": "Question",
              "name": "How is Simandhar Education different from other Institutes for EA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The reasons behind 'How Simandhar Education different from other Institutes' are:
          
          Live classes are very effective.
          EA course at Simandhar is inexpensive.
          It has good placement assistance.
          It is associated with all Big 4s & multinationals, and alumni of Simandhar have placed in MNCs.
          Simandhar has a wide network of world-class trainers, teachers and industry-experts across domains, especially EA, CPA, CMA, CIA, IFRS & HRCI."
              }
            },{
              "@type": "Question",
              "name": "What are the corporate tie-ups of Simandhar Education for EA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Simandhar Education has corporate tie-ups with Invesco, EY, Citrin Cooperman, etc."
              }
            },{
              "@type": "Question",
              "name": "How are the faculties at Simandhar education for EA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Simandhar Education provides you with access to Live Interactive classes from anywhere in the world.
          Provides the facility to access recorded videos for students who seek to revisit the material taught.
          Supports its students by placing them in Top F & A companies, Big 4 etc.
          Personal grooming sessions for interviews.
          Attention on individual candidates.
          It provides placement opportunities."
              }
            }]
          }`}} />


      </Head>
      <Header />
      {/* <CpaProgram /> */}
      <BannerSection bannerData={bannerData.eaPage} />
      <div className='ea-section'>
        <ExamSection examData={examData.eaData} /></div>
        <div style={{textAlign: "center" , paddingTop:"10px"}}> <button className='btn maroon-btn' onClick={showPopup}>
                            Learn More
                        </button>
                        </div>
                        <div className="popup-overlay" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></div>
            <div className='event-popup' style={{ display: isShow ? 'block' : 'none' }}>
                <h6>Kindly submit your details</h6>
                <button className="close-evnt" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></button>
                <CommonForm showcity={true} setCourse={"EA"} formName="EA Page" />
            </div>

      <div className='background-none ea-page'>
        <HelpSection helpData={helpData.eaPage} />
      </div>
    
      <Gallery galleryData={galleryData.eaGallery} />
      <div className='ea-curriculum'>
        <CurriculumSection curriculumData={CurriculumData.curriculum} />
      </div>
      <div style={{textAlign: "center" , paddingTop:"10px"}}> <button className='btn maroon-btn' onClick={showPopup}>
                            Learn More
                        </button>
                        </div>
                        <div className="popup-overlay" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></div>
            <div className='event-popup' style={{ display: isShow ? 'block' : 'none' }}>
                <h6>Kindly submit your details</h6>
                <button className="close-evnt" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></button>
                <CommonForm showcity={true} setCourse={"EA"} formName="EA Page" />
            </div>

      <div className='ea-content-section'>
        <EaContent />
      </div>
      <div id="ea-Syllabus"></div>
      <EaCourseTable />
      
      {/* <div className='text-center'>
        <AchieversSection achieverData={data.eaPage} showData={false} showAchiverbtn={true} />
      </div>
       */}
      <div className='ea-video-section'>
        <Video videoData={videoData.eaPage} />
      </div>
      <FaqSectionEa />
      <Footer />


    </>
  )
}
