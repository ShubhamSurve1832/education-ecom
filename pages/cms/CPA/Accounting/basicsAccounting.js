import React, { useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { useForm } from 'react-hook-form';
import SideTab from '../../../../Dashboard/SideTab'
import { useState, useRef } from 'react'
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai"
import axios from 'axios';
import AdminWithAuth from '../../AdminAuthRoute';
import secureLocalStorage from 'react-secure-storage';
import { cmsConstats, urlConstants } from '../../../../constants/urlConstants';
import { toast } from "react-hot-toast";



const basicsAccounting = () => {
    let blinkOnAddOrEdit = useRef(null)
    let Token = secureLocalStorage.getItem('CMSTk');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [edit, setedit] = useState(false);
    const [data, setData] = useState({
        imageAltText: "",
        bannerText: "",
        shortDescription: "",
        CTAButtonLink: "",
        bannerImage: {},
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
					setTimeout(() => {
                        setData({
                            ...data,
                            bannerImage: files[0]
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



    const SubmitData = async (e) => {

        e.preventDefault();
        postData();
    }


    const postData = async () => {


        const result = await axios.post(cmsConstats.addUSCPACorporateLogos, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `JWT ${Token}`
            }
        })
        console.log("result", result);
        console.log(result.data)

        setedit(false)
        setData({ image: {}, imgAlt: '' })
        fetchData();
    }



    let [DefaultData, setdefaultDeta] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        let res = await fetch(urlConstants.helpSection)
        let data = await res.json();
        setdefaultDeta({...data.basicsOfAccounting.banner})
        // console.log(data.CorporateLogos.lists);
    }
    console.log(DefaultData);





    const handleEdit = (data, ind) => {
        blinkOnAddOrEdit.current?.focus()
        setedit(true)

        setData({
            id: ind,
            imageAltText: data.imageAltText,
            bannerText: data.bannerText,
            shortDescription: data.shortDescription,
            CTAButtonLink: data.CTAButtonLink,
            bannerImage: {},
        });

        window.scrollTo(0, 0)
    }

    console.log(data);



    const editData = async (e) => {
        e.preventDefault();



        const result = await axios.post(cmsConstats.editBasicsOfAccounting, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `JWT ${Token}`
            }
        })
        console.log("result", result);
        console.log(result.data)

        setedit(false)
        setData({
            imageAltText: "",
            bannerText: "",
            shortDescription: "",
            CTAButtonLink: "",
            bannerImage: {},
        })
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
                    <h2 className='heading03'>Basics of Accounting</h2>


                    <div>
                        <form action="" method='POST' className='two-col mt-4' onSubmit={editData}>
                            <div>
                                <div className="inputFileds bb wdt-full">
                                    <label htmlFor="" className='title01'>Banner Text</label>
                                    <input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' placeholder='Banner Text' name='bannerText' type="text" onChange={(e) => handleInputChange(e)} value={data.bannerText} />
                                </div>
                                <div className="inputFileds bb wdt-full mt-4">
                                    <label htmlFor="" className='title01'>Short description</label>
                                    <input className='wdt-full bordernone title01' placeholder='Short description' name='shortDescription' type="text" onChange={(e) => handleInputChange(e)} value={data.shortDescription} />
                                </div>
                                <div className="inputFileds bb wdt-full mt-4">
                                    <label htmlFor="" className='title01'>CTA Button Link</label>
                                    <input className='wdt-full bordernone title01' placeholder='CTA Button Link' name='CTAButtonLink' type="text" onChange={(e) => handleInputChange(e)} value={data.CTAButtonLink} />
                                </div>
                            </div>
                            <div className=" wdt-full bb">
                                <label htmlFor="" className='title01'> Image rq (Website Version) :</label>
                                <h6 className='dimension'>*Dimensions : WxH | Format : .jpg, .png</h6>
                                <div className="filedwrap inputFileds two-col">
                                    <div className="imgBack">
                                        <p>{data.bannerImage.name}</p>
                                        <input type="file" style={{ display: 'none' }} id={`img`} onChange={(e) => handleImageInputChange(e)} className='wdt-full bordernone title01 posiinput' name='bannerImage' />
                                    </div>
                                    <div className="one-col right">
                                        <div className="addwrap">
                                            <a className='btn maroon-border-btn text-center' onClick={(e) => clickUploadImage(`img`)}>Add Image</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="inputFileds wdt-full mt-4">
                                    <label htmlFor="" className='title01'>Image Alt text :</label>
                                    <input className='wdt-full bordernone title01' placeholder='Image Alt Text' name='imageAltText' type="text" onChange={(e) => handleInputChange(e)} value={data.imageAltText} />
                                </div>
                            </div>


                            <div className="two-col">
                                <div className="two-col">
                                    <div className="addwrap">
                                        <input type="submit" value="Save" className='btn maroon-border-btn mt-4 text-center' />
                                    </div>
                                </div>
                            </div>
                        </form >
                    </div>
                </div>
            </section >

            <section className="section fixedPadd testimonial-cms-section">
        <div className="container">
          <table cellPadding="0" cellSpacing="0" className='cms-table'>
            <thead>
              <tr>
                <th><p>Sr. No.</p></th>
                <th><p>Description 1</p></th>
                <th><p>Description 2</p></th>
                <th style={{ width: "100px" }}><p>Action</p></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><p>1.</p></td>
                <td><p>{DefaultData.bannerText ? DefaultData.bannerText : 'Alt not available'}</p></td>
                <td><p>{DefaultData.shortDescription? DefaultData.shortDescription: "Description not available"}</p></td>                
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

export default AdminWithAuth(basicsAccounting)