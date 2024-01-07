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
import { toast, setToast } from "react-hot-toast";
import { S3_buckets, cmsConstats } from '../../constants/urlConstants';
import { CSVLink } from "react-csv"

const courses = () => {
  let blinkOnAddOrEdit = useRef(null)
	let Token = secureLocalStorage.getItem('CMSTk');
	const { register, handleSubmit, formState: { errors }, reset } = useForm();

	const [edit, setedit] = useState(false);

	//basic data structure
	const [data, setData] = useState({
		id : "",
		dob :"",
		status : "",
		fullName : "",
		mobileNumber : "",
		socialMediaProfile : {
			"fbProfile": "",
			"linkedinProfile": "",
			"twitterProfile": "",
			"userWebsite": ""
		},
	})
	
	

	//work experience structure
	let [workExperience,setworkExperience] = useState([
			{
				"companyName": "",
				"industry": "",
				"startYear": "",
				"endYear": "",
				"functionalArea": ""
			}
	])



	//set value on change of work Experience 
	const handleWorkExperience = (e,ind) =>{
		let {name,value} = e.target;

		let work = [...workExperience];
		work[ind][name] = value;
		setworkExperience(work)
	}



	//add rows of work Experience 
	const handleAddMoreExperience = ()=>{
		setworkExperience([
			...workExperience,
			{
				"companyName": "",
				"industry": "",
				"startYear": "",
				"endYear": "",
				"functionalArea": ""
			}
		])
	}



	//remove rows of work Experience 
	const handleRemoveRowExperince = (id) =>{
		setworkExperience(()=>{
			return workExperience.filter((data,ind)=>{
				return ind!==id
			})
		})
	}



	//set input change of basic values like name , mobile etc
	const handleChangeInput = (e) =>{
		let {name,value} = e.target;

		setData({
			...data,
			[name] : value
		})
	} 


	//set social media object value on change
    const handleInputChangeforSocialMedia = (e) =>{
		let {name,value} = e.target;

		setData({
			...data,
			socialMediaProfile : {
				...data?.socialMediaProfile,
				[name] : value
			}
		})
	}



	let [TotalPages,setTotalPages] = useState(1);
	let[range,setRange] = useState(10)
	let [n,setN] = useState(1);
	let[searchval,setsearchVal] = useState()

	const handleChange = (e) => {
		setsearchVal(e.target.value);
	};
	//default data on first load the site
	let [DefaultData, setdefaultDeta] = useState([]);
	useEffect(() => {
		fetchData();
	}, [n,searchval,range])



	let[datas,setDatas] = useState()
	let [totalCount,setTotalCount] = useState(10);
	
	//load data
    const fetchData = async () => {
        
        try{
            let res = await axios.post(cmsConstats.getUserList, {page : n,search:searchval,pageSize: +range,sortOrder:-1},  {
                headers: {
                "Content-Type": "application/json",                
                "Authorization": `JWT ${Token}`,
                },
              });

              if (res.status ===200){
                setdefaultDeta([...res.data.items.reverse()]);
				setTotalPages(Math.ceil(res?.data?.totalCount/range))
				setTotalCount(Math.ceil(res?.data?.totalCount))
				// console.log(Math.ceil(res?.data?.totalCount/range));
				setDatas(res.data)
              }
        } catch(err){
console.log(err)
        }
    };


	// console.log(typeof range);


// console.log(DefaultData)

	//set edit data on form on click of handle edit btn
	const handleEdit = (data, ind) => {
		blinkOnAddOrEdit.current?.focus()
		setedit(true)

		let {_id,dob,status,fullName,mobileNumber,socialMediaProfile,workExperience} = data;
		setData({
			id : _id!=='undefined' ? _id : "",
			dob : data.dob ? dob : '',
			status :data.status ? status : true,
			fullName : fullName,
			mobileNumber : mobileNumber,
			socialMediaProfile : {...socialMediaProfile},		  
		});

		if(data?.workExperience){
			setworkExperience(()=>{
				return data?.workExperience.map((data,ind)=>{
					return data;
				})
			})
		}

		window.scrollTo(0, 0)
	}




	//edit data will be triggered on save
	const editData = async (e) => {
		e.preventDefault();

		let newData = {
			...data,
			workExperience : workExperience.map((data,ind)=>data)
		}

		const result = await axios.post(cmsConstats.editUser, newData, {
			headers: {
				'Content-Type': "application/json",
				 'Authorization': `JWT ${Token}`
			}
		})
		console.log("result", result);
		// console.log(result.data)

		setedit(false)

		setData({
			id : "",
			dob :"",
			status : "",
			fullName : "",
			mobileNumber : "",
			socialMediaProfile : {},
			workExperience : {}	
		});

		fetchData();

	}







	
	const SwitchPage = (e) =>{
		setN(parseInt(e.target.value))
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

	// const handleAddNew = (()=>{
	// 	console.log("Excel Sheet" ,datas)
	// 	if (datas) {
	// 		const url = window.URL.createObjectURL(new Blob([...datas.items]));
	// 		const link = document.createElement('a');
	// 		link.href = url;
	// 		link.setAttribute('download', `Users.csv`);
	// 		document.body.appendChild(link);
	// 		link.click();
	// 		// toast({type: 'success', 'message': 'Csv downloaded successfully' });
	// 	  }
	// })


//  DOWNLOAD CSV FILE OF ALL USERS
	let headers = [
		{ label: "First Name", key: "fullName" },
		{ label: "Email", key: "email" },
		{ label: "Mobile Number", key: "mobileNumber" },
		{ label: "User Id", key: "userId" },
		{ label: "Last Modified", key: "lastModified" }
	  ]
	
		
  return (
    <>
      <Head>
        <title>Users : Simandhar Education</title>
      </Head>
      <SideTab />
	
      {
		edit 
		&&
		<section className="section fixedPadd cardelementSec">
				<div className="container">
					<h2 className='heading03'>Simandhar Users</h2>
					<form action="" method='POST' className='' onSubmit={ editData }>
						{/* <div className='two-col mt-4'> */}
							<div className="inputFileds bb wdt-full">
								<label htmlFor="" className='title01'>full Name</label>
								<input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' name='fullName' onChange={handleChangeInput} type="text" value={data?.fullName} />
							</div>
							<div className="inputFileds bb wdt-full">
								<label htmlFor="" className='title01'>Date of Birth</label>
								<input className='wdt-full bordernone title01' name='dob' type="date" value={data?.dob} onChange={handleChangeInput}  />
							</div>
                            <div className="inputFileds bb wdt-full mt-4">
                            <div className="inputFileds bb wdt-full mt-4">
								<label htmlFor="" className='title01'>Mobile Number</label>
								<input className='wdt-full bordernone title01' name='mobileNumber' type="number" inputMode='numeric' onChange={handleChangeInput} value={data?.mobileNumber} />
							</div>
							
                            <div className="inputFileds bb wdt-full mt-4">
								<label htmlFor="" className='title01'>Facebook Profile Link</label>
								<input className='wdt-full bordernone title01' name='fbProfile' type="text" onChange={handleInputChangeforSocialMedia} value={data?.socialMediaProfile?.fbProfile}  />
							</div>
                            <div className="inputFileds bb wdt-full mt-4">
								<label htmlFor="" className='title01'>Linkedin Profile Link</label>
								<input className='wdt-full bordernone title01' name='linkedinProfile' type="text"  onChange={handleInputChangeforSocialMedia} value={data?.socialMediaProfile?.linkedinProfile}  />
							</div>
                            <div className="inputFileds bb wdt-full mt-4">
								<label htmlFor="" className='title01'>Twitter Profile Link</label>
								<input className='wdt-full bordernone title01' name='twitterProfile' type="text"  onChange={handleInputChangeforSocialMedia} value={data?.socialMediaProfile?.twitterProfile} />
							</div>
                            <div className="inputFileds bb wdt-full mt-4">
								<label htmlFor="" className='title01'>Portfolio Website Link</label>
								<input className='wdt-full bordernone title01' name='userWebsite' type="text"  onChange={handleInputChangeforSocialMedia} value={data?.socialMediaProfile?.userWebsite}  />
							</div>
						</div>
                        <div className="flex space-between">
                        <h3 className='heading04 mt-4 '>Experiance</h3>
                        <a className='btn maroon-border-btn mt-4 text-center' onClick={handleAddMoreExperience}>+ Add More Experience</a>
                        </div>
                           
						{
							workExperience.map((data,ind)=>{
								return(
						<div className='two-col mt-4'>
									 <div className="inputFileds bb wdt-full">
										<label htmlFor="" className='title01'>{ind+1} {`)`} Company Name</label>
										<input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' onChange={(e)=>handleWorkExperience(e,ind)} value={data.companyName} name='companyName' type="text" />
							         </div>
									<div className="inputFileds bb wdt-full">
										<label htmlFor="" className='title01'>Industry</label>
										<input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' onChange={(e)=>handleWorkExperience(e,ind)} value={data.industry} name='industry' type="text" />
									</div>
									<div className="inputFileds bb wdt-full mt-4">
										<label htmlFor="" className='title01'>Start Year</label>
										<input className='wdt-full bordernone title01' name='startYear' onChange={(e)=>handleWorkExperience(e,ind)} value={data.startYear} type="date"  />
									</div>
									<div className="inputFileds bb wdt-full mt-4">
										<label htmlFor="" className='title01'>End Year</label>
										<input className='wdt-full bordernone title01' name='endYear' onChange={(e)=>handleWorkExperience(e,ind)} value={data.endYear} type="date"  />
									</div>
									<div className="inputFileds bb wdt-full mt-4">
										<label htmlFor="" className='title01'>Functional Area</label>
										<input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' onChange={(e)=>handleWorkExperience(e,ind)} value={data.functionalArea} name='functionalArea' type="text" />
									</div>
									{
										ind > 0
										&&
									<div className="remove-btn">
											<a className='btn maroon-border-btn mt-4 text-center float-right' onClick={() => handleRemoveRowExperince(ind)}>
											Remove
											</a>
									</div>
						   }<br/><br />
                        </div>
								)
							})
						}
                        
						<div className="two-col">
							<div className="two-col">
								<div className="addwrap">
								 <input type="submit" className='btn maroon-border-btn mt-4 text-center' value="Save" onClick={editData} /> 
								</div>
							</div>
						</div>
					{/* </div> */}

					</form>

				</div>
			</section>
		
	  }




      
			<section className="section fixedPadd testimonial-cms-section">			
				<div className="container">
				<div className="flex space-between align-center">			
				
				{
				TotalPages > 1
				&&
				<div className="input_field w-50" style={{display : 'flex',alignItems : "center",gap : "10px" , margin : "2rem"}}>
				{
            n === 1 ?	<button className="btn disabled-btn" disabled >
            Prev
          </button> : 	<button className="btn maroon-border-btn prev-btn" onClick={Prev}>
                Prev
              </button>
          }
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
				{
                     n === TotalPages?	<button className="btn disabled-btn" disabled >
                        Next
                    </button> : 	<button className="btn maroon-border-btn prev-btn" onClick={Next}>
                        Next
                     </button>
                }
            </div>
			}

			<select  style={{width : "100px" , padding : "7px" , textAlign : "center" , fontSize : "15px" , border : "1px solid #760B28"}} name="" id="" value={range} onChange={(e)=>setRange(e.target.value)}>
				<option value="10">10</option>
				<option value="50">50</option>
				<option value="100">100</option>
				<option value="500">500</option>			
			</select>

					{/* <button className='cms-btn edit-box add-btn' onClick={() => handleAddNew()}>Download Excel</button> */}
					<CSVLink className="downloadbtn cms-btn edit-box add-btn mb-0" filename="Simandhar-Users.csv" data={DefaultData} headers={headers}>  Export to CSV </CSVLink>
					
	  			</div>
					<table cellPadding="0" cellSpacing="0" className='cms-table'>
						<thead>
							<tr>
								<th><p>Sr. No.</p></th>
								<th><p>Image</p></th>
								<th><p>Name</p></th>
                                <th><p>Number</p></th>                                
                                <th><p>Email</p></th>                                
								<th style={{ width: "100px" }}><p>Action</p></th>
							</tr>
						</thead>
						<tbody>
							{
								DefaultData && DefaultData.map((data, ind) => {
                                    let {email, fullName,mobileNumber,profilePicture,role,_id} = data
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
											<td><p style={{height:"10rem",overflow:"hidden"}}><img src={img ? img : "No Profile"} alt="" /></p></td>
											<td><p>{data?.fullName ? data?.fullName : 'no Name Available'}</p></td>
											<td><p>{data?.email ? data?.email : 'no Email Available'}</p></td>
                                            <td><p>{mobileNumber}</p></td>                                                                                       
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
