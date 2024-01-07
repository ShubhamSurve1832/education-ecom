import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import SideTab from '../../Dashboard/SideTab'
import { useState, useRef } from 'react'
import blank_image_For_banner_page from '../../public/img/blank_image_For_banner_page.png'
import { useEffect } from 'react';
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai"
import axios from 'axios';
import AdminWithAuth from './AdminAuthRoute';
import secureLocalStorage from 'react-secure-storage';
import { toast } from "react-hot-toast";
import { S3_buckets, cmsConstats, urlConstants } from '../../constants/urlConstants';

const courses = () => {
  let blinkOnAddOrEdit = useRef(null)
	let Token = secureLocalStorage.getItem('CMSTk');
	const { register, handleSubmit, formState: { errors }, reset } = useForm();

	const [edit, setedit] = useState(false);

	//basic data structure
	const [data, setData] = useState({
		"title": "",
		"description": "",
		"keywords": "",
		"pageName": "",
		"pageId": ""
	})
	



	const handleChangeInput = (e) =>{
		let {name,value} = e.target;

		setData({
			...data,
			[name] : value
		})
	}


	// console.log(data);



	let [TotalPages,setTotalPages] = useState(1);
	let [n,setN] = useState(1);
	//default data on first load the site
	let [DefaultData, setdefaultDeta] = useState([]);
	useEffect(() => {
		fetchData();
	}, [n])



	//load data
    const fetchData = async () => {
        
        try{
            let res = await axios.post(cmsConstats.getAllMetaTags, {page : n}, {
                headers: {
                "Content-Type": "application/json",                
                "Authorization": `JWT ${Token}`,
                },
              });

              if (res.status ===200){
                setdefaultDeta([...res.data.items]);
				setTotalPages(Math.ceil(res?.data?.totalCount/10))
              }
        } catch(err){
console.log(err)
        }
    };





	//set edit data on form on click of handle edit btn
	const handleEdit = (data, ind) => {
		blinkOnAddOrEdit.current?.focus()
		setedit(true)

		let {title,description,keywords,pageName,pageId,_id} = data;
		setData({
			"id" : _id,
			"title": title,
			"description": description,
			"keywords": keywords,
			"pageName": pageName,
			"pageId": pageId,
			"status" : true
		});


		window.scrollTo(0, 0)
	}




	//edit data will be triggered on save
	const editData = async (e) => {
		e.preventDefault();

		const result = await axios.post(cmsConstats.editMetaTags, data, {
			headers: {
				'Content-Type': "application/json",
				 'Authorization': `JWT ${Token}`
			}
		})
		console.log("result", result);
		// console.log(result.data)

		setedit(false)

		setData({
			"title": "",
			"description": "",
			"keywords": "",
			"pageName": "",
			"pageId": ""
		});

		fetchData();

	}




	const handleAddNew = () =>{
		setedit(false);
		setData({
			"title": "",
			"description": "",
			"keywords": "",
			"pageName": "",
			"pageId": ""
		})	
	}





	const AddMetaTags = async(e) =>{
		e.preventDefault();
		try{
			let response = await axios.post(cmsConstats.addMetaTags,{...data,status : true},{
				headers : {
					"Content-Type" : "application/json",
					"Authorization" : `JWT ${Token}`
				}
			})

			// console.log(response.data);
			fetchData();
			setData({
				"title": "",
				"description": "",
				"keywords": "",
				"pageName": "",
				"pageId": ""
			})
		}catch(error){

		}
	}







	
	const SwitchPage = (e) =>{
		setN(e.target.value)
	}


	const Prev = () =>{
		if(n>1 && n<=TotalPages){
			setN(+n-1)
		}
	}

	const Next = () =>{
		if(n>0 && n<TotalPages){
			setN(()=>+n+1)
		}
	}


  return (
    <>
      <Head>
        <title>Users : Simandhar Education</title>
      </Head>
      <SideTab />
	
		<section className="section fixedPadd cardelementSec">
				<div className="container">
					<h2 className='heading03'>Simandhar Users</h2>
					<form action="" method='POST' className='' onSubmit={ edit ? editData : AddMetaTags}>
						{/* <div className='two-col mt-4'> */}
						<div className="inputFileds bb wdt-full mt-4">
								<label htmlFor="" className='title01'>Page Name</label>
								<input className='wdt-full bordernone title01' name='pageName' type="text"  onChange={handleChangeInput} value={data?.pageName}  />
						</div>
						<div className="inputFileds bb wdt-full mt-4">
								<label htmlFor="" className='title01'>Title</label>
								<input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' name='title' onChange={handleChangeInput} type="text" value={data?.title} />
						</div>
						<div className="inputFileds bb wdt-full mt-4">
								<label htmlFor="" className='title01'>Description</label>
								<input className='wdt-full bordernone title01' name='description' type="text" value={data?.description} onChange={handleChangeInput}  />
						</div>
                           
                        <div className="inputFileds bb wdt-full mt-4">
								<label htmlFor="" className='title01'>keywords</label>
								<input className='wdt-full bordernone title01' name='keywords' type="test"  onChange={handleChangeInput} value={data?.keywords} />
						</div>						
                        
                            
                            {/* <div className="inputFileds bb wdt-full mt-4">
								<label htmlFor="" className='title01'>Page Id</label>
								<input className='wdt-full bordernone title01' name='pageId' type="text"  onChange={handleChangeInput} value={data?.pageId} />
							</div>                            */}
                           
						
                        
						<div className="two-col">
							<div className="two-col">
								<div className="addwrap">
								 {
									 edit ? <input type="submit" className='btn maroon-border-btn mt-4 text-center' value="Edit" onClick={editData} /> : <input type="submit" className='btn maroon-border-btn mt-4 text-center' value="Add" onClick={AddMetaTags} />
								} 
								</div>
							</div>
						</div>
					{/* </div> */}

					</form>

				</div>
			</section>
		
	  




      
			<section className="section fixedPadd testimonial-cms-section">
			{
				TotalPages > 1
				&&
				<div className="input_field w-50" style={{display : 'flex',justifyContent : "center",alignItems : "center",gap : "10px" , margin : "20px auto"}}>
				<button className="btn maroon-border-btn prev-btn" onClick={Prev}>
                Prev
              </button>
                <select
                  name="state"
                  value={n}
                  onChange={SwitchPage}
                  required
				  style={{width : "100px" , padding : "7px" , textAlign : "center" , fontSize : "15px" , border : "1px solid #760B28"}}
                >
                  {
                    TotalPages>1 && new Array(TotalPages)?.fill(0)?.map((data,ind)=>{
                      return(
                        <option value={ind+1}>{ind+1}</option>
                      )
                    })
                  }
                </select>
				<button className="btn maroon-border-btn prev-btn" onClick={Next}>
                Next
              </button>
            </div>
			}
				<br /><br />
				<div className="container">
					<button className='cms-btn edit-box add-btn' onClick={() => handleAddNew()}>Add New</button>
					<table cellPadding="0" cellSpacing="0" className='cms-table'>
						<thead>
							<tr>
								<th><p>Sr. No.</p></th>
								<th><p>Page Name</p></th>
								<th><p>Title</p></th>                                
								<th><p>keywords</p></th>                                
								<th style={{ width: "100px" }}><p>Action</p></th>
							</tr>
						</thead>
						<tbody>
							{
								DefaultData && DefaultData.map((data, ind) => {
                                    let {title,keywords,pageName,_id} = data
									// let img;
									// if (profilePicture[0] === '/') {
									// 	img = `${S3_buckets}${data?.profilePicture}`
									// } else {
									// 	img = `${S3_buckets}/${data?.profilePicture}`
									// }
                                    let img = `${S3_buckets}/${data?.profilePicture}`
                                    // console.log(role[0].type)
									return (
										<tr key={ind}>
											<td><p>{ind + 1}.</p></td>
											{/* <td><p style={{height:"10rem",overflow:"hidden"}}><img src={img ? img : "No Profile"} alt="" /></p></td> */}
                                            
											<td><p>{pageName ? pageName : 'no page Name Available'}</p></td>
											<td><p>{title ? title : 'no Title Available'}</p></td>
											<td><p>{keywords ? keywords : 'no Keywords Available'}</p></td>
											<td>
												<button className='cms-btn edit-box' onClick={() => handleEdit(data, _id)}><BiEditAlt /></button>
												{/* <button className='cms-btn edit-box' onClick={() => deleteListData(_id)}><AiOutlineDelete /></button> */}
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
  );
};

export default courses;
