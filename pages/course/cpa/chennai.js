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



const chennai = () => {
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
                <title>US CPA Course in Chennai Syllabus, Eligibility, Online Coaching, Fees</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <meta name="description" content="US CPA Course in Chennai. Prometric CPA Testing Center in Chennai. Become a US Certified Public Accountant(CPA). Get Online US CPA Live Classes from Simandhar Education."></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta name="keywords" content="CPA, Certified Public Accountant, US CPA, US CPA Exam, US CPA Course, US CPA Exam in Chennai, US CPA Course in Chennai, Classroom Training, US Certified Public Accountant, CPA USA in Chennai, CPA Training in Chennai, CPA Coaching in Chennai, CPA Classes in Chennai, Simandhar Education, CPA certificate, CPA jobs in India, CPA salary in India, CPA career, CPA requirements, AICPA, NASBA, Prometric, CPA Exam in India, CPA India, CPA Exam Available in India, CPA Course, CPA USA course, CPA USA Course details, CPA in India, US CPA Course, US CPA Exam"></meta>
            </Head>
            <Header />

            <section className='city-top-section'>
                <div className="container">
                    <h2 className='heading03 theme-color'>Become a US Certified Public Accountant (US CPA) from Simandhar Education in chennai, India</h2>
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
                        <CommonForm city={true} formName='Chennai' />
                    </div>
                </div>
            </section>

            <section className='city-para'>
                <div className="container">
                    <div className="box">
                        <h3 className="heading03 text-center">US Certified Public Accountant (US CPA) in Chennai, India</h3>
                        <p className='para' >Simandhar Education is the leading US CPA training provider in India, it is the official partner of Becker and channel partner of AICPA. It is well-known for its effective online classes under the guidance of reputed and leading US CPA instructors and supporting US CPA aspirants throughout their training period. This is how Simandhar Education became the best online US CPA coaching provider in Chennai, India.</p>
                        <p className='mt-2 para'>US CPA designation is a globally recognized credential administered by AICPA (American Institute of Certified Public Accountants). There is a huge demand for the US CPA course in India, especially in finance and accounting domains. Hence, many professionals are willing to take US CPA training in Chennai, India.</p>
                    </div>
                    <div className="box">
                        <h3 className="heading03 text-center">US CPA Exam in Chennai, India</h3>
                        <p className='para'>NASBA and AICPA have announced good news for all the US CPA aspirants: The US CPA exam's testing centres have begun in India from January 1, 2021. There are 8 US CPA exam prometric locations/centers in India, and Chennai is one of those. You can take the US CPA exam in Chennai, India from now onwards.</p>
                    </div>
                </div>
            </section>

            {/* // TABLE SECTION */}
            <section className="city-table pt-8">
                <div className="container">
                    <h3 className='heading03 text-center'>US CPA Cost in Chennai, India</h3>
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
                                    <td>Total CPA cost in Chennai </td>
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
                                <Accordion.Header className="faq-title">What is the cost of US CPA in Chennai, India?</Accordion.Header>
                                <Accordion.Body className="faq-box">
                                    <p>The US CPA cost in Chennai is ₹ 2,13,525, including international testing fees, US CPA exam fees, application fees, and evaluation fees.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1" className='faq-row'>
                                <Accordion.Header className="faq-title">Is Chennai a US CPA Prometric center in India?</Accordion.Header>
                                <Accordion.Body className="faq-box">
                                    <p>Yes, Chennai is one of the Prometric locations/centers in India. Apart from Chennai, there are seven more US CPA exam centers in India.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2" className='faq-row'>
                                <Accordion.Header className="faq-title">Which is the best US CPA training institute in Chennai, India?</Accordion.Header>
                                <Accordion.Body className="faq-box">
                                    <p>Simandhar Education is the best US CPA coaching provider in Chennai, India. It is because Simandhar Education supports the students with top-notch US CPA online classes. It is the channel partner of AICPA and official partner of Becker.</p>
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

export default chennai