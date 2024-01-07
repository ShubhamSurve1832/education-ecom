import React from 'react'
import { Tab } from "@headlessui/react"
import { useState } from 'react';
import Image from 'next/image';
import { RiArrowDropDownLine } from 'react-icons/ri'
import CommonForm from '../components/CommonForm';
import indexData from '../database/index.json'

const ExamTab = ({ tabData }) => {
  const [isActive, setActive] = useState(false);
  const data = [{ id: 0, label: "Eligibility Check" }, { id: 1, label: "Licensing/ Licensure" }, { id: 2, label: "Preparation" }, { id: 3, label: "Career Opportunities" }, { id: 4, label: "Exam Patterns and Scores" }];

  const showTab = () => {
    setActive(!isActive);
  };

  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItem] = useState(data);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    setActive(!isActive);
  }

  const [isShow, setIsShow] = useState(false);
  const showDwnPopup = () => {
    setIsShow(!isShow);
  };

  return (
    <section className=" tab-section">
      <div className="container-l">
        <p className='tab-button-mobile tab-btn' onClick={showTab}>{selectedItem ? items.find(item => item.id == selectedItem).label : "Select Programs"}<span ><RiArrowDropDownLine /></span></p>

        <Tab.Group>
          <Tab.List className={'tab-header' + ' ' + (isActive ? 'active' : '')}>
            {data.map((pass => {
              return <Tab className="tab-btn" onClick={e => handleItemClick(e.target.id)} id={pass.id}>{pass.label}</Tab>
            }))}
          </Tab.List>
          <Tab.Panels className='tab-container p2'>
            {tabData.description.map((desc => {
              return <>
                <Tab.Panel className='tab-box'>
                  <h3 className="heading05">{desc.mainheading}</h3>
                  <p className="med-font">{desc.title1}</p>
                  <p>{desc.para}</p>
                  <p className="med-font">{desc.title}</p>
                  <ul className='li2'>
                    {desc.lists.map((item => {
                      return <li>{item.list}</li>
                    }))}
                  </ul>
                  <p className='pr-color mt-0'>{desc.paraTwo}</p>
                  <ul className='li2'>
                    {desc.lists1.map((items => {

                      return <li>{items.list}</li>
                    }))}
                  </ul>
                  <p>{desc.paraone}</p>
                  <div className="mt--10">
                    {
                      desc.lists3.map((item, index) => {
                        return (
                          <>
                            <h3 className="heading05" key={index}>{item.question}</h3>
                            <p className='mt-2'>{item.ans}</p>
                          </>
                        )
                      })
                    }
                  </div>

                  {/* <a onClick={showDwnPopup} className="btn maroon-btn maroon-btn-arrow mt-35" >{desc.button}</a>
                  <div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}></div>
                  <div className='download-popup' style={{ display: !isShow ? 'none' : 'block' }}>
                    <div className="right-form-box">
                      <span className='close-pp' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}>
                        <Image loading='lazy' src="/img/brown_cross.png" alt="brown cross arrow"fill={true} sizes='100vw' className='resp-img' />
                      </span>
                      <CommonForm showTitle={true} indexData={indexData.eligibility} showcity={true} /></div>
                  </div> */}
                </Tab.Panel>
             
                

              </>
            }))}
          </Tab.Panels>
        </Tab.Group>
       <div style={{marginTop: "60px"}}>
               <a onClick={showDwnPopup} className="btn maroon-btn maroon-btn-arrow mt-35" >Learn More</a>
                <div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}></div>
                  <div className='download-popup' style={{ display: !isShow ? 'none' : 'block' }}>
                    <div className="right-form-box">
                      <span className='close-pp' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}>
                        <Image loading='lazy' src="/img/brown_cross.png" alt="brown cross arrow"fill={true} sizes='100vw' className='resp-img' />
                      </span>
                      <CommonForm showTitle={true} indexData={indexData.eligibility2} showcity={true} /></div>
                  </div>
                  </div>
            
      </div>
    </section>

  )
}

export default ExamTab