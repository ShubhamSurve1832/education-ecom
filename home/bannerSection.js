import Image from 'next/image'
import React, { useEffect } from 'react'
import Slider from 'react-slick'
import _ from 'lodash'
import { memo } from 'react'
import { urlConstants as urlConstant } from "@/constants/urlConstants";



const bannerSection = ({ showPopup, indexData }) => {

  var bannerSlider = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  let banners = _.get(indexData,"banners",[])



  return (
    <>
      <section className="banner-section flex">
        <div className="right-box">
          <Slider {...bannerSlider}>
            {
              banners.map((data, index) => {
              
               let image1 = `${urlConstant.S3_buckets + _.get(data,"desktopBanner")}`
               let image2 = `${urlConstant.S3_buckets + _.get(data,"mobileBanner")}`
                return (
                  <div className='banner-slider' key={index}>
                    <div className="banner-inner-slider">
                      <div className="banner-content">
                        <img priority src={image1}    className='resp-img desktop' alt={data.name} />
                        <img priority src={image2}    className='resp-img mobile' alt={data.name} />
                      </div>
                    </div>
                  </div>
                )
              })
            }




          </Slider>
        </div>

      </section>

    </>
  )
}


export default memo(bannerSection);