import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image";
import { IoCaretForward } from "react-icons/io5";
import { AiFillStar } from 'react-icons/ai';
import axios from 'axios'
import _ from 'lodash'
import Header from '../components/Header';
import Footer from '../components/footer';
import { urlConstants as urlConstant } from '../constants/urlConstants'


import dynamic from "next/dynamic";
// const Header = dynamic(() => import('../components/Header'))
// const Footer = dynamic(() => import('../components/footer'))
const CommonForm = dynamic(() => import('../components/refrralForm'))

// import Header from '../components/Header'
// import Footer from "../components/footer";
// import CommonForm from '../components/CommonForm'
const referralPage = () => {
    const [isShow, setIsShow] = useState(false)
    const showPopup = () => {
        setIsShow(!isShow)
    }



    const [corporateLogo, setCorporateLogo] = useState({
        corporateLogo: {},
    });
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.corporateLogos,
            responseType: "json",
        })
            .then((res) =>
                setCorporateLogo((prevState) => ({
                    corporateLogo: res.data.CorporateLogos,
                }))
            )
            .catch((err) => console.log("error is ", err.message));
    }, []);
    let lists = _.get(corporateLogo, "corporateLogo.lists", [])
    // console.log("hhiii", lists)
    return (
        <>
            <Head>
              <title>Refer our CPA, CMA, or EA courses to 12 of your friends and win an iPad | Simandhar Education</title>
              <meta name="title" content=" Refer our CPA, CMA, or EA courses to 12 of your friends and win an iPad | Simandhar Education"/>
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
              <meta name="description" content="Refer our CPA, CMA, or EA courses to 12 friends and be entered to win an iPad! Sign up now with Simandhar Education and start referring today."/>
              <meta name="keywords" content="CPA courses, CMA courses, EA courses, referral program, win an iPad, expert-led courses, professional knowledge, refer a friend, refer and earn"/>
            </Head>
            <Header />
            {/* <div className='event-header'>
                <div className='container-l'>
                    <div className='logo'>
                        <Link href='/'>   <Image loading='lazy' src="/img/logo.png" fill={true} sizes='100vw' className="resp-img" alt="Simandhar logo" /></Link>
                    </div>
                    <div className='reg-btn'>
                        <button className='btn maroon-btn' onClick={showPopup}>
                        Refer Now
                        </button>
                    </div>
                </div>
            </div> */}
            <section className='section referal-section'>
              <div className="container">
                <div className="referal-left">
                  <h2 className="heading04">Refer and Earn</h2>
                  <p>For your friends who successfully enroll!</p>
                  <h3 className="heading06">Refer our CPA, CMA or EA courses to your friends and win exciting prizes.</h3>
                  <span className='ref-img'><img src="/img/referral.jpg" alt="" /></span>
                </div>
                <div className="referal-right">
                  <h3 className="heading04">Sign up to earn</h3>
                  <h5 className="heading06">Not a student of Simandhar, we've still got you covered with easy voucher payout *</h5>
                  <button className='btn maroon-btn' onClick={showPopup}>
                    Start Referring
                  </button>
                </div>
              </div>
            </section>
            <section className='section pt-0'>
              <div className="container">
                <p className='justify'>Are you interested in advancing your career in accounting? Do you know someone else who is also interested? Then you won't want to miss our exciting referral program! Refer our CPA, CMA or EA courses to your friends, and you could win an exciting referral bonus! That's right – simply spread the word about our comprehensive courses to your friends, family, and colleagues, and you could be the lucky winner. At Simandhar Education, we're committed to providing our students with the highest quality education and resources, so they can excel in their careers. Our CPA, CMA, and EA courses are designed to help you pass your exams with confidence, and we're confident that you'll love our courses as much as we do. So why not share the benefits of our courses with your friends and family? Not only will you be helping them achieve their career goals, but you'll also have the chance to win an amazing prize. Plus, the more people you refer, the greater your chances of winning! To get started, simply fill out the form with details of your friends and family. When your friend signs up for our course, you'll be eligible to win the prize! Thank you for choosing Simandhar Education for your accounting education needs. We look forward to helping you and your friends achieve success!</p>
              </div>
            </section>

            <section className="section how-earn-section">
              <div className="container">
                <h2 className="heading02 text-center">How to earn?</h2>
                <div className="earn-container">
                  <div className="earn-box">
                    <i><img src="/img/telegram-app.png" alt="" /></i>
                    <h6 className="heading06">Sign up & Share</h6>
                    <p>Fill up & Share: Fill the given form and share our courses with your friends</p>
                  </div>
                  <div className="earn-box">
                    <i><img src="/img/money-bag-yen.png" alt="" /></i>
                    <h6 className="heading06">Earn Final Payment</h6>
                    <p>After successful enrollment, you are eligible to win your prize.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="section ref-frd-section">
              <div className="container">
                <h3 className="heading04">Refer friends and get:</h3>
                <ul>
                  <li>Vouchers worth Rs 5,000/- for US CPA</li>
                  <li>Vouchers worth Rs 1,500/- for US CMA</li>
                  <li>Vouchers worth Rs 1,000/- for EA</li>
                </ul>
                <p className='note'><strong>Note: </strong> Terms & Conditions applied</p>
              </div>
            </section>
            
            

            <section className='excite-section'>
                <div className='container'>
                    <h2 className='heading04'>Excited to Refer?</h2>
                    <button className='btn white-btn white-btn-arrow' onClick={showPopup}>Refer Now</button>
                </div>
            </section>
            <div className="popup-overlay" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></div>
            <div className='event-popup' style={{ display: isShow ? 'block' : 'none' }}>
                {/* <h6>Fill Your Details</h6> */}
                <button className="close-evnt" style={{ display: isShow ? 'block' : 'none' }} onClick={showPopup}></button>
                <CommonForm showTitle showRadioStatus={true} showcourse={true} formName="Referral Page" setCourse="CPA" />
            </div>
            <Footer />

        </>
    )
}

export default referralPage