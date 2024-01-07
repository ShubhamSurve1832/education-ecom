import React from 'react'
import Image from 'next/image'
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";

const CorporateEvents = ({ corporateEventData }) => {
    let lists = _.get(corporateEventData, "lists", [])
    return (
        <>
            <section className="section corporateSection">
                <div className="help-container">
                    <div className='mainheading text-center'>
                        <h1 className='heading02'>Corporate Events</h1>
                    </div>
                    <div>
                        <p className='pr-color text-center mt-4'>{corporateEventData.description}</p>
                    </div>
                </div>
                <div className="container">
                    <div className="gridBox">
                        {
                            lists.map((data, index) => {
                                let image = urlConstant.S3_buckets + data.image
                                return (
                                    <div className="box" key={index}>
                                        <img loading='lazy' src={image}  fill={true} sizes='100vw' className='resp-img' alt={data?.alt} />
                                        <div className="overlay">
                                            <a href={data.path} target='_blank' className="btn maroon-btn maroon-arrow-btn">View Post</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default CorporateEvents