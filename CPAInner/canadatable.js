import React from 'react'
import JournerySection from '../CPA/JournerySection'
import Usp from '../home/uspSection'
import Image from 'next/image'
import journeyData from '../database/data/journeySection.json'
import indexData from '../database/index.json'


const canadatable = () => {
    return (
        <>
            <div className="section canada-section analytics-section ">
                <div className="container">
                    {/* <h2 className='heading02'>How to obtain the Canada CPA designation?</h2> */}
                    {/* <JournerySection journeyData={journeyData.canadaPage} /> */}

                    <h3 className="title001">
                        U.S. CPAs (Certified Public Accountants) who are, or have been, Canadian residents must meet certain additional requirements.
                    </h3>
                    <div className="progam-info">
                        <p className="title01">Applicants who wrote one or more parts of the U.S. Uniform CPA examination while:
                        </p>
                        <ul className=''>
                            <li>Being a resident of Canada; or</li>
                            <li>After they returned as a resident to Canada; or</li>
                            <li>After they became a resident of Canada</li>
                        </ul>
                    </div>
                    <div className="progam-info">
                        <p className="title01">Apart from the eligibility requirements mentioned above, if candidates have obtained either of these:
                        </p>
                        <ul className=''>
                            <li>A University degree from an authorised degree granting institution in USA (United States of America).This degree must have been given after the student attends the institution physically or on a full-time basis.</li>
                            <li>Or the  candidate should have at least one year of full-time practical experience in accounting in USA.</li>
                        </ul>
                    </div>

                    <div className="part-table">
                        <Usp indexData={indexData.canadaUSP} />
                    </div>

                    <div className="part-table">
                        <h3 className="heading04 text-center">Pathway to Canadian CPA for non - CA/CPA</h3>
                        <Image loading='lazy' src="/img/cpa/qualiflying.webp" fill={true} sizes='100vw' className='resp-img' alt="Qualifying practial exam of CPA" />
                    </div>


                    <div className="part-table">
                        <h2 className="heading02">
                            Salary for CPA Canada
                        </h2>
                        <div className="title01">
                            According to Payscale, the average salary of a Certified Public Accountant (CPA) in Canada is C$61,708.
                        </div>
                    </div>

                    <div className="part-table">
                        <h2 className="heading02">
                            US CPA Exam to Test in Canada
                        </h2>
                        <div className="title01">
                            NASBA and AICPA administered the US CPA exam in Canada at approved CPA Prometric test locations/centers. The Canadian CPA aspirants/students may schedule to take the US CPA exam in approved Prometric locations in Canada from December 8 2020.
                        </div>
                        {/* <div className="title01">
                            For complete details about CPA exam in Canada and CPA Canada requirements for international students click here
                        </div> */}
                    </div>


                    <div className="part-table">
                        <h2 className="heading02">
                            10 Provinces and 3 Territories for CPA Canada
                        </h2>
                        <div className="title01">
                            The Canadian CPA is regulated in 10 provinces and 3 territories in Canada.
                        </div>
                    </div>
                    <div className="part-table">
                        <Image loading='lazy' src="/img/cpa/map.webp" fill={true} sizes='100vw' className='resp-img' alt="10 Provinces and 3 Territories for CPA Canada" />
                    </div>


                </div>
            </div>
        </>
    )
}

export default canadatable