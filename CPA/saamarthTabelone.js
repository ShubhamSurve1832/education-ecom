import React from 'react'
import DownloadFormComponents from '../components/download_form'
import { useState } from 'react';
import Image from 'next/image';
import CommonForm from '../components/CommonForm';
import indexData from '../database/index.json'

const saamarthTabelone = () => {
  const [isShow, setIsShow] = useState(false);
  const showDwnPopup = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <section className=' tableSection custom-scrollbar'>
        <div className='container-l'>
          <h2 className="heading02">FNF Schedule</h2>
          <div className='custom-scrollbar'>

            <table cellpadding="0" cellspacing="0" className="strip">
              <thead>
                <tr>
                  <th>Week 1-4</th>
                  <th>Week 5-8</th>
                  <th>Week 9-12</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Softskills</td>
                  <td>Future of Finance</td>
                  <td>Importance of Data and Data Analytics</td>
                </tr>
                <tr>
                  <td> Basics of accounting</td>
                  <td> Basics of AUD</td>
                  <td> Interview experience sharing</td>
                </tr>
                <tr>
                  <td> Ratio Analysis and working capital management</td>
                  <td>AUD in Industry</td>
                  <td>Mock Interview</td>
                </tr>
                <tr>
                  <td> IFRS and US GAAP</td>
                  <td>Basics of US Tax</td>
                  <td></td>

                </tr><tr>
                  <td> </td>
                  <td>US Tax in Industry</td>
                  <td> </td>
                </tr>
              </tbody>
            </table>

          </div>
          {/* <div className="Download-btn">
            <a className="btn maroon-btn maroon-arrow-btn" onClick={showDwnPopup}>Download Schedule</a>
            <div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}></div>
            <div className='download-popup' style={{ display: !isShow ? 'none' : 'block' }}>
              <div className="right-form-box">
                <span className='close-pp ' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}>
                  <Image loading='lazy' src="/img/brown_cross.png" alt=""fill={true} sizes='100vw' className='resp-img' />
                </span>
                <CommonForm course={true} showRadio={true} showTitle={true} indexData={indexData.saamarthForm} showcity={true}  formName="Simandhar’s Saamarth Workshop Schedule"/>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default saamarthTabelone