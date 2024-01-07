import React, { useState } from 'react'
import Image from 'next/image'
import { useEffect } from "react";
import $ from 'jquery';
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";

const jobContent = ({ jobData }) => {
    const [show, setShow] = useState(false)
    const showTab = () => {
        setShow(!show)
    }

    // useEffect(() => {
    //     $(".applyBtn").click(function () {
    //         $(".applybtnPop").addClass("active");
    //     });
    //     $(".overlay, .close-icon").click(function () {
    //         $(".applybtnPop").removeClass("active");
    //     });
    // }, [])

    return (
        <>
            <section className="jobSection">
                <div className="container">
                    <h1 className="heading02 text-center">{jobData?.mainheading}</h1>

                    <div className="jobContainer">

                    {
                            jobData?.lists?.map(({ image, jobAlt, title, discription }) => {
                                let img = urlConstant.S3_buckets + image
                                return (
                                    <div className="box text-center">
                                        <div className="brandImg">
                                            <img loading='lazy' src={img} alt={jobAlt} fill sizes='100vw' className='resp-img' />
                                        </div>
                                        <div className="title">
                                            {title}
                                        </div>
                                        <div className="discription">
                                            {discription}
                                        </div>
                                        <div onClick={showTab} className="applyBtn">
                                            <a href="#" className="btn maroon-btn maroon-btn-arrow">Apply</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/* {
                            jobData?.lists?.map(({ image, jobAlt, title, discription }) => {
                                let img = urlConstant.S3_buckets + image
                                return (
                                    <div className="box text-center">
                                        <div className="brandImg">
                                            <img loading='lazy' src={img} alt={jobAlt} fill={true} sizes='100vw' className='resp-img' />
                                        </div>
                                        <div className="title">
                                            {title}
                                        </div>
                                        <div className="discription">
                                            {discription}
                                        </div>
                                        <div className="applyBtn">
                                            <a href="#" className="btn maroon-btn maroon-btn-arrow">Apply</a>
                                        </div>
                                    </div>
                                )
                            })
                        } */}
                        {/* /* onClick={showTab}*/}


                      
                    </div>
                </div>
            </section>

            <div className={`applybtnPop ${show ? "active":""}`}>
                <div className="overlay"></div>
                <div className="popupMessage text-center">
                    <div className="close-icon" onClick={showTab}>
                        <Image loading='lazy' src="/img/close-icon.png" alt="" fill={true} sizes='100vw' className='resp-img' />
                    </div>
                    <div className="popContainer">
                        <div className="title">
                            Thank you for your interest in stepping towards your career progression
                        </div>
                        <div className="content">
                            <p>You can drop your updated resume at <a href="mailto:placements@simandhareducation.com"> placements@simandhareducation.com.</a> Please be patient while our team is working on getting you into the best company and great things takes time to happen.</p>
                            <p>*Kindly be informed of mentioning the subject of email with your qualification, else it will not help us in placing you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default jobContent
