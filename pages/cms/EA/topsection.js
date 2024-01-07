import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
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
        title: "",
        url: "",
        descriptions: [''],
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
					setTimeout(() => {
                        setData({
                            ...data,
                            [e.target.name]: e.target.files[0]
                        });		
					}, 1000);
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
        setdefaultDeta({ ...data.eaPage })
        // console.log(data.testimonialVideoPage.tabs);
        // console.log(data.eaPage);
    }





    const handleEdit = async (data, ind) => {
        blinkOnAddOrEdit.current?.focus()
        setedit(true)

        setData({
            url: data.path,
            title: data.mainHeding,
            descriptions: data.descriptions.map((d, id) => d)
        });

        window.scrollTo(0, 0)
    }

    console.log(data);



    const editData = async (e) => {
        e.preventDefault();

        const result = await axios.post(cmsConstats.editEADetails, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${Token}`
            }
        })
        console.log("result", result);
        console.log(result.data)

        setedit(false)

        setData({
            title: "",
            url: "",
            descriptions: [''],
        });

        fetchData();

    }



    const handleListChange = (e, i) => {
        let { name, value } = e.target;

        let newList = [...data.descriptions];
        newList[i] = value;
        setData(() => {
            return {
                ...data,
                descriptions: [...newList]
            }
        })
    }


    const removeRow = (i) => {
        setData(() => {
            return {
                ...data,
                descriptions: data.descriptions.filter((d, id) => {
                    return id !== i;
                })
            }

        })
    }





    return (
        <>
            <Head>
                <title>Posts - Simandhar Education</title>
            </Head>
            <SideTab />
            <section className="section fixedPadd">
                <div className="container">
                    <h2 className='heading03'>EA Top Section</h2>
                    <form action="" method='POST' onSubmit={editData}>

                        <div>
                            <div className=" mt-4">
                                <div>
                                    <div className="inputFileds bb wdt-full">
                                        <label htmlFor="" className='title01'>Video Title</label>
                                        <input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' placeholder='Video Title' name='title' onChange={(e) => handleInputChange(e)} type="text" value={data.title} />
                                    </div>

                                    <div className="inputFileds bb wdt-full mt-4">
                                        <label htmlFor="" className='title01'>Video Url</label>
                                        <input className='wdt-full bordernone title01' placeholder='Video Url' name='url' onChange={(e) => handleInputChange(e)} type="text" value={data.url} />
                                    </div>

                                    {
                                        data.descriptions.map((val, ind) => {
                                            return (
                                                <>
                                                    <div className="inputFileds bb wdt-full mt-4" key={ind}>
                                                        <label htmlFor="" className='title01'>List {ind + 1}</label>
                                                        <input className='wdt-full bordernone title01' placeholder='List' name='descriptions' onChange={(e) => handleListChange(e, ind)} type="text" value={val} />
                                                    </div>

                                                    <div className="two-col">
                                                        <div className="addwrap">
                                                            {data.descriptions.length !== 1 && <a className='btn maroon-border-btn mt-4 text-center' onClick={() => removeRow(ind)}>Remove List</a>}
                                                        </div>
                                                    </div>

                                                </>


                                            )
                                        })

                                    }


                                    <div className="">
                                        <div className="right">
                                            <div className="addwrap">
                                                <a className='btn maroon-border-btn mt-4 text-center' onClick={() => setData({ ...data, descriptions: [...data.descriptions, ''] })}>Add List</a>
                                            </div>
                                            {/* <div className="addwrap">
                                                        <a className='btn maroon-border-btn mt-4 text-center' onClick={(i) => handleDelete(i)}>Remove Row</a>
                                                    </div> */}
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
                                <th><p>Path</p></th>
                                <th style={{ width: "100px" }}><p>Action</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td><p>1.</p></td>
                                <td><p>{DefaultData.mainHeding ? DefaultData.mainHeding : 'no Heading Available'}</p></td>
                                <td><p>{DefaultData.path ? DefaultData.path : 'no Path Available'}</p></td>
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