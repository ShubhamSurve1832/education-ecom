import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Video from '../../../home/videoSection'
import Header from '../../../components/Header'
import Footer from "../../../components/footer";
import VideoContainer from '../../../CPA/VideoContainer'
import AchieversSection from '../../../CPA/AchieversSection'
import AlumniCard from '../../../CPA/AlumniCardcma';
import videoData from '../../../database/data/videoSection.json'
import VideoData from '../../../database/data/alumniPage.json'
import AlumniCardData from '../../../database/data/alumniPage.json'
import RegistrationForm from '../../../components/registrationForm';
import { urlConstants as urlConstant } from '../../../constants/urlConstants'




const alumni = () => {
//CPA ALUMINI PAGE
const [cmaAlumniData, setCmaAlumniData] = useState({
    CMAalumni: {},
});
useEffect(() => {
    axios({
        method: "get",
        url: urlConstant.getAlumniPage,
        responseType: "json",
    })
        .then((res) =>
            setCmaAlumniData((prevState) => ({
                CMAalumni: res.data.CMAalumni,
            }))
        )
        .catch((err) => console.log("error is ", err.message));
}, []);
   


    // ACHIVER SECTION
    const [data, setData] = useState({
        cmaFaculty: {},
    })
    useEffect(() => {
        axios({
            method: "get",
           url: urlConstant.achiverSection,
            responseType: 'json',
        })
            .then((res) =>
                setData((prevState) => (
                    { cmaFaculty: res.data.cmaFaculty }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])

    // VIDEO DATA
  const [videoData, setvideoData] = useState({
    cmaAlumini: {},
  });
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.videoSection,
      responseType: "json",
    })
      .then((res) =>
        setvideoData((prevState) => ({ cmaAlumini: res.data.cmaAlumini }))
      )
      .catch((err) => console.log("error is ", err.message));
  }, []);
    // console.log(videoData.cmaAlumini)
    return (
        <>
            <Head>
            <title>Testimonials, Reviews & Feedback of our beloved US CMA Alumni</title>
            <meta content='Click here to hear the voices of our Alumni, their success stories and their journey towards their goals through Simandhar Education' name='description'></meta>
            <meta content='Simandhar alumni, Simandhar CMA alumni, Simandhar US CMA alumni, Simandhar Testimonials, Simandhar Reviews, Simandhar Feedback' name='keywords'></meta>
            <link rel="canonical" href="https://simandhareducation.com/course/cma/alumni" />           
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
            <script type='application/ld+json' dangerouslySetInnerHTML={{
            __html:
                `{
                    "@context": "https://schema.org",
                    "@type": "VideoObject",
                    "name": "CMA | Cost, Salary, Eligibility, Jobs, Exam Pattern, Syllabus, Fees in India | US CMA Course Details",
                    "description": "In this session, Sripal Jain(CA, CPA USA) talks about the importance of US CMA in India. The session covers all the aspects of CMA exams, from the course structure to the job opportunities for a CMA. 
                  
                  CMA stands for Certified Management Accountant and works for decision making, planning, analysis, and costing. The scope and demand for a CMA are increasing because many outsourcing companies are settling in India.",
                    "thumbnailUrl": "https://i.ytimg.com/vi/3PF810UZdYM/hqdefault.jpg",
                    "uploadDate": "2019-08-08",
                    "duration": "PT8M46S",
                    "contentUrl": "https://youtu.be/3PF810UZdYM"
                  }`}} />

            <script type='application/ld+json' dangerouslySetInnerHTML={{
            __html:
                `{
                    "@context": "https://schema.org",
                    "@type": "VideoObject",
                    "name": "US CMA | CMA course | US CMA course details | CMA eligibility | Simandhar CMA alumni | Exam tips",
                    "description": "Simandhar US CMA Alumni - Madhu Mamidala Cleared Both Parts of US CMA Exams in Just 5 Months.
                  
                  Simandhar Education Congratulates Madhu on his fantastic achievement of clearing Both Parts of US CMA Exams in 5 months.
                  
                  'At Simandhar, along with the Academic Support, I also got Professional Etiquettes, Moral and Emotional Support.' - says Madhu Mamidala.",
                    "thumbnailUrl": "https://i.ytimg.com/vi/3Bh7EAOYhB8/maxresdefault.jpg",
                    "uploadDate": "2021-09-13",
                    "duration": "PT1M33S",
                    "contentUrl": "https://youtu.be/3Bh7EAOYhB8"
                  }`}} />

            <script type='application/ld+json' dangerouslySetInnerHTML={{
            __html:
                `{
                    "@context": "https://schema.org",
                    "@type": "VideoObject",
                    "name": "How Haritha US CMA Alumni Got Placed at Invesco after Clearing the US CMA Exam |Simandhar Education",
                    "description": "How Haritha US CMA Alumni Got Placed at Invesco after Clearing the US CMA Exam in 20201 |Simandhar Education | How to Pass the CMA Exam in 6 Months! Simplest Study Method!
                  
                  Simandhar Education congratulates the success of Haritha on her remarkable achievement of clearing the US CMA Exam and getting placed at Invesco.",
                    "thumbnailUrl": "https://i.ytimg.com/vi/QspTnx-4sCQ/maxresdefault.jpg",
                    "uploadDate": "2021-07-26",
                    "duration": "PT1M2S",
                    "contentUrl": "https://youtu.be/QspTnx-4sCQ"
                  }`}} />

                <script type='application/ld+json' dangerouslySetInnerHTML={{
                __html:
                    `{
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "name": "How Kruthika cleared both US CMA Exams in just 7 Months | US CMA Alumni | Simandhar Education",
                        "description": "Kruthika - US CMA Alumni shares her Success Story of clearing the US CMA Exams with ease in just 7 months
                      
                      Simandhar Education is proud of her Remarkable Accomplishment.",
                        "thumbnailUrl": "https://i.ytimg.com/vi/WIrgOGZ5zIY/maxresdefault.jpg",
                        "uploadDate": "2021-08-25",
                        "duration": "PT1M7S",
                        "contentUrl": "https://youtu.be/WIrgOGZ5zIY"
                      }`}} />


            </Head>
            <div className="width-50">
                <Header showData1={true} />
            </div>
            <VideoContainer VideoData={cmaAlumniData.CMAalumni} />
            <Video videoData={videoData.cmaAlumini} />
            <section className="alumniSection">
                <div className="container">
                    <div className="achievers">
                       
                        <h2 className="heading03 text-center">Simandhar Recent US CMA Placements</h2>
                        <div className="achieversBox">
                            <AlumniCard AlumniCardData={AlumniCardData.cmaAlumniCard} companyName={true} />
                           
                        </div>

                    </div>
                </div>
            </section>
            <div className="alumini-achivers testimonial-achiver">
                <AchieversSection showbtn={true} achieverData={data.cmaFaculty} showData={true} showAchiverbtn={false} showlogo={true} />
            </div>
            <RegistrationForm />
            <Footer />
        </>
    )
}

export default alumni