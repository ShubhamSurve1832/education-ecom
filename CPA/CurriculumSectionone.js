import { Tab } from "@headlessui/react"
import _ from 'lodash'

const CurriculumSectionone = ({ CurriculumSectiononeData, showData }) => {
  let tab_button = _.get(CurriculumSectiononeData,"tab_button",[])
  let tab_lists = _.get(CurriculumSectiononeData,"tab_lists",[])

  return (
    <>
      <section className="section aside-tab-section">
        <div className="aside-tab-container">
          <Tab.Group>
            <div className="left-tab-box">
              <Tab.List className='tab-header'>
                {tab_button.map(((pass,index) => {
                  return <>
                    <Tab className='tab-btn active'>{pass.name}</Tab></>
                }))}
              </Tab.List>
            </div>
            <div className="right-tab-box">
              <p className='title01'>{CurriculumSectiononeData.para}</p>
              <Tab.Panels className='tab-container custom-scrollbar'>
                {tab_lists.map((passData => {
                  return <>
                    <Tab.Panel className='tab-box'>
                      {passData.tab_list.map(((list,index) => {
                        return <>
                          <div className="row">
                            <div className="number">{list.id}</div>
                            <div className="heading05">{list.txt}</div>
                          </div></>
                      }))}
                    </Tab.Panel>
                  </>
                }))}




              </Tab.Panels>
              {/* <p className='scroll-down-arrow'> Scroll to view more </p> */}
            </div>
          </Tab.Group>
        </div>
      </section>
    </>
  )
}

export default CurriculumSectionone