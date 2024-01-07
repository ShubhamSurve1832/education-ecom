import React from 'react'
import Image from 'next/image'
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";

const Gallery = ({ galleryData }) => {

    return (
        <>
            <section className='gallery-section background-gradient'>
                <div className='container-l2'>
                    <div className='gallery-box'>
                        {
                            galleryData.map(((data,index) => {
                                let image = urlConstant.S3_buckets + data.path
                                return (
                                    <div className='gallery-img' key={index}>
                                        <img loading='lazy' src={image}fill={true} sizes='100vw' alt={data.galAlt} className='resp-img' />
                                    </div>
                                )
                            }))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery