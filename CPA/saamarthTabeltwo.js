import React from 'react'

const saamarthTabeltwo = ({showData}) => {
  return (
    <>
     <section className=' tableSection custom-scrollbar'>
        <div className='container-l'>
          <h2 className="heading02">Who can Attend FNF?</h2>
          {
            showData ? 
            <p className='title01'>The course has been developed with the help of the insights we gained through our interaction with C-suite executives of the Big 4 and other top accounting firms.</p> : " "
          }
          <div className='custom-scrollbar'>

            <table cellpadding="0" cellspacing="0" className="strip">
              <thead>
                <tr>
                  <th>Simandhar students</th>
                  <th>Simandhar Alumni</th>
                  <th>Non-Simandhar Students</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Simandhar students who are currently pursuing any one of the courses—the US CPA course, the US CMA course, the EA course, ACCA and the CIA course.</td>
                  <td>Simandhar alumni who have completed their US CPA exam, US CMA exam, EA exam, ACCA and CIA exam.</td>
                  <td>Non-Simandhar accounting aspirants who want to work with the Big 4 and top accounting firms.</td>
                </tr>
              </tbody>
            </table>
            {/* <div className="Download-btn">
              <a href="javascript:;" className="btn maroon-btn maroon-arrow-btn">Download Schedule</a>
              </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default saamarthTabeltwo