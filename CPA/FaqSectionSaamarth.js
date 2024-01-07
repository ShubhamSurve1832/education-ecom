import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FaqSectionSaamarth = () => {

  return (
    <>
      <section className="section faq-section pt-8">
        <div className="container-l">
          <h3 className="heading02">Frequently Asked Questions(FAQ's)</h3>
          <div className="faq-container">
          <Accordion >
            <Accordion.Item eventKey="1" className='faq-row'>
              <Accordion.Header className="faq-title">What is FNF? </Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Finance for NonFinance Course is dedicated to training accounting aspirants to help them secure their dream jobs. FNF includes key accounting concepts revision, soft skills training, resume building sessions, and grooming sessions.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='faq-row'>
              <Accordion.Header className="faq-title">Who can attend FNF? I am not a student/alumni of Simandhar? Am I eligible? </Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>FNF is open to both Simandhar student/alumni and non-Simandhar student. Any accounting aspirant who wants to build a prospective career in the finance and accounting fields can attend FNF.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className='faq-row'>
              <Accordion.Header className="faq-title">What will I get from FNF? </Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>FNF will improve your overall skillset and confidence level to get your dream job in the BIG 4. By the end of this workshop, you will understand what interviewers will expect from the candidates and prepare accordingly. You can also attend exclusive placement drives conducted by Simandhar in collaboration with BIG 4 and other Top MNCs.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className='faq-row'>
              <Accordion.Header className="faq-title">What is the fee for FNF? </Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>FNF fee is Rs. 15,000/- inclusive of taxes (validity of one year)</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className='faq-row'>
              <Accordion.Header className="faq-title">As a non-Simandhar student, I am paying Rs. 15000. What benefits will I get from FNF? </Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>On successful completion of FNF, you will be recognized as Simandhar alumni. You will get life-long career guidance and mentorship. We will also provide placement support or guidance.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className='faq-row'>
              <Accordion.Header className="faq-title">I am a non-Simandhar student/alumni. Will I get access to offline recorded videos of CPA, CMA, and other courses?   </Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>No, the access to offline recorded videos of CPA, CMA, and other courses are only limited to Simandhar students. You will have to enroll for a course with us to get access to the recorded videos.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className='faq-row'>
              <Accordion.Header className="faq-title">What are the ways Simandhar will support me in placements?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Simandhar has a strong network of exclusive corporate relationships with the BIG 4 such as Deloitte, EY, KPMG, PwC, and other Top MNCs. We have partnered with many companies for recruitment. You will be eligible for these exclusive placement drives. You will be mentored and have mock interviews before attending the real-interview to help you get your dream job.</p>
                </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}

export default FaqSectionSaamarth;


