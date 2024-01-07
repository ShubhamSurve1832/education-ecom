import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";
import Image from 'next/image'

const SECFeactures = ({ indexData }) => {

    const lists = _.get(indexData, "lists",[])

    return (
        <>
            <section className='SECfeature mt-6'>
                <div className="container-m">
                    <h2 className="heading02 text-center">{indexData.mainheading}</h2>
                    <div className='feature_container mt-6'>
                        {
                            lists.map((data,index) => {
                                let image = urlConstant.S3_buckets + data.image
                                return (
                                    <div className="card" key={index}>
                                        <img loading='lazy' src={image}fill={true} sizes='100vw'  className='resp-img' alt='' />
                                        <h5 className="heading05">{data.title}</h5>
                                        <p>{data.description}</p>
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

export default SECFeactures