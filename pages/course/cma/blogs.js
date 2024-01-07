import React from 'react'
import Head from 'next/head'
import Header from '../../../components/Header'
import Footer from "../../../components/footer";
import BlogCardOne from '../../../CPA/BlogCardOne'
import AsideBox from '../../../components/AsideBox'

import blogCardData from '../../../database/data/blogListing.json'

const blogs = () => {
    return (
        <>
            <Head>
                <title>CMA Blogs - Simandhar Education</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
            </Head>
            <div className="width-50">
                <Header showData1={true} />
            </div>
            <div>
                <section className="student-corner-section">
                    <div className="container-l">
                        <h2 className="heading02">Blogs</h2>
                        <div className="grid">
                            <div>
                                <BlogCardOne blogCardData={blogCardData.cmaBlogCard} />
                            </div>
                            <AsideBox />
                        </div>
                    </div>
                </section >
            </div >
            <Footer />
        </>
    )
}

export default blogs