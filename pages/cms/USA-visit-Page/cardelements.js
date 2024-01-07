import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import SideTab from '../../../Dashboard/SideTab'
import { useState, useRef } from 'react'
import blank_image_For_banner_page from '../../../public/img/blank_image_For_banner_page.png'
import { useEffect } from 'react';
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai"
import axios from 'axios';
import AdminWithAuth from '../AdminAuthRoute';
import secureLocalStorage from 'react-secure-storage';
import { toast } from "react-hot-toast";
import { cmsConstats, urlConstants } from '../../../constants/urlConstants';

const cardelements = () => {
	let blinkOnAddOrEdit = useRef(null)
	let Token = secureLocalStorage.getItem('CMSTk');
	const { register, handleSubmit, formState: { errors }, reset } = useForm();

	const [edit, setedit] = useState(false);
	const [data, setData] = useState({
		path: {},
		heading: "",
		para: "",
		imageAlt: ""
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
		

	}



	const SubmitData = async (e) => {

		e.preventDefault();
		postData();
	}


	const postData = async () => {


		const result = await axios.post(urlConstants.addCardElements, data, {
			headers: {
				'Content-Type': 'multipart/form-data',
				 'Authorization': `JWT ${Token}`
			}
		})
		console.log("result", result);
		console.log(result.data)

		fetchData();

		setData({
			path: {},
			heading: "",
			para: "",
			imageAlt: ""
		});

	}



	let [DefaultData, setdefaultDeta] = useState([]);
	useEffect(() => {
		fetchData();
	}, [])


	const fetchData = async () => {
		let res = await fetch(urlConstants.getSripalData)
		let data = await res.json();
		setdefaultDeta([...data.sripalJain.boxes])
		console.log(data.sripalJain.boxes);
	}





	const handleEdit = (data, ind) => {
		blinkOnAddOrEdit.current?.focus()
		setedit(true)

		setData({
			id: ind,
			path: {},
			heading: data.heading,
			para: data.para,
			imageAlt: data.imageAlt
		});

		window.scrollTo(0, 0)
	}

	console.log(data);



	const editData = async (e) => {
		e.preventDefault();

		const result = await axios.post(cmsConstats.editCardElements, data, {
			headers: {
				'Content-Type': 'multipart/form-data',
				 'Authorization': `JWT ${Token}`
			}
		})
		console.log("result", result);
		console.log(result.data)

		setedit(false)

		setData({
			path: {},
			heading: "",
			para: "",
			imageAlt: ""
		});

		fetchData();

	}


	const handleAddNew = () => {
		blinkOnAddOrEdit.current?.focus()
		setedit(false)
		setData({
			path: {},
			heading: "",
			para: "",
			imageAlt: ""
		});
		window.scrollTo(0, 0)
	}



	const deleteListData = async (ind) => {


		if (confirm("Data Will Be Deleted Permanently.!")) {
			const result = await axios.post(cmsConstats.deleteCardElements, { id: ind }, {
				headers: {
					'Content-Type': 'multipart/form-data',
					 'Authorization': `JWT ${Token}`
				}
			})
			console.log("result", result);
			console.log(result.data)

			setedit(false)
			setData({
				path: {},
				heading: "",
				para: "",
				imageAlt: ""
			});
			fetchData();
		}

	}

	return (
		<>
			<Head>
				<title>Sripal Jain US Visit - Simandhar Education</title>
			</Head>
			<SideTab />
			<section className="section fixedPadd cardelementSec">
				<div className="container">
					<h2 className='heading03'>Sripal Jain USA visit Page</h2>
					<form action="" method='POST' className='' onSubmit={edit ? editData : SubmitData}>
						<div className='two-col mt-4'>
							<div className="inputFileds bb wdt-full">
								<label htmlFor="" className='title01'>Title</label>
								<input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' name='heading' type="text" onChange={(e) => handleInputChange(e)} value={data.heading} />
							</div>
							<div className="inputFileds bb wdt-full">
								<label htmlFor="" className='title01'>Description</label>
								<input className='wdt-full bordernone title01' name='para' type="text" onChange={(e) => handleInputChange(e)} value={data.para} />
							</div>
						</div>
						<div className='two-col mt-4'>
							<div className="inputFileds wdt-full bb" style={{ position: 'relative' }}>
								<label htmlFor="" className='title01'> Image rq (Website Version) :</label>
								<h6 className='dimension'>*Dimensions : 480 * 350 px | Format : .jpg, .png</h6>

								<div className="filedwrap two-col">
									<div className="imgBack">
										<p>{data.path.name ? data.path.name : ''}</p>
										<input type="file" style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e)} id={`img`} className='wdt-full bordernone title01 posiinput' name='path' />
									</div>
									<div className="one-col right">
										<div className="addwrap">
											<a className='btn maroon-border-btn text-center' onClick={() => clickUploadImage(`img`)}>Add Image</a>
										</div>
									</div>
								</div>
							</div>
							<div className=" wdt-full">
								<label htmlFor="" className='title01'>Image Alt text :</label>
								<input className='wdt-full inputFileds bordernone title01' name='imageAlt' type="text" value={data.imageAlt} onChange={(e) => handleInputChange(e)} />
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
			</section>




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
									if (data.path[0] === '/') {
										img = `https://simandhareducation-files.s3.ap-south-1.amazonaws.com${data.path}`
									} else {
										img = `https://simandhareducation-files.s3.ap-south-1.amazonaws.com/${data.path}`
									}
									return (
										<tr key={ind}>
											<td><p>{ind + 1}.</p></td>
											<td><p><img src={img} alt="" /></p></td>
											<td><p>{data.heading ? data.heading : 'no Alt Available'}</p></td>
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

export default AdminWithAuth(cardelements)