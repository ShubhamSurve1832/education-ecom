import React from 'react'
import Head from 'next/head'
import Header from '../../../components/Header'
import Footer from "../../../components/footer";


import BlogGridCard from '../../../CPA/BlogGridCard'
import BlogCardOne from '../../../CPA/BlogCardOne'
import AsideBox from '../../../components/AsideBox'
import blogCardData from '../../../database/data/blogListing.json'


const blogs = () => {
    return (
        <>
            <Head>
                <title>CPA Blogs - Simandhar Education</title>
                <meta content='Stay ahead in finance careers with insights on US CPA, CMA, EA exams. Expert tips, industry updates, and exam strategies for success. Plus, explore our Blogs on US CPA for in-depth knowledge!' name='description'></meta>
                <meta content='cpa , cpa blogs , cma blogs , ea blogs , simandhar education , us cpa , EA, accounting exams, finance careers, exam tips, industry updates, exam strategies, financial success, accounting profession' name='keywords'></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <link rel="canonical" href="https://simandhareducation.com/blogs/category/cpa" />
            </Head>
            <div className="width-50">
                <Header showData={true} />
            </div>
            <BlogGridCard blogCardData={blogCardData.blogCard} />
            <div>
                <section className="student-corner-section">
                    <div className="container-l">
                        <h2 className="heading02">Blogs</h2>
                        <div className="grid">
                            <BlogCardOne blogCardData={blogCardData.cpaBlogCard} />
                            <AsideBox />
                        </div>
                    </div>
                </section >
            </div >
<Footer/>
        </>
    )
}

export default blogs