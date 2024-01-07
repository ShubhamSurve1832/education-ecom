import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";

const StudentCorner = ({ blogCardData }) => {
  
  return (
    <>
      <div className="student-corner-row">
        <div className="student-corner-left-row">
          {
            blogCardData?.boxes.map(((data, index) => {              
              // let image = urlConstant.S3_buckets + data.img
              let image = data.img
              return <div className='student-corner-left-box' key={index}>
                <h6 className="heading06"><Link href={data.path}> <span>{data.spanheading}</span> </Link>| {data.smallheading}</h6>
                <h2 className="heading03">{data.subheading}</h2>
                <p>{data.description}</p>
                <Link href={data.readmore}>Read More</Link>
                <div className="student-img">
                {
                  image && <img loading='lazy' alt={data.subheading} src={image} fill={true} sizes='100vw' className='resp-img'/>
                } 
                </div>
              </div>
            }))
          }
        </div>
      </div>




    </>
  )
}

export default StudentCorner
