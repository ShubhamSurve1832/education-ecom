import React from 'react'
import AccountSideBar from '../components/SideNavBar'
import Head from 'next/head'
import Header from '../components/Header'

const myAccount = () => {
    return (
        <>
            <Head>
                My Account
            </Head>
            <Header/>
            <AccountSideBar />
        </>
    )
}

export default myAccount