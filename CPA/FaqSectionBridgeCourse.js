import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FaqSectionBridgeCourse = () => {
    return (
        <section className="section faq-section pt-8">
            <div className="container-l">
                <h3 className="heading02">Frequently Asked Questions(FAQ's)</h3>
                <div className="faq-container">
                    <Accordion >

                        <Accordion.Item eventKey="0" className='faq-row'>
                            <Accordion.Header className="faq-title">Can a BCom sit for CPA exam in India ?</Accordion.Header>

                            <Accordion.Body className="faq-box">
                                <p>Yes, once he registers with the bridge course, he can sit for CPA exam and meet CPA eligibility. </p>
                            </Accordion.Body>

                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='faq-row'>
                            <Accordion.Header className="faq-title">Can a CA inter sit for CPA exam and get license ?</Accordion.Header>

                            <Accordion.Body className="faq-box">
                                <p>yes, as the bridge course will give them 60 credits and thus making them eligible to sit for CPA exam in India.</p>
                            </Accordion.Body>

                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='faq-row'>
                            <Accordion.Header className="faq-title">Do we need to study again for Bridge course ? </Accordion.Header>

                            <Accordion.Body className="faq-box">
                                <p>Great news !!! as Course is integrated with CPA, hence you don’t need to study anything additional and sit for CPA exam in India.</p>
                            </Accordion.Body>

                        </Accordion.Item>

                    </Accordion>
                </div>

            </div>
        </section >
    )
}

export default FaqSectionBridgeCourse