import React from 'react'
import _ from 'lodash'

const ExpPlaceInfo = ({ aboutUsData }) => {    
    let list = _.get(aboutUsData,"list",[])
    return (
        <>
            <section className='values'>
                <p className='heading05'>

                    {aboutUsData.mainheading}
                </p>
                <div className='four-box-grid'>
                    {
                        list.map((values, index) => (

                            <div className='grid-box' key={index}>
                                <h4 className='heading02' > {values.value}</h4>
                                <h4 className='title'>{values.title}</h4>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default ExpPlaceInfo