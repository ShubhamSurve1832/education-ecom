import React from 'react'
import Image from 'next/image'
import _ from 'lodash'
import { urlConstants as urlConstant } from '../constants/urlConstants'

const TESection = ({ aboutUsData }) => {
    let image = `${urlConstant.S3_buckets + _.get(aboutUsData,"image")}`
    let lists = _.get(aboutUsData,'lists',[])
    return (
        <section className='transform-educ'>
            <div className='education-row'>
                <div className="heading02">
                    {aboutUsData.mainheading}
                </div>
                <div className="heading05">
                    
                    {aboutUsData.name}
                </div>
            </div>
            <div className='TE-flex container-l'>
                <div className='left-box'>
                    <h1 className='heading02'>  {aboutUsData.title}</h1>
                    <p className='m-block'>{aboutUsData.description}</p>
                    <div>
                        <p>{aboutUsData.listheading}</p>
                        <ul>
                            {
                                lists.map((item,index) => {      
                                  
                                    return (
                                        <>
                                            <li key={index}>{item.item}</li>                                         
                                        </>)
                                })
                            }

                        </ul>
                    </div>
                </div>
                <div className='right-box'>
                    {/* <img loading='lazy' src={image}fill={true} sizes='100vw'  className='resp-img' alt={aboutUsData.alt} /> */}
                    <img loading='lazy' src={image}fill={true} sizes='100vw'  className='resp-img' alt="Sripal jain (CA, CPA), Co-Founder - Simandhar Education" />
                </div>
            </div>

        </section>
    )
}

export default TESection