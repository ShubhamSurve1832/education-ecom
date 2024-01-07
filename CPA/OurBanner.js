import React from 'react'
import Image from 'next/image'

const OurBanner = () => {
    return (
        <>
            <section className='section'>
                <div className="container">
                    <div className="ol-class-section">
                        <div className="ourclass">
                            <div className="ourclass-banner">
                                <Image loading='lazy' src="img/cpa/ourcourse-banner.png" alt="" />
                            </div>
                            <div className="side-text">
                                <div className="our-classtext">
                                    <h2 className='heading08'>Enhancsse your US CPA Exam/ License Eligibility with Bridge Course</h2>
                                </div>
                                <div className="our-classbtn">
                                    <p className='heading07'>Flash Sale | Flat 50% Off</p>
                                </div>
                                <div className="">
                                    <p className='btn maroon-btn maroon-arrow-btn'>View All Courses</p>
                                </div>

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