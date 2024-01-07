import { Tab } from "@headlessui/react"
import _ from 'lodash'

const CurriculumSection = ({ curriculumData, showData }) => {
  let tab_button = _.get(curriculumData,"tab_button",[])
  let description = _.get(curriculumData,"description",[])
  // console.log(description)
  return (
    <>
      <section className="section aside-tab-section">
        <div className="aside-tab-container">
          <Tab.Group>
            <div className="left-tab-box">
              <h2 className="heading02">{curriculumData.mainHeading}</h2>
              <p>{curriculumData.heading}</p>

              <Tab.List className='tab-header'>
                {tab_button.map(((list,index) => {
                  return <h3><Tab className='tab-btn active' key={index}>{list.name} </Tab></h3>
                }))}
              </Tab.List>

            </div>

            <div className="right-tab-box">
              <Tab.Panels className='tab-container'>
                {description.map(((star,index) => {
                  return <>
                    <Tab.Panel className='tab-box' key={index}>
                      {
                        showData ? (<div className="syllabus-row">
                          <h5 className="heading05">{star.time}</h5>
                          <ul className='li2'>
                            <li>{star.hour}</li>
                          </ul>
                        </div>) : ("")
                      }


                      {star.quesans.map(((star,index) => {
                        return <>
                          <div className="syllabus-row" key={index}>
                            <h5 className="heading05">{star.question}</h5>
                            <ul className='li2'>
                              {star.answers.map((answer) => {
                                return <li>{answer}</li>
                              })}
                            </ul>
                          </div>
                        </>
                      }))}


                      {/* <div className="syllabus-row">
                        <h5 className="heading05">Question Pattern</h5>
                        <ul className='li2'>
                          <li>62 multiple choice questions(50% Weightage) & 5 short task-based simulations (35% Weightage),Written communication( 15% Weightage)</li>
                          <li>62 multiple choice questions(50% Weightage) & 5 short task-based simulations (35% Weightage),Written communication( 15% Weightage)</li>
                          <li>62 multiple choice questions(50% Weightage) & 5 short task-based simulations (35% Weightage),Written communication( 15% Weightage)</li>
                        </ul>
                      </div> */}
                    </Tab.Panel>
                  </>
                }))}


              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </section>
    </>
  )
}

export default CurriculumSection