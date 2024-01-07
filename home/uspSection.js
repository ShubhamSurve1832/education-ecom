import Image from 'next/image'
import { memo } from 'react'

 function uspSection({ indexData }) {
  return (
    <section className="usp-section">
      <div className='container-l'>
        <h2 className="heading02">
          {indexData.heading}
        </h2>
        <div className='usp-container'>
          {
            indexData.lists.map((data,index) => {
              return (
                <div className='usp-box resp-img-box' key={index}>
                  <span><Image loading='lazy' src={data.image}fill={true} sizes='100vw'   className='resp-img' alt='usp icons' /></span>
                  <p>{data.title}</p>
                </div>
              )
            })

          }
        </div>
      </div>
    </section>
  )
}
export default memo(uspSection)