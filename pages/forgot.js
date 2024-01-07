import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Forgot from "../CPA/forgotContent";

const forgot = () => {
  return (
    <>
      <Head>
        <title>Forgot Page - Simandhar Education</title>
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-826080113"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'AW-826080113');`,
          }}
        />
      </Head>
      <div className="width-50">
        <Header />
      </div>
      <Forgot />
    </>
  );
};

export default forgot;
