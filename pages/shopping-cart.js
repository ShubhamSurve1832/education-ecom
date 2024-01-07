import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/footer'
import ShoppingData from '../CPA/shoppingCartContent';
import ShoppingCartData from '../database/data/shoppingCart.json';

const shoppingCart = () => {
 return (
    <>
      <Head>
        <title>Shopping Cart - Simandhar Education</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        
         {/* <!-- Google tag (gtag.js) --> */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-826080113"></script>
        <script     type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'AW-826080113');`}}
        />
            */}
      </Head>
      <div>
        <Header />
      </div>
      <ShoppingData ShoppingCartData={ShoppingCartData.shoppingPage} />
      <Footer />
    </>
  );
};

export default shoppingCart;
