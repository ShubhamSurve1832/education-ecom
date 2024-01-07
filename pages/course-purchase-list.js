import React, { useEffect, useState } from 'react'
import AccountSideBar from '../components/SideNavBar'
import Head from 'next/head'
import Header from '../components/Header'
import { GrDocumentDownload } from 'react-icons/gr';
import Jobportalaside from '../components/Jobportalaside'

const coursepurchaselist = () => {

    return (
        <>
            <Head>
                My Account
            </Head>
            <Header />
            <div className='relative'>
                <AccountSideBar />
                <section className='order-history profile'>
                    <div className="container">
                        <h4 className="heading04">Order History</h4>
                        <div className='education-list coursepurchaselist'>
                            <table cellPadding="0" cellSpacing="0" className='jp-table em-table'>
                                <thead>
                                    <tr>
                                        <th><p>Date</p></th>
                                        <th><p>Name</p></th>
                                        <th><p>Order Id</p></th>
                                        <th><p>Contact No. & Email ID</p></th>
                                        <th><p>Perticulars</p></th>
                                        <th><p>Price</p></th>
                                        <th><p>Payment Type</p></th>
                                        <th><p>Status</p></th>
                                        <th><p>Invoice</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p>14/07/2023</p></td>
                                        <td><p>Abc Customer</p></td>
                                        <td><p>5432156</p></td>
                                        <td><p>1234567890 <br /><div>test@gmailcomqwerty</div></p></td>
                                        <td><p>CMA</p></td>
                                        <td><p>1200 Rs.</p></td>
                                        <td><p>Wallet</p></td>
                                        <td><p>Success</p></td>
                                        <td><a className='btn maroon-btn cm-btn white'><GrDocumentDownload /></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>
                </section>
            </div>
        </>
    )
}

export default coursepurchaselist