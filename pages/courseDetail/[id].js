import Head from "next/head";
import Format from "../../layout/format";
import _ from 'lodash'
import Image from 'next/image'
//components
import Header from "../../components/Header";
import Footer from "../../components/footer"
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { PostActivityLeadAPI, urlConstants, UpdateActivityLeadAPI } from '../../constants/urlConstants';
import { getCookie } from "cookies-next";
import { AUTH_KEY_NAME, statusConstants } from "../../constants/statusCodes";
import parse from 'html-react-parser';
import { formatAmount, getPercentage } from "../../utils";
import { addToCartAction, removeFromCartAction, setCurrentCourseAction } from "../../redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Spinner from '../../components/comman/Spinner';
import { useRouter } from "next/router";
import Link from "next/link";
import GoToCourse from "../../components/comman/GoToCourse";
import secureLocalStorage from "react-secure-storage";
import moment from "moment";


export default function Course() {
  let Date = moment().format('Y-M-D')?.split('-')
  Date[1] < 10 && Date.splice(1, 1, 0 + "" + Date[1])
  Date[2] < 10 && Date.splice(2, 1, 0 + "" + Date[2])

  let Time = moment().format('h:mm:ss')?.split(':')
  Time[0] < 10 && Time.splice(0, 1, 0 + "" + Time[0])
  // Time[1] < 10 && Time.splice(1,1,0+""+Time[1]) 
  // Time[2] < 10 && Time.splice(2,1,0+""+Time[2]) 
  // let activityId = secureLocalStorage.getItem('ActivityID')
  let prospectusId = secureLocalStorage.getItem('RelatedProspectId')
  // console.log(activityId)
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const router = useRouter();

  const currentCourse = useSelector(state => state.cart.currentCourse)
  const goToCourseRef = useRef(null);

  const [isButtonDisabled, setButtonDisabled] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [goToCourseInfo, setGoToCourseInfo] = useState(null);
  const [activityId, setActivityId] = useState("")
  const [count, setCount] = useState(0)
  let EmailId = secureLocalStorage.getItem("UserEmail")
  let cartItem = useSelector(state => state.cart.cartItems)
  useEffect(() => {
    setCount(cartItem.length);
  }, [cartItem]);

  // const { id } = router.query;

  const getCourseDetail = async () => {


    if (router.query.id) {
      try {
        const token = `${getCookie(AUTH_KEY_NAME) ? getCookie(AUTH_KEY_NAME) : ''}`
        const headers = {
          Authorization: `JWT ${token}`,
        }
        getSingleCourseDetails(headers)
        // setIsLoading(false);
        // let url = urlConstants.getCourseDetails + `?id=${id}`
        // const response = await axios.get(url, { headers: headers });

        // if (response.status === statusConstants.ok) {
        //   dispatch(setCurrentCourseAction(response.data.course[0]))
        // }
      } catch (error) {
        setIsLoading(false);
        if (error.response.status === statusConstants.notFound) {
          toast.error('Course Not Found! Redirecting...');
          // Redirect to the home page after 2 seconds
          setTimeout(() => {
            router.push({
              pathname: '/',
            });
          }, 2000);
        }
      } finally {
        setIsLoading(false);
      }
    }
  }

  // console.log(currentCourse.meta)

  // let [singleCoursedata,setSingleCoursedata] = useState({})
  let [courseCode, setCourseCode] = useState('')
  let getSingleCourseDetails = async (headers) => {
    try {
      let res = await axios.get(urlConstants.getAllCourses, { headers: headers })
      // console.log(res)

      if (res.status === 200) {
        setIsLoading(false);

        let coursedata = res.data.courses.filter((val, ind) => {
          return val.title?.split('(').join('').split(')').join('').split('|').join('').split('?').join('').split('  ').join(' ').split(' ').join('-').split('-').reverse().slice(1).join('-').split('-').reverse().join('-').split('\n').join('').split('-').join('').toLowerCase() == router.query.id?.split('-').join('').toLowerCase()
        })
        setCourseCode(coursedata[0]?.courseCode)
        postActivityTolead(coursedata[0]?.courseCode)
        dispatch(setCurrentCourseAction(coursedata[0]))
      }

      // console.log(res);

    } catch (err) {
      console.log(err);
    }
  }

  let postActivityTolead = async (courseCode) => {
    if (prospectusId !== null) {
      let postactivity = {
        "RelatedProspectId": prospectusId,
        "ActivityEvent": 254,
        "ActivityNote": "Course View Activity",
        "ProcessFilesAsync": true,
        // "ActivityDateTime": Date.join('-')+" "+Time?.join(':'),                        
        "Fields": [
          {
            "SchemaName": "mx_Custom_1",
            "Value": courseCode
          }
        ]
      }
      try {
        const ActivityResponse = await axios.post(PostActivityLeadAPI, postactivity,
          {
            headers: { "Content-Type": "application/json" }
          });
        console.log(ActivityResponse)
      } catch (err) {
        console.log(err)
      }
    }
  }

  // CART ACTIVITY
  let postCartActivity = async (activityName, courseCode, sequence) => {
    if (prospectusId !== null) {
      // activityGetIDCaptureLead()
      let postactivity = {
        "RelatedProspectId": prospectusId,
        "ActivityEvent": 256,
        "ActivityNote": activityName,
        "ProcessFilesAsync": true,
        //  "ActivityDateTime": formattedDateTime,                        
        "Fields": [
          {
            "SchemaName": `mx_Custom_${sequence}`,
            "Value": courseCode
          }
        ]
      }

      try {

        try {
          let activityIdRes = await axios.get(`https://www.theadroit.in/api/get-simandhat-activity-id?email=${EmailId}`,
            {
              headers: { "Content-Type": "application/json" }
            })
          console.log("activity res", activityIdRes)
          // setNewActivityId(activityIdRes.data.activity_id)
          console.log("activity res Activity id", activityIdRes.data.activity_id)

          //UPDATE ACTIVITY PAYLOAD
          let updateactivity = {
            "ProspectActivityId": activityIdRes.data.activity_id,
            "ActivityEvent": 256,
            "ActivityNote": activityName,
            "ProcessFilesAsync": true,
            //  "ActivityDateTime": formattedDateTime,                        
            "Fields": [
              {
                "SchemaName": `mx_Custom_${sequence}`,
                "Value": activityName === 'Course Added.!' ? courseCode : ''
              }
            ]
          }

          if (activityIdRes.data.activity_id !== "Fail") {
            console.log("UPDATE API Hitted")
            const ActivityResponsed = await axios.post(UpdateActivityLeadAPI, updateactivity,
              {
                headers: { "Content-Type": "application/json" }
              });
          } else {
            console.log("CREATE API Hitted")

            const ActivityResponse = await axios.post(PostActivityLeadAPI, postactivity,
              {
                headers: { "Content-Type": "application/json" }
              });
            console.log('ActivityResponse', ActivityResponse)
            if (ActivityResponse.status === 200) {
              setActivityId(ActivityResponse.data.Message.Id)
              console.log("Activity id CREATE", ActivityResponse.data.Message.Id)

              // let activityIdCaptureLead = async ()=>{
              try {
                console.log("PoST Call")
                let activityIdRes = await axios.get(`https://www.theadroit.in/api/set-simandhat-activity-id?email=${EmailId}&activity_id=${ActivityResponse.data.Message.Id}`,
                  {
                    headers: { "Content-Type": "application/json" }
                  })
                console.log("activity res", activityIdRes)
              } catch (err) {
                console.log("post call SImandhar API ERROR", err)
              }
              // }
            }
          }

        } catch (err) {
          console.log("get call SImandhar API ERROR", err)
        }

        //  console.log(ActivityResponse)
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log("Singup Or Login First To Post Activity On Lead.!")
    }
  }


  // console.log(courseCode);

  const handleCart = async (e, course) => {
    e.preventDefault();

    if (!course.inCart) {
      const defaultMessage = 'You can add only one CPA Course bundle - Becker Unlimited or Becker Limited. ABC';
      try {
        if (course.sequence === 1) {
          if (cartItems.some(item => item.sequence === 2)) {
            toast.error(defaultMessage);
            return;
          }
        } else if (course.sequence === 2) {
          if (cartItems.some(item => item.sequence === 1)) {
            toast.error(defaultMessage);
            return;
          }
        }
      } catch (error) {
        console.log("🚀 ~ file: CourseList.js:28 ~ handleCart ~ error:", error)
      }
    }


    const token = `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`
    if (token) {
      try {
        setButtonDisabled(true);
        const object = {
          courseId: course._id
        }

        const headers = {
          Authorization: `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`,
        }

        let response = await axios.post(urlConstants.addToCart, object, { headers: headers });

        if (response.status === statusConstants.ok) {
          course.inCart ? dispatch(removeFromCartAction(course)) : dispatch(addToCartAction(course))
          course.inCart ? postCartActivity('Added Course.!', course.courseCode, course.sequence) : postCartActivity('Removed Course.!', course.courseCode, course.sequence)
          toast.success(response.data.message)
        }
      } catch (error) {
        toast.error(error.response.data.message || 'An error occurred during adding to cart. Please try again later.')
      } finally {
        setButtonDisabled(false);
      }
    } else {
      course.inCart ? toast.success('Course has been removed.') : toast.success('Course has been added.')
      course.inCart ? dispatch(removeFromCartAction(course)) : dispatch(addToCartAction(course))
      course.inCart ? postCartActivity('Added Course.!', course.courseCode, course.sequence) : postCartActivity('Removed Course.!', course.courseCode, course.sequence)

    }
  }

  const submitChildForm = () => {
    if (goToCourseRef.current) {
      goToCourseRef.current.submitForm();
    }
  };
  const handleGoToCourse = async (e, item) => {
    e.preventDefault();
    await setGoToCourseInfo({ enrollmentId: item.enrollmentId })
    submitChildForm()
  }


  useEffect(() => {
    if (router.isReady) {
      getCourseDetail();
    };

  }, [router.query.id, router.isReady])
  // let {meta} = currentCourse;
  // console.log(currentCourse)
  return (
    <>

      {/* <script     type='application/ld+json'
       dangerouslySetInnerHTML={{
          __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],          
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=         
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);          
          })(window,document,'script','dataLayer','GTM-PW2JTZ3');`}}
        /> */}



      {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PW2JTZ3"
height="0" width="0" style={{"display":"none","visibility":"hidden"}}></iframe></noscript> */}

      <Format>
        {/* <div className={navBar ? "hide" : ""}> */}

        {
          courseCode !== ''
          &&
          <>
            {
              courseCode === 'CPA'
              &&
              <Head>
                <title>Master US CPA with Simandhar's Becker Unlimited Access</title>
                <meta name="description" content="Get ahead in the US CPA exam with Simandhar's Becker Unlimited Access course. Dominate the finance world with US CPA. Get 100% job assistance. Enroll now!Enroll now!" />
                <meta name="keywords" content="cpa, cpa course, Becker, cpa in usa, certified public accountant, cpa exam, cpa eligiblity, licensed cpa, certified cpa, cpa exam fees, cap exam, us cpa course fees, cpa accounting " />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <link rel="canonical" href="https://www.simandhareducation.com/courseDetail/Certified-Public-AccountantBecker-Unlimited-and-Access-24-Months-Simandhar-LMS-Access" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                  __html: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Certified Public Accountant (Becker Unlimited Access (60 months) Simandhar LMS Access)",
    "image": "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/courses/1697632478916.jpeg",
    "description": "Achieve career success with CPA certification! Access Becker Unlimited (60 months) and Simandhar LMS for 100% job assistance in Big4 & MNCs. Get comprehensive CPA course details and become job-ready!",
    "brand": {
      "@type": "Brand",
      "name": "Simandhar Education"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://dev.simandhareducation.com/courseDetail/Certified-Public-Accountant-Becker-Unlimited-Access-60-months-Simandhar-LMS-Access",
      "priceCurrency": "INR",
      "price": "150000",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  }`
                }} />

              </Head>
            }
            {
              courseCode === 'CPA Limited'
              &&
              <Head>
                <title>Excel in US CPA with Simandhar's Becker Limited Access</title>
                <meta name="description" content="Prepare for the US CPA exam with Simandhar's Becker Limited Access course. Top-notch study materials and expert guidance. Get 100% job assistance Enroll now!" />
                <meta name="keywords" content="cpa, cpa course, Becker, cpa in usa, certified public accountant, cpa exam, cpa eligiblity, licensed cpa, certified cpa, cpa exam fees, cap exam, us cpa course fees, cpa accounting " />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <link rel="canonical" href="https://www.simandhareducation.com/courseDetail/Certified-Public-Accountant-Becker-Limited-Access" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                  __html: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Certified Public Accountant (Becker Limited Access)",
    "image": "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/courses/1698213151310.jpeg",
    "description": "Supercharge your career in 24 months with Simandhar & Becker limited access. Ace the CPA course, secure 100% job assistance for Big4 & MNCs, and become job-ready!",
    "brand": {
      "@type": "Brand",
      "name": "Simandhar Education"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.simandhareducation.com/courseDetail/Certified-Public-Accountant-Becker-Limited-Access",
      "priceCurrency": "INR",
      "price": "115000",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  }`
                }} />


              </Head>
            }
            {
              courseCode === 'CMA'
              &&
              <Head>
                <title>Unlock Your Success with the US CMA Course</title>
                <meta name="description" content="Prepare for the win in the US CMA exam with our specialized US CMA course. Expert guidance to excel in your career. Get 100% job assistance. Enroll now!" />
                <meta name="keywords" content="management accounting certification, cma course, cma course details, us cma, cma exam, us certified management accountant, us cma course, cma usa course details, cma classes near me, cma usa course, cma us course details, cma institute near me, cma classes, cma coaching, cma training, cma courses near me, cma full course details, cma us course" />
                <meta name="viewport" content="width=device-width,  initial-scale=1,  maximum-scale=1"></meta>
                <link rel="canonical" href="https://www.simandhareducation.com/courseDetail/Certified-Management-Accountant" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                  __html: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Certified Management Accountant",
    "image": "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/courses/1698213233829.jpeg",
    "description": "Explore US CMA Course with Simandhar! Get details on exams, benefits, syllabus, salary, eligibility, fees & job placement in India.",
    "brand": {
      "@type": "Brand",
      "name": "Simandhar Education"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.simandhareducation.com/courseDetail/Certified-Management-Accountant",
      "priceCurrency": "INR",
      "price": "80000",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  }`
                }} />

              </Head>
            }
            {
              courseCode === 'EA'
              &&
              <Head>
                <title>Enrolled Agent Course: IRS Certification</title>
                <meta name="description" content="Gain IRS Enrolled Agent certification through our comprehensive course with affordable fees and expert guidance. Unlock new opportunities today! Get 100% job assistance" />
                <meta name="keywords" content="enrolled agent, enrolled agent course, ea course, enrolled agent course fees, enrollment agent course, ea course details, ea certification, ea course duration, ea course eligibility" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <link rel="canonical" href="https://simandhareducation.com/courseDetail/Enrolled-Agent" />

                <script type="application/ld+json" dangerouslySetInnerHTML={{
                  __html: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Enrolled Agent",
    "image": "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/courses/1698213338471.jpeg",
    "description": "Master the EA Exam (SEE) with Simandhar! Unlock IRS expertise and secure your path to becoming a US tax expert. Join for 100% job assistance.",
    "brand": {
      "@type": "Brand",
      "name": "Simandhar Education"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.simandhareducation.com/courseDetail/Enrolled-Agent",
      "priceCurrency": "INR",
      "price": "60000",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  }`
                }} />

              </Head>
            }
            {
              courseCode === 'IFRS'
              &&
              <Head>
                <title>IFRS Course: Master International Financial Reporting</title>
                <meta name="description" content="Enroll in our IFRS certification course to gain expertise in International Financial Reporting Standards. Enhance your financial knowledge today!" />
                <meta name="keywords" content="ifrs is, ifrs course, international financial reporting standards, ifrs standards, ifrs accounting, ifrs certification course, ifrs meaning in accounting, ifrs accounting standards, ifrs certification, ifrs course fees, ifrs course details" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <link rel="canonical" href="https://www.simandhareducation.com/courseDetail/International-Financial-Reporting-Standards" />

                <script type="application/ld+json" dangerouslySetInnerHTML={{
                  __html: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "International Financial Reporting Standards",
    "image": "https://s3.ap-south-1.amazonaws.com/content.alphalearn.com/VjBKVWljMDFKTzQ9/RHdVcVVDZUpsWFU9/thumbnail.png",
    "description": "Unlock in-depth insights into IFRS with the ACCA's Diploma in IFRS. Recognized globally, this qualification is essential for finance professionals. Join Simandhar for seamless enrollment and secure 100% job assistance. Elevate your career with IFRS expertise!",
    "brand": {
      "@type": "Brand",
      "name": "Simandhar Education"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.simandhareducation.com/courseDetail/International-Financial-Reporting-Standards",
      "priceCurrency": "INR",
      "price": "35000",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  }`
                }} />

              </Head>
            }
            {
              courseCode === 'CIA'
              &&
              <Head>
                <title>Certified Internal Audit Course: Unlock Your Potential</title>
                <meta name="description" content="Discover the best CIA course for aspiring auditors. Master auditing skills and earn your CIA certification. Enroll in our program today!" />
                <meta name="keywords" content="auditing courses, auditor course, certified internal audit, certified internal auditor, cia course, audit certification, cia certification, certified internal audit course, certified internal auditor course, internal audit course, internal auditor course, certified lead auditor, cia exam full form" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <link rel="canonical" href="https://www.simandhareducation.com/courseDetail/Certified-Internal-Auditor" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                  __html: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Certified Internal Auditor",
    "image": "https://s3.ap-south-1.amazonaws.com/content.alphalearn.com/VjBKVWljMDFKTzQ9/SmhHTEVBTW1teU09/thumbnail.jpg",
    "description": "Take your audit career to new heights with the Certified Internal Auditor (CIA) Certification. Join Simandhar for expert guidance, 100% job assistance, and seamless registration with IIA USA. Elevate your professional journey today!",
    "brand": {
      "@type": "Brand",
      "name": "Simandhar Education"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.simandhareducation.com/courseDetail/Certified-Internal-Auditor",
      "priceCurrency": "INR",
      "price": "65000",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  }`
                }} />

              </Head>
            }
            {
              courseCode === 'DA'
              &&
              <Head>
                <title>Data Analytics Course: Unleash the Power of Data</title>
                <meta name="description" content="Gain a data analytics certification with our comprehensive course. Explore the world of analytics through expert-led training. Enroll now!" />
                <meta name="keywords" content="data analytics, data analytics course, data analytics certification, data analyst course near me, analytics courses" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <link rel="canonical" href="https://www.simandhareducation.com/courseDetail/Data-Analytics" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                  __html: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Data Analytics",
    "image": "https://s3.ap-south-1.amazonaws.com/content.alphalearn.com/VjBKVWljMDFKTzQ9/UWtmVHFuS1hEUnM9/thumbnail.jpg",
    "description": "Empower your decisions in corporate finance with our Data Analytics Course. Gain insights into financial analytics for well-informed choices. Elevate your skills today!",
    "brand": {
      "@type": "Brand",
      "name": "Simandhar Education"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.simandhareducation.com/courseDetail/Data-Analytics",
      "priceCurrency": "INR",
      "price": "50000",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  }`
                }} />

              </Head>
            }
            {
              courseCode === 'SS'
              &&
              <Head>
                <title>Simandhar Saamarth: Empowering Your Accounting Career</title>
                <meta name="description" content="Learn basics of Accounting, soft skills and become job-ready with Simandhar Saamarth. Get ready for rewarding opportunities in the accounting world. Enroll now!" />
                <meta name="keywords" content="accounting as career, ready to work, job readiness, career ready, job ready courses, workshop jobs, job aspirant, job ready" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <link rel="canonical" href="https://www.simandhareducation.com/courseDetail/Simandhar-Saamarth" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                  __html: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Finance For Non-Finance",
    "image": "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/courses/1700120555460.jpeg",
    "description": "Empowering non-financial background students with essential finance knowledge. Our course provides a strong foundation in accounting and practical skills.",
    "brand": {
      "@type": "Brand",
      "name": "Simandhar Education"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.simandhareducation.com/courseDetail/Finance-For-Non",
      "priceCurrency": "INR",
      "price": "15000",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  }`
                }} />

              </Head>
            }
          </>
        }

        <Header />
        {/* </div> */}
        <div className="course-detail-wrapper">

          {
            isLoading ? (<Spinner />)
              :
              (
                <div className='container-l'>
                  <div className="course-info">
                    <h1 className="heading03">{currentCourse?.title || 'NA'}</h1>
                    <p>By {currentCourse?.trainerName || 'NA'}</p>
                    {/* <ul>
                <li>2 years duration</li>
                <li>22 lectures </li>
                <li>4250 Students</li>
              </ul> */}
                    <div className="course-box">
                      <h5 className="heading05">Description:</h5>
                      <p className="justify">
                        {
                          parse(currentCourse?.description || '')
                        }
                      </p>
                    </div>
                    {/* <div className="course-box">
                <h5 className="heading05">Course content:</h5>
                <p>22 lectures total</p>
                <div className="cc-table">
                  <div className="thead">
                    <p className="th">Sr. No.</p>
                    <p className="th">Lectures</p>
                    <p className="th">Subject Code</p>
                  </div>
                  <div className="tbody">
                    <div className="td-row">
                      <p className="td">1</p>
                      <p className="td">16 Points to Pass CPA Exam</p>
                      <p className="td">PTR</p>
                    </div>
                    <div className="td-row">
                      <p className="td">2</p>
                      <p className="td">Welcome Letter and Evaluation Letter from Sripal Jain</p>
                      <p className="td">WR</p>
                    </div>
                    <div className="td-row">
                      <p className="td">3</p>
                      <p className="td">Orientation video by Sripal Jain</p>
                      <p className="td">Orientation</p>
                    </div>
                    <div className="td-row">
                      <p className="td">4</p>
                      <p className="td">Telegram Groups</p>
                      <p className="td">TG</p>
                    </div>
                    <div className="td-row">
                      <p className="td">5</p>
                      <p className="td">Live Class Schedules and webinars</p>
                      <p className="td">LCS</p>
                    </div>
                    <div className="td-row">
                      <p className="td">6</p>
                      <p className="td">Daily MCQs</p>
                      <p className="td">Daily MCQs (CPA)</p>
                    </div>
                  </div>
                  <button className="view-all">View All</button>
                </div>
              </div> */}
                  </div>
                  <div className="cd-aside">
                    <div className="cd-box">
                      <img loading='lazy' src={`${currentCourse?.thumbnail || ''}`} fill={true} sizes='100vw' className='resp-img' alt={`${currentCourse?.title || 'NA'}`} />
                      {/* <h2 className="heading02">US CPA</h2> */}
                    </div>
                    <div className="price-box">
                      <span className="discount-price">{formatAmount(currentCourse?.price?.totalPrice)}</span>
                      <span className="actual-price">{formatAmount(currentCourse?.price?.discountPrice)}</span>
                      <span className="discount">{getPercentage(currentCourse?.price?.discountPrice || 0, currentCourse?.price?.totalPrice || 0)}% off</span>
                    </div>
                    <div className="btn-wrap">
                      {currentCourse && currentCourse.hasOwnProperty('IsBoughtAlready') && currentCourse.IsBoughtAlready ? (
                        <button onClick={(e) => handleGoToCourse(e, currentCourse)} className="btn maroon-btn maroon-btn-arrow">Course</button>
                      ) : (
                        <>
                          <button className={`btn maroon-btn ${isButtonDisabled ? 'disabled' : ''}`} onClick={(e) => handleCart(e, currentCourse)}>
                            {isButtonDisabled ? 'Loading...' : (currentCourse?.inCart) ? 'Remove' : 'Add to cart'}
                          </button>
                        </>
                      )}
                      <Link href="/academy" className="btn maroon-border-btn">Back to courses</Link>
                    </div>
                  </div>
                </div>

              )
          }
        </div>
        <GoToCourse ref={goToCourseRef} enrollmentId={goToCourseInfo?.enrollmentId} />
        <Footer />
      </Format>

    </>
  );

}
