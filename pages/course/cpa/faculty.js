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
                <title>Simandhar CPA faculty</title>
                <meta content='Experience top-notch education with Simandhar exceptional faculty, empowering you to achieve your professional goals.' name='description'></meta>
                <meta content='cpa course in Hyderabad, cma institute in Hyderabad, cma course fees in india, cma india, us cpa coaching in india, certified management accountant in usa, best cpa coaching centres in india' name='keywords'></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <link rel="canonical" href="https://simandhareducation.com/course/cpa/faculty" />
            </Head>
            <div className='width-50'>
                <Header showData={true} />
            </div>
            <FacultyContent facultyData={facultyData.cpaPage}/>
            <RegisterForm formName="CPA Faculty form" />

            <Footer/>
        </>
    )
}

export default faculty