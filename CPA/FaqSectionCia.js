import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FaqSectionCia = () => {

  return (
    <>
      <section className="section faq-section faq-section-cia pt-8">
        <div className="container-l">
          <h3 className="heading02">Frequently Asked Questions(FAQ's)</h3>
          <div className="faq-container">
            <Accordion >
              <Accordion.Item eventKey="0" className='faq-row'>
                <Accordion.Header className="faq-title">What is CIA?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Certified Internal Auditor CIA is a globally recognized certification offered to Internal Auditors wherein the Certified Internal Auditor designation is conceded by the Institute of Internal Auditors (IIA)</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className='faq-row'>
                <Accordion.Header className="faq-title">In how many languages CIA exam can be given?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>CIA exam can be given in 14 languages, for more details <a href="https://na.theiia.org/certification/CIA-Certification/Pages/cia-exam-why-and-how-its-changing.aspx" target='blank' className="click-here">Click Here</a></p>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="2" className='faq-row'>
                <Accordion.Header className="faq-title">Supporting Requirement Exemptions</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Professional Certification Board (PCB) has approved work experience and education exemptions for Association of Chartered Certified Accountants (ACCA) qualified members and an education exemption for U.S. Certified Public Accountant (CPA) active license holders pursuing the CIA certification. The supporting requirement exemptions were granted by the PCB because the experience and education requirements for ACCA members and education requirements for U.S. CPAs meet and/or exceed these requirements for the CIA program.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className='faq-row'>
                <Accordion.Header className="faq-title">Mode of CIA exam?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>CIA is computer based exam.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className='faq-row'>
                <Accordion.Header className="faq-title">When can I reschedule for the exam in case I don’t clear them in the first attempt? </Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>You can reschedule after 90 days from the day you get the result of that paper.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className='faq-row'>
                <Accordion.Header className="faq-title">What is the Exam pattern?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <div className="list-unstyled ">
                    <ul>
                        <li>Part 1 : 2hrs 30Min<b className="bold">125 MCQ’s</b></li>
                        <li>Part 2 : 2hrs <b className="bold">100 MCQ’s</b></li>
                        <li>Part 3 : 2hrs<b className="bold">100 MCQ’s</b></li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6" className='faq-row'>
                <Accordion.Header className="faq-title">What is the best way to clear the CIA exam?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>The best way to clear the CIA exam is practicing questions in real time. As the questions are set to test the candidate’s understanding and interpretation. Therefore you should focus more on the MCQ’s itself rather than the textbook knowledge.</p>
                  <p>Wiley is the best platform that provides good test bank, practice this you will be more than prepared.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7" className='faq-row'>
                <Accordion.Header className="faq-title">Which part of the CIA is the hardest?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>These are likely the easiest parts of the CIA exam to take first, depending on your personal familiarity with the concepts. The broader and more conceptual Part 3 is often considered the hardest of all the sections. So, your best option would be to take it first if you're more comfortable with its lineup of topics.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8" className='faq-row'>
                <Accordion.Header className="faq-title">Is that possible to reschedule CIA exam?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Yes, student can reschedule CIA exam prior to 48 hours before your original appointment time. To do so, you must contact Pearson VUE. Pearson VUE is the company that administers the CIA exam on behalf of the Institute of Internal Auditors (IIA). If you don’t reschedule through Pearson VUE before you only have 48 hours until your appointment, then you will receive a “No-Show” status for your appointment and must pay the full CIA exam fee when you register for another appointment.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          </div>
        </section>





            
    </>
  )
}

export default FaqSectionCia;


