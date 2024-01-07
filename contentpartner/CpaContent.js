import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import DownloadFormComponents from '../components/download_form'
import DownloadFormComponents2 from '../components/download_form3'
import CommonForm from '../components/CommonForm'
import indexData from '../database/index.json'
import { urlConstants } from '../constants/urlConstants'

const CpaContent = () => {
    const [isShow, setIsShow] = useState(false);
    const showDwnPopup = () => {
        setIsShow(!isShow);
    };

    const [isShow1, setIsShow1] = useState(false);
    const [isShow2, setIsShow2] = useState(false);
    const showDwnPopup1 = () => {
        // HaptikSDK.show();
        setIsShow1(!isShow1);
    };
    const showDwnPopup2 = () => {
        // HaptikSDK.show();
        setIsShow2(!isShow2);
    };
    const [contentData, setContentData] = useState({})
    useEffect(()=>{
        fetchData()
    },[])

    let fetchData = async () =>{
        let res = await axios.get(urlConstants.contentSection)
        setContentData({...res.data})
    }

    // console.log(contentData)
    return (
        <>
            <section className="section cont-partner-section">
                <div className="container-l">
                    <h2 className="heading02">Prepare with India's Trusted Institute</h2>
                    <div className="cont-partner-container">
                        <div className="cont-partner-row">

                            <div className="logo-box resp-img-box">
                                <Image loading='lazy' src="/img/cpa/becker_logo.png" alt=" Becker" fill={true} sizes='100vw' className='resp-img' />
                            </div>
                            <div className="content-box p2">
                                <p>Simandhar Education is the official partner of Becker Education International Ltd, a global leader in CPA & CMA exam review. Since its inception, Becker has helped lakhs of CPA & CMA aspirants achieve their goals.</p>

                                <a onClick={showDwnPopup2} className="btn maroon-btn maroon-arrow-btn">Free Becker 15 Days Trial</a>
                                <div className='download-overlay' onClick={showDwnPopup2} style={{ display: isShow2 ? 'block' : 'none' }}></div>
                                <div className='download-popup ' style={{ display: !isShow2 ? 'none' : 'block' }}>
                                    <span className='close-pp dwn-load' onClick={showDwnPopup2} style={{ display: isShow2 ? 'block' : 'none' }}>
                                        <Image loading='lazy' src="/img/white_cross.png" alt="white cross icon" fill={true} sizes='100vw' className='resp-img' />
                                    </span>
                                    <DownloadFormComponents2 showHeading2={true} indexData={indexData.downloadProspectus} DownloadForm={indexData.SimandharCPA} formName="Free Becker 15 Days Trial" />
                                </div>

                                {/* <a href="https://www.becker.com/cpa-review/course-demos" target='_blank' className="btn maroon-btn maroon-arrow-btn">Free Becker 15 Days Trial</a> */}
                                {/* <div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}></div>

                                <div className='download-popup right-form-box backer' style={{ display: !isShow ? 'none' : 'block' }}>
                                    <span className='close-pp' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}>
                                        <Image loading='lazy' src="/img/white_cross.png" alt=""fill={true} sizes='100vw' className='resp-img' />
                                    </span>
                                    <CommonForm showIcon={true} showcourse={true} showHeading2={true} showTitle={true} indexData={indexData.CpaCOntentPartner} formName="CPA Free Becker 15 Days Trial " />
                                </div> */}
                            </div>
                        </div>

                        <div className="cont-partner-row">
                            <div className="logo-box resp-img-box"><Image loading='lazy' src="/img/cpa/simdhan_logo.png" alt=" Simandhar education changing lives for better" fill={true} sizes='100vw' className='resp-img' /></div>
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
                                <div className='download-popup ' style={{ display: !isShow1 ? 'none' : 'block' }}>
                                    <span className='close-pp dwn-load' onClick={showDwnPopup1} style={{ display: isShow1 ? 'block' : 'none' }}>
                                        <Image loading='lazy' src="/img/white_cross.png" alt="white cross icon" fill={true} sizes='100vw' className='resp-img' />
                                    </span>
                                    <DownloadFormComponents showHeading2={true} indexData={indexData.downloadProspectus} DownloadForm={indexData.SimandharCPA} formName="CPA Download Prospectus" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CpaContent