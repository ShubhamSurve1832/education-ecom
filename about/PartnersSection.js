import React from 'react'
import Image from 'next/image'
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";

const PartnersSection = ({ aboutUsData }) => {
    let list = _.get(aboutUsData,"list",[])
    // console.log(aboutUsData)
    return (
        <section className='partners-section'>

            <h3 className='heading02 text-center'>OUR OFFICIAL PARTNERS</h3>
            <div className='container-s'>
                <div className='partners-grid'>
                    {
                        list && list.map(images => {
                            let img = `${urlConstant.S3_buckets + images.path}`
                        
                            return(
                                <div className='grid-box'>
                                    <img loading='lazy' src={img} className='resp-img' alt={images.imgAlt} />  
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default PartnersSection  