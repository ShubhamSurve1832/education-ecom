import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from "../components/footer";
import BlogDetail from '../CPA/blogsDetail'


const blogsDetails = () => {
    return (
        <>
            <Head>
                <title>Blogs Details - Simandhar Education</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
            </Head>
            <Header />
            <BlogDetail />
            <Footer/>
        </>
    )
}

export default blogsDetails