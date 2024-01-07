import React from 'react'
import Link from "next/link";
import Head from 'next/head'
import { IoCaretForward } from "react-icons/io5";
import BlogNav from "../pages/blogs/blogNav";
import dynamic from "next/dynamic";
const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/footer'))
import BlogGridCard from '../CPA/BlogGridCard'
import BlogCardOne from '../CPA/BlogCardOne'
import blogCardData from '../database/data/blogListing.json'
const AsideBox = dynamic(() => import('../components/AsideBox'))
// const BlogGridCard = dynamic(() => import('../CPA/BlogGridCard'))
// const BlogCardOne = dynamic(() => import('../CPA/BlogCardOne'))
// const blogCardData = dynamic(() => import('../database/data/blogListing.json'))


// import Header from '../components/Header'
// import Footer from "../components/footer"
// import AsideBox from '../components/AsideBox'
const blogs = () => {
    return (
        <>
            <Head>
                <title>Blogs - Simandhar Education</title>
                <meta content='Stay ahead in finance careers with insights on US CPA, CMA, EA exams. Expert tips, industry updates, and exam strategies for success. Plus, explore our Blogs on US CPA for in-depth knowledge!' name='description'></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta content='cpa , cpa blogs , cma blogs , ea blogs , simandhar education , us cpa , EA, accounting exams, finance careers, exam tips, industry updates, exam strategies, financial success, accounting profession' name='keywords'></meta>
                <link rel="canonical" href="https://simandhareducation.com/blogs" />
            </Head>
            <div className="width-50">
            <div className="blog-header">
            <Header />
            <BlogNav />
          </div>
            </div>
            <BlogGridCard blogCardData={blogCardData.blogCard} />
            <div>
                {/*<section className="student-corner-section">
                    <div className="container-l">*/}
                {/* <h2 className="heading02">Blogs</h2> */}
                <div className="grid">
                    <BlogCardOne blogCardData={blogCardData.allBlogCard} />
                    {/* <AsideBox /> */}
                </div>
                {/*</div>
                </section > */}
            </div >
            <Footer />
        </>
    )
}

export default blogs