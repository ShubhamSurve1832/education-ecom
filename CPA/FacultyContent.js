import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";

const FacultyContent = ({ facultyData }) => {
    let members = _.get(facultyData, "members", [])


    return (
        <>
            <section className="facultySection">
                <div className="container">
                    <h1 className="heading02 text-center">Our Faculty</h1>
                    <h2 className='heading03 text-center'>Know about our faculty</h2>

                    <div className="facultyContainer">

                        {
                            members.map((data, index) => {
                                let image = urlConstant.S3_buckets + data.image
                                return (
                                    <div className="box text-center" key={index}>
                                        <div className="facultyImg">
                                            <img loading='lazy' src={image} alt={data.alt} fill={true} sizes='100vw' className='resp-img' />
                                        </div>
                                        <div className="title">
                                            {data.name}
                                            <Link href={data.link}>
                                                <Image loading='lazy' src="/img/cpnAlu/linkedin.webp" alt="linkdin icon" fill={true} sizes='100vw' className='resp-img' />
                                            </Link>
                                        </div>
                                        <div className="content">
                                            <div className="caption">
                                                {data.post}
                                            </div>
                                            <div className="caption">
                                                {data.course}
                                            </div>
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

export default FacultyContent;