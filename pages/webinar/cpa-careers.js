import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/footer'
import WebinarCard from '../../components/WebinarCard'

const cpaWebinar = () => {
    return (
        <>
            <Head>
                <title>webinars</title>
            </Head>
            <Header />


            {/* <WebinarCard /> */}

            <Footer />
        </>
    )
}

export default cpaWebinar