import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CmaCurriculum = () => {
  return (
<>
<section className='cmacuriculam-section help-section'>
    <div className='container-l'>
        <h1 className='heading02 text-center pb-5'>CMA Curriculum</h1>
        <div className='curiculam-row'>
            <div className='left-currirow'>
                
                <div className='curriculam-ifram'>
                <iframe src="https://www.youtube.com/embed/15yyFgj3Lb4"></iframe>
                </div>
                <h7 className='heading04 text-center mt-2 display-block'>CMA Part 1</h7>
                    <div className='curiculam-disc mt-5'>
                        <h7 className="heading04">Financial Reporting, Planning</h7>
                        <div className='inner-row'>
                            <div className='curiculam-box'>
                            <h8 className="heading07">Syllabus</h8>
                            <ul className='mt-2'>
                                <li>External Financial Reporting Decisions (15%)</li>
                                <li>Planning, Budgeting and Forecasting (30%)</li>
                                <li>Performance Management (20%)</li>
                                <li>Cost Management (20%)</li>
                                <li>Internal Controls (15%)</li>
                            </ul>
                            </div>
                            <div className='curiculam-box mt-2'>
                            <h8 className="heading07">Duration</h8>
                            <ul className='mt-2'>
                                <li>4 hour Exam</li>
                            </ul>
                            </div>
                            <div className='curiculam-box mt-2'>
                            <h8 className="heading07">Question Pattern</h8>
                            <ul className='mt-2'>
                                <li>500 (passing percentage 72%)</li>
                            </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='right-currirow'>
                <div className='curriculam-ifram'>
            <iframe src='https://www.youtube.com/embed/e7GBiE7ftxc'></iframe>
            </div>
            <h7 className='heading04 text-center mt-2 display-block'>CMA Part 2</h7>
            <div className='curiculam-disc mt-5'>
                        <h7 className="heading04">Financial Reporting, Planning</h7>
                        <div className='inner-row'>
                            <div className='curiculam-box'>
                            <h8 className="heading07">Syllabus</h8>
                            <ul className='mt-2'>
                                <li>Financial Statement Analysis (25%)</li>
                                <li>Corporate Finance (20%)</li>
                                <li>Decision Analysis (20%)</li>
                                <li>Risk Management (10%)</li>
                                <li>Investment Decisions (15%)</li>
                                <li>Professional Ethics (10%)</li>
                            </ul>
                            </div>
                            <div className='curiculam-box mt-2'>
                            <h8 className="heading07">Duration</h8>
                            <ul className='mt-2'>
                                <li>4 hour Exam</li>
                            </ul>
                            </div>
                            <div className='curiculam-box mt-2'>
                            <h8 className="heading07">Marks</h8>
                            <ul className='mt-2'>
                                <li>500 (passing percentage 72%)</li>
                            </ul>
                            </div>
                            <div className='curiculam-box mt-2'>
                            <h8 className="heading07">Question Pattern</h8>
                            <ul className='mt-2'>
                                <li>3 hours- 100 multiple choice question(weightage 75%) and 1 hour- 2 essay type question(weightage 25%)</li>
                            </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    </div>
</section>

</>
  )
}

export default CmaCurriculum
