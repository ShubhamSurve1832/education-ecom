import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { urlConstants as urlConstant } from '../constants/urlConstants'

import dynamic from "next/dynamic";
const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/footer'))
const CorporateLogos = dynamic(() => import('../CPA/CorporateLogos'))
const corporateLogosData = dynamic(() => import('../database/data/corporateLogos.json'))
// import Header from '../components/Header'
// import Footer from "../components/footer";
// import CorporateLogos from '../CPA/CorporateLogos'
// import corporateLogosData from '../database/data/corporateLogos.json'

const simandharTieUps = () => {
    // SIMANDHAR TIE-UPS PAGE
    const [corporateLogosData, setCorporateLogosData] = useState({
        CorporateLogos: {}
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.corporateLogos,
            responseType: 'json',
        })
            .then((res) =>
                setCorporateLogosData((prevState) => (
                    { CorporateLogos: res.data.CorporateLogos }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])
    // console.log(corporateLogosData.CorporateLogos)
    return (
        <>
            <Head>
                <title>Corporate Tie-Ups- Simandhar Education</title>
                <meta content="Mr. Sripal Jain's expertise has helped numerous big companies, including BIG4, to achieve their business objectives by training their employees' name='description"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta content='Big4, MNCs, Corporate tie up, Simandhar corporate tie up' name='keywords'></meta>
                <link rel="canonical" href="https://simandhareducation.com/tie-ups" />
            </Head>
            <div className='width-50'>
                <Header/>
            </div>
       
            <CorporateLogos showDescription1={true} showDescription2={true} showHeading={true} />
            <div className='container'>
        <h3 className="heading03">Feel free to contact us on: </h3><br/>
        <table cellPadding="0" cellSpacing="0" className='cms-table'>
            <thead>
                <tr>
                  
                    <th><p>Name</p></th>
                    <th><p>Email</p></th>
                    <th><p>Contact</p></th>
                </tr>
            </thead>
            <tbody>

            {/* <tr>
                <td>CPA - ISC</td>
                <td>Orientation session - ISC</td>
                <td>25 November 2023</td>
                <td>04:00 PM</td>
                <td style={{textDecoration: "underline"}}><a href=" https://us02web.zoom.us/meeting/register/tZIqc-CvrzsjHdKeh2UuQLdDP5-9xWvxq3Uf#/registration" target="new">Click to Join</a></td>
            </tr> */}
            <tr>
                
                <td>Jagriti Dey</td>
                <td><a href="mailto:corporate-relations@simandhareducation.com">corporate-relations@simandhareducation.com</a>
</td>
                <td><a href="tel:+919154715105">+91-9154715105</a></td>
            </tr>

            <tr>
               
                <td>Ushashree </td>
                <td><a href="mailto:corporate-relations@simandhareducation.com">corporate-relations@simandhareducation.com</a> </td>
                <td><a href="tel:+917386667404">+91-7386667404</a></td>
              </tr>

            
            
            </tbody>
        </table> <br/>
</div>
            <CorporateLogos corporateLogosData={corporateLogosData.CorporateLogos} />
            <div className='container'>
        <h3 className="heading03">Feel free to contact us on: </h3><br/>
        <table cellPadding="0" cellSpacing="0" className='cms-table'>
            <thead>
                <tr>
                  
                    <th><p>Name</p></th>
                    <th><p>Email</p></th>
                    <th><p>Contact</p></th>
                </tr>
            </thead>
            <tbody>

            {/* <tr>
                <td>CPA - ISC</td>
                <td>Orientation session - ISC</td>
                <td>25 November 2023</td>
                <td>04:00 PM</td>
                <td style={{textDecoration: "underline"}}><a href=" https://us02web.zoom.us/meeting/register/tZIqc-CvrzsjHdKeh2UuQLdDP5-9xWvxq3Uf#/registration" target="new">Click to Join</a></td>
            </tr> */}
            <tr>
                
                <td>Jagriti Dey</td>
                <td><a href="mailto:corporate-relations@simandhareducation.com">corporate-relations@simandhareducation.com</a>
</td>
                <td><a href="tel:+919154715105">+91-9154715105</a></td>
            </tr>

            <tr>
               
                <td>Ushashree </td>
                <td><a href="mailto:corporate-relations@simandhareducation.com">corporate-relations@simandhareducation.com</a> </td>
                <td><a href="tel:+917386667404">+91-7386667404</a></td>
              </tr>

            
            
            </tbody>
        </table> <br/>
</div>
            <Footer />
        </>
    )
}

export default simandharTieUps