import Image from 'next/image'
import { useState } from 'react';
import _ from 'lodash'
import indexData from '../database/index.json'
import DownloadFormComponents from '../components/download_form'


const ContentPartnerSection = ({ contentPartnerData, showData }) => {
  const [isShow, setIsShow] = useState(false);
  const showDwnPopup = () => {
    setIsShow(!isShow);
  };

  let repeats = _.get(contentPartnerData,"repeats",[])
  return (
    <>
      <section className="section cont-partner-section">
        <div className="container-l">
          <h3 className="heading02">{contentPartnerData.mainHeading}</h3>
          <div className="cont-partner-container">

            {repeats.map(((partnerData,index )=> {
              return <div className="cont-partner-row" key={index}>
                <div className="logo-box resp-img-box"><Image loading='lazy' src={partnerData.img} alt=""fill={true} sizes='100vw'  className='resp-img' /></div>
                <div className="content-box p2">
                  <p>{partnerData.para} </p>
                  {
                    showData ? (

                      <ul className='lists'>
                        {
                          contentPartnerData.lists.map(((item,index) => {
                            return <li className='list' key={index}>{item.list}</li>
                          }))
                        }
                      </ul>
                    ) : ('')
                  }
                  <a  onClick={showDwnPopup} className="btn maroon-btn maroon-arrow-btn">{partnerData.btn}</a>
                  <div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}></div>
                  <div className='download-popup' style={{ display: !isShow ? 'none' : 'block' }}><DownloadFormComponents showHeading2={true} indexData={indexData.downloadProspectus} formName="content partner" /></div>
                </div>
              </div>
            }))}



            {/* <div className="cont-partner-row">
              <div className="logo-box resp-img-box"><Image loading='lazy' src="/img/cpa/simdhan_logo.png" alt=""fill={true} sizes='100vw'  className='resp-img' /></div>
              <div className="content-box p2">
                <p>Simandhar Education’s in house CMA exam review, taught by India’s best CPA & CMA instructors like Sripal Jain (CA, CGMA, US CPA), Surinder Kaur (CPA), Srikanth Tadikonda (CMA, CPA), Dhanashree Kshirsagar (CA, CPA),<a href="javascript:;" className="read-more">Read More</a></p>
                <a href="javascript:;" className="btn maroon-btn maroon-arrow-btn">Download Prospectus</a>
              </div>
            </div> */}


          </div>
        </div>
      </section>
    </>
  )
}

export default ContentPartnerSection;