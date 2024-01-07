import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import SideTab from '../../../Dashboard/SideTab'
import { useState, useRef } from 'react'
import { useEffect } from 'react';
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai"
import axios from 'axios';
import AdminWithAuth from '../AdminAuthRoute';
import secureLocalStorage from 'react-secure-storage';
import { cmsConstats, urlConstants } from '../../../constants/urlConstants';
import { toast } from "react-hot-toast";

const topsection = () => {
    let blinkOnAddOrEdit = useRef(null)
    let Token = secureLocalStorage.getItem('CMSTk');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [edit, setedit] = useState(false);
    const [data, setData] = useState({
        mainHeding: "",
        img: {},
        description: "",
        "descriptionBullets[0]": "",
        "descriptionBullets[1]": "",
        "descriptionBullets[2]": "",
        "descriptionBullets[3]": "",
    })







    const clickUploadImage = (imgTagID) => {
        document.getElementById(imgTagID).click();
    }


    const handleInputChange = (e) => {
        // const {name,value} = e.target;

        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    const handleImageInputChange = (e) => {
        const { name, files } = e.target;
		const allowedTypes = ["image/jpeg", "image/png","image/webp"];
		if (files[0]) {
			if (allowedTypes.includes(files[0].type)) {
				let size = files[0] ? Math.round(files[0].size / 1024) : "";
				if (size < 5120) {
					toast.loading("Uploading...");
					toast.dismiss()
						toast.success("Uploaded")
                        setData({
                            ...data,
                            [e.target.name]: e.target.files[0]
                        });
				}else{
					toast.error("File size is big, please select a file less than 5mb");
				}

			} else {
				toast.error("Supported Formats: Jpeg , Png  upto 5 MB");
			}
		} else {
			toast.error("Nothing Selected ?");
		}
       

    }



    let [DefaultData, setdefaultDeta] = useState({});
    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        let res = await fetch(urlConstants.heroBanner)
        let data = await res.json();
        setdefaultDeta({ ...data.saamarthPage })
        // console.log(data.testimonialVideoPage.tabs);
        // console.log(data.saamarthPage);
    }





    const handleEdit = async (data, ind) => {
        blinkOnAddOrEdit.current?.focus()
        setedit(true)
        setData({
            mainHeding: data.mainHeding,
            img: {},
            description: data.description,
            "descriptionBullets[0]": data.descriptionBullets[0],
            "descriptionBullets[1]": data.descriptionBullets[1],
            "descriptionBullets[2]": data.descriptionBullets[2],
            "descriptionBullets[3]": data.descriptionBullets[3],
        });

        window.scrollTo(0, 0)
    }

    console.log(data);



    const editData = async (e) => {
        e.preventDefault();

        const result = await axios.post(cmsConstats.editDetailsSamarth, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `JWT ${Token}`
            }
        })
        // console.log("result", result);
        // console.log(result.data)

        setedit(false)

        setData({
            mainHeding: "",
            img: {},
            description: "",
            "descriptionBullets[0]": "",
            "descriptionBullets[1]": "",
            "descriptionBullets[2]": "",
            "descriptionBullets[3]": "",
        });

        fetchData();

    }



    return (
        <>
            <Head>
                <title>Posts - Simandhar Education</title>
            </Head>
            <SideTab />
            <section className="section fixedPadd">
                <div className="container">
                    <h2 className='heading03'>Samarth Top Section</h2>
                    <form onSubmit={editData}>

                        <div>
                            <div className="mt-4">
                                <div>
                                    <div className="inputFileds bb wdt-full">
                                        <label htmlFor="" className='title01'>Heading</label>
                                        <input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' placeholder='Heading' name='mainHeding' onChange={(e) => handleInputChange(e)} type="text" value={data.mainHeding} />
                                    </div>

                                    <div className="inputFileds bb wdt-full mt-4">
                                        <label htmlFor="" className='title01'>Description</label>
                                        <input className='wdt-full bordernone title01' placeholder='Description' name='description' onChange={(e) => handleInputChange(e)} type="text" value={data.description} />
                                    </div>
                                    <div className="inputFileds bb wdt-full mt-4">
                                        <label htmlFor="" className='title01'>List 1</label>
                                        <input className='wdt-full bordernone title01' placeholder='Description' name='descriptionBullets[0]' onChange={(e) => handleInputChange(e)} type="text" value={data['descriptionBullets[0]']} />
                                    </div>
                                    <div className="inputFileds bb wdt-full mt-4">
                                        <label htmlFor="" className='title01'>List 2</label>
                                        <input className='wdt-full bordernone title01' placeholder='Description' name='descriptionBullets[1]' onChange={(e) => handleInputChange(e)} type="text" value={data['descriptionBullets[1]']} />
                                    </div>
                                    <div className="inputFileds bb wdt-full mt-4">
                                        <label htmlFor="" className='title01'>List 3</label>
                                        <input className='wdt-full bordernone title01' placeholder='Description' name='descriptionBullets[2]' onChange={(e) => handleInputChange(e)} type="text" value={data['descriptionBullets[2]']} />
                                    </div>
                                    <div className="inputFileds bb wdt-full mt-4">
                                        <label htmlFor="" className='title01'>List 4</label>
                                        <input className='wdt-full bordernone title01' placeholder='Description' name='descriptionBullets[3]' onChange={(e) => handleInputChange(e)} type="text" value={data['descriptionBullets[3]']} />
                                    </div>



                                    <div className="inputFileds wdt-full bb mt-4">
                                        <label htmlFor="" className='title01'> Image rq (Website Version) :</label>
                                        <h6 className='dimension'>*Dimensions : WxH | Format : .jpg, .png</h6>
                                        <div className="filedwrap two-col">
                                            <div className="imgBack">
                                                <p>{data.img.name}</p>
                                                <input type="file" style={{ display: 'none' }} className='wdt-full bordernone title01 posiinput' id={`img1`} name='img' onChange={(e) => handleImageInputChange(e)} />
                                                {/* <span>Upload img</span> */}

                                            </div>
                                            <div className="one-col right">
                                                <div className="addwrap">
                                                    <a className='btn maroon-border-btn text-center' onClick={() => clickUploadImage(`img1`)}>Add Image</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>


                            <div className="two-col">
                                <div className="two-col">
                                    <div className="addwrap">
                                        <input type="submit" className='btn maroon-border-btn mt-4 text-center' value="Save" onClick={editData} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>

                </div>
            </section >










            <section className="section fixedPadd testimonial-cms-section">
                <div className="container">
                    {/* <button className='cms-btn edit-box add-btn' onClick={()=>handleAddNew()}>Add New</button> */}
                    <table cellPadding="0" cellSpacing="0" className='cms-table'>
                        <thead>
                            <tr>
                                <th><p>Sr. No.</p></th>
                                <th><p>MainHeading</p></th>
                                <th><p>Image</p></th>
                                <th style={{ width: "100px" }}><p>Action</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td><p>1.</p></td>
                                <td><p>{DefaultData.mainHeding ? DefaultData.mainHeding : 'no Heading Available'}</p></td>
                                <td><p>{DefaultData.img ? DefaultData.img : 'no Path Available'}</p></td>
                                <td>
                                    <button className='cms-btn edit-box' onClick={() => handleEdit(DefaultData)}><BiEditAlt /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>



        </>
    )
}

export default AdminWithAuth(topsection)