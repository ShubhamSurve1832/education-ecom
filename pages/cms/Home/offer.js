import React, { useEffect } from 'react'
import axios from 'axios';
import Head from 'next/head'
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import SideTab from '../../../Dashboard/SideTab'
import { useState, useRef } from 'react'
import { data } from 'jquery';
import blank_image_For_banner_page from '../../../public/img/blank_image_For_banner_page.png'
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import AdminWithAuth from '../AdminAuthRoute';
import secureLocalStorage from 'react-secure-storage';
import { urlConstants, cmsConstats,S3_buckets } from '../../../constants/urlConstants';
import { toast } from "react-hot-toast";

const offer = () => {
    let blinkOnAddOrEdit = useRef(null)
    let Token = secureLocalStorage.getItem('CMSTk');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [edit,setedit] = useState(false);
    const [data, setData] = useState({
        img: {},
        offerone: "",
        discount: "",
        promoCode: "",
        availbtn: "",
    })


    const clickUploadImage = (imgTagID) => {
        document.getElementById(imgTagID).click();
    }


    const handleInputChange = (e, i) => {
        const { name, value } = e.target;

        setData({
            ...data,
           [e.target.name]: e.target.value
        })
    }


    const handleImageInputChange = (e, index) => {
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
                            img: files[0]
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
        let res = await fetch(urlConstants.indexData)
        let data = await res.json();
        // setdefaultDeta([data.partnerData.list])
        setdefaultDeta({ ...data.offerRow })
        // console.log(data.offerRow);
    }

    // console.log("dedfa",DefaultData);





    const handleEdit = (data) => {
        setedit(true)
        setData({
            img: {},
            offerone: data.offerone,
            discount: data.discount,
            promoCode: data.promoCode,
            availbtn: data.availbtn,
        });
        
        window.scrollTo(0, 0)
        blinkOnAddOrEdit.current?.focus()
    }

    console.log(data);



    const editData = async (e) => {
        e.preventDefault();


        const result = await axios.post(cmsConstats.ediPromoRibbion, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `JWT ${Token}`
            }
        })
        // console.log("result", result);
        // console.log(result.data)

        setData({
            img: {},
            offerone: "",
            discount: "",
            promoCode: "",
            availbtn: "",
        })
        fetchData();
        setedit(false);

    }




    return (
        <>
            <Head>
                <title>Offer - Simandhar Education</title>
            </Head>
            <SideTab />
           {
            edit &&  <section className="section fixedPadd">
            <div className="container">
                <h2 className='heading03'>Promo Ribbon</h2>



                <div>
                    <form action="" method='POST' className='mt-4' onSubmit={editData}>
                        <div className=''>
                            <div className=" bb wdt-full">
                                <label htmlFor="" className='title01'>Flat Off :</label>
                                <input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01 inputFileds' name='offerone' type="text" value={data.offerone} onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className="inputFileds wdt-full bb mt-4">
                                <label htmlFor="" className='title01'> Image rq (Website Version) :</label>
                                <h6 className='dimension'>*Dimensions : 341 * 51 px | Format : .jpg, .png</h6>
                                
                                <div className="filedwrap two-col">
                                    <div className="imgBack">
                                        <input type="file" style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e)} id={`img`} className='wdt-full bordernone title01 posiinput' name='img' />
                                        {/* <span>Upload img</span> */}
                                        <p >{data.img.name}</p>
                                    </div>
                                    <div className="one-col right">
                                        <div className="addwrap">
                                            <a className='btn maroon-border-btn text-center' onClick={() => clickUploadImage(`img`)}>Add Image</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
             
                        </div>
                        <div className=''>
                        <div className=" bb wdt-full mt-4">
                                <label htmlFor="" className='title01'>Promo Code :</label>
                                <input className='wdt-full bordernone title01 inputFileds'  name='promoCode' type="text" value={data.promoCode} onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className=" bb wdt-full mt-4">
                                <label htmlFor="" className='title01'>Avail Button :</label>
                                <input className='wdt-full bordernone inputFileds title01'  name='availbtn' type="text" value={data.availbtn} onChange={(e) => handleInputChange(e)} />
                            </div>
                        </div>
                            
                          
                       
                        
                        <div className="">
                        <div className="inputFileds bb wdt-full mt-4">
                                <label htmlFor="" className='title01'>CTA Link</label>
                                <input className='wdt-full bordernone title01'  name='link' type="text" value={data.link} onChange={(e) => handleInputChange(e)} />
                            </div>
                            
                        </div>
                        <div className="">
                                <div className="addwrap">
                                    <input type="submit" value="submit" className='btn maroon-border-btn mt-4 text-center' />
                                </div>
                                {/* <div className="addwrap">
                            <a className='btn maroon-border-btn mt-4 text-center' onClick={(i) => handleDelete(i)}>Remove Row</a>
                        </div> */}
                            </div>
                    </form >

                </div>
            </div>
        </section >
           }



            <section className="section fixedPadd testimonial-cms-section pt-5">
                <div className="container">
                    <table cellPadding="0" cellSpacing="0" className='cms-table'>
                        <thead>
                            <tr>
                                <th><p>Sr. No.</p></th>
                                <th><p>Image</p></th>
                                <th><p>OfferOne</p></th>
                                <th><p>Promo Code</p></th>
                                <th style={{ width: "100px" }}><p>Action</p></th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td><p>1.</p></td>
                                <td><p><img src={`${S3_buckets}${DefaultData.img}`} alt="" /></p></td>
                                <td><p>{DefaultData.offerone ? DefaultData.offerone : 'no Alt Available'}</p></td>
                                <td><p>{DefaultData.promoCode ? DefaultData.promoCode : 'no Alt Available'}</p></td>
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

export default AdminWithAuth(offer)