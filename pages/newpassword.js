import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Newpassword from '../CPA/newPasswordContent'

const newpassword = () => {
    return (
        <>
            <Head>
                <title>Forgot Page - Simandhar Education</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
            </Head>
            <div className='width-50'>
                <Header />
            </div>
            <Newpassword />
        </>
    )
}

export default newpassword