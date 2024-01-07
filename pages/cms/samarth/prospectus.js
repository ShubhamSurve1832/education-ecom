import React from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form';

import SideTab from '../../../Dashboard/SideTab'
import { useState, useRef } from 'react'
import { data } from 'jquery';
import { toast } from "react-hot-toast";

const prospectus = () => {
    let blinkOnAddOrEdit = useRef()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [data,setData] = useState([
    {
        cta_btn_text : '',
        cta_btn_link : ''
    }
])


const handleInputChange = (e,i) =>{
    const {name,value} = e.target;

    let InputDataArray = [...data];
    InputDataArray[i][name] = value;
    
    setData(InputDataArray)
}


const handleImageInputChange = (e,index) =>{
    const {name,files} = e.target;

    const reader = new FileReader();
    reader.addEventListener('load', () => {
         let InputDataArray = [...data];
         InputDataArray[index][name] = reader.result;
         setData(InputDataArray);
   })


 if(e.target.value.includes('fakepath')){
    reader.readAsDataURL(files[0]);
  }else{
  console.log('select files again')
 }

}


const removeImage = (e,index) =>{
    let {name,value} = e.target;
    let InputDataArray = [...data];
    InputDataArray[index][name] = value;
    setData(InputDataArray);
}


const addRows = () =>{
    const addRowTable = {
        cta_btn_text : '',
        cta_btn_link : ''
    }
    setData([...data,addRowTable])
}


const removeRow = (index) =>{
    setData(()=>{
        return data.filter((data,i)=>{
            return i!==index;
        })
    })
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
                    <h2 className='heading03'>Prepare with India’s trusted institute (download prospectus)</h2>
                    {
                        data.map((val, i) =>
                           {
                            const { cta_btn_text,cta_btn_link} = val;
                            return(
                                <div key={i}>
                                <div className="inputFileds mt-4 bb wdt-full">
                                    <label htmlFor="" className='title01'>CTA Button Text :</label>
                                    <input className='wdt-full bordernone title01' placeholder='CTA Button Text' name='cta_btn_text' type="text" value={cta_btn_text} onChange={(e)=>handleInputChange(e,i)}/>
                                </div>
                                <div className="inputFileds bb mt-4 wdt-full">
                                    <label htmlFor="" className='title01'>CTA Button Link :</label>
                                    <input className='wdt-full bordernone title01' placeholder='CTA Button Link' name='cta_btn_link' type="text" value={cta_btn_link} onChange={(e)=>handleInputChange(e,i)}/>
                                </div>
                                <div className="two-col">
                                    <div className="two-col">
                                        {/* <div className="addwrap">
                                            <a className='btn maroon-border-btn mt-4 text-center' onClick={(i) => handleAdd(i)}>Add Row</a>
                                        </div> */}
                                        <div className="addwrap">
                                            {data.length!==1 && <a className='btn maroon-border-btn mt-4 text-center' onClick={() => removeRow(i)}>Remove Row</a>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                           }
                        )
                    }
                    <div className="two-col">
                        <div className="two-col">
                            <div className="addwrap">
                                <a className='btn maroon-border-btn mt-4 text-center' onClick={addRows}>Add Row</a>
                            </div>
                            {/* <div className="addwrap">
                                <a className='btn maroon-border-btn mt-4 text-center' onClick={(i) => handleDelete(i)}>Remove Row</a>
                            </div> */}
                        </div>
                    </div>
                    <div className="two-col">
                        <div className="two-col">
                            <div className="addwrap">
                                <a className='btn maroon-border-btn mt-4 text-center' onClick={SubmitData}>Submit</a>
                            </div>
                            {/* <div className="addwrap">
                                <a className='btn maroon-border-btn mt-4 text-center' onClick={(i) => handleDelete(i)}>Remove Row</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default prospectus