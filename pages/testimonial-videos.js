import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'


import dynamic from "next/dynamic";
const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/footer'))
const TestimonialVideo = dynamic(() => import('../home/videoSection')) //CMS AVAILABLE
const TestimonialVideoTab = dynamic(() => import('../CPAInner/testimonialVideoTab')) //CMS AVAILABLE
const videoData = dynamic(() => import('../database/data/videoSection.json'))
const testimonialVideoTab = dynamic(() => import('../database/data/testimonialVideoTab.json'))
const Spinner = dynamic(() => import('../components/comman/Spinner'))
// import Header from '../components/Header'
// import Footer from "../components/footer";
// import Video from '../home/videoSection'
// import TestimonialVideoTab from '../CPAInner/testimonialVideoTab'
// import Spinner from '../components/comman/Spinner';
// import videoData from '../database/data/videoSection.json'
// import testimonialVideoTab from '../database/data/testimonialVideoTab.json'

import { urlConstants as urlConstant } from '../constants/urlConstants'


const testmonialVideos = () => {

  // VIDEO DATA
  const [videoData, setvideoData] = useState([]);
    useEffect(()=>{
      fetchData();
  },[])
  const fetchData = async() =>{
    try{
        let res = await axios.get( urlConstant.videoSection);
        // console.log(res.data)
        setvideoData(res.data.testimonialVideoPage)
    }catch(error){
        console.log(error)
    }
}
  console.log(videoData)
  // TESTIMONIAL PAGE : US CPA (Certified Public Accountant) Licensee
  const [testimonialData, setTestimonialData] = useState({
    testimonialPage: {}
  })
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.testimonialVideoTab,
      responseType: 'json',
    })
      .then((res) =>
        setTestimonialData((prevState) => (
          { testimonialPage: res.data.testimonialTab }
        )))
      .catch((err) =>
        console.log("error is ", err.message)
      )
  }, [])
  // console.log(testimonialData.testimonialPage)

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Head>
        <title>CPA Testimonial videos | Simandhar Education</title>
        <meta content='Get inspired by the transformative power of Simandhar Education through our impactful testimonial videos. Hear success stories and experiences of our satisfied students.' name='description'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta content='CPA testimonial , CPA, US CPA, CPA course, Student sucess, CMA, EA' name='keywords'></meta>
        <link rel="canonical" href="https://simandhareducation.com/testimonial-videos" />
        
        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "How Ashwini Cleared US CPA Exams in just 8 Months",
              "description": "Our US CPA Alumni Ashwini Nathan Cleared US CPA Exam in Just 8 Months.
            
            Congratulations Ashwini on passing the US CPA exam. Your dedication towards the goal is really inspiring. We are proud to mentor hard-working students as you.",
              "thumbnailUrl": "https://i.ytimg.com/vi/k9ospIXoezI/maxresdefault.jpg",
              "uploadDate": "2021-09-15",
              "duration": "PT2M8S",
              "contentUrl": "https://youtu.be/k9ospIXoezI"
            }`}} />


        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "Anju Journey from CA Inter to US CPA to getting job in USA",
              "description": "How US CPA Topper of Simandhar Anju Nampoothiry got placed in the US !!
            
            Below are some of the key points discussed in the amazing session:
            
            * CA Inter to US CPA journey was not easy but was fruitful at last
            * How Anju overcame the challenges by taking a detour from CA to US CPA
            * The hurdles she faced during the evaluation process and how Simandhar Education helped in solving it
            * How Anju cracked the US interview by being a fresher
            * Does the degree have any relation to getting a work permit in the US
            * Differences between EAD and H-1B visas
            * Does Indian experience be considered while getting a job in the US, or is local experience only considered
            * Specific points to prepare the resume as per the US standards
            * Salaries of US CPA in the US and India as a fresher",
              "thumbnailUrl": "https://i.ytimg.com/vi/-4lCp8HYBVM/hqdefault.jpg",
              "uploadDate": "2021-08-01",
              "duration": "PT11M8S",
              "contentUrl": "https://youtu.be/-4lCp8HYBVM"
            }`}} />


        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "Bcom to US CMA & US CPA| Mani Venkat- Simandhar Alumni| Placed at EY (above 9 LPA package)",
              "description": "Our alumni Mani Venkatesh opens up on how Simandhar helped him pursue the dual qualification CPA+CMA and the three things a student should check before choosing an institute.",
              "thumbnailUrl": "https://i.ytimg.com/vi/lf0ohX8r2w0/maxresdefault.jpg",
              "uploadDate": "2022-06-24",
              "duration": "PT0M54S",
              "contentUrl": "https://youtu.be/lf0ohX8r2w0"
            }`}} />


        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "How B.Com grad, Jay, passed CPA exam & Placed at BDO | CPA course, Syllabus| CPA study strategies",
              "description": "Join us live on YouTube at 5:30 PM today as our co-founder interacts with our CPA Alumnus Jay Samant, who is now placed at BDO. Don't miss out on all the insightful conversation as he talks about his inspiring journey from B.COM to CPA!  See you there!",
              "thumbnailUrl": "https://i.ytimg.com/vi/TjJq0KrUxLI/maxresdefault.jpg",
              "uploadDate": "2023-03-27",
              "duration": "PT57M19S",
              "contentUrl": "https://www.youtube.com/live/TjJq0KrUxLI?feature=share"
            }`}} />

        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "CA inter to CPA |Placed in Deloitte| Shravan |CPA alumni|CPA course| CA drop out |CPA job placement",
              "description": "imandhar has scripted success stories of many accounting students and aspirants.
            But, why hear it from us? Hear it from our students directly.
            Our alumni Shravan cleared all four sections of the US CPA exam in his first attempt and got placed in Deloitte by Simandhar.
            He talks about his US CPA journey and reveals the combination for success. Watch the video to know more.",
              "thumbnailUrl": "https://i.ytimg.com/vi/p-Mca6p2ggA/maxresdefault.jpg",
              "uploadDate": "2022-08-27",
              "duration": "PT2M28S",
              "contentUrl": "https://youtu.be/p-Mca6p2ggA"
            }`}} />

        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "Bcom to CPA journey of Venkat - Simandhar Alumni | 4 Tips to Pass US CPA Exam in India | CPA Course",
              "description": "Meet our alumni Venkat Jonnavittula who is a B.Com and has successfully cleared his US CPA exam. 
            
            He shares the 4 principles that he followed in order to pass the exam. 
            
            Want to know what those principles are?",
              "thumbnailUrl": "https://i.ytimg.com/vi/G9lJA4mvG8s/hqdefault.jpg",
              "uploadDate": "2022-04-15",
              "duration": "PT3M37S",
              "contentUrl": "https://youtu.be/G9lJA4mvG8s"
            }`}} />

        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "CPA - Creating A Path Abroad | Sharanya Rajagopal | Assistant Manager at GT | US CPA Course",
              "description": "Meet our alumni Sharanya who is working in the UK as an Assistant Manager at Grant Thornton.  
            
            She says that experience and CPA skills will make it highly possible for you to get placed at a great profile in the UK.  
            
            She also stresses the importance of 2Cs – Communication, and Connections.",
              "thumbnailUrl": "https://i.ytimg.com/vi/RGUZIXsoA8I/maxresdefault.jpg",
              "uploadDate": "2022-04-12",
              "duration": "PT12M0S",
              "contentUrl": "https://youtu.be/RGUZIXsoA8I"
            }`}} />

        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "CPA - Creating A Path Abroad | Varshitha Nadipineni | Corporate Tax Associate | US CPA Course",
              "description": "Meet our CPA alumni Varshita who is currently in the UK, working for a CPA firm dealing in US Tax and Financial Services. 
            
            She says once you complete CPA and get placed in a Big 4, there is a big chance the company will give you an opportunity to work at their on-shore offices abroad.",
              "thumbnailUrl": "https://i.ytimg.com/vi/rQC-22ynjeM/maxresdefault.jpg",
              "uploadDate": "2022-04-04",
              "duration": "PT18M52S",
              "contentUrl": "https://youtu.be/rQC-22ynjeM"
            }`}} />

        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "Sarika Dudela, US CPA Alumni, shares her journey of success | US CPA Course | Simandhar Education",
              "description": "Simandhar Education helps students build their careers the right way! Right from providing them with the right training and guidance to helping them achieve their dreams - we do it all!
            Our US CPA alumni, Sarika Dudela is one such student who has been carving her path to success.",
              "thumbnailUrl": "https://i.ytimg.com/vi/ipngF6Du6VQ/hqdefault.jpg",
              "uploadDate": "2021-12-13",
              "duration": "PT0M53S",
              "contentUrl": "https://youtu.be/ipngF6Du6VQ"
            }`}} />

        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "How Akanksha being CA inter Passed US CPA exam in India | CPA | CPA Course | Simandhar Education",
              "description": "Our US CPA Alumni Akansha has crossed many hardships and suffered pressures from her surroundings. Her journey from a CA inter-student to a successful US CPA has been incredible and we are extremely proud of her!
            
            The faculties are available anytime for doubt clearance, and the Simandhar study material helps clear the exams smoothly. In the end, you are not just a skilled US CPA, but the special training and grooming make you corporate-ready.  Says Akanksha.",
              "thumbnailUrl": "https://i.ytimg.com/vi/3hcS-7-_3-s/maxresdefault.jpg",
              "uploadDate": "2021-10-31",
              "duration": "PT1M27S",
              "contentUrl": "https://youtu.be/3hcS-7-_3-s"
            }`}} />

        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "How Reshma being B.Com and Working professional passed US CPA Exam in india | CPA Course |CPA |AICPA",
              "description": "Are you a working professional? Get a head start on the CPA Exam.
            
            Reshma, being a Bcom graduate and a working professional of Deloitte, cleared all four parts of the US CPA Exam in just 11 months.
            
            To pass the US CPA exam, all we need is focus, dedication, and hard work. I would say that the theSimandhar family is a blessing; they definitely support every student in every way possible - says Reshma.",
              "thumbnailUrl": "https://i.ytimg.com/vi/-aHCdJd7DtA/maxresdefault.jpg",
              "uploadDate": "2021-10-26",
              "duration": "PT2M7S",
              "contentUrl": "https://youtu.be/-aHCdJd7DtA"
            }`}} />

        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "Can a Bcom do US CPA ? | US CPA course details | CPA course | CPA | US CPA | Exam tips by Teja, Bcom",
              "description": "Our US CPA Alumni Teja Gade has cleared All 4 Parts of the CPA Exam. Being a BCom Graduate, he sets an example that nothing is impossible if you set your goals and be headstrong for achieving them.
            
            “The only impossible journey is the one you never begin.”
            
            In this Video, Teja Gade Says ' His primary strategy involves sticking to notes and skill practice. He indulged in MCQ’s practice, SIMs and the mock tests.'",
              "thumbnailUrl": "https://i.ytimg.com/vi/ENLJm83x-2U/maxresdefault.jpg",
              "uploadDate": "2021-09-09",
              "duration": "PT3M2S",
              "contentUrl": "https://youtu.be/ENLJm83x-2U"
            }`}} />

        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "How Seetha Ravi passed CPA at age of 52 |Passed within 8 months| Simandhar US CPA alumni |CPA course",
              "description": "Seetha Ravi shares her journey of clearing US CPA in the first attempt at the age of 52 in just 8 months.
            
            A perfect example of achieving success if you have strong determination no matter what. A remarkable achievement by her. Just one step further for her US CPA licensure.
            
            'Don't overthink, Don't be hard on yourself, Certainly Don't give up', says Seetha.
            
            She also adds by saying - 'Simandhar have their own lecture series to help students for obtaining conceptual clarity for each & every subject.'",
              "thumbnailUrl": "https://i.ytimg.com/vi/c-_uDEAzxsw/maxresdefault.jpg",
              "uploadDate": "2021-06-29",
              "duration": "PT2M27S",
              "contentUrl": "https://youtu.be/c-_uDEAzxsw"
            }`}} />

        <script type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
            `{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "How Akshay Passed US CPA (98-FAR, 95-BEC, 94-REG, 88-AUD)from Simandhar |Placed in Amazon|CPA alumni",
              "description": "How Akshay Passed US CPA (98-FAR, 95-BEC, 94-REG, 88-AUD) | Placed in Amazon | Simandhar CPA Alumni
            
            “A river cuts through a rock not because of its power, but its persistence.”
            
            Staying true to this quote we present before you one of our brightest Simandhar Alumni Akshay Jaiswal. He is here to put some light on how to crack the CPA exam by Hardwork and Perseverance.
            
            His suggestion for students pursuing CPA is to not overburden themselves, take one step at a time but be consistent with what you do.",
              "thumbnailUrl": "https://i.ytimg.com/vi/CwSk4hnsi5E/hqdefault.jpg",
              "uploadDate": "2021-08-03",
              "duration": "PT2M49S",
              "contentUrl": "https://youtu.be/CwSk4hnsi5E"
            }`}} />

      </Head>
      {
        isLoading ? (<Spinner />) : (

          <>
            <div className="width-50">
              <Header />
            </div>

            <div className='testimonial-video-section'>
              <h1 className='heading02 text-center'> Testimonial Videos</h1>
              <TestimonialVideo videoData={videoData} />
            </div>
            <TestimonialVideoTab testimonialVideoTab={testimonialData.testimonialPage} />
            <Footer />
          </>
        )
      }
    </>
  )
}

export default testmonialVideos