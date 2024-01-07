import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";

const PlacementSection = ({ PlacementData }) => {

  let list = _.get(PlacementData, "list", [])
  const [isShow, setShow] = useState(false);
  const [buttonText, setButtonText] = useState(false);
  const showContent = () => {
    setShow(!isShow);
    setButtonText(!buttonText);
  };

  return (
    <>
      <section className="section placement-section pt-0">
        <div className="container-l">
          <h2 className="heading02">{PlacementData.mainheading}</h2>
          <div className="partner-container">
            <div className="partner-logo-box">
              {list.map((item, index) => {
                let image = urlConstant.S3_buckets + item.image
                return (
                  <div className="logo-box resp-img-box" key={index}>
                    <img
                      src={image}
                      alt={item?.imgAlt}
                      fill={true} sizes='100vw'
                      className="resp-img"
                    />
                  </div>
                );
              })}
              {/* <div className="logo-box resp-img-box">
                <Image loading='lazy' src="/img/cpa/logo05.png" alt=""fill={true} sizes='100vw'  className='resp-img' />
              </div>

              <div className="logo-box resp-img-box">
                <Image loading='lazy' src="/img/cpa/logo04.png" alt=""fill={true} sizes='100vw'  className='resp-img' />
              </div>
              <div className="logo-box resp-img-box">
                <Image loading='lazy' src="/img/cpa/logo01.png" alt=""fill={true} sizes='100vw'  className='resp-img' />
              </div>
              <div className="logo-box resp-img-box">
                <Image loading='lazy' src="/img/cpa/logo03.png" alt=""fill={true} sizes='100vw'  className='resp-img' />
              </div>
              <div className="logo-box resp-img-box">
                <Image loading='lazy' src="/img/cpa/logo02.png" alt=""fill={true} sizes='100vw'  className='resp-img' />
              </div>
              <div className="logo-box resp-img-box">
                <Image loading='lazy' src="/img/cpa/pwc_logo.png" alt=""fill={true} sizes='100vw'  className='resp-img' />
              </div>
              <div className="logo-box resp-img-box">
                <Image loading='lazy' src="/img/cpa/grant_logo.png" alt=""fill={true} sizes='100vw'  className='resp-img' />
              </div> */}
              <div className="logo-box resp-img-box">
                <Link
                  href="/simandharTieUps"
                  className="btn maroon-border-btn maroon-border-btn-arrow"
                >
                  View All Partners
                </Link>
              </div>
            </div>
            <div className="partner-addbanner resp-img-box">
              <Image
                src={PlacementData.image}
                alt="Ey leadership appreciating Simandhar"
                fill={true} sizes='100vw'
                className="resp-img"
              />
            </div>
          </div>
          <div className={"content" + " " + (isShow ? "active" : "")}>
            <p className="title">About Ernst & Young:</p>
            <p>
              {" "}
              Ernst & Young is a multinational professional services partnership
              headquartered in London, England. EY is one of the largest
              professional services networks in the world. It is one of the Big
              4 accounting firms. It primarily provides assurance, which
              includes financial audit, tax, consulting, and advisory services
              to its clients.
            </p>
            <p className="title">
              Simandhar’s collaboration with Ernst & Young:
            </p>
            <p>
              Simandhar Education's vision of enabling people all over the world
              to advance their careers through a CPA course and CMA course by
              offering jobs at EY is widely admired.
            </p>
            <p>
              EY Leadership appreciation was received by Simandhar for placing
              two Elijah Watt Sells Award winners at its organization. It is
              assured that Simandhar is working in the right direction when the
              appreciation comes from EY Leadership itself. The partnership with
              EY-GDS Tax and EY Assurance has proved to be fruitful because,
              through this relationship, the lives of so many talented
              individuals have been transformed.
            </p>
            <p>
              Dhruv Patel (CPA alumnus) won the Elijah Watt Sells Award for
              scoring great numbers in the CPA exam. 98 in BEC, 97 in REG, 98 in
              FAR, and 91 in AUD. He was placed in EY within 4 days of
              completing his CPA course. On the other hand, Kavneet Hanspal (CPA
              alumnus), who also won the Elijah Watt Sells award by scoring 99
              in BEC, 97 in REG, 96 in FAR, and 93 in AUD, was placed at EY
              within a week of completing his CPA course. Both Dhruv and Kavneet
              were placed with a salary package of more than 9 LPA.{" "}
            </p>
            <p>
              Moreover, 49 CMA and CPA students who were sent to EY for
              internships have been offered full-time roles.
            </p>
            <p>
              Simandhar Education has been helping EY build a strong future with
              a huge talent pool. This partnership will result in the shaping of
              the careers of many individuals.
            </p>
          </div>
          <div className="text-center">
            {/* <a className='btn maroon-btn maroon-arrow-btn btn1'> View More </a> */}
            <a
              className="btn maroon-btn maroon-arrow-btn"
              onClick={showContent}
            >
              {buttonText ? "Read Less " : "Read More"}
            </a>
            {/* <a className='btn maroon-btn maroon-arrow-btn btn2'> View Less </a> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PlacementSection;
