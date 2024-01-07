import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Head from 'next/head'
import Header from '../../../components/Header'
import Footer from "../../../components/footer";
import Job from '../../../CPA/jobContent'
// import jobData from '../../../database/data/jobsData.json'
import { urlConstants as urlConstant } from '../../../constants/urlConstants';

const jobs = () => {
    const [jobDataData, setJobDataData] = useState({});
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() =>{
        try{
            let res = await axios.get(urlConstant.getJobsData);
            setJobDataData(res.data)
        }catch(error){
            console.log(error)
        }
    }
    return (
        <>
            <Head>
                <title>US CPA Job opportunities</title>
                <meta content='Simandhar Education is Established 2017 by Sripal Jain (CA, CPA (USA)) quality education to prepare aspirants for success in the CPA, CMA, EA, IFRS professional exam' name='description'></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <meta content='cpa course in Hyderabad, cma institute in Hyderabad, cma course fees in india, cma india, us cpa coaching in india, certified management accountant in usa, best cpa coaching centres in india' name='keywords'></meta>                
                <link rel="canonical" href="https://simandhareducation.com/course/cpa/job-opportunities" />
            </Head>
            <div className='width-50'>
                <Header showData={true} />
            </div>
            <Job jobData={jobDataData.cpaJobs}/>
            <Footer />

        </>
    )
}

export default jobs