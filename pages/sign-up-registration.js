import React, { useEffect, useState } from 'react'
import AccountSideBar from '../components/SideNavBar'
import Head from 'next/head'
import Header from '../components/Header'
import { GrDocumentDownload } from 'react-icons/gr';
import Jobportalaside from '../components/Jobportalaside'

const signupregistration = () => {

    return (
        <>
            <Head>
                My Account
            </Head>
            <Header />
            <div className='relative'>
                <AccountSideBar />
                <section className='order-history profile sign-up-registration'>
                    <div className="container">
                        <h4 className="heading04">Order History</h4>
                        <div className='education-list coursepurchaselist'>
                            <table cellPadding="0" cellSpacing="0" className='jp-table em-table signtable'>
                                <thead>
                                    <tr>
                                        <th><p>Full Name</p></th>
                                        <th><p>Email</p></th>
                                        <th><p>Monile Number</p></th>
                                        <th><p>Male / Female</p></th>
                                        <th><p>Country</p></th>
                                        <th><p>State</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p>Yogesh More</p></td>
                                        <td><p>test@gmail.com</p></td>
                                        <td><p>1234567890</p></td>
                                        <td><p>Male</p></td>
                                        <td><p>India</p></td>
                                        <td><p>Maharashtra</p></td>
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

export default signupregistration