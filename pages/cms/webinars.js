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

const webinars = () => {
    let Token = secureLocalStorage.getItem('CMSTk');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [edit, setedit] = useState(false);
    const [data, setData] = useState({
            desktopBanner: {},
            mobileBanner: {},
            bannerAlt: '',
            path:'',
            heading1:'',
            heading2:'',
            description:'',
            status:true,           
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
            if(name == "desktopBanner"){
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






      const HandleIconChange = (e,id) =>{
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
            let webinars = [...webinarIcons];
            webinars[id][name] = reader.result;
            webinars[id]["iconName"] = files[0].name;

            setWebinarsIcons(webinars)
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
        let icons = webinarIcons.filter((d,id)=>delete d.iconName)
        let obj = {...data,desktopBanner: base64,mobileBanner:base641,list : [...icons]}
        delete obj.icon
        const result = await axios.post(cmsConstats.addCMSWebinars, obj, {
            headers: {
                'Content-Type': 'application/json',
                 'Authorization': `JWT ${Token}`
            }
        })
        console.log("result", result);
        console.log(result.data)
        // console.log(obj)

        setedit(false)
        setData({ 
            desktopBanner: {},
            mobileBanner: {},
            bannerAlt:'', 
            path:'',
            heading1:'',
            heading2:'',
            description:'',
            status:true })
        fetchData();
    }



    let [DefaultData, setdefaultDeta] = useState([]);
    // console.log(DefaultData)
    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        let res = await axios.get(urlConstants.getWebinarData)
        // let data = await res.json();
        setdefaultDeta(res.data[0]?.webinar?.webinars)
        // setdefaultDeta([...data.homeScreenBanners.banners])
        // console.log(data.homeScreenBanners.banners);
    }

    const handleEdit = (data, ind) => {
        setedit(true)
        setData({
            desktopBanner: {},
            mobileBanner: {},
            path: data.path ? data.path : '',
            heading1: data.heading1 ? data.heading1 : '',
            heading2: data.heading2 ? data.heading2 : '',
            description: data.description ? data.description : '',
            status: data.status ? data.status : true,
            bannerAlt: data.bannerAlt ? data.bannerAlt : '',
            id: ind,
        });
        setBase64('')
        window.scrollTo(0, 0)

        setWebinarsIcons([...data.list])
        // console.log(data);
    }

    // console.log(data);



    const editData = async (e) => {
        e.preventDefault();

        let obj = {...data, desktopBanner: base64,mobileBanner:base641}
        const result = await axios.post(cmsConstats.editCMSWebinars, obj, {
            headers: {
                'Content-Type': 'application/json',
                 'Authorization': `JWT ${Token}`
            }
        })
        console.log("result", result);
        console.log(result.data)

        setedit(false)
        setData({
            desktopBanner: {},
            mobileBanner: {},
            bannerAlt: '',
            path:'',
            heading1:'',
            heading2:'',
            description:'',
            status:true,
            id:''

        })
        setBase64('')
        fetchData();

    }


    const handleAddNew = () => {
        setedit(false)
        setData({
            desktopBanner: {},
            mobileBanner: {},
            bannerAlt: '',
            path:'',
            heading1:'',
            heading2:'',
            description:'',
            status:true,
        });
        window.scrollTo(0, 0)
    }



    const deleteListData = async (ind) => {

        if (confirm("Data Will Be Deleted Permanently.!")) {
            const result = await axios.post(cmsConstats.deleteCMSWebinars, { id: ind }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                     'Authorization': `JWT ${Token}`
                }
            })
            console.log("result", result);
            console.log(result.data)
            setedit(false)
            fetchData();
        }
    }








    const [webinarIcons,setWebinarsIcons] = useState([{icon : "",iconName : "",title:"",iconAlt : ""}]);

    
    const handleIconDataChange = (e,ind) =>{
        let webinars = [...webinarIcons];
        webinarIcons[ind][e.target.name] = e.target.value;
        setWebinarsIcons(webinars)
    }
    // console.log(webinarIcons);


    const removeIconWebinar = (id) =>{
        let webinar = webinarIcons.filter((data,ind)=>{
            return ind!==id
        })
        setWebinarsIcons(webinar)
    }
    return (
        <>
            <Head>
                <title>Banner - Simandhar Education</title>
            </Head>
            <SideTab />
            <section className="section fixedPadd">
                <div className="container">
                    <h2 className='heading03'>Webinar</h2>
                    <form action="" method='POST' className='two-col mt-4' onSubmit={edit ? editData : SubmitData}>
                        <div className="inputFileds wdt-full" style={{ position: 'relative' }}>
                            <label htmlFor="" className='title01'>.Image rq (Website Version) :</label>
                            <h6 className='dimension'>*Dimensions : WxH | Format : .jpg, .png</h6>
                            <div className="filedwrap two-col mb-4">
                                <div className="imgBack">
                                    <p>{data.desktopBanner.name}</p>
                                    <input type="file" accept='image/*' style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e)} id={`desktopBanner`} className='wdt-full bordernone title01 posiinput' name='desktopBanner' title='Please Select Image.!' />
                                </div>
                                <div className="one-col">
                                    <div className="addwrap">
                                        <a className='btn maroon-border-btn wdt-full text-center' onClick={(e) => clickUploadImage(`desktopBanner`)}>Add Image</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="inputFileds wdt-full">
                            <label htmlFor="" className='title01'>.Image rq (Mobile Version) :</label>
                            <h6 className='dimension'>*Dimensions : WxH | Format : .jpg, .png</h6>
                            <div className="filedwrap two-col mb-4">
                                <div className="imgBack">
                                    <p>{data.mobileBanner.name}</p>
                                    <input type="file" accept='image/*' style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e)} id={`mobileBanner`} className='wdt-full bordernone title01 posiinput' name='mobileBanner' title='Please Select Mobile Banner.!' />
                                </div>
                                <div className="one-col">
                                    <div className="addwrap">
                                        <a className='btn maroon-border-btn wdt-full text-center' onClick={(e) => clickUploadImage(`mobileBanner`)}>Add Image</a>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="inputFileds wdt-full mt-4">
                                <label htmlFor="" className='title01'>Image Alt text :</label>
                                <input className='wdt-full bordernone title01' name='bannerAlt' type="text" onChange={(e) => handleInputChange(e)} value={data.bannerAlt} required title='please Provide Alt Text.!' />
                        </div>

                        <div className="inputFileds wdt-full mt-4">
                                <label htmlFor="" className='title01'>Webinar Link</label>
                                <input className='wdt-full bordernone title01' name='path' type="text" onChange={(e) => handleInputChange(e)} value={data.path} required title='please Provide Webinar Link.!' />
                        </div>

                        <div className="inputFileds wdt-full mt-4">
                                <label htmlFor="" className='title01'>Heading 1</label>
                                <input className='wdt-full bordernone title01'  name='heading1' type="text" onChange={(e) => handleInputChange(e)} value={data.heading1}  title='please Provide Heading.!' />
                        </div>

                        <div className="inputFileds wdt-full mt-4">
                                <label htmlFor="" className='title01'>Description</label>
                                <input className='wdt-full bordernone title01'  name='description' type="text" onChange={(e) => handleInputChange(e)} value={data.description}  title='please Provide Description.!' />
                        </div>

                        <div className="inputFileds wdt-full mt-4">
                                <label htmlFor="" className='title01'>Heading 2</label>
                                <input className='wdt-full bordernone title01' name='heading2' type="text" onChange={(e) => handleInputChange(e)} value={data.heading2}  title='please Provide Heading.!' />
                        </div>



                        {/* <div className="inputFileds wdt-full mt-4">
                            <p className='title01' style={{fontSize : "25px",margin:" 0 0 20px 0"}}>Icons</p>
                            {
                                webinarIcons?.map((data,ind)=>{
                                    return(
                                        <>
                                        <div className="inputFileds wdt-full">
                                            <label htmlFor="" className='title01'>.Icon rq (Website Version) :</label>
                                            <h6 className='dimension'>*Dimensions : WxH | Format : .jpg, .png</h6>
                                            <div className="filedwrap two-col mb-4">
                                                <div className="imgBack">
                                                    <p>{data.iconName}</p>
                                                    <input type="file" accept='image/*' style={{ display: 'none' }} onChange={(e) => HandleIconChange(e,ind)} id={`Icon${ind}`} className='wdt-full bordernone title01 posiinput' name='icon' title='Please Select Mobile Banner.!' />
                                                </div>
                                                <div className="one-col">
                                                    <div className="addwrap">
                                                        <a className='btn maroon-border-btn wdt-full text-center' onClick={(e) => clickUploadImage(`Icon${ind}`)}>Add Image</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="inputFileds wdt-full">
                                                <label htmlFor="" className='title01'>Icon Title :</label>
                                                <input className='wdt-full bordernone title01' placeholder='Alt Text' name='title' type="text" onChange={(e) => handleIconDataChange(e,ind)} value={data.title} title='please Provide Alt Text.!' />
                                            </div>
                                            <div className="wdt-full">
                                                <label htmlFor="" className='title01'>Icon Alt text :</label>
                                                <input className='wdt-full bordernone title01' placeholder='Alt Text' name='iconAlt' type="text" onChange={(e) => handleIconDataChange(e,ind)} value={data.iconAlt} title='please Provide Alt Text.!' />
                                            </div>
                                            {
                                                ind!==0 
                                                &&  
                                            <div className="two-col">
                                                <div className="addwrap" onClick={()=>removeIconWebinar(ind)}>
                                                    <a className='btn maroon-border-btn mt-4 text-center'>Remove Icons</a>
                                                </div>
                                           </div>
                                            }
                                        </div>
                                        </>
                                    )
                                })
                            }

                           <div className="two-col">
                                <div className="addwrap" onClick={()=>setWebinarsIcons([...webinarIcons,{icon : "",iconName : "",title:"",iconAlt : ""}])}>
                                    <a className='btn maroon-border-btn mt-4 text-center'>Add Icons</a>
                                </div>
                            </div>

                        </div> */}
                        
                      
                  


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
                                <th><p>Desktop Banner</p></th>
                                <th><p>Mobile Banner</p></th>
                                <th><p>Link</p></th>
                                <th style={{ width: "100px" }}><p>Action</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                DefaultData && DefaultData.map((data, ind) => {
                                    let desktopBanner = `${S3_buckets}/${data.desktopBanner}`
                                    let mobileBanner = `${S3_buckets}/${data.mobileBanner}`
                                    return (
                                        <tr key={ind}>
                                            <td><p>{ind}.</p></td>
                                            <td><p><img src={desktopBanner} alt={data.bannerAlt} /></p></td>
                                            <td><p><img src={mobileBanner} alt={data.bannerAlt} /></p></td>
                                            <td><p>{data.path ? data.path : 'no Alt Available'}</p></td>
                                            <td>
                                                <button className='cms-btn edit-box' onClick={() => handleEdit(data, data.id)}><BiEditAlt /></button>
                                                <button className='cms-btn edit-box' onClick={() => deleteListData(data.id)}><AiOutlineDelete /></button>
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

export default webinars