import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import SideTab from '../../../Dashboard/SideTab'
import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form';
import blank_image_For_banner_page from '../../../public/img/blank_image_For_banner_page.png'
import secureLocalStorage from 'react-secure-storage';

const download = () => {
    let blinkOnAddOrEdit = useRef()
    let Token = secureLocalStorage.getItem('CMSTk');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [data, setData] = useState([{ img: "", alt: "", title: "", subTitle: "", ctaTitle: "", ctaSub: "", btnText: "", btnLink: "" }])



    const clickUploadImage = (imgTagID) => {
        document.getElementById(imgTagID).click();
    }


    const handleInputChange = (e, i) => {
        const { name, value } = e.target;

        let InputDataArray = [...data];
        InputDataArray[i][name] = value;

        setData(InputDataArray)
    }


    const handleImageInputChange = (e, index) => {
        const { name, files } = e.target;

        const reader = new FileReader();
        reader.addEventListener('load', () => {
            let InputDataArray = [...data];
            InputDataArray[index][name] = reader.result;
            setData(InputDataArray);
        })


        if (e.target.value.includes('fakepath')) {
            reader.readAsDataURL(files[0]);
        } else {
            console.log('select files again')
        }

    }


    const removeImage = (e, index) => {
        let { name, value } = e.target;
        let InputDataArray = [...data];
        InputDataArray[index][name] = value;
        setData(InputDataArray);
    }


    const addRows = () => {
        const addRowTable = {
            img: "",
            alt: "",
            title: "",
            subTitle: "",
            ctaTitle: "",
            ctaSub: "",
            btnText: "",
            btnLink: ""
        }
        setData([...data, addRowTable])
    }


    const removeRow = (index) => {
        setData(() => {
            return data.filter((data, i) => {
                return i !== index;
            })
        })
    }


    const SubmitData = (e) => {
        e.preventDefault();
        console.log(data);
    }


    return (
        <>
            <Head>
                <title>Partner - Simandhar Education</title>
            </Head>
            <SideTab />

            <section className="section fixedPadd download">
                <div className="container">
                    <h2 className='heading03'>Download Prospectus</h2>

                    {
                        data.map((val, i) => {
                            const { img, alt, title, subTitle, ctaTitle, ctaSub, btnText, btnLink } = val;
                            return (
                                <div key={i}>
                                    <div>
                                        <form action="" method='POST' className='two-col mt-4'>
                                            <div className="">
                                                <div className="inputFileds bb wdt-full">
                                                    <label htmlFor="" className='title01'>Image Title :</label>
                                                    <input className='wdt-full bordernone title01' placeholder='Title' name='title' type="text" onChange={(e) => handleInputChange(e, i)} value={title} />
                                                </div>
                                                <div className="inputFileds bb mt-4 wdt-full">
                                                    <label htmlFor="" className='title01'>Image Subtitle :</label>
                                                    <input className='wdt-full bordernone title01' placeholder='subTitle' name='subTitle' type="text" onChange={(e) => handleInputChange(e, i)} value={subTitle} />
                                                </div>
                                                <div className="inputFileds bb mt-4 wdt-full">
                                                    <label htmlFor="" className='title01'>Image Alt text :</label>
                                                    <input className='wdt-full bordernone title01' placeholder='Alt Text' name='alt' type="text" onChange={(e) => handleInputChange(e, i)} value={alt} />
                                                </div>
                                            </div>

                                            <div className="inputFileds wdt-full ">
                                                <label htmlFor="" className='title01'>1. Image (Website Version) :</label>
                                                <h6 className='dimension'>*Dimensions : WxH | Format : .jpg, .png</h6>
                                                <div className="filedwrap two-col mb-4">
                                                    <div className="imgBack">
                                                        {/* <p>{data.img.name}</p> */}
                                                        <input type="file" style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e, i)} id={`img${i}`} className='wdt-full bordernone title01 posiinput' name='img' />
                                                        {/* <span>Upload img</span> */}
                                                        <span>{img ? <Image src={img} fill={true} className='resp-img' alt='' /> : <Image src={blank_image_For_banner_page} fill={true} className='resp-img' alt='blank' />}</span>
                                                    </div>
                                                    <div className="one-col">
                                                        <div className="addwrap">
                                                            <a className='btn maroon-border-btn wdt-full text-center' onClick={() => clickUploadImage(`img${i}`)}>Add Image</a>
                                                        </div>
                                                        <div className="addwrap">
                                                            <a className='btn maroon-border-btn wdt-full text-center' name="img" onClick={(e) => removeImage(e, i)}>Remove</a>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </form>
                                        <div className="inputFileds mt-4 bb  wdt-full">
                                            <label htmlFor="" className='title01'>CTA Title (RHS) :</label>
                                            <input className='wdt-full bordernone title01' placeholder='CTA Title (RHS)' name='ctaTitle' type="text" onChange={(e) => handleInputChange(e, i)} value={ctaTitle} />
                                        </div>

                                        <div className="inputFileds bb mt-4 wdt-full">
                                            <label htmlFor="" className='title01'>CTA Subtitle (RHS) :</label>
                                            <input className='wdt-full bordernone title01' placeholder='CTA Subtitle (RHS)' name='ctaSub' type="text" onChange={(e) => handleInputChange(e, i)} value={ctaSub} />
                                        </div>

                                        <div className="inputFileds bb mt-4 wdt-full">
                                            <label htmlFor="" className='title01'>CTA Button Text :</label>
                                            <input className='wdt-full bordernone title01' placeholder='CTA Button Text' name='btnText' type="text" onChange={(e) => handleInputChange(e, i)} value={btnText} />
                                        </div>

                                        <div className="inputFileds bb mt-4 wdt-full">
                                            <label htmlFor="" className='title01'>CTA Button Link :</label>
                                            <input className='wdt-full bordernone title01' placeholder='CTA Button Link' name='btnLink' type="text" onChange={(e) => handleInputChange(e, i)} value={btnLink} />
                                        </div>
                                    </div>
                                    <div className="two-col">
                                        <div className="two-col">
                                            {/* <div className="addwrap">
                                            <a className='btn maroon-border-btn mt-4 text-center' onClick={(i) => handleAdd(i)}>Add Row</a>
                                        </div> */}
                                            <div className="addwrap">
                                                {data.length !== 1 && <a className='btn maroon-border-btn mt-4 text-center' onClick={() => removeRow(i)}>Remove Row</a>}
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

export default download