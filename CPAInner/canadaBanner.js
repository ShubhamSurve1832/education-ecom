import React, { useState } from 'react'
import Image from 'next/image'
import indexData from '../database/index.json'
import DownloadFormComponents from '../components/download_form'



const canadaBanner = () => {
    const [isShow, setIsShow] = useState(false);
    const showDwnPopup = () => {
        setIsShow(!isShow);
    };
    return (
        <>
            <section>
                <div className="can_banner">
                    <div className="can_banner_img">
                        <Image loading='lazy' src="/img/cpa/can-banner.webp" alt="CPA canada"fill={true} sizes='100vw' className='resp-img' />
                    </div>
                    <div className="can_text">
                        <div className="canHeading">
                            <h2 className='heading02'>CPA Canada</h2>
                            <img loading='lazy' src="/img/cpa/can_logo.webp" fill={true} alt="CPA canada"/>
                        </div>
                        <div className="title01 ">
                            Become CPA Canada without any additional efforts!
                        </div>
                        {/* <div className="title01 can-text">
                            For more info,fill={true} sizes='100vw' up this form & get your queries clarified from the counselors at Simandhar.
                        </div> */}
                        <div className="">
                            <p onClick={showDwnPopup} className='btn maroon-btn maroon-arrow-btn'>Download Free Prospectus</p>
                            <div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}></div>
                            <div className='download-popup' style={{ display: !isShow ? 'none' : 'block' }}>
                                <span className='close-pp dwn-load' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}>
                                    <Image loading='lazy' src="/img/white_cross.png" alt="white cross"fill={true} sizes='100vw' className='resp-img' />
                                </span>
                                <DownloadFormComponents showHeading2={true} indexData={indexData.downloadProspectus} DownloadForm={indexData.CanadaProspactus} formName="canada page" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default canadaBanner