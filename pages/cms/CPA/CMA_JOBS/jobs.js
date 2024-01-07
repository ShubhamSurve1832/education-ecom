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
const jobs = () => {
  let blinkOnAddOrEdit = useRef(null)
  let Token = secureLocalStorage.getItem('CMSTk');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const [edit, setedit] = useState(false);
  const [data, setData] = useState({
    title: "",
    discription: "",
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


    const result = await axios.post(cmsConstats.addCMAJobs, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `JWT ${Token}`
      }
    })
    // console.log("result", result);
    // console.log(result.data)

    fetchData();

    setData({
      title: "",
      discription: "",
      image: {}
    });

  }



  let [DefaultData, setdefaultDeta] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    let res = await fetch(urlConstants.getJobsData)
    let data = await res.json();
    setdefaultDeta([...data.cmaJobs.lists])
    // console.log(data.cmaJobs.lists);
  }





  const handleEdit = async (data, ind) => {
    blinkOnAddOrEdit.current?.focus()
    setedit(true)

    setData({
      id: ind,
      title: data.title,
      discription: data.discription,
      image: {}
    });

    window.scrollTo(0, 0)
  }

  console.log(data);



  const editData = async (e) => {
    e.preventDefault();

    const result = await axios.post(cmsConstats.editCMAJobs, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `JWT ${Token}`
      }
    })
    // console.log("result", result);
    // console.log(result.data)

    setedit(false)

    setData({
      title: "",
      discription: "",
      image: {}
    });

    fetchData();

  }


  const handleAddNew = () => {
    blinkOnAddOrEdit.current?.focus()
    setedit(false)
    setData({
      title: "",
      discription: "",
      image: {}
    });
    window.scrollTo(0, 0)
  }



  const deleteListData = async (ind) => {


    if (confirm("Data Will Be Deleted Permanently.!")) {
      const result = await axios.post(cmsConstats.deleteCMAJobs, { id: ind }, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `JWT ${Token}`
        }
      })
      // console.log("result", result);
      // console.log(result.data)

      setedit(false)
      setData({
        title: "",
        discription: "",
        image: {}
      });
      fetchData();
    }

  }


  return (
    <>
      <Head>
        <title>Placement - Simandhar Education</title>
      </Head>
      <SideTab />
      <section className="section fixedPadd placement">
        <div className="container">
          <h2 className='heading03'>CMA JOBS</h2>

          <form action="" method='POST' className='mt-4' onSubmit={edit ? editData : SubmitData}>
            <div>
              <div className="inputFileds bb wdt-full">
                <label htmlFor="" className='title01'>Name</label>
                <input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' placeholder='Name' name='title' type="text" onChange={(e) => handleInputChange(e)} value={data.title} />
              </div>
              <div className="inputFileds bb wdt-full mt-4">
                <label htmlFor="" className='title01'>Description</label>
                <input className='wdt-full bordernone title01' placeholder='Description ' name='discription' type="text" onChange={(e) => handleInputChange(e)} value={data.discription} />
              </div>
            </div>
            <div className=" wdt-full bb mt-4 `" style={{ position: 'relative' }}>
              <label htmlFor="" className='title01'> Image rq (Website Version) :</label>
              <h6 className='dimension'>*Dimensions : WxH | Format : .jpg, .png</h6>
              <div className="inputFileds filedwrap two-col">
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
            </div>
          </form >

          <div className="two-col">
            <div className="two-col">
              <div className="addwrap">
                {edit ? <input type="submit" className='btn maroon-border-btn mt-4 text-center' value="Save" onClick={editData} /> : <input type="submit" className='btn maroon-border-btn mt-4 text-center' onClick={SubmitData} value="Submit" />}
              </div>
            </div>
          </div>


        </div>
      </section >











      <section className="section fixedPadd testimonial-cms-section">
        <div className="container">
          <button className='cms-btn edit-box add-btn' onClick={() => handleAddNew()}>Add New</button>
          <table cellPadding="0" cellSpacing="0" className='cms-table'>
            <thead>
              <tr>
                <th><p>Sr. No.</p></th>
                <th><p>Image</p></th>
                <th><p>Title</p></th>
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

export default AdminWithAuth(jobs)