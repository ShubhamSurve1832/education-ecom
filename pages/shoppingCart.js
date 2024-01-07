import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import ShoppingData from '../CPA/shoppingCartContent'

import ShoppingCartData from '../database/data/shoppingCart.json'

const shoppingCart = () => {
    return (
        <>
            <Head>
                <title>Shopping Cart - Simandhar Education</title>
            </Head>
            <div className='width-50'>
                <Header />
            </div>
            <ShoppingData ShoppingCartData={ShoppingCartData.shoppingPage} />
        </>
    )
}

export default shoppingCart