import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';


const FaqSectionEa = () => {

  return (
    <>
      <section className="section faq-section  faq-section-ea pt-8">
        <div className="container-l">
          <h3 className="heading02">Frequently Asked Questions(FAQ's)</h3>
          <div className="faq-container">
            <Accordion >
              <Accordion.Item eventKey="0" className='faq-row'>
                <Accordion.Header className="faq-title"> What is an Enrolled Agent (EA)?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>An Enrolled Agent (EA) is the only federally licensed tax practitioner specializing in all areas of taxation. Enrolled Agents represent taxpayers before the Internal Revenue Service (IRS) for tax issues, including audits, collections and appeals.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className='faq-row'>
                <Accordion.Header className="faq-title">How many parts does EA consist of?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>EA contains 3 parts</p>
                  <div className="list-unstyled ">
                    <ul>
                      <li>Individuals</li>
                      <li>Businesses</li>
                      <li>Representation, practices & procedures</li>
                    </ul>
                  </div>
                  <p>You can take all 3 together but it is suggested to go for 1 paper compared to three at a time.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="2" className='faq-row'>
                <Accordion.Header className="faq-title">How many times can a student take 1 paper in a year?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>Each paper can be taken 3 times in a year</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="3" className='faq-row'>
                <Accordion.Header className="faq-title">Is EA a self preparing course?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>It is best if you take assistance in the form of a coaching class than going for self-preparation because coaching classes help you to cover the topic in detail and gives a lot of practical examples to ensure that you are well prepared for the exams.</p>
                  <p>Simandhar Education is one of the best coaching institute based in Hyderabad that impacts some quality education for aspirants who wish to become EAs. Do visit there website <a href="www.simandhareducation.com" className="click-here">Click Here</a></p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="4" className='faq-row'>
                <Accordion.Header className="faq-title">What includes in EA training?       </Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>The enrolled agent training includes IRS regulations, tax law related matters, and various situations related to the taxpayer. And most importantly, how the best and most effective outcome could be obtained for the taxpayer.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="5" className='faq-row'>
                <Accordion.Header className="faq-title">Is it suggestible to write all 3 exams in one day? </Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>No, It is suggested to take 1 paper at a time.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="6" className='faq-row'>
                <Accordion.Header className="faq-title">When are the exams conducted? Are they conducted in India?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>Because of covid19 pandemic issues exams are conducted in AUG & NOV’2020.</p>
                  <p>Yes EA exams are conducted in India in all the metro cities for further information find the below link</p>
                  <p><a href="https://www.prometric.com/test-takers/search/irs" className="click-here">Click Here</a></p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="7" className='faq-row'>
                <Accordion.Header className="faq-title">What is the time to complete all Three papers of the EA exam?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>It should be completed within 2 years from the date of completion of the first exam.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="8" className='faq-row'>
                <Accordion.Header className="faq-title">How do you become an Enrolled Agent ?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>Each paper can be taken 3 times in a year</p>
                  <div className="list-unstyled ">
                    <ul>
                      <li>Obtain a Preparer Tax Identification Number;</li>
                      <li>Apply to take the Special Enrollment Examination (SEE);</li>
                      <li>Achieve passing scores on all 3 parts of the SEE;</li>
                      <li>Apply for enrollment;</li>
                      <li>Pass a suitability check, which will include tax compliance to ensure that you have filed all necessary tax returns and there are no outstanding tax liabilities; and criminal background.</li>
                    </ul>
                  </div>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="9" className='faq-row'>
                <Accordion.Header className="faq-title">What is the Special Enrolment Exam (EA Exam)?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>The IRS selected Prometric to develop and administer the EA exam. The Exam Content Outlines (ECOs) and test questions were developed based on the survey's findings. The different parts of the exam can be taken in any order. Each year, some changes should be expected from prior examinations as emphasis shifts based on subsequent findings and since tax laws are passed or repealed.</p>
                  <p>The only requirement is that applicants must pass all three sections in order to earn the EA certification. Prometric maintains a website where candidates can learn more about the SEE and register for the test.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="10" className='faq-row'>
                <Accordion.Header className="faq-title">How much does it cost to take the Special Enrollment Examination (SEE)?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>There is a $203.00 fee per part paid at the time of appointment scheduling. The test fee is non-refundable and non-transferable.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="11" className='faq-row'>
                <Accordion.Header className="faq-title">What are IRS requirements to be Certified as Enrolled Agent (EA)?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p><b className="bold"> Education &amp; Experience:</b></p>
                  <p>There isn't any particular educational or experience requirement for the exam. However, candidates should be proficient in answering income and tax accounting questions.</p>
                  <p><b className="bold">Examination:</b></p>
                  <p>You need to pass all three exam parts within a period of 2 years. You must have a Preparer Tax Identification Number (PTIN) renewed within the last year in order to register for the examination successfully.</p>
                  <p><b className="bold">Ethics:</b></p>
                  <p>You need to pass a suitability check which includes both a tax compliance check and a criminal background check. In order to maintain your designation, you would need to complete 2 hours of ethics continuing professional education each year after you pass your exam.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="12" className='faq-row'>
                <Accordion.Header className="faq-title">What are the basics that one needs to follow to become an EA?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <div className="list-unstyled ">
                    <ul>
                      <li>Become completely knowledgeable about the EA Exam.</li>
                      <li>Applicants must obtain or review a PTIN.</li>
                      <li>Schedule your EA exam.</li>
                      <li>Prepare your study schedule for the EA exam.</li>
                      <li>Take the Exam.</li>
                    </ul>
                  </div>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="13" className='faq-row'>
                <Accordion.Header className="faq-title"> What are the benefits of becoming an EA?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <div className="list-unstyled ">
                    <ul>
                      <li>Being an EA gives one the opportunity to grow and move forward in their career.</li>
                      <li>Being an EA increases your earning potential by an average of 10%.</li>
                      <li>It is a prestigious credential and therefore, will, in turn, earn the respect of others.</li>
                      <li>Helps you establish your expertise and improve your accounting skills and knowledge.</li>
                      <li>Will help you with your personal as well as professional development.</li>
                    </ul>
                  </div>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="14" className='faq-row'>
                <Accordion.Header className="faq-title">Why should one become an EA?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>Practice before the IRS includes all matters related to presentations for the IRS, regarding client's rights, privileges and liability under laws and regulations that are administered by the IRS.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="15" className='faq-row'>
                <Accordion.Header className="faq-title">Are the EA exams conducted in India?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>Yes, EA exams are conducted in India in all the metro cities and for further information, find the below link.<a href="https://www.prometric.com/test-takers/search/irs" className="click-here">Click Here</a></p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="16" className='faq-row'>
                <Accordion.Header className="faq-title">What is PTIN?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>PTIN stands for the Preparer tax identification number. It can be applied at any time during the year and should be renewed every year.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="17" className='faq-row'>
                <Accordion.Header className="faq-title">Who are eligible to do EA?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>All those who have completed +2 are eligible to enroll in the EA course.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="18" className='faq-row'>
                <Accordion.Header className="faq-title">What is the exam pattern for EA? </Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>Each part contains 100 MCQ’s with a duration of 3.5 hours and there is a 15 min break after completing 1 section (i.e., after completing 50 MCQ’s) Results are announced immediately once the exam gets over and students can take the printout of their results.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="19" className='faq-row'>
                <Accordion.Header className="faq-title">What are the Exam fees?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>203$ per part</p>
                </Accordion.Body>

              </Accordion.Item>
            
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}

export default FaqSectionEa;


