import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/footer";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { EnrollFormSchema } from "../job/validation/Schema";
import { Country, State, City } from "country-state-city";
import { Field, Form, Formik, useFormik } from "formik";
import CheckOutPopup from "./checkout-popup";
import { API_BASE_URL, urlConstants } from "../constants/urlConstants";
import { loadRazorpay } from "../utils/razorpay";
import { AUTH_KEY_NAME, statusConstants } from "../constants/statusCodes";
import { useRouter } from "next/router";
import { listOfCountries } from "../constants/place";
import { toast } from "react-hot-toast";
const EnrollPage = () => {
  const router = useRouter();
  let handleRefresh = () => {
    router.reload();
  };
  let [thankYou, setThankYou] = useState(false);
  const [isToggled, setIsToggled] = useState(true);
  const [show, setShow] = useState(true);
  const [termsConditions, settermsConditions] = useState(false);
  const [termsConditionsError, settermsConditionsError] = useState("");
  const [showOnlinePayment, setShowOnlinePayment] = useState(false);
  const [btnText, setBtnText] = useState("Continue");
  const [openSection, setOpenSection] = useState(null);
  let [popup, setpopup] = useState(false);
  let [agree, setagree] = useState(false);
  let [checkOutBtn, setCheckoutBtn] = useState(false);
  const [emailVarify, setEmailVarify] = useState("");
  const [orderId, setOrderId] = useState("");
  const [receiptId, setReceipt] = useState("");
  const [amountError, setAmountError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [validation, setValidation] = useState(false);
  const [card, setCard] = useState("");
  const [paymentMethod, setpaymentMethod] = useState("");
  const [profession, setProfession] = useState("");

  const handleProf = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
  };

  // FORMIC VALIDATION
  const [obj, setObj] = useState({
    state: "",
    country: "",
    Counsellor: "",
    Course: "",
    PaymentMethod: "",
    Profession: "",
  });
  //Checking AMOUNT and COMAPNY NAME validation
  const isValid = () => {
    const errors = {};
    if (obj.PaymentMethod === "") {
      setAmountError("Please Select Amount");
    }
    if (profession === "professional") {
      setCompanyError("Please Select Company Name");
    }
    return Object.keys(errors).length === 0;
  };
  
  const [newData, setNewData] = useState({});
  var initialValue = {
    fullName: "",
    email: "",
    phoneNo: "",
    addressL1: "",
    addressL2: "",
    city: "",
    amount: "",
    Pincode: "",
    companyName: "",
  };
  const [formData, setFormData] = useState({ ...initialValue, ...obj });
  const clearState = () => {
    setObj({
      state: "",
      country: "",
      Counsellor: "",
      Course: "",
      Profession: "",
      PaymentMethod: "",
    });
  };

  let { handleSubmit, errors, touched, values, handleChange, handleBlur, setValues, resetForm,} = useFormik({
    initialValues: formData, validationSchema: EnrollFormSchema,
    onSubmit: (values) => {
      setpaymentMethod(values.PaymentMethod);
      setProfession(values.Profession);
      let data = {
        full_name: values.fullName,
        email: values.email,
        phone: values.phoneNo,
        address_line1: values.addressL1,
        address_line2: values.addressL2,
        city: values.city,
        state: values.state,
        country: values.country,
        amount: values.PaymentMethod === "Loan" ? 0 : values.amount,
        zip_code: values.Pincode,
        counsellor_name: values.Counsellor,
        course_name: values.Course,
        profession:values.Profession !== "professional" ? "Student" : values.Profession,
        company_name: values.companyName,
        terms_and_conditions: termsConditions,
        payment_type: values.PaymentMethod,
      };
      if (termsConditions) {       
        if(data.amount===''){
          toast.error("Please Enter Amount");
        }else{        
        if(data.profession==='professional' && data.company_name ==="" ){
          toast.error("Please enter the Company Name");
        }else{      
          setValidation(true);
          settermsConditionsError("");
          enrollCandidateForm(data);   
        }    
      }
      } else {
        settermsConditionsError("Agree to Terms and Conditions.");
      }
    },
  });

  const enrollCandidateForm = async (enrollData) => {
    try {
      // console.log("enrollData",enrollData)

      const response = await axios.post(
        `${API_BASE_URL}enroll/add`,
        enrollData
      );
      if (response.status === 201) {
        setOrderId(response.data.orderId);
        setReceipt(response.data.receipt);
        if (values.PaymentMethod === "Online") {
          // console.log("payment method online");
          setShowOnlinePayment(true);
        } else {
          handleThankYPopUp();
          // console.log("payment method offline");
        }
        clearState();
      }
    } catch (err) {
      toast.error(err?.response?.data?.errors[0]?.msg)
    }
  };

  // EMAIL VERIFY
  const handleEmail = (e) => {
    setEmailVarify({ ...emailVarify, [e.target.name]: e.target.value });
  };
  let handleEmailVerify = (e) => {
    e.preventDefault();
    enrolledCandidate();
  };
  const enrolledCandidate = async () => {
    let object = {
      email: emailVarify.Vemail,
    };
    const response = await axios.post(
      `${API_BASE_URL}enroll/getUserByEmail`,
      object
    );
    try {
      if (response.status === 200) {
        setShow(true);
        setNewData(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSectionClick = (sectionIndex) => {
    if (sectionIndex === openSection) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionIndex);
    }
  };

  const handleNewEnrolled = () => {
    setShow(true);
  };
  const handleAlreadyEnrolled = () => {
    setShow(false);
  };
  const handleThankYPopUp = () => {
    setThankYou(!thankYou);
  };
  const closeThankYPopUp = () => {
    setThankYou(false);
    handleRefresh();
  };
  const handleCardSelect = (e) => {
    setCard(e.target.value);
  };

  // TERMS ADN CONDITION POP UP
  const handleCheckBtn = () => {
    if (!agree) {
      setagree(true);
      setpopup(true);
      setCheckoutBtn(true);
    } else {
      setagree(false);
      setpopup(false);
      setCheckoutBtn(false);
    }
  };
  const HandleClosePopup = () => {
    setagree(false);
    setpopup(false);
    setCheckoutBtn(false);
    settermsConditions(false);
  };
  const handleAgreeBtnInPopup = () => {
    setagree(true);
    setpopup(false);
    setCheckoutBtn(true);
  };

  // SETTING ALREADY ENROLLED DATA TO FORM
  useEffect(() => {
    if (newData) {
      const existingData = {
        fullName: newData?.fullName,
        email: newData?.email,
        phoneNo: newData?.mobileNumber,
        addressL1: "",
        addressL2: "",
        city: newData?.city,
        state: "",
        amount: "",
        Pincode: "",
        Counsellor: "",
        Course: "",
        companyName: "",
        Profession: "",
        PaymentMethod: "",
      };
      setValues(existingData);
    }
  }, [newData]);

  const verifyPaymentResponse = async (object) => {
    let verifyPayment = await axios.post(
      `${API_BASE_URL}enroll/verifyPayment`,
      object
    );
    // console.log("VERIFY PAYMENT RES",verifyPayment)
    if (verifyPayment.status === 200) {
      router.push("/thankyou");
    } else {
      toast.error("Unable to verify the payment!");
    }

    // push('/thanyou')
  };

  //  RAZOR PAY INTEGRATION
  let handleRazorPay = async (e) => {
    const { Razorpay } = await loadRazorpay(); // Load Razorpay script dynamically
    let object;
    if (orderId && receiptId) {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_APY_KEY,
        amount: values.amount || 0,
        currency: process.env.NEXT_PUBLIC_CURRENCY_KEY,
        name: process.env.NEXT_PUBLIC_STORE_NAME,
        description: "Purchase Description",
        order_id: orderId,
        handler: async (response) => {
          console.log(
            "🚀 ~ file: checkout.js:79 ~ handler: ~ response:",
            response
          );
          if (response.razorpay_payment_id) {
            // console.log('Payment has been completed successfully!');
            try {
              object = {
                paymentSucess: "success",
                orderId: orderId,
                receiptId: receiptId,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              };
              await verifyPaymentResponse(object);
            } catch (err) {}
          } else {
            console.log("Payment has been failed!");
          }
        },
        // prefill: {
        //     name: JSON.parse(localStorage.getItem(AUTH_KEY_NAME)).fullName || '',
        //     email: JSON.parse(localStorage.getItem(AUTH_KEY_NAME)).email || '',
        //     contact: JSON.parse(localStorage.getItem(AUTH_KEY_NAME)).contact || '',
        // },

        // readonly:
        // {
        //     email:true,
        //     contact:true
        // }
      };
      const razorpayInstance = new Razorpay(options);
      razorpayInstance.on("payment.failed", async function (response) {
        object = {
          paymentSucess: "failure",
          code: response.error.code,
          description: response.error.description,
          source: response.error.source,
          step: response.error.step,
          reason: response.error.reason,
          orderId: response.error.metadata.order_id,
          paymentId: response.error.metadata.payment_id,
          receiptId: receiptId,
        };

        await verifyPaymentResponse(object);
      });

      razorpayInstance.open();
    } else {
      toast.error("Unable to create your order!");
    }
  };

  return (
    <>
      <Head>
        <title>Enrollment - Payment Gateway | Simandhar Education</title>
      </Head>
      <Header />
      {/* <iframe src="/pmt/simpmt2.html" width="100%" height="1800px" scrolling="no" /> */}
      <div className="pay_body">
        <i className="pay_header_bg"></i>
      </div>
      <div className="pay_container">
        <div className="per_info">
          <div className="pay_header">
            <div className="pay_logo">
              <Image
                src="/img/logo.png"
                layout="fill"
                className="resp-img"
                alt="Simandhar logo"
              />
            </div>
          </div>
          <div className="clear"></div>
          <div className="pay_pagination">
            <span className="tab1 active">Your Details</span>
            <span className="pay_nextpage">
              <FaAngleRight />
            </span>
            <span className="tab2">Charges Info</span>
            <span className="pay_nextpage">
              <FaAngleRight />
            </span>
            <span className="tab3">Payment</span>
          </div>
          <div className="block2">
            <div className="info_dtl">
              <div className="payment_info">
                {!showOnlinePayment ? (
                  <div>
                    <div className="pay-ins-div">
                      <span className="pay_instance">
                        <input
                          onClick={handleNewEnrolled}
                          defaultChecked
                          type="radio"
                          name="pay_instance"
                          id="pay_instance"
                        />
                        <label for="ccavenue">
                          <i className="ccavenue"></i> New Enrollment
                        </label>
                      </span>
                      <span className="pay_instance">
                        <input
                          onClick={handleAlreadyEnrolled}
                          type="radio"
                          name="pay_instance"
                          id="pay_instance"
                        />
                        <label for="ccavenue">
                          <i className="ccavenue"></i> Already Enrolled
                        </label>
                      </span>
                    </div>
                    {show ? (
                      <form
                        action=""
                        className="personal_info"
                        onSubmit={handleSubmit}
                      >
                        <div className="col-md-12 p-top">
                          <h2 className="heading06">Personal Information</h2>
                        </div>
                        <div>
                          <input
                            className="w-100"
                            type="text"
                            placeholder="Name"
                            id=""
                            name="fullName"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.fullName}
                          />
                          {errors.fullName && touched.fullName ? (
                            <span className="danger">{errors.fullName}</span>
                          ) : null}
                          <br />
                        </div>

                        <div className="d-flex">
                          <div className="w-100">
                            <input
                              type="text"
                              placeholder="Email"
                              id=""
                              name="email"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.email}
                            />
                            {errors.email && touched.email ? (
                              <span className="danger">{errors.email}</span>
                            ) : null}
                          </div>

                          <div className="w-100">
                            <input
                              type="text"
                              placeholder="Phone Number"
                              id=""
                              name="phoneNo"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.phoneNo}
                            />
                            {errors.phoneNo && touched.phoneNo ? (
                              <span className="danger">{errors.phoneNo}</span>
                            ) : null}
                          </div>
                        </div>

                        <div className="note">
                          <p>
                            Note: Please don't fill the Email ID already used in
                            Becker demo. Mention accurate and complete address
                            for timely book shipping*
                          </p>
                        </div>
                        <div className="col-md-12 p-top">
                          <h2 className="heading06">Address</h2>
                        </div>
                        <div>
                          <input
                            className="w-100"
                            type="text"
                            placeholder="Address Line 1"
                            name="addressL1"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.addressL1}
                          />
                          {errors.addressL1 && touched.addressL1 ? (
                            <span className="danger">{errors.addressL1}</span>
                          ) : null}

                          <input
                            className=""
                            type="text"
                            placeholder="Address Line 2"
                            name="addressL2"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.addressL2}
                          />
                          {errors.addressL2 && touched.addressL2 ? (
                            <span className="danger">{errors.addressL2}</span>
                          ) : null}
                        </div>
                        <div className="d-flex">
                          <div className="w-100">
                            <input
                              type="text"
                              placeholder="Your city Name"
                              name="city"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.city}
                            />
                            {errors.city && touched.city ? (
                              <span className="danger">{errors.city}</span>
                            ) : null}
                          </div>

                          <div className="w-100">
                            <select
                              name="state"
                              className="pay_city"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.state}
                            >
                              <option value="">Select State</option>
                              <option value="Andaman and Nicobar Islands">
                                Andaman and Nicobar Islands
                              </option>
                              <option value="Andhra Pradesh">
                                Andhra Pradesh
                              </option>
                              <option value="Arunachal Pradesh">
                                Arunachal Pradesh
                              </option>
                              <option value="Assam">Assam</option>
                              <option value="Bihar">Bihar</option>
                              <option value="Chandigarh">Chandigarh</option>
                              <option value="Chhattisgarh">Chhattisgarh</option>
                              <option value="Dadra and Nagar Haveli">
                                Dadra and Nagar Haveli
                              </option>
                              <option value="Daman and Diu">
                                Daman and Diu
                              </option>
                              <option value="Delhi">Delhi</option>
                              <option value="Goa">Goa</option>
                              <option value="Gujarat">Gujarat</option>
                              <option value="Haryana">Haryana</option>
                              <option value="Himachal Pradesh">
                                Himachal Pradesh
                              </option>
                              <option value="Jammu and Kashmir">
                                Jammu and Kashmir
                              </option>
                              <option value="Jharkhand">Jharkhand</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Kerala">Kerala</option>
                              <option value="Lakshadweep">Lakshadweep</option>
                              <option value="Madhya Pradesh">
                                Madhya Pradesh
                              </option>
                              <option value="Maharashtra" selected>
                                Maharashtra
                              </option>
                              <option value="Manipur">Manipur</option>
                              <option value="Meghalaya">Meghalaya</option>
                              <option value="Mizoram">Mizoram</option>
                              <option value="Nagaland">Nagaland</option>
                              <option value="Orissa">Orissa</option>
                              <option value="Pondicherry">Pondicherry</option>
                              <option value="Punjab">Punjab</option>
                              <option value="Rajasthan">Rajasthan</option>
                              <option value="Sikkim">Sikkim</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="Tripura">Tripura</option>
                              <option value="Telangana">Telangana</option>
                              <option value="Uttaranchal">Uttaranchal</option>
                              <option value="Uttar Pradesh">
                                Uttar Pradesh
                              </option>
                              <option value="West Bengal">West Bengal</option>
                              <option value="Others">Others</option>
                            </select>
                            {errors.state && touched.state ? (
                              <span className="danger">{errors.state}</span>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-flex">
                          {/* <div className='w-100'>
                                        <select id="select-course" name="country" placeholder='Select country' onChange={(e) => { setObj({ ...obj, country: e.target.value }) }}>
                                                        <option value="" selected>Select country</option>
                                                        {
                                                            listOfCountries
                                                                .sort((a, b) => a.localeCompare(b))
                                                                .map((country, index) => (
                                                                    <option value={country} key={index}>
                                                                        {country}
                                                                    </option>
                                                                ))
                                                        }
                                                    </select>
                                                    {error && error.country && <span className='danger'>{error.country}</span>}
                                        </div> */}

                          <div className="w-100">
                            <input
                              type="text"
                              placeholder="Your Zip Code"
                              name="Pincode"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.Pincode}
                            />
                            {errors.Pincode && touched.Pincode ? (
                              <span className="danger">{errors.Pincode}</span>
                            ) : null}
                          </div>
                        </div>

                        <div className="col-md-12 p-top mt-2">
                          <h2 className="heading06">
                            Counsellor and Course Details
                          </h2>
                        </div>
                        <div className="d-flex mt-2">
                          <div className="w-100">
                            <select
                              name="Counsellor"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="pay_city"
                              value={values.Counsellor}
                            >
                              <option value="">Select Counsellor</option>
                              <option value="Anuhya B">Anuhya B</option>
                              <option value="Divya Sri ">Divya Sri</option>
                              <option value="Emmanuel Raj">
                                Emmanuel Raj{" "}
                              </option>
                              <option value="Parshuram ">Parshuram </option>
                              <option value="Radha">Radha</option>
                              <option value="Rajashree">Rajashree</option>
                              <option value="Samyuktha ">Samyuktha </option>
                              <option value="Sandhya ">Sandhya </option>
                              <option value="ShailajaByakodi">
                                Shailaja Byakodi
                              </option>
                              <option value="sireesha">Sireesha</option>
                              <option value="Sowmya">Sowmya</option>
                              <option value="Others">Others</option>
                            </select>
                            {errors.Counsellor && touched.Counsellor ? (
                              <span className="danger">
                                {errors.Counsellor}
                              </span>
                            ) : null}
                          </div>
                          <div className="w-100">
                            <select
                              name="Course"
                              className="pay_city"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.Course}
                            >
                              <option value="">Select Course</option>
                              <option value="CPA">CPA</option>
                              <option value="CMA">CMA</option>
                              <option value="CIA">CIA</option>
                              <option value="IFRS">IFRS</option>
                              <option value="EA">EA</option>
                              <option value="ACCA">ACCA</option>
                              <option value="Data-Analytics">
                                Data-Analytics
                              </option>
                              <option value="Others">Other</option>
                            </select>
                            {errors.Course && touched.Course ? (
                              <span className="danger">{errors.Course}</span>
                            ) : null}
                          </div>
                        </div>
                        <div className="w-100">
                          <div className="col-md-12 p-top mt-2">
                            <h2 className="heading06">Select Payment Method</h2>
                          </div>
                          {/* <div className='professional mt-2'> */}
                          <select
                            name="PaymentMethod"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.PaymentMethod}
                          >
                            <option value="">Select Payment Method</option>
                            <option value="Cash">Cash</option>
                            <option value="Online">Online Payment</option>
                            <option value="Loan">Loan</option>
                            <option value="Others">Others</option>
                          </select>
                          {errors.PaymentMethod && touched.PaymentMethod ? (
                            <span className="danger">
                              {errors.PaymentMethod}
                            </span>
                          ) : null}
                          {/* </div> */}
                        </div>
                        <div className="col-md-12 p-top mt-2">
                          <h2 className="heading06">Amount</h2>
                        </div>
                        <div>
                          <input
                            name="amount"
                            className="pay_city w-100"
                            type="val"
                            maxlength="7"
                            // required="Please Enter Amount"
                            placeholder="Enter Amount in INR"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            disabled={values.PaymentMethod === "Loan"}
                            defaultValue={
                              values.PaymentMethod === "Loan" && "0"
                            }
                            value={
                              values.PaymentMethod === "Loan"
                                ? 0
                                : values.amount
                            }
                          />
                          {obj.PaymentMethod !== "Loan" &&
                          amountError.length &&
                          obj.PaymentMethod === "" > 0 ? (
                            <span className="danger">{amountError}</span>
                          ) : null}
                        </div>
                        <div className="col-md-12 p-top mt-2">
                          <h2 className="heading06">Profession</h2>
                        </div>
                        <div className="professional mt-2">
                          <select
                            name="Profession"
                            id="profession"
                            className=""
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.Profession}
                          >
                            <option value="">Select Profession</option>
                            <option value="student">
                              <span id="select">Student</span>
                            </option>
                            <option value="professional">
                              <span id="select">Professional</span>
                            </option>
                          </select>
                          {errors.Profession && touched.Profession ? (
                            <span className="danger">{errors.Profession}</span>
                          ) : null}
                        </div>
                        {values.Profession === "professional" ? (
                          <>
                            <div className="col-md-12 p-top mt-2 Profession">
                              <h2 className="heading06">Company Name</h2>
                            </div>
                            <div className="Profession">
                              <input
                                className="w-50"
                                type="text"
                                placeholder="Enter Company Name"
                                name="companyName"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.companyName}
                              />
                              {companyError ? (
                                <span className="danger">{companyError}</span>
                              ) : null}
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                        <div className="flex t-and-c mt-4 pointer">
                          {agree ? (
                            <input
                              onClick={handleCheckBtn}
                              className="pointer checkbox mt-0"
                              type="checkbox"
                              checked
                              name="termsConditions"
                              value={values.termsConditions}
                              onChangeCapture={(e) => {
                                settermsConditions(() =>
                                  termsConditions ? false : true
                                ),
                                  settermsConditionsError("");
                              }}
                            />
                          ) : (
                            <input
                              onClick={handleCheckBtn}
                              className="pointer checkbox mt-0"
                              type="checkbox"
                              name="termsConditions"
                              value={values.termsConditions}
                              onChangeCapture={(e) => {
                                settermsConditions(() =>
                                  termsConditions ? false : true
                                ),
                                  settermsConditionsError("");
                              }}
                            />
                          )}
                          <p href="" target="_blank">
                            <label>
                              I agree to the <span>Terms and Conditions.</span>
                            </label>
                          </p>
                        </div>
                        {termsConditionsError && (
                          <span className="danger">{termsConditionsError}</span>
                        )}
                        <br />
                        <div
                          className={`agree-popup ${popup && "active"}`}
                          id="agree-popup"
                        >
                          <CheckOutPopup
                            closePopup={HandleClosePopup}
                            agreePopup={handleAgreeBtnInPopup}
                          />
                        </div>

                        <div className="continue_container">
                          <div className="pay_continue" id="continue-btn">
                            <input
                              className={checkOutBtn ? "" : "disabled"}
                              type="submit"
                              value={btnText}
                              id="next1"
                            />
                          </div>
                        </div>
                      </form>
                    ) : (
                      <div id="user_details2">
                        <form
                          className="personal_info"
                          onSubmit={handleEmailVerify}
                        >
                          <p>
                            <input
                              type="text"
                              name="Vemail"
                              id="verify_email"
                              placeholder="Email"
                              onChange={(e) => handleEmail(e)}
                              className="pay_email"
                            />
                          </p>
                          <p>
                            <span id="error-email"></span>
                          </p>

                          <p className="verify-btn">
                            <input
                              type="submit"
                              name="verify-enrolment"
                              className="btn btn-primary text-white"
                              value="Verify"
                            />
                          </p>
                          <div className="continue_container">
                            <div className="pay_continue" id="continue-btn">
                              <input type="submit" value={btnText} id="next2" />
                            </div>
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                ) : (
                  ""
                )}

                <div className="clear"></div>
                {showOnlinePayment ? (
                  <div className="payment_info">
                    <div className="panel-group">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <div
                            className="panel-title pointer"
                            onClick={() => handleSectionClick(0)}
                          >
                            <a role="button">RazorPay</a>
                          </div>
                        </div>
                        {openSection === 0 && (
                          <div
                            className={
                              "panel-body" + " " + (isToggled ? "active" : "")
                            }
                          >
                            <div className="payment_info">
                              <select
                                className="cardType"
                                name=""
                                id="card_type"
                                onChange={(e) => handleCardSelect(e)}
                                onchange="calculate()"
                              >
                                <option value="" selected="selected">
                                  Select Card Type
                                </option>
                                <option value="Razorpay">
                                  Razorpay Method
                                </option>
                                {/* <!-- <option value="0.40" data-card_val='1'>Debit Cards</option>
                                                        <option value="1.0236">Domestic Credit & Debit cards on Visa, Mastercard, Maestro RuPay</option>
                                                        <option value="1.0236" data-card_val='2'>Wallets: Freecharge, Mobikwik, OlaMoney, Jiomoney, Paytm, PayZapp, Jana Cash, SBI Buddy</option>
                                                        <option value="1.0236" data-card_val='3'>Google Pay, Phone Pay, IMPS/UPI and NetBanking </option>
                                                        <option value="1.0118" data-card_val='4'>
                                                            Credit Cards (Visa/Master/Rupay)  </option>
                                                        <option value="1.03245" data-card_val='5'>International Credit Cards on Visa, Mastercard, AMEX, American Express, Corporate Cards, JCB and Diners Club</option> --> */}
                              </select>
                              <p>
                                <input
                                  id="amount2"
                                  name="amount2"
                                  className="form-control"
                                  type="number"
                                  maxlength="7"
                                  placeholder="Enter Amount in INR"
                                  disabled="disabled"
                                  value={values.amount}
                                />
                              </p>
                            </div>
                            <div className="pay_course d-none">
                              <p>
                                <strong>
                                  Note: List of Debit Card payments which are
                                  not allowed
                                </strong>
                              </p>
                              <ul>
                                <li>INDIAN BANK</li>
                                <li>IOB DEBIT CARD</li>
                                <li>IDFC FIRST DEBIT CARD</li>
                                <li>ANDHRA BANK</li>
                              </ul>
                            </div>
                            <div className="continue_container razorpay">
                              <div className="pay_continue ">
                                {" "}
                                <input
                                  disabled={card !== "Razorpay" ? true : false}
                                  className={
                                    card !== "Razorpay" ? "disabled" : "pointer"
                                  }
                                  onClick={handleRazorPay}
                                  value="Make Payment"
                                  id="pay-ccavenue"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <div
                            className="panel-title pointer"
                            onClick={() => handleSectionClick(1)}
                          >
                            <a role="button">Internet Banking (RTGS/NEFT )</a>
                          </div>
                        </div>
                        {openSection === 1 && (
                          <div
                            className={
                              "panel-body" + " " + (isToggled ? "active" : "")
                            }
                          >
                            <div className="clearfix"></div>
                            <div>
                              <div className="pay_options">
                                <h3 className="bg-info">Bank Account Name</h3>
                                <p>SIMANDHAR EDUCATION LLP</p>
                                <hr />
                                <h3>
                                  Bank Name{" "}
                                  <span className="text-primary">AXIS</span>
                                </h3>
                                <hr />
                                <h3>Branch Address</h3>
                                <p>
                                  PLOT NO C2, GROUND FLOOR, VIKRAMPURI MAIN
                                  ROAD, NEAR SECUNDERABAD CLUB HOUSE,
                                  SECUNDERABAD 500009
                                </p>
                                <hr />
                                <h3>
                                  Account Number <span>917020061587365</span>
                                </h3>
                                <hr />
                                <h3>
                                  RTGS/NEFT IFSC Code <span>UTIB0003281</span>
                                </h3>
                                <hr />
                                <h3>
                                  Account Type <span>Current</span>
                                </h3>
                                <hr />
                                <h3>
                                  Swift Code <span>AXISINBB068</span>
                                </h3>
                                <hr />
                                <hr />
                                <hr />
                              </div>
                            </div>

                            <div>
                              <div className="pay_options">
                                <h3 className="bg-info">Bank Account Name</h3>
                                <p>SIMANDHAR EDUCATION LLP</p>
                                <hr />
                                <h3>
                                  Bank Name{" "}
                                  <span className="text-primary">HDFC</span>
                                </h3>
                                <hr />
                                <h3>
                                  Account Number <span>50200037890047</span>
                                </h3>
                                <hr />
                                <h3>
                                  RTGS/NEFT IFSC Code <span>HDFC0000621</span>
                                </h3>
                                <hr />
                                <h3>
                                  Account Type <span>Current</span>
                                </h3>
                                <hr />
                                <hr />
                                <hr />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className='panel panel-default pointer' onClick={() => handleSectionClick(2)}>
                                            <div className='panel-heading'>
                                                <div className='panel-title'>
                                                    <a role="button">UPI Payment</a>
                                                </div>
                                            </div>
                                            {openSection === 2 && ( 
                                            <div className={"panel-body" + " " + (isToggled ? "active": "")}><img src="https://www.simandhareducation.com/pmt/Payment%20Simandhar%20Education_files/upi.png" className="img img-responsive" alt="simandhar_pay_tm" /></div> )}
                                        </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className="continue_container">
                  <div className="pay_option">
                    <img
                      src="https://www.simandhareducation.com/pmt/Payment%20Simandhar%20Education_files/pay_option_icon.png"
                      alt="pay option icon"
                    />
                  </div>
                </div>
              </div>

              {/* FAQ's */}
              <div className="pay_faqs_container desktop_pay_faqs">
                <h2>FAQs</h2>
                <i className="pay_faqs_border"></i>
                <div className="pay-faq-grid">
                  <div className="pay_faqs">
                    <h3>When will I receive the login access to the course?</h3>
                    <p>
                      You will receive the login access within two business days
                      after we receive the payment.
                    </p>
                  </div>
                  <div className="pay_faqs">
                    <h3>
                      How can I reach the Customer Service Team for my issues?
                    </h3>
                    <p>
                      You can contact our customer service team at{" "}
                      <a href="tel:+91-8977633523">+91-8977633523</a>
                      {/* <!--or you can write us an email at <a href="mailto:info@simandhareducation.com">accounts@simandhareducation.com</a>--> */}
                    </p>
                  </div>
                  <div className="pay_faqs">
                    <h3>
                      Whom should I contact in case of any purchase related
                      query?
                    </h3>
                    <p>
                      Please contact the sales executive or drop a mail to{" "}
                      <a href="mailto:accounts@simandhareducation.com">
                        accounts@simandhareducation.com
                      </a>
                    </p>
                  </div>
                  <div className="pay_faqs">
                    <h3>
                      Do I get a certificate of participation at the end of the
                      training program?
                    </h3>
                    <p>
                      Yes, we do provide you with a certificate of participation
                      for all our skill based programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="pay_price">
                    <div className='pay_summary'>
                        <h5>Summary</h5>
                    </div>
                </div> */}
      </div>

      <div
        className="download-overlay"
        style={{ display: thankYou ? "Block" : "none" }}
      ></div>
      <div
        className="download-popup thank-you-pop-up"
        style={{ display: thankYou ? "Block" : "none" }}
      >
        <span id="ClosePopUp" className="pointer" onClick={closeThankYPopUp}>
          <AiOutlineCloseCircle />
        </span>
        <div>
          <p className="pop-up">Thank You...!</p>
          <p className="text-center">
            {" "}
            Your submission is received and we will contact you soon, once the
            payment is done.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EnrollPage;
