import React, { useEffect, useState } from 'react'
import AccountSideBar from '../components/SideNavBar'
import Head from 'next/head'
import Header from '../components/Header'
import axios from 'axios'
import { urlConstants } from '../constants/urlConstants'
import { AUTH_KEY_NAME, statusConstants } from '../constants/statusCodes'
import { getCookie } from 'cookies-next'
import { formatAmount } from '../utils'
import { formatTimestamp } from '../utils'
import Image from 'next/image'
import Spinner from '../components/comman/Spinner'

const orderHistory = () => {

	const [orderHistory, setOrderHistory] = useState([]);
	const [loading, setLoading] = useState(false);
	


	const getOrderHistory = async () => {
		try {
			setLoading(true);
			const headers = {
				Authorization: `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`,
			}
			const response = await axios.get(urlConstants.getOrderHistory, { headers: headers })

			if (response.status === statusConstants.ok) {
				const processedData = response?.data?.filter(item => item.status === 'PAYMENT PROCESSED' || item.status === 'ORDER CREATED')
				setOrderHistory(processedData)
			}
		} catch (error) {
			setLoading(false);
			console.log("🚀 ~ file: orderHistory.js:28 ~ downloadInvoice ~ Error getting order history:", error)
		} finally {
			setLoading(false);
		}
	}
	const downloadInvoice = async (e, invoiceFileLink) => {
		try {
			const headers = {
				Authorization: `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`,
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

	useEffect(() => {
		getOrderHistory()
	}, [])
	return (
		<>
			<Head>
			<title>Order History - Simandhar Education</title>
			 {/* <!-- Google tag (gtag.js) --> */}
			 {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-826080113"></script>
        <script     type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'AW-826080113');`}}
        /> */}
			</Head>
			<div className='my-account-header'>
                <Header />
            </div>
			<div className='relative'>
				<AccountSideBar />
				<section className='order-history profile NewOneProfile'>
					<div className="container">
						<h4 className="heading04">Order History</h4>

						{
							loading ? (<Spinner />) : (
								<div className="order-table custom-scrollbar">
									<table cellPadding="0" cellSpacing="0">
										<thead>
											<tr>
												<th>Date</th>
												<th>Order ID</th>
												<th>Particulars</th>
												<th>Price</th>
												{/* <th>
													<div className='th-order-info'>
														<span className='or-course-name'>particulars</span>
														<span className='or-course-price'>Price</span>
													</div>
												</th> */}
												<th>Payment type</th>
												<th>Status</th>
												<th>Invoice</th>
											</tr>
										</thead>
										<tbody>
											{orderHistory.map((item) => (
												<tr key={item._id}>
													<td>{formatTimestamp(item.orderDate)}</td>
													<td>{item.razorpayOrderId}</td>
													<td>
														<span className='or-course-name'>{item.cart.courses.map((course,ind) => {
															return (<p>{ind + 1	}. {course.title}</p>)})}
														</span>
													</td>
													<td>
														<span className='or-course-price' style={{listStyle:'none'}}>{item.cart.courses.map((course,ind) => {
																return (<p>{formatAmount(course.price?.totalPrice)}</p>)})}
														</span>
													</td>
													{/* <td>
														<div className='order-info'>
															<span className='or-course-name'>{item.cart.courses.map((course) => {
																return (<li>{course.title}</li>)
															})}</span>
															<span className='or-course-price'>{item.cart.courses.map((course) => {
																return (<li>{formatAmount(course.price?.totalPrice)}</li>)
															})}</span>
														</div>
													</td> */}
													<td>{item.paymentdetails?.method.toUpperCase()}</td>
													<td>{item.status}</td>
													<td>
														{item.invoiceFileLink ? (
															<i className='pointer' onClick={(e) => downloadInvoice(e, item.invoiceFileLink)}>
																<Image loading='lazy' src="/img/dowmload.webp" fill={true} sizes='100vw' className="resp-img" alt="Download Invoice" />
															</i>
														) : ("")}
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)
						}


					</div>
				</section>
			</div>
		</>
	)
}

export default orderHistory