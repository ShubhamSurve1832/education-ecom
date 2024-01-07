import React from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form';

import SideTab from '../../../Dashboard/SideTab'
import { useState, useRef } from 'react'
import { data } from 'jquery';

const resources = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [data, setData] = useState([{
        saleTitle: "",
        buttonLink: ""
    }])
    const handleInputChange = (e, i) => {
        const { name, value } = e.target;

        let InputDataArray = [...data];
        InputDataArray[i][name] = value;

        setData(InputDataArray)
    }



    const SubmitData = (e) =>{
		e.preventDefault();
		console.log(data);
	}

    return (
        <>
            <Head>
                <title>Offer - Simandhar Education</title>
            </Head>
            <SideTab />
            <section className="section fixedPadd ribbon">
                <div className="container">
                    <h2 className='heading03'>Download Prospectus</h2>
                    {
                        data.map((val, i) => {
                            const { saleTitle, buttonLink } = val
                            return (
                                <div key={i}>
                                    <div className="inputFileds mt-4 bb wdt-full">
                                        <label htmlFor="" className='title01'>Sale Title :</label>
                                        <input className='wdt-full bordernone title01' placeholder='Sale Title' name='saleTitle' type="text" value={saleTitle}
                                            onChange={(e) => handleInputChange(e, i)} />
                                    </div>
                                    <div className="inputFileds bb mt-4 wdt-full">
                                        <label htmlFor="" className='title01'>CTA Button Link :</label>
                                        <input className='wdt-full bordernone title01' placeholder='CTA Button Link' name='buttonLink' type="text" value={buttonLink}
                                            onChange={(e) => handleInputChange(e, i)}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="two-col">
                        <div className="two-col">
                            <div className="addwrap">
                                <a className='btn maroon-border-btn mt-4 text-center' onClick={SubmitData}>Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default resources