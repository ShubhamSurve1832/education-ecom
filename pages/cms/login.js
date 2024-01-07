import React, { cache, useEffect, useState } from 'react'
import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link'
import {urlConstants} from '../../constants/urlConstants'
import { Field, Form, Formik, useFormik } from "formik";
import { AdminCMSLOGIN } from "../../job/validation/Schema";
import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';
import { useRouter } from 'next/navigation';

const login = () => {

    let [showPass,setShowPass] = useState("Show");
    const ShowPassword = () =>{
       let ele =  document.getElementById('Password');
       if(ele.type==='password'){
        ele.type='text'
        setShowPass("Hide");
       }else{
        ele.type='password'
        setShowPass("Show");
       }
    }

    let [process,setProcess] = useState("Login")

    let {push,replace} = useRouter();

    
    let [show,setShow] = useState(false);
    let Exist = secureLocalStorage.getItem("CMSTk")
    const Role = secureLocalStorage.getItem("RoleAdmin")
    
    useEffect(()=>{
        if(Exist!==null){
            if(Role !=="enroll"){
                replace('/cms/Home/offer')
            }
            else{
                replace('/cms/enrolled-users')
            }
        }else{
            setShow(true)
        }
    })

    const initialValue = {
        email: "",
        password: "",
      };

      const [APIERROR,setAPISERROR] = useState("");
    
      let { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
          initialValues: initialValue,
          validationSchema: AdminCMSLOGIN,
    
          onSubmit: (values) => {
             setProcess('Loading...')
             setTimeout(() => {
                Authenticate(values,urlConstants.signIn);
             }, 1000);
          },
        });


        const Authenticate = async(LoginData,Url)=>{
            try{
                let res = await axios.post(Url,LoginData);

            if(res.status===200){
                if(res.data.role[0]==='admin' || res.data.role[0]==='staff' || res.data.role[0]==='enroll'){
                        setProcess('Access Granted')
                        secureLocalStorage.setItem('CMSTk',res.data.token);
                        secureLocalStorage.setItem('RoleAdmin',res.data.role[0]);
                        if(res.data.role[0] ==="enroll"){
                            push('/cms/Home/offer')
                        } else{
                            push('/cms/enrolled-users')
                        }
                }
            }
        }catch(error){
            setAPISERROR(error.response.data.message)
            setProcess('Login')
        }
        }

    return (
        <>
            {
                show ? 
                <>
                <Head>
                <title>Admin Login</title>
            </Head>
            <section className='job_candidatelogin-section admin-login'>
                <div className='can-login-leftbox'>
                    <Image
                        src="/img/can_login_banner.png"
                        layout="fill"
                        className="resp-img mobile "
                        alt="img"
                    />
                    <div className='box'>
                        <div className='flex'>
                            <img src="/img/adminSimanLogo.png" alt="simandhar login" />
                            <h2 className='heading'>Simandhar Education</h2>
                        </div>
                        <p>Discover a world of learning possibilities and unlock your full potential with our comprehensive online education resources.</p>

                    </div>

                </div>
                <div className='can-login-righttbox'>
                    <div className='text-center'>
                        <h3 className='heading03'>Admin Login</h3>
                        {/* <p>Don't have an account? <span><Link className="heading04" href="/job/RecruiterSignin">Sign Up</Link></span></p> */}
                    </div>

                    <form action="" className='canloginform' onSubmit={handleSubmit}>
                        <div className="input_field">
                            <input type="email" name="email" onBlur={handleBlur} onChange={handleChange} value={values.email} id="" className='w-100' placeholder='Enter Your Email ID' />
                            {errors.email && touched.email ? ( <span className="danger">{errors.email}</span> ) : ( <span className="danger">{APIERROR}</span> )}
              <br />
                        </div>
                        <div className="input_field mt-4">
                            <input type="password" name="password" id="Password" onBlur={handleBlur} onChange={handleChange} value={values.password} className='w-100' placeholder='Enter Password' />
                            <span className='pass-hideshow' onClick={ShowPassword} style={{cursor : "pointer"}}>{showPass}</span>
                            {errors.password && touched.password ? ( <span className="danger">{errors.password}</span> ) : null}
                        </div>
                        <div className="jcloginBtn mt-4 text-center">
                            <button type='submit' className='text-center btn maroon-btn maroon-btn-arrow'>{process}</button>
                        </div>
                    </form>
                    {/* <div className='login-or text-center'> <span className=' '>Or</span></div> */}
                    {/* <div className='jobsignup-google'>
                    <Link href="/shoppingCart"><Image src="/img/google-login.png" alt="" layout="fill" className='resp-img text-center' /></Link>
                    </div> */}
                </div>
            </section></>  
            : 
            <h1 className="heading03 text-center mt-4"><img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="Loader" /></h1>
            }
        </>
    )
}

export default login