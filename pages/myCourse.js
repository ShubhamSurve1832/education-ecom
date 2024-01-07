import React, { useEffect, useRef, useState } from "react";
import AccountSideBar from "../components/SideNavBar";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { urlConstants, API_BASE_URL } from "../constants/urlConstants";
import { getCookie } from "cookies-next";
import {
  AUTH_KEY_NAME,
  maxDescriptionWords,
  statusConstants,
} from "../constants/statusCodes";
import { formatTimestamp } from "../utils";
import parse from "html-react-parser";
import Spinner from "../components/comman/Spinner";
import Link from "next/link";
import GoToCourse from "../components/comman/GoToCourse";
import secureLocalStorage from "react-secure-storage";


const myCourse = () => {

  
  let Token = secureLocalStorage.getItem('TK');
  const [tableData, setTableData] = useState([
    {
      Courses: "US CPA Course (Certified Public Accountant)",
      Date: "Jan 25, 2023",
      price: "1,299",
      type: "Credit card",
    },
    {
      Courses: "US CMA Course (Certified Management Accountant)",
      Date: "Oct 13, 2022",
      price: "999",
      type: "Credit card",
    },
    {
      Courses: "EA Course (Enrolled Agent)",
      Date: "Jun 05, 2022",
      price: "1,799",
      type: "Credit card",
    },
  ]);

  const [myCourses, setMyCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const goToCourseRef = useRef(null);
  const [goToCourseInfo, setGoToCourseInfo] = useState(null);

  const submitChildForm = () => {
    if (goToCourseRef.current) {
      goToCourseRef.current.submitForm();
    }
  };
  const handleGoToCourse = async (e, item) => {
    e.preventDefault();
    await setGoToCourseInfo({ enrollmentId: item.enrollmentId });
    submitChildForm();
  };
  const getStudentProfile = async () => {
    try {
      setLoading(true);
      const headers = {
        Authorization: `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ""
          }`,
      };
      const response = await axios.get(urlConstants.studentProfile, {
        headers: headers,
      });
      if (response.status === statusConstants.ok) {
        setMyCourses(response.data.trainings.purchased);
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: myCourse.js:21 ~ getStudentProfile ~ error:",
        error
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  let [syncs, setSync] = useState()

  useEffect(() => {
    sync()
  }, [])
  const sync = async () => {
    try {
      const response = await axios.get(API_BASE_URL + 'alphalearn/syncCourseList',
        {
          headers: {
            Authorization: `JWT ${Token}`
          }
        }
      )
      if (response.status === 200) {

        setSync(response)
      
        console.log(response)
      }

    } catch (err) {
      console.log(err, "in asycn request")
    }
  }

  const extractTextContent = (node) => {
    if (typeof node === "string") {
      return node;
    }
    if (Array.isArray(node.props?.children)) {
      return node.props.children.reduce(
        (acc, child) => acc + extractTextContent(child),
        ""
      );
    }
    return "";
  };

  useEffect(() => {
    getStudentProfile();
  }, []);
  return (
    <>
      <Head>
        <title>My Courses - Simandhar Education</title>
        {/* <!-- Google tag (gtag.js) --> */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-826080113"></script>
        <script     type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'AW-826080113');`}}
        /> */}
      </Head>
      <div className="my-account-header">
        <Header />
      </div>
      <div className="relative">
        <AccountSideBar />
        <section className="order-history profile my-course-section NewOneProfile">
          <div className="container">
            {/* <div className="my-courses-right-btn">
              <a class="btn maroon-btn maroon-btn-arrow" onClick={sync}>
                Re-Sync Courses with LMS
              </a>
            </div> */}

            <h4 className="heading04">My Courses</h4>
            {loading ? (
              <Spinner />
            ) : (
              <div className="order-table">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Course Name</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {myCourses.map((item) => (
                      <tr key={item._id}>
                        <td>{formatTimestamp(item.paymentDate)}</td>
                        <td>
                          <div className="my-course-box">
                            <span className="cr-img">
                              <img
                                loading="lazy"
                                src={item.thumbnail}
                                fill={true}
                                sizes="100vw"
                                className="resp-img"
                                alt={`course image of ${item.title}`}
                              />
                            </span>
                            <div className="cr-dlt-box">
                              <span className="cr-name">{item.title}</span>
                              {/* <span className='cr-desc'>{parse(item.description)}</span> */}
                            </div>
                          </div>
                        </td>
                        <td>
                          <button
                            onClick={(e) => handleGoToCourse(e, item)}
                            className="btn maroon-btn maroon-btn-arrow"
                          >
                            Go to course
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
      <GoToCourse
        ref={goToCourseRef}
        enrollmentId={goToCourseInfo?.enrollmentId}
      />
    </>
  );
};

export default myCourse;
