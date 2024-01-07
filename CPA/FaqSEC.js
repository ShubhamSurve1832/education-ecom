import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


const FaqSEC= () => {
    return (
        <section className="section faq-section pt-8">
            <div className="container-l">
                <h2 className="heading02">Frequently Asked Questions(FAQ's)</h2>
                <div className="faq-container">
                    <Accordion >

                        <Accordion.Item eventKey="0" className='faq-row'>
                            <Accordion.Header className="faq-title">What kind of activities can I expect as a member of the SEC?</Accordion.Header>

                            <Accordion.Body className="faq-box">
                                <p>The SEC offers a diverse range of activities from corporate sessions, alumni meetups, habit building workshops, yoga sessions and lots more planned activities for the holistic development of students. </p>
                            </Accordion.Body>

                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='faq-row'>
                            <Accordion.Header className="faq-title">What are the benefits of the SEC certification?</Accordion.Header>

                            <Accordion.Body className="faq-box">
                                <p>Participation in educationally effective practices, will lead to measurable results. Some of the benefits of SEC are: Learning with peers, developing leadership skills, making friends, learning life skills, interpersonal skills, having fun, etc.</p>
                            </Accordion.Body>

                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='faq-row'>
                            <Accordion.Header className="faq-title">What is the SEC monthly newsletter? </Accordion.Header>

                            <Accordion.Body className="faq-box">
                                <p>The monthly newsletter of the SEC is called “The Fiscal”. This newsletter covers handpicked articles about the latest happenings in the finance and accounting domain to help you stay up-to-date and not miss out on current trends.</p>
                            </Accordion.Body>

                        </Accordion.Item>

                    </Accordion>
                </div>

            </div>
        </section >
    )
}

export default FaqSEC