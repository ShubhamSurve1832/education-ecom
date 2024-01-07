import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import AnjuNampoothiry from "../public/img/AnjuNampoothiry.png"
import AkshayJaiswal from "../public/img/AkshayJaiswal.png"
import KanveetSing from "../public/img/KavneetSinghHanspal.png" 
import SwethaKiran from "../public/img/SwethaKiran.png"
import AccentureLogo from "../public/img/Accenture.png"
import PWCLogo from "../public/img/pwc.png"
import Kpmg from "../public/img/kpmg.png"
import Deloitte from "../public/img/Deloitte.png"
import Ey from "../public/img/EY_logo.png"

const RightStep = () => {
    

    const [card,setCard]=useState([{path:"/img/AnjuNampoothiry.png",title:'Anju Nampoothiry',rank:'BEC-98 - REG-97 - AUD-93 - FAR-89',country:'US Texas | BDO'},
    {path:"/img/Accenture.png",title:'Akshay Jaiswal',rank:'FAR-98 - BEC-96 - REG-96 - AUD-88',country:'CPA Bangalore | Amazon'},
    {path:"/img/KavneetSinghHanspal.png",title:'Kavneet Singh Hanspal',rank:'US CPA, Delhi, India',country:'EY'},
    {path:"/img/SwethaKiran.png",title:'Swetha Kiran',rank:'US CPA, Hyderabad, India',country:'JP Morgan'}])
    return (
        <section className='right-step-section'>
            <h2 className='heading02'>The Right Step To Take A Giant Leap</h2>
            <div className="container">
                {/* <div className='right-step-row'>
                    <h3 className='right-steps-title'>Advance Your Career with Online Courses</h3>
                    <Link href='/academy' className='btn white-btn white-btn-arrow'>Buy Courses</Link>
                </div> */}
                <div className='steps-container'>
                    <div className='left-box'>
                        <div className='row-1'>
                            <figure className='achiever-box'>
                                <div className='achiever-img resp-img-box'>
                                    <Image loading='lazy' src={AnjuNampoothiry}fill={true} sizes='100vw'  className='resp-img' alt=' Anju Nampoothiry, CPA alumni, Placed at BDO'/>
                                </div>
                                <figcaption>
                                    <h3 className='caption-title'>Anju Nampoothiry</h3>
                                    <p>BEC-98 - REG-97 - AUD-93 - FAR-89</p>
                                    <p>US Texas | BDO</p>
                                </figcaption>
                            </figure>
                            <div className='partner-logo'>
                                <Image loading='lazy' src={AccentureLogo}fill={true} sizes='100vw'  className='resp-img' alt='Our Corporate tie up with accenture'/>
                            </div>

                        </div>
                        <div className='row-1 row-reverse'>
                            <figure className='achiever-box'>
                                <div className='achiever-img resp-img-box'>
                                    <Image loading='lazy' src={AkshayJaiswal}fill={true} sizes='100vw'  className='resp-img' alt=' Akshay Jaiswal, CPA alumni, Placed at Amazon' />
                                </div>
                                <figcaption>
                                    <h3 className='caption-title'>Akshay Jaiswal</h3>
                                    <p>FAR-98 - BEC-96 - REG-96 - AUD-88</p>
                                    <p>CPA Bangalore | Amazon</p>
                                </figcaption>
                            </figure>
                            <div className='partner-logo'>
                                <Image loading='lazy' src={PWCLogo}fill={true} sizes='100vw'  className='resp-img' alt='Our corporate tie up with PWC'/>
                            </div>

                        </div>
                    </div>
                    <div className='right-box'>
                    <div className='row-1'>
                            <figure className='achiever-box'>
                                <div className='achiever-img resp-img-box'>
                                    <Image loading='lazy' src={KanveetSing}fill={true} sizes='100vw'  className='resp-img' alt='Kavneet singh, CPA alumni, placed at EY'/>
                                </div>
                                <figcaption>
                                    <h3 className='caption-title'>Kavneet Singh Hanspal</h3>
                                    <p>US CPA, Delhi, India</p>
                                    <p>EY</p>
                                </figcaption>
                            </figure>
                            <div className='partner-logo'>
                                <Image loading='lazy' src={Kpmg}fill={true} sizes='100vw'  className='resp-img' alt='Our corporate tie up with KPMG'/>
                            </div>

                        </div>
                        <div className='row-1 row-reverse'>
                            <figure className='achiever-box'>
                                <div className='achiever-img resp-img-box'>
                                    <Image loading='lazy' src={SwethaKiran}fill={true} sizes='100vw'  className='resp-img' alt='Swetha Kiran, CPA alumni, Placed at jp morgan'/>
                                </div>
                                <figcaption>
                                    <h3 className='caption-title'>Swetha Kiran</h3>
                                    <p>US CPA, Hyderabad, India</p>
                                    <p>JP Morgan</p>
                                </figcaption>
                            </figure>
                            <div className='partner-logo'>
                                <Image loading='lazy' src={Deloitte}fill={true} sizes='100vw'  className='resp-img img1' alt='Our corporate tie up with Deloitte'/>
                                <Image loading='lazy' src={Ey}fill={true} sizes='100vw'  className='resp-img img2' alt='Our corporate tie up with EY'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RightStep