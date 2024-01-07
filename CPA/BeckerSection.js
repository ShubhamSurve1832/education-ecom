import React from 'react'
import { useState } from 'react'
import Image from 'next/image'


const BeckerSection = ({ beckerData }) => {
  const [ isShow, setShow]= useState(false)
  const [buttonText, setButtonText] = useState(false)
  const showData =()=>{
    setShow(!isShow)
    setButtonText(!buttonText)
  }
  return (
    <section className='section'>
      <div className="container-l p2">
        <h2 className='heading02'>{beckerData.mainHeading}</h2>
        <div className="twoBox">
          <div>

          <p className="boxOne pr-color">
            {beckerData.discription}
          </p>
          <div className={"data" + " " + (isShow ? 'active' : '')}>
          <p className='boxOne pr-color'>Simandhar takes pride on being awarded as the <strong className='bold'> BEST CPA CHANNEL PARTNER 2022</strong> India. </p>
          <p className='boxOne'>With the growing number of institutes providing CPA, CMA training in India, it's really a stark reminder of the fact that hard work, focus, dedication and the desire to provide nothing but the best to our CPA aspirants has resulted in this recognition being bestowed on us by Becker.</p>
          <p className='boxOne bold'>Think CPA, Think Simandhar</p>
          </div>
          <span className='read-more boxOne' onClick={showData}>{buttonText ? 'Read Less ' : 'Read More'}</span>
          </div>
          <div className="boxTwo ">
            <Image loading='lazy' src={beckerData.img} fill={true} className='resp-img' alt="backer image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeckerSection