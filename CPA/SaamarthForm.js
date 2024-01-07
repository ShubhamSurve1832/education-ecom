import React from 'react'
import CommonForm from '../components/CommonForm'
const SaamarthForm = () => {
    return (
        <section className='saamarth-form'>
            <div className="container-l">
                <div className='left-box'>
                    <h3 className="heading03">Discover Your Dream Job with the Big 4</h3>
                    <h4 className="heading08">Mode of Training: Virtual Duration: 40 hours</h4>
                    <p className='title01'>Registration Fee: Rs. 15000/- (inclusive of taxes)
                      <br/>  *Valid for one year.</p>
                </div>
                <div className="right-form-box">
                    <CommonForm showcourse={true} showRadio={true} showPara={true} formName="training form saamarth" />
                </div>
            </div>
        </section>
    )
}

export default SaamarthForm