import React from 'react'
import AccountSideBar from '../components/SideNavBar'
import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../utils'
import { removeFromCartAction } from '../redux/actions/cart'

const logout = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    let cartItems = useSelector(state => state.cart.cartItems)

    const logout = () => {
        cartItems.map((cartItem) => {
            return dispatch(removeFromCartAction(cartItem))
        });
        logoutUser();
        router.push({
            pathname: '/',
        });
    }

    return (
        <>
            <Head>
                <title>Logout - Simandhar Education</title>
                {/* <!-- Google tag (gtag.js) --> */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-826080113"></script>
        <script     type='application/ld+json' dangerouslySetInnerHTML={{
          __html:
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'AW-826080113');`}}
        /> */}
            </Head>
            <div className='my-account-header'>
                <Header />
            </div>
            <div className='relative'>

                <AccountSideBar />
                <section className='profile logout-page NewOneProfile'>
                    <div className="container">
                        {/* <h4 className="heading04">Basic Information</h4> */}
                        <div className="box">
                            <h3>Are you sure you want to Logout?</h3>
                            <div className="flex">
                                <button onClick={() => logout()} className="btn white-btn white-btn-arrow">YES</button>
                                <Link href="/profile" className="btn white-btn white-btn-arrow"> NO</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default logout