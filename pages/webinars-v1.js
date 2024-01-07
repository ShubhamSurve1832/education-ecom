import React, { useEffect,useState } from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
// import Row from 'next/row';
import dynamic from "next/dynamic";

const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/footer'))
const WebinarCard = dynamic(() => import('../components/WebinarCard'))
import webinarDatas from '../database/data/webinarData.json'
import axios from 'axios';
import { urlConstants } from '../constants/urlConstants';

// import Header from '../components/Header'
// import Footer from '../components/footer'
// import WebinarCard from '../components/WebinarCard'


const webinars = () => {

  let [webinarData,setWebinarData] = useState([])
  useEffect(()=>{
    fetchData()
  }, [])

  const fetchData = async()=>{
    try{
      let  response = await axios.get(urlConstants.getWebinarData)
      let data = response.data[0]?.webinar?.webinars
      setWebinarData(data)    
    }catch(error){console.log(error);}
  }
  console.log(webinarData)

  return (
    <>
      <Head>
        <title>Upcoming Webinars - Simandhar Education</title>
        <meta content='Numerous webinar sessions have helped our clients know the intricacies and nuances of the domains they plan on joining after finishing their course with us' name='description'></meta>
        <link rel="canonical" href="https://simandhareducation.com/webinars" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
       
      </Head>
      <Header />
        
    <section >
        <div class="container py-5">
          <div class="row ">

          <div class="col-md-8 col-lg-6 col-xl-4">
                <div class="card" >
                  <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light">
                    <img src="https://www.simandhareducation.com/_next/image?url=https%3A%2F%2Fsimandhareducation-files.s3.ap-south-1.amazonaws.com%2Fimg%2Fwebinars%2F1696324334662.jpeg&w=1920&q=75"
                     class="img-fluid"
                      alt="Laptop" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body pb-0">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p>Association of Chartered Certified Accountants (ACCA) </p>
                        <p><strong>Date: </strong> 7 October 2023</p>
                        <p><strong>Time: </strong> 5 PM </p>

                      </div>
                    
                    </div>
                  </div>
                  <hr class="my-0" />
                 <div class="card-body">
                      
                    <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                  
                      <button type="button" class="btn brand-button">Learn More</button>
                      <button type="button" class="btn brand-button2">Buy now</button>
                    </div>
                  </div>
                </div><br/>
              </div>

           
            <div class="col-md-8 col-lg-6 col-xl-4">
                <div class="card" >
                  <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light">
                    <img src="https://www.simandhareducation.com/_next/image?url=https%3A%2F%2Fsimandhareducation-files.s3.ap-south-1.amazonaws.com%2Fimg%2Fwebinars%2F1696424486711.jpeg&w=1920&q=75"
                     class="img-fluid"
                      alt="Laptop" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body pb-0">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p className='pb-5'>Certified Public Accountant (CPA) </p>
                        <p><strong>Date: </strong> 14 October 2023</p>
                        <p><strong>Time: </strong> 4 PM</p>
                      </div>
                    
                    </div>
                  </div>
                  <hr class="my-0" />
                 <div class="card-body">
                      
                    <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                  
                      <button type="button" class="btn brand-button">Learn More</button>
                      <button type="button" class="btn brand-button2">Buy now</button>
                    </div>
                  </div>
                </div><br/>
              </div>

              <div class="col-md-8 col-lg-6 col-xl-4">
                <div class="card" >
                  <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light">
                    <img src="https://www.simandhareducation.com/_next/image?url=https%3A%2F%2Fsimandhareducation-files.s3.ap-south-1.amazonaws.com%2Fimg%2Fwebinars%2F1696424561742.jpeg&w=1920&q=75"
                     class="img-fluid"
                      alt="Laptop" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body pb-0">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p className='pb-5'>Enrolled Agent(EA) </p>
                        <p><strong>Date: </strong> 15 October 2023</p>
                        <p><strong>Time: </strong> 4 PM</p>

                      </div>
                    
                    </div>
                  </div>
                  <hr class="my-0" />
                 <div class="card-body">
                      
                    <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                  
                      <button type="button" class="btn brand-button">Learn More</button>
                      <button type="button" class="btn brand-button2">Buy now</button>
                    </div>
                  </div>
                </div><br/>
              </div>

              
              <div class="col-md-8 col-lg-6 col-xl-4">
                <div class="card" >
                  <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light">
                    <img src="https://s3.ap-south-1.amazonaws.com/content.alphalearn.com/VjBKVWljMDFKTzQ9/anVpNTRuU3BIQmc9/thumbnail.jpg"
                     class="img-fluid"
                      alt="Laptop" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body pb-0">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p>Certified Management Accountant (CMA) </p>
                     
                       
                      </div>
                    
                    </div>
                  </div>
                  <hr class="my-0" />
                 <div class="card-body">
                      
                    <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                  
                      <button type="button" class="btn brand-button">Learn More</button>
                      <button type="button" class="btn brand-button2">Buy now</button>
                    </div>
                  </div>
                </div><br/>
              </div>


              <div class="col-md-8 col-lg-6 col-xl-4">
                <div class="card" >
                  <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light">
                    <img src="https://s3.ap-south-1.amazonaws.com/content.alphalearn.com/VjBKVWljMDFKTzQ9/SmhHTEVBTW1teU09/thumbnail.jpg"
                     class="img-fluid"
                      alt="Laptop" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body pb-0">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p>Certified Public Accountant (CPA) </p>

                      </div>
                    
                    </div>
                  </div>
                  <hr class="my-0" />
                 <div class="card-body">
                      
                    <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                  
                      <button type="button" class="btn brand-button">Learn More</button>
                      <button type="button" class="btn brand-button2">Buy now</button>
                    </div>
                  </div>
                </div><br/>
              </div>

              <div class="col-md-8 col-lg-6 col-xl-4">
                <div class="card" >
                  <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light">
                    <img src="https://s3.ap-south-1.amazonaws.com/content.alphalearn.com/VjBKVWljMDFKTzQ9/RHdVcVVDZUpsWFU9/thumbnail.png"
                     class="img-fluid"
                      alt="Laptop" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body pb-0">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p>Certified Public Accountant (CPA) </p>

                      </div>
                    
                    </div>
                  </div>
                  <hr class="my-0" />
                 <div class="card-body">
                      
                    <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                  
                      <button type="button" class="btn brand-button">Learn More</button>
                      <button type="button" class="btn brand-button2">Buy now</button>
                    </div>
                  </div>
                </div><br/>
              </div>

              <div class="col-md-8 col-lg-6 col-xl-4">
                <div class="card" >
                  <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light">
                    <img src="https://s3.ap-south-1.amazonaws.com/content.alphalearn.com/VjBKVWljMDFKTzQ9/UWtmVHFuS1hEUnM9/thumbnail.jpg"
                     class="img-fluid"
                      alt="Laptop" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body pb-0">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p>Certified Public Accountant (CPA) </p>

                      </div>
                    
                    </div>
                  </div>
                  <hr class="my-0" />
                 <div class="card-body">
                      
                    <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                  
                      <button type="button" class="btn brand-button">Learn More</button>
                      <button type="button" class="btn brand-button2">Buy now</button>
                    </div>
                  </div>
                </div><br/>
              </div>

              <div class="col-md-8 col-lg-6 col-xl-4">
                <div class="card" >
                  <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light">
                    <img src="https://www.simandhareducation.com/img/sspthumbnail.webp"
                     class="img-fluid"
                      alt="Laptop" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body pb-0">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p>Certified Public Accountant (CPA) </p>

                      </div>
                    
                    </div>
                  </div>
                  <hr class="my-0" />
                 <div class="card-body">
                      
                    <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                  
                      <button type="button" class="btn brand-button">Learn More</button>
                      <button type="button" class="btn brand-button2">Buy now</button>
                    </div>
                  </div>
                </div><br/>
              </div>

          </div>
        </div>
      </section>
   
      <Footer />
    </>
  )
}

export default webinars;