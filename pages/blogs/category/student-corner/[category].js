import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import BlogCardOne from '../../../../CPA/BlogCardOne'
import Head from 'next/head'
import Header from '../../../../components/Header'
import Footer from "../../../../components/footer"
import BlogNav from '../../blogNav'
import AsideBox from '../../../../components/AsideBox'
import { urlConstants } from '../../../../constants/urlConstants';
import Link from 'next/link';
import secureLocalStorage from 'react-secure-storage';
import Spinner from '../../../../components/comman/Spinner';
function page() {

    // Spinner
    const [show, setShow] = useState(false);

  let router = useRouter();

  let Token = secureLocalStorage.getItem('TK');


  const [category, setCategory] = useState("");

  useEffect(() => {
    if (router.isReady) {
      fetchData();
    };

  }, [router.query.category, router.isReady])


  const [categoryData, setCategoryData] = useState([])
  const fetchData = async () => {
    try {
      let res = await axios.post( "https://devapi.simandhareducation.com/posts/getBlogs", { "category": router.query.category.includes('-') ? router.query.category.split('-').join(' ').toUpperCase() : router.query.category }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${Token}`
        }
      })
      setCategoryData([...res.data])
      setShow(true);
    } catch (err) {
      console.log(err);
    }
    // alert(router.query.category)
  }
  // console.log('obj---', categoryData);


  return (
    <>
      <div className='blog-header'>
        <Header />
        <BlogNav />
      </div>
      <div className='blog-detail-wapper'>
        <div className='blog-banner'>
          <h2 className="heading02">{categoryData.length > 0 && categoryData[0].category}</h2>
        </div>
        <section className="student-corner-section">

          <div className="container-l">
            <div className="grid">
              <div className="student-corner-row">
                <div className="student-corner-left-row">
                  { show ?
                    <>
                  {
                    categoryData.map((data, ind) => {
                      let { category, content, createdAt, image, shortDescription, status, title, updatedAt, _id } = data;
                      let date = new Date(createdAt).toString();
                      let img;
                      if (image[0] !== '/') {
                        img = urlConstants.S3_buckets + `/${image}`;
                      } else {
                        img = urlConstants.S3_buckets + image
                      }
                      return (
                        <div className='student-corner-left-box' key={ind}>
                          <h6 className="heading06"><a href=""><span>{category}</span> || </a><span>{date.split(' ').slice(0, 4).join(' ')}</span></h6>
                          <h3 className="heading03">{title}</h3>
                          <p>{data.shortDescription}</p>
                          <Link href={`/blogs/${title && title[title.length - 1] == '?' ? title.split(' ').join('-').toLowerCase().slice(0, title.length - 1) : title.split('|').join(' ').split('?').join(' ').split('.').join('').split(' ').join('-').toLowerCase()}`}>Read More</Link>
                          <div className="student-img">
                            <img loading='lazy' src={img} fill={true} sizes='100vw' className='resp-img' alt='' />
                          </div>
                        </div>
                      )
                    })
                  }
                    </> :
                    <Spinner />
                  }
                </div>
              </div>
              <AsideBox />
            </div>
          </div>
        </section >
      </div>
      <Footer />
    </>
  )
}

export default page