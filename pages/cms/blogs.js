import React, { useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Head from 'next/head'
import SideTab from '../../Dashboard/SideTab'
import { useState, useRef, useMemo } from 'react'
import { useForm } from 'react-hook-form';
import blank_image_For_banner_page from '../../public/img/blank_image_For_banner_page.png'
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import AdminWithAuth from './AdminAuthRoute'
import dynamic from "next/dynamic";
import { urlConstants , cmsConstats } from '../../constants/urlConstants'
import secureLocalStorage from 'react-secure-storage'
// const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })
const JoditEditor = dynamic(() => import('jodit-pro-react'), { ssr: false })
// import parse from 'html-react-parser';
import { toast } from "react-hot-toast";









const blogs = () => {

  let RoleofAdmin = secureLocalStorage.getItem('RoleAdmin')

  let blinkOnAddOrEdit = useRef(null)
  let Token = secureLocalStorage.getItem("CMSTk");
  // console.log(Token);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [edit, setedit] = useState(false);


  const editor = useRef(null);
  const [content, setContent] = useState('');
  // const config = {
  //   readonly: false,
  //   placeholder: 'Start typings...'
  // }

  const config = {
		readonly: false,
    placeholder: 'Start typings...',
		uploader: {
			url: 'https://xdsoft.net/jodit/finder/?action=fileUpload'
		},
    style: {
 background: '#ffffff',
 color: 'rgba(255,255,255,0.5)',
 },
		filebrowser: {
			ajax: {
				url: 'https://xdsoft.net/jodit/finder/'
			},
			// height: 580,
		}
	}

  // const [category, setCategory] = useState(['CPA USA', 'CMA USA', 'ACCOUNTING', 'EA (ENROLLED AGENT)', 'CIA', 'IFRS', 'CPA TIPS', 'CMA TIPS', 'STUDENT CORNER'])
  const [data, setData] = useState({
    title: "",
    shortDescription: "",
    category: "",
    tags: "",
    content: "",
    image: {},
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

  const [base64, setBase64] = useState('')
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
      setBase64(reader.result);
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
    let obj = { ...data, image: base64, tags: data.tags.split(','), content: content.toString(), category:editcategory}
    const result = await axios.post(cmsConstats.addBlog, obj, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${Token}`
      }
    })
    // console.log("result", result);
    // console.log(result.data)
    // console.log(obj);
    fetchData();
    setData({
      title: "",
      shortDescription: "",
      category: "",
      tags: "",
      content: "",
      image: {},
    });
    setContent("");
  }

  let [DefaultData, setdefaultDeta] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])




  const fetchData = async () => {
    let res = await axios.post(cmsConstats.getBlogs, {}, {
      headers: {
        Authorization: `JWT ${Token}`
      }
    })

    let dataList = await res.data;
    setdefaultDeta([...dataList])
  }
  // console.log(DefaultData);







  let [editcategory, seteditcategory] = useState('');

  const handleEdit = (data, ind) => {
    blinkOnAddOrEdit.current?.focus()
    setedit(true)
    seteditcategory(data.category);
    // console.log(data.category);

    setContent(data.content)
    setData({
      ...data
    })
    setBase64('')

    // console.log(data);
    window.scrollTo(0, 0)
  }
  // console.log(data);
  const editData = async (e) => {
    e.preventDefault();
    let obj = { ...data, content: content, image: base64 , category : editcategory }

    // console.log("obj---", data);

    try {
      const result = await axios.post(cmsConstats.editBlog, obj, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${Token}` 
        }
      })

      fetchData();
      // console.log(result.response.data.title)
      // setCategory('');

      setedit(false)
      setData({
        title: "",
        shortDescription: "",
        category: "",
        tags: "",
        content: "",
        image: {},
      });
      setBase64('')
    } catch (err) {
      console.log("somthing went wrong",err)
      setData({
        title: "",
        shortDescription: "",
        category: "",
        tags: "",
        content: "",
        image: {},
      });
      setBase64('')
      fetchData();
      seteditcategory('');
      setContent('')
    }
  }










  const handleAddNew = () => {
    blinkOnAddOrEdit.current?.focus()
    setedit(false)
    setData({
      title: "",
      shortDescription: "",
      category: "",
      tags: "",
      content: "",
      image:{},
    });
    
    window.scrollTo(0, 0)
  }



  const deleteListData = async (ind) => {

    if(RoleofAdmin=="admin"){
      if (confirm("Data Will Be Deleted Permanently.!")) {
        const result = await axios.post(cmsConstats.deleteBlog, { id: ind }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${Token}`
          }
        })
        console.log("result", result);
        console.log(result.data)
  
        setedit(false)
        setData({
          title: "",
          shortDescription: "",
          category: "",
          tags: "",
          content: [""],
          image: {},
        });
        fetchData();
      }
    }else{
      toast.error(`You Don't Have Access To Delete Blogs.!`)
    }
  }
  return (
    <>
      <Head>
        <title>Blogs - Simandhar Education</title>
      </Head>
      <SideTab />
      <section className="section fixedPadd">
        <div className="container">
          <h3 className='heading03'>Blogs</h3>
          <div >
            <form action="" method='POST' className='mt-4' onSubmit={edit ? editData : SubmitData}>
              <div>
                <div className="inputFileds bb wdt-full">
                  <label htmlFor="" className='title01'>Blog Title</label>
                  <input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' placeholder='Enter Blog Title' name='title' type="text" value={data.title} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="inputFileds bb wdt-full mt-4">
                  <label htmlFor="" className='title01'>Short Description</label>
                  <input className='wdt-full bordernone title01' placeholder='Enter Short Description' name='shortDescription' type="text" value={data.shortDescription} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="inputFileds bb wdt-full mt-4">
                  <label htmlFor="" className='title01'>Category</label>
                  <select name="category" value={editcategory} className='wdt-full bordernone title01' onChange={(e) => seteditcategory(e.target.value)} >

                    {/* {
                      editcategory ? <option className='wdt-full bordernone title01' value={editcategory}>{editcategory}</option> :
                        <> */}
                          {/* <option value="">Select Category</option>
                          {
                            category.map((data, index) => {
                              return (
                                <> */}
                                {/* CPA USA', 'CMA USA', 'ACCOUNTING', 'EA (ENROLLED AGENT)', 'CIA', 'IFRS', 'CPA TIPS', 'CMA TIPS', 'STUDENT CORNER */}
                                <option value="">Select Category</option>
                                  <option className='wdt-full bordernone title01' value="CPA">CPA USA</option>
                                  <option className='wdt-full bordernone title01' value="CMA">CMA USA</option>
                                  <option className='wdt-full bordernone title01' value="ACCA">ACCA</option>
                                  <option className='wdt-full bordernone title01' value="ACCOUNTING">ACCOUNTING</option>
                                  <option className='wdt-full bordernone title01' value="EA">EA (ENROLLED AGENT)</option>
                                  <option className='wdt-full bordernone title01' value="CIA">CIA</option>
                                  <option className='wdt-full bordernone title01' value="IFRS">IFRS</option>
                                  <option className='wdt-full bordernone title01' value="CPA TIPS">CPA TIPS</option>
                                  <option className='wdt-full bordernone title01' value="CMA TIPS">CMA TIPS</option>
                                  <option className='wdt-full bordernone title01' value="STUDENT CORNER">STUDENT CORNER</option>
                                {/* </>
                              )
                            })
                          } */}
                          {/* </>
                    } */}
                  </select>
                </div>
                {/* <div className="inputFileds bb wdt-full mt-4">
                  <label htmlFor="" className='title01'>Tags</label>
                  <input className='wdt-full bordernone title01' placeholder='Enter tags' name='tags' type="text" value={data.tags} onChange={(e) => handleInputChange(e)} />
                </div> */}
                <div className="inputFileds bb wdt-full mt-4">
                  <label htmlFor="" className='title01 mb-4'>Main Content</label>
                  {/* <input className='wdt-full bordernone title01' placeholder='Enter Content' name='content' type="text" value={data.content} onChange={(e) => handleInputChange(e)} /> */}
                  <JoditEditor ref={editor} config={config} className='wdt-full bordernone title01' tabIndex={1} value={content} onBlur={newContent => setContent(newContent)} />
                </div>

              </div>
              <div className='mt-4'>
                <div className="wdt-full bb" style={{ position: 'relative' }}>
                  <label htmlFor="" className='title01'> Image rq (Website Version) :</label>
                  <h6 className='dimension'>*Dimensions : WxH | Format : .jpg, .png</h6>

                  <div className="inputFileds filedwrap ">
                    <div className="imgBack">
                      <p>{data.image.name ? data.image.name : ''}</p>
                      <input type="file" style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e)} id={`img`} className='wdt-full bordernone title01 posiinput' name='image' />
                    </div>
                    <div className="one-col right">
                      <div className="addwrap">
                        <a className='btn maroon-border-btn text-center' onClick={(e) => clickUploadImage(`img`)}>Add Image</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="two-col">
                <div className="two-col">
                  <div className="addwrap">
                    {edit ? <input type="submit" className='btn maroon-border-btn mt-4 text-center' value="Save" onClick={editData} /> : <input type="submit" className='btn maroon-border-btn mt-4 text-center' onClick={SubmitData} value="Submit" />}
                  </div>
                </div>
              </div>
            </form>
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
                <th><p>Title</p></th>
                <th><p>Image</p></th>
                <th><p>Category</p></th>
                <th><p>Created Date</p></th>
                <th style={{ width: "100px" }}><p>Action</p></th>
              </tr>
            </thead>
            <tbody>
              {
                DefaultData && DefaultData.map((data, ind) => {
                  // console.log(data.image)

                  let img;

                  if (data.image && data.image[0] !== '/') {
                    img = urlConstants?.S3_buckets + '/' + data.image;
                  }
                  return (
                    <tr key={ind}>
                      <td><p>{ind + 1}.</p></td>
                      <td><p>{data.title}</p></td>
                      <td>{data.image ? <img src={img} /> : 'No Image'}</td>
                      <td><p>{data.category}</p></td>
                      <td><p>{data.createdAt}</p></td>
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

export default AdminWithAuth(blogs)