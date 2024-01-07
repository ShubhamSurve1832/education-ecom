import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { useForm } from 'react-hook-form';
import SideTab from '../../../../Dashboard/SideTab'
import { useState, useRef } from 'react'
import { useEffect } from 'react';
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai"
import axios from 'axios';
import AdminWithAuth from '../../AdminAuthRoute';
import secureLocalStorage from 'react-secure-storage';
import { cmsConstats, urlConstants } from '../../../../constants/urlConstants';
import { toast } from "react-hot-toast";


const alumni = () => {
  let blinkOnAddOrEdit = useRef(null)
  let Token = secureLocalStorage.getItem('CMSTk');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [data, setData] = useState({
    link: "",
    title: "",
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




  let [DefaultData, setdefaultDeta] = useState({});
  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    let res = await fetch(urlConstants.getAlumniPage)
    let data = await res.json();
    setdefaultDeta({ ...data.CPAalumni })
    // console.log(data.CPAalumni);
  }





  const handleEdit = (data, ind) => {
    blinkOnAddOrEdit.current?.focus()
    setData({
      link: data.link,
      title: data.title,
    });

    window.scrollTo(0, 0)
  }

  console.log(data);



  const editData = async (e) => {
    e.preventDefault();


    const result = await axios.post(cmsConstats.editCPAAlumni, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${Token}`
      }
    })
    // console.log("result", result);
    // console.log(result.data)

    fetchData();

    setData({
      link: "",
      title: "",
    });

  }


  const handleAddNew = () => {
    setData({
      link: "",
      title: "",
    });
    window.scrollTo(0, 0)
  }




  return (
    <>
      <Head>
        <title>Posts - Simandhar Education</title>
      </Head>
      <SideTab />


      <section className="section fixedPadd">
        <div className="container">
          <h2 className='heading03'>Alumni</h2>

          <div>
            <form action="" method='POST' className='mt-4' onSubmit={editData}>
              <div>
                <div className="inputFileds bb wdt-full">
                  <label htmlFor="" className='title01'>Video Title</label>
                  <input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' name='title' type="text" value={data.title} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="inputFileds bb wdt-full mt-4">
                  <label htmlFor="" className='title01'>Video Tag</label>
                  <input className='wdt-full bordernone title01' name='link' type="text" value={data.link} onChange={(e) => handleInputChange(e)} />
                </div>
              </div>


              <div className="">
                <div className="right">
                  <div className="addwrap">
                    <input type="submit" className='btn maroon-border-btn mt-4 text-center' value="Save" onClick={editData} />
                  </div>
                </div>
              </div>
            </form >
          </div>


        </div>
      </section>









      <section className="section fixedPadd testimonial-cms-section">
        <div className="container">
          {/* <button className='cms-btn edit-box add-btn' onClick={()=>handleAddNew()}>Add New</button> */}
          <table cellPadding="0" cellSpacing="0" className='cms-table'>
            <thead>
              <tr>
                <th><p>Sr. No.</p></th>
                <th><p>Title</p></th>
                <th><p>Link</p></th>
                <th style={{ width: "100px" }}><p>Action</p></th>
              </tr>
            </thead>
            <tbody>
              {
                <tr>
                  <td><p>1.</p></td>
                  <td>{DefaultData.title}</td>
                  <td><p>{DefaultData.link ? DefaultData.link : 'no Alt Available'}</p></td>
                  <td>
                    <button className='cms-btn edit-box' onClick={() => handleEdit(DefaultData)}><BiEditAlt /></button>
                  </td>
                </tr>

              }
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default AdminWithAuth(alumni)
