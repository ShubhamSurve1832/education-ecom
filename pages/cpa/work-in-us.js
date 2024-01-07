import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import Header from '../../components/Header'
import Footer from "../../components/footer";
import Accordion from 'react-bootstrap/Accordion';
import Video from '../../home/workinus'
import dynamic from "next/dynamic";
const Dreamdownload = dynamic(() => import('../../contentpartner/dreamworkinus')) 

const workInUs = () => {

  var partnerSlider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  

  return (
    <>
      <Head>
        <title>Become CPA, Work in US: Simandhar CPA course | CPA institute</title>
        {/* Refer our CPA, CMA, or EA courses to 12 of your friends and win an iPad | Simandhar Education */}
        <meta name="title" content=" " />
        <meta name="description" content="Clear US CPA exam and earn Masters from top US universities. Get 100% assistance to work in the US for 3 years, salaries starting at $60,000" />
        <meta name="keywords" content="cpa, us cpa, us cpa course, us cpa exam, us cpa eligibility, stem programs in usa, STEM Courses in USA, stem courses, MS in Finance, ms accounting, masters in finance, big 4, mnc, us jobs"/>
        <link rel="canonical" href="https://simandhareducation.com/cpa/work-in-us" />
      </Head>
      {/* <Header showData={true} /> */}
      <Header />
      <main>
        <section className='work-banner-section work-com-section'>
          <img src="/img/work-in-us-banner.jpg" alt="Accelerate your accounting carrer" />
        </section>
        <section className="section dreams-section work-com-section">
          <div className="container-l">
            <h2 className="heading02">Dreams do come true!</h2>
            <h6 className="heading06">Finance &amp; Accounting candidates can now study and work in the USA on OPT and gain work experience. Simandhar is reinventing the global accounting revolution. Do you know, How?</h6>
            <p>Master&#39;s in Finance/Accounting courses are usually categorised as non-STEM courses
              and offer only a one-year work permit. However, Simandhar has collaborated with
              US university partners that have incorporated Business Analytics into its Master&#39;s in
              Finance/Accounting programs, which have now been classified as STEM programs
              (Science, Technology, Engineering, and Mathematics). As a result, graduates of these
              programs from Simandhar are now eligible for a three-year work permit (OPT). This
              in turn creates a large talent pool of US CPAs which will then take care of the main
              problem statement of the acute shortage of accountants. (As per the 2021 AICPA
              report).</p>
              <Dreamdownload/>
          </div>
        </section>
        
        <section className='section pt-0 work-com-section'>
          <div className="container-l">
            <h1 className="heading02">Why should you choose us?</h1>
            <p>Simandhar provides placement assistance for all students who are in India and USA.
              Since we are tied up with the Big 4 and with more than 100 TOP MNCs in the finance
              and accounting industry. This makes it easier for us to network and place the right
              candidate with the right skill set.</p>
            <p>Simandhar makes it easy for students to get their Admit letter and Admission to the
              right &#39;best fit&#39; university. We have carefully selected the right universities based on
              accreditation, location, cost of attendance, curriculum and campus recruitment
              opportunities. We also have placement support agents in the Unites States.</p>
            <p>Simandhar has partnered with Universities offering Master’s programs that are
              STEM designated. This allows international students to gain work experience in their
              related accounting and /or finance fields.</p>
          </div>
        </section>
        <section className='cp-image'>
          <div className="container-l">
            <img src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Simandhar-Career-Pathway.jpg" alt="work in USA banner" />
          </div>
        </section>
        <section className='section work-com-section'>
          <div className="container-l">
            <h2 className="heading02">University Partnerships</h2>
            <h6 className="heading06">Get your Admission into any of our University partners offering MS in Accounting, MS in Finance and/or MS in Analytics - STEM certified degree programs with 3 year OPT. </h6>
            <div className="work-slider">
              <Slider {...partnerSlider}>
              <div className='part-box'>
                  <img loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/MicrosoftTeams-image+(9).png" alt="university" />
                </div>
                <div className='part-box'>
                  <img loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/MicrosoftTeams-image+(8).png" alt="university" />
                </div>
                <div className='part-box'>
                  <img loading='lazy' src="/img/university-1.jpg" alt="university" />
                </div>
                <div className='part-box'>
                  <img loading='lazy' src="/img/university-2.jpg" alt="university" />
                </div>
                {/* <div className='part-box'>
                  <img loading='lazy' src="/img/university-3.jpg" alt="university" />
                </div> */}
                <div className='part-box'>
                  <img loading='lazy' src="https://simandhar-edu-assets.s3.ap-south-1.amazonaws.com/ACCA+Course/Devner-Logo-300x300.jpg" alt="university" />
                </div>
                <div className='part-box'>
                  <img loading='lazy' src="/img/university-5.jpg" alt="university" />
                </div>
                {/* <div className='part-box'>
                  <img loading='lazy' src="/img/university-6.jpg" alt="university" />
                </div> */}

              </Slider>
            </div>
            <p>Selecting the right US University can be a daunting task and critical. With more than 4500+ accredited universities  students can get perplexed in shortlisting the right universities which are offering the right degree programs in Accounting and Finance domain. But don&#39;t worry we have a special US Higher education counselling cell who has your back covered. From basic counselling to getting your VISA, we have got you covered. </p>
          </div>
        </section>
        <div className='ea-video-section'>
        <Video />
      </div>
        <section className="section faq-section faq-section-cia pt-5">
          <div className="container-l">
            <h3 className="heading02">Frequently Asked Questions(FAQ's)</h3>
            <div className="faq-container">
              <Accordion >
                <Accordion.Item eventKey="0" className='faq-row'>
                  <Accordion.Header className="faq-title">What is the Simandhar Career Pathway?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>The Simandhar career pathway is pretty simple and direct, without any confusion. Aspiring students who are already enrolled or planning to enroll in the CPA course at Simandhar are now entitled to get complete guidance to pursue their MS or Master's degree in the United States. There are certain accredited programs and STEM-designated MS degree programs that are being offered in accounting and finance streams. So students can choose this path in order to get a qualified Master's degree in the US and also have the opportunity to study CPA in parallel and appear for the exams there. Most of the MS degree programs, such as MSA-MS in Accounting, also cover CPA subjects. This provides enhanced CPA prep, and they also get to learn some of the latest data analytics, accounting analytics, etc. This not only voids the heavy international fees, but aspirants can now get complete eligibility to appear for the CPA exam and/or get their license. In order for them to get a license, candidates should have practical, consecutive work experience. This can come in the form of an OPT after they graduate from their MS program. The above diagram illustrates the career pathway in detail.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className='faq-row'>
                  <Accordion.Header className="faq-title">What is the meaning of STEM?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>STEM stands for Science, Technology, Engineering, and Mathematics. It is an acronym used by federal and state governments in the US to categorize and group together fields of study and career paths that are centered on the above four disciplines. STEM education and careers are characterized by their emphasis on problem-solving, critical thinking, innovation, and the application of scientific, technological, and mathematical principles to real-world problems and scenarios.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className='faq-row'>
                  <Accordion.Header className="faq-title">What is STEM accounting?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>Degree programs in the USA that can be classified as STEM, such as MS in Accounting or MS in Accounting, aim to establish a solid foundation for students in the areas of science, technology, engineering, and mathematics. These programs equip students with the skills required for several career paths, such as accounting analytics and the inclusion of the latest emerging software such as SAP, PowerBI, Tableau, etc. Typically, a master's degree program is one year long and would be around 30 credits.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='faq-row'>
                  <Accordion.Header className="faq-title">What is the earning potential after completing the Masters in Accounting program?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>Typically, the median wage for a graduate student who has completed their MS program may vary from state to state, but on average, the salaries could range anywhere from USD $55,000 to USD $75,000. However, if the candidate has completed his masters with more than 2 years of work experience and completed his or her CPA certification, he or she can earn up to USD $90,000 to even USD $100,000 based on their experience.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='faq-row'>
                  <Accordion.Header className="faq-title">Is there a shortage of accountants in the US?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>Yes, there is an immediate shortage, and it can be researched using reliable resources like WSJ. Please refer to the below link:<a href='https://www.wsj.com/articles/why-so-many-accountants-are-quitting-11672236016' target='new'>Click here</a></p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className='faq-row'>
                  <Accordion.Header className="faq-title">Why does Simandhar emphasize "work abroad"?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <div className="list-unstyled ">
                      <p>Simandhar's main aim is to impart high-quality education and give them placement opportunities. We believe that education has the ability to transform every individual. Today's students don’t just need information to be educated; they need an overall transformation to be successful in life. Since CPA is conducted by the AICPA in the US and has immense benefits, Simandhar is creating a pathway for aspiring students to clear their exam and even get their certification and licensing. The licensing for US CPAs could come from any state board in the US. Similarly, ACCA has benefits in the UK and India. Similarly, CPA Australia or CPA Canada have immense benefits for people who are in these regions. Hence, Simandhar strives to open new frontiers of education anywhere abroad. Moreover, US CPA is globally recognized and can land your dream job anywhere.</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6" className='faq-row'>
                  <Accordion.Header className="faq-title">Why should I go to the US?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>There are countless reasons why you should consider going to the US.
Firstly, the United States is undoubtedly the number one destination for education in STEM fields. (Science, Technology, Engineering, and Mathematics) With state-of-the-art educational infrastructure, facilities, and educational environment, learning from faculty who are among the finest in the world, not to mention the practical training and exposure that you get, is unmatched. This is why so many people, from China to India, flock to the US every year for education. This also brings in many other benefits, such as achieving financial stability, expanding your career prospects, exploring global opportunities and research, and, of course, upskilling yourself with the latest technological advancements. What more do you need?</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7" className='faq-row'>
                  <Accordion.Header className="faq-title">Can my spouse and kids accompany me to the US?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>Yes, surely you can. Since you are going on an F1 student visa when you go for your higher studies in the US, your dependents can go on an F2 visa. You may have to show proof of funds that are adequate for both dependents. There will be additional living expenses that the student on F1 would incur (for dependents) while studying. To name a few, housing, health insurance, living expenses, food, medicines, possible day care costs, etc.)</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8" className='faq-row'>
                  <Accordion.Header className="faq-title">I am pursuing my CA now. Can I do the MACC program?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>Yes, you can definitely do that. It depends on the skills, goals, and needs of the CA student. A CA student can decide to make a quick transition to pursue his MS degree program and parally prepare for CPA and clear that easily. Since 70% of the CPA course is taught while pursuing Indian CA, it is quite easy for CA students to crack US CPA. Moreover, the MS in Accounting also covers a lot of topics in the curriculum related to CPA and prepares them to be eligible to take the exam there.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9" className='faq-row'>
                  <Accordion.Header className="faq-title">I have already completed my US CPA (not from Simandhar). Can I still do the MSA or MSACC program?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>Yes, you can. You do not have to be enrolled in the CPA program with Simandhar to pursue your MS program. All are welcome to pursue their Masters; however, for Simandhar students (and Aluumni), we provide free assistance and guidance up until the VISA stage. For others, additional charges may be applicable. Feel free to inquire with us by calling us at: 91 7780273388 or +91 7032228391.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10" className='faq-row'>
                  <Accordion.Header className="faq-title">I have just enrolled in the CPA program. Do I need to complete my CPA before I enroll in the MSAcc program?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>Simandhar highly recommends passing at least one exam in India before commencing your Masters in Accounting program in the US. This not only gives you a sense of achievement but also enables you to dedicate more time towards enhancing your career prospects. However, we have seen many students who are qualified working professionals or candidates with good fundamental concepts (after learning CA inter or CA final) breeze through and prepare for and clear the US CPA exams while pursuing their Masters. This will save time and enhance career opportunities and placements.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11" className='faq-row'>
                  <Accordion.Header className="faq-title">How many students is Simandhar sending to the US and Canada?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>Simandhar Education has a global alumni network that extends beyond the United States and Canada, with graduates placed in various countries worldwide. With a proven track record of success, Simandhar is committed to providing thousands of students with opportunities, from networking to placements. We motivate everyone to pursue their academic and career aspirations in the United States and around the world. To begin with, we have started with the United States for many reasons already mentioned.</p>
                  </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="12" className='faq-row'>
                  <Accordion.Header className="faq-title">Is this only for CPA review students, or can CMA review students apply too?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>It is for anyone who wants to study in the US. For US CMA students and EA students, they may have an added advantage since they are pursuing US professional courses; however, anyone who is qualified and eligible to pursue their MS in the USA and are welcome to apply to any of our partnered universities. Please check your eligibility with MS STEM team before applying and attend the informational webinars that are conducted by direct university panelists.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="13" className='faq-row'>
                  <Accordion.Header className="faq-title">What is the selection criteria for US universities? Is it very tedious?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>Although it can be a bit daunting to shortlist from 4500 accredited institutions in the United States, Simandhar has your back covered. We have done our due diligence and researched the right universities that are offering STEM-designated programs with the latest emerging technology and analytics involved in the curriculum. So now, candidates who want to pursue it get the best-fit institutes based on four major factors: cost, location, accreditation, and placements. This is why Simandhar is making a difference by partnering with the right universities and, ultimately, by enhancing and transforming their careers.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="14" className='faq-row'>
                  <Accordion.Header className="faq-title"> What is the total investment required to pursue the Masters STEM program?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>Usually the range is from USD 40,000 to USD 70,000/-. The cost of the Masters program can vary depending on various factors such as ranking of the university, location, etc., but we do not go by ranking but rather see what is best fit for the candidate considering all the major factors. Finally, we ensure that candidates find the best-fit institute and are happy with their selection.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="15" className='faq-row'>
                  <Accordion.Header className="faq-title"> If I need my CPA to get a job in the US, why should I pursue MACC?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>Why fear when Simandhar is here! <br /><br />
                    For B.Com students, it opens a new path to pursue their Masters. 15 years of education may be accepted, but again, it depends on the university selection. CPA alone is not the only reason for getting a job in the USA. The STEM program also aids in landing jobs, and you also get the all-important VISA extension for up to 3 years. You can also opt for the important practical training and work experience that you get. (during your OPT period). Furthermore, you also have a higher Master's degree from an accredited university in the USA. This degree itself can make an impact in getting a job and the work permit; however, CPA does increase the placement chances and will count as evidence of professional accounting success.</p>
                  </Accordion.Body>
                </Accordion.Item>

                {/* <Accordion.Item eventKey="16" className='faq-row'>
                  <Accordion.Header className="faq-title">What is the total investment required to pursue the MACC program?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>The cost of the MAcc program is approximately $40,000, but it may vary depending on certain factors.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="17" className='faq-row'>
                  <Accordion.Header className="faq-title">If I need my CPA to get a job in the US, why should I pursue MACC?</Accordion.Header>
                  <Accordion.Body className="faq-box">
                    <p>At Simandhar Education, we often say "if CPA is your Passport, MAcc is your VISA." This is because by obtaining your MAcc, you can secure a 3-year work OPT and gain access to job opportunities in the US, making it a guaranteed pathway for a career in the US.</p>
                  </Accordion.Body>
                </Accordion.Item> */}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default workInUs