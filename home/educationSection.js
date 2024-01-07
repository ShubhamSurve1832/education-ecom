import Image from 'next/image'
import { memo } from 'react'
import { urlConstants as urlConstant } from "@/constants/urlConstants";
import _ from 'lodash'


 function educationSection({indexData}) {
  let image1 =`${urlConstant.S3_buckets + _.get(indexData,'img1')}`
  let image2 =`${urlConstant.S3_buckets + _.get(indexData,'img2')}`
  return (
    <section className="section education-section">
      <div className='container eduction-container'>
        <div className='info-box'>
            <h1 className='heading02'>{indexData.mainheading}</h1>
            <p>{indexData.description}</p>
            <div className='edubox-wrap'>
                <div className='edu-row'>
                    <span className='edu-tab'>{indexData.list1}</span>
                    <span className='edu-tab'>{indexData.list2}</span>
                </div>
                <div className='edu-row'>
                    <span className='edu-tab'>{indexData.list3}</span>
                    <span className='edu-tab'>{indexData.list4}</span>
                    <span className='edu-tab'>{indexData.list5}</span>
                </div>
            </div>    
        </div>
        <div className='edu-adbox'>
            <div className='edbox resp-img-box'>
                {image1 ?  <Image  fill={true}
            sizes="100vw" loading='lazy' src={image1} className='resp-img' alt='Corporate tie ups'/> : "" }
            </div>
            <div className='edbox resp-img-box'>
               {
                image2 ? 
               <Image width={500}
        height={300} loading='lazy' src='https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/5-Elijah-Watt-Sells.jpg' className='resp-img' alt='Elijah watt sells award winner'/> : "" }
            </div>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  )
}

export default memo(educationSection)