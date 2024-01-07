import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import { useRouter } from "next/router";
import axios from "axios";
import { ReferralFormAPI, urlConstants } from "../constants/urlConstants";
import { formatAmount, formatTimestamp } from "../utils/index";
import { AUTH_KEY_NAME, statusConstants } from "../constants/statusCodes";
import { getCookie } from "cookies-next";
import secureLocalStorage from "react-secure-storage";
import _ from 'lodash'

const orderSuccessScreen = () => {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState(null);
  const [hasReceiptId, setHasReceiptId] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  let[courseName,setCourseName] = useState('')
  let prospectusId = secureLocalStorage.getItem('RelatedProspectId')
  let EmailId = secureLocalStorage.getItem("UserEmail")
  const { receipt } = router.query;
  // console.log("🚀 ~ file: orderSuccessScreen.js:14 ~ orderSuccessScreen ~ receipt:", receipt)

// let Name =  _.get(courseName,"courses",[])
// let NameCode =  _.get(courseName,"courses.courseCode")
// console.log("Array",Name)
// console.log("Array",NameCode)

//   console.log("Prospectus id",prospectusId)
let courseCodes = ""
for (let i= 0;i <courseName.length; i++ ){
  if (courseCodes.length > 0){

    courseCodes = (courseCodes+","+courseName[i].courseCode)
  } else {
    courseCodes = (courseName[i].courseCode)
  }
}
  console.log("course Name is here",courseName)
  console.log("courseCodes is here",courseCodes)
  const getOrderDetails = async () => {
    try {
      const headers = {
        Authorization: `${
          getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ""
        }`,
      };
      const object = {
        receipt,
      };
      // console.log("🚀 ~ file: orderSuccessScreen.js:22 ~ getOrderDetails ~ object:", object)
      const response = await axios.post(urlConstants.getOrderDetails, object, {
        headers: headers,
      });
      setIsLoading(false);
      if (response.status === statusConstants.ok) {
        // console.log("🚀 ~ file: orderSuccessScreen.js:28 ~ getOrderDetails ~ response:", response.data[0])
        setOrderDetails(response.data[0]);
        setCourseName(response?.data[0]?.cart.courses);
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: orderSuccessScreen.js:16 ~ getOrderDetails ~ error:",
        error
      );
    } finally {
      setIsLoading(false);
    }
  };
 

  let postActivityTolead = async ()=>{
    if(prospectusId !== null){
      if(courseCodes.length > 0){    
      let LeadData = [
        {
            "Attribute": "mx_Ecommerce__Course",
            "Value":courseCodes
        }                   
    ]
     try{
       const ActivityResponse = await axios.post(`https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Update?accessKey=u$rd48ef352ea46899a8fbd0d692799d020&secretKey=0795d8a796876625ecbc814b6c6e0f4e40471484&leadId=${prospectusId}`, LeadData,
         {
             headers:{"Content-Type":"application/json"}
         });
         console.log(ActivityResponse)
     } catch(err){
        console.log(err)
     } 
    }   
    }
   } 

  useEffect(() => {
    const { receipt } = router.query;
    if (receipt) {
      setHasReceiptId(true);
      getOrderDetails();
    }
  }, [receipt]);

  useEffect(() => {
    if (!hasReceiptId) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [hasReceiptId, router]);
 postActivityTolead()
  return (
    <>
      <Head>
        <title>Payment Successful - Simandhar Education</title>
        
        {/* <!-- Google tag (gtag.js) --> */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-826080113"></script> */}
        {/* <script     type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'AW-826080113');`}}
        /> */}

        <script  dangerouslySetInnerHTML={{
          __html:
          ` window.addEventListener('load',function(){
            if(window.location.pathname.indexOf("/orderSuccessScreen")!=-1){
              gtag('event', 'conversion', {
                'send_to': 'AW-826080113/BvRwCMzm_cwYEPH284kD',
                'value':parseFloat(document.querySelector("#main > section.billingCardSection > div > div.container-m.text-center > div > div.finaltotal > div.flex > p.heading03").innerText.replace(/[^0-9.]/g,'')),
                'currency': 'INR',
                'transaction_id':document.querySelector("#main > section.orderSuccessScreen > div > div > div.offer_row > div > h3").innerText.replace(/[^0-9.]/g,'')
              });
            }
          })`}}
        />

        

            
      </Head>
      <Header />
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <section className="orderSuccessScreen">
            <div className="banner">
              <div className="content">
                <div className=" resp-img-box">
                  <Image
                    loading="lazy"
                    src="/img/rightCircleicon.webp"
                    alt=""
                    fill={true}
                    sizes="100vw"
                    className="resp-img"
                  />
                </div>
                <h2 className="heading02">Payment Done Successfully</h2>
                <div className="offer_row">
                  <div className="offer_box5">
                    <h3>
                      Order No:{" "}
                      {(orderDetails && orderDetails.paymentdetails.order_id) ||
                        "NA"}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="billingCardSection">
            <div className="container">
              <div className="three-box-flex">
                <div className="box">
                  <p className="title02">Date</p>
                  <p>
                    {(orderDetails &&
                      formatTimestamp(orderDetails.orderDate)) ||
                      "NA"}
                  </p>
                </div>
                <div className="box">
                  <p className="title02">Billing address</p>
                  <p>
                    <span>
                      <b>Address : </b>
                    </span>{" "}
                    {orderDetails &&
                      orderDetails.billingAddress &&
                      orderDetails.billingAddress.address}
                    ,
                    {orderDetails &&
                      orderDetails.billingAddress &&
                      orderDetails.billingAddress.zipCode}
                  </p>
                  <p>
                    {orderDetails &&
                      orderDetails.billingAddress &&
                      orderDetails.billingAddress.state +
                        ", " +
                        orderDetails.billingAddress.country}
                  </p>
                  {/* <p><span><b>Email:</b></span> {orderDetails && orderDetails.billingAddress && orderDetails.billingAddress.email}</p> */}
                </div>
                <div className="box">
                  <p className="title02">Payment Method</p>
                  <p>
                    {(orderDetails &&
                      orderDetails.paymentdetails.method.toUpperCase()) ||
                      "NA"}
                  </p>
                </div>
              </div>

              <div className="container-m text-center">
                <h2 className="title02">Order Summary</h2>
                <div className="order-detail">
                  {/* Box Header */}
                  <div className="heading-row">
                    <p className="title02">Product</p>
                    <p className="title02">Quantity</p>
                    <p className="title02">Price</p>
                  </div>
                  {/* Order List */}
                  {orderDetails &&
                    orderDetails.cart.courses.map((course, index) => {                      
                    //   setCourseName((prevCourseName) =>
                    //   prevCourseName ? `${prevCourseName}, ${course?.title}` : course?.title
                    // );

                    // setCourseName(course?.courseCode)

                    console.log(course)

                      return (
                        <>
                          <div className="order-box">
                            <div className="heading-row orders">
                              <p className="title02">
                                {index + 1 + " "}. {course.title}
                              </p>
                              <p className="title02">1</p>
                              <p className="title02">
                                {formatAmount(course.price.totalPrice / 1.18)}
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  {/* Product Total And Tax Total */}
                  <div className="subtotal">
                    {orderDetails.billingAddress.state !== "Telangana" ? (
                      <div className="flex">
                        <p>IGST (18%)</p>
                        <p>
                          +
                          {formatAmount(
                            orderDetails &&
                              orderDetails.cart.totalPrice?.tax.igst
                          ) || 0}
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="flex">
                          <p>CGST (9%)</p>
                          <p>
                            +
                            {(orderDetails &&
                              formatAmount(
                                orderDetails.cart.totalPrice?.tax.cgst
                              )) ||
                              0}
                          </p>
                        </div>
                        <div className="flex">
                          <p>SGST (9%)</p>
                          <p>
                            +
                            {(orderDetails &&
                              formatAmount(
                                orderDetails.cart.totalPrice?.tax.sgst
                              )) ||
                              0}
                          </p>
                        </div>
                      </>
                    )}
                    {/* <div className='flex'>
                        <p className='bold'>Subtotal</p>
                        <p className='bold'>{orderDetails && formatAmount(orderDetails.cart.totalPrice?.totalPrice) || 0.00}</p>
                      </div> */}
                  </div>
                  <hr />
                  {/* Final Total */}
                  <div className="finaltotal">
                    <div className="flex">
                      <p className="title01">Total</p>
                      <p className="heading03">
                        {(orderDetails &&
                          formatAmount(
                            orderDetails.cart.totalPrice?.totalPrice
                          )) ||
                          0.0}
                      </p>
                    </div>
                    <div className="CFA">
                      <p>**Convenience Fees Applicable</p>
                    </div>
                  </div>

                  {/* <div className='download-invoice'>
                      <a className='btn maroon-btn maroon-btn-arrow mt-35'>Download Invoice</a>
                    </div> */}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default orderSuccessScreen;
