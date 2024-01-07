import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import SideTab from '../../../Dashboard/SideTab'
import { useState, useRef, useEffect } from 'react'
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai"
import axios from 'axios';
import AdminWithAuth from '../AdminAuthRoute';
import secureLocalStorage from 'react-secure-storage';
import { S3_buckets, cmsConstats, urlConstants } from '../../../constants/urlConstants';
import { toast } from "react-hot-toast";



const journey = () => {
  let blinkOnAddOrEdit = useRef()
  let Token = secureLocalStorage.getItem('CMSTk');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [edit, setedit] = useState(false);
  const [data, setData] = useState({
    heading: "",
    span: "",
    imagePath: {},
    videoPath: "",
    // banAlt: ""
  })

  // console.log(data)
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

  const handleAddNew = () => {
    blinkOnAddOrEdit.current?.focus()
    setedit(false)
    setData({
      heading: "",
      span: "",
      imagePath: {},
      videoPath: "",
    });
    window.scrollTo(0, 0)
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
    const result = await axios.post(cmsConstats.addDetailsCorporateJourney, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `JWT ${Token}`
      }
    })
    console.log("result", result);
    console.log(result.data)

    fetchData();
    setData({
      heading: "",
      span: "",
      imagePath: {},
      videoPath: "",
    });

  }

  let [DefaultData, setdefaultDeta] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    let res = await fetch(urlConstants.videoSection)
    let data = await res.json();
    setdefaultDeta([...data.corporateJourneyPage.tabs])
    // console.log(data.corporateJourneyPage.tabs);
  }



  const handleEdit = async (data, ind) => {
    blinkOnAddOrEdit.current?.focus()
    setedit(true)
    let res = await fetch(urlConstants.videoSection)
    let d = await res.json();
    let videopath = d.corporateJourneyPage.videos.filter((val, id) => {
      return val.id === ind;
    })

    setData({
      id: ind,
      heading: data.heading,
      span: data.span,
      imagePath: {},
      videoPath: videopath[0].path,
      // banAlt: data.banAlt
    });
    window.scrollTo(0, 0)
  }



  const editData = async (e) => {
    e.preventDefault();

    const result = await axios.post(cmsConstats.editDetailsCorporateJourney, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `JWT ${Token}`
      }
    })
    // console.log("result", result);
    // console.log(result.data)

    setedit(false)
    setData({
      heading: "",
      span: "",
      imagePath: {},
      videoPath: "",
      // banAlt: ""
    });

    fetchData();

  }


  const deleteListData = async (ind) => {

    if (confirm("Data Will Be Deleted Permanently.!")) {

      const result = await axios.post(cmsConstats.deleteDetailsCorporateJourney, { id: ind }, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `JWT ${Token}`
        }
      })
      console.log("result", result);
      console.log(result.data)

      setedit(false)
      setData({
      heading: "",
      span: "",
      imagePath: {},
      videoPath: "",
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
          <h2 className='heading03'>From the Students Who Made it Big</h2>

          <div>
            <form action="" method='POST' className='two-col mt-4' onSubmit={SubmitData}>
              <div>
                <div className="inputFileds bb wdt-full">
                  <label htmlFor="" className='title01'>Video Title</label>
                  <input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' placeholder='Enter Heading' name='heading' type="text" value={data.heading} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="inputFileds bb wdt-full mt-4">
                  <label htmlFor="" className='title01'>Video Tag</label>
                  <input className='wdt-full bordernone title01' placeholder='Enter Tag' name='span' type="text" value={data.span} onChange={(e) => handleInputChange(e)} />
                </div>

                <div className="inputFileds bb wdt-full mt-4">
                  <label htmlFor="" className='title01'>Video Link (YouTube)</label>
                  <input className='wdt-full bordernone title01' placeholder='Video Link' name='videoPath' type="text" value={data.videoPath} onChange={(e) => handleInputChange(e)} />
                </div>
              </div>
              <div className=" wdt-full " style={{ position: 'relative' }}>
                <label htmlFor="" className='title01'> Image rq (Website Version) :</label>
                <h6 className='dimension'>*Dimensions : WxH | Format : .jpg, .png</h6>
                <div className="filedwrap inputFileds two-col mb-4">
                  <div className="imgBack">
                    <p>{data.imagePath.name ? data.imagePath.name : ''}</p>
                    <input type="file" style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e)} id={`imagePath`} className='wdt-full bordernone title01 posiinput' name='imagePath' />
                  </div>
                  <div className="one-col right">
                    <div className="addwrap">
                      <a className='btn maroon-border-btn text-center' onClick={(e) => clickUploadImage(`imagePath`)}>Add Image</a>
                    </div>
                  </div>
                </div>

                {/* <div className="inputFileds bb wdt-full mt-4">
                  <label htmlFor="" className='title01'>Image Alt</label>
                  <input className='wdt-full bordernone title01' placeholder='Add thumbnail Alt' name='banAlt' type="text" value={data.banAlt} onChange={(e) => handleInputChange(e)} />
                </div> */}
              </div>

              <div className="two-col">
                <div className="two-col">
                  <div className="addwrap">
                  <div className="addwrap">
                    {edit ? <input type="submit" className='btn maroon-border-btn mt-4 text-center' value="Save" onClick={editData} /> : <input type="submit" className='btn maroon-border-btn mt-4 text-center' onClick={SubmitData} value="Submit" />}
                  </div>
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
                <th><p>Span</p></th>
                <th style={{ width: "100px" }}><p>Action</p></th>
              </tr>
            </thead>
            <tbody>
              {
                DefaultData && DefaultData.map((data, ind) => {
                  let img;
                  if (data.path[0] === '/') {
                    img = `${S3_buckets}${data.path}`
                  } else {
                    img = `${S3_buckets}/${data.path}`
                  }
                  return (
                    <tr key={ind}>
                      <td><p>{ind + 1}.</p></td>
                      <td><p><img src={img} alt="" /></p></td>
                      <td><p>{data.span ? data.span : 'no Alt Available'}</p></td>
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

export default AdminWithAuth(journey)