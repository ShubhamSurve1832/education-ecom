import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import Head from 'next/head'
import dynamic from 'next/dynamic'
// import SideTab from '../../../Dashboard/SideTab'
const SideTab = dynamic(() => import('../../Dashboard/SideTab'))
import { useForm } from 'react-hook-form';
import { memo } from 'react'
import blank_image_For_banner_page from '../../public/img/blank_image_For_banner_page.png'
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import secureLocalStorage from 'react-secure-storage';
import { S3_buckets, cmsConstats, urlConstants } from '../../constants/urlConstants'
import { toast } from "react-hot-toast";

const Events = () => {
    let Token = secureLocalStorage.getItem('CMSTk');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [edit, setedit] = useState(false);
    const [data, setData] = useState({
        bannerImage: {},
        eventName: '',
        emailContent: '',
        eventDate:'',
        description:'',
        startTime:'',
        endTime:'',
        headline:'', 
        city:'',
        bannerImageAlt:''          
        })


    const clickUploadImage = (imgTagID) => {
        document.getElementById(imgTagID).click();
    }


    const handleInputChange = (e, i) => {
        // const { name, value } = e.target;

        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const [base64, setBase64] = useState('')
    const [base641, setBase641] = useState('')

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
        
    
        let size = Math.round(e.target.files[0].size / 1024);
        if (size > 2048) {
          alert("File size is big, please select a file less than 2mb");
        }
    
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            if(name == "bannerImage"){
                setBase64(reader.result);
            } else {
                setBase641(reader.result);
            }
          setData({
            ...data,
            [e.target.name]: e.target.files[0]
          });    
    
        })
    
        // console.log(base64)
    
        if (e.target.value.includes('fakepath')) {
          reader.readAsDataURL(e.target.files[0]);
        } else {
          console.log('select files again')
        }   
    
      }
    


    const SubmitData = async (e) => {
        e.preventDefault();
        postData();
    }


    const postData = async () => {
        let obj = {...data,bannerImage: base64}
        const result = await axios.post(cmsConstats.addEvents, obj, {
            headers: {
                'Content-Type': 'application/json',
                 'Authorization': `JWT ${Token}`
            }
        })
        console.log("result", result);
        console.log(result.data)
        console.log(obj)

        setedit(false)
        setData({ 
            bannerImage: {},
            eventName: '',
            emailContent: '',
            eventDate:'',
            description:'',
            startTime:'',
            endTime:'',
            headline:'', 
            city:'',
            bannerImageAlt:'' 
        })
        fetchData();
    }



    let [DefaultData, setdefaultDeta] = useState([]);
    console.log(DefaultData)
    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        let res = await axios.post(urlConstants.getEventsData)
        // let data = await res.json();
        setdefaultDeta(res.data)
        // setdefaultDeta([...data.homeScreenBanners.banners])
        // console.log(data.homeScreenBanners.banners);
        // console.log(res) 
    }

    const handleEdit = (data, ind) => {
        setedit(true)
        setData({
            bannerImage: {},
            eventName: data.eventName ? data.eventName : '',
            emailContent: data.emailContent ? data.emailContent : '',
            eventDate: data.eventDate ? data.eventDate : '',
            description: data.description ? data.description : '',
            startTime: data.startTime ? data.startTime : '',
            endTime: data.endTime ? data.endTime : '',
            headline: data.headline ? data.headline : '',
            city: data.city ? data.city : '',
            bannerImageAlt: data.bannerImageAlt ? data.bannerImageAlt : '',
            _id: ind,
        });
        setBase64('')
        window.scrollTo(0, 0)
    }

    // console.log(data);



    const editData = async (e) => {
        e.preventDefault();

        let obj = {...data,status:true}
        const result = await axios.post(cmsConstats.editEvents, obj, {
            headers: {
                'Content-Type': 'application/json',
                 'Authorization': `JWT ${Token}`
            }
        })
        console.log("result", result);
        console.log(result.data)

        setedit(false)
        setData({
        bannerImage: {},
        eventName: '',
        emailContent: '',
        eventDate:'',
        description:'',
        startTime:'',
        endTime:'',
        headline:'', 
        city:'',
        bannerImageAlt:'',
        id:''
        })
        setBase64('')
        fetchData();

        console.log(obj)

    }


    const handleAddNew = () => {
        setedit(false)
        setData({
            bannerImage: {},
            eventName: '',
            emailContent: '',
            eventDate:'',
            description:'',
            startTime:'',
            endTime:'',
            headline:'', 
            city:'',
            bannerImageAlt:'' 
        });
        window.scrollTo(0, 0)
    }



    const deleteListData = async (ind) => {

        if (confirm("Data Will Be Deleted Permanently.!")) {
            const result = await axios.post(cmsConstats.deleteEvents, { _id: ind }, {
                headers: {
                    'Content-Type': 'application/json',
                     'Authorization': `JWT ${Token}`
                }
            })
            console.log("result", result);
            console.log(result.data)
            setedit(false)
            fetchData();
        }
    }
    return (
        <>
            <Head>
                <title>Events - Simandhar Education</title>
            </Head>
            <SideTab />
            <section className="section fixedPadd">
                <div className="container">
                    <h2 className='heading03'>Events</h2>
                    <form action="" method='POST' className='two-col mt-4' onSubmit={edit ? editData : SubmitData}>
                        <div className="inputFileds wdt-full" style={{ position: 'relative' }}>
                            <label htmlFor="" className='title01'>.Image rq (Website Version) :</label>
                            <h6 className='dimension'>*Dimensions : WxH | Format : .jpg, .png</h6>
                            <div className="filedwrap two-col mb-4">
                                <div className="imgBack">
                                    <p>{data.bannerImage.name}</p>
                                    <input type="file" accept='image/*' style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e)} id={`bannerImage`} className='wdt-full bordernone title01 posiinput' name='bannerImage' title='Please Select Image.!' />
                                </div>
                                <div className="one-col">
                                    <div className="addwrap">
                                        <a className='btn maroon-border-btn wdt-full text-center' onClick={(e) => clickUploadImage(`bannerImage`)}>Add Image</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="inputFileds wdt-full">
                                <label htmlFor="" className='title01'>Image Alt text :</label>
                                <input className='wdt-full bordernone title01' name='bannerImageAlt' type="text" onChange={(e) => handleInputChange(e)} value={data.bannerImageAlt} required title='please Provide Alt Text.!' />
                        </div>

                        <div className="inputFileds wdt-full mt-4">
                                <label htmlFor="" className='title01'>Event Name</label>
                                <input className='wdt-full bordernone title01' name='eventName' type="text" onChange={(e) => handleInputChange(e)} value={data.eventName} required title='please Provide Event Name.!' />
                        </div>

                        <div className="inputFileds wdt-full mt-4">
                                <label htmlFor="" className='title01'>Event Date</label>
                                <input className='wdt-full bordernone title01'  name='eventDate' type="date" onChange={(e) => handleInputChange(e)} value={data.eventDate} required title='please Provide Heading.!' />
                        </div>
                        <div className="inputFileds wdt-full mt-4">
                                <label htmlFor="" className='title01'>Start Time</label>
                                <input className='wdt-full bordernone title01'  name='startTime' type="time" onChange={(e) => handleInputChange(e)} value={data.startTime} required title='please Provide Heading.!' />
                        </div>
                        <div className="inputFileds wdt-full mt-4">
                                <label htmlFor="" className='title01'>End Time</label>
                                <input className='wdt-full bordernone title01'  name='endTime' type="time" onChange={(e) => handleInputChange(e)} value={data.endTime} required title='please Provide Heading.!' />
                        </div>

                        <div className="inputFileds wdt-full mt-4">
                                <label htmlFor="" className='title01'>Headline</label>
                                <input className='wdt-full bordernone title01'  name='headline' type="text" onChange={(e) => handleInputChange(e)} value={data.headline} required title='please Provide Headline.!' />
                        </div>

                        <div className="inputFileds wdt-full mt-4">
                                <label htmlFor="" className='title01'>Description</label>
                                <input className='wdt-full bordernone title01' name='description' type="text" onChange={(e) => handleInputChange(e)} value={data.description} required title='please Provide Description.!' />
                        </div>
                        <div className="inputFileds wdt-full mt-4">
                                <label htmlFor="" className='title01'>City</label>
                                <input className='wdt-full bordernone title01' name='city' type="text" onChange={(e) => handleInputChange(e)} value={data.city} required title='Please Provide City.!' />
                        </div>
                        
                        <div className="inputFileds wdt-full mt-4">
                                <label htmlFor="" className='title01'>Email Content</label>
                                <input className='wdt-full bordernone title01'  name='emailContent' type="text" onChange={(e) => handleInputChange(e)} value={data.emailContent} required title='please Provide Headline.!' />
                        </div>
                        
                  


                        <div className="two-col">
                            <div className="two-col">
                                <div className="addwrap">
                                    {edit ? <input type="submit" value="Save" className='btn maroon-border-btn mt-4 text-center' /> : <input type="submit" value="Submit" className='btn maroon-border-btn mt-4 text-center' />}
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </section>

            <section className="section fixedPadd testimonial-cms-section">
                <div className="container">
                    <button className='cms-btn edit-box add-btn' onClick={() => handleAddNew()}>Add New</button>
                    <table cellPadding="0" cellSpacing="0" className='cms-table'>
                        <thead>
                            <tr>
                                <th><p>Sr. No.</p></th>
                                <th><p>Date</p></th>
                                <th><p>Event Banner</p></th>
                                <th><p>Event City</p></th>
                                <th style={{ width: "100px" }}><p>Action</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                DefaultData && DefaultData.map((data, ind) => {
                                    let {eventDate,bannerAlt,city} = data;
                                    let bannerImage = `${S3_buckets}/${data.bannerImage}`
                                    let mobileBanner = `${S3_buckets}/${data.mobileBanner}`
                                    return (
                                        <tr key={ind}>
                                            <td><p>{ind}.</p></td>
                                            <td><p>{new Date(eventDate).toLocaleDateString()}</p></td>
                                            <td><p><img src={bannerImage} alt={data.bannerAlt} /></p></td>
                                            <td><p>{data.city ? data.city : 'no city Available'}</p></td>
                                            <td>
                                                <button className='cms-btn edit-box' onClick={() => handleEdit(data, data._id)}><BiEditAlt /></button>
                                                <button className='cms-btn edit-box' onClick={() => deleteListData(data._id)}><AiOutlineDelete /></button>
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

export default Events