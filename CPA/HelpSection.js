import Image from 'next/image'
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";

const HelpSection = ({ helpData }) => {
  let helps = _.get(helpData, "helps", [])
  // console.log(helpData);
  return (
    <>
      <section className="section help-section">
        <div className="container-l">
          <h2 className="heading02">{helpData.mainheading}</h2>
          <h3 className='heading04'>{helpData.description}</h3>
          <div className="help-container">
            {helps.map(((item, index) => {
              let image = urlConstant.S3_buckets + item.img
              return <dl key={index}>
                <dt className='resp-img-box'><img loading='lazy' src={image} alt={item.helpAlt} fill={true} sizes='100vw' className='resp-img' /></dt>
                <dd>{item.caption}</dd>
              </dl>
            }))}

          </div>
        </div>
      </section>
    </>
  )
}

export default HelpSection