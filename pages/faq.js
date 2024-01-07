import React, { useState } from "react";
//import Accordion from 'react-bootstrap/Accordion';
import { Accordion } from "react-bootstrap";
import Header from '../components/Header'
import Footer from "../components/footer";

const FaqSection = () => {
  return (
    <>
    <Header />
      <section className="section faq-section faq-section-cpa pt-8">
        <div className="container-l">
          <h3 className="heading02">Frequently Asked Questions (FAQ's)</h3>
          <div className="faq-container">
            <Accordion>
              <Accordion.Item eventKey="CPA-1" className="faq-row">
                <Accordion.Header className="faq-title">Certified Public Accountant</Accordion.Header>
                <Accordion.Body className="faq-box">
                  <Accordion>
                    <Accordion.Item eventKey="1" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          CPA (Certified Public Accountant) is a designation
                          given by AICPA to the individuals who have passed the
                          Uniform CPA exam, met the required and relevant
                          experience. The CPA designation enforces high
                          professional standards in the field of accounting.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Who are eligible for CPA?{" "}
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The CPA Exams are administered by AICPA, the world's
                          largest accounting body. AICPA offers membership to
                          all the aspirants successfully clearing all 4 CPA
                          exams. CPA license, however, is issued by the 55 state
                          boards of accountancy of the US that are part of
                          NASBA. Each state board has different eligibility
                          criteria that the aspirant needs to meet to take the
                          US CPA exams.
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                              Master's Degree in any of the streams of Commerce,
                              Accounting or Finance
                            </li>
                            <li>
                              An aspirant needs 120 credits to take the US CPA
                              exams and 150 credits to get his CPA license
                            </li>
                            <li>
                              It's considered that one year of University
                              education in India is equal to 30 credits of US
                              education
                            </li>
                            <li>
                              In some cases, first division graduates of a
                              three-year degree from NAAC-A accredited
                              universities of India are qualified to take the US
                              CPA exams too.
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Which companies hire CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          There are indeed many job opportunities in India for
                          US CPA qualified professionals. Obviously, there are
                          the big 4s like Deloitte, EY, etc where CPAs have an
                          opportunity. Apart from the big 4s there are many more
                          international companies like PwC India hiring CPAs
                          even right now. According to Naukri.com there are
                          around 26,426 job openings for a CPA in India as of
                          now and this number keeps increasing, changing every
                          day.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How many sections are in CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                      <p>They are 3 core sections and one discipline to choose from 3 options:</p>
                <div className="list-unstyled ">
                    <ul>
                        <li>Financial Accounting and Reporting </li>
                        <li>Auditing and Attestation </li>
                        <li>Taxation and Regulations </li>
                        Choose any one – 
                        <li> Information system and Controls</li>
                        <li> Tax Compliance and Planning</li>
                        <li>  Business Analysis and Reporting </li>
                    </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        What is the minimum passing score forCPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          You need a score of 75 or higher to pass the CPA exam.
                          Specifically, you must earn a 75 or higher on each of
                          the four tests that make up the CPA exam.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        Is there any negative marking for CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>There is no negative marking in the US CPA exam.</p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is the duration of the CPA exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          There are four sections in the CPA exam. The total
                          duration of the exam is 16 hours (4 hours for each
                          section).
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8" className="faq-row">
                      <Accordion.Header className="faq-title">
                        There are four sections in the CPA exam. The total
                        duration of the exam is 16 hours (4 hours for each
                        section).
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          There are four sections in the CPA exam. The total
                          duration of the exam is 16 hours (4 hours for each
                          section).
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What are the corporate tie-ups of Simandhar Education
                        for CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Simandhar Education has corporate tie-ups with
                          Invesco, EY, Citrin Cooperman, etc.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is CPA tougher than CA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          CPA has 4 papers compared to the CA exam which has 3
                          levels and 18 papers on a whole. Moreover, CPA takes
                          less than a year to complete. The CA, on the other
                          hand, takes close to 5 years to complete.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Does ACCA give credit for CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          No, ACCA doesn't give credit for CPA. NASBA (National
                          Association of State Boards of Accountancy) and the
                          state board of accountancy govern CPA's eligibility
                          rules.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="12" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Who is the lead instructor at Simandhar Education for
                        CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Mr. Sripal Jain (CA, CPA) is the Co-Founder and Lead
                          Instructor at Simandhar Education.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="13" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Any exemptions for CA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          CA and US CPA are both professional qualifications.
                          However, the qualities, structures, and durations
                          differ completely; also please note there are no
                          exemptions in any of the subjects as ICAI currently
                          don't have MOU with AICPA, so you will need to write
                          four sections in order to pass the CPA exam.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="14" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        What is the cost of CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          CPA exam fee is $1000 and International testing fee is
                          $1500. Additionally, $225 for evaluation making the
                          overall CPA exam cost INR 2, 00,000 without training
                          fee.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="15" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is the scope of US CPA in India?{" "}
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          There are many US firms all over the globe, and a lot
                          of accountancy related assignments are being
                          outsourced to India. There are many US companies now
                          in India, so the job scope is good. Companies like
                          Deloitte, EY, Amazon, Synchrony, Invesco and so many
                          more frequently hire in India.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="16" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is ACCA better than US CPA?{" "}
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          ACCA is a UK program, it is a good course, but the
                          scope for jobs in UK companies is limited worldwide.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="17" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Which state will I be eligible from?{" "}
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          We select the state for you based on your educational
                          background and make sure you get maximum credits as
                          required. US CPA is a uniform exam and the paper will
                          be the same no matter which state you apply from.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="18" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How many papers are there in the CPA?{" "}
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                      <p>They are 3 core sections and one discipline to choose from 3 options:</p>
                <div className="list-unstyled ">
                    <ul>
                        <li>Financial Accounting and Reporting </li>
                        <li>Auditing and Attestation </li>
                        <li>Taxation and Regulations </li>
                        Choose any one – 
                        <li> Information system and Controls</li>
                        <li> Tax Compliance and Planning</li>
                        <li>  Business Analysis and Reporting </li>
                    </ul>
                        </div>
                        <p>
                          Exam format: MCQs, simulations, and written
                          communications.The student will have access to
                          Authoritative literature when he is answering
                          Simulations part in all the 4 papers. Authoritative
                          literature comprises of GAAP, IRS, GAAS where a
                          student can use it to answer, but it requires a lot of
                          practice to locate the exact answer as it is too vast
                          to search.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="19" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Graduation degree from IGNOU considered valid for a CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Yes, a graduation degree from IGNOU is considered
                          valid for the CPA exam. IGNOU Graduation can give you
                          60 or 90 credits depending on the MOU, if the MOU is
                          for 1 year- then 60 credits, if you're writing B. Com
                          for 3 years – 90 credits.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="20" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What are the differences between a CFA and CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          A qualifications are both related to finance, there
                          are significant differences between the two. A CFA's
                          expertise is focused on the investment industry.
                          Consequently, CFAs work as portfolio managers,
                          investment advisors, and research analysts.
                        </p>
                        <p>
                          A CPA, on the other hand, is a specialist in
                          accounting and taxes. You can find CPAs working in
                          public accounting and also in the finance departments
                          of small and large businesses.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="21" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can I do CPA after completing B.com?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          B.Com gives you a total of 90 credits and to qualify
                          for the CPA exam you need 120 credits but there are
                          certain states which allow you to sit for CPA exam
                          even with 90 credits provided you sign an undertaking
                          that you will meet the balance credits within 18
                          months of appearing for the first paper. Yes, you can
                          do CPA but you need to sign an undertaking and we will
                          help you with a bridge course to meet the balance
                          credits. Additionally, B. Com with NAAC A- First
                          division is also an eligibility criterion.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="22" className="faq-row">
                      <Accordion.Header className="faq-title">
                        CFA vs CPA: Which is a better qualification?{" "}
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          A CPA's knowledge is more broad-based. An individual
                          who holds the CPA license would have proper expertise
                          in a wide-variety of finance-related areas. A CFA is a
                          more specialized course and is targeted at those who
                          want to work in the investment management profession.
                          Compare and know the details of both CPA vs CFA
                          designations.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="23" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        What are the educational requirements for the CPA exam?{" "}
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          To be eligible to appear for the US CPA exam one must
                          have 120 credits, each graduation is converted into 30
                          years of credits thereby adding 90 credits for 3
                          years, if your NAAC A, the first division you will get
                          30 additional credits. To apply for the license, one
                          must have 150 credits. Although certain other
                          requirements vary by jurisdiction. Each jurisdiction
                          has specific requirements about education, experience,
                          and residency. Refer to your jurisdiction's
                          application materials for additional information.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="24" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        How often can I take the examination?{" "}
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The continuous testing window is applied now; they
                          will need to apply for NTS again and write the exam.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="25" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How many questions are on the CPA exam?{" "}
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The exam has 324 multiple-choice questions, 20
                          simulation questions, and 3 written communication
                          (essay) questions.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="26" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Who can take the CPA exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Both US residents and foreign nationals who meet the
                          requirements of a particular state board can take the
                          CPA exam.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="27" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        Is there a time limit to complete all the 4 parts of the
                        CPA Exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The aspirant who is willing to take the CPA exam must
                          have to pass all four sections (AUD, FAR, BEC & REG)
                          within 18 months. The sections can be taken in any
                          order as per the candidate’s wish and the credit for
                          any of the sections shall be valid for 18 months from
                          the actual exam date. Also, the credit of the
                          examination expires by section. Once the candidate
                          passed outside the period of 18 months then he/she has
                          to retake those sections.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="28" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What does a CPA do exactly?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          There are many US firms all over the globe, and a lot
                          of accountancy related assignments are being
                          outsourced to India. There are many US companies now
                          in India, so the job scope is good. Companies like
                          Deloitte, EY, Amazon, Synchrony, Invesco and so many
                          more frequently hire in India.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="29" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is CPA difficult than CA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          US CPA is a designation given to the individuals who
                          have passed the uniform CPA exam and met required
                          educational qualifications. Chartered Accountant (CA)
                          is the professional who has passed the CA exam.
                        </p>
                        <p>
                          When it comes to which course is difficult between CPA
                          and CA, we can’t come to a conclusion of stating a
                          particular course. But, we have to know the exam
                          pattern of both CPA and CA.
                        </p>
                        <p>The CPA exam has 4 parts:</p>
                        <div className="list-unstyled ">
                        <ul>
                        <li>Financial Accounting and Reporting </li>
                        <li>Auditing and Attestation </li>
                        <li>Taxation and Regulations </li>
                        Choose any one – 
                        <li> Information system and Controls</li>
                        <li> Tax Compliance and Planning</li>
                        <li>  Business Analysis and Reporting </li>
                    </ul>
                        </div>
                        <p>The CA exam has 3 levels:</p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>Foundation level</li>
                            <li>Intermediate level</li>
                            <li>Final level</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="30" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is CPA a stressful job?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          In general, the US CPAs work with strict reporting
                          deadlines at heavily regulated industries. It often
                          leads to overtime work regularly. Maybe general
                          accounting work leads to boring work for most people.
                          Apart from the work of CPA, the designation itself has
                          a huge demand across many countries.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="31" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is getting a CPA worth it?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          CPA can bring many and better opportunities for you.
                          After US CPA, you can explore opportunities in
                          organizations that require knowledge of US GAAP, US
                          Tax and US Audit. CPA US has global recognition, and
                          the scope is not just limited to India or the US, but
                          you can find opportunities across the globe.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="32" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is harder CPA or CFA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          US CPA and CFA both are well-respected credentials.
                          The US CPA exam consists of 4 exam parts: AUD, BEC,
                          FAR & REG. Whereas CFA is a three-level exam covering
                          some topics like Economics, Accounting, Ethics,
                          Security Analysis and Money Management. The Chartered
                          Financial Analyst (CFA) has a lower entry-barrier when
                          compared to the US CPA.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="33" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How long does a CPA take?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          One must have to pass the CPA exam within 18 months
                          and meet the required relevant experience of 2 to 3
                          years in accounting or finance to become a licenced
                          CPA.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="34" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is CPA hard to pass?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Definitely not. The CPA exam just consists of 4
                          papers, and it's very easy to pass. The exam consists
                          of Multiple Choice Questions, Task-based simulations
                          and Written communication tasks.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="35" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Who earns more CPA or CFA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          According to Payscale, the US CPA's average salary is
                          INR 7,00,000 per year and the average salary of a CFA
                          INR 5,50,000 per year.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="36" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How long does it take to clear CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          A minimum of 12 to 18 months time is enough to clear
                          the CPA exam.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="37" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is the salary of CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The Certified Public Accountants are in demand across
                          many industries. They can command high salaries
                          because of their expertise in financing. Also, many
                          companies retain the CPA's accounting talent by paying
                          good salaries along with hikes and bonuses.
                        </p>
                        <p>
                          The average salary for a Certified Public Accountant
                          (CPA) in India is ₹701,387.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="38" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is CPA worth it in India?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The CPA certification paves countless opportunities to
                          work for some of the most renowned companies around
                          the world.
                        </p>
                        <p>
                          Mentioned below are some of the best jobs in India for
                          a CPA:
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>Senior Financial Analyst</li>
                            <li>Risk and Compliance Professional</li>
                            <li>Corporate Controller</li>
                            <li>Accounting Software Developer</li>
                            <li>Information technology Accountant</li>
                            <li>Personal Financial Advisor</li>
                            <li>Finance Director</li>
                          </ul>
                        </div>
                        <p>
                          There are indeed many job opportunities in India for
                          US CPA qualified professionals. Obviously, there are
                          Big 4s like Deloitte, EY, etc, where CPAs have an
                          opportunity. Apart from the big 4s, many more
                          international companies like PwC India hire CPAs even
                          right now. According to Naukri.com, there are around
                          26,426 job openings for a CPA in India as of now, and
                          this number keeps increasing, changing every day.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="39" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How much does a CPA with 5 years of experience make?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          With more than five years of experience, a US CPA can
                          earn between $68,000 to $130,000.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="40" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can I be an accountant without a CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Yes, you can become an accountant without a CPA
                          designation. The regular Accountant does the reporting
                          and recording of financial transactions. Anyone who
                          does accounting without any professional degree can
                          call themselves an accountant. Without any
                          certification degree, the accountants can perform some
                          tasks like general accounting and bookkeeping.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="41" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Do you have to have a masters to be a CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The educational requirement is to have 120 or 150
                          credits depending on the state you want to apply for
                          from a NAAC recognized college. A candidate must also
                          have certain designated hours in accounting and each
                          university academic year in India provides 30
                          credits.Completing your three-year graduation would
                          provide you with 30*3=90 credits unless you have
                          passed it with first-class you will get 120 credits.
                          In any other case to get the rest credits you must
                          <b> either go for a master's degree</b> or a diploma
                          course at any professional course such as CA/CWA etc.
                          You must also keep in mind that you complete the
                          required hours in accounting or else you will have to
                          take extra classes to complete the rest credits.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="42" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What are the 4 CPA exams?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                      <p>•	They are 3 core sections and one discipline to choose from 3 options:</p>
                <div className="list-unstyled ">
                    <ul>
                        <li>Financial Accounting and Reporting </li>
                        <li>Auditing and Attestation </li>
                        <li>Taxation and Regulations </li>
                        Choose any one – 
                        <li> Information system and Controls</li>
                        <li> Tax Compliance and Planning</li>
                        <li>  Business Analysis and Reporting </li>
                    </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="43" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Who earns more CA or CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The average salary CPAs earn (in India) is found to be
                          INR 7,68,552 per year. Most people move on to other
                          jobs if they have more than 10 years' experience as
                          CPA. A Chartered Accountant (in India) earns INR
                          6,08,976 per year on an average.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="44" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is CA better than CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Both CA and CPA are highly qualified professional
                          certifications, but the CA course (which is limited to
                          only India) has a strong focus on the technical
                          aspects of accounting and complex tax matters. The CPA
                          course (globally recognized) has a broader focus on
                          accounting and business management.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="45" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can CPA be done without CA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Nowadays, no state board allows associate degree or
                          3-year degree holders to get the CPA license. Colorado
                          and Michigan used to recognize CA certificates as a
                          prerequisite to sit for the exam, and many Indian
                          candidates applied through them.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="46" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can I do CA and CPA together?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          CA and CPA both great professions together are
                          definitely an amazing combination. If you are a
                          Chartered Accountant who wishes to explore the world
                          and global opportunities, also get proper experience
                          in MNCs then going for CPA (Certified Public
                          Accountant) certification is your chance to unlock the
                          arena of career options.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="47" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is it good to do CPA after CA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          CPA is a globally recognized accounting professional,
                          even a B.Com graduate who is unable to do Chartered
                          Accountancy because of the time span of 5 years can do
                          CPA and get a good salary. Being a CPA one can go
                          abroad and set up their own practice or get
                          employment.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="48" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is CA Inter eligible for CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Candidates who passed CA (Inter) or CWA (Inter) or CS
                          (Inter) exams are eligible for CPA. And, candidates
                          who have passed MBA (finance) with 70% marks and above
                          (with minimum 4 elective subjects in finance) are
                          eligible for accelerated CPA course.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="49" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can I do both CPA and CMA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Yes. The most valuable addition of a CMA certification
                          for an existing CPA is to see how he/she is equipped
                          with working in management accounting, especially the
                          costing area. If the CPA qualification and the
                          external audit job doesn't cover much on management
                          accounting, a CMA certification can helpfill={true}{" "}
                          sizes='100vw' the gap.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="50" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can Indian CMA do CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Yes. In fact, some CMAs go on to get the CPA to
                          further widen their career opportunities. But again,
                          candidates still must meet all of the requirements for
                          the CPA license;they won't get any exam exemptions if
                          a candidate is a CMA holder.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="51" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is it worth doing CPA Australia?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Holding an international designation like CPA
                          Australia is always a value-addition to existing
                          qualifications, provides good career opportunities and
                          helps you stand out from other professionals.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="52" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is the CMA exam harder than CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Most people find that the CPA is a bit harder.
                          However, CMA can be more useful for accounting
                          professionals. People who take the CMA will find a
                          greater focus on management accounting. If this is the
                          field they work in already, this is going to be an
                          easier exam.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="53" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How beneficial is CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Having a CPA license also opens the doors to more
                          benefits, whether that comes in the form of better
                          benefits for a higher ranking job or through
                          negotiating power. Since CPAs are in higher demand
                          than their non-CPA counterparts, CPAs can negotiate
                          better benefits.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="54" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Should I get CPA and CMA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Doubling down on accounting credentials, especially
                          obtaining both your CPA license and CMA certification
                          can broaden your knowledge base of accounting concepts
                          and skills, enhance your marketability and provide
                          numerous other benefits.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="55" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is CPA qualification?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Certified Public Accountant (CPA) qualification is a
                          certification that public accountants can obtain in
                          order to provide accounting and financial services to
                          businesses and individuals. A CPA provides assurance
                          for investors, creditors, and other stakeholders who
                          need to evaluate an organization's financial
                          performance.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="56" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is a CPA license worth it?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Yes. Passing the CPA Exam can not only help elevate
                          your personal credentials, but may also help
                          distinguish you from other candidates when applying to
                          new job positions. To get the most out of your
                          accounting career, getting your CPA license is the key
                          to doing so.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="57" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is a CPA a good career?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          A CPA can be a great career for someone who has the
                          right experience and skill sets. They work in some of
                          the most prestigious industries such as banking,
                          finance, and healthcare. With some experience, they
                          can also land jobs with other companies in different
                          industries.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="58" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How many times can you take the CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The AICPA does not limit the number of times you may
                          take the CPA Exam. With a pass rate of approximately
                          50%, steep examination requirements, and regularly
                          updating materials, many candidates will take one or
                          more sections multiple times on their path to the CPA
                          certification.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="59" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What kind of jobs can you get with a CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          There are many different jobs that you can get with a
                          CPA, so you'll want to explore your options. Some job
                          opportunities include business taxes, management
                          consulting firms, credit counseling agencies, and
                          private equity firms.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="60" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How much time should I study for the CPA exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          In general, it's recommended that CPA candidates study
                          for 300-400 hours for the CPA exam in total to ensure
                          you pass. Essentially, this equates to about 80-100
                          hours of CPA study hours for each exam section.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="61" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What if I fail my CPA exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          If you failed a CPA exam section, you can sit for it
                          in the next month or two and score 75 or above. You
                          only need 2-6 weeks to study for this retake, assuming
                          you can put in around 15-20 hours per week of CPA exam
                          study time.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="62" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is the CPA exam called?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The Uniform Certified Public Accountant Examination
                          (CPA Exam) is the examination administered to people
                          who wish to become U.S. Certified Public Accountants.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="63" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How many times a year is the CPA exam conducted?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The CPA exams are conducted four times a year. The
                          months when the Exams are conducted are termed as
                          testing windows. The Testing windows are open for the
                          following four time periods every year.
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>January 1 - March 10</li>
                            <li>April 1 - June 10</li>
                            <li>July 1 - September 10</li>
                            <li>October 1 - December 10</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="64" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Are CPA exams in India?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          After a successful pilot testing of the CPA exam in
                          India during 2020, the American Institute of Certified
                          Public Accountants (AICPA) and National Association of
                          State Boards of Accountancy (NASBA) have decided to
                          switch to continuous CPA Exam testing from January 1,
                          2021.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="65" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Which is better, MBA or CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The choice totally depends on you. CPA is a better
                          course than an MBA if accounting is your interest. It
                          also opens the avenues of the international job market
                          and you get perfectly equipped for the various job
                          roles across the world.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="66" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is a CPA course in India?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The Certified Public Accountant or CPA course is
                          equivalent to the CA course in India. CPA course is a
                          license issued by any State out of the 55 States of
                          the USA. After the completion of course, the CPA
                          professionals can find high-profile jobs in the
                          sectors of banking, construction, financial services
                          and manufacturing etc.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="67" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Should I get my MBA or CPA first?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          If you are interested in management opportunities or
                          general business consulting, then an MBA would be
                          better. On the other hand, you should become a CPA,
                          especially if you want to work for a big four
                          accounting firm.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="68" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is a CPA career?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          A certified public accountant, or CPA, is a finance
                          professional who has passed the CPA exam and helps
                          individuals, organizations and businesses interpret
                          and communicate their financial data. CPAs assist with
                          managing expenses, investments, taxes, audits and
                          planning and reaching financial goals.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="69" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Are CA and CPA the same?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The main difference between CAs and CPAs is that the
                          CPA is used in the United States, while CA is used in
                          India. If these CA professionals pass a test, their
                          qualifications can transfer to the United States,
                          working as CPAs.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="70" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What should I study after CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          What you should study after CPA depends on what you
                          want to do. If you want to go into the finance
                          industry, then it is best to take a course in
                          accounting. If you want to work in marketing, then it
                          is best to take a course in marketing or management.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="71" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can you sit for CPA with an MBA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Yes. It is possible to sit for the Certified Public
                          Accountant (CPA) exam with a Master of Business
                          Administration (MBA), especially if the candidate has
                          met the 150 semester hours of college coursework
                          required to be licensed.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="72" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can I do both CPA and CFA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Yes. The CPA and CFA combination is best suited if you
                          plan to work in the research department within
                          investment banks, hedge funds, and mutual funds or
                          plan to hold another job in the investment or finance
                          community.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="73" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can CPA exams be written in India?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Testing for CPA Exam candidates at test centres in
                          India will begin on January 1, 2021. Also, the
                          candidates may begin to use the scheduler on November
                          2, 2020.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item> */}
                    <Accordion.Item eventKey="74" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        Where are CPA exam locations/ Centres in India?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Indian candidates may schedule to take the "US CPA
                          Exam" in the Prometric locations given below:
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>Hyderabad</li>
                            <li>Ahmedabad</li>
                            <li>Mumbai</li>
                            <li>Delhi</li>
                            <li>Bangalore</li>
                            <li>Chennai</li>
                            <li>Kolkata</li>
                            <li>Trivandrum</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="75" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is the CPA Salary in India?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The Certified Public Accountants are in demand across
                          many industries. They can command high salaries
                          because of their expertise in financing. Also, many
                          companies retain the CPA's accounting talent by paying
                          good salaries along with hikes and bonuses.
                        </p>
                        <p>
                          The average salary for a Certified Public Accountant
                          (CPA) in India is ₹701,387.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="76" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        What is a CPA license?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The CPA exam requirements vary by state jurisdiction.
                          Every state board of accountancy has a different set
                          of requirements, but most states have a core set of
                          qualifications for a candidate to be eligible for the
                          CPA exam.
                        </p>
                        <p>Below are the requirements to obtain CPA license.</p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                              In general, many states ask for 150 credit hours
                              in some specific courses from a university or an
                              accredited institute under NASBA.
                            </li>
                            <li>The candidate should pass the Ethics exam.</li>
                            <li>
                              Must have 2,000 hours of work experience in
                              taxation, auditing, accounting and management
                              consultancy.
                            </li>
                            <li>Age limit: 18+ years.</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="77" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can CA intermediate do CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Yes, Candidates who passed CA (Inter) exam are also
                          eligible to do CPA.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="78" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Which Study Material Simandhar follows for CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Simandhar Education follows Becker (a global education
                          provider headquartered in the US) study material for
                          CPA.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="79" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Does Simandhar provide live classes for CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Simandhar Education provides you with access to Live
                          Interactive classes from anywhere in the world and
                          provides the facility to access recorded videos for
                          students who seek to revisit the material taught.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="80" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        How is Simandhar Education different from other
                        Institutes for CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The reasons behind "How Simandhar Education different
                          from other Institutes" are:
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                              The Becker product and live classes are very
                              effective.
                            </li>
                            <li>CPA course at Simandhar is inexpensive.</li>
                            <li>It has good placement assistance.</li>
                            <li>
                              It is associated with all Big 4s & multinationals,
                              and alumni of Simandhar have placed in MNCs.
                            </li>
                            <li>
                              Simandhar has a wide network of world-class
                              trainers, teachers and industry-experts across
                              domains, especially CPA, CMA, EA, CIA, IFRS &
                              HRCI.
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="81" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is the pass percentage of the CPA exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>2020 CPA Exam Pass Rates</p>
                        <table className="table">
                          <tbody>
                            <tr>
                              <th>Section </th>
                              <th>First Quarter </th>
                              <th>Second Quarter</th>
                              <th>Third Quarter</th>
                            </tr>
                            <tr>
                              <td>AUD</td>
                              <td>BEC</td>
                              <td>FAR</td>
                              <td>REG</td>
                            </tr>
                            <tr>
                              <td>47.97% </td>
                              <td>61.76% </td>
                              <td>46.37% </td>
                              <td>55.42% </td>
                            </tr>
                            <tr>
                              <td>65.29% </td>
                              <td>76.92% </td>
                              <td>62.86% </td>
                              <td>74.97% </td>
                            </tr>
                            <tr>
                              <td>56.89%</td>
                              <td>69.89%</td>
                              <td>55.67%</td>
                              <td>66.12%</td>
                            </tr>
                          </tbody>
                        </table>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="82" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        How are the faculties at Simandhar education for CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                              Simandhar Education provides you with access to
                              Live Interactive classes from anywhere in the
                              world.
                            </li>
                            <li>
                              Provides the facility to access recorded videos
                              for students who seek to revisit the material
                              taught.
                            </li>
                            <li>
                              Supports its students by placing them in Top F & A
                              companies, Big 4 etc.
                            </li>
                            <li>
                              All the teachers at Simandhar are CPA qualified
                              and rank holder Chartered Accountants (CAs) from
                              India.
                            </li>
                            <li>Personal grooming sessions for interviews.</li>
                            <li>Attention on individual candidates.</li>
                            <li>It provides placement opportunities.</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="83" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        How many hours do faculty teach at Simandhar Education
                        for CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          275+ hours of video lessons per section by Top CPA.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="84" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Does the US CMA give credit for CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>No, US CMA doesn't give credit for CPA.</p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="85" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Does Simandhar Education provide evaluation and
                        licensing assistance for CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Yes, Simandhar Education provides evaluation and
                          licensing assistance for CPA. The CPA aspirant must
                          have 2,000 hours of work experience in taxation,
                          auditing, accounting and management consultancy (need
                          not be under a CPA supervisor, Mr.Sripal Jain (CA,CPA)
                          can verify for you).
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="86" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Do I need a license if I work in any US company?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          US CPA license is used mainly when one wants to be
                          self-employed and practice as a Certified Public
                          Accountant living in the US.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="87" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        CFA vs CPA: Which is a better qualification?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          A CPA's knowledge is more broad-based. An individual
                          who holds the CPA license would have expertise in a
                          wide variety of finance-related areas. A CFA is a more
                          specialized course and is targeted at those who want
                          to work in the investment management profession.
                          Compare the details of CPA vs CFA designations.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="88" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        What does a CPA do?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Certified Public Accountants work in a wide range of
                          professions. You can find them in banking, financial
                          services, government jobs, and education. However,
                          most CPAs are employed in public accounting or
                          corporate accounting.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="89" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Are the CPA USA exams in an open book format?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          No, the exam is NOT in an open book format. You are
                          not allowed any resources in the testing center while
                          taking the exam.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="90" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is a ‘Notice to Schedule’, and when will I receive
                        mine?{" "}
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                        The Notice to Schedule (NTS) is your notification that you may begin scheduling your examination with Prometric. It is a Hall ticket.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="91" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Who needs a CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Certified Public Accountants provide a range of
                          services across different types of organizations.
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                              Public accounting firms: CPAs are involved in the
                              preparation, review, and auditing of their
                              clients' financial statements. Their expert
                              knowledge in the fields of accounting, taxes, and
                              related areas helps them to fulfil this role.
                            </li>
                            <li>
                              Large corporations: Big companies need the
                              services of CPAs. In these organizations, CPAs
                              work in accounting, internal auditing, and tax
                              accounting. They play a crucial role in preparing
                              the corporation's financial statements and
                              ensuring that these adhere to the required
                              regulatory norms.
                            </li>
                            <li>
                              Small businesses: CPAs can play an important role
                              in small companies as well. They provide financial
                              advice and can help with the firm's accounting
                              records. Many small businesses use CPAs to assist
                              them with their taxes and to represent them before
                              the IRS.
                            </li>
                            <li>
                              You can also find CPAs working in government
                              organizations and the educational sector. If you
                              choose to work in public accounting, you could
                              join one of the "Big 4" accounting firms –
                              Deloitte,
                            </li>
                            <li>
                              PricewaterhouseCoopers, Ernst & Young, or KPMG.
                              These firms, as well as their smaller
                              counterparts, provide accounting, auditing, tax,
                              and consulting services. Many CPAs also opt to
                              work in corporations and government entities.
                              Their job could involve managerial or tax
                              accounting, internal auditing, or financial
                              analysis.
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="92" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What are the eligibility requirements for US CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          To be eligible to appear for the US CPA exam one must
                          have 120 credits, each graduation is converted into 30
                          years of credits thereby adding 90 credits for 3
                          years, if your NAAC A, the first division you will get
                          30 additional credits. To apply for the license, one
                          must have 150 credits. Although certain other
                          requirements vary by jurisdiction. Each jurisdiction
                          has specific requirements about education, experience,
                          and residency. Refer to your jurisdiction's
                          application materials for any additional information.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="93" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How long will my NTS be valid?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Your NTS will be valid for a specific amount of time.
                          This time varies by jurisdiction. For most of the
                          states, it is valid for 6 months whereas for a few it
                          has 9 months validity. You must sit for the
                          examination before your NTS expires. If you do not sit
                          for the examination within the established time frame,
                          your NTS will be expired and you will need to submit a
                          new application to receive a new NTS. The expiration
                          date will be mentioned on the NTS.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="94" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How is the CPA exam scored?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          You need a score of 75 or higher to pass the CPA exam.
                          Specifically, you must earn a 75 or higher on each of
                          the four tests that make up the CPA exam.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="95" className="faq-row">
                      <Accordion.Header className="faq-title">
                        I have passed all four sections. Do my credits expire?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          If you are appearing for exams in any country other
                          than the US you will have to take the license within 3
                          years of passing the CPA exam or your credits will
                          lapse. If you appear for the exam in the US you have
                          to apply for a license within 10 years.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="96" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can we hold a license of multiple states?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Yes, you can hold a multiple state license provided
                          you meet the CPE (Continuous Professional Education)
                          as per the state rule.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="97" className="faq-row">
                      <Accordion.Header className="faq-title">
                        When can I take the CPA exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          To decide when to take the CPA exam, follow these
                          steps:
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                              Submit your application and all required fees to
                              your state board of accountancy. When the state
                              board approves your application, it contacts the
                              National Association of State Boards of
                              Accountancy (NASBA).
                            </li>
                            <li>
                              NASBA reviews the state board information,
                              including the tests you are allowed to take. NASBA
                              sends you a Notice to Schedule (NTS).Use your NTS
                              to contact
                            </li>
                            <li>
                              Use your NTS to contact Prometric and set up a
                              date and time to take your test. The CPA exam
                              provides testing windows, which are basically
                              periods of when the candidates can take tests.
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="98" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        Who administers the CPA Exam?{" "}
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The US exam is administered by AICPA (American
                          Institute of Certified Public Accountants), which is
                          the largest accounting body in the world.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="99" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What does a CPA do on a daily basis?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>The daily responsibilities of the CPA include:</p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                              Updating and organizing accounting records as
                              needed.
                            </li>
                            <li>
                              Performing detailed audits in financial documents.
                            </li>
                            <li>
                              Analyzing and preparing reports on transactions.
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="100" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How much does a CPA degree cost?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The US CPA exam fee will be around $3,000. In India,
                          the cost of the US CPA exam is approximately 2.25L
                          approx.
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                              CPA Auditing and Attestation (AUD) Exam Fee - $350
                            </li>
                            <li>CPA Regulation (REG) Exam Fee - $350</li>
                            {/* <li>
                              CPA Business Environment and Concepts (BEC) - $350
                            </li> */}
                            <li>
                              CPA Financial Accounting and Reporting - $350
                            </li>
                          </ul>
                        </div>
                        <p>
                          For the US CPA exam papers, $1500 is paid as the
                          International testing fees for the students who plan
                          to take the exams out of the US.250 USD is paid for
                          the CPA application.
                        </p>
                        <p>
                          225 USD is paid to the National Association of State
                          Boards of Accountancy (NASBA).
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="101" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What happens after you pass the CPA exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          After passing the CPA exam, there's a need to wait for
                          congratulatory messages from the state board.
                          Sometimes, it could be many months. Also, don't freak
                          if you get it within a week.You have to do something
                          valuable before getting the congratulatory letter.
                        </p>
                        <p>
                          Take a print out of the CPA licensing form and verify
                          it with the suitable person and ask for the favour.
                          It’s a time taking process, but you have to do it.If
                          you want to upgrade your career, it’s the right time
                          to spend on drafting your resume.Take Ethics exam of
                          CPA:
                        </p>
                        <p>
                          The next is to take the CPA ethics exam, don’t bother
                          about the exam if it is not mentioned in the
                          congratulatory letter, as many states don’t have this
                          need. Some states like California, run their CPA exam.
                          But, whereas many other states ask the candidates for
                          the competition of the test.
                        </p>
                        <p>
                          Fulfil the work experience:Many states need Certified
                          Public Accountants to accumulate relevant experience
                          in accounting. Sufficient experience in public
                          accounting is enough in taxation and general
                          accounting. The majority of the states in the U.S
                          require you to supervise your experience and should be
                          verified with a CPA license.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="102" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can I study CPA by myself?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Absolutely Not. Only when you have good knowledge in
                          US auditing standards, US GAAP, and US tax laws can
                          you study CPA by yourself if you are new to CPA
                          syllabus/material and then go for training from some
                          of the best institutes like Simandhar Education.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="103" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How many times can you fail the CPA exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          You are allowed to retake the US CPA Exam as many
                          times as you would like.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="104" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What to do once you pass all 4 CPA exams?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          After passing the CPA exam, there’s a need to wait for
                          congratulatory messages from the state board.
                          Sometimes, it could be many months. Also, don’t freak
                          if you get within a week.
                        </p>
                        <p>
                          You have to do something valuable before getting the
                          congratulatory letter.
                        </p>
                        <p>
                          Take a print out of the CPA licensing form and verify
                          it with the suitable person and ask for the favour.
                          It’s a time taking process, but you have to do it.If
                          you want to upgrade your career, it’s the right time
                          to spend on drafting your resume.
                        </p>
                        <p>
                          ake Ethics exam of CPA:The next is to take the CPA
                          ethics exam, don’t bother about the exam if it is not
                          mentioned in the congratulatory letter, as many states
                          don’t have this need. Some states like California, run
                          their CPA exam. But, whereas many other states ask the
                          candidates for the competition of the test.
                        </p>
                        <p>
                          Fulfil the work experience:Many states need Certified
                          Public Accountants to accumulate relevant experience
                          in accounting. Sufficient experience in public
                          accounting is enough in taxation and general
                          accounting. Majority of the states in the U.S require
                          you to supervise your experience and should be
                          verified with a CPA license.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="105" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        Is CPA in demand?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          There are indeed many job opportunities in India for
                          US CPA qualified professionals. Obviously, there are
                          big 4s like Deloitte, EY, etc., where CPAs have an
                          opportunity. Apart from the big 4s, many more
                          international companies like PwC India hire CPAs even
                          right now. According to Naukri.com, there are around
                          26,426 job openings for a CPA in India as of now, and
                          this number keeps increasing, changing every day.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="106" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What skills do you need to be a CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>The skills that are needed to be a CPA are:</p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>Business acumen</li>
                            <li>Up-to-date tax knowledge</li>
                            <li>Technical abilities</li>
                            <li>Presentation prowess</li>
                            <li>Additional auditing training</li>
                            <li>Emotional intelligence</li>
                            <li>Management and leadership strength</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="107" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is CPA a degree or diploma?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          CPA (Certified Public Accountant) is a designation
                          given by AICPA to the individuals who have passed the
                          Uniform CPA exam, met the required and relevant
                          experience. The CPA designation enforces high
                          professional standards in the field of accounting.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="108" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        What is the syllabus of CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>CPA exam consists of 3 sections.</p>
                        <div className="list-unstyled ">
                          <ul>
                          <li>Financial Accounting and Reporting </li>
                        <li>Auditing and Attestation </li>
                        <li>Taxation and Regulations </li>
                        Choose any one – 
                        <li> Information system and Controls</li>
                        <li> Tax Compliance and Planning</li>
                        <li>  Business Analysis and Reporting </li>
                          </ul>
                        </div>
                        <p>There are 3 types of questions in the CPA exam:</p>
                        <p>
                          Multiple-Choice Questions (MCQs) vary from one
                          sentence to paragraph length questions with 4 options.
                          Task-Based Simulations (TBS) require candidates to
                          type in answers and may include research questions,
                          journal entries, reconciling accounts,fill={true}{" "}
                          sizes='100vw' ing out a form with MCQs, orfill={true}{" "}
                          sizes='100vw' ing out sections of reports. Written
                          communication tasks test the candidate's ability
                          through writing; they must be in the BEC section.
                        </p>
                        <p>CPA Exam Content Areas by Sections:</p>
                        <p>
                          <b className="bold">
                            Auditing and Attestation (AUD):
                          </b>
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                            Engagement Acceptance & understanding the environment (12-16%)
                            </li>
                            <li>
                            Understanding the entity and its environment (16-20%)
                            </li>
                            <li>
                            Performing Audit procedures & evaluating evidence (16-20%)
                            </li>
                            <li>
                            Evaluating Audit findings, communications & reporting (16-20%)
                            </li>
                            <li>Accounting & review services engagement (12-16%)</li>
                            <li>Professional responsibilities (16-20%)</li>
                          </ul>
                        </div>
                        <p>
                          <b className="bold">Regulation (REG):</b>
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                            Ethics, Professional, and Legal Responsibilities (15% -19%)
                            </li>
                            <li> Business Law (17% - 21%)</li>
                            <li>Federal Tax Process, Procedures, Accounting, and Planning (11% - 15%)</li>
                            <li>Evaluating Audit findings, communications & reporting (16-20%)</li>
                            <li>Federal Taxation of Property Transactions (12% - 16%)</li>
                            <li>Federal Taxation of Individuals (13% - 19%)</li>
                            <li>Federal Taxation of Entities (18% - 24%)</li>
                          </ul>
                        </div>
                        <p>
                          <b className="bold">
                            Financial Accounting and Reporting (FAR):
                          </b>
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                            Conceptual Framework, Standard Setting and presentation of Financial Statements (17-23%)</li>
                            <li>Financial Statement Accounts: Recognition, Measurement, Valuation, Calculation, Presentation and Disclosures (27-33%)</li>
                            <li>Specific Transactions, Events and Disclosures: Recognition, Measurement, Valuation, Calculation, Presentation, and Disclosures (27% - 33%)</li>
                            <li>Governmental Accounting and Reporting (8% - 12%)</li>
                            <li>Not-for-Profit (Nongovernmental) Accounting and Reporting (8%-12%)</li>
                          </ul>
                        </div>
                        <p>
                          <b className="bold">
                            Business Environment and Concepts (BEC):
                          </b>
                        </p>
                      

                        <div className="list-unstyled ">
                          <ul>
                          <li>Business Analysis (40%-50%)</li>
                          <li>Technical accounting and reporting (35%-45%)</li>
                          <li>State and Local Governments (10%-20%)</li>
                          </ul>
                        </div>

                        <div className="list-unstyled ">
                          <ul>
                          <li>Information systems and Data Management (35%-45%)</li>
                          <li>Security Confidentiality and Privacy (35%-45%)</li>
                          <li>Considerations for System and Organization Controls(SOC) Engagements (15%-25%)</li>
                          </ul>
                        </div>
                        <div className="list-unstyled ">
                          <ul>
                          <li>Tax compliance and planning for Individuals and personal Financial planning (30%-40%)</li>
                          <li>Entity Tax Compliance (30%-40%)</li>
                          <li>Entity Tax Planning (10%-20%)</li>
                          <li>Property Transactions (Disposition of assets) (10%-20%)</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="109" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can CPA be done after 12th?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          You have to do a bachelor's degree. The educational
                          requirement is to have 120 or 150 credits depending on
                          the state you want to apply for from a NAAC recognized
                          college. A candidate must also have certain designated
                          hours in accounting and each university academic year
                          in India provides 30 credits.Completing your{" "}
                          <b className="bold">
                            three-year graduation would provide you with 30*3=90
                            credits
                          </b>{" "}
                          unless you have passed it with first-class you will
                          get 120 credits. In any other case to get the rest
                          credits you must
                          <b className="bold">
                            {" "}
                            either go for a master's degree
                          </b>{" "}
                          or a diploma course at any professional course such as
                          CA/CWA etc. You must also keep in mind that you
                          complete the required hours in accounting or else you
                          will have to take extra classes to complete the rest
                          credits.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="110" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        Can I pursue CPA from India?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Testing for CPA Exam candidates at test centers in
                          India has begun on January 1, 2021. The CPA aspirants
                          can take the exam sections without restrictions, other
                          than waiting to receive scores from prior attempts of
                          the same section or a major change to the exam.
                          Continuous Testing will replace the existing limited
                          CPA Exam Testing Window model, which only permits
                          candidates to test in India during designated time
                          frames.
                        </p>
                        <p>
                          The 55 U.S. Accountancy Boards support the move to
                          continuous testing in India. This shift to a
                          continuous testing model in India signifies the power
                          of alignment among state boards, NASBA, AICPA and
                          Prometric as these organizations continue to support
                          Exam candidates on their journey to CPA. Candidates
                          are asked to visit the NASBA's website to confirm that
                          their Accountancy Board has transitioned to the
                          Continuous Testing model.
                        </p>
                        <p>
                          <b className="bold">Exam Locations:</b> In India, the
                          CPA exam will happen in Hyderabad, Ahmedabad, Mumbai,
                          Delhi, Bangalore, Chennai, Kolkata and Trivandrum.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="111" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How many subjects are there in the CPA exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>There are 4 subjects in the CPA exam:</p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>Business Environment and Concepts (BEC)</li>
                            <li>Auditing and Attestation (AUD)</li>
                            <li>Regulation (REG)</li>
                            <li>Financial Accounting and Reporting (FAR)</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item> */}
                    <Accordion.Item eventKey="112" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is the difference between a CPA and an accountant?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          A{" "}
                          <b className="bold"> Certified Public Accountant </b>
                          (CPA) is a professional accountant who has met state
                          qualifications and has acquired an additional level of
                          credibility and expertise. A US CPA is equivalent to
                          an Indian CA. To be licensed as a CPA, an accountant
                          must pass the Uniform Certified Public Accountant
                          Examination and meet other educational and work
                          criteria necessary to become a CPA. As opposed to
                          accountants, only CPAs can perform mandatory audits
                          for publicly traded U.S. companies.An{" "}
                          <b className="bold">accountant</b> is a practitioner
                          who engages in accounting through preparation and
                          audit of financial statements, bookkeeping, and
                          financial analysis. Accountants are a level up from
                          bookkeepers. They can (but usually don\'t) perform
                          bookkeeping functions. Still, they usually prepare
                          detailed financial statements, perform audits of the
                          books of public companies, and prepare reports for tax
                          purposes.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="113" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        Is a CPA or CFA better?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          A Certified Public Accountant (CPA) is an individual
                          who is specifically trained and certified to provide
                          various accounting services, namely preparing
                          financial statements for large organizations,
                          preparing taxes, etc., to their customers. CPA is a
                          highly qualified certification where you gain proper
                          expertise in audit, tax, and accounting.
                        </p>
                        <p>
                          CFA (Chartered Financial Analyst) covers most parts of
                          finance and investment. Chartered Financial Analyst
                          analyses various financial options and provides the
                          best investment options for financial planners. CFA
                          also provides options to the higher management of
                          different investment companies.
                        </p>
                        <p>
                          CPA is a more widely recognized credential and is a
                          great path for those who are interested in a career in
                          finance or accounting. The CFA has a lower entry
                          barrier, but it takes much more time to complete.
                          Becoming a qualified CPA is a more flexible process
                          and can be accomplished within a shorter period. Both
                          the certifications are valuable and worth the time and
                          money invested. Both the credentials have what you
                          might be looking for if you plan to pursue a career in
                          finance and accounting.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="114" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is a CPA good for finance?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The Certified Public Accountant (CPA) is great if you
                          want to rise up the finance department at a corporate
                          business and ultimately become the CFO. Within, or if
                          you want to rise up the ranks at a public accounting
                          firm. Both offer good opportunities for people looking
                          to break into corporate finance.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="115" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Which is easier: CPA or CFA?{" "}
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Based on the historical passing rates, it can be said
                          that the CFA exams are much more complex than the CPA
                          exams. The overall passing rate of all the four parts
                          of the CPA exams was more than 50%. Therefore, even
                          though the material is more accessible for the CPA
                          exam, the CFA exam is probably four to five times more
                          difficult.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="116" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is a CFA vs CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          A CFA generally analyzes financial reports and
                          financial statements, while a CPA is the one that
                          audits those reports. CFAs are best known for
                          investment analysis and wealth planning, and CPAs tend
                          to be associated with taxes, audits, and accounting.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="117" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Who earns more CPA or CMA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          CPA professionals usually pursue the career of an
                          accountant or financial advisor. ... Over the course
                          of the career, the average salary of a CPA hovers
                          around $120,000, while that of a CMA is around
                          $100,000.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="118" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is a BCOM graduate eligible for CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Yes, generally, most Indian B.Com graduates are
                          eligible to take the CPA exam. Every year of
                          university education in India is equivalent to 30
                          semester US Education credits, totaling 90 credits at
                          the end of 3 years.{" "}
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="119" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How do I start a CPA course?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          To pursue a CPA certification programme, the candidate
                          must have a graduation degree or equivalent. To earn
                          the CPA license, the candidate must complete 150 hours
                          of the CPA course semester.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="120" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is the CPA Exam multiple choice?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The CPA Examination comprises four sections: Auditing
                          and Attestation (AUD), Business Environment and
                          Concepts (BEC), Financial Accounting and Reporting
                          (FAR) and Regulation (REG). All four sections contain
                          multiple-choice questions (MCQ) and task-based
                          simulations (TBS).
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="121" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is a CPA course all about?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Certified Public Accountant or CPA is similar to the
                          CA program in India. CPA course is a license issued by
                          any state out of the 55 States of the USA. This
                          license authorizes the professionals to practice as a
                          public accountants in a particular region or State.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="122" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What are CPA jobs?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The job of CPA involves maintaining and auditing the
                          financial records of the public or organizations. They
                          also act as consultants in the areas of accounts,
                          finances, budget, etc.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="123" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is the lowest CPA Exam score?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The minimum CPA Exam passing score is 75 points, but
                          that doesn't mean you need to answer 75% of questions
                          correctly in order to pass.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="124" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How many MCQ is FAR?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>How many MCQ is FAR?.</p>
                      </Accordion.Body>
                    </Accordion.Item> */}
                    <Accordion.Item eventKey="125" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What are CPA simulations?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          CPA Task-Based Simulations are scenario-based
                          questions on the CPA Exam. Each one will introduce a
                          situation, provide data in the form of charts, memos,
                          and emails, and require you to answer a series of
                          questions.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="126" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can I skip questions on the CPA exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>Yes you skip question but marks will not be awarded for the same</p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="127" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can my employer see my CPA Exam score?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Your employer, including your current boss and future
                          employers, cannot request to see your scores. So, even
                          if they write to NASBA, the AICPA, or your state
                          board, they cannot see the results of your CPA exam.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="128" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How do you put the CPA Exam on your resume?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Insert a section called “Certifications” at the top of
                          your resume and detail how many parts of the CPA Exam
                          you have completed so far. This section is even more
                          essential if and when you have other certifications to
                          add to it.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="129" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Are calculators allowed in CPA Exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          You cannot bring any notes, published materials or
                          calculators into the exam. But, the provided AICPA
                          calculator for CPA Exams will meet all of your
                          calculating needs.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="130" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can I use Excel on the CPA Exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Ye, you will have access to an exam version of
                          Microsoft Excel. Some of the functions are limited,
                          but you can still use Excel to do basic math.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="131" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Which CPA exam is tax?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The Regulation (REG) section of the CPA Exam tests a
                          CPA candidate's knowledge and skill level on federal
                          taxation, business law, business ethics, and
                          professional and legal responsibilities.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="132" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is regulation CPA hard?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The REG section of the CPA exam is challenging because
                          this section covers business law, federal taxation,
                          and rules of professional conduct for CPAs.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="133" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How long do I need to study for the Reg CPA exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The AICPA recommends that CPA Candidates spend a
                          minimum of 300 to 400 hours to study for the CPA Exam.
                          That's about 16.7 days of consecutive study
                          time—needless to say, it's a lot.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="134" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How long is the BEC CPA exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The actual BEC CPA Exam is four hours long with one
                          15-minute break built in between the first and second
                          task-based simulation testlets.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item> */}
                    <Accordion.Item eventKey="135" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Which CPA test is the hardest?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Students often report that Financial Accounting and
                          Reporting (FAR) is the most difficult part of the CPA
                          Exam to pass, because it is the most comprehensive
                          section.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="136" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How long does it take to pass all 4 CPA exams?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          While every state/jurisdiction has its own unique
                          requirements for obtaining a CPA license, they all
                          require that a candidate pass the CPA Exam, and you
                          have 18 months to finish all 4 parts of the CPA Exam.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="137" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Do CPA exams expire?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          No. NASBA only keeps Exam files for one year after the
                          date of passing. If you passed the Exam over a year
                          ago, you will need to submit your transcripts once
                          more.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="138" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Why is bec the easiest?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          BEC is the easiest of the exams because it has three
                          task-based simulations (TBSs). Exam-takers also tend
                          to find BEC's three written communication tasks easier
                          than the written communication questions in the other
                          sections of the exam.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item> */}
                    <Accordion.Item eventKey="139" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can you get a 99 on the CPA Exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Candidates can get a score that ranges from 0 to 99 in
                          each of the four sections of the CPA exam. The scores
                          are calculated using a weighted combination of scaled
                          scores from each of the portions in the different
                          sections of the exam.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="140" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is the CPA Exam weighted?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The AICPA scores the Uniform CPA Examination on a
                          weighted scale of 0 to 99, where a 75 or greater is a
                          passing score. Candidates' target score release dates
                          depend on their “testing window”, or the period they
                          sat for the CPA Exam.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="141" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What is the difference between CMA and CPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The main difference between the CMA vs CPA credential
                          is the CPA is more suited for public accounting and
                          the CMA is more suited toward industry.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="142" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Should I do CPA or CMA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          If you are interested in auditing, taxation,
                          reporting, and regulation, then you should opt for
                          CPA, while if you are interested in management,
                          strategic analysis, and decision making, then CMA is a
                          better choice for you.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="143" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Which is higher CPA or CMA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          According to industry data, a CPA earns 15% more in
                          average salary than a non-CPA accountant. However, CMA
                          certification translates to a 63% premium in
                          compensation over professionals without a CMA.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="144" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        What are the CPA exam score release dates for the year
                        2021?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          According to the AICPA, 2021 CPA Exam scores will be
                          released on the following CPA Exam score release
                          dates.
                        </p>
                        <p>Please check this link for score release <a href="https://www.aicpa-cima.com/resources/article/find-out-when-youll-get-your-cpa-exam-score" target="new">click here</a></p>
                        <table className="table">
                          <tbody>
                            <tr>
                              <th>If you take your exam on/before:</th>
                              <th colspan="2">
                                Your target score release date is:
                              </th>
                            </tr>
                            <tr>
                              <td>23rd January, 2021</td>
                              <td>9th February, 2021</td>
                            </tr>
                            <tr>
                              <td>15th February, 2021 </td>
                              <td>23rd February, 2021 </td>
                            </tr>
                            <tr>
                              <td>23rd February, 2021 </td>
                              <td>18th March, 2021</td>
                            </tr>
                            <tr>
                              <td>31st March, 2021</td>
                              <td>09th April, 2021</td>
                            </tr>
                            <tr>
                              <td>23rd April, 2021</td>
                              <td>11th May, 2021</td>
                            </tr>
                            <tr>
                              <td>16th May, 2021</td>
                              <td>25th May, 2021</td>
                            </tr>
                            <tr>
                              <td>08th June, 2021</td>
                              <td>16th June, 2021</td>
                            </tr>
                            <tr>
                              <td>30th June, 2021</td>
                              <td>13th July, 2021</td>
                            </tr>
                            <tr>
                              <td>23rd July, 2021</td>
                              <td>10th August, 2021</td>
                            </tr>
                            <tr>
                              <td>15th August, 2021 </td>
                              <td>24th August, 2021 </td>
                            </tr>
                            <tr>
                              <td>07th September, 2021 </td>
                              <td>15th September, 2021</td>
                            </tr>
                            <tr>
                              <td>30th September, 2021</td>
                              <td>12th October, 2021</td>
                            </tr>
                            <tr>
                              <td>23rd October, 2021</td>
                              <td>09th November, 2021</td>
                            </tr>
                            <tr>
                              <td>15th November, 2021</td>
                              <td>23rd November, 2021</td>
                            </tr>
                            <tr>
                              <td>8th December, 2021</td>
                              <td>16th December, 2021</td>
                            </tr>
                            <tr>
                              <td>31st December, 2021</td>
                              <td>11th January, 2022</td>
                            </tr>
                          </tbody>
                        </table>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="145" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Where Do I Find My CPA Exam Scores?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Once you have found the estimated date your scores
                          will be released, you will need to login to the NASBA
                          website to access your scores. NASBA releases your
                          scores to your state board of accountancy, but be
                          aware that not all boards use the online score
                          retrieval service, so check with your state board for
                          support on where to find your CPA scores.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="146" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        How long does Prometric take to send exam data files to
                        AICPA?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          For most candidates, Prometric sends Exam data files
                          to the AICPA within 24 hours after you complete
                          testing.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="147" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How Are CPA Exam Score Release Dates Determined
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Your target release dates are based on two factors:
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>When you sat for your CPA section</li>
                            <li>
                              When the AICPA receives your test data from the
                              Prometric Center
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="148" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What are the CPA exam changes in January 2
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Most of the changes have been delayed due to the
                          pandemic. Here there are minor changes made to the
                          exam for January 2021, there isn’t a major change.
                        </p>
                        <p>
                          <b className="bold">Regulation (REG)</b>
                        </p>
                        <p>
                          Removal of the CARES Act changes which were made in
                          October 2020
                        </p>
                        <p>
                          <b className="bold">Exam Topic:</b> Individual and
                          Corporate Taxation.
                        </p>
                        <p>
                          <b className="bold">
                            Financial Accounting & Reporting (FAR)
                          </b>
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                              ASU 2018-14—Compensation—Retirement
                              Benefits—Defined Benefit Plans—General (Subtopic
                              715-20): Disclosure Framework—Changes to the
                              Disclosure Requirements for Defined Benefit Plans.
                            </li>
                            <li>
                              ASU 2019-12, Income Taxes (Topic 740): Simplifying
                              the Accounting for Income Taxes.
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item> */}
                    {/* <Accordion.Item eventKey="149" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        Mention some of the changes in the CPA exam in July
                        2021?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Auditing and Business Environment & Concepts Increased
                          emphasis on the following:
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                              Understanding automated business processes and the
                              risks involved
                            </li>
                            <li>
                              The importance of having a digital and data-driven
                              mindset as well as the use of data analytics.
                            </li>
                            <li>
                              System and Organization Controls (SOC) reports on
                              controls over financial reporting at a service
                              organization.
                            </li>
                            <li>
                              Other specific changes would be outlined in the
                              January 2021 CPA Exam Blueprints
                            </li>
                            <li>
                              Topics Expected to be Expanded on the CPA Exam
                            </li>
                            <li>
                              Here are the topics which are highly expected to
                              be expanded more in the CPA Exam in India.
                            </li>
                            <li>
                              Digital and Data-Driven Mindset and Other
                              Technological Impacts
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item> */}
                    {/* <Accordion.Item eventKey="150" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What are CPA-AUD sections in 2021?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>Business processes and internal controls</p>
                        <p>
                          <b className="bold">Use of SOC 1 reports</b>
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>IT system infrastructure</li>
                            <li>Data flows.</li>
                            <li>
                              Effect of general and application controls on the
                              completeness and reliability of data.
                            </li>
                            <li>
                              Use of automated tools and data analytics in the
                              audit
                            </li>
                            <li>
                              Skepticism and judgment in analyzing data BEC
                              (Business Environment and Concepts)
                            </li>
                            <li>Business processes and internal controls.</li>
                          </ul>
                        </div>
                        <p>
                          <b className="bold">
                            Understanding the importance of SOC 1 reports for
                            outsourced IT functions
                          </b>
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>Use of data and business intelligence</li>
                            <li>Data governance</li>
                            <li>Data management</li>
                            <li>Data relationships</li>
                            <li>
                              Working with data (extraction, transformation, and
                              loading)
                            </li>
                          </ul>
                        </div>
                        <p>
                          <b className="bold">
                            Topics Expected to be Removed from the Exam:
                          </b>
                        </p>
                        <p>
                          There are certain topics that are also expected to be
                          removed from the uniform US CPA Exam which are:
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>IFRS (FAR)</li>
                            <li>Estate Tax (REG)</li>
                          </ul>
                        </div>
                        <p>
                          <b className="bold">
                            Changes in Content and Skill Weighting:
                          </b>
                        </p>
                        <p>
                          <b className="bold">AUD</b>
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                              Content Area II, Risk Assessment and Planning,
                              increasing by 5%
                            </li>
                            <li>
                              Content Area IV, Reporting, decreasing by 5%
                            </li>
                            <li>
                              Skills Weighting shifting to higher level by 5%
                              (i.e, from Remembering & Understanding to
                              Analysis)
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item> */}
                    <Accordion.Item eventKey="151" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can we get the scores on the release date if we take the
                        US CPA exam on the last day of the testing window?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          In order to get your CPA score by the targeted release
                          date, the AICPA needs to receive your result file
                          before the end of the cut-off date from the Prometric
                          testing center. Many factors are causing the delay in
                          receiving the result. NASBA, AICPA, or the Prometric
                          cannot guarantee that the candidate result file that
                          candidate’s result file will be sent to AICPA on the
                          same day or not.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="152" className="faq-row">
                      <Accordion.Header className="faq-title">
                        When will NASBA open a center in the Cayma
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          At present, NASBA has no plans to open a center in the
                          Cayman Islands.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="153" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can we expect another NTS extension across the board due
                        to the ever-changing situation concerning COVID-19
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          NASBA does not anticipate boards doing any further
                          blanket extensions for Notices to Schedule (NTS).
                        </p>
                      </Accordion.Body>
                    </Accordion.Item> */}
                    <Accordion.Item eventKey="154" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        What is the next step towards licensure after passing
                        all the 4 CPA exam sections?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The candidate’s jurisdictions will provide all the
                          required information on the next steps in order to
                          obtain the CPA license. One needs to complete the
                          education, meet relevant experience and take the
                          ethics exam.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="155" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Why do score releases take so long if everything is
                        computerized?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Scoring is fully automated for all Exam components
                          except the written communication tasks. Most written
                          communication responses are scored by a computer
                          grading program, which is calibrated using human
                          scorers. In some cases, responses are scored by a
                          network of human graders (all CPAs). If your score is
                          close to the passing score, your written communication
                          tasks will be automatically re-graded by human
                          graders. When there is more than one grader for a
                          response, the average of the scores is used as the
                          final grade. The AICPA uses Item Response Theory (IRT)
                          for the objective portion of the Exam. IRT is a
                          well-established psychometric approach to scoring used
                          by licensing and certification examinations that
                          administer many different test forms. All scoring
                          routines, whether automated or not, are verified at
                          various stages of the scoring process.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="156" className="faq-row">
                      <Accordion.Header className="faq-title">
                      Is it possible to issue NTS for one part out of 4? 
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                        NTS can be applied for only one part/section/exam at a time 
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="157" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Why do we need to pass the CPA in 18 months?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The requirement to pass the Examination within 18
                          months is a board rule, regulation or statute. You may
                          request an extension from your board if there are
                          circumstances beyond your control, which prohibit you
                          from testing. The board will require evidence of any
                          hardship.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="158" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What will happen to candidates who have initial credit
                        expirations in 2021?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          They will need to pass all remaining parts before
                          their credit expires or lose the credit.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item> */}
                    {/* <Accordion.Item eventKey="159" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        Are state boards going to consider further extensions to
                        credits specifically for those who live in countries
                        where the CPA cannot be taken as there are no test
                        centers and borders are closed to travel?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          You may request an extension from your board if there
                          are circumstances beyond your control which prohibit
                          you from testing. The board will require evidence of
                          any hardship.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item> */}
                    <Accordion.Item eventKey="160" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is it possible to issue an NTS for one part of the four?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Yes, you may apply for as many parts as you would like
                          when you apply. We encourage you to only apply for the
                          parts you plan to take within the length of time on
                          your NTS.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="161" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What are CPA-BEC section changes in 2021?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                              Content Area I, Corporate Governance, increasing
                              by 3%
                            </li>
                            <li>
                              Content Area II, Economics, decreasing by 2%
                            </li>
                            <li>
                              Content Area III, Financial Management, decreasing
                              by 1%
                            </li>
                            <li>No change in Skills Weighting</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item> */}
                    <Accordion.Item eventKey="162" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Are there any particular changes for FAR and REG
                        sections in 2021?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          There are no particular weighting changes for FAR and
                          REG
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="163" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What are the changes in REG and BEC exam s
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          AICPA (American Institute of CPAs) publishes the
                          blueprints and summary of the revisions. For complete
                          information about CPA material, click:{" "}
                          <a
                            href="https://www.aicpa.org/becomeacpa/cpaexam/examinationcontent.html"
                            target="new"
                          >
                            AICPA
                          </a>
                          .
                        </p>
                      </Accordion.Body>
                    </Accordion.Item> */}
                    <Accordion.Item eventKey="164" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can we expect to have a test Center in Canada
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          NASBA has opened testing in Canada and will continue
                          to test there until June 30, 2021.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="165" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Will you offer an online examination for international
                        candidates?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          There are no plans to offer the Examination online for
                          international candidates.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item> */}
                    <Accordion.Item eventKey="166" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can I retake one of the sections with the{" "}
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>No, the NTS is valid for one Examination session.</p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="167" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        Is there an option of changing the NTS from one section
                        to another?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          No, our systems do not allow us to change sections.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="168" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        Will the new quarantine restrictions on incoming United
                        States arrivals prevent international CPA candidates
                        from doing the Exams for at least two weeks after their
                        arrival?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          No, candidates may schedule their Exam during that
                          time.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item> */}
                    <Accordion.Item eventKey="169" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Can NASBA help set up more limited test center options
                        outside of the United States?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The same criteria is used for any test centers outside
                          the United States. The international locations and
                          extended countries have been evaluated based on a set
                          of criteria, including:
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>
                              Volume demand as demonstrated by candidates from
                              those countries taking the Exam in the United
                              States
                            </li>
                            <li>
                              Ability to deliver the Exam without legal
                              obstacles
                            </li>
                            <li>
                              The security threat to the Exam (both physical
                              security at test center and intellectual property
                              security of Exam content) assessed at levels
                              equivalent to those presented domestically
                            </li>
                            <li>
                              Existence of established Prometric test centers
                            </li>
                          </ul>
                        </div>
                        <p>
                          At this time, countries that have not met those
                          criteria to the combined satisfaction of NASBA, the
                          AICPA and Prometric are not under consideration as
                          testing locations or extended countries. While we
                          appreciate the desire for the Exam to be available in
                          many locations to all candidates, we can best serve
                          the Boards of Accountancy and the accounting
                          profession by ensuring a safe, reliable, and valid
                          Exam.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="170" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Will India become a permanent location to appear for the
                        CPA Exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          There are no time restrictions to testing in India.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="171" className="faq-row">
                      <Accordion.Header className="faq-title">
                        If for some reason a candidate forgets to bring a
                        printed NTS on the day of the Exam, is a PDF format
                        acceptable to enter to take the Exam?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Yes, you may show an electronic version of your NTS.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="172" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What if I have COVID during the 18-month period and
                        couldn’t study, would you extend the time?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          You may request an extension from your board if there
                          are circumstances beyond your control which prohibit
                          you from testing. The board will require evidence of
                          any hardship.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="173" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is it possible to extend the time to 2.5 years instead
                        of 18 months?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          The 18-month period is set inboard rules, regulations
                          and statute. There are no plans to change this period.
                          You may request an extension from your board if there
                          are circumstances beyond your control which prohibit
                          you from testing. The board will require evidence of
                          any hardship.
                        </p>
                        <p>
                          While each candidate will have their own journey
                          toward becoming a CPA, one thing remains the same –
                          the journey as a whole is a hard one, but one that is
                          worth it.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="174" className="faq-row">
                      <Accordion.Header className="faq-title">
                        What are the CPA exam locations/centers in India?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          AICPA & NASBA administered the CPA exam in India at
                          eight Prometric test centers.
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>Hyderabad</li>
                            <li>Ahmedabad</li>
                            <li>Mumbai</li>
                            <li>Delhi</li>
                            <li>Bangalore</li>
                            <li>Chennai</li>
                            <li>Kolkata</li>
                            <li>Trivandrum</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="175" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        Can the CPA exams be given in India in 2021?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          Testing for CPA Exam candidates at test centers in
                          India will begin January 1, 2021. Also, the candidates
                          may begin to use the scheduler on November 2, 2020.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="176" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Citizens from which countries can take the CPA Exam in
                        India?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          To take the CPA exam in India, you must be a long-term
                          resident or citizen of the following countries:
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>India</li>
                            <li>Bhutan</li>
                            <li>Bangladesh</li>
                            <li>Myanmar</li>
                            <li>Maldives</li>
                            <li>Nepal</li>
                            <li>Sri Lanka</li>
                            <li>United States</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="177" className="faq-row">
                      <Accordion.Header className="faq-title">
                        Is the CPA exam temporary or permanent in India?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          AICPA had given an official statement regarding this
                          stating that CPA exams will be held in India in
                          December 2020. However, due to continuous havoc by
                          COVID-19 even this decision was very unclear.
                        </p>
                        <p>
                          In times like these CPA exams being held in India is
                          something that the candidates are really concerned
                          about. Now the AICPA and NASBA have come to a proper
                          conclusion finally and gave great news for all CPA
                          aspirants that the CPA exam will be held in India
                          continuously every month from January, 2021.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="178" className="faq-row">
                      <Accordion.Header className="faq-title">
                        How do I switch the CPA exam center to India?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          If you have already paid for the international
                          administration process for another test region and
                          wish to move to India, please send an email to
                          iexam@nasba.org with the following information:
                        </p>
                        <div className="list-unstyled ">
                          <ul>
                            <li>Name</li>
                            <li>Jurisdiction</li>
                            <li>Jurisdiction ID</li>
                            <li>Examination section</li>
                            <li>Exam Section ID</li>
                            <li>Current international test country</li>
                            <li>New international test country</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="179" className="faq-row">
                      <Accordion.Header className="faq-title">
                        {" "}
                        What is price match guarantee?
                      </Accordion.Header>

                      <Accordion.Body className="faq-box">
                        <p>
                          This is the guarantee on the price where we match the
                          lowest price provided by other Becker partners.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="CMA-1" className="faq-row">
                <Accordion.Header className="faq-title">Certified Management Accountant</Accordion.Header>
                <Accordion.Body className="faq-box">
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

                </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item eventKey="EA-1" className="faq-row">
                <Accordion.Header className="faq-title">Enrolled Agent</Accordion.Header>
                <Accordion.Body className="faq-box">
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
              <Accordion.Item eventKey="20" className='faq-row'>
                <Accordion.Header className="faq-title">What are the Application fees? </Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>30$ (application fee needs to be paid after clearing 3 papers in EA)</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="21" className='faq-row'>
                <Accordion.Header className="faq-title">What is the future of an enrolled agent in India? Whether EA is globally recognized?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>The primary role of an enrolled agent is to deal with every kind of taxation affair. They can also represent taxpayers before the IRS (Internal Revenue Services). Yes, it’s a globally recognized course having opportunities in all the US-based MNC’s.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="22" className='faq-row'>
                <Accordion.Header className="faq-title">Should I take the exam to become an EA (Enrolled Agent) while I am already a CPA?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>If you wish to get into taxation that represents people before IRS, you could very well consider doing an EA course. Ideally, it will prove beneficial for aspirants who wish to get into US taxation. If you wish to pursue a career in the US, then EA is the way to go forward.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="23" className='faq-row'>
                <Accordion.Header className="faq-title">How Often and When Can I Sit for the EA Exam?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>The exam window is from May 1 to February 28 of the following year. The test is not offered during the annual blackout period in March and April. During this time the test is updated for the most recent tax law.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="24" className='faq-row'>
                <Accordion.Header className="faq-title">When do I have to sit after I have registered to take the SEE?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>Your examination appointment must be scheduled within one year of the date of registration. If space permits, you may register and schedule up to 2 days prior to your test date.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="25" className='faq-row'>
                <Accordion.Header className="faq-title">What are the pass rates of the EA exam?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <table>
                    <tbody>
                      <tr>
                        <th>Part</th>
                        <th>2017-2018</th>
                        <th>2018-2019</th>
                        <th>2019-2020</th>
                      </tr>
                      <tr>
                        <td>Part 1: Individuals</td>
                        <td>61%</td>
                        <td>62%</td>
                        <td>61%</td>
                      </tr>
                      <tr>
                        <td>Part 2: Businesses</td>
                        <td>64%</td>
                        <td>69%</td>
                        <td>70%</td>
                      </tr>
                      <tr>
                        <td>Part 3: Representation, Practices and Procedures</td>
                        <td>86%</td>
                        <td>86%</td>
                        <td>81%</td>
                      </tr>
                    </tbody>
                  </table>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="26" className='faq-row'>
                <Accordion.Header className="faq-title">Does Simandhar provide live classes for EA?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>Simandhar Education provides you with access to Live Interactive classes from anywhere in the world and provides the facility to access recorded videos for students who seek to revisit the material taught.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="27" className='faq-row'>
                <Accordion.Header className="faq-title">How is Simandhar Education different from other Institutes for EA?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>The reasons behind "How Simandhar Education different from other Institutes" are:</p>
                  <div className="list-unstyled ">
                    <ul>
                      <li>Live classes are very effective.</li>
                      <li>EA course at Simandhar is inexpensive.</li>
                      <li>It has good placement assistance.</li>
                      <li>It is associated with all Big 4s & multinationals, and alumni of Simandhar have placed in MNCs.</li>
                      <li>Simandhar has a wide network of world-class trainers, teachers and industry-experts across domains, especially EA, CPA, CMA, CIA, IFRS & HRCI.</li>
                    </ul>
                  </div>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="28" className='faq-row'>
                <Accordion.Header className="faq-title">What are the corporate tie-ups of Simandhar Education for EA?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <p>Simandhar Education has corporate tie-ups with Invesco, EY, Citrin Cooperman, etc.</p>
                </Accordion.Body>

              </Accordion.Item>
              <Accordion.Item eventKey="29" className='faq-row'>
                <Accordion.Header className="faq-title">How are the faculties at Simandhar education for EA?</Accordion.Header>

                <Accordion.Body className="faq-box">
                  <div className="list-unstyled ">
                    <ul>
                      <li>Simandhar Education provides you with access to Live Interactive classes from anywhere in the world.</li>
                      <li>Provides the facility to access recorded videos for students who seek to revisit the material taught.</li>
                      <li>Supports its students by placing them in Top F & A companies, Big 4 etc.</li>
                      <li>Personal grooming sessions for interviews.</li>
                      <li>Attention on individual candidates.</li>
                      <li>It provides placement opportunities.</li>
                    </ul>
                  </div>
                </Accordion.Body>

              </Accordion.Item>
            </Accordion>

                </Accordion.Body>
              </Accordion.Item>

              {/* <Accordion.Item eventKey="ACCA-1" className="faq-row">
                <Accordion.Header className="faq-title"> Association of Chartered Certified Accountants</Accordion.Header>
                <Accordion.Body className="faq-box">
                <Accordion >

<Accordion.Item eventKey="0" className='faq-row'>
  <Accordion.Header className="faq-title">Do ACCA members have signing authority in India and overseas?</Accordion.Header>

  <Accordion.Body className="faq-box">
    <p>ACCA members have signing authority in various countries like the UK, Dubai, and Singapore, but in India, their signing authority is subject to certain criteria and regulations set by the Institute of Chartered Accountants of India (ICAI).</p>
  </Accordion.Body>

</Accordion.Item>
<Accordion.Item eventKey="1" className='faq-row'>
  <Accordion.Header className="faq-title">What to do after 12th?</Accordion.Header>

  <Accordion.Body className="faq-box">
    <p>Completing 12th board examination in commerce offers numerous opportunities, including pursuing the ACCA course. Enrolling in ACCA classes online provides a pathway to various career options, and completing ACCA takes less time than a traditional graduation program. ACCA equips students with the skills and knowledge needed to establish a strong professional network and succeed in their chosen fields. The ACCA program is structured to be universally relevant, and Simandhar’s ACCA classes offer comprehensive education to students who aspire to launch their careers.</p>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2" className='faq-row'>
  <Accordion.Header className="faq-title">Is ACCA recognized in Canada?</Accordion.Header>

  <Accordion.Body className="faq-box">
    <p>ACCA, a globally recognized professional qualification, is recognized in 181 countries, including Canada, where there are over 200,000 members and a strong professional network. </p>
    <p>Pursuing an ACCA course in SimandharEducation is an excellent opportunity for students who have completed their 12th boards to start building their careers. Additionally, ACCA classes online provide a solid foundation for a successful career in Canada, where employers value the knowledge and skills gained through this certification. To learn more about the ACCA course details, you can refer to the official website of the Association of Chartered Certified Accountants.</p>
  </Accordion.Body>
</Accordion.Item>


<Accordion.Item eventKey="3" className='faq-row'>
  <Accordion.Header className="faq-title">What to do after ACCA?</Accordion.Header>

  <Accordion.Body className="faq-box">
    <p>ACCA is a course that provides a promising future in accounting for professionals, and attending quality ACCA classes in Simandhar Education can equip them with the necessary skills to work with top employers. After clearing all ACCA levels, pursuing an MBA is a great choice to enhance your resume and increase earning potential. During the ACCA duration, you can also pursue a degree or work in a job. The comprehensive skills acquired through ACCA also prepare you for entrepreneurship, as many people take this path. Alternatively, if you are interested in investments and portfolio management, the CFA charter is an excellent option, as investment banks offer high salaries to employees. This eliminates the ACCA vs CFA debate, and pursuing CFA is best suited for those with primary experience.</p>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="4" className='faq-row'>
  <Accordion.Header className="faq-title">Can I finish ACCA in two years?</Accordion.Header>

  <Accordion.Body className="faq-box">
    <p>ACCA can be completed in two years, as the ACCA board conducts four exams per year, allowing students to appear for four exams in each session and accelerate their learning process.</p>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="5" className='faq-row'>
  <Accordion.Header className="faq-title"> Is the subscription fee mandatory for everyone?</Accordion.Header>

  <Accordion.Body className="faq-box">
    <p>All students and affiliates are required to subscribe to ACCA, and failure to make timely payment may result in the ACCA committee revoking your membership registration and prohibiting the use of the ACCA letters next to your name.</p>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="6" className='faq-row'>
  <Accordion.Header className="faq-title"> Is it worth doing ACCA if I'm a CA?</Accordion.Header>

  <Accordion.Body className="faq-box">
    <p>Undertaking ACCA after CA is worthwhile as it provides an additional globally recognized professional qualification, and fully qualified CAs are eligible for exemption from the first 9 ACCA papers.</p>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="7" className='faq-row'>
  <Accordion.Header className="faq-title"> Is ACCA equal to a Master's degree in Canada?</Accordion.Header>
  <Accordion.Body className="faq-box">
    <p>Completing the ACCA Professional level equates your professional degree to a Master's degree in Canada.</p>
  </Accordion.Body>
</Accordion.Item>
</Accordion>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="CIA-1" className="faq-row">
                <Accordion.Header className="faq-title"> Certified Internal Auditor</Accordion.Header>
                <Accordion.Body className="faq-box">
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

                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="IFRS-1" className="faq-row">
                <Accordion.Header className="faq-title">International Financial Reporting Standards</Accordion.Header>
                <Accordion.Body className="faq-box">
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
     
                </Accordion.Body>
              </Accordion.Item>



              <Accordion.Item eventKey="FNF-1" className="faq-row">
                <Accordion.Header className="faq-title">Finance for NonFinance</Accordion.Header>
                <Accordion.Body className="faq-box">


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


                  
                </Accordion.Body>
              </Accordion.Item> */}




            </Accordion>



          </div>
        </div>
      </section>

      <Footer />

    </>
  );
};

export default FaqSection;
