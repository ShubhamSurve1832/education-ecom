const ExamSection = ({ examData, showStrip, showStrip2 }) => {


  return (
    <><br/><br/>
      <section className="exam-section">
        <div className="container-l p2">
          <div className="exam-header">
            <h2 className="heading02">{examData.mainHeading}</h2>

            {
              showStrip ? (
                <div className="exam-right-box">
                  <span>{examData.txtone}</span><span>{examData.txttwo}</span>
                </div>
              ) : ("")
            }
            {
              showStrip2 ? (
                <h2 className="heading03 mt-4">{examData.mainHeading2}</h2>
              ) : ("")
            }


          </div>
          <p className='pr-color'>{examData.description}</p>
          <p className='pr-color mt-4'>{examData.descriptionTwo}</p>
        </div>
      </section>



    </>
  )
}

export default ExamSection;