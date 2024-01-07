import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import Footer from "../../../components/footer";
import Header from '../../../components/Header';
import CommonForm from '../../../components/CommonForm';

const News = () => {
  const [isShow, setShow] = useState(false)
  const [buttonText, setButtonText] = useState(false)
  const showData = () => {
    setShow(!isShow)
    setButtonText(!buttonText)
  }
  return (
    <>
      <Head>
      <title>CPA Evolution changes 2024 | clear cpa exam in 2023 | Simandhar Education</title>
        <meta content='what are the cpa evolution changes in 2024, clear 4 cpa subjects far, bec, reg, aud' name='description'></meta>
        <meta content='CPA Breaking news, CPA changes 2024, CPA exam changes 2024, CPA Evaluation, CPA curriculum, CPA Score, CPA, CPA exam, CPA Eligibility, US CPA, CPA 2024, CPA exam evaluation, CPA course changing, New cpa exam blue print' name='keywords'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <link rel="canonical" href="https://simandhareducation.com/course/cpa/breaking-news" />
      </Head>
      <div className='width-50'>
        <Header showData={true} />
      </div>
      <div className='cpa-news-page'>
      
        {/* FOURTH SECTION CPA Evolution/Changes 2024  */}
        <section className='evolution-section'>
          <div className='container-l'>
            {/* <p className='date'>Updated December 29, 2022</p> */}
            <h1 className="heading02 mt-4">CPA Evolution / Changes 2024</h1>
            <p className='mt-4'>The NASBA has released critical details for anyone who is willing to sit for the CPA Exam at the end of the year and beyond. All of the dates listed below might change later, but they are critical to be aware of because they may affect your plans.</p>

            {/* PRE - REVOLUTION */}
            <div className='pre-evolution'>
              <h3 className='heading03'>Pre-CPA Evolution scenario</h3>
              <ul>
                <li>By the end of 2023, the CPA will no longer allow you to take BEC.</li>
                <li>The NASBA Gateway system will no longer process authorisations to Test and Notices to Schedule (NTS) for BEC after November 15, 2023.</li>
                <li>That means that Boards of Accountancy will have to set BEC apppcation deadpnes before then.</li>
                <li>When those dates become available, they will be posted on the NASBA website, and we will keep you updated.</li>
              </ul>
              <h4 className="heading04 ">The deadline to take AUD, FAR, and REG exams before CPA Evolution is December 15, 2023!</h4>
              <p>That means that if you pass all four sections of the CPA Exam before December 15, 2023, none of the other content or administration changes should affe The CPA Exam will not be administered between December 16, 2023 and January 9, 2024, so that testing centers can get ready to administer the 2024 CPA Exam.</p>
            </div>

            {/* post-evolution */}
            <div className="post-evolution">
              <h3 className='heading03'>Post-CPA Evolution 2024 scenario</h3>
              <p>The new exam, which incorporates all of the CPA Evolution changes, will be available beginning January 10, 2024.</p>
              <ul>
                <li>Core sections (AUD, FAR, and REG) will be available until March 26, 2024.</li>
                <li>Authorizations to Test and NTSs for these Core sections will be processed in real time.</li>
                <li>Discipline sections (BAR, ISC, and TCP) will be offered through February 6, 2024.</li>
                <li>Testing authorizations and NTSs for Discipline sections will not be processed until November 22, 2023.</li>
              </ul>
              <p>The Boards of Accountancy are considering extending credit for any sections passed by candidates on January 1, 2024, to June 30, 2025.</p>
              <ul>
                <li>The policy has already been approved by 39 people.</li>
                <li>The NASBA maintains an up-to-date map.</li>
              </ul>
              <p>Accountancy boards are also considering changing the start date of the 18-month rolling window for CPA Exam credit.</p>
              <ul>
                <li>Many boards now use the date a candidate sits for and passes their first section of the CPA Exam.</li>
                <li>The date would be shifted to when NASBA or the state board releases the candidate's passing score.</li>
              </ul>
            </div>

            {/* ABOUT  */}
            {/* <div className='about'>
              <div className="heading03">
                All about CPA Evolution
              </div>
              <div> */}
                {/* <p className='about-title'>The root causes</p> */}
                {/* <p>The CPA Evolution initiative has been taken into consideration as it modernizes the CPA licensure model to highlight the skills and competencies needed to practice accounting today and in the near future. Evolution introduces a new CPA Exam that tests a particular skill set required by all the candidates, as well as a chosen Discipline in which they can demonstrate their skills and knowledge in detail. The new CPA Exam will still be 16 hours long and will be divided into four sections, three core and one discipline.</p>
              </div>
              <div>
                <p className='about-title'>The background</p>
                <ul>
                  <li>The AICPA and NASBA announced an initiative in June 2019 to update the CPA Exam to meet the increasing demands placed on newly-licensed CPAs.</li>
                  <li>The NASBA Board of Directors unanimously approved the CPA Evolution initiative on July 27, 2020.</li>
                  <li>In May 2020, the AICPA's Governing Council enthusiastically supported the initiative.</li>
                  <li>The AICPA started working with academia in 2021 to ensure that students are well prepared for changes in education requirements when they are implemented.</li>
                </ul>
              </div>
            </div> */}

            <div>
              <h3 className='heading03'>What is the need of CPA Evolution / Changes 2024?</h3>
              <p>The unique "CORE plus Discipline" framework is intended to demonstrate that CPAs have the in-depth knowledge required to perform professional requirement. This also demonstrates the reality of most methods that concentrate on a single important area of accounting instead of all of them simultaneously. This model will enable the AICPA to easily include or exclude Disciplines in order to accurately recognise practice as it evolves.</p>
              <p>Irrespective of which discipline a candidate tests in, once they obtain their CPA licence, they will be able to practice in any area.</p>
            </div>

            <div>
              <h3 className='heading03'>When will the CPA Evolution take place?</h3>
              <p>The new CPA Exam will be available on January 10, 2024. That is when you will be able to take segments of the new and improved CPA Exam pattern.</p>
            </div>

            <div>
              <h3 className='heading03'>2024 CPA sneak-peek!</h3>
              <p>The existing AUD, FAR, and REG segments will be renamed "Core," and all candidates will be required to pass them in order to pass the CPA Exam. The current BEC section, on the other hand, is being phased out. Candidates will choose one of three new "Discipline" sections to demonstrate deeper skills and knowledge in place of BEC.</p>
              <p>The new CPA Exam Discipline sections are as follows:</p>
              <ul>
                <li>Business Analysis and Reporting (BAR)</li>
                <li>Information Systems and Controls (ISC)</li>
                <li>Tax Compliance and Planning (TCP)</li>
              </ul>
              <p>The management of the new CPA Exam is anticipated to remain largely unchanged: it will still take the same 16 hours as it does now and will be divided into four sections.</p>
              <p>Accounting students should be aware of the exam's educational requirements. They have not yet changed, but in June 2021, a new model for an accounting curriculum in line with the CPA Evolution updates was unveiled.</p>
              <p>We recommend that candidates complete their CPA studies as soon as possible to avoid having to account for these changes.</p>
            </div>

            <div>
              <h3 className='heading03'>Things to know about 2024 CPA Exam</h3>
              <p>The AICPA released an Exposure Draft (ED) containing tentative CPA Evolution Blueprints for public comment on June 28, 2022, giving the public their first look at the content coming to the CPA Exam in 2024.</p>

              <p>In addition to the draught Uniform CPA Examination Blueprints, the ED presents the findings and conclusions of the AICPA's Practice Analysis, which was used to draught the blueprints and was overseen by the Board of Examiners.</p>

              <p>The Practice Analysis was designed to identify the technical knowledge and critical skills required of newly licensed CPAs, so the Evolution Blueprint draught is the first look at how the new CPA Exam is addressing the accounting skills gap and ensuring the CPA Certification remains the gold standard in the accounting world.</p>

              <p>The Evolution blueprints include not only the content (represented by representative task statements for each exam section), but also the proposed number of questions, how the AICPA intends to weight the content on the new CPA Exam, and the critical skills assigned for testing on each exam section.</p>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default News