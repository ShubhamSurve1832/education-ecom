import Image from 'next/image'
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";
const JournerySection = ({ journeyData }) => {
  let journey = _.get(journeyData, "journey", [])

  return (
    <>
      <section className="section journey-section">
        <div className="container-l">
          <h2 className="heading02">{journeyData.mainHeading}</h2>
          <div className="journey-container">

            {journey.map(((journey,index) => {
              let image = urlConstant.S3_buckets + journey.img
              return (
                <figure className="journey-box" key={index}>
                  <dl>
                    <dt className="num">{journey.number}</dt>
                    <dd className='journey-icon resp-img-box'>
                      <img loading='lazy' src={image} alt={journey.journyAlt} fill={true} sizes='100vw' className='resp-img' />
                    </dd>
                  </dl>
                  <figcaption>
                    <h6 className="heading06">{journey.title}</h6>
                    <ul>
                      {journey.descriptions.map((description, index) => {
                        return <li key={index}>{description}</li>
                      })}
                    </ul>
                  </figcaption>
                </figure>
              )
            }))}
          </div>
        </div>
      </section>
    </>
  )
}

export default JournerySection