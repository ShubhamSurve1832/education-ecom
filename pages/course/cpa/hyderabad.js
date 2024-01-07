import React, { useState } from 'react'
import Head from 'next/head'
import Accordion from 'react-bootstrap/Accordion';
import Header from '../../../components/Header'
import Footer from "../../../components/footer";
import RegisterForm from '../../../components/registrationForm'
import FacultyContent from '../../../CPA/FacultyContent'
import FacultyData from '../../../database/data/faculty.json'
import DownloadFormComponents from '../../../components/download_form'
import CommonForm from '../../../components/CommonForm';
import indexData from '../../../database/index.json'
import white_cross from '../../../public/img/white_cross.png'
import Image from 'next/image'



const Hyderabad = () => {
  const [isShow, setIsShow] = useState(false);
  const showDwnPopup = () => {
    setIsShow(!isShow);
  };

  const [isShow1, setIsShow1] = useState(false);
  const showDwnPopup1 = () => {
    setIsShow1(!isShow1);
  };

  return (
    <>
      <Head>
        <title>US CPA Course in Hyderabad India Syllabus, Eligibility, Online Coaching, Fees</title>
        <meta name="description" content="US CPA Course in Hyderabad. Prometric CPA Testing Center in Hyderabad. Become a US Certified Public Accountant (CPA). Get Online US CPA Live Classes from Simandhar Education." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta name="keywords" content="CPA, Certified Public Accountant, US CPA Course, US CPA Course in Hyderabad, CPA exams now in India, CPA Exam, CPA Live Classes in Hyderabad, Hyderabad CPA classes, CPA exams in India, CPA full form, CPA eligibility, CPA license, CPA certificate, CPA jobs in India, CPA salary in India, CPA career, CPA requirements, AICPA, NASBA, Prometric, CPA Exam in India, CPA India, CPA Exam Available in India, CPA Course, CPA USA course, CPA USA Course details, CPA in India, US CPA Course, US CPA Exam" />
      </Head>
      <div className='width-50'>
        <Header />
      </div>
      <section className='city-top-section'>
        <div className="container">
          <h2 className='heading03 theme-color'>Become a US Certified Public Accountant (US CPA) from Simandhar Education in Hyderabad, India</h2>
          <h6>Study material provided by Becker, Live Classes by Simandhar</h6>
          <div className="btn-wrap eligible-box">
            <a href="#" className="btn maroon-btn" onClick={showDwnPopup}>Free Becker 15 Days Trial</a>
            <div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}></div>
            <div className='download-popup right-form-box backer' style={{ display: !isShow ? 'none' : 'block' }}>
              <span className='close-pp' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}>
                <Image loading='lazy' src={white_cross} alt="white cross icon" fill={true} sizes='100vw' className='resp-img' />
              </span>
              <CommonForm showIcon={true} Qualification={true} showHeading2={true} showTitle={true} indexData={indexData.WhatIsCpa} formName="What is CPA contact us" />
            </div>
            <a href="#" className="btn maroon-btn" onClick={showDwnPopup1} >Download Free Brochure</a>
            <div className='download-overlay' onClick={showDwnPopup1} style={{ display: isShow1 ? 'block' : 'none' }}></div>
            <div className='download-popup' style={{ display: !isShow1 ? 'none' : 'block' }}>
              <span className='close-pp dwn-load' onClick={showDwnPopup1} style={{ display: isShow1 ? 'block' : 'none' }}>
                <Image loading='lazy' src={white_cross} alt="white cross" fill={true} sizes='100vw' className='resp-img' />
              </span>
              <DownloadFormComponents showHeading2={true} indexData={indexData.downloadProspectus} DownloadForm={indexData.SimandharCMA} Qualification={true} formName="what is cpa Prospectus" />
            </div>
          </div>
        </div>
      </section>
      <section className="city-video-section">
        <div className="container">
          <div className="city-video-box">
            <iframe src="https://www.youtube.com/embed/qCHGXFkRPnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="right-form-box">
            <CommonForm city={true} formName='Hyderabad' />
          </div>
        </div>
      </section>
      <section className='city-para'>
        <div className="container">
          <div className="box">
            <h3 className="heading03 text-center">US Certified Public Accountant (US CPA) in Hyderabad, India</h3>
            <p className='para' >Simandhar Education is Becker’s official partner and AICPA’s channel partner. It is well known for its world-class teaching, effective online classes under the guidance of leading US CPA instructors, and supporting the students throughout their US CPA training period. Hence, Simandhar Education became the best online US CPA coaching provider in Hyderabad, India.</p>
            <p className='mt-2 para'>The designation of US CPA is administered by AICPA (American Institute of Certified Public Accountants). It is also known as CA in the US and a globally recognized credential in the accounting/finance domain. In India, there is a huge demand for the US CPA course; hence many professionals are opting to take US CPA coaching nowadays.</p>
          </div>
          <div className="box">
            <h3 className="heading03 text-center">US CPA Exam in Hyderabad, India</h3>
            <p className='para'>AICPA and NASBA have announced good news for the CPA aspirants: CPA exam testing centers in India have begun from January 1, 2021. There are 8 Prometric locations in India, and Hyderabad is one of those. Now, you can take the US CPA Exam in Hyderabad, India, instead of Dubai.</p>
          </div>
        </div>
      </section>

      {/* // TABLE SECTION */}
      <section className="city-table pt-8">
        <div className="container">
          <h3 className='heading03 text-center'>US CPA Cost in Hyderabad, India</h3>
          <div className='custom-scrollbar city-table'>
            <div className="leftBox">
              <table cellpadding="0" cellspacing="0">
                <thead>
                  <tr>
                    <th>Particulars</th>
                    <th>CPA Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>International Testing Fees</td>
                    <td>₹ 1,09,500</td>

                  </tr>
                  <tr>
                    <td>Exam fees (per section $250)</td>
                    <td>₹ 73,000</td>
                  </tr>
                  <tr>
                    <td>Application fees</td>
                    <td>₹ 14,600</td>
                  </tr>
                  <tr>
                    <td>Evaluation fees</td>
                    <td>₹ 16,425</td>

                  </tr>
                  <tr className='bold-text'>
                    <td>Total CPA cost in Hyderabad</td>
                    <td>₹ 2,13,525</td>
                  </tr>
                </tbody>
              </table>
              <p className='note'><strong>Note:</strong> If you are writing the CPA exam in the USA, international testing fee is not applicable.</p>
            </div>


          </div>
        </div>
      </section>

      <section className="section faq-section faq-section-cia pt-8">
        <div className="container-l">
          <h3 className="heading02">Frequently Asked Questions (FAQ's)</h3>
          <div className="faq-container">
            <Accordion >
              <Accordion.Item eventKey="0" className='faq-row'>
                <Accordion.Header className="faq-title">What is the cost of US CPA in Hyderabad, India?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>The US CPA cost in Hyderabad is ₹ 2,13,525 including US CPA exam fees, international testing fees, evaluation fees, and application fees.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className='faq-row'>
                <Accordion.Header className="faq-title">Is Hyderabad a US CPA Prometric center in India?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Yes, Hyderabad is one of the Prometric locations/centers in India. Apart from Hyderabad, there are seven more CPA exam centers in India.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className='faq-row'>
                <Accordion.Header className="faq-title">Which is the best US CPA training institute in Hyderabad, India?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Simandhar Education is the best US CPA coaching provider in Hyderabad, India. It is because Simandhar Education has well-experienced CPA faculty and effective online classes. It is the channel partner of AICPA and official partner of Becker.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
      <RegisterForm />

      <Footer />
    </>
  )
}

export default Hyderabad