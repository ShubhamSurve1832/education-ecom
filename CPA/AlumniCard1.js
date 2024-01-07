import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";

const AlumniCard1 = ({ AlumniCardData }) => {
   

    return (
        <>
            {
                AlumniCardData.map((data, index) => {
                    let image = urlConstant.S3_buckets + data.img
                    let company = urlConstant.S3_buckets + data.company
                    let icon = urlConstant.S3_buckets + data.icon
                    return (
                        <div className="box text-center" key={index}>
                            <div className="achiverImg">
                                <img loading='lazy' src={image} alt={data.name}fill={true} sizes='100vw' className='resp-img alumni-img' />
                            </div>
                            <div className="title">
                                {data.name}
                            </div>
                            {/* <div className="discription">
                                {data.description}
                            </div> */}
                            <div className="company">
                                <div className="caption">
                                    Placed at
                                </div>
                                <div className="icon">
                                    <img loading='lazy' src={company} alt= {data.name}fill={true} sizes='100vw' className='resp-img' />
                                </div>
                            </div>
                            <div className="youtube">
                                <Link href={data.path} target='_blank'> <img loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/icons8-linkedin-48.png" alt= {data.name}fill={true} sizes='100vw' className='resp-img ' /></Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default AlumniCard1