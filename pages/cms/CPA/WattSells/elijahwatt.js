import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import SideTab from '../../../../Dashboard/SideTab'
import { BiEditAlt } from "react-icons/bi";
import AdminWithAuth from '../../AdminAuthRoute';
import secureLocalStorage from 'react-secure-storage';
import { S3_buckets, cmsConstats, urlConstants } from '../../../../constants/urlConstants';
import { toast } from "react-hot-toast";

const elijahwatt = () => {
    let blinkOnAddOrEdit = useRef(null)
    let Token = secureLocalStorage.getItem('CMSTk');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [data, setData] = useState({
        img1: {},
        img2: {},
        img3: {},
        heading01: "",
        heading02: "",
        heading03: "",
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

    let [DefaultData, setdefaultData] = useState({});
    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        let res = await fetch(urlConstants.indexData)
        let data = await res.json();
        // setdefaultDeta([data.partnerData.list])
        // setdefaultDeta({ ...data.founder })
        setdefaultData({ ...data.wattSellBanner })
        console.log(data.wattSellBanner);
    }

    console.log("dedfa", DefaultData);
    const handleEdit = (data) => {
        blinkOnAddOrEdit.current?.focus()
        setData({
            img1: {},
            img2: {},
            img3: {},
            heading01: data.heading01,
            heading02: data.heading02,
            heading03: data.heading03,
        });

        window.scrollTo(0, 0)
    }

    console.log(data);



    const editData = async (e) => {
        e.preventDefault();


        const result = await axios.post(cmsConstats.editElijahWattSells, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `JWT ${Token}`
            }
        })
        console.log("result", result);
        console.log(result.data)

        setData({
            img1: {},
            img2: {},
            img3: {},
            heading01: "",
            heading02: "",
            heading03: "",
        })
        fetchData();

    }

    return (
        <>
            <Head>
                <title>Posts - Simandhar Education</title>
            </Head>
            <SideTab />


            <section className="section fixedPadd" data-aos="fade-up">
                <div className="container">
                    <h2 className='heading03'>Why Simandhar Education?</h2>

                    <form action="" method='POST' onSubmit={editData} >

                        <div className=''>
                            <div className='mt-4 '>
                                <div>
                                    <div className="wdt-full mt-4">
                                        <label htmlFor="" className='title01  '>Heading 1</label>
                                        <input ref={blinkOnAddOrEdit} className='wdt-full bordernone inputFileds mb-4 title01 bb'  name='heading01' onChange={(e) => handleInputChange(e)} type="text" value={data.heading01} />
                                        <label htmlFor="" className='title01  '>Heading 2</label>
                                        <input className='wdt-full bordernone inputFileds mb-4 title01 bb'  name='heading02' onChange={(e) => handleInputChange(e)} type="text" value={data.heading02} />
                                        <label htmlFor="" className='title01  '>Heading 3</label>
                                        <input className='wdt-full bordernone inputFileds mb-4 title01 bb'  name='heading03' onChange={(e) => handleInputChange(e)} type="text" value={data.heading03} />
                                    </div>
                                </div>
                                <div>
                                    <h2 className='title01 mt-4 mb-4'>Image Cards :</h2>
                                    <div className=''>
                                        <div className="wdt-full bb">
                                            <label htmlFor="" className='title01'> Image rq (Website Version) :</label>
                                            <h6 className='dimension'>*Dimensions : 335 * 339 px | Format : .jpg, .png</h6>
                                            <div className="filedwrap inputFileds two-col mb-4">
                                                <div className="imgBack">
                                                    <p>{data.img1.name}</p>
                                                    <input type="file" style={{ display: 'none' }} className='wdt-full bordernone title01 posiinput' id={`img1`} name='img1' onChange={(e) => handleImageInputChange(e)} />
                                                    {/* <span>Upload img</span> */}

                                                </div>
                                                <div className="one-col right">
                                                    <div className="addwrap">
                                                        <a className='btn maroon-border-btn text-center' onClick={() => clickUploadImage(`img1`)}>Add Image</a>
                                                    </div>

                                                </div>
                                            </div>
                                            <label htmlFor="" className='title01'> Image rq (Website Version) :</label>
                                            <h6 className='dimension'>*Dimensions : 335 * 339 px | Format : .jpg, .png</h6>
                                            <div className="filedwrap inputFileds two-col mb-4">
                                                <div className="imgBack">
                                                    <p>{data.img2.name}</p>
                                                    <input type="file" style={{ display: 'none' }} className='wdt-full bordernone title01 posiinput' id={`img2`} name='img2' onChange={(e) => handleImageInputChange(e)} />
                                                    {/* <span>Upload img</span> */}

                                                </div>
                                                <div className="one-col right">
                                                    <div className="addwrap">
                                                        <a className='btn maroon-border-btn text-center' onClick={() => clickUploadImage(`img2`)}>Add Image</a>
                                                    </div>

                                                </div>
                                            </div>

                                            <label htmlFor="" className='title01'> Image rq (Website Version) :</label>
                                            <h6 className='dimension'>*Dimensions : 335 * 339 px | Format : .jpg, .png</h6>
                                            <div className="filedwrap inputFileds two-col mb-4">
                                                <div className="imgBack">
                                                    <p>{data.img3.name}</p>
                                                    <input type="file" style={{ display: 'none' }} className='wdt-full bordernone title01 posiinput' id={`img3`} name='img3' onChange={(e) => handleImageInputChange(e)} />
                                                    {/* <span>Upload img</span> */}

                                                </div>
                                                <div className="one-col right">
                                                    <div className="addwrap">
                                                        <a className='btn maroon-border-btn text-center' onClick={() => clickUploadImage(`img3`)}>Add Image</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="two-col">
                            <div className="two-col">
                                <div className="addwrap">
                                    <input type="submit" value="submit" className='btn maroon-border-btn mt-4 text-center' />
                                </div>
                                {/* <div className="addwrap">
								<a className='btn maroon-border-btn mt-4 text-center' onClick={(i) => handleDelete(i)}>Remove Row</a>
							</div> */}
                            </div>
                        </div>

                    </form>
                </div>
            </section>

            <section className="section fixedPadd testimonial-cms-section">
                <div className="container">
                    <table cellPadding="0" cellSpacing="0" className='cms-table'>
                        <thead>
                            <tr>
                                <th><p>Sr. No.</p></th>
                                <th><p>Image 1</p></th>
                                <th><p>Image 2</p></th>
                                <th><p>Image 3</p></th>
                                <th style={{ width: "100px" }}><p>Action</p></th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td><p>1.</p></td>
                                {/* <td><p><img src={`https://simandhareducation-files.s3.ap-south-1.amazonaws.com${DefaultData.img1}`} alt="" /></p></td> */}

                                {/* <td><p><img src={`https://simandhareducation-files.s3.ap-south-1.amazonaws.com${DefaultData.img2}`} alt="" /></p></td>
                                <td><p><img src={`https://simandhareducation-files.s3.ap-south-1.amazonaws.com${DefaultData.img3}`} alt="" /></p></td> */}


                                {
                                    DefaultData.list && DefaultData.list.map((img, ind) => {
                                        console.log(img)
                                        return (
                                            <>
                                                <td><p><img src={`${S3_buckets}${img.img}`} alt="" /></p></td>
                                            </>
                                        )
                                    })
                                }

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

export default AdminWithAuth(elijahwatt)