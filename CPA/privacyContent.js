import React from 'react'

const privacyContent = ({ PrivacyContent }) => {
    return (
        <>
            
            <section className="section privacySection">
                <div className="container-l">

                    <div className="policy">
                        <h1 className="heading02 text-center">{PrivacyContent.mainheading}</h1>
                        <p>{PrivacyContent.para}</p>
                    </div>


                    {
                        PrivacyContent.privacyData.map((data, index) => {
                            return (
                                <>
                                    <div className="actualContent" key={index}>
                                        <div className="startContent">
                                            <h2 className="heading03">{data.heading}</h2>
                                            <p>{data.description}</p>
                                        </div>
                                        {
                                            data.lists.map((content) => {
                                                return (
                                                    <>
                                                        <div className="listsContent">
                                                            <h3 className='heading04'>{content.quetion}</h3>
                                                            <p>{content.answer}</p>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }

                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default privacyContent