import React from 'react'
import Image from 'next/image';
import _ from 'lodash'
import { urlConstants as urlConstant } from '../constants/urlConstants'

const VisionSection = ({ aboutUsData }) => {

    return (
        <section>
            <div className='three-box-grid'>
                {
                    aboutUsData && aboutUsData.map((setData) => {
                        let image = `${urlConstant.S3_buckets + (setData.path)}`
                        return (
                            <div className='grid-box'>
                                <img loading='lazy' src={image} fill={true} sizes='100vw' alt={setData.title} className='resp-img' />
                                <h3 className='heading04'>{setData.title}</h3>
                                <p>{setData.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default VisionSection;