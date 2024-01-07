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



const Bangalore = () => {
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
        <title>US CPA Course in Bangalore India Syllabus, Eligibility, Online Coaching, Fees</title>
        <meta name="description" content="US CPA Course in Bangalore. Prometric CPA Testing Center in Bangalore. Become a US Certified Public Accountant(CPA). Get Online US CPA Live Classes from Simandhar Education." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta name="keywords" content="US CPA in bangalore, US CPA Exam, Certified Public Accountant, US CPA Course, US CPA Exam in Bangalore, US CPA Course in Bangalore, Classroom Training, US Certified Public Accountant, CPA USA in Bangalore, CPA Training in Bangalore, CPA Coaching in Bangalore, CPA Classes in Bangalore, Simandhar Education, CPA certificate, CPA jobs in India, CPA salary in India, CPA career, CPA requirements, AICPA, NASBA, Prometric, CPA Exam in India, CPA India, CPA Exam Available in India, CPA Course, CPA USA course, CPA USA Course details, CPA in India, US CPA Course, US CPA Exam" />
      </Head>
      <div className='width-50'>
        <Header />
      </div>
      <section className='city-top-section'>
        <div className="container">
          <h2 className='heading03 theme-color'>Become a US Certified Public Accountant (US CPA) from Simandhar Education in Bangalore, India</h2>
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
            <h3 className="heading03 text-center">US Certified Public Accountant (US CPA) in Bangalore, India</h3>
            <p className='para' >Simandhar Education is an official partner of Becker and channel partner of AICPA. It is well-known for its top-notch teaching, effective online CPA live classes and supporting the understudies all through their US CPA training period. Hence, Simandhar Education has become the best online US CPA coaching in Bangalore, India.</p>
            <p className='mt-2 para'>The US CPA credential administered by AICPA is globally recognized in the domains of accounting and finance. The demand for US CPA has been increasing in India for the past few years. Opting for the US CPA course in Bangalore from Simandhar Education helps you reach heights in your career.</p>
          </div>
          <div className="box">
            <h3 className="heading03 text-center">US CPA Exam in Bangalore, India</h3>
            <p className='para'>You might think, Is there any chance of taking the US CPA exam in India? Here is good news for you. From 1st January 2021, US CPA testing centers have begun in India. There are 8 Prometric locations in India including Bangalore. Instead of Dubai, now you can take your US CPA Exam in Bangalore, India.</p>
          </div>
        </div>
      </section>

      {/* // TABLE SECTION */}
      <section className="city-table pt-8">
        <div className="container">
          <h3 className='heading03 text-center'>US CPA Cost in Bangalore, India</h3>
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
                    <td>	₹ 73,000</td>

                  </tr>
                  <tr>
                    <td>Evaluation fees</td>
                    <td>₹ 16,425</td>
                  </tr>
                  <tr>
                    <td>Application fees</td>
                    <td>₹ 14,600</td>

                  </tr>
                  <tr className='bold-text'>
                    <td>Total US CPA fees in Bangalore</td>
                    <td>₹ 2,13,525</td>
                  </tr>
                </tbody>
              </table>
              <p><strong>Note:</strong> If you are writing the CPA exam in the USA, international testing fee is not applicable.</p>
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
                <Accordion.Header className="faq-title">What is the cost of US CPA in Bangalore, India?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>The US CPA cost in Bangalore is ₹ 2,13,525 including international testing fees, US CPA exam fees, application fees and evaluation fees.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className='faq-row'>
                <Accordion.Header className="faq-title">Is Bangalore a US CPA Prometric center in India?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Yes, Bangalore is one of the Prometric locations/centers in India. Apart from Bangalore, there are seven more US CPA exam centers in India.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className='faq-row'>
                <Accordion.Header className="faq-title">Which is the best US CPA Training Institute in Bangalore, India?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Simandhar Education is the best US CPA coaching provider in Bangalore, India. It is because Simandhar Education is well known for its world-class teaching, supporting students throughout their US CPA training period and effective live online classes under the guidance of leading US CPA instructors. It is the channel partner of AICPA and the official partner of Becker.</p>
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

export default Bangalore