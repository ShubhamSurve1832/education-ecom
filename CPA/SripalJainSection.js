import React from 'react'
import Image from 'next/image'
import ReactReadMoreReadLess from "react-read-more-read-less";
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";



const SripalJainSection = ({ SripalData }) => {
    let boxes = _.get(SripalData, "boxes", [])
    return <section className='section sripal-section'>
        <div className='container'>
            <div className='mainheading'>
                <h1 className='heading02'>{SripalData.mainheading}</h1>
            </div>
            <div>
                <p className='pr-color'>{SripalData.maindescription}</p>
            </div>

            <div className="sripal-main-box">
                {
                    boxes.map((data, index) => {
                        let image = urlConstant.S3_buckets + data.path
                        return <div className='sripalBox' key={index}>
                            <div className='sripalImg'>
                                <img loading='lazy' src={image} alt={data.heading} fill={true} sizes='100vw' className='resp-img' />
                            </div>
                            <div className='sripalCaption'>
                                <h3 className='title01'>{data.heading}</h3>
                            </div>
                            <div className='sripalDescription'>

                                <p><ReactReadMoreReadLess
                                    readMoreClassName="readMoreClassName read-more"
                                    charLimit={200}
                                    readMoreText="Read More"
                                    readLessText="Read Less">
                                    {data.para}
                                </ReactReadMoreReadLess></p>
                            </div>
                        </div>
                    })
                }

                {/* <div className='sripalBox'>
                            <div className='sripalImg'>
                                <Image loading='lazy' src='/img/cpa/sripal01.png'></img>
                            </div>
                            <div className='sripalCaption'>
                                <h3 className='title01'>Meeting the Vice President, Mr. Kenneth Koskay and the Leadership Team of Becker Professional Education</h3>
                            </div>
                            <div className='sripalDescription'>
                                <p>Mr. Sripal Jain (CA, CPA) had the pleasure of meeting Mr. Kenneth Koskay (CPA, CFP), Vice President of Becker Professional Education along with the rest of the leadership team at Dallas, USA.  Read More</p>
                            </div>
                        </div> */}
            </div>
        </div>

    </section>


}

export default SripalJainSection