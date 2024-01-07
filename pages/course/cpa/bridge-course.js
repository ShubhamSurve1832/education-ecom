import React from 'react'
import Head from 'next/head'
import Header from '../../../components/Header'
import Footer from "../../../components/footer";
import OurBanner from '../../../CPAInner/OurBanner'
import OnlineCourseSection from '../../../CPA/OnlineCourseSection'
import ExamSection from '../../../CPA/ExamSection'
import BridgeCourse from '../../../CPAInner/bridgeCourse'
import FaqSectionBridgeCourse from '../../../CPA/FaqSectionBridgeCourse'


import examData from '../../../database/data/exam.json'

const ourCourse = () => {
  return (
    <>
      <Head>
      <title>US CPA Bridge Course Details, Exam, License, Eligibility | Simandhar Education</title>
        <meta content='Bridge a gap between your knowledge and a career in the accounting field. Our CPA Bridge Course will prepare you for the US CPA Exam, while providing a comprehensive overview of careers in accounting.' name='description'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta content='CPA, Certified Public Accountant, US CPA, Becker CPA, Simandhar CPA, AICPA, CPA Exam prep, accounting course, 4 CPA exams, CPA subjects, CPA Syllabus, CPA testing center, CPA testing windows, CPA exam centers i India, CPA in india, CPA eligibility, CPA
 Curriculum, CA vs CPA, CPA exam pattern, CPA passing score, CPA duration, CPA time, CPA license, CPA vs ACCA, US CPA vs US CMA, Simandhar LMS, CPA vs CMA, CPA fees, CPA price, CA for CS, CA for CMA, CPA for CA, public accountancy, CPA value, CPA Career, USP of CPA, Simandhar CPA, CPA vs CFA, CPA eligibility state, CPA USA in Bangalore, CPA Training in Bangalore, CPA Coaching in Bangalore, CPA Classes in Bangalore, cpa in bangalore, us cpa in bangalore, cpa in bangalore, CPA Exam in India, CPA India, CPA Exam Available in India, CPA, CPA Course, CPA USA course, CPA USA Course details, CPA in India .US CPA Course, US CPA Exam cpa course in delhi, US CPA coaching in Delhi, CPA Coaching in Delhi, CPA USA in Delhi, CPA USA in Gurgaon, CPA Coaching in Mumbai, CPA Course near me, best cfa coaching in bangalore, cpa coaching, uscpaBridge a gap between your knowledge and a career in the accounting field. Our CPA Bridge Course will prepare you for the US CPA Exam, while providing CPA ,USCPA ,CPACourse, CPACourseDetials, CPAExam,USCPAExaminIndia,CPAJobsinIndia ,CPASalaryinIndia, USCPAEligibility, CPACourseDuration, CPAexaminIndia ,CPAJobs USCertifiedPublicAccountant ,USCPABridgeCourse ,BridgeCourse, CPABridgeCourse, CPALicense , CPABridgeCourseDetails ,Accounting' name='keywords'></meta>
        <link rel="canonical" href="https://simandhareducation.com/course/cpa/bridge-course" />

      <script dangerouslySetInnerHTML={{
        __html: `
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Can a Bcom sit for the CPA exam in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, once he registers with the bridge course, he can sit for CPA exam and meet CPA eligibility."
            }
          },{
            "@type": "Question",
            "name": "Can a CA inter sit for CPA exam and get license?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "yes, as the bridge course will give them 60 credits and thus making them eligible to sit for CPA exam in India."
            }
          },{
            "@type": "Question",
            "name": "Do we need to study again for bridge course?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Great news !!! as Course is integrated with CPA, hence you don’t need to study anything additional and sit for CPA exam in India."
            }
          }]
        }`}} />
      </Head>

      <div className="width-50">
        <Header showData={true} />
      </div>
      <OurBanner />
      {/* <div className="our_Course">
        <OnlineCourseSection />
      </div> */}
      <div className='our_Course-exam-section'>
        <ExamSection examData={examData.incmaPage} />
      </div>
      <div className="our_Course_Bridge_section">
        <BridgeCourse />
      </div>
      <div className="our_Course-faq-section">
        <FaqSectionBridgeCourse />
      </div>
      <Footer />
    </>
  )
}

export default ourCourse