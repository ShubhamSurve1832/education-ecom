import React from 'react'
import Image from 'next/image'
import DownloadFormComponents from '../components/download_form'
import DownloadFormComponents2 from '../components/download_form4'
import { useState } from 'react';
import indexData from '../database/index.json'
import becker_logo from '../public/img/Becker_logo.png'
import simandhar_logo from '../public/img/cpa/simdhan_logo.png'
import white_cross from '../public/img/white_cross.png'
import CommonForm from '../components/CommonForm';

const CmaContent = () => {

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
            <section className="section cont-partner-section">
                <div className="container-l">
                    <h2 className="heading02">Prepare with India's Trusted Institute</h2>
                    <div className="cont-partner-container">
                        <div className="cont-partner-row">

                            <div className="logo-box resp-img-box"><Image loading='lazy' src={becker_logo} alt=" Becker" fill={true} sizes='100vw' className='resp-img' /></div>
                            <div className="content-box p2">
                                <p>Simandhar Education is the official partner of Becker Education International Ltd, a global leader in CPA & CMA exam review. Since its inception, Becker has helped lakhs of CPA & CMA aspirants achieve their goals.</p>

                                {/* <a onClick={showDwnPopup} target='_blank' className="btn maroon-btn maroon-arrow-btn">Free Becker 15 Days Trial</a>
                                <div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}></div>

    <div className='download-popup right-form-box backer' style={{ display: !isShow ? 'none' : 'block' }}>
        <span className='close-pp' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}>
            <Image loading='lazy' src="/img/white_cross.png" alt=""fill={true} sizes='100vw' className='resp-img' />
        </span>
        <DownloadFormComponents showIcon={true} showcourse={true} showHeading2={true} showTitle={true} indexData={indexData.CpaCOntentPartner} formName="CPA Free Becker 15 Days Trial " />
    </div> */}

                            <a onClick={showDwnPopup} className="btn maroon-btn maroon-arrow-btn">Free Becker 15 Days Trial</a>
                                <div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}></div>
                                <div className='download-popup' style={{ display: !isShow ? 'none' : 'block' }}>
                                    <span className='close-pp dwn-load' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}>
                                        <Image loading='lazy' src={white_cross} alt="white cross " fill={true} sizes='100vw' className='resp-img' />
                                    </span>
                                    <DownloadFormComponents2 showHeading2={true} indexData={indexData.downloadProspectus} DownloadForm={indexData.SimandharCMA} formName="Free Becker 15 Days Trial" />
                                </div>
                            </div>
                        </div>

                        <div className="cont-partner-row">
                            <div className="logo-box resp-img-box"><Image loading='lazy' src={simandhar_logo} alt=" Simandhar Education changing lives for better" fill={true} sizes='100vw' className='resp-img' /></div>
                            <div className="content-box p2">
                                <p>Simandhar Education is the official partner of Becker Education International Ltd, a global leader in CPA & CMA exam review. Since its inception, Becker has helped lakhs of CPA & CMA aspirants achieve their goals.</p>
                                <ul className='lists'>
                                    <li className='list'>We are the Channel Partner of AICPA</li>
                                    <li className='list'>Official partners of Becker Professional Education</li>
                                    <li className='list'>Approved partner of the Fast Forward Academy for Enrolled Agent in India</li>
                                    <li className='list'>Silver Partner of ACCA</li>
                                </ul>

                                <a onClick={showDwnPopup1} className="btn maroon-btn maroon-arrow-btn">Download Prospectus</a>
                                <div className='download-overlay' onClick={showDwnPopup1} style={{ display: isShow1 ? 'block' : 'none' }}></div>
                                <div className='download-popup' style={{ display: !isShow1 ? 'none' : 'block' }}>
                                    <span className='close-pp dwn-load' onClick={showDwnPopup1} style={{ display: isShow1 ? 'block' : 'none' }}>
                                        <Image loading='lazy' src={white_cross} alt="white cross " fill={true} sizes='100vw' className='resp-img' />
                                    </span>
                                    <DownloadFormComponents showHeading2={true} indexData={indexData.downloadProspectus} DownloadForm={indexData.SimandharCMA} formName="CMA Download Prospectus" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default CmaContent