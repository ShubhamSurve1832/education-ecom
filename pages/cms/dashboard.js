import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import SideTab from "../../Dashboard/SideTab";
import { useState, useRef } from "react";
import blank_image_For_banner_page from "../../public/img/blank_image_For_banner_page.png";
import { useEffect } from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import AdminWithAuth from "./AdminAuthRoute";
import dynamic from "next/dynamic";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-hot-toast";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import { S3_buckets, cmsConstats, urlConstants,API_BASE_URL } from "../../constants/urlConstants";

const dashboard = () => {
    let Token = secureLocalStorage.getItem("CMSTk");
    let [data,setData] = useState()

   useEffect(()=>{
    fetchdata()
   },[])

   let fetchdata = async () => {
    try{
    let response = await axios.post(`${API_BASE_URL}admin/getDashboardData`,{},{
        headers :{
            'Authorization': `JWT ${Token}`
        }
    })

    setData(response?.data?.data)
        } catch (err){
    console.log(err)
    }
   }

  return (
    <>
      <Head>
        <title>Dashboard : Simandhar Education</title>
      </Head>
      <SideTab />
      <section className="section fixedPadd dashboard-cms">
        <div className="container">
          {/* <h2 className="heading03">Simandhar Dashboard</h2> */}
          <div className="grid">
            <div className="grid-box">
              <div className="flex space-between align-center">
                <h2 className="heading04">Total Courses</h2>
                <div className="addwrap text-center">
                  <a
                    className="btn white-btn white-btn-arrow"
                  >
                    View more
                  </a>
                </div>
              </div>
              <div className="content-box">
                <h2 className="heading03"> {data?.TotalCourses} <span>Number Of Courses</span></h2>
              </div>
            </div>
            <div className="grid-box">
              <div className="flex space-between align-center">
                <h2 className="heading04">Total Sale</h2>
                <div className="addwrap text-center">
                  <a
                    className="btn white-btn white-btn-arrow"
                  >
                    View more
                  </a>
                </div>
              </div>
              <div className="content-box">
                <h2 className="heading03">{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'INR' }).format(data?.TotalSale)} <span>Total Revenue</span></h2>
              </div>
            </div>
          </div>
          <div className="grid">
            <div>
              <div className="grid-box">
                <div className="flex space-between align-center">
                  <h2 className="heading04">Total Users</h2>
                  <div className="addwrap text-center">
                    <a
                      className="btn white-btn white-btn-arrow"

                    >
                      View more
                    </a>
                  </div>
                </div>
                <div className="content-box">
                    <h2 className="heading03">{data?.TotalUser} <span>Users</span></h2>
              </div>
              </div>
              <div className="grid-box">
                <div className="flex space-between align-center">
                  <h2 className="heading04">Top 5 Courses</h2>
                  <div className="addwrap text-center">
                    <a
                      className="btn white-btn white-btn-arrow"

                    >
                      View more
                    </a>
                  </div>
                </div>
                <div className="content-box">
                  {
                    data?.TopFiveCourses && data?.TopFiveCourses.map((data,ind)=>{                    
                      let {courseCode,title} = data;
                      return(
                        <>
                        <div className="row">

                        <span>{ind + 1 }</span> . <span>{title}</span><br/>
                        </div>
                        </>
                      )
                    })
                  }
              </div>
              </div>
            </div>
            <div>
              <div className="grid-box">
                <div className="flex space-between align-center">
                  <h2 className="heading04">Recent 5 Sales</h2>
                  <div className="addwrap text-center">
                    <a
                      className="btn white-btn white-btn-arrow"

                    >
                      View more
                    </a>
                  </div>
                </div>
                <div className="content-box">
                {
                    data?.FiveRecentSale && data?.FiveRecentSale.map((data,ind)=>{                    
                      let {studentName,orderDate} = data;
                      let date = new Date(orderDate).toLocaleDateString()
                      return(
                        <div className="row">
                       <span>{ind + 1}.</span> <span> {studentName}</span> <span>{date}</span> <br/>
                        </div>
                      )
                    })
                  }
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dashboard;
