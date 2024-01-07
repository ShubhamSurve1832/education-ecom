import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useState } from "react";
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";

const corporateRecord = ({ corporateEventData, showData }) => {
  var settings = {
    dots: false, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: { slidesToShow: 1, slidesToScroll: 1, }
      },

    ]
  };

  const [file, setFile] = useState(null)

  let lists = _.get(corporateEventData, "lists", [])
  // console.log(corporateEventData)

  return (
    <>
      <section className="corporateRecord_section">
        <div className="container">
          <div className="mainheading">
            <h2 className="heading02">{corporateEventData.mainheading}</h2>
          </div>
          <div>
            {showData ? (
              <p className="heading05 mt-4">Watch Recent Webinars</p>
            ) : (
              ""
            )}
          </div>

          <Slider {...settings} className="gridRow">
            {lists.map((data, index) => {
              let thumbnail = urlConstant.S3_buckets + data.thumbnail
              return (
                <>
                  <div className="box" key={index} onClick={() => setFile(data)}>
                    <div className="content">
                      <div className="content_img">
                        <img
                          src={thumbnail}
                          alt="CPA Exam in India"
                          fill={true} sizes='100vw'
                          className="resp-img"
                        />
                        <div className="overlay text-center">
                          <p className="overlay_img">
                            <Image
                              src="/img/cpa-inner/videoIcon.png"
                              alt="CPA Exam in India"
                              fill={true} sizes='100vw'
                              className="resp-img"
                            />
                            Watch Video
                          </p>
                        </div>
                      </div>
                      <div className="content_txt">
                        <p className="title01">{data.title}</p>
                      </div>
                    </div>
                  </div>


                </>
              );
            })
            }
          </Slider>
          < div className='popup' onClick={() => setFile(null)} style={{ display: file ? 'block' : 'none' }}>
            <span className='close-pp' onClick={() => setFile(null)}>
              <Image loading='lazy' src="/img/white_cross.png" alt="white cross image" fill={true} sizes='100vw' className='resp-img' /></span>
            {file && <iframe src={`${file?.path}`} ></iframe>}
          </div>
        </div >
      </section >
    </>
  );
};

export default corporateRecord;
