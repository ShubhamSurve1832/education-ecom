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
        <h2 className='heading02'>{videoData.mainheading}</h2>
        <Tab.Group>
          <div className='video-container'>
            <div className='video-lgbox resp-img-box'>
              <Tab.Panels>
                {
                  videos.map(((video, index) => {
                    return (<Tab.Panel key={index}>
                      <div className="iframe-box">
                      <div className="video-click" onClick={()=>{setShowClick(true)}} style={{display: showClick ? "none" : "block"}}><Image loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/MicrosoftTeams-image+(15).png" alt="video img" fill={true} sizes='100vw' className='resp-img' /></div>
                        {
                          showClick ?  <iframe src={video.path} frameBorder="0" allowFullScreen></iframe>  : ""
                        }

                      </div>
                    </Tab.Panel>
                    )
                  }))
                }
              </Tab.Panels>
            </div>
            <div className='video-thumbbox'>
              <Tab.List className='thumb-wrap custom-scrollbar'>
                {
                  tabs.map(((tabdata, index) => {
                    let image = `${urlConstant.S3_buckets + _.get(tabdata,'path')}`
                    return (
                      <Tab className='thumb-row' key={index} onClick={()=>{setShowClick(true)}}>
                        <i className='thumb-img  resp-img-box'><Image priority src={image}width={500}  height={500} className='resp-img' alt={tabdata.banAlt} /></i>
                        <div className='video-info'>
                          <h2 className='heading06'>{tabdata.heading}</h2>
                          <span>{tabdata.span}</span>
                        </div>
                      </Tab>
                    )
                  }))
                }
              </Tab.List>
              <Link href="/testimonial-videos#testimonial-video-tab" className='btn maroon-border-btn maroon-border-btn-arrow'>View More</Link>
            </div>
          </div>
        </Tab.Group>
      </div>
      <div className="clear"></div>
    </section>
  )
}
export default memo(videoSection)