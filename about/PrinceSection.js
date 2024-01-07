import React from 'react'


const PrinceSection = ({ aboutUsData }) => {

    return (
        <section className='princeSection'>
            <div className='container-l'>
                <h2 className='heading02'>Our <span> PRINCE </span>values show how we work together</h2>
                <div className='flex space-between text-center'>
                    {
                        aboutUsData && aboutUsData.list.map(dataSet => (
                            <div className='grid-box'>
                                <div className='inner-box'>
                                    <h2 className='heading01'>{dataSet.heading}</h2>
                                    <p className='title01'>{dataSet.title} </p>
                                </div>
                                <div className='desc-box'>
                                    <p className='desc-para'>{dataSet.desc} </p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default PrinceSection