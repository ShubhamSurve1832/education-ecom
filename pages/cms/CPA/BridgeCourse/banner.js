import React, { useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Head from 'next/head'
import SideTab from '../../../../Dashboard/SideTab'
import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form';
import blank_image_For_banner_page from '../../../../public/img/blank_image_For_banner_page.png'
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import AdminWithAuth from '../../AdminAuthRoute'
import secureLocalStorage from 'react-secure-storage';
import { urlConstants,cmsConstats, S3_buckets} from '../../../../constants/urlConstants'
import { toast } from "react-hot-toast";

const bridgeCourse = () => {
  let blinkOnAddOrEdit = useRef()
  let Token = secureLocalStorage.getItem('CMSTk');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [data, setData] = useState({
    heading: "",
    description: "",
    bannerAlt: "",
    bannerImage: {},
    pdfPath: {}
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


  const handleImageInputChange = (e,type) => {
    const { name, files } = e.target;
		const allowedTypes = ["image/jpeg", "image/png","image/webp"];
		if (files[0]) {
			if (allowedTypes.includes(files[0].type)) {
				let size = files[0] ? Math.round(files[0].size / 1024) : "";
				if (size < 5120) {
					toast.loading("Uploading...");
					toast.dismiss()
						toast.success("Uploaded")
					if(type==="img1"){
            setTimeout(() => {
              setData({
                ...data,
                img1: files[0]
              });              
            }, 1000);
          } else{
            setTimeout(() => {
              setData({
                ...data,
                img2: files[0]
              });
              
            }, 1000);
          }
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
    setdefaultData({ ...data.education })
    // console.log(data.education);
  }






  const handleEdit = (data) => {
    blinkOnAddOrEdit.current?.focus()
    setData({
        heading: data.heading,
        description: data.description,
        bannerAlt: data.bannerAlt,
        bannerImage: {},
        pdfPath: {}
    });

    window.scrollTo(0, 0)
  }

  console.log(data);



  const editData = async (e) => {
    e.preventDefault();


    const result = await axios.post(cmsConstats.editBridgeCurse, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `JWT ${Token}`
      }
    })
    console.log("result", result);
    console.log(editData)

    setData({
        heading: "",
        description: "",
        bannerAlt: "",
        bannerImage: {},
        pdfPath: {}
    })
    fetchData();

  }
  return (
    <>
      <Head>
        <title>Bridge Course : Simnadhar Education</title>
      </Head>
      <SideTab />
      <section className="section fixedPadd" data-aos="fade-up">
        <div className="container">
          <h2 className='heading03'>Bridge Course Banner</h2>

          <form action="" method='POST' onSubmit={editData} >

            <div>
              <div className='mt-4'>
                <div>
                  <div className="inputFileds bb wdt-full">
                    <label htmlFor="" className='title01'>Heading :</label>
                    <input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01'  name='heading' type="text" onChange={(e) => handleInputChange(e)} value={data.heading} />
                  </div>
                <div className="wdt-full mt-4">
                    <label htmlFor="" className='title01'>Description :</label>
                    <div className="two-col mt-4">
                      <div className="inputFileds">
                        <input className='wdt-full bordernone title01 bb' placeholder='description' name='description' onChange={(e) => handleInputChange(e)} type="text" value={data.description} />
                      </div>
                      <div className="inputFileds">
                        <input className='wdt-full bordernone title01 bb' placeholder='bannerAlt' name='bannerAlt' onChange={(e) => handleInputChange(e)} type="text" value={data.bannerAlt} />
                      </div>
                    </div>               
                </div>
                </div>
                <div>
                  <h2 className='title01 mt-4 mb-4'>Image Cards :</h2>
                  <div className="two-col wdt-full bb">
                    <div className="inputFileds filedwrap mb-4">
                      <label htmlFor="" className='title01'> Image rq (Left) :</label>
                      <h6 className='dimension'>*Dimensions : 387 * 484 px | Format : .jpg, .png</h6>
                      <div className="two-col">
                        <div className="imgBack">
                          <p>{data.bannerImage.name}</p>
                          <input type="file" style={{ display: 'none' }} className='wdt-full bordernone title01 posiinput' id={`bannerImage`} name='bannerImage' onChange={(e) => handleImageInputChange(e,'bannerImage')} />
                          {/* <span>Upload img</span> */}
                        </div>
                        <div className="right">
                          <a className='btn maroon-border-btn text-center' onClick={() => clickUploadImage(`bannerImage`)}>Add Image</a>
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
                <th><p>Banner</p></th>
                <th><p>title</p></th>
                <th><p>Description</p></th>
                <th style={{ width: "100px" }}><p>Action</p></th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td><p>1.</p></td>
                <td><p><img src={`https://simandhareducation-files.s3.ap-south-1.amazonaws.com${DefaultData?.img2}`} alt="" /></p></td>
                <td><p>{DefaultData.title ? DefaultData.title : 'no Title Available'}</p></td>
                <td><p>{DefaultData.description ? DefaultData.description : 'no Description Available'}</p></td>
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

export default AdminWithAuth(bridgeCourse)