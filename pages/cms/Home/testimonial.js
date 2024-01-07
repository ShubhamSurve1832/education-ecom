import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import SideTab from '../../../Dashboard/SideTab'
import blank_image_For_banner_page from '../../../public/img/blank_image_For_banner_page.png'
import { useForm } from 'react-hook-form';
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai"
import AdminWithAuth from '../AdminAuthRoute'
import secureLocalStorage from 'react-secure-storage';
import { cmsConstats , S3_buckets, urlConstants } from '../../../constants/urlConstants'
import { toast } from "react-hot-toast";

const testimonial = () => {
    let blinkOnAddOrEdit = useRef(null)
    let Token = secureLocalStorage.getItem('CMSTk');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [edit, setedit] = useState(false);
    const [data, setData] = useState({
        img: {},
        para: "",
        btn: "",
        title: "",
        caption: "",
        achAlt: "",
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

    let [DefaultData, setdefaultDeta] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        let res = await fetch(urlConstants.achiverSection)
        let data = await res.json();
        setdefaultDeta([...data.homePage.list])
    }
    
    console.log(DefaultData);




    const handleEdit = (data, ind) => {
        setedit(true)
        blinkOnAddOrEdit.current?.focus()
        setData({
            id: ind,
            img: {},
            para: data.para,
            btn: data.btn,
            title: data.title,
            caption: data.caption,
            achAlt: data.achAlt,
        });

        window.scrollTo(0, 0)
    }

    console.log(data);



    const editData = async (e) => {
        e.preventDefault();

        const result = await axios.post(cmsConstats.editHomeAchiverSection, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `JWT ${Token}`
            }
        })
        console.log("result", result);
        console.log(result.data)

        setedit(false)

        setData({
            img: {},
            para: "",
            btn: "",
            title: "",
            caption: "",
            achAlt: "",
        });

        fetchData();

    }





    return (
        <>
            <Head>
                <title>Testimonial - Simandhar Education</title>
            </Head>
            <SideTab />
            {
                edit && <section className="section fixedPadd testimonial">
                    <div className="container">
                        <h2 className='heading03'>Achiever Testimonials</h2>


                        <div >
                            <div>
                                <form method='POST' className='mt-4' onSubmit={editData}>
                                    <div className='two-col'>
                                        <div className="inputFileds bb wdt-full">
                                            <label htmlFor="" className='title01'>Read more title :</label>
                                            <input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01'  name='btn' type="text" onChange={(e) => handleInputChange(e)} value={data.btn} />
                                        </div>
                                        <div className="inputFileds wdt-full bb">
                                            <label htmlFor="" className='title01'>Achiever's Name :</label>
                                            <input className='wdt-full bordernone title01'  name='title' type="text" onChange={(e) => handleInputChange(e)} value={data.title} />
                                        </div>
                                    </div>
                                    
                                   

                                    <div className='two-col  mt-4'>

                                        <div className="inputFileds wdt-full bb">
                                            <label htmlFor="" className='title01'>Course :</label>
                                            <input className='wdt-full bordernone title01' name='caption' type="text"  onChange={(e) => handleInputChange(e)} value={data.caption} />
                                        </div>
                                        <div className="inputFileds wdt-full bb">
                                            <label htmlFor="" className='title01'>Description :</label>
                                            <input className='wdt-full bordernone title01' name='para' type="text"  onChange={(e) => handleInputChange(e)} value={data.para} />
                                        </div>
                                    </div>
                                    <div className='two-col  mt-4'>
                                        <div className="inputFileds wdt-full relative">
                                            <label htmlFor="" className='title01'>Achiever's Image :</label>
                                            <h6 className='dimension'>*Dimensions : 200 * 200 px | Format : .jpg, .png</h6>
                                            <div className="filedwrap two-col">
                                                <div className="imgBack">
                                                    <p>{data.img.name}</p>
                                                    <input type="file" style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e)} id={`Img`} className='wdt-full bordernone title01 posiinput' name='img' />
                                                    {/* <span>Upload img</span> */}
                                                </div>
                                                <div className="one-col right">
                                                    <div className="addwrap">
                                                        <a className='btn maroon-border-btn text-center' onClick={() => clickUploadImage(`Img`)}>Add Image</a>
                                                    </div>
                                                </div>
                                                {/* <p style={{ position: "absolute", top: '90px', fontSize: '18px' }}>{data.img.name ? data.img.name : ''}</p> */}
                                            </div>
                                        </div>
                                        <div className=" wdt-full bb">
                                            <label htmlFor="" className='title01'>Image Alt Text :</label>
                                            <input className='wdt-full inputFileds bordernone title01' name='achAlt' type="text" onChange={(e) => handleInputChange(e)} value={data.achAlt} />
                                        </div>

                                    </div>
                                    
                                    <div>
                                        
                                        
                                    </div>
                                    <div className="two-col">
                                        <div className="two-col">
                                            <div className="addwrap">
                                                <input type="submit" className='btn maroon-border-btn mt-4 text-center' value="Save" onClick={editData} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            }


            <section className="section fixedPadd testimonial-cms-section pt-5">
                <div className="container">
                    <table cellPadding="0" cellSpacing="0" className='cms-table'>
                        <thead>
                            <tr>
                                <th><p>Sr. No.</p></th>
                                <th><p>Image</p></th>
                                <th><p>Name</p></th>
                                <th style={{ width: "100px" }}><p>Action</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                DefaultData && DefaultData.map((data, ind) => {
                                    let img;

                                    if (data.img[0] === '/') {
                                        img = `${S3_buckets}${data.img}`

                                    } else {
                                        img = `${S3_buckets}/${data.img}`

                                    }
                                    return (
                                        <tr key={ind}>
                                            <td><p>{ind + 1}.</p></td>
                                            <td><p><img src={img} alt="" /></p></td>

                                            <td><p>{data.title ? data.title : 'no Alt Available'}</p></td>
                                            <td>
                                                <button className='cms-btn edit-box' onClick={() => handleEdit(data, data.id)}><BiEditAlt /></button>

                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default AdminWithAuth(testimonial)