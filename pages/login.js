import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../CPA/loginContent'

const login = () => {
    return (
        <>
            <Head>
                <title>Login Page - Simandhar Education</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                {/* <meta name="robots" content="noindex, nofollow" /> */}
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
            <div className='width-50'>
                <Header />
            </div>
            <Login />
        </>
    )
}

export default login