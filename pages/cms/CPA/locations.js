import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import SideTab from '../../../Dashboard/SideTab'
import { useState, useRef } from 'react'
import { useEffect } from 'react';
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai"
import axios from 'axios';
import AdminWithAuth from '../AdminAuthRoute';
import secureLocalStorage from 'react-secure-storage';
import { cmsConstats, urlConstants } from '../../../constants/urlConstants';
const locations = () => {
	let blinkOnAddOrEdit = useRef(null)
	let Token = secureLocalStorage.getItem('CMSTk');
	const { register, handleSubmit, formState: { errors }, reset } = useForm();

	const [edit, setedit] = useState(false);
	const [data, setData] = useState({
		name: "",
		list:""
	})




	const handleInputChange = (e) => {
		// const {name,value} = e.target;

		setData({
			...data,
			[e.target.name]: e.target.value
		})
	}



	const SubmitData = async (e) => {

		e.preventDefault();
		postData();
	}


	const postData = async () => {


		const result = await axios.post(cmsConstats.addCPAPrometric, data, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `JWT ${Token}`
			}
		})
		console.log("result", result);
		console.log(result.data)

		fetchData();

		setData({
			name: "",
			list:""
		});

	}



	let [DefaultData, setdefaultDeta] = useState([]);
	useEffect(() => {
		fetchData();
	}, [])


	const fetchData = async () => {
		let res = await fetch(urlConstants.contentSection)
		let data = await res.json();
		setdefaultDeta([...data.prometric.lists])
		console.log(data.prometric.lists);
	}





	const handleEdit = (data, ind) => {
		blinkOnAddOrEdit.current?.focus()
		setedit(true)

		setData({
			id: ind,
			name: data.name ? data.name : data.list,
		});

		window.scrollTo(0, 0)
	}

	console.log(data);



	const editData = async (e) => {
		e.preventDefault();

		const result = await axios.post(cmsConstats.editCPAPrometric, data, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `JWT ${Token}`
			}
		})
		console.log("result", result);
		console.log(result.data)

		setedit(false)

		setData({
			name: "",
			list: "",
		});

		fetchData();

	}


	const handleAddNew = () => {
		blinkOnAddOrEdit.current?.focus()
		setedit(false)
		setData({
			name: "",
			list:""
		});
		window.scrollTo(0, 0)
	}



	const deletenameData = async (ind) => {

		if (confirm("Data Will Be Deleted Permanently.!")) {
			const result = await axios.post(cmsConstats.deleteCPAPrometric, { id: ind }, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `JWT ${Token}`
				}
			})
			console.log("result", result);
			console.log(result.data)

			setedit(false)
			setData({
				name: "",
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
					<h2 className='heading03'>CPA Prometric Locations/Centres in India</h2>
					<form action="" method='POST' className='mt-4'>


						<div>
							<div>
								<div>
									<div className="inputFileds bb wdt-full">
										<label htmlFor="" className='title01'>"Add more prometric locations (Bullets)</label>
										<input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' name='name' type="text" value={data.name ? data.name : data.list} onChange={(e) => handleInputChange(e)} />
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

					</form >



				</div>
			</section >







			<section className="section fixedPadd testimonial-cms-section">
				<div className="container">
					<button className='cms-btn edit-box add-btn' onClick={() => handleAddNew()}>Add New</button>
					<table cellPadding="0" cellSpacing="0" className='cms-table'>
						<thead>
							<tr>
								<th><p>Sr. No.</p></th>
								<th><p>Bullets</p></th>
								<th style={{ width: "100px" }}><p>Action</p></th>
							</tr>
						</thead>
						<tbody>
							{
								DefaultData && DefaultData.map((data, ind) => {
									return (
										<tr key={ind}>
											<td><p>{ind + 1}.</p></td>
											<td><p>{data.name ? data.name : data.list ? data.list : 'Not Available'}</p></td>
											<td>
												<button className='cms-btn edit-box' onClick={() => handleEdit(data, data.id)}><BiEditAlt /></button>
												<button className='cms-btn edit-box' onClick={() => deletenameData(data.id)}><AiOutlineDelete /></button>
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

export default AdminWithAuth(locations)








