import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from "../../components/footer";
import BannerSection from '../../CPA/BannerSection'
import ExamSection from '../../CPA/ExamSection'
import HelpSection from '../../CPA/HelpSection'
import CurriculumSectionone from '../../CPA/CurriculumSectionone'
import CpaContent from '../../contentpartner/CiaContent'
import TableSection from '../../CPA/ciaTableone'
import Trainer from '../../CPA/trainer'
import CiaTabelTwo from '../../CPA/ciaTabelTwo'
import CiaTabelThree from '../../CPA/CiaTabelThree'
import FaqSectionCia from '../../CPA/FaqSectionCia';
import Gallery from '../../CPA/Gallery'



import { urlConstants as urlConstant } from '../../constants/urlConstants'
import contentPartnerData from '../../database/data/contentSection.json'
import trainerData from '../../database/data/trainerData.json'



const cia = () => {
  // BANNER SECTION    
  const [bannerData, setBannerData] = useState({
    ciaPage: {}
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.heroBanner,
      responseType: "json"
    })

      .then((res) =>
        setBannerData((prevState) => (
          { ciaPage: res.data.ciaPage }
        )))

      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // EXAM SECTION    
  const [examData, setExamData] = useState({
    ciaPage: {}
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.examSection,
      responseType: "json"
    })

      .then((res) =>
        setExamData((prevState) => (
          { ciaPage: res.data.ciaPage }
        )))

      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // EXAM SECTION    
  const [examData1, setExamData1] = useState({
    ciaPageone: {}
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.examSection,
      responseType: "json"
    })

      .then((res) =>
        setExamData1((prevState) => (
          { ciaPageone: res.data.ciaPageone }
        )))

      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])

  // HELP SECTION
  const [helpData, setHelpData] = useState({
    ciaPage: {},
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.helpSection,
      responseType: 'json',
    })
      .then((res) =>
        setHelpData((prevState) => (
          { ciaPage: res.data.ciaPage }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])


  // GALLERY SECTION 
  const [galleryData, setGalleryData] = useState({
    ciaGallery: [],
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.gallerySection,
      responseType: 'json',
    })
      .then((res) =>
        setGalleryData((prevState) => (
          { ciaGallery: res.data.ciaGallery }
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
      url: urlConstant.curriculumSectionOne,
      responseType: 'json',
    })
      .then((res) =>
        setCurriculumData((prevState) => (
          { curriculum: res.data.ciaPage }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])


  return (
    <>
      <Head>
        <title>Certified Internal Auditor (CIA) from India Simandhar Education</title>
        <meta content='Want to know all about the CIA (Certified Internal Auditor) Course, Fee, admission process, Career options, CIA Coaching Institutes in India , CIA Certification' name='description'></meta>
        <meta content='Certified internal auditor,certified auditor,internal auditor,institute of internal auditors,the institute of internal auditors,cia audit, cia certificate, head of internal audit,chartered institute of internal auditors, iia cia, internal and external audit, cia internal audit, senior internal auditor, cia qualification, internal audit services, it audit certification, chief internal auditor, internal audit and external audit, cia certified internal auditor, certified internal auditor requirements, chartered internal auditor, ippf iia, iia audit, certified internal auditor syllabus, ippf audit, ippf internal audit cia certification requirements, certified internal auditor certification, it internal audit, director of internal audit, iia internal audit, cae audit, audit international, certified internal control auditor, internal controls audit, cia courses, international audit, bank internal audit, certified internal auditor usa, internal control and internal audit, sox internal audit, internal audit, ractitioner, internal audit standard, internal audit staff, certified lead auditor, crma iia, types of internal audits, internal audit compliance, internal audit management, internal external audit, international internal audit, audit certificate in auditing, chartered institute of auditors, institute of auditors, cae internal audit, internal financial audit, certified audit ,internal audit external audit, internal audit companies, global internal audit, internal auditing for beginners, certified public auditor, internal audit 2019 internal audit and compliance, corporate internal audit,internal audit and control, internal audit accounting, cia study materials, certified internal auditor uk, certified internal auditor training, iia certified internal auditor, cia audit certification, internal audit governance, value of internal audit, need of internal audit, internal audit firm, cyber security and internal audit, big 4 internal audit, professional internal auditor, financial auditing for internal auditors, cia requirements audit, iia institute of internal auditors, the internal auditor, internal audit financial services, audit internal bank, internal audit in auditing, internal audit fraud iia certificate, certified internal auditor qualification, internal audit practices, internal and external audit of companies, international institute of internal auditors, effective internal audit, international audit company, certified auditor certification, iia cia study materials, certificate in international auditing, international audit firm, conducting an internal audit, internal audit certificate program, an internal auditor,apa itu auditor internal, cyber security internal audit, internal audit posts, acca and cia, chief audit, cia in audit ,cae in audit, cia certificate requirements, internal auditor payscale, internal control internal audit  institute of international auditors, internal audit and fraud , internal audit competencies, certified internal auditor verification c internal audit ,iia fraud ,certified professional auditor, internal audit certification online, institute of certified internal auditors, it audit in banks, certified professional internal auditor, certified internal auditor cost , internal audit communication internal audit website, certified internal auditor designation, effective cfommunication in internal audit , internal audit exams, becoming a certified internal auditor, certified internal control auditor certification, certified internal auditor courses , chartered internal auditor uk, cia accounting certificate, internal auditors assist external auditors with financial audits to, sarbanes oxley internal audit ,iia cia cpe requirements , cia certification training , internal audit for private companies , internal audit information, certified internal, certified internal auditor application, sox and internal audit, cia certified internal auditor requirements, independent internal auditor , senior lead auditor, integrated internal audit, certified internal auditor cpe requirements, certified internal auditor exams, internal audit in government departments, cia audit qualification, certified internal auditor registration, iias, the chartered institute of internal auditors, use of internal audit by external auditors, iia it audit, the institute internal auditors, ippf cia, internal audit regulatory compliance, audit professional certifications,  best internal audit companies, certified internal auditor part 1, internal audit of accounts, certified internal auditor logo, certified internal auditor website, certification for bank auditors, sox compliance internal audit, certified internal auditor study materials, internal auditor designation, internal audit of it company, requirements to become a certified internal auditor, iia the institute of internal auditors,cia course fee in india,cia course fees,cia course details,cia course fees,cia course eligibility,certified internal auditor salary in india,cia fresher salary in india,cia course duration,cia certification,cia training,certified internal auditor,certified internal auditor course,' name='keywords'></meta>
        <link rel="canonical" href="https://simandhareducation.com/course/cia" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "Want to take-up Career in Internal Auditors then Certified Internal Accountant Course is Best Option",
              "description": "Certified Internal Accountant Commonly known as CIA, is a globally recognized certification offered to Internal Auditors wherein the Certified Internal Auditor designation is conceded by the Institute of Internal Auditors (IIA).
            
            The certification encompasses three parts, namely CIA I, CIA II, and CIA III. These three different parts focus on the essentials of Internal Auditing, the practice of Internal Auditing, and practically applying business knowledge to internal Auditing respectively. The certificate is provided to the candidate upon completion of all the parts successfully. Post completion, the certificate helps in enhancing your career exponentially, landing a lucrative average salary of Rs 4 Lac to 9 Lac per annum in our hands.",
              "thumbnailUrl": "https://i.ytimg.com/vi/pdZMX8a8I8M/maxresdefault.jpg",
              "uploadDate": "2020-05-28",
              "duration": "PT147M25S",
              "contentUrl": "https://i.ytimg.com/vi/pdZMX8a8I8M/maxresdefault.jpg"
            }`}} />

        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What is CIA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Certified Internal Auditor CIA is a globally recognized certification offered to Internal Auditors wherein the Certified Internal Auditor designation is conceded by the Institute of Internal Auditors (IIA)"
                }
              },{
                "@type": "Question",
                "name": "In how many languages CIA exam can be given?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CIA exam can be given in 14 languages, for more details Click Here"
                }
              },{
                "@type": "Question",
                "name": "Supporting Requirements Exemptions",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Professional Certification Board (PCB) has approved work experience and education exemptions for Association of Chartered Certified Accountants (ACCA) qualified members and an education exemption for U.S. Certified Public Accountant (CPA) active license holders pursuing the CIA certification. The supporting requirement exemptions were granted by the PCB because the experience and education requirements for ACCA members and education requirements for U.S. CPAs meet and/or exceed these requirements for the CIA program."
                }
              },{
                "@type": "Question",
                "name": "Mode of CIA exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CIA is computer based exam."
                }
              },{
                "@type": "Question",
                "name": "When can I reschedule for the exam in case I don’t clear them in the first attempt?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can reschedule after 90 days from the day you get the result of that paper."
                }
              },{
                "@type": "Question",
                "name": "What is the Exam pattern?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Part 1 : 2hrs 30Min125 MCQ’s Part 2 : 2hrs 100 MCQ’s Part 3 : 2hrs100 MCQ’s"
                }
              },{
                "@type": "Question",
                "name": "What is the best way to clear the CIA exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best way to clear the CIA exam is practicing questions in real time. As the questions are set to test the candidate’s understanding and interpretation. Therefore you should focus more on the MCQ’s itself rather than the textbook knowledge.  Wiley is the best platform that provides good test bank, practice this you will be more than prepared."
                }
              },{
                "@type": "Question",
                "name": "Which part of the CIA is the hardest?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "These are likely the easiest parts of the CIA exam to take first, depending on your personal familiarity with the concepts. The broader and more conceptual Part 3 is often considered the hardest of all the sections. So, your best option would be to take it first if you're more comfortable with its lineup of topics."
                }
              },{
                "@type": "Question",
                "name": "Is that possible to reschedule CIA exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, student can reschedule CIA exam prior to 48 hours before your original appointment time. To do so, you must contact Pearson VUE. Pearson VUE is the company that administers the CIA exam on behalf of the Institute of Internal Auditors (IIA). If you don’t reschedule through Pearson VUE before you only have 48 hours until your appointment, then you will receive a “No-Show” status for your appointment and must pay the full CIA exam fee when you register for another appointment."
                }
              }]
            }`}} />

      </Head>
      <Header />
      <div className="banner-ciaPage">
        <BannerSection bannerData={bannerData.ciaPage} />
      </div>
      <div className='cia-exam-section'>
        <ExamSection examData={examData.ciaPage} />
      </div>
      <div className='cia-exam-section black-bag '>
        <ExamSection examData={examData1.ciaPageone} />
      </div>
      <div className='background-none key-takeways pt-8 cia-help-section' >
        <HelpSection helpData={helpData.ciaPage} />
      </div>
      <div className='cia-gallery'>
        <Gallery galleryData={galleryData.ciaGallery} />
      </div>
      <div className='cia-tab cma-tab'>
        <CurriculumSectionone CurriculumSectiononeData={CurriculumData.curriculum} />
      </div>
      <div className='cia-content-partner'>
        <CpaContent />
      </div>
      <div id="cia-syllabus"></div>
      <TableSection />
      <Trainer trainerData={trainerData.ciaPage} />
      <div className='exam-fee-cia'>
        <CiaTabelTwo />
      </div>
      <CiaTabelThree />


      <FaqSectionCia />
      <Footer />
    </>

  )
}

export default cia