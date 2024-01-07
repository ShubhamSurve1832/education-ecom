import React,{useEffect,useState} from 'react'
import Head from 'next/head'
import axios from 'axios';
import Header from '../../../components/Header'
import Footer from "../../../components/footer";
import Job from '../../../CPA/jobContent'
// import jobData from '../../../database/data/jobsData.json'
import { urlConstants as urlConstant } from '../../../constants/urlConstants';

const jobs = () => {
    //JOB DATA
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

    // useEffect(() => {
    //     axios({
    //         method: "get",
    //         url: urlConstant.getJobsData,
    //         responseType: "json",
    //     })
    //         .then((res) =>
    //             setJobDataData((prevState) => ({
    //                 jobData: res.data,
    //             }))               
    //             )
    //         .catch((err) => console.log("error is ", err.message));
    // }, []);

    // console.log(jobDataData)
    return (
        <>
            <Head>
                <title>US CMA Job Opportunities: Unlock Your Career Potential with CMA Certification</title>
                <meta content='Discover rewarding US CMA job opportunities. Unlock career growth and prospects with CMA certification. Explore diverse roles and excel in the field of management accounting.' name='description'></meta>
                <meta content='cpa course in Hyderabad, cma institute in Hyderabad, cma course fees in india, cma india, us cpa coaching in india, certified management accountant in usa, best cpa coaching centres in india, CMA job opportunities' name='keywords'></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                <link rel="canonical" href="https://simandhareducation.com/course/cma/job-opportunities" />

            </Head>
            <div className='width-50'>
                <Header showData1={true} />
            </div>
            <Job jobData={jobDataData.cmaJobs} />
            <Footer />
        </>
    )
}

export default jobs