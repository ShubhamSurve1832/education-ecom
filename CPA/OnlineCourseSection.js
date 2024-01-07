import Image from 'next/image'
import Link from 'next/link'
import _ from 'lodash'

const OnlineCourseSection = ({ courseData }) => {
  let cards = _.get(courseData, "cards", [])

  return (
    <>
      <section className="ol-course-section ">
        <div className="container-l">
          <h2 className="heading02">{courseData.mainheading}</h2>
          <div className="course-container">
            {
              cards.map((card, index) => {
                // console.log(card)
                return (
                  <figure className='course-box' key={index}>
                    <div className="img-box resp-img-box">
                      <Image loading='lazy' alt='' src={card.image} fill={true} sizes='100vw' className='resp-img' />
                    </div>
                    <figcaption>
                      <h6 className="heading05">{card.subheading}</h6>
                      <Link href={card.path} className="btn maroon-btn maroon-btn-arrow">Buy Course</Link>
                    </figcaption>
                  </figure>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourseSection;