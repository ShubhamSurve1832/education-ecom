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
import { S3_buckets, cmsConstats, urlConstants } from '../../constants/urlConstants';
import { AUTH_KEY_NAME, statusConstants } from '../../constants/statusCodes';
import { getCookie } from 'cookies-next';

const courses = () => {
	let Token = secureLocalStorage.getItem('CMSTk');

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
            let res = await axios.post(cmsConstats.getTransections, {page : n}, {
                headers: {
                "Content-Type": "application/json",                
                "Authorization": `JWT ${Token}`,
                },
              });
            //   console.log(res.data)
			  setTotalPages(Math.ceil(res?.data?.totalCount/10))

              if (res.status ===200){
                setdefaultDeta([...res.data.items]);
              }
        } catch(err){
           console.log(err)
        }
    };




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
	


	const downloadInvoice = async (e,invoiceFileLink) => {
		try {
			const headers = {
				Authorization: `JWT ${Token}`,
			}
			const object = {
				invoiceFileLink
			}
			const response = await axios.post(urlConstants.downloadInvoice, object, { headers: headers });

			if (response.status === statusConstants.ok) {
				window.open(response.data.url, '_blank');
			}
		} catch (error) {
			console.log("🚀 ~ file: orderHistory.js:42 ~ downloadInvoice ~ Error downloading invoice:", error)
		}
	}

  return (
    <>
      <Head>
        <title>Users : Simandhar Education</title>
      </Head>
      <SideTab />
	
			<section className="section fixedPadd testimonial-cms-section pt-8">
				
			
				<br /><br />
				<div className="container">
					{/* <button className='cms-btn edit-box add-btn' onClick={() => handleAddNew()}>Add New</button> */}
					<table cellPadding="0" cellSpacing="0" className='cms-table'>
						<thead>
							<tr>
								<th><p>Sr. No.</p></th>
								<th><p>Full Name</p></th>
								<th>
									<div className='price-grid'>
										<p>Billing Date</p>
										<p>Course</p>
										<p>Price</p>
									</div>
								</th>
                                {/* <th><p>Billing Date</p></th>
								<th><p>Course</p></th>
								<th><p>Price</p></th> */}
                                <th><p>Billing Address</p></th>
                                <th><p>Status</p></th>
                                <th><p>Invoice</p></th>
								
							</tr>
						</thead>
						<tbody>
							{
								DefaultData && DefaultData.map((data, ind) => {
									let {fullName,billingAddress,status,cart,TcFileLink,invoiceFileLink,orderDate} = data
									var orderdate = new Date(orderDate).toLocaleDateString()
									
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
											<td><p>{fullName ? fullName : 'no Alt Available'}</p></td>

											<td>
												{
													cart.courses?.map((data,ind)=>{
														       
														let{title,price,paymentDate} = data; 

													return(
															<div className='box'>
																<p>{orderdate}</p>
																<ol>
																	<li><p> {title}</p> </li>
																	</ol>
																	<p>{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'INR' }).format(price?.totalPrice)}</p>	
															</div>

															)

														})
														}
																							
													</td>
												{/* {
                                                cart.courses?.map((data,ind)=>{
                                                     // console.log(data)         
                                                    let{title,price,paymentDate} = data; 
                                                 return(
                                                    <>
													<td><p>{new Date(paymentDate).toLocaleDateString()}</p></td>
													<td>
														<ol>
														<li><p> {title}</p> </li>
														</ol>
													</td>
													<td><p>{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'INR' }).format(price?.totalPrice)}</p></td>	
                                                    </>

                                                    )

                                                })
                                                } */}
																						
                                            <td><p>{billingAddress?.address +' , '+ billingAddress?.state +' , '+ billingAddress?.zipCode +' , '+ billingAddress?.country}</p></td>
                                            <td><p>{status}</p></td>
											<td>
											{TcFileLink ? (
															<a className='pointer' onClick={(e) => downloadInvoice(e,TcFileLink)}>
																<Image loading='lazy' src="/img/dowmload.webp" fill={true} sizes='100vw' className="resp-img" alt="Download Invoice" />
															</a>
														) : ("")}
													</td>
                                            
											
										</tr>
									)
								})
							}
						</tbody>
					</table>
				</div>

				{
				TotalPages > 1
				&&
				<div className="input_field w-50" style={{display : 'flex',justifyContent : "center",alignItems : "center",gap : "10px" , margin : "20px auto"}}>
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
			</section>
			
    </>
  );
};

export default AdminWithAuth(courses);
