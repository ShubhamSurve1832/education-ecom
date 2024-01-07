import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import CommonFormNew from '../components/CommonFormNew'
import indexData from '../database/index.json'
const careersContent = ({ CareerData }) => {

    const [buttonText, setButtonText] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const showDwnPopup = () => {
        setIsShow(!isShow);
    };

    const [clicked, setClicked] = useState(0)
    const handleViewMore = (id) => { // 1,2,3

        setButtonText(!buttonText);
        if (id === clicked) {
            return setClicked(0);
        }
        setClicked(id);

    }
    return (
        <>
            <section className="section careersSection">
                <div className="help-container">
                    <div className='mainheading text-center'>
                        <h1 className='heading02'>Career at Simandhar</h1>
                    </div>
                    <div style={{"width":"90%", "margin":"0 auto"}}>
                        <p className='pr-color mt-4'>The career at Simandhar Education opens up immense learning opportunities under experts guidance. Simandhar rates high in work culture, values and ensures work-life balance for employees. All work & no play? Oh no. Simandhar is a happy place that explodes with fun, games, and laughter once in a month at least. We have half-yearly trips to beautiful locations to help us all connect with each other.</p>
                    </div>
                </div>
                <div className="container">
                    <h2 className='heading02 text-center'>Current Openings</h2>
                    <div className="careersBoxs">
                        {
                            CareerData.map((data, index) => {
                                return (
                                    <figure className={`box ${clicked === data.id ? 'active' : ""}`} key={index}>
                                        <div>
                                            <div className="caption">
                                                {data.data.mainheading}
                                            </div>
                                            <div className="title">
                                                {data.data.subheading}
                                            </div>
                                            <div className="discription">
                                                <div className="title01"> {data.data.description}</div>
                                                {data.data.jobDescription}
                                            </div>

                                            <div className={`discription discription01 ${clicked === data.id ? 'active' : ""}`}>
                                                {
                                                    data.data.lists.map((boxdata, index) => {
                                                        return (
                                                            <div className="content" key={index}>
                                                                <div className="title01">{boxdata.title}</div>
                                                                <ul>
                                                                    {boxdata.innerList.map((item, index) => {
                                                                        // console.log(item)
                                                                        return (
                                                                            <>
                                                                                <li key={index}>{item.item}</li>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        )
                                                    })
                                                }


                                            </div>
                                        </div>

                                        <div className="buttons 1">
                                            <p className='btn white-border-btn white-border-btn-arrow' onClick={() => handleViewMore(data.id)}>{clicked === data.id ? "Read Less " : "Read More"}</p>

                                            <p className='btn white-btn white-btn-arrow' onClick={showDwnPopup}> Apply</p>
                                            <div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}></div>

                                            <div className='download-popup right-form-box' style={{ display: !isShow ? 'none' : 'block' }}>
                                                <span className='close-pp' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}>
                                                    <Image loading='lazy' src="/img/brown_cross.png" alt="brown cross arrow"fill={true} sizes='100vw' className='resp-img' />
                                                </span>
                                                < CommonFormNew indexData={indexData.careerTitle} showCtc={true} showTitle={true} showposition={true} shownoticeperiod={true} showLastCompany={true} showResume={true} formName="simandhar career form" />
                                            </div>

                                        </div>
                                    </figure>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default careersContent