import React, { useEffect,useState } from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
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
        <title>Upcoming Webinars and Masterclasses - Simandhar Education</title>
        <meta content='Numerous webinar sessions have helped our clients know the intricacies and nuances of the domains they plan on joining after finishing their course with us' name='description'></meta>
        <link rel="canonical" href="https://simandhareducation.com/webinars" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>


      </Head>
      <Header />
      {
        webinarData.length > 0 ? <div>
     <WebinarCard  webinarData={webinarData}/> 
       {/* Noor: I have updated the new table for upcoming webinar and batch */}
      
       {/* <section className='mixed-gradient-new'>
            <div className='two-box-grid'>
                <div className='left-box '>
                 <a href='https://us02web.zoom.us/webinar/register/3916964250264/WN_XyaJtiE-R1KxcYIrKKkmjg' target='new' > <img height="auto" width="100%" src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CMA-Webinar_860x573-pixel.jpg"/></a>
                </div>
                <div className='right-box '>
                <a href='https://us02web.zoom.us/webinar/register/8316992645966/WN_GWRzaKUiR-yXzz6kzuV77w' target='new' >
                <img  height="auto" width="100%"  src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Unlocking-CPA-2024-Changes_860x573+(1).jpg"/> </a>
                 
                </div>
            </div>
        </section><br/><br/><br/> */}
        <div className='container'>
    <h3 className="heading03">Upcoming Masterclasses</h3><br/>
        <table cellPadding="0" cellSpacing="0" className='cms-table'>
            <thead>
                <tr>
                    <th><p>Course Name</p></th>
                    <th><p>Masterclass Name</p></th>
                    <th><p>Date</p></th>
                    <th><p>Time</p></th>
                    {/* <th><p>Zoom link</p></th> */}
                </tr>
            </thead>
            <tbody>
     
           

           
              <tr>
                <td>CPA</td>
                <td>CPA Masterclass</td>
                <td>07 January 2024</td>
                <td>06:30 PM</td>
                {/* <td style={{textDecoration: "underline"}}><a href="https://us02web.zoom.us/webinar/register/1616992711362/WN_6E3W5iiHRiK1fNy6k8qJDg" target="new">Click to Join</a></td> */}
                
              </tr>


              <tr>
                <td>CMA</td>
                <td>CMA Masterclass</td>
                <td>20 January 2024</td>
                <td>06:30 PM</td>
              </tr>

              <tr>
                <td>EA</td>
                <td>EA Masterclass</td>
                <td>21 January 2024</td>
                <td>06:30 PM</td>
              </tr>

              <tr>
                <td>CIA</td>
                <td>CIA Masterclass</td>
                <td>27 January 2024</td>
                <td>06:30 PM</td>
              </tr>


              </tbody>
        </table> <br/><br/><br/>

        <h3 className="heading03">Upcoming Batches</h3><br/>
        <table cellPadding="0" cellSpacing="0" className='cms-table'>
            <thead>
                <tr>
                    <th><p>Course Name</p></th>
                    <th><p>Session Type</p></th>
                    <th><p>Date</p></th>
                    <th><p>Time</p></th>
                    <th><p>Zoom link</p></th>
                </tr>
            </thead>
            <tbody>

            <tr>
                <td>EA Part 1</td>
                <td>Orientation session </td>
                <td> 07 January 2024</td>
                <td>11:00 AM</td>
                <td style={{textDecoration: "underline"}}><a href="https://us02web.zoom.us/meeting/register/tZAod-mrpz0uHNWPoSzF76WZiqDJz2Rz0syv#/registration" target="new">Click to Join</a></td>
            </tr>
         
            <tr>
                <td>CPA - AUD</td>
                <td>Orientation session - AUD</td>
                <td>13 January 2024</td>
                <td>04:00 PM</td>
                <td style={{textDecoration: "underline"}}><a href="https://us02web.zoom.us/meeting/register/tZYlfu6rqz4oGtKEfvvvQmtfgv5N7hSV7LwP#/registration" target="new">Click to Join</a></td>
              </tr>

              <tr>
                <td> CPA - REG</td>
                <td>Orientation session - REG</td>
                <td>14 January 2024</td>
                <td>11:00 AM</td>
                <td style={{textDecoration: "underline"}}><a href="https://us02web.zoom.us/meeting/register/tZEpdO2upz4tHNGG9ONPExGaMHImrqsCzOAy#/registration" target="new">Click to Join</a></td>
              </tr>

              <tr>
                <td>CMA Part 2</td>
                <td>Orientation session</td>
                <td>20 January 2024</td>
                <td>04:00 PM</td>
                <td style={{textDecoration: "underline"}}><a href="https://us02web.zoom.us/meeting/register/tZUvf--gqT0iGNG5vofiKBMdXUVlrJ-SSkFw#/registration" target="new">Click to Join</a></td>
            </tr>


              <tr>
                <td>CPA - BAR</td>
                <td>Orientation session - BAR</td>
                <td>28 January 2024</td>
                <td>04:00 PM</td>
                <td style={{textDecoration: "underline"}}><a href="https://us02web.zoom.us/meeting/register/tZYsfuitrj0jHNRKB49jtGfIfTyJxxaOw8tW#/registration" target="new">Click to Join</a></td>
              </tr>
            
            </tbody>
        </table> <br/>
</div>
{/* End */}
     </div>
     :
      <section className="thankyou-section">
        <div className="container">
          <div className="image">
            <Image
              src={"/img/webinar-icon.png"}
             fill={true} sizes='100vw'
              className="resp-img "
              alt=""
            />
          </div>
          <h2 className="heading03 mt-4">Stay Tuned for Upcoming Webinars!</h2>
          <p className="para1 mt-4"> No new webinars have been announced at this time. </p>
          <p className="para1">This page will be updated once the next webinar schedule is declared.</p>
          <div className="line">

           </div>
           <p className="contact-us">Would you like to connect already? <Link href="/contact-simandhar" className="">Contact us</Link></p>
           <Link href="/"><p className="btn maroon-btn maroon-arrow-btn">Back to Homepage</p></Link>
         </div>
       </section>

      
     } 
      <Footer />
    </>
  )}

export default webinars