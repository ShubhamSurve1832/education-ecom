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
        <title>Upcoming Webinars - Simandhar Education</title>
        <meta content='Numerous webinar sessions have helped our clients know the intricacies and nuances of the domains they plan on joining after finishing their course with us' name='description'></meta>
        <link rel="canonical" href="https://simandhareducation.com/webinars" />
      
      </Head>
      <Header />
      {/* {
        webinarData.length > 0 ? <div>
     <WebinarCard  webinarData={webinarData}/>  */}
     {/* Noor: I have updated the new table for upcoming webinar and batch */}

     <div className='container'>
     <h3 className="heading03">Upcoming Webinars</h3><br/>
        <table cellPadding="0" cellSpacing="0" className='cms-table'>
            <thead>
                <tr>
                    <th><p>Course Name</p></th>
                    <th><p>Webinar Name</p></th>
                    <th><p>Date</p></th>
                    <th><p>Time</p></th>
                    <th><p>Zoom link</p></th>
                </tr>
            </thead>
            <tbody>
           
              <tr>
                <td>CPA</td>
                <td>CPA webinar</td>
                <td>14 October</td>
                <td>05:00 PM</td>
                <td style={{textDecoration: "underline"}}><a href="https://us02web.zoom.us/webinar/register/1816941773762/WN_H6RzvoWBQJSTjqEMkvvS1w" target="new">Click to Join</a></td>
              </tr>
              <tr>
                <td>CMA</td>
                <td>Know everything about US CMA</td>
                <td>15 October</td>
                <td>05:00 PM </td>
                <td style={{textDecoration: "underline"}}><a href="https://us02web.zoom.us/webinar/register/3916964250264/WN_OExOmBIJTMiXc0wvYVWutQ" target="new">Click to Join</a></td>
              </tr>
              <tr>
                <td>EA</td>
                <td>The pathway to Big 4 & MNCs- Enrolled Agent</td>
                <td>21 October</td>
                <td>05:00 PM</td>
                <td style={{textDecoration: "underline"}}><a href="https://us02web.zoom.us/webinar/register/8516860325464/WN_dRf2tq-OSn-PR19nAFKRNA" target="new">Click to Join</a></td>
                
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
                <td>CPA - FAR</td>
                <td>Orientation session - FAR</td>
                <td>14 October</td>
                <td>04:00 PM</td>
                <td style={{textDecoration: "underline"}}><a href="https://bit.ly/3PRsUTc" target="new">Click to Join</a></td>
              </tr>
              <tr>
                <td>EA</td>
                <td>Orientation session - EA part 3</td>
                <td>15 October</td>
                <td>04:00 PM</td>
                <td style={{textDecoration: "underline"}}><a href="https://us02web.zoom.us/meeting/register/tZwvceiqrToqHtXhDJ96G843MR4MgD3CCQEe#/registration" target="new">Click to Join</a></td>
                
              </tr>
            </tbody>
        </table> <br/>
</div>
{/* End */}
    
    {/* //  :
    //   <section className="thankyou-section">
    //     <div className="container">
    //       <div className="image">
    //         <Image
    //           src={"/img/webinar-icon.png"}
    //          fill={true} sizes='100vw'
    //           className="resp-img "
    //           alt=""
    //         />
    //       </div>
    //       <h2 className="heading03 mt-4">Stay Tuned for Upcoming Webinars!</h2>
    //       <p className="para1 mt-4"> No new webinars have been announced at this time. </p>
    //       <p className="para1">This page will be updated once the next webinar schedule is declared.</p>
    //       <div className="line">

    //       </div>
    //       <p className="contact-us">Would you like to connect already? <Link href="/contact-simandhar" className="">Contact us</Link></p>
    //       <Link href="/"><p className="btn maroon-btn maroon-arrow-btn">Back to Homepage</p></Link>
    //     </div>
    //   </section>

      
    //  }  */}
      <Footer />
    </>
  )
}

export default webinars;