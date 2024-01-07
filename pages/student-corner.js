import React from 'react'
import Head from 'next/head'
// import Header from '../components/Header'
// import Footer from "../components/footer";
import BlogCardOne from '../CPA/BlogCardOne'
// import BlogCardTwo from '../CPA/BlogCardTwo'
// import AsideBox from '../components/AsideBox'
// import blogCardData from '../database/data/blogListing.json'
import dynamic from "next/dynamic";
const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/footer'))

// const BlogCardOne = dynamic(() => import('../CPA/BlogCardTwo'))
const BlogCardTwo = dynamic(() => import('../CPA/BlogCardTwo'))
const AsideBox = dynamic(() => import('../components/AsideBox'))
const blogCardData = dynamic(() => import('../database/data/blogListing.json'))
const ifrs = () => {
    return (
        <>
            <Head>
                <title>Explore Simandhar Education's Student Corner: Resources, Tips, and Academic Support.</title>
                <meta content="Empowering students with resources, tips, and support. Excel in your studies and achieve your academic goals with Simandhar Education's Student Corner." name='description'></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta content='Student resources, Academic tips, Study support, Learning materials, Exam preparation, Time management, Study techniques, Academic success, Student guidance, Educational resources, CPA student point' name='keywords'></meta>
                <link rel="canonical" href="https://simandhareducation.com/student-corner" />
            </Head>
            <Header />
            <div>
                <section className="student-corner-section">
                    <div className="container-l">
                        <h1 className="heading02">Students Corner</h1>
                        <div className="grid">
                            <div>
                                <BlogCardOne blogCardData={blogCardData.studentCornBlogCard} />
                                {/* <BlogCardTwo blogCardData={blogCardData.studentCornBlogCard} /> */}
                            </div>
                            <AsideBox />
                        </div>
                    </div>
                </section >
            </div >
            <Footer/>
        </>
    )
}

export default ifrs