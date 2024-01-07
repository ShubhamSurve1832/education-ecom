import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FaqSectionNew = () => {

  return (
    <>
      <section className="section faq-section faq-section-cpa pt-8">
        <div className="container-l">
          <h3 className="heading02">Frequently Asked Questions(FAQ's)</h3>
          <div className="faq-container">
          <Accordion >
            <Accordion.Item eventKey="1" className='faq-row'>
              <Accordion.Header className="faq-title">What is CPA?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>CPA (Certified Public Accountant) is a designation given by AICPA to the individuals who have passed the Uniform CPA exam, met the required and relevant experience. The CPA designation enforces high professional standards in the field of accounting.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className='faq-row'>
              <Accordion.Header className="faq-title">Who are eligible for CPA exam?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Candidates with 120 credits and required accounting and business subject credits are eligible for CPA exam. Contact us to learn more on the eligibility. We provide free eligibility check for all CPA aspirants.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className='faq-row'>
              <Accordion.Header className="faq-title">Can Bcom or Non commerce students eligible for CPA exam ?
              </Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>All Bachelor degree students including Non commerce students are eligible for CPA exam with our Bridge course. Contact us for more details.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className='faq-row'>
              <Accordion.Header className="faq-title">What is the 120 credit and 150 credit rule?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>To be eligible for CPA exam 120 credits are required and for license the candidate needs 150 credits.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className='faq-row'>
              <Accordion.Header className="faq-title">Timeline to complete CPA exam?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Generally the exam can be completed within 12-16 months with proper coaching and study plan. Contact us for more details. </p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6" className='faq-row'>
              <Accordion.Header className="faq-title">Is work experience required to take CPA exam?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>No. Even fresher can take the exam subject to 120 credit rule.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7" className='faq-row'>
              <Accordion.Header className="faq-title">Why is bridge course required?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Our Indian university education gives 30 credits for each year of  study and for CPA exam, a candidate requires a minimum of 120 credits and mandatory accounting and business credits. Those candidate who fall short of either 120 credits or accounting /business credits are required to do bridge course to be eligible for CPA exam.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8" className='faq-row'>
              <Accordion.Header className="faq-title">Can B.tech students eligible for CPA exam?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Yes. With our unique bridge course , Btech and other non commerce graduates are eligible for both CPA exam and licensure. <a href='/contact-simandhar' style={{color: "#f25424"}}> Click <h3></h3>ere </a>to further details.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9" className='faq-row'>
              <Accordion.Header className="faq-title">How many stages/level in CPA exam?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>CPA exams are single level 4 subjects exam and each exam is for 4 hrs. . The subjects are Financial Analysis and Reporting (FAR), Auditing and attestation (AUD ) , Regulations (REG) as 3 compulsory core exams and one discipline to choose from the 3 alternative - Business analysis and reporting (BAR) , Tax compliance and planning (TCP) or Information system and control (ISC)
                </p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="10" className='faq-row'>
              <Accordion.Header className="faq-title">Career opportunities after CPA exam?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>We have dedicated placement team to take care of the opportunities and also we have many tie-up with Big 4s and US MNCs.How to get CPA license  after clearing the exam ?
</p>
                </Accordion.Body>
            </Accordion.Item>

            {/* <Accordion.Item eventKey="11" className='faq-row'>
              <Accordion.Header className="faq-title">How to get CPA license after clearing the exam?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>We have team to support you through the CPA journey right from CPA eligibility check, state board selection, extensive classes, revisions and ultimately applying for CPA license.</p>
                </Accordion.Body>
            </Accordion.Item> */}

            <Accordion.Item eventKey="12" className='faq-row'>
              <Accordion.Header className="faq-title">Can I take exam from INDIA?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>INDIA has 8 permanent prometric centers. The candidate is free to take exam from any of the 8 centers.</p>
                <ul>
                  <li>Ahmedabad</li>
                  <li>Bangalore</li>
                  <li>Calcutta</li>
                  <li>Chennai</li>
                  <li>Hyderabad</li>
                  <li>Mumbai</li>
                  <li>New Delhi</li>
                  <li>Trivandrum</li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="13" className='faq-row'>
              <Accordion.Header className="faq-title">What study material the student should buy?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>We at Simandhar use BECKER review provider which is considered as GOLD Standard and trusted CPA study material across the World. Combined with our State of ART LMS and expert coaching, each and every candidate can pass CPA exam without difficulty.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="14" className='faq-row'>
              <Accordion.Header className="faq-title">When a student can get the CPA license?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>The 3 E's to get CPA license.  </p>
                  <ul>
                    <li><b>Education</b> - 150 credits in accounting or related field from an accredited institution (either from India or overseas) </li>
                    <li><b>Examination</b> - Passing the Uniform CPA exam.</li>
                    <li><b>Experience</b> - A minimum of 2000 hrs work experience.</li>
                  </ul>
                
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="15" className='faq-row'>
              <Accordion.Header className="faq-title">I have no knowledge about accounting or US accounting and tax rules.</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>We provide basic accounting coaching also in addition to extensive CPA coaching so US accounting or tax rule knowledge is not a compulsory requirement.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="16" className='faq-row'>
              <Accordion.Header className="faq-title">I have a huge break from academics. Is it difficult for me to pass CPA exam?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>The course is not at all difficult. With proper planning , dedication and attending  lectures (either live or recorded ) , you can pass the exam without much difficulty</p>
                <p>We have wide range of students from who have just graduate, highly busy working professionals, busy mothers who have come back after a long break of even 10 yrs. or more, new mothers , senior professionals, etc. completed the course with our coaching, study plan and expert mentorship. <a href='/contact-simandhar' style={{color: "#f25424"}}>Click here </a> to learn more.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="17" className='faq-row'>
              <Accordion.Header className="faq-title">Any exemption of CA qualified or ACCA or US CMA or EA?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>As CPA is a single level course, no exemption is given. A student need to pass all 4 papers.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="18" className='faq-row'>
              <Accordion.Header className="faq-title">Total cost for CPA exam.</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>CPA  application registration and CPA exam charges are around  INR 275,145( USD 3,315). These charges are excluding Simandhar coaching and Becker material charges.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="19" className='faq-row'>
              <Accordion.Header className="faq-title">Is it possible to study both CPA exam and bridge course?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>One of the highlight of the bridge course is that the content are similar to CPA exam syllabus. So no extra time is required for bridge course preparation.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="20" className='faq-row'>
              <Accordion.Header className="faq-title">Does Simandhar or Becker provide demo?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Yes Simandhar provide Demo classes and Becker offer 14 days trial access. Please  <a href='/contact-simandhar' style={{color: "#f25424"}}>Click here </a> to know more.</p>
                </Accordion.Body>
            </Accordion.Item>


           
          </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}

export default FaqSectionNew;


