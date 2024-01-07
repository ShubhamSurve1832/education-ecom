import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import Head from 'next/head'
import dynamic from 'next/dynamic'
// import SideTab from '../../../Dashboard/SideTab'
const SideTab = dynamic(() => import('../../../Dashboard/SideTab'))
import { useForm } from 'react-hook-form';
import { memo } from 'react'
import blank_image_For_banner_page from '../../../public/img/blank_image_For_banner_page.png'
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import AdminWithAuth from '../AdminAuthRoute'
import secureLocalStorage from 'react-secure-storage';
import { urlConstants, cmsConstats, S3_buckets  } from '../../../constants/urlConstants'
import { toast } from "react-hot-toast";

const banner = () => {
    let blinkOnAddOrEdit = useRef()

	let Token = secureLocalStorage.getItem('CMSTk');
	const { register, handleSubmit, formState: { errors }, reset } = useForm();
	const [edit, setedit] = useState(false);
	const [data, setData] = useState(
		{
			desktopBanner: {},
			mobileBanner: {},
			name: '',
		})


	const clickUploadImage = (imgTagID) => {
		document.getElementById(imgTagID).click();
	}


	const handleInputChange = (e, i) => {
		const { name, value } = e.target;

		setData({
			...data,
			name: value
		})
	}


	const handleImageInputChange = (e, index) => {
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

// ADD SLIDER
	const postData = async () => {
		const result = await axios.post(cmsConstats.addMainHeaderSlider, data, {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': `JWT ${Token}`
			}
		})
		// console.log("result", result);
		// console.log(result.data)

		setedit(false)
		setData({ desktopBanner: {}, mobileBanner: {}, name: '' })
		fetchData();
	}



	let [DefaultData, setdefaultDeta] = useState([]);
	useEffect(() => {
		fetchData();
	}, [])


	const fetchData = async () => {
		let res = await fetch(urlConstants.indexData)
		let data = await res.json();
		// setdefaultDeta([data.partnerData.list])
		setdefaultDeta([...data.homeScreenBanners.banners])
		// console.log(data.homeScreenBanners.banners);
	}

	const handleEdit = (data, ind) => {
        blinkOnAddOrEdit.current?.focus()
		setedit(true)
		setData({
			desktopBanner: {},
			mobileBanner: {},
			name: data.name ? data.name : '',
			id: ind,
		});

		window.scrollTo(0, 0)
	}

	// console.log(data);


// EDIT SLIDER
	const editData = async (e) => {
		e.preventDefault();
		const result = await axios.post(cmsConstats.editMainHeaderSlider, data, {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': `JWT ${Token}`
			}
		})
		console.log("result", result);
		console.log(result.data)

		setedit(false)
		setData({
			desktopBanner: {},
			mobileBanner: {},
			name: '',
		})
		fetchData();

	}


	const handleAddNew = () => {
        blinkOnAddOrEdit.current?.focus()
		setedit(false)
		setData({
			desktopBanner: {},
			mobileBanner: {},
			name: '',
		});
		window.scrollTo(0, 0)
	}


// DELETE SLIDER
	const deleteListData = async (ind) => {
		if (confirm("Data Will Be Deleted Permanently.!")) {
			const result = await axios.post(cmsConstats.deleteMainHeaderSlider, { id: ind }, {
				headers: {
					'Content-Type': 'multipart/form-data',
					'Authorization': `JWT ${Token}`
				}
			})
			console.log("result", result);
			console.log(result.data)
			setedit(false)
			fetchData();
		}
	}


	return (
		<>
			<Head>
				<title>Banner - Simandhar Education</title>
			</Head>
			<SideTab />
			<section className="section fixedPadd">
				<div className="container">
					<h2 className='heading03'>Main Header Slider</h2>
					<form action="" method='POST' className='mt-4' onSubmit={edit ? editData : SubmitData}>
						<div className="two-col wdt-full bb" style={{ position: 'relative' }}>
							<div className="inputFileds filedwrapmb-4">
								<label htmlFor="" className='title01'>Image rq (Desktop Version) :</label>
								<h6 className='dimension'>*Dimensions : 1920 * 700 px | Format : .jpg, .png</h6>
								<div className="two-col">
									<div className="imgBack">
										<p>{data.desktopBanner.name}</p>
										<input type="file" accept='image/*' style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e)} id={`desktopBanner`} className='wdt-full bordernone title01 posiinput' name='desktopBanner' title='Please Select Image.!' />
									</div>
									<div className="one-col right">
										<div className="addwrap">
											<a className='btn maroon-border-btn text-center' onClick={(e) => clickUploadImage(`desktopBanner`)}>Add Image</a>
										</div>
									</div>
								</div>
							</div>

							

							<div className="inputFileds filedwrap">
								<label htmlFor="" className='title01'>Image rq (Mobile Version) :</label>
								<h6 className='dimension'>*Dimensions : 938 * 1406 px | Format : .jpg, .png</h6>
								<div className="two-col">
									<div className="imgBack">
										<p>{data.mobileBanner.name}</p>
										<input type="file" accept='image/*' style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e)} id={`mobileBanner`} className='wdt-full bordernone title01 posiinput' name='mobileBanner' title='Please Select Mobile Banner.!' />
									</div>
									<div className="one-col right">
										<div className="addwrap">
											<a className='btn maroon-border-btn  text-center' onClick={(e) => clickUploadImage(`mobileBanner`)}>Add Image</a>
										</div>
									</div>
								</div>
							</div>

						</div>
						<div className="two-col  mt-4">
						<div className="inputFileds wdt-full">
								<label htmlFor="" className='title01'>Image Alt text :</label>
								<input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01'  name='name' type="text" onChange={(e) => handleInputChange(e)} value={data.name} required title='please Provide Alt Text.!' />
							</div>
						</div>


						<div className="two-col">
							<div className="two-col">
								<div className="addwrap">
									{edit ? <input type="submit" value="Save" className='btn maroon-border-btn mt-4 text-center' /> : <input type="submit" value="Submit" className='btn maroon-border-btn mt-4 text-center' />}
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
								<th><p>Desktop Banner</p></th>
								<th><p>Mobile Banner</p></th>
								<th><p>Img Alt</p></th>
								<th style={{ width: "100px" }}><p>Action</p></th>
							</tr>
						</thead>
						<tbody>
							{
								DefaultData && DefaultData.map((data, ind) => {
									let desktopBanner = `${S3_buckets}${data.desktopBanner}`
									let mobileBanner = `${S3_buckets}${data.mobileBanner}`
									return (
										<tr key={ind}>
											<td><p>{ind + 1}.</p></td>
											<td><p><Image fill={true} sizes='100vw' src={desktopBanner} alt="" /></p></td>
											<td><p><Image fill={true} sizes='100vw' src={mobileBanner} alt="" /></p></td>
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

export default AdminWithAuth(banner)