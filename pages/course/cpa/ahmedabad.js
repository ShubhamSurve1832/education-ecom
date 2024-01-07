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



const Ahmedabad = () => {
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
        <title>US CPA Course in Ahmedabad Syllabus, Eligibility, Online Coaching, Fees</title>
        <meta name="description" content="US CPA Course in Ahmedabad. Prometric CPA Testing Center in Ahmedabad. Become a US Certified Public Accountant(CPA). Get Online US CPA Live Classes from Simandhar Education." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta name="keywords" content="CPA, Certified Public Accountant, US CPA, US CPA Exam, US CPA Course, US CPA Exam in Ahmedabad, US CPA Course in Ahmedabad, Classroom Training, US Certified Public Accountant, CPA USA in Ahmedabad, CPA Training in Ahmedabad, CPA Coaching in Ahmedabad, CPA Classes in Ahmedabad, Simandhar Education, CPA certificate, CPA jobs in India, CPA salary in India, CPA career, CPA requirements, AICPA, NASBA, Prometric, CPA Exam in India, CPA India, CPA Exam Available in India, CPA Course, CPA USA course, CPA USA Course details, CPA in India, US CPA Course, US CPA Exam" />
      </Head>
      <div className='width-50'>
        <Header />
      </div>
      <section className='city-top-section'>
        <div className="container">
          <h2 className='heading03 theme-color'>Become a US Certified Public Accountant (US CPA) from Simandhar Education in Ahmedabad, India</h2>
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
            <CommonForm city={true} formName='Delhi' />
          </div>
        </div>
      </section>
      <section className='city-para'>
        <div className="container">
          <div className="box">
            <h3 className="heading03 text-center">US Certified Public Accountant (US CPA) in Ahmedabad, India</h3>
            <p className='para' >Simandhar Education is the leading US CPA training provider in Ahmedabad, India. It is officially partnered with Becker and is a channel partner of AICPA. Simandhar Education is notable for its specialized and interactive online CPA live classes and supporting the US CPA aspirants throughout the US CPA training period for the examinations and as well as for the placements. Hence, Simandhar Education became the best online US CPA coaching in Ahmedabad, India.</p>
            <p className='mt-2 para'>The US CPA designation is administered by AICPA and globally recognized in the accounting and finance domain. For the past few years, the demand for US CPA courses has been on the increase in India. Getting enrolled for the US CPA course in Ahmedabad with Simandhar Education will be the right decision to succeed in a US CPA career.</p>
          </div>
          <div className="box">
            <h3 className="heading03 text-center">US CPA Exam in Ahmedabad, India</h3>
            <p className='para'>AICPA & NASBA have announced a piece of good news for US CPA aspirants that the exam prometric centers have begun in India from 1st January 2021. All over India, we have a total of 8 prometric, and Ahmedabad is one of them. So US CPA course enrolled candidates may take the exam in Ahmedabad.</p>
          </div>
        </div>
      </section>

      {/* // TABLE SECTION */}
      <section className="city-table pt-8">
        <div className="container">
          <h3 className='heading03 text-center'>US CPA Cost in Ahmedabad, India</h3>
          <p><strong>The breakdown of US CPA course fees in Ahmedabad is as mentioned below.</strong></p>
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
                    <td>	₹ 1,09,500</td>

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
                    <td>Total US CPA fees in Ahmedabad</td>
                    <td>₹ 2,13,525</td>
                  </tr>
                </tbody>
              </table>
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
                <Accordion.Header className="faq-title">What is the cost of US CPA in Ahmedabad, India?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>The US CPA cost in Ahmedabad is ₹ 2,13,525, including US CPA exam fees, international testing fees, evaluation fees, and application fees.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className='faq-row'>
                <Accordion.Header className="faq-title">Is Ahmedabad a US CPA Prometric center in India?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Yes, Ahmedabad is one of the Prometric locations/centers in India. Apart from Ahmedabad, there are seven more CPA exam centers in India.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className='faq-row'>
                <Accordion.Header className="faq-title">Which is the best US CPA training institute in Ahmedabad, India?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Simandhar Education is the best US CPA coaching provider in Ahmedabad, India. Simandhar Education has leading US CPA instructors and provides effective CPA online classes. It is the channel partner of AICPA and an official partner of Becker.</p>
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

export default Ahmedabad