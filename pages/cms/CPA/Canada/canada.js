import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import SideTab from '../../../../Dashboard/SideTab'
import { useForm } from 'react-hook-form';
import blank_image_For_banner_page from '../../../../public/img/blank_image_For_banner_page.png'
import { useState, useRef } from 'react'
import { useEffect } from 'react';
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai"
import axios from 'axios';
import AdminWithAuth from '../../AdminAuthRoute';
import secureLocalStorage from 'react-secure-storage';
import { cmsConstats, urlConstants } from '../../../../constants/urlConstants';

const canada = () => {
  let blinkOnAddOrEdit = useRef(null)
  let Token = secureLocalStorage.getItem('CMSTk');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const [edit, setedit] = useState(false);
  const [data, setData] = useState({
    mainHeding: "",
    path: "",
    img: {},
    "descriptions[0]": "",
    "descriptions[1]": "",
    "descriptions[2]": "",
    "descriptions[3]": "",
    "descriptions[4]": "",
    "descriptions[5]": "",
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

    setData({
      ...data,
      [e.target.name]: e.target.files[0]
    });

  }







  let [DefaultData, setdefaultDeta] = useState({});
  useEffect(() => {
    fetchData();
  }, [])


const fetchData = async() =>{
  let res = await fetch(urlConstants.heroBanner)
  let data = await res.json();
  setdefaultDeta({...data.canadaPage})
  // console.log(data);
}





  const handleEdit = async (data) => {
    blinkOnAddOrEdit.current?.focus()
    setedit(true)

    setData({
      mainHeding: data.mainHeding,
      path: data.path,
      img: {},
      "descriptions[0]": data.lists[0].list,
      "descriptions[1]": data.lists[1].list,
      "descriptions[2]": data.lists[2].list,
      "descriptions[3]": data.lists[3].list,
      "descriptions[4]": data.lists[4].list,
      "descriptions[5]": data.lists[5].list,
    });

    window.scrollTo(0, 0)
  }

  console.table(data);



  const editData = async (e) => {
    e.preventDefault();

  const result = await axios.post(cmsConstats.editUSCPACanadaDetails, data, { headers: {'Content-Type': 'multipart/form-data',
  'Authorization': `JWT ${Token}`}})
  console.log("result", result);
  console.log(result.data)

    setedit(false)

    setData({
      mainHeding: "",
      path: "",
      img: {},
      "descriptions[0]": "",
      "descriptions[1]": "",
      "descriptions[2]": "",
      "descriptions[3]": "",
      "descriptions[4]": "",
      "descriptions[5]": "",
    });

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
          <h2 className='heading03'>Canada</h2>
          <form action="" method='POST' onSubmit={editData}>

            <div>
              <div className=" mt-4">
                <div>
                  <div className="inputFileds bb wdt-full">
                    <label htmlFor="" className='title01'>RHS Title</label>
                    <input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' name="mainHeding" onChange={(e) => handleInputChange(e)} type="text" value={data.mainHeding} />
                  </div>

                  <div className="inputFileds bb wdt-full mt-4">
                    <label htmlFor="" className='title01'>Video URL</label>
                    <input className='wdt-full bordernone title01' name='path' onChange={(e) => handleInputChange(e)} type="text" value={data.path} />
                  </div>
                  <div className="inputFileds bb wdt-full mt-4">
                    <label htmlFor="" className='title01'>List One(1)</label>
                    <input className='wdt-full bordernone title01' onChange={(e) => handleInputChange(e)} name='descriptions[0]' type="text" value={data['descriptions[0]']} />
                  </div>
                  <div className="inputFileds bb wdt-full mt-4">
                    <label htmlFor="" className='title01'>List One(2)</label>
                    <input className='wdt-full bordernone title01' onChange={(e) => handleInputChange(e)} name='descriptions[1]' type="text" value={data['descriptions[1]']} />
                  </div>
                  <div className="inputFileds bb wdt-full mt-4">
                    <label htmlFor="" className='title01'>List One(3)</label>
                    <input className='wdt-full bordernone title01' onChange={(e) => handleInputChange(e)} name='descriptions[2]' type="text" value={data['descriptions[2]']} />
                  </div>
                  <div className="inputFileds bb wdt-full mt-4">
                    <label htmlFor="" className='title01'>List One(4)</label>
                    <input className='wdt-full bordernone title01' onChange={(e) => handleInputChange(e)} name='descriptions[3]' type="text" value={data['descriptions[3]']} />
                  </div>
                  <div className="inputFileds bb wdt-full mt-4">
                    <label htmlFor="" className='title01'>List One(5)</label>
                    <input className='wdt-full bordernone title01' onChange={(e) => handleInputChange(e)} name='descriptions[4]' type="text" value={data['descriptions[4]']} />
                  </div>
                  <div className="inputFileds bb wdt-full mt-4">
                    <label htmlFor="" className='title01'>List One(6)</label>
                    <input className='wdt-full bordernone title01' onChange={(e) => handleInputChange(e)} name='descriptions[5]' type="text" value={data['descriptions[5]']} />
                  </div>
                </div>
                {/* <div className=" wdt-full bb" style={{ position: 'relative' }}>
                  <label htmlFor="" className='title01'> Image rq (Website Version) :</label>
                  <h6 className='dimension'>*Dimensions : WxH | Format : .jpg, .png</h6>


                  <div className="filedwrap inputFileds two-col mb-4">
                    <div className="imgBack">
                      <p>{data.img.name ? data.img.name : ''}</p>
                      <input type="file" style={{ display: 'none' }} id={`img`} onChange={(e) => handleImageInputChange(e)} className='wdt-full bordernone title01 posiinput' name='img' />
                    </div>
                    <div className="one-col right">
                      <div className="addwrap twp-col">
                        <a className='btn maroon-border-btn text-center' onClick={() => clickUploadImage(`img`)}>Add Image</a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>


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
      </section >








      <section className="section fixedPadd testimonial-cms-section">
        <div className="container">
          {/* <button className='cms-btn edit-box add-btn' onClick={()=>handleAddNew()}>Add New</button> */}
          <table cellPadding="0" cellSpacing="0" className='cms-table'>
            <thead>
              <tr>
                <th><p>Sr. No.</p></th>
                <th><p>mainHeding</p></th>
                <th><p>URl</p></th>
                <th style={{ width: "100px" }}><p>Action</p></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><p>1.</p></td>
                {/* <td><p><img src={DefaultData.img} alt="" /></p></td> */}
                <td><p>{DefaultData.mainHeding ? DefaultData.mainHeding : 'no Heading Available'}</p></td>
                <td><p>{DefaultData.path ? DefaultData.path : 'no URL Available'}</p></td>
                <td>
                  <button className='cms-btn edit-box' onClick={() => handleEdit(DefaultData)}><BiEditAlt /></button>
                  {/* <button className='cms-btn edit-box' onClick={()=>deleteListData(data.id)}><AiOutlineDelete /></button> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


    </>
  )
}

export default AdminWithAuth(canada)