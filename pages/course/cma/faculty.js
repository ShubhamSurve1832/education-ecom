import React,{useState,useEffect} from 'react'
import axios from 'axios';  
import Head from 'next/head'
import Header from '../../../components/Header'
import Footer from "../../../components/footer";
import FacultyContent from '../../../CPA/FacultyContent'
import RegisterForm from '../../../components/registrationForm'
import facultyData from '../../../database/data/faculty.json'
import { urlConstants as urlConstant } from '../../../constants/urlConstants';



const faculty = () => {
    const [facultyData, setFacultyData] = useState({})
    useEffect(()=>{
       fetchData()
    },[])
    let fetchData = async () =>{
       let res = await axios.get(urlConstant.getFacultyData)        
       setFacultyData({...res.data})
    }
    return (
        <>
            <Head>
                <title>Expert CMA Faculty at Simandhar: Guiding Your Path to CMA Success</title>
                <meta content='Meet our accomplished CMA faculty at Simandhar. Benefit from their expertise and guidance to excel in your CMA journey and achieve professional success.' name='description'></meta>
                <meta content='CMA faculty, Experienced instructors, Subject matter experts, CMA experts, CMA guidance, Professional educators, CMA coaching, CMA preparation, CMA success CMA mentoring' name='keywords'></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
            <link rel="canonical" href="https://simandhareducation.com/course/cma/faculty" />           
            </Head>
            <div className='width-50'>
                <Header showData1={true} />
            </div>
            <FacultyContent facultyData={facultyData.cmaPage}/>
            <RegisterForm formName="CMA Faculty form"/>


            <Footer/>
        </>
    )
}

export default faculty