import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FaqSectionCma = () => {

  return (
    <>
      <section className="section faq-section faq-section-cma pt-8">
        <div className="container-l">
          <h3 className="heading02">Frequently Asked Questions(FAQ's)</h3>
          <div className="faq-container">
          <Accordion >
            <Accordion.Item eventKey="0" className='faq-row'>
              <Accordion.Header className="faq-title">What is US CMA Course?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Like we have Cost accountants in India, the US cost accountants are known as US CMA (Certified management accountants), the US CMA qualification is governed by IMA (Institute of Management accountants). Simandhar Education is the pioneer in US CMA Qualification and approved training partners of IMA, USA both in India as well as globally in alliance with Becker professional education, USA.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='faq-row'>
              <Accordion.Header className="faq-title">Is US CMA Valid in India?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>There are lot of US companies operating in India, for example- Accenture, Capgemini, Cognizant, World bank, D.E.Shaw, Genpact- majority of them hire US CMA for FP&A profile- Financial planning and analysis, US CMA enjoys global recognition, thus there is ever increasing demand for US Certified management accountants in India.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='faq-row'>
              <Accordion.Header className="faq-title">Is US CMA Easy?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>US CMA is typically composed of two parts, Part 1 and part 2. Compared to Indian qualifications, US CMA is easy to crack and pass percentage is also above 30-35% for US CMA, one need to have the passion to excel in planning and analysis section in order to be complete job ready in market.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className='faq-row'>
              <Accordion.Header className="faq-title">What is US CMA Salary?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>US CMA Salary as per IMA survey come closer to $1,01,000 per annum in US, however in India the US CMAs are typically hired at 3,50,000 -6,00,000 INR per annum respectively, the overall compensation may increase over the period, at Simandhar education we placed one of our alumni at INR 11,50,000 however placing candidates above such package is very rare and depends on one skillset.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className='faq-row'>
              <Accordion.Header className="faq-title">Who Earns more CA or CMA?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Chartered accountants are typically paid higher due to their attest functions and their reporting is primarily external, however CMA standalone also are hired at INR 6,00,000 per annum salary and we recommend that one select qualification based on one’s own interest and passion as CA deals majorly with Audit and Tax, CMA Deals with forecasting and planning.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className='faq-row'>
              <Accordion.Header className="faq-title">Is CMA equal to CA?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>CMA typically deals with business finance team and C majorly are hired in Corporate finance, CMAs popularly known as Cost management are primarily concerned on reporting to internal management, whereas CA report to external stakeholders. So ideally CMA and CA are very different in substance.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className='faq-row'>
              <Accordion.Header className="faq-title">Can a student do US CMA while pursuing BSC or BBA?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Yes, any student can do US CMA after clearing their 12th class exams, and while doing graduation as well. It is just a 6 to 8 months professional certification which is also globally recognized.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className='faq-row'>
              <Accordion.Header className="faq-title">How do I get my US CMA certificate without the 2 year's experience?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Once the student clears the CMA exams, they get an email confirming they have cleared both the papers, this email can be used to get a job. Once they get 2 years of experience, they can show that to IMA, and apply for the certificate.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" className='faq-row'>
              <Accordion.Header className="faq-title">What is the difference between ICWAI and US CMA?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>ICWAI takes 3 years to be completed and the student has to write about 20 test papers. The US CMA has just 2 exam papers and can be completed within 1 year. Since US companies are everywhere, the scope of jobs is evergreen in this sphere.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9" className='faq-row'>
              <Accordion.Header className="faq-title">Who can apply for a scholarship for US CMA exams?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Regular students going to college can apply for scholarships to IMA, requesting them to waive the paper fees for both the CMA exams. This request needs to go via the college through email to IMA. If the student gets a scholarship, he will pay only the IMA entrance fee and membership fee, the papers fees will be waived.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10" className='faq-row'>
              <Accordion.Header className="faq-title">Is there any negative marking?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>No negative marking</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11" className='faq-row'>
              <Accordion.Header className="faq-title">What is US CMA?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>CMA (Certified Management Accountant) certification has been the global benchmark for management accountants and financial professionals. The CMA is an advanced professional certification specifically designed to measure the critical accounting and financial management skills. This is especially relevant for success in a business environment.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12" className='faq-row'>
              <Accordion.Header className="faq-title">Is US CMA recognized in India?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>The Institute of Cost and Works Accountants of India (ICWAI) has entered into a Memorandum of Understanding (MoU) with the Institute of Management Accountants (IMA), USA to enable mutual recognition and cooperation between the two institutes to develop the profession of Management Accountancy for the benefit of their members and students in the pursuit of excellence in education and training and continuing professional development in Management Accountancy. b. The MoU will enable recognition of the professional qualification of the respective Institutes. A member of ICWAI can get enrolled as a member of IMA USA and vice versa.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="13" className='faq-row'>
              <Accordion.Header className="faq-title">What is the eligibility criteria for CMA?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>There are some general requirements that one needs to follow in order to be eligible for the CMA certification.</p>
                  <div className="list-unstyled ">
                    <ul>
                        <li>Candidate needs to have a bachelor's degree from any
                            accredited college/university or a related professional
                            certification</li>
                        <li>Candidate needs to have an active membership in IMA
                            (Institute of Management Accountants)</li>
                        <li>Candidate has continuous years of professional
                            experience in management accounting or financial
                            management, which can be completed after passing the
                            exam, but are required as a final step to certification
                        </li>
                        <li>One more important requirement is the candidate needs to
                            pass both Part 1 &amp; Part 2 of the CMA exam.</li>
                    </ul>
                  </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="14" className='faq-row'>
              <Accordion.Header className="faq-title">When can I take the CMA Exam?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>The CMA exam is available during the following schedule:</p>
                  <div className="list-unstyled ">
                    <ul>
                        <li>January and February</li>
                        <li>May and June</li>
                        <li>September and October</li>
                    </ul>
                  </div>
                  <p>To have your choice of date, time and location it is best that you schedule your appointment at least four weeks in advance. Once you are registered, you must take the exam part during your assigned testing session and in case for whatever reason you are unable to give your exam within that particular period, you will have to pay another registration fees as appointments cannot be rescheduled.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="15" className='faq-row'>
              <Accordion.Header className="faq-title">How can one register for the CMA exam parts?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>With three testing windows every year you can sit for the exam at any time or place that is feasible for you. The CMA exam is basically a computer-based exam and is administered at hundreds of Prometric testing centres all over the world.</p>
                  <div className="list-unstyled ">
                    <ul>
                        <li>Testing windows are offered in January/February, May/June, and September/October. You have to pick your window.</li>
                        <li>You then have to register for the exam on the IMA website</li>
                        <li>You will receive your Authorization number along with further instructions.</li>
                        <li>Schedule your exam appointment with Prometric</li>
                    </ul>
                  </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="16" className='faq-row'>
              <Accordion.Header className="faq-title">Will I have to take both the parts (CMA Part 1 &amp; 2) exams together or in a sequential order? </Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>No, you can actually take these parts in any order. Most of the candidates choose to take the exam parts on separate days although you can even take both the parts together on the same day.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="17" className='faq-row'>
              <Accordion.Header className="faq-title">What is the passing score for the CMA exam?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>The minimum passing score for the CMA (Certified Management Accountant) Examination is 360 for both parts of the exam. The exam score range is 0-500. </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="18" className='faq-row'>
              <Accordion.Header className="faq-title">How much is the fees for this CMA Certification?</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>The fees for the CMA certification includes credential review for educational and experience qualification, 6 months access to the CMA Exam Support package, final score report, & performance feedback reports for those who do not pass.</p>
                  <p>For Professional Members:</p>
                  <div className="list-unstyled ">
                    <ul>
                        <li>CMA Entrance Fee (non-refundable) - $250</li>
                        <li>Exam Fee - $415 per part.</li>
                    </ul>
                  </div>
                  <p>For Student/Academic Members:</p>
                    <ul>
                        <li>CMA Entrance Fee (non-refundable) - $188</li>
                        <li>Exam Fee - $311 per part.</li>
                    </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="19" className='faq-row'>
              <Accordion.Header className="faq-title">Is it important to have an accounting background for doing the CMA certification? </Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>No, it is not mandatory for you to hold an accounting background to pass the CMA exams, but yes it can be challenging while getting yourself acquainted with the finance and accounting terminologies if you do not have an accounting background. Depends on you.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="20" className='faq-row'>
              <Accordion.Header className="faq-title">What is the CMA Exam Window? </Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>The US CMA exam is completely computerized, and you can take this exam at many Prometric centres all over the world. It’s essential to schedule the exam dates in one of the testing windows. Choose which suits you.</p>
                  <table className="table">
                    <tbody>
                        <tr>
                            <th>Testing Window</th>
                            <th>Exam Dates</th>
                        </tr>
                        <tr>
                            <td>Jan-Feb</td>
                            <td>1st January to 28th February</td>
                        </tr>
                        <tr>
                            <td>May-Jun</td>
                            <td>1st May to 30th June
                            </td>
                        </tr>
                        <tr>
                            <td>Sep-Oct</td>
                            <td>1st September to 31st October</td>
                        </tr>
                    </tbody>
                </table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="21" className='faq-row'>
              <Accordion.Header className="faq-title"> What is the CMA Exam Retake Policy?  </Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>Any part of the US CMA exam can be taken once in a testing window and retakes need a new registration along with fee payments.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="22" className='faq-row'>
              <Accordion.Header className="faq-title"> What is the Validity of the Exam part?   </Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>The US CMA aspirants have three years to take both parts of the CMA exam. If you do not complete both the US CMA parts, you have to retake them.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="23" className='faq-row'>
              <Accordion.Header className="faq-title"> How does one become a CMA in India?   </Accordion.Header>
                <Accordion.Body className="faq-box">
                  <div className="list-unstyled ">
                    <ul>
                        <li>In India, a candidate is eligible to prepare and give the US CMA exam after his 12th. However, he would get his certification after he finishes his Bachelor’s degree from a recognized university/college with 2 years of relevant experience.</li>
                        <li>One must pass both the parts (Financial Planning & Analysis and Financial Decision Making) of the US CMA exam within 3 years in order to have the US CMA certification.</li>
                        <li>Working professionals with more than 2 years of experience in Management or Finance can also apply.</li>
                    </ul>
                  </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="24" className='faq-row'>
              <Accordion.Header className="faq-title"> Can CMA Earn in Crores?   </Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Qualification only is an entry to job, it doesn’t guarantee growth, for growth you need to show your application of skills and then one could earn crores.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="25" className='faq-row'>
              <Accordion.Header className="faq-title"> How hard is CMA USA?   </Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>CMA USA is easier compared to other Indian qualifications like CA, CS, ICWAI, US CMA has two sections and takes relatively shorter duration to complete.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="26" className='faq-row'>
              <Accordion.Header className="faq-title"> Is CMA harder than CA?   </Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>CMA is highly respected credential,however the toughness of CA is higher side and we would opine that CMA is easier than CA and also enjoy good success rate.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="27" className='faq-row'>
              <Accordion.Header className="faq-title"> How long is CMA Course?   </Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>CMA course of US is composed of two sections- Part 1 and Part 2, it takes lesser than 12 months to complete and is 75% MCQ based and 25% essay.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="28" className='faq-row'>
              <Accordion.Header className="faq-title">What is CMA Salary India?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>CMA typically are hired at INR 5,00,000 - 6,50,000 per annum and tends to increase over period of time in India.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="29" className='faq-row'>
              <Accordion.Header className="faq-title"> Which is better CMA US or CMA India?   </Accordion.Header>
                <Accordion.Body className="faq-box">
                <p><b className="bold">Both the courses</b> - US CMA and Indian CMA enjoy good content, however following are the difference between US CMA and CMA india and the global recognition makes US CMA more appealing than Indian CMA.</p>
                <p><b className="bold">Duration</b> : Duration of CMA USA is 6-8 months, however CMA india goes to above 3-4 years on an average</p>
                <p><b className="bold">Pass percentage</b> : Pass percentage for CMA USA is 30-34%, whereas India CMA pass percentage is 2-3%</p>
                <p><b className="bold">Course pattern</b> : US CMA has only 2 parts, whereas CMA india has three levels and goes above 3-4 years</p>
                <p><b className="bold">Recognition</b> : US CMA is widely recognised, whereas Indian CMA is recognised in India, however Indian CMA has tied up with UK too but the scope is very limited</p>
                <p><b className="bold">Work experience</b> : US CMA has 1 year post qualification experience requirement, but CMA india require 6 months articleship</p>
                <p>Simandhar Education is one of the leading Institute for US CMA in India and has been placing many US CMA candidates in India, The average salary of CMA USA In India is 5-6 lakhs per annum</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="30" className='faq-row'>
              <Accordion.Header className="faq-title">  How do I pass the US</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Always trust your preparation provider like Simandhar education and Becker, wake up early and ensure you devote daily 3-4 hours for your preparation, the CMA USA Course is lesser in duration and thus take less time to complete, with proper planning and focus – you shall easily pass the exams in first attempt.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="31" className='faq-row'>
              <Accordion.Header className="faq-title"> Can a student write US CMA exams in India? </Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Yes, students can write US CMA exams in India and abroad as well.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="32" className='faq-row'>
              <Accordion.Header className="faq-title">Is there a good job scope for US CMA? </Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Many US-based companies are hiring for US CMA roles too. The course deals with all aspects of financial strategy, budgeting, cost management, etc. The only thing missing would be taxation, so anyone who is not much into core accounting or tax can opt for US CMA.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="33" className='faq-row'>
              <Accordion.Header className="faq-title">What is the time duration to clear the US CMA exams? </Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Once the student clears the first paper, he gets 3 years to complete the last paper.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="34" className='faq-row'>
              <Accordion.Header className="faq-title">Why CMA?  </Accordion.Header>
                <Accordion.Body className="faq-box">
                <div className="list-unstyled ">
                  <ul>
                      <li>International Credibility</li>
                      <li>Strong Knowledge Base - Management Accounting and
                          Financial Management </li>
                      <li>Significant career progression opportunity</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="35" className='faq-row'>
              <Accordion.Header className="faq-title">How will US CMA benefit Indian Candidates? </Accordion.Header>
                <Accordion.Body className="faq-box">
                <div className="list-unstyled ">
                  <ul>
                      <li>Academics – 2 Exam Papers & one Level only.</li>
                      <li>Duration – Shorter duration course, Indian certifications where pass percentage is less than 10%, in the case of US CMA pass percentage is about 50 % globally & will be 70% with the support by Simandhar Education.</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="36" className='faq-row'>
              <Accordion.Header className="faq-title">What is IMA?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Institute of Management Accountants is one of the largest and most respected associations focused exclusively on advancing the management accounting profession. IMA offers its members exclusive access to the CMA program. We are committed to helping you to expand your professional skills, better manage your organization, and enhance your career.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="37" className='faq-row'>
              <Accordion.Header className="faq-title">What is the duration of the exam?   </Accordion.Header>
                <Accordion.Body className="faq-box">
                  <p>There are two parts to the exam. Each part is 3 hours long for 100 multiple choice questions, representing 75% of the exam score. The second section is essay writing representing the remaining 25%. You will be given 30 minutes for each of the two essays. The total testing duration is 4 hours.</p>
                  <p>You must pass at least 50% of the first (i.e. multiple choice) section in order to advance to the essay questions. You can use any time remaining from the multiple-choice questions towards the essay portion.</p>
                  <p>The exam is held with three examination windows in a year namely Jan & Feb/May & June/ Sept & Oct.</p>
                  <p>What are the total marks & the minimum marks to pass? - The total marks per paper is 500, and minimum passing is 362 marks and minimum 75%.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="38" className='faq-row'>
              <Accordion.Header className="faq-title">What is the US CMA Exam pattern?  </Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Each CMA exam part consists of 100 multiple choice questions and has two 30-minute essay questions. You will first have 3 hours to complete the multiple-choice section and one hour to complete the essays. The essays will be shown to you after you have completed the multiple-choice section of the exam or after 3 hours, whichever comes first. </p>
                <p>Once you complete and exit the multiple-choice section of the exam, you cannot go back. The essay section consists of 8-10 written response or calculation questions based on two scenarios, describing a typical business situation.  You must answer at least 50% of the multiple-choice questions correctly to be eligible to take the essay section.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="39" className='faq-row'>
              <Accordion.Header className="faq-title">Can I retake the exam just in case?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>You can actually sit for as many testing windows do you need in your three-year period but an exam part can be taken only once in a window. All retakes require a new exam registration (not CMA entrance), along with payment of appropriate fees: $415 for professionals, $311 for Students/Academic members</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="40" className='faq-row'>
              <Accordion.Header className="faq-title"> Where are the CMA Exam centres located in India?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Exams are administered through the worldwide network of Prometric Testing Centers and are available in accordance with local customs. There are many locations in India and throughout the U.S. and internationally. To locate a Testing Center and schedule exam appointments, visit <a href="https://www.prometric.com/test-takers/search/icma"></a>https://www.prometric.com/test-takers/search/icma</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="41" className='faq-row'>
              <Accordion.Header className="faq-title"> What topics does the CMA Part-1 consist of?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Part 1 of the US CMA certification mainly covers Financial Planning, Performance, and Analytics.</p>
                <p>The topics covered in CMA Part 1 are given below:</p>
                <div className="list-unstyled ">
                  <ul>
                      <li>External Financial Reporting Decisions 15%</li>
                      <li>Planning, Budgeting, and Forecasting 20%</li>
                      <li>Performance Management 20%</li>
                      <li>Cost Management 15%</li>
                      <li>Internal Controls 15%</li>
                      <li>Technology and Analytics 15% </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="42" className='faq-row'>
              <Accordion.Header className="faq-title"> What topics does the CMA Part-2 consist of?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Part 2 of the US CMA certification mainly covers Strategic Financial Management.</p>
                <p>The following six topics covered in CMA Part 2:</p>
                <div className="list-unstyled ">
                  <ul>
                      <li>Financial Statement Analysis – 20%</li>
                      <li>Corporate Finance – 20%</li>
                      <li>Decision Analysis – 25%</li>
                      <li>Risk Management – 10%</li>
                      <li>Investment Decision – 10%</li>
                      <li>Professional Ethics – 15%</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="43" className='faq-row'>
              <Accordion.Header className="faq-title"> What are the benefits of doing CMA? </Accordion.Header>
                <Accordion.Body className="faq-box">
                <p><b className="bold">Business Approval</b> : US CMA certification is considered one of the best accounting certifications. In US CMA, you can learn all about business aspects, accounting concepts and corporate governance.</p>
                <p><b className="bold">Career Opportunities</b> : US CMA brings multiple career opportunities. You would be managing the accounts being a US CMA, so you can achieve a higher position in the management as well.</p>
                <p><b className="bold">Global Opportunities</b> :  US CMA certification gives you a better understanding of finance, business and accounts. US CMA holders get job opportunities all over the world. They are recognized at a global level. </p>
                <p><b className="bold">Financial Growth</b> :US CMA certification holders earn 67% more than candidates having just a bachelor’s degree. Having a US CMA certification makes you eligible for good pay. The average annual salary of a US CMA in India would be around $10,687 in US, and 8 lakhs INR in India according to PayScale.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="44" className='faq-row'>
              <Accordion.Header className="faq-title">Does Simandhar provide live classes for CMA? </Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>Simandhar Education has Live Interactive classes which one can access from anywhere in the world and Simandhar also provides the facility to access recorded videos for students who seek to revisit the material taught. </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="45" className='faq-row'>
              <Accordion.Header className="faq-title">How are the faculties at Simandhar Education for CMA?</Accordion.Header>
                <Accordion.Body className="faq-box">
                <div className="list-unstyled ">
                  <ul>
                      <li>Simandhar Education provides you with access to Live Interactive classes from anywhere in the world.</li>
                      <li>Provides the facility to access recorded videos for students who seek to revisit the material taught</li>
                      <li>Supports its students by placing them in Top F & A companies, Big 4 etc.</li>
                      <li>Personal grooming sessions for interviews.</li>
                      <li>Attention on individual candidates.</li>
                      <li>It provides placement opportunities.</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="46" className='faq-row'>
              <Accordion.Header className="faq-title"> Which part of the CMA exam does one need to write first? </Accordion.Header>
                <Accordion.Body className="faq-box">
                <p>It’s as per the candidate’s wish, experience, and preparation level for each CMA exam part.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="47" className='faq-row'>
              <Accordion.Header className="faq-title">  What are the requirements to become a US CMA? </Accordion.Header>
                <Accordion.Body className="faq-box">
                <div className="list-unstyled ">
                  <ul>
                      <li>Bachelor’s degree.</li>                      <li>Pass both CMA exam parts.</li>
                      <li>2 years of relevant work experience.</li>
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

export default FaqSectionCma;


