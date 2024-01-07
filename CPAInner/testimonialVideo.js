import Image from 'next/image'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";
import { memo } from 'react'

function testimonialVideoSection({ videoData }) {
  let videos = _.get(videoData, "videoUrl")
  let tabs = _.get(videoData, "tabs", [])
  let path = _.get(videoData, "path")
  console.log(videoData,videos)
  return (
    <section className="section video-section">
      <div className='container'>
        {/* <h2 className='heading02'>{videoData.mainheading}</h2> */}
        <Tab.Group>
          <div className='video-container'>
            <div className='video-lgbox resp-img-box'>
              <Tab.Panels>
                {
                  videoData?.map(((video, index) => {                   
                    let {videoUrl} = video;
                    return (<Tab.Panel key={index}>
                      <iframe src={videoUrl} frameBorder="0" allowFullScreen></iframe>
                    </Tab.Panel>
                    )
                  }))
                }
              </Tab.Panels>
            </div>
            <div className='video-thumbbox'>
              <Tab.List className='thumb-wrap custom-scrollbar'>

                {
                   videoData?.map(((tabdata, index) => {
                    let {title,videoTag} = tabdata;
                    let image = `${urlConstant.S3_buckets + _.get(tabdata,'thumbnail')}`
                    return (
                      <Tab className='thumb-row' key={index}>
                        <i className='thumb-img  resp-img-box'><Image priority src={image}width={500}  height={500} className='resp-img' alt={tabdata.banAlt} /></i>
                        <div className='video-info'>
                          <h2 className='heading06'>{title}</h2>
                          <span>{videoTag}</span>
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
export default memo(testimonialVideoSection)