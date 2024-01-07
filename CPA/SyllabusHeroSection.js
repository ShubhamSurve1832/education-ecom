import React, { useState } from 'react'
import _ from 'lodash'
import Image from 'next/image'
import { urlConstants as urlConstant } from "@/constants/urlConstants";
const SyllabusHeroSection = ({ corporateData }) => {
    const [file, setFile] = useState(null)

    let lists = _.get(corporateData, "lists", [])

    return (
        <>
            <section className='cpa-syllabus'>
                <h2 className='heading02 text-center'>CPA Curriculum</h2>
                <div className='container'>
                    <div className='grid'>
                        {
                            lists.map((data, index) => {
                                let thumbnail = urlConstant.S3_buckets + data.thumbnail
                                return (
                                    <div className="box" key={index} onClick={() => setFile(data)}>
                                        <img loading='lazy' src={thumbnail} alt={data.title} fill={true} sizes='100vw' className='resp-img' />
                                        <h5 className='heading04'>{data.title}</h5>
                                    </div>

                                )
                            })
                        }

                        < div className='popup' onClick={() => setFile(null)} style={{ display: file ? 'block' : 'none' }}>
                            <span className='close-pp' onClick={() => setFile(null)}>
                                <Image loading='lazy' src="/img/white_cross.png" alt="white cross" fill={true} sizes='100vw' className='resp-img' /></span>
                            {file && <iframe src={`${file?.path}`} ></iframe>}
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SyllabusHeroSection