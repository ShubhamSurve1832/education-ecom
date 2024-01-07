import Head from 'next/head'
import Format from '../layout/format'

//components
// import FreeResourcesBanner from '../CPA/FreeResourcesBanner'

import dynamic from "next/dynamic";
const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/footer'))
const FreeResourcesBanner = dynamic(() => import('../CPA/FreeResourcesBanner'))


export default function Home({ showPopup }) {
  return (
    <>
      <Head>
        <title>Explore Simandhar's Free Resources: Download eBooks, Guides, and Tools.</title>
        <meta content='Simandhar Education is Leading 100% Live Online,exam,course,courses,Leading Training Provider for US CPA, US CMA, Enrolled Agent & IFRS in India' name='description'></meta>
        <meta content='Simandhar Free resources, eBooks, Guides, Tools, Learning materials, Educational, Training materials, Skill development, Professional development, Knowledge sharing, Simandhar education' name='keywords'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <link rel="canonical" href="https://simandhareducation.com/free-resources" />
      </Head>
      <Header />
      <Format>
        <FreeResourcesBanner></FreeResourcesBanner>
      </Format>
      <Footer />

    </>
  )
}