import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import DownloadFormComponents1 from '../components/cpaexamfor2024'
import CommonForm from '../components/CommonForm'
import indexData from '../database/index.json'
import { urlConstants } from '../constants/urlConstants'

const CpaContent = () => {
    const [isShow, setIsShow] = useState(false);
    const showDwnPopup = () => {
        setIsShow(!isShow);
    };

    const [isShow1, setIsShow1] = useState(false);
    const showDwnPopup1 = () => {
        // HaptikSDK.show();
        setIsShow1(!isShow1);
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
            <section className="section cont-partner-section2">
            <a onClick={showDwnPopup1} className="btn maroon-btn maroon-arrow-btn">Download CPA 2024 Booklet</a>
                                <div className='download-overlay' onClick={showDwnPopup1} style={{ display: isShow1 ? 'block' : 'none' }}></div>
                                <div className='download-popup ' style={{ display: !isShow1 ? 'none' : 'block' }}>
                                    <span className='close-pp dwn-load' onClick={showDwnPopup1} style={{ display: isShow1 ? 'block' : 'none' }}>
                                        <Image loading='lazy' src="/img/white_cross.png" alt="white cross icon" fill={true} sizes='100vw' className='resp-img' />
                                    </span>
                                    <DownloadFormComponents1 showHeading2={true} indexData={indexData.downloadProspectus} DownloadForm={indexData.SimandharCPA} formName="CPA Download Prospectus" />
                                </div>
            </section>
        </>
    )
}

export default CpaContent