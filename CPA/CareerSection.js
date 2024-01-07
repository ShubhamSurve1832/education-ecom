import React from 'react'
import _ from 'lodash'
const CareerSection = ({ contentPartnerData }) => {

let lists = _.get(contentPartnerData,"lists",[])
  return (
    <>
      <section className="section career-section pt-0">
        <div className="container-l">
          <h2 className="heading02">{contentPartnerData.mainheading}</h2>
          <div className="career-container">

            {
              lists.map((data , index) => {
                return (
                  <div className="career-box" key={index}>
                    <div className="career-head">
                     {data.title}
                    </div>
                    <div className="career-content">
                     {data.description}
                    </div>
                  </div>
                )
              })
            }



            {/* <div className="career-box">
              <div className="career-head">
                International Credibility
              </div>
              <div className="career-content">
                CPAs enjoy international recognition for their expertise and high standards.
              </div>
            </div>
            <div className="career-box">
              <div className="career-head">
                Mandatory for High Profile Roles
              </div>
              <div className="career-content">
                The CPA designation is mandatory for many high-profile roles such as Vice President, President, Head, CXO’s etc.
              </div>
            </div>
            <div className="career-box">
              <div className="career-head">
                Better pay scale
              </div>
              <div className="career-content">
                Better pay scale: Average salary of a beginner CPA in India is about INR 7,00,000 per annum.
              </div>
            </div> */}
          </div>


          <p>Simandhar Education has various corporate tie-ups and elite industry relations that we leverage to place our clients in the top accounting firms round the year.</p>
        </div>
      </section>
    </>
  )
}
export default CareerSection