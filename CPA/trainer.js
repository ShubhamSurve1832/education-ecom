import React from 'react'
import Image from 'next/image'

const trainer = ({ trainerData }) => {
    return (
        <section className='trainer-section pb-8'>
            <div className="container-l">
                <div className="box">
                    <div className="right_box">
                        <h2 className="heading02">{trainerData.mainheading}</h2>
                        <div className="txt">

                            {trainerData.para.map(((pass,index) => {
                                return  <p key={index}>{pass.text}</p>
                                   
                            }))}
                        </div>
                    </div>
                    <div className="left_box">
                        <img loading='lazy' src={trainerData.img} alt="Our CIA trainer sudha murthy" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default trainer