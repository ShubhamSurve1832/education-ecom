import React, { useState } from "react";
//import Accordion from 'react-bootstrap/Accordion';
import { Accordion } from "react-bootstrap";
import Header from '../components/Header'
import Footer from "../components/footer";
import AlumniCard from '../CPA/AlumniCardcpa';
import Link from 'next/link'

 
const FaqSection = () => {
    
    const alumniDatanew = [];
    const alumniNamenew =  ["Arpitha Settipalli",
    "Tirth Barbhaya",
    "Sanjay Kumar",
    "Nitesh Mittal",
    "Sumesh Jain",
    "Priyesh Agarwal",
    "Ansh Iyer",
    "Shivaji Bamgude",
    "Nikita Kalia",
    "Angad Pandher",
    "Saima Bhandari",
    "Adarsh Jaiswal",
    "Ackshay Raman",
    "Sneha Raghavan",
    "Padmashree Srinivas",
    "Ranjani Bhat",
    "Urvisha Parmar",
    "Aashish Chaturvedi",
    "Samanta Kanchan",
    "Sachin Mall",
    "Parminder Singh",
    "Hargun Kaur",
    "Tony Thomas",
    "Priyam Agarwal",
    "Priya Mittal",
    "Subhiksha V S",
    "Rishap Jindal",
    "Punit Agarwal",
    "Hari Rupawala",
    "Ishita Narang",
    "Shilpi Jain",
    "Divyanshi Jindal",
    "Tanya Ranjan",
    "Deepak Sharma"];
    const alumniLinkedinnew = [
        "https://www.linkedin.com/in/ca-cpa-al-arpitha-s-480197178/",
  "https://www.linkedin.com/in/catirthbarbhaya/",
  "https://www.linkedin.com/in/sanjay-kumar-45aaa245/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  "https://www.linkedin.com/in/nitesh-mittal-ca-us-cpa-license-pending-26a39960?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  "https://www.linkedin.com/in/sumesh-jain-8bbbb09/",
  "https://www.linkedin.com/in/priyesh-agarwal-10a210211",
  "https://www.linkedin.com/in/ansh-iyer-cpa-acsi-1949661a3/",
  "https://www.linkedin.com/in/shivaji-bamgude-ca-cpa-usa-license-awaited-b856b457/",
  "https://www.linkedin.com/in/nikitakalia/",
  "https://www.linkedin.com/in/angad-pandher-207a82167/",
  "https://www.linkedin.com/in/saima-bhandari-945394183/",
  "https://www.linkedin.com/in/adarsh-jaiswal-cpa-38aa8b194/",
  "https://www.linkedin.com/in/ackshayraman/",
  "https://www.linkedin.com/in/sneha-ragh/",
  "https://www.linkedin.com/in/padmashree-srinivas-545141120/",
  "https://www.linkedin.com/in/ranjani-bhat-74783874/",
  "https://www.linkedin.com/in/urvisha-parmar-59342121b/",
  "https://www.linkedin.com/in/aashish-chaturvedi-1355b715a/",
  "https://www.linkedin.com/in/samanta-kanchan-002751159/",
  "https://www.linkedin.com/in/sachin-mall-741456197/",
  "https://www.linkedin.com/in/parminder-singh-69a55010b",
  "https://www.linkedin.com/in/hargun-kaur-9b95a814a/",
  "https://www.linkedin.com/in/tony-thomas-371929161/",
  "https://www.linkedin.com/in/agarwalpriyam24/",
  "https://www.linkedin.com/in/priya-mittal-ca-cpa-ea-llb-66a610b7/",
  "https://www.linkedin.com/in/subhiksha-vs/",
  "https://www.linkedin.com/in/rishap-jindal/",
  "https://www.linkedin.com/in/punit-agarwal-cpa/",
  "https://www.linkedin.com/in/hari-rupawala-cpa-us-ca-ind-5bba5366/",
  "https://www.linkedin.com/in/ishita-narang-848415171/",
  "https://www.linkedin.com/in/shilpi-jain-161161235/",
  "https://www.linkedin.com/in/divyanshi-jindal/",
  "https://www.linkedin.com/in/tanya-ranjan-721ba4160/",
  "https://www.linkedin.com/in/deepak-sharma-b39a7557/"
    ];
    const alumniCompanynew = [
  ];
    const alumniCompanyNamenew = [ 
        "Working at PWC",
        "Working at Ornate Plastics Pvt. Ltd",
        "Working at Haier Appliances India Pvt Ltd",
        "Working at Haier Appliances India Pvt Ltd",
        "Working at University of California, San Francisco",
        "Working at Unilever",
        "Working at Deloitte",
        "Working at Tenable",
        "Working at Deloitte USI",
        "Working at Grant Thornton LLP (US)",
        "Working at Deloitte",
        "Working at Giesecke-Devrient",
        "Working at Unilever",
        "Working at Grant Thornton Singapore",
        "Working at Global Outreach Doctors",
        "Working at EY GDS",
        "Working at Aptech",
        "Working at Cipla Health Ltd",
        "Working at EY",
        "Working at Deloitte",
        "Working at EY",
        "Working at Deloitte India (Offices of the US)",
        "Working at IMA",
        "Working at EY",
        "Working at EY",
        "Working at Deloitte",
        "Working at Deloitte USI",
        "Working at Apex Group Ltd",
        "Working at Synex Renewable Energy Corporation (TSX:SXI)",
        "Working at Deloitte",
        "Working at Contra Costa Health",
        "Working at PWC",
        "Working at KPMG Global Services (KGS)",
        "Working at BT"
    ];
    const alumniLocationnew = [
        "Bangalore",
        "Gujarat",
        "Delhi",
        "Uttar Pradesh",
        "USA, San Francisco",
        "West Bengal",
        "Bengaluru",
        "Pune, Maharashtra",
        "Gurugram, Haryana",
        "California, United States",
        "Gurugram, Haryana",
        "New Delhi",
        "Delhi",
        "Singapore",
        "Ashburn, Virginia, United States",
        "Bengaluru, Karnataka",
        "Mumbai",
        "Mumbai",
        "Bengaluru",
        "Delhi",
        "Delhi",
        "Delhi",
        "Kerala",
        "Bengaluru",
        "Gurugram, Haryana",
        "Bengaluru",
        "Jharkhand",
        "Gurugram, Haryana",
        "Sarnia, Ontario, Canada",
        "Haryana",
        "California, United States",
        "Gurugram, Haryana",
        "Noida, UP",
        "Delhi"
    ]
    const imagesurl = [
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/101.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/102.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/103.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/104.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/105.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/106.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/107.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/108.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/109.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/110.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/111.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/112.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/113.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/114.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/115.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/116.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/117.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/118.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/119.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/120.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/121.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/122.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/123.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/124.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/125.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/126.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/127.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/128.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/129.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/130.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/131.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/132.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/133.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/134.jpg"
    
    ]

    for (let i = 1; i <= 34; i++) {
       
        alumniDatanew.push({
            imagesurl: imagesurl[i-1],
            title: alumniNamenew[i - 1], // Use the names as titles
            description: "CPA Alumi",
            description2: 'Working at',
            linkedin: alumniLinkedinnew[i - 1],
            companyImage: alumniCompanynew[i - 1],
            companyName: alumniCompanyNamenew[i - 1],
            location: alumniLocationnew[i - 1],
        });
    }
  return (
    <>
    <Header />
    
  
 
               
      <section className="section faq-section faq-section-cpa pt-8">
        <div className="container-l">
          <h3 className="heading02">Testimonial</h3>
          <div className="faq-container">
            <Accordion>
              <Accordion.Item eventKey="CPA-1" className="faq-row">
                <Accordion.Header className="faq-title">CPA Alumni</Accordion.Header>
                <Accordion.Body className="faq-box">
                <Accordion >
                <div className="achieversBox">
    {alumniDatanew.map((alumni, index) => (
            <div className="box text-center" >
                            <div className="achiverImg">
                                <img loading='lazy'   src={alumni.imagesurl}
                                alt={alumni.title} fill={true} sizes='100vw' className='resp-img alumni-img' />
                            </div>
                            <div className="title">
                            {alumni.title}
                            </div>
                            <div className="discription">
                            {alumni.description}, {alumni.location}
                            </div>
                            <div className="company">
                                <div className="caption">
                                    {alumni.description2}
                                </div>
                                <div className="icon">
                                    <img loading='lazy' src={alumni.companyImage} alt={alumni.companyName} fill={true} sizes='100vw' className='resp-img' />
                                </div>
                            </div>
                            <div className="youtube">
                                
                                <Link href={alumni.linkedin} target='_blank'> <img loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/icons8-linkedin-48.png" alt= {alumni.title}fill={true} sizes='100vw' className='resp-img ' /></Link>
                            </div>
                            {/* {console.log(alumni)} */}
                        </div>
         ))
         }
      
    </div>
            
                </Accordion>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="CPA-11" className="faq-row">
                <Accordion.Header className="faq-title">CPA International Alumni</Accordion.Header>
                <Accordion.Body className="faq-box">
                <Accordion >
                </Accordion>
 
                </Accordion.Body>
              </Accordion.Item>
 
              <Accordion.Item eventKey="CMA-1" className="faq-row">
                <Accordion.Header className="faq-title">CMA Alumni</Accordion.Header>
                <Accordion.Body className="faq-box">
                <Accordion >
                </Accordion>
 
                </Accordion.Body>
              </Accordion.Item>
 
 
              <Accordion.Item eventKey="EA-1" className="faq-row">
                <Accordion.Header className="faq-title">EA Alumni</Accordion.Header>
                <Accordion.Body className="faq-box">
                <Accordion >
               </Accordion>
 
                </Accordion.Body>
              </Accordion.Item>
 
             
 
 
 
 
            </Accordion>
 
 
 
          </div>
        </div>
      </section>
 
      <Footer />
 
    </>
  );
};
 
export default FaqSection;
 