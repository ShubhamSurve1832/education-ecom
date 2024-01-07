import { Tab } from "@headlessui/react"
import Link from "next/link"
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'
import { memo } from "react"



 function programmSection({ indexData }) {
  const [isActive, setActive] = useState(false);
  // const [data, setData] = useState(null)
  // const [leftCard, setLeftCard] = useState()


  const showTab = () => {
    setActive(!isActive);
  };
  const [selectedItem, setSelectedItem] = useState(null);
  // const [items, setItem] = useState(indexData);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    setActive(!isActive);
  }
  let title = _.get(indexData,"programTitle",[])
  let content = _.get(indexData,"programContent",[])
  // console.log("title",content)
  // console.log(title,"content")
  return (
    <>
    <section className="section programm-section">
      <Tab.Group>
        <div className='container programm-container'>
          <div className='pro-leftbox '>
            <h2 className='heading02'>{indexData.mainheading}</h2>
            <p>{indexData.subheading}</p>
            <div className='tab-head-row custom-scrollbar '>
              <p className='tab-button-mobile' onClick={showTab}>{selectedItem ? title.find(item => item.id == selectedItem).label : "US CPA"}<span className={'tab-head-box ' + ' ' + (isActive ? 'active' : '')}><RiArrowDropDownLine /></span></p>
              <Tab.List className={'tab-head-box ' + ' ' + (isActive ? 'active' : '')}>
                {title.map((item, index) => (
                  <Tab className="tab-button" onClick={e => handleItemClick(e.target.id)} id={item.id} key={index}>
                    {item.label}
                  </Tab>
                ))}
              </Tab.List> 
            </div>
          </div>

          <Tab.Panels>
            <div className='pro-rigbhbox'>              {
                content.map(((lists, index) => {    
                  // console.log("list",lists)         
                  return <Tab.Panel key={index}>
                    <div className='tab-box'>
                      <h4 className='heading04'>{lists.programdesc}</h4>
                      <ul className='custom-scrollbar'>
                        {
                          lists.lists.map(((list, index) => {
                            return <li key={index}> {list.list}</li>
                          }))
                        }
                      </ul>
                      <Link href={lists.path} className='btn maroon-btn maroon-btn-arrow'>Course Details</Link>
                    </div>
                  </Tab.Panel>
                }))
              }
            </div>
          </Tab.Panels>


          

        </div>
      </Tab.Group>
    </section >
    </>
    
  )
}

export default memo(programmSection)