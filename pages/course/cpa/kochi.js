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


const kochi = () => {
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
                <title>US CPA Course in Mumbai Syllabus, Eligibility, Online Coaching, Fees</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="US CPA Course in Mumbai. Prometric CPA Testing Center in Mumbai. Become a US Certified Public Accountant(CPA). Get Online US CPA Live Classes from Simandhar Education." />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta name="keywords" content="CPA, Certified Public Accountant, US CPA, US CPA Exam, US CPA Course, US CPA Exam in Mumbai, US CPA Course in Mumbai, Classroom Training, US Certified Public Accountant, CPA USA in Mumbai, CPA Training in Mumbai, CPA Coaching in Mumbai, CPA Classes in Mumbai, Simandhar Education, CPA certificate, CPA jobs in India, CPA salary in India, CPA career, CPA requirements, AICPA, NASBA, Prometric, CPA Exam in India, CPA India, CPA Exam Available in India, CPA Course, CPA USA course, CPA USA Course details, CPA in India, US CPA Course, US CPA Exam"></meta>
            </Head>
            <Header />

            <section className='city-top-section'>
                <div className="container">
                    <h2 className='heading03 theme-color'>Become a US Certified Public Accountant (US CPA) from Simandhar Education in Kochi, India</h2>
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
                        <CommonForm city={true} formName='Delhi' />
                    </div>
                </div>
            </section>

            <section className='city-para'>
                <div className="container">
                    <div className="box">
                        <h3 className="heading03 text-center">US Certified Public Accountant (US CPA) in Kochi, India</h3>
                        <p className='para' >Simandhar Education is the leading US CPA training provider in kochi, India. It is the official partner of Becker and channel partner of AICPA. Simandhar Education is notable for its viable online CPA live classes and supporting US CPA aspirants throughout the US CPA training period. Hence, Simandhar Education became the best online US CPA coaching in kochi, India.</p>
                        <p className='mt-2 para'>AICPA administers the US CPA designation, and it is a globally recognized credential in finance and accounting domains. Over the past few years, the US CPA course demand has been increasing tremendously in India. Opting for the US CPA course in Kochi from Simandhar Education is the right decision to excel in the US CPA career.</p>
                    </div>
                    <div className="box">
                        <h3 className="heading03 text-center">US CPA Exam in Thiruvananthapuram, India</h3>
                        <p className='para'>NASBA and AICPA have announced good news for the US CPA aspirants: The US CPA exam Prometric centers have begun in India from 1st January 2021. We have 8 Prometric locations in India, and Kochi is one of those. You can now take the US CPA Exam in Thiruvananthapuram, India.</p>
                    </div>
                </div>
            </section>

            {/* // TABLE SECTION */}
            <section className="city-table pt-8">
                <div className="container">
                    <h3 className='heading03 text-center'>US CPA Cost in Kochi, India</h3>
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
                                    <td>International Testing Fees</td>
                                    <td>₹ 1,09,500</td>
                                </tr>
                                <tr>
                                    <td>Exam fees (per section $250)</td>
                                    <td>	₹ 73,000</td>
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
                                    <td>Total CPA cost in Kochi </td>
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
                                <Accordion.Header className="faq-title">What is the cost of US CPA in Kochi, India?</Accordion.Header>
                                <Accordion.Body className="faq-box">
                                    <p>The US CPA cost in Kochi is ₹ 2,13,525 including US CPA exam fees, international testing fees, evaluation fees, and application fees.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1" className='faq-row'>
                                <Accordion.Header className="faq-title">Which is the best US CPA training institute in Kochi, India?</Accordion.Header>
                                <Accordion.Body className="faq-box">
                                    <p>Simandhar Education is the best US CPA coaching provider in Kochi, India. Simandhar Education has leading US CPA instructors, and provides effective CPA online classes. It is the channel partner of AICPA and an official partner of Becker.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2" className='faq-row'>
                                <Accordion.Header className="faq-title">Is Thiruvananthapuram a US CPA Prometric center in India?</Accordion.Header>
                                <Accordion.Body className="faq-box">
                                    <p> Yes, Kochi is one of the Prometric locations/centers in India. Apart from Kochi, there are seven more CPA exam centers in India.</p>
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

export default kochi