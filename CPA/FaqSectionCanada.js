import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


const FaqSectionCanada = () => {
    return (
        <section className="section faq-section faq-section-cia pt-8">
            <div className="container-l">
                <h3 className="heading02">Frequently Asked Questions(FAQ's)</h3>
                <div className="faq-container">
                    <Accordion >
                        <Accordion.Item eventKey="0" className='faq-row'>
                            <Accordion.Header className="faq-title"> What is CPA Canada?</Accordion.Header>
                            <Accordion.Body className="faq-box">
                                <p>CPA Canada is also known as Chartered Professional Accountants of Canada. It is basically the national organization that represents the Canadian accounting profession through the unification of the three biggest accounting organizations: CMA Canada, CGA Canada, & CICA. Canada made a big decision by merging its accounting qualifications - CA, CMA, CGA into one big ‘CPA’.</p>
                                <p>CPA Canada is one of the prestigious accounting organizations globally and is immensely respected in the business, government and non-profit sectors.</p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1" className='faq-row'>
                            <Accordion.Header className="faq-title">How can a US CPA earn Canadian CPA?</Accordion.Header>
                            <Accordion.Body className="faq-box">
                                <div className="list-unstyled ">
                                    <p>U.S. CPAs can hold CPA Canada certification without additional exams.</p>
                                    <p>CPA Canada Requirements:</p>
                                    <ul>
                                        <li>Part 1 : 2hrs 30Min<b className="bold">125 MCQ’s</b></li>
                                        <li>Part 2 : 2hrs <b className="bold">100 MCQ’s</b></li>
                                        <li>Part 3 : 2hrs<b className="bold">100 MCQ’s</b></li>
                                    </ul>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" className='faq-row'>
                            <Accordion.Header className="faq-title">What is Mutual Recognition Agreement (MRA)?</Accordion.Header>
                            <Accordion.Body className="faq-box">
                                <div className="list-unstyled ">
                                    <p>From January 1, 2018, Mutual Recognition Agreement (MRA) has been established between</p>
                                    <ol>
                                        <li>All Canadian CPA bodies</li>
                                        <li>International Qualifications Appraisal Board (IQAB), representing AICPA and NASBA.</li>
                                    </ol>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='faq-row'>
                            <Accordion.Header className="faq-title">What is the salary of a Certified Public Accountant (CPA) in            Canada?</Accordion.Header>
                            <Accordion.Body className="faq-box">
                                <p>According to Payscale, the average salary of a Certified Public Accountant (CPA) in Canada is C$61,708.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='faq-row'>
                            <Accordion.Header className="faq-title">When can I reschedule for the exam in case I don’t clear them in the first attempt? </Accordion.Header>
                            <Accordion.Body className="faq-box">
                                <div className="list-unstyled ">
                                    <ul>
                                        <li>Confirm that you are a U.S. CPA</li>
                                        <li>Listing all relevant experience</li>
                                        <li>Submit the documents that are needed</li>
                                        <li>Then obtain Canadian CPA credential</li>
                                    </ul>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FaqSectionCanada