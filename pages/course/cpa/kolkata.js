import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../../components/Header'
import Footer from '../../../components/footer'
import RegisterForm from '../../../components/registrationForm'
import Accordion from 'react-bootstrap/Accordion';
import DownloadFormComponents from '../../../components/download_form'
import CommonForm from '../../../components/CommonForm';
import indexData from '../../../database/index.json'
import white_cross from '../../../public/img/white_cross.png'

const kolkata = () => {
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
                <title>US CPA Course in kolkata Syllabus, Eligibility, Online Coaching, Fees</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="US CPA Course in Kolkata. Prometric CPA Testing Center in Kolkata. Become a US Certified Public Accountant(CPA). Get Online US CPA Live Classes from Simandhar Education." />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta name="keywords" content="CPA, Certified Public Accountant, US CPA, US CPA Exam, US CPA Course, US CPA Exam in Kolkata, US CPA Course in Kolkata, Classroom Training, US Certified Public Accountant, CPA USA in Kolkata, CPA Training in Kolkata, CPA Coaching in Kolkata, CPA Classes in Kolkata, Simandhar Education, CPA certificate, CPA jobs in India, CPA salary in India, CPA career, CPA requirements, AICPA, NASBA, Prometric, CPA Exam in India, CPA India, CPA Exam Available in India, CPA Course, CPA USA course, CPA USA Course details, CPA in India, US CPA Course, US CPA Exam 
"></meta>
            </Head>
            <Header />

            <section className='city-top-section'>
                <div className="container">
                    <h2 className='heading03 theme-color'>Become a US Certified Public Accountant (US CPA) from Simandhar Education in kolkata, India</h2>
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
                                <Image loading='lazy' src={white_cross} alt="white cross " fill={true} sizes='100vw' className='resp-img' />
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
                        <CommonForm city={true} formName='Kolkata' />
                    </div>
                </div>
            </section>

            <section className='city-para'>
                <div className="container">
                    <div className="box">
                        <h3 className="heading03 text-center">US Certified Public Accountant (US CPA) in Kolkata, India</h3>
                        <p className='para' >Simandhar Education is India’s No.1 US CPA training provider. It is the channel partner of AICPA and official partner of Becker. It is very well known for its best US CPA training. Also, it supports the students throughout their US CPA training period. Hence, Simandhar Education has become the leading S CPA coaching provider in Kolkata, India..</p>
                        <p className='mt-2 para'>US CPA certification administered by American Institute of Certified Public Accountants (AICPA) is recognized globally in the domains of finance and accounting. There is a huge demand for the US CPA course in Kolkata, India. Many professionals are opting to choose the US CPA course nowadays.</p>
                    </div>
                    <div className="box">
                        <h3 className="heading03 text-center">US CPA Exam in Kolkata, India</h3>
                        <p className='para'>NASBA and AICPA have combinedly announced good news for the US CPA aspirants: The testing centers for the US CPA have begun in India from January 1, 2021. In India, there are 8 prometric locations and Kolkata is one of those. The other 7 US CPA Prometric locations/centers in India are: Hyderabad, Ahmedabad, Chennai, Trivandrum, Bangalore, Mumbai, and Delhi.</p>
                    </div>
                </div>
            </section>

            {/* // TABLE SECTION */}
            <section className="city-table pt-8">
                <div className="container">
                    <h3 className='heading03 text-center'>US CPA Cost in Kolkata, India</h3>
                    <div className='custom-scrollbar'>

                        <table cellpadding="0" cellspacing="0" className="strip">
                            <thead>
                                <tr>
                                    <th>Particulars</th>
                                    <th>CPA Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Exam fees (per section $250)</td>
                                    <td>	₹ 73,000</td>

                                </tr>
                                <tr>
                                    <td>International Testing Fees</td>
                                    <td>₹ 1,09,500</td>
                                </tr>
                                <tr>
                                    <td>Evaluation fees</td>
                                    <td>	₹ 16,425</td>
                                </tr>
                                <tr>
                                    <td> Application fees</td>
                                    <td>	₹ 14,600</td>

                                </tr>
                                <tr className='bold-text'>
                                    <td>Total CPA cost in Kolkata </td>
                                    <td>	₹ 2,13,525</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </section>

            <section className="section faq-section faq-section-cia pt-8">
                <div className="container-l">
                    <h3 className="heading02">Frequently Asked Questions(FAQ's)</h3>
                    <div className="faq-container">
                        <Accordion >
                            <Accordion.Item eventKey="0" className='faq-row'>
                                <Accordion.Header className="faq-title">What is the cost of US CPA in kolkata, India?</Accordion.Header>
                                <Accordion.Body className="faq-box">
                                    <p>The US CPA cost in Kolkata is ₹ 2,13,525 including international testing fees, evaluation fees, US CPA exam fees, and application fees.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1" className='faq-row'>
                                <Accordion.Header className="faq-title">Which is the best US CPA training institute in kolkata, India?</Accordion.Header>
                                <Accordion.Body className="faq-box">
                                    <p>Simandhar Education is the best US CPA coaching provider in Kolkata, India. It is because Simandhar Education has well-experienced CPA faculty, it is the channel partner of AICPA and an official partner of Becker.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2" className='faq-row'>
                                <Accordion.Header className="faq-title">Is kolkata a US CPA Prometric center in India?</Accordion.Header>
                                <Accordion.Body className="faq-box">
                                    <p>Yes, Kolkata is one of the Prometric locations/centers in India. Apart from Kolkata, there are seven more CPA exam centers in India.</p>
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

export default kolkata