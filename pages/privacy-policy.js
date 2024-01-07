import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/footer'
import Privacy from '../CPA/privacyContent'


import PrivacyContent from '../database/data/privacy.json'

const privacy = () => {
    return (
        <>
           <Head>
                <title>Privacy Policy - Simandhar Education</title>
            </Head>
            <Header />
            <Privacy PrivacyContent={PrivacyContent.privacyPage}/>
            <Footer />

        </>
    )
}

export default privacy