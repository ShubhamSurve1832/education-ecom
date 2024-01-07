import Image from "next/image";
import Link from "next/link";
import { urlConstants as urlConstant } from "@/constants/urlConstants";
import _ from 'lodash'
import { memo } from "react";

 function placementSection({ indexData }) {
  console.log("placement data",indexData)
  let lists = _.get(indexData, "list", []);
  return (
    <section className="section pm-section pt-0 " id="placement-alumni">
      <div className="container">
        <h2 className="heading02">{indexData.mainheading}</h2>
        <div className="pm-container">
          {lists.map((data, index) => {
           let image = `${urlConstant.S3_buckets + _.get(data,"img")}`
            return (
              <div className="pm-box" key={index}>
                <figure>
                  <div className="pm-img resp-img-box">
                    <Image  
                      src={image}
                      fill={true}
                      sizes="100vw" 
                      loading='lazy'                       
                      className="resp-img"
                      alt={data.altName}
                    />
                  </div>
                  <figcaption>
                    <h6>{data.name}</h6>
                    <p>{data.course}</p>
                  </figcaption>
                </figure>
                <Link
                  href={data.path}
                  className="btn maroon-border-btn maroon-border-btn-arrow"
                >
                  {data.btn}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default memo(placementSection)