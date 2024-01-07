import React from "react";
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";
import Image from "next/image";
import Link from "next/link";


const CorporateLogos = ({
  corporateLogosData,
  index,
  showHeading,
  showButton,
  showDescription1,
  showDescription2,
}) => {
  let lists = _.get(corporateLogosData, "lists", []);
  return (
    <>
      <section className="simandhartieups-section" key={index}>
        <div className="container">
          {showHeading ? <h1 className="heading02">Corporate Tie-Ups</h1> : " "}

          <div>
            {showDescription1 ? (
              <p>
                Mr. Sripal Jain's expertise has helped numerous big companies,
                including BIG4, to achieve their business objectives by training
                their employees.
              </p>
            ) : (
              ""
            )}
            {showDescription2 ? (
              <p>
                If you aspire to work for one of these leading organisations,
                Simandhar Recruitment Portal is the perfect place to start. By
                registering with us, we will not only provide you with the
                opportunity to sit for the interview with these companies, but
                also offer specialised training to enhance your skills and
                increase your chances of landing your dream job. So don't wait
                any longer, take the first step towards your career aspirations
                today by signing up with Simandhar Recruitment Portal.
              </p>
            ) : (
              " "
            )}
          </div>
        </div>
      </section>
      <section className="logo-section">
        <div className="container-l">
          <div className="logo-grid">
            {lists.map((data) => {
              let path = urlConstant.S3_buckets + data.path
              return (
                <>

                    <div>
                      <img loading='lazy' 
                        src={path}
                       fill={true} sizes='100vw'
                        className="resp-img"
                        alt={data.imageAlt}
                      />
                    </div>
                </>
              );
            })}
          </div>
          <div className="text-center mt-4">
            {showButton ? (
              <Link href="/job/company/companyListing" className=" btn maroon-btn maroon-btn-arrow">
                View More
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CorporateLogos;
