import { useEffect } from 'react';
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai"
import axios from 'axios';
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import SideTab from '../../../../Dashboard/SideTab'
import { useState, useRef } from 'react'
import blank_image_For_banner_page from '../../../../public/img/blank_image_For_banner_page.png'
import AdminWithAuth from '../../AdminAuthRoute';
import secureLocalStorage from 'react-secure-storage';
import { S3_buckets, cmsConstats, urlConstants } from '../../../../constants/urlConstants';
import { toast } from "react-hot-toast";

const achiever = () => {
let blinkOnAddOrEdit = useRef(null)
  let Token = secureLocalStorage.getItem('CMSTk');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [edit, setedit] = useState(false);
  const [data, setData] = useState({
    img: {},
    logo: {},
    title: "",
    btn: "",
    para: "",
    caption: "",
    path: ""
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



  const SubmitData = async (e) => {

    e.preventDefault();
    postData();
  }


  const postData = async () => {

    const result = await axios.post(cmsConstats.addAchieverTestimonials, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `JWT ${Token}`
      }
    })
    // console.log("result", result);
    // console.log(result.data)

    fetchData();

    setData({
      img: {},
      logo: {},
      title: "",
      btn: "",
      para: "",
      caption: "",
      path: ""
    });

  }



  let [DefaultData, setdefaultDeta] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    let res = await fetch(urlConstants.achiverSection)
    let data = await res.json();
    setdefaultDeta([...data.testimonialOnePage.list])
    console.log(data.testimonialOnePage.list);
  }





  const handleEdit = (data, ind) => {
    blinkOnAddOrEdit.current?.focus()
    setedit(true)

    setData({
      id: ind,
      img: {},
      logo: {},
      title: data.title,
      btn: data.btn,
      para: data.para,
      caption: data.caption,
      path: data.path
    });

    window.scrollTo(0, 0)
  }

  console.log(data);



  const editData = async (e) => {
    e.preventDefault();

    const result = await axios.post(cmsConstats.editAchieverTestimonials, data, {
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
      logo: {},
      title: "",
      btn: "",
      para: "",
      caption: "",
      path: ""
    });

    fetchData();

  }


  const handleAddNew = () => {
    blinkOnAddOrEdit.current?.focus()
    setedit(false)
    setData({
      img: {},
      logo: {},
      title: "",
      btn: "",
      para: "",
      caption: "",
      path: ""
    });
    window.scrollTo(0, 0)
  }



  const deleteListData = async (ind) => {


    if (confirm("Data Will Be Deleted Permanently.!")) {
      const result = await axios.post(cmsConstats.deleteAchieverTestimonials, { id: ind }, {
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
        logo: {},
        title: "",
        btn: "",
        para: "",
        caption: "",
        path: ""
      });
      fetchData();
    }

  }
  return (
    <>
      <Head>
        <title>Posts - Simandhar Education</title>
      </Head>
      <SideTab />


      <section className="section fixedPadd">
        <div className="container">
          <h2 className='heading03'>Achievers Testimonials</h2>

          <div>
            <form action="" method='POST' className='mt-4' onSubmit={edit ? editData : SubmitData}>
              <div className='two-col'>
                <div className="inputFileds bb wdt-full">
                  <label htmlFor="" className='title01'>Name</label>
                  <input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' name='title' type="text" onChange={(e) => handleInputChange(e)} value={data.title} />
                </div>
                <div className="inputFileds bb wdt-full">
                  <label htmlFor="" className='title01'>Course Pursued </label>
                  <input className='wdt-full bordernone title01' name='caption' type="text" onChange={(e) => handleInputChange(e)} value={data.caption} />
                </div>
              </div>
              <div className='two-col'>
                <div className="inputFileds bb wdt-full mt-4">
                  <label htmlFor="" className='title01'>Testimonial</label>
                  <input className='wdt-full bordernone title01' name='para' type="text" onChange={(e) => handleInputChange(e)} value={data.para} />
                </div>
                <div className="inputFileds bb wdt-full mt-4">
                  <label htmlFor="" className='title01'>Button Text</label>
                  <input className='wdt-full bordernone title01' name='btn' type="text" onChange={(e) => handleInputChange(e)} value={data.btn} />
                </div>
              </div>
              <div className='two-col mt-4'>
              <div className="inputFileds wdt-full bb" style={{ position: 'relative' }}>
                  <label htmlFor="" className='title01'>Student Image :</label>
                  <h6 className='dimension'>*Dimensions : 200 * 200 px | Format : .jpg, .png</h6>
                  <div className="filedwrap two-col">
                    <div className="imgBack">
                      <p>{data.img.name ? data.img.name : ''}</p>
                      <input type="file" style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e)} id={`img`} className='wdt-full bordernone title01 posiinput' name='img' />
                    </div>
                    <div className="one-col right">
                      <div className="addwrap">
                        <a className='btn maroon-border-btn text-center' onClick={() => clickUploadImage(`img`)}>Add Image</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inputFileds wdt-full" style={{ position: 'relative' }}>
                  <label htmlFor="" className='title01'>Social profile Logo  :</label>
                  <h6 className='dimension'>*Dimensions : 40 * 40 px | Format : .jpg, .png</h6>
                  <div className="filedwrap two-col">
                    <div className="imgBack">
                      <p>{data.logo.name ? data.logo.name : ''}</p>
                      <input type="file" style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e)} id={`logo`} className='wdt-full bordernone title01 posiinput' name='logo' />
                    </div>
                    <div className="one-col right">
                      <div className="addwrap">
                        <a className='btn maroon-border-btn text-center' onClick={() => clickUploadImage(`logo`)}>Add Image</a>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className='two-col mt-4'>
              <div className="inputFileds bb wdt-full">
                  <label htmlFor="" className='title01'>Linkedin Url</label>
                  <input className='wdt-full bordernone title01' name='path' type="text" onChange={(e) => handleInputChange(e)} value={data.path} />
                </div>
              </div>

             
                <div className="two-col">
                  <div className="addwrap">
                    {edit ? <input type="submit" className='btn maroon-border-btn mt-4 text-center' value="Save" onClick={editData} /> : <input type="submit" className='btn maroon-border-btn mt-4 text-center' onClick={SubmitData} value="Submit" />}
                  </div>
              </div>

            </form >

          </div>

        </div>
      </section>







      <section className="section fixedPadd testimonial-cms-section">
        <div className="container">
          <button className='cms-btn edit-box add-btn' onClick={() => handleAddNew()}>Add New</button>
          <table cellPadding="0" cellSpacing="0" className='cms-table'>
            <thead>
              <tr>
                <th><p>Sr. No.</p></th>
                <th><p>Image</p></th>
                <th><p>Logo</p></th>
                <th><p>Title</p></th>
                <th style={{ width: "100px" }}><p>Action</p></th>
              </tr>
            </thead>
            <tbody>
              {
                DefaultData && DefaultData.map((data, ind) => {
                  let img;
                  let logo;
                  if (data.img[0] === '/' && data.logo[0] === '/') {
                    img = `${S3_buckets}${data.img}`
                    logo = `${S3_buckets}${data.logo}`
                  } else {
                    img = `${S3_buckets}/${data.img}`
                    logo = `${S3_buckets}/${data.logo}`
                  }
                  return (
                    <tr key={ind}>
                      <td><p>{ind + 1}.</p></td>
                      <td><p><img src={img} alt="" /></p></td>
                      <td><p><img src={logo} alt="" /></p></td>
                      <td><p>{data.title ? data.title : 'no Alt Available'}</p></td>
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

export default AdminWithAuth(achiever)