import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';


const FaqSectionCpaWatt = () => {
 
  return (
    <>
      <section className="section faq-section pt-8">
        <div className="container-l">
          <h3 className="heading02">Frequently Asked Questions(FAQ's)</h3>
          <div className="faq-container">
            <Accordion >

              <Accordion.Item eventKey="0" className='faq-row'>
                <Accordion.Header className="faq-title">What is the Elijah Watt Sells Award?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  
                  <p>The Watt Sells award, named after CPA pioneer Elijah Watt Sells, is presented to candidates who score a cumulative average score of 95.50 or higher in all four subjects of the CPA Course. Also, the candidates must have completed testing during one calendar year and passed all four sections on their first try. </p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="1" className='faq-row'>
                <Accordion.Header className="faq-title">Who is Elijah Watt Sells?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>Sells, one of the first CPAs in the United States, was instrumental in establishing the AICPA and advancing professional education within the field. AICPA coined the award in his name to recognise his contributions.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="2" className='faq-row'>
                <Accordion.Header className="faq-title">When and why was the Elijah Watt Sells Award program established?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>The AICPA established the Elijah Watt Sells Award in 1923 to recognize the exceptional performance of the candidates in the CPA course.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="3" className='faq-row'>
                <Accordion.Header className="faq-title">Who grants the Elijah Watt Sells Award?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>The American Institute of Certified Public Accountants (AICPA) is the United States' primary professional association for Certified Public Accountants (CPAs). It is the regulatory body that monitors the CPA course globally and is responsible for recognising talent by presenting the Elijah Watt Sells Award to candidates.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="4" className='faq-row'>
                <Accordion.Header className="faq-title">How many aspirants in India have received the Elijah Watt Sells Award so far?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>Khushbu Mittal, Sachin Mall, Trishla Mnaiar, Dhruv Patel, Kavneet Hanspal, Simandhar alumni, are the only candidates to bag the Elijah Watt Sells Award from India. </p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="5" className='faq-row'>
                <Accordion.Header className="faq-title">What is the process for receiving the Elijah Watt Sells Award?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>The Watt Sells Award does not need an application. If you are eligible, you will be notified in the spring of the year following your testing.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="6" className='faq-row'>
                <Accordion.Header className="faq-title">What are the qualifications for the Elijah Watt Sells Award?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>You must fulfill  sizes='100vw'  both of the following conditions to be considered for the Elijah Watt Sells Award:</p>
                  <div className="list-unstyled ">
                    <ul>
                      <li>Obtain a cumulative average score of 95.50 on the CPA Exam in all four parts.</li>
                      <li>Pass the CPA Exam in all four parts on the first try.</li>
                    </ul>
                  </div>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="7" className='faq-row'>
                <Accordion.Header className="faq-title">What are the advantages of being awarded the Elijah Watt Sells Award?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>The Elijah Watt Sells Award honours exceptional CPA Exam achievement. This accomplishment can help applicants stand out from other accounting resumes and boost their confidence as registered CPAs.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="8" className='faq-row'>
                <Accordion.Header className="faq-title">What is the number of Elijah Watt Sells Award winners annually?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>The number of Elijah Watt Sells Award recipients is determined by the number of candidates who pass the CPA course and complete the qualifying requirements. The AICPA just announced that 57 candidates for the Elijah Watt Sells Award in 2021 have qualified.</p>
                </Accordion.Body>

              </Accordion.Item>
            </Accordion>
          </div>

        </div>
      </section >
    </>
  )
}

export default FaqSectionCpaWatt;


