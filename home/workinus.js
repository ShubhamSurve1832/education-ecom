import Image from 'next/image'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";
import { memo } from 'react'

import { useState} from 'react';

function videoSection({ videoData }) {
  let videos = _.get(videoData, "videos", [])
  let tabs = _.get(videoData, "tabs", [])
  // let path = _.get(videoData, "path")

  
  const [showClick, setShowClick] = useState(false);

  // console.log(videoData)
  return (
    <section className="section video-section">
      <div className='container'>
        <h2 className='heading02'>Our Students Living the American Dream </h2>
        <Tab.Group>
          <div className='video-container'>
            <div className='video-lgbox resp-img-box'>
              <Tab.Panels>
                {/* {
                  videos.map(((video, index) => {
                    return ( */}
                     <Tab.Panel >
                      <div className="iframe-box">
                      <div className="video-click" onClick={()=>{setShowClick(true)}} style={{display: showClick ? "none" : "block"}}><Image loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Work+in+US+3.jpg" alt="video img" fill={true} sizes='100vw' className='resp-img' /></div>
                        {
                          showClick ?  <iframe src="https://www.youtube.com/embed/W2czHgphtg4?si=ZbVmZnEESXWVyJW3" frameBorder="0" allowFullScreen></iframe>  : ""
                        }

                      </div>
                    </Tab.Panel>


                    <Tab.Panel >
                      <div className="iframe-box">
                      <div className="video-click" onClick={()=>{setShowClick(true)}} style={{display: showClick ? "none" : "block"}}><Image loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Work+in+US+1.jpg" alt="video img" fill={true} sizes='100vw' className='resp-img' /></div>
                        {
                          showClick ?  <iframe src="https://www.youtube.com/embed/8UM-5MfnBwQ?si=YeuRNgSB3yCLFG0m
                          " frameBorder="0" allowFullScreen></iframe>  : ""
                        }

                      </div>
                    </Tab.Panel>

                    <Tab.Panel >
                      <div className="iframe-box">
                      <div className="video-click" onClick={()=>{setShowClick(true)}} style={{display: showClick ? "none" : "block"}}><Image loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Work+in+US+2.jpg" alt="video img" fill={true} sizes='100vw' className='resp-img' /></div>
                        {
                          showClick ?  <iframe src="https://www.youtube.com/embed/6JoEx7hJQug?si=X98sk0CA-l4n_pC1" frameBorder="0" allowFullScreen></iframe>  : ""
                        }

                      </div>
                    </Tab.Panel>

                    
                    {/* )
                  }))
                } */}
              </Tab.Panels>
            </div>
            <div className='video-thumbbox'>
              <Tab.List className='thumb-wrap custom-scrollbar'>
                {/* {
                  tabs.map(((tabdata, index) => {
                    let image = `${urlConstant.S3_buckets + _.get(tabdata,'path')}`
                    return ( */}
                        <Tab className='thumb-row' onClick={()=>{setShowClick(true)}}>
                        <i className='thumb-img  resp-img-box'><Image priority  src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Work+in+US+3.jpg" width={500}  height={500} className='resp-img' alt="Anushree" /></i>
                        <div className='video-info'>
                          <h2 className='heading06'>Simandhar CPA aspirant- Anushree | MS Accounting, University of Washington, Tacoma</h2>
                          <span>span</span>
                        </div>
                      </Tab>

                      <Tab className='thumb-row' onClick={()=>{setShowClick(true)}}>
                        <i className='thumb-img  resp-img-box'><Image priority  src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Work+in+US+1.jpg" width={500}  height={500} className='resp-img' alt="MS Accounting STEM Program" /></i>
                        <div className='video-info'>
                          <h2 className='heading06'>MS Accounting STEM Program - Student Review | University of Washington, Tacoma | Simandhar Education</h2>
                          {/* <span>span</span> */}
                        </div>
                      </Tab>

                      <Tab className='thumb-row' onClick={()=>{setShowClick(true)}}>
                        <i className='thumb-img  resp-img-box'><Image priority  src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Work+in+US+2.jpg" width={500}  height={500} className='resp-img' alt="USA Mastering Success " /></i>
                        <div className='video-info'>
                          <h2 className='heading06'>Dream to study in USA Mastering Success with Simandhar Education | Unveiling the STEM Program at UWT</h2>
                          {/* <span>span</span> */}
                        </div>
                      </Tab>

                  

                     
                    {/* )
                  }))
                } */}
              </Tab.List>
              {/* <Link href="/testimonial-videos#testimonial-video-tab" className='btn maroon-border-btn maroon-border-btn-arrow'>View More</Link> */}
            </div>
          </div>
        </Tab.Group>
      </div>
      <div className="clear"></div>
    </section>
  )
}
export default memo(videoSection)