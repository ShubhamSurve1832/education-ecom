import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'
import indexData from '../../../database/index.json'
import { urlConstants as urlConstant } from '../../../constants/urlConstants';
import dynamic from "next/dynamic";
// import HelpSection from '../../../CPA/HelpSection'
// import RegisterForm from '../../../components/registrationForm'

const CurriculumSection = dynamic(() => import('../../../CPA/CurriculumSection'))
const Header = dynamic(() => import('../../../components/Header'))
const Footer = dynamic(() => import('../../../components/footer'))
const HelpSection = dynamic(() => import('../../../CPA/HelpSection'))
const RegisterForm = dynamic(() => import('../../../components/registrationForm'))
const SyllabusHeroSection = dynamic(() => import('../../../CPA/SyllabusHeroSection'))
import corporateData from '../../../database/data/corporateData.json'

const syllabus = () => {
    // CPA Curriculum
    const [curriculumData, setCurriculumData] = useState({
        curriculum: {}
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.curriculumSection,
            responseType: "json"
        })

            .then((res) =>
                setCurriculumData((prevState) => (
                    { curriculum: res.data.cpaPage }
                )))

            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])

    // HELP SECTION
    const [helpData, setHelpData] = useState({
        eaPage: {},
    })
    useEffect(() => {
        axios({
            method: "get",
            url: urlConstant.helpSection,
            responseType: 'json',
        })
            .then((res) =>
                setHelpData((prevState) => (
                    { eaPage: res.data.eaPage }
                )))
            .catch((err) =>
                console.log("error is ", err.message)
            )
    }, [])
    return (
        <>
            <Head>
                <title>What is the Syllabus of US CPA Subject wise?</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
            </Head>
            <Header />
            <SyllabusHeroSection  corporateData={corporateData.cpaCurriculum}/>
            <CurriculumSection curriculumData={curriculumData.curriculum} showData={true} />
            <div className='background-none ea-page syllabus'> <HelpSection helpData={helpData.eaPage} /></div>
            <RegisterForm  formName="contact us form"/>


            <Footer />
        </>
    )
}

export default syllabus