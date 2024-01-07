import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import dynamic from "next/dynamic";
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";
const DownloadFormComponents = dynamic(() => import('../components/download_form'))
const indexData = dynamic(() => import('../database/index.json'))

// import DownloadFormComponents from '../components/download_form'
// import indexData from '../database/index.json'


const Batches = ({ batcheData }) => {
    const [isShow, setIsShow] = useState(false);
    const showDwnPopup = () => {
        setIsShow(!isShow);
    };

    let image = urlConstant.S3_buckets + batcheData.path
    return (
        <>
            <section className='batches-section'>
                <div className='container-l'>
                    <h2 className='heading02'>Upcoming Batches</h2>
                    <div className='two-box-row'>
                        <div className='left-box'>
                            <img loading='lazy' src={image} fill={true} sizes='100vw' alt='' className='resp-img' />
                        </div>
                        <div className='right-box'>
                            <div className='grid-row'>
                                <div className='date-circle'>
                                    <div className='date-box'>
                                        <div className='month-row'>{batcheData.month}</div>
                                        <div className='date-row'>{batcheData.date}</div>
                                    </div>
                                </div>
                                <div className='batch-content'>
                                    <h2 className='heading03'>{batcheData.course}</h2>
                                    <h3 className='heading05'>{batcheData.title}</h3>
                                    <h3 className='heading05'>{batcheData.time}</h3>
                                    <div className='download-schedule'>
                                        <a className='btn maroon-btn maroon-btn-arrow' onClick={showDwnPopup}>Download Schedule</a>
                                        <div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}></div>
                                        <div className='download-popup' style={{ display: !isShow ? 'none' : 'block' }}>
                                            <span className='close-pp dwn-load' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}>
                                                <Image loading='lazy' src="/img/white_cross.png" alt="white cross icon" fill={true} sizes='100vw' className='resp-img' />
                                            </span>
                                            <DownloadFormComponents showHeading2={true} indexData={indexData.downloadSchedual} DownloadForm={indexData.SimandharDA} formName="DA Download schedual" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Batches 