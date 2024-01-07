import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const OurBanner = () => {
    return (
        <>
            <section className=''>
                <div className="">
                    <div className="ol-class-section">
                        <div className="ourclass">
                            <div className="ourclass-banner">
                                <Image loading='lazy' src="/img/cpa/ourcourse-banner.webp" alt=" CPA Bridge course" fill={true} sizes='100vw'  className='resp-img ourcourse-banner' />
                            </div>
                            <div className="side-text">
                                <div className="our-classtext">
                                    <h1 className='heading08'>Enhance your US CPA Exam/License eligibility with Bridge Course </h1>
                                </div>
                            </div>
                            <div className="our-classbtn our-classbtn01">
                                <p className='heading07'>Earn 60 Credits along with your US CPA course and sit for US CPA exam in India</p>
                            </div>

                        </div>




                        {/* <div className="text-heading">
                            <h2>Earn 60 Credits along with your US CPA course and sit for US CPA exam in India</h2>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurBanner