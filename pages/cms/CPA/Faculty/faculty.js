import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { useForm } from 'react-hook-form';
import SideTab from '../../../../Dashboard/SideTab'
import blank_image_For_banner_page from '../../../../public/img/blank_image_For_banner_page.png'
import { useState, useRef } from 'react'
import { useEffect } from 'react';
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai"
import axios from 'axios';
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
    name: "",
    post: "",
    course: "",
    link: "",
    alt: "",
    image: {}
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


    const result = await axios.post(cmsConstats.addUSCPAFaculty, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `JWT ${Token}`
      }
    })
    // console.log("result", result);
    // console.log(result.data)

    fetchData();

    setData({
      name: "",
      post: "",
      course: "",
      link: "",
      alt: "",
      image: {}
    });

  }



  let [DefaultData, setdefaultDeta] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    let res = await fetch(urlConstants.getFacultyData)
    let data = await res.json();
    setdefaultDeta([...data.cpaPage.members])
    // console.log(data.cpaPage.members);
  }





  const handleEdit = async (data, ind) => {
    blinkOnAddOrEdit.current?.focus()
    setedit(true)

    setData({
      id: ind,
      name: data.name,
      post: data.post,
      course: data.course,
      link: data.link,
      alt: data.alt,
      image: {}
    });

    window.scrollTo(0, 0)
  }

  console.log(data);



  const editData = async (e) => {
    e.preventDefault();

    const result = await axios.post(cmsConstats.editUSCPAFaculty, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `JWT ${Token}`
      }
    })
    // console.log("result", result);
    // console.log(result.data)

    setedit(false)

    setData({
      name: "",
      post: "",
      course: "",
      link: "",
      alt: "",
      image: {}
    });

    fetchData();

  }


  const handleAddNew = () => {
    blinkOnAddOrEdit.current?.focus()
    setedit(false)
    setData({
      name: "",
      post: "",
      course: "",
      link: "",
      alt: "",
      image: {}
    });
    window.scrollTo(0, 0)
  }



  const deleteListData = async (ind) => {


    if (confirm("Data Will Be Deleted Permanently.!")) {
      const result = await axios.post(cmsConstats.deleteUSCPAFaculty, { id: ind }, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `JWT ${Token}`
        }
      })
      // console.log("result", result);
      // console.log(result.data)

      setedit(false)
      setData({
        name: "",
        post: "",
        course: "",
        link: "",
        alt: "",
        image: {}
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
          <h2 className='heading03'>US CPA FACULTY</h2>
          <div>
            <form action="" method='POST' className='two-col mt-4' onSubmit={edit ? editData : SubmitData}>
              <div>
                <div className="inputFileds bb wdt-full">
                  <label htmlFor="" className='title01'>Name</label>
                  <input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' placeholder='Name' name='name' type="text" onChange={(e) => handleInputChange(e)} value={data.name} />
                </div>
                <div className="inputFileds bb wdt-full mt-4">
                  <label htmlFor="" className='title01'>Designation </label>
                  <input className='wdt-full bordernone title01' placeholder='Designation ' name='post' type="text" onChange={(e) => handleInputChange(e)} value={data.post} />
                </div>
                <div className="inputFileds bb wdt-full mt-4">
                  <label htmlFor="" className='title01'>Linked profile url</label>
                  <input className='wdt-full bordernone title01' placeholder='Linked profile url' name='link' type="text" onChange={(e) => handleInputChange(e)} value={data.link} />
                </div>
                <div className="inputFileds bb wdt-full mt-4">
                  <label htmlFor="" className='title01'>Certified Course Name :</label>
                  <input className='wdt-full bordernone title01' placeholder='Certified Course Name' name='course' type="text" onChange={(e) => handleInputChange(e)} value={data.course} />
                </div>
              </div>
              <div className=" wdt-full bb" style={{ position: 'relative' }}>
                <label htmlFor="" className='title01'> Image rq (Website Version) :</label>
                <h6 className='dimension'>*Dimensions : WxH | Format : .jpg, .png</h6>

                <div className="filedwrap inputFileds two-col mb-4">
                  <div className="imgBack">
                    <p>{data.image.name ? data.image.name : ''}</p>
                    <input type="file" style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e)} id={`img`} className='wdt-full bordernone title01 posiinput' name='image' />
                  </div>
                  <div className="one-col right">
                    <div className="addwrap">
                      <a className='btn maroon-border-btn text-center' onClick={() => clickUploadImage(`img`)}>Add Image</a>
                    </div>
                  </div>
                </div>

                <div className="inputFileds wdt-full">
                  <label htmlFor="" className='title01'>Image Alt :</label>
                  <input className='wdt-full bordernone title01' placeholder='Alt' name='alt' type="text" onChange={(e) => handleInputChange(e)} value={data.alt} />
                </div>
              </div>

              <div className="two-col">
                <div className="two-col">
                  <div className="addwrap">
                    {edit ? <input type="submit" className='btn maroon-border-btn mt-4 text-center' value="Save" onClick={editData} /> : <input type="submit" className='btn maroon-border-btn mt-4 text-center' onClick={SubmitData} value="Submit" />}
                  </div>
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
                <th><p>Name</p></th>
                <th style={{ width: "100px" }}><p>Action</p></th>
              </tr>
            </thead>
            <tbody>
              {
                DefaultData && DefaultData.map((data, ind) => {
                  let img;
                  if (data.image[0] === '/') {
                    img = `${S3_buckets}${data.image}`
                  } else {
                    img = `${S3_buckets}/${data.image}`
                  }
                  return (
                    <tr key={ind}>
                      <td><p>{ind + 1}.</p></td>
                      <td><p><img src={img} alt="" /></p></td>
                      <td><p>{data.name ? data.name : 'no Alt Available'}</p></td>
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