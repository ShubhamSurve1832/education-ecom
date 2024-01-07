import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';


const FaqSectionIfrs = () => {
  
  return (
    <>
      <section className="section faq-section pt-8">
        <div className="container-l">
          <h3 className="heading02">Frequently Asked Questions(FAQ's)</h3>
          <div className="faq-container">
          <Accordion >
            <Accordion.Item eventKey="1" className='faq-row'>
              <Accordion.Header className="faq-title">Who should actually take the IFRS course? </Accordion.Header>
              
                <Accordion.Body className="faq-box">
                <p>These are the ones who should be taking the course.</p>
                <div className="list-unstyled ">
                    <ul>
                        <li>MBAs majored in Finance and working in the accounting domain.</li>
                        <li>Chartered Accountants, and other finance professionals.</li>
                        <li>Semi-qualified CA, ICWA, CS working in the accounting domain.</li>
                        <li>Finance managers and Chief accountants.</li>
                    </ul>
                  </div>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="2" className='faq-row'>
              <Accordion.Header className="faq-title">What is the eligibility criteria for dipIFR certification?</Accordion.Header>
              
                <Accordion.Body className="faq-box">
                <p>One of the requirements needs to be fulfill  sizes='100vw' ed to be eligible but in case you are already an auditor or a professional accountant you are eligible right away.</p>
                <div className="list-unstyled ">
                    <ul>
                        <li>2 years of accounting experience & a degree attracting at least ACCA exemptions F1-F4.</li>
                        <li>3 years of accounting experience.</li>
                        <li>ACCA affiliate status.</li>
                        <li>2 years of experience and ACCA certification in IFRS.</li>
                    </ul>
                  </div>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="3" className='faq-row'>
              <Accordion.Header className="faq-title">How can a candidate prepare for the DipIFR examination better?  </Accordion.Header>
              
                <Accordion.Body className="faq-box">
                <p>Candidates are advised to practice the prior papers as if they were really sitting for the examination. Past papers are published on the ACCA website and it is also recommended that candidates use the revision blanks published by the various approved content providers.</p>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="4" className='faq-row'>
              <Accordion.Header className="faq-title">Would the discount factors be given if the candidates are expected to determine the present values?</Accordion.Header>
              
                <Accordion.Body className="faq-box">
                <p>Yes, the relevant discount factors will be given to the candidates respectively.</p>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="5" className='faq-row'>
              <Accordion.Header className="faq-title">What really happens when candidates are taught different methods of  preparing consolidated accounts like ledger accounts or journal entries?</Accordion.Header>
              
                <Accordion.Body className="faq-box">
                <p>In this case appropriate credit will be given as long as the student has answered the question and his/her workings are very clear.</p>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="6" className='faq-row'>
              <Accordion.Header className="faq-title">   What is IFRS?</Accordion.Header>
              
                <Accordion.Body className="faq-box">
                <p>IFRS is basically International Financial Reporting Standards which are accounting standards issued by the IFRS Foundation and the International Accounting Standards Board (IASB). IFRS requires businesses to report their financial results and financial position using the same standards and rules; this means that, barring any fraudulent manipulation, there is considerable uniformity in the financial reporting of all businesses using IFRS, which makes it easier to compare and contrast their financial results.</p>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="7" className='faq-row'>
              <Accordion.Header className="faq-title">What is the IFRS Diploma or DipIFR? </Accordion.Header>
              
                <Accordion.Body className="faq-box">
                <p>Diploma in International Financial Reporting (DipIFR) is an international qualification in IFRS developed by the leading professional accounting organisation which is known as the Association of Chartered Certified Accountants (ACCA) – which helps to develop knowledge in the area of International Financial Reporting Standards (IFRS).</p>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="8" className='faq-row'>
              <Accordion.Header className="faq-title">What is the salary trend for IFRS in India?</Accordion.Header>
              
                <Accordion.Body className="faq-box">
                <p>IFRS professionals working in the top global auditing firms earn a starting annual package of Rs 8 lacs to Rs 15 lacs per annum as per the LinkedIn salary report. There is another report that shows that many of the accounting consultants who are specialized in the IFRS work in India have an average salary take can go up to 19 lakhs. As one gains experience, the salary accordingly increases.</p>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="9" className='faq-row'>
              <Accordion.Header className="faq-title"> What is the very best way to revise?</Accordion.Header>
              
                <Accordion.Body className="faq-box">
                <p>A candidate should have a complete and proper understanding of each and every element in the syllabus, it is essential.</p>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="10" className='faq-row'>
              <Accordion.Header className="faq-title">What is the cost for the ACCA’s Diploma in IFRS?</Accordion.Header>
              
                <Accordion.Body className="faq-box">
                <p>Every attempt of the IFRS course will cost around 15k-20k and of course any of the additional training charges will be an extra cost and is certainly not included in this.</p>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="11" className='faq-row'>
              <Accordion.Header className="faq-title">Could one test the reconciliation of group-retained earnings?</Accordion.Header>
              
                <Accordion.Body className="faq-box">
                <p>Yes, although it hasn’t been tested often and many candidates do not answer this. Despite this, part of section D of the syllabus consists of the preparation of a consolidated statement of changes in equity so candidates know how to reconcile the opening and closing balances of group retained earnings.</p>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="12" className='faq-row'>
              <Accordion.Header className="faq-title"> Does the examiner prefer complete or partial measurement of goodwill?</Accordion.Header>
              
                <Accordion.Body className="faq-box">
                <p>The answer to this actually depends on the question itself both the full measurement and partial measurement of goodwill could be examinable. Full measurement includes non-controlling interests in the goodwill calculation whereas partial measurement excludes non-controlling interests.</p>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="13" className='faq-row'>
              <Accordion.Header className="faq-title">Would it be marked even if partial statements in the consolidated financial statements are not referred back to the financial statements?</Accordion.Header>
              
                <Accordion.Body className="faq-box">
                <p>Yes, it will be marked as anything present in the answer booklet will be marked.</p>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="14" className='faq-row'>
              <Accordion.Header className="faq-title">Does Simandhar provide live classes for IFRS?</Accordion.Header>
              
                <Accordion.Body className="faq-box">
                <p>Simandhar Education provides you with Live Interactive classes which you can access from anywhere in the world. Simandhar also provides the facility to access recorded videos for students who seek to revisit the material taught.</p>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="15" className='faq-row'>
              <Accordion.Header className="faq-title">How is Simandhar Education different from other Institutes for IFRS? </Accordion.Header>
              
                <Accordion.Body className="faq-box">
                <div className="list-unstyled ">
                    <ul>
                        <li>Simandhar provides the candidate with live interactive classes which can be accessed from all over the world.</li>
                        <li>All the teachers here at Simandhar are extremely qualified and professional who are here to help and guide students in every manner.</li>
                        <li>Simandhar also records all the videos of the classes so students can access them when they want in case, they want to revisit the topic that is taught.</li>
                        <li>The course at Simandhar  is inexpensive.</li>
                    </ul>
                  </div>
                </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}

export default FaqSectionIfrs;


