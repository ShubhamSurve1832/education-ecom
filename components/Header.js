import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { BiLogOutCircle } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCaretForward } from "react-icons/io5";
import CpaProgram from "./CpaProgram";
import programData from "../database/data/program.json";
import { isUserLoggedIn } from '../utils/index';
import { AUTH_KEY_NAME, PRICE_KEY_NAME } from "@/constants/statusCodes";
import { checkCookies, getCookie } from 'cookies-next';
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../utils'
import { removeFromCartAction } from '../redux/actions/cart'
import axios from "axios";
import { cmsConstats, urlConstants } from "@/constants/urlConstants";
import Spinner from "./comman/Spinner";
import { toast } from "react-hot-toast";
import secureLocalStorage from "react-secure-storage";
import Head from "next/head";


function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };

  }, [scrollDirection]);

  return scrollDirection;
}

// function MyComponent (props) {
//   const [isActive, setActive] = useState(false);

//   const toggleClass = () => {
//     setActive(!isActive);
//   };

//   return (
//     <div
//       className={isActive ? 'active': ''}
//       onClick={toggleClass}
//     >
//       <p>{props.text}</p>
//     </div>
//    );
// }

const Header = ({ showData, showData1 }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [cartCount, setCartCount] = useState(0);
  const scrollDirection = useScrollDirection();
  const [isActive, setActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const userInfo = useSelector(state => state.user.user)
  let cartItems = useSelector(state => state.cart.cartItems)

  const showMenu = () => {
    setActive(!isActive);
  };

  const pathname = usePathname();

  // Nav Dropdown
  const [isShow, setIsShow] = useState(false);
  const showDwnPopup = () => {
    if (isShow1) {
      setIsShow1(!isShow1);
    }
    setIsShow(!isShow);
  };

  const [isShow1, setIsShow1] = useState(false);
  const showDwnPopup1 = () => {
    if (isShow) {
      setIsShow(!isShow);
    }
    setIsShow1(!isShow1);
  };

  const [isShow2, setIsShow2] = useState(false);
  const showDwnPopup2 = () => {
    setIsShow2(!isShow2);
  };

  // const [isActive, setActive] = useState(false);
  // const toggleClass = () => {
  //   setActive(!isActive);
  // };

  //menu show hide in mobile
  const [width, setWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth])
  const [userLoggedIn, setIsUserLoggedIn] = useState(null);

  const setUserStatus = () => {
    const userData = isUserLoggedIn();
    if (userData.isLoggedIn) {
      setIsUserLoggedIn(userData);
      secureLocalStorage.setItem("UserEmail",userData.email)
      // console.log(userData)
    }
  }

  const logout = (e) => {
    e.preventDefault()
    cartItems.map((cartItem) => {
      return dispatch(removeFromCartAction(cartItem))
    });
    logoutUser();
    router.push({
      pathname: '/login',
    });
  }

  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);


  const getCart = async () => {
    try {
      setLoading(true);
      const token = `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`
      if (token) {
        const headers = {
          Authorization: token,
        }
        const response = await axios.get(urlConstants.getCart, { headers: headers });
        if (response.status === statusConstants.ok) {
          cartItems && cartItems.map((cartItem) => {
            dispatch(removeFromCartAction(cartItem));
          });
          response.data.courses.map((cartItem) => {
            dispatch(addToCartAction(cartItem));
          });
        }
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCart()
    setUserStatus()
  }, []);

  // LOGOU FUNCTIONALITY

  let cartItemslogout = useSelector(state => state.cart.cartItems)

  const logout1 = () => {
    cartItemslogout.map((cartItem) => {
      return dispatch(removeFromCartAction(cartItem))
    });
    logoutUser();
    router.push({
      pathname: '/',
    });
  }

  const getAlphaLearnToken = async () => {
    try {
      const token = `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`;
      if (token) {
        const headers = {
          Authorization: token,
        }

        const response = await axios.get(urlConstants.getAlphaLearnToken, { headers });
        if (response.data.success) {
          const token = response.data.data.token;
          const refreshToken = response.data.data['refresh-token'];
          const stringifyData = JSON.stringify({ token, refreshToken });
          localStorage.setItem('alphaLearnToken', stringifyData)
        }
      }
    } catch (error) {
      console.log(error.response.data.message || 'An error occurred while getting required tokens. Please try again later.')
    }
  }
  useEffect(() => {
    getAlphaLearnToken()
  }, [])





let [metaTag,setMetaTag] = useState({})
useEffect(()=>{
  if(router.isReady){
    fetchMetaTag();
  }
},[router,router.isReady])


let TOKEN = secureLocalStorage.getItem("TK")
// console.log(TOKEN);
const fetchMetaTag = async () =>{
  try{
    let response = await axios.post(cmsConstats.getAllMetaTags,{},{
      headers:{
        "Content-Type" : "application/json",
        "Authorization" : `JWT ${TOKEN}`
      }
    });

    // console.log(response)
let tags = response?.data?.items;
// console.log(tags)
    let metatag = response?.data?.items?.find((meta,ind)=>{
      // console.log(meta)
      // return meta?.pageName?.split(" ").join("").split("–").join("").split("?").join("").split(":").join("").split("-").join("").split("|").join("").split("’").join("").split(",").join("").split(".").join("").split("&").join("").split("$").join("").toUpperCase()===router?.pathname?.split("-").join("").split("?").join("").split("’").join("").split("|").join("").split("–").join("").split(":").join("").split(",").join("").split("&").join("").split("$").join("").toUpperCase()
      return meta?.pageName === pathname;
    });
    setMetaTag(metatag);
  }catch(error){
    console.log(error)
  }
  
}




// let {title,description,keywords} = metaTag

// console.log(metaTag);
  
  return (
    <>

{
  metaTag 
     &&
    <Head>
      <title>{metaTag?.title && metaTag?.title}</title>
      <meta name="description" content={metaTag?.description && metaTag?.description} />
      <meta name="keywords" content={metaTag?.keywords && metaTag?.keywords} />

    </Head>

}

      <header
        className={`header ${scrollDirection === "down" ? "active" : " "}`}
        id="header"
      >
        <nav className="navbar hf-container">
          <div className="logo_img logo_img_2  resp-img-box">
            <Link href="/">
              {" "}
              <Image loading='lazy'
                src="/img/logo.png"
                fill={true} sizes='100vw'

                className="resp-img"
                alt="Simandhar logo"
              />
              {/* <Image loading='lazy'
                src="/img/mobile_logo.png"
                fill={true} sizes='100vw'

                className="resp-img"
                alt="Simandhar logo"
              /> */}
            </Link>
          </div>
          <div className="left_nav">
            <button className="menu-btn" onClick={showMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className={"nav" + " " + (isActive ? "active" : "")}>
              <button className="close-menu" onClick={showMenu}>
                <span></span>
                <span></span>
              </button>
              <ul className="navbar_list">
                <Link href="/"> <li
                  className={pathname == "/" ? "active" : ""}
                  onClick={showMenu}>
                  Home
                </li>
                </Link>
                <Link href="/about-simandhar">
                  <li
                    className={pathname == "/about-simandhar" ? "active" : ""}
                    onClick={showMenu}>
                    About
                  </li>
                </Link>
                <Link href="/webinars">
                  <li
                    className={pathname == "/webinars" ? "active" : ""}
                    onClick={showMenu}>
                    Webinars
                  </li>
                </Link>
                {/* <Link href="/free-resources">
                  <li
                    className={pathname == "/free-resources" ? "active" : ""}
                    onClick={showMenu}>
                    <span className="blinking-text">Free Resources </span>
                  </li>
                </Link> */}
                <Link href="/free-trial">
                  <li
                    className={pathname == "/free-trial" ? "active" : ""}
                    onClick={showMenu}>
                    <span className="blinking-text">Free Trial </span>
                  </li>
                </Link>
                <Link href="/referral-page">
                  <li
                    className={pathname == "/referral-page" ? "active" : ""}
                    onClick={showMenu} >
                    Refer & Earn
                  </li>
                </Link>
                {width >= 900 ?
                  (<li className="more_dropdown">
                    More
                    <span
                      className="tab-head-box "
                    >
                      <i>
                        <RiArrowDropDownLine />
                      </i>
                    </span>
                    <ul
                      className={"navDropdown" + " " + (isShow ? "active" : "")}
                    >

                      <Link href="/blogs/category/student-corner">
                        <li>
                          Student Corner
                        </li>
                      </Link>
                      <Link href="/sripal-jain-usa-visit-updates">
                        <li className={pathname == "/sripal-jain-usa-visit-updates" ? "active" : ""}
                          onClick={showMenu}>
                          Sripal Jain USA Visit
                        </li>
                      </Link>
                      <Link href="/corporate-journey">
                        <li className={pathname == "/corporate-journey" ? "active" : ""}
                          onClick={showMenu} >
                          Corporate Journey
                        </li>
                      </Link>
                      <Link href="/corporate-events">
                        <li className={pathname == "/corporate-events" ? "active" : ""}
                          onClick={showMenu}>
                          Corporate Events
                        </li>
                      </Link>
                      <Link href="/tie-ups">
                        <li className={pathname == "/tie-ups" ? "active" : ""}
                          onClick={showMenu}>
                          Corporate Tie-Ups
                        </li>
                      </Link>
                      <Link href="/sec">
                        <li className={pathname == "/sec" ? "active" : ""}
                          onClick={showMenu}>
                          SEC
                        </li>
                      </Link>
                      {/* <Link href="/testimonial">
                        <li className={pathname == "/testimonial" ? "active" : ""}
                          onClick={showMenu}>
                          Testimonials
                        </li>
                      </Link>
                      <Link href="/testimonial-videos">
                        <li className={pathname == "/testimonial-videos" ? "active" : ""}
                          onClick={showMenu}>
                          Testimonials Videos 
                        </li>
                      </Link> */}
                      <Link href="/blogs">
                        <li className={pathname == "/blogs" ? "active" : ""}
                          onClick={showMenu}>
                          Blogs
                        </li>
                      </Link>
                      <Link href="/faq">
                        <li className={pathname == "/faq" ? "active" : ""}
                          onClick={showMenu}>
                          FAQ's
                        </li>
                      </Link>
                      <Link href="/alumni">
                        <li className={pathname == "/alumni" ? "active" : ""}
                          onClick={showMenu}>
                          Alumni
                        </li>
                      </Link>
                      <Link href="/careers">
                        <li className={pathname == "/careers" ? "active" : ""}
                          onClick={showMenu}>
                          Career
                        </li>
                      </Link>
                      <Link href="/contact-simandhar">
                        <li className={pathname == "/contact-simandhar" ? "active" : ""}
                          onClick={showMenu}>
                          Contact Us
                        </li>
                      </Link>
                      {/* <Link href="/cpa/work-in-us">
                        <li>
                          Work In USA
                        </li>
                      </Link> */}
                    </ul>
                  </li>)
                  :
                  (
                    <>
                      {/* <Link href="/referral-page">
                      <li className={pathname == "/referral-page" ? "active" : ""}
                        onClick={showMenu}>
                       refer & Earn
                      </li>
                      </Link> */}
                      <Link href="/blogs/category/student-corner">
                        <li className={pathname == "/blogs/category/student-corner" ? "active" : ""}
                          onClick={showMenu}>
                          Student Corner
                        </li>
                      </Link>
                      <Link href="/sripal-jain-usa-visit-updates">
                        <li className={pathname == "/sripal-jain-usa-visit-updates" ? "active" : ""}
                          onClick={showMenu}>
                          Sripal Jain USA Visit
                        </li>
                      </Link>
                      <Link href="/corporate-journey">
                        <li className={pathname == "/corporate-journey" ? "active" : ""}
                          onClick={showMenu} >
                          Corporate Journey
                        </li>
                      </Link>
                      <Link href="/corporate-events">
                        <li className={pathname == "/corporate-events" ? "active" : ""}
                          onClick={showMenu}>
                          Corporate Events
                        </li>
                      </Link>
                      <Link href="/tie-ups">
                        <li className={pathname == "/tie-ups" ? "active" : ""}
                          onClick={showMenu}>
                          Corporate Tie-Ups
                        </li>
                      </Link>
                      <Link href="/sec">
                        <li className={pathname == "/sec" ? "active" : ""}
                          onClick={showMenu}>
                          SEC
                        </li>
                      </Link>
                      {/* <Link href="/testimonial">
                        <li className={pathname == "/testimonial" ? "active" : ""}
                          onClick={showMenu}>
                          Testimonials
                        </li>
                      </Link>
                      <Link href="/testimonial-videos">
                        <li className={pathname == "/testimonial-videos" ? "active" : ""}
                          onClick={showMenu}>
                          Testimonials Videos
                        </li>
                      </Link> */}
                         
                      <Link href="/blogs">
                        <li className={pathname == "/blogs" ? "active" : ""}
                          onClick={showMenu}>
                          Blogs
                        </li>
                      </Link>
                      <Link href="/faq">
                        <li className={pathname == "/faq" ? "active" : ""}
                          onClick={showMenu}>
                          FAQ's
                        </li>
                      </Link>
                      <Link href="/alumni">
                        <li className={pathname == "/alumni" ? "active" : ""}
                          onClick={showMenu}>
                          Alumni
                        </li>
                      </Link>
                      <Link href="/careers">
                        <li className={pathname == "/careers" ? "active" : ""}
                          onClick={showMenu}>
                          Career
                        </li>
                      </Link>
                      <Link href="/contact-simandhar">
                        <li className={pathname == "/contact-simandhar" ? "active" : ""}
                          onClick={showMenu}>
                          Contact Us
                        </li>
                      </Link>
                      
                     <Link href="/academy"> <li className="">Buy Courses</li></Link>
                  
                      {/* <Link href="/cpa/work-in-us">
                        <li>
                          Work In USA
                        </li>
                      </Link> */}
                    </>
                  )
                }
              </ul>
            </div>

            <div className="btn01">
              <Link href="/academy"> <button className="btn">Buy Courses</button></Link>
            </div>
            <div className="profile-icon">
              <span className="cart-bx">
                <Link href="/shopping-cart">
                  <i className="cart">
                    {" "}
                    <BsCart2 />
                   <span className="cart-length">{cartCount || 0}</span>
                  </i>
                </Link>
              </span>
              <span className="login-box desktop">
                {
                  !userLoggedIn && (
                    <Link href="/login">
                      <h3 className="profile btn">LOGIN </h3>
                    </Link>
                  )
                }
              </span>

              
              {
                  !userLoggedIn ? (
                    <span className="login-box mobile">
                    <Link href="/login">
                      <img src="/img/unnamedicon.png" alt="simandhar candidate login" layout="fill" className="resp-img mobile"/>
                    </Link>
                    </span>
                  ) :""
                }
             
              

              {
                userLoggedIn && (
                  <div className="login-box">
                    <Link href='javascript:;' >
                      <h6 className="profile btn">{checkCookies(AUTH_KEY_NAME) && `Hi ${userLoggedIn && userInfo?.fullName.split(" ")[0]}` || ''}</h6>
                    </Link>
                    {
                      userLoggedIn &&
                      <div className="profile-dropdown">
                        <Link href="/profile"><i><CgProfile /></i>Profile</Link>
                        <a href='/' onClick={() => logout1()}><i><BiLogOutCircle /></i>Logout</a>
                      </div>
                    }
                  </div>
                )
              }
            </div>
          </div>
          <div className="clear"></div>
        </nav>
        {/* 
        <div className='backgroud'>
          <div className='program_bar'>
            {
              porgrams.map(program => (
                <div className='nav-title'> {program.name}{program.icon}</div>
              ))
            }
          </div>
        </div> */}

        {/* Second NavBar */}
        <section className="backgroud">
          <div className="hf-container">
            <div className="program_bar">
              <div
                className={"nav-title1" + " " + (isShow2 ? "active" : "")}
                onClick={showDwnPopup2}
              >
                Our Programs
                <span>
                  <i>
                    <IoCaretForward />
                  </i>
                </span>
              </div>

              <div
                className={"program-scroll" + " " + (isShow2 ? "active" : "")}
              >
                <div className="programs">
                  {/* <Slider {...programSlider}> */}

                  <Link
                    href="/course/cpa"
                    className={
                      pathname == "/course/cpa" ? "nav-title active" : " nav-title"
                    }
                  >
                    US CPA
                  </Link>
                  <Link
                    href="/course/cma"
                    className={
                      pathname == "/course/cma" ? "nav-title active" : " nav-title"
                    }
                  >
                    US CMA
                  </Link>
                  <Link
                    href="/course/ea"
                    className={
                      pathname == "/course/ea" ? "nav-title active" : " nav-title"
                    }
                  >
                    EA
                  </Link>
                  <Link href="/cpa/work-in-us"
                    className={
                      pathname == "/cpa/work-in-us" ? "nav-title active" : " nav-title"
                    }
                  >Work in USA</Link>
                  <Link href="/acca"
                    className={
                      pathname == "/acca" ? "nav-title active" : " nav-title"
                    }
                  >ACCA</Link>
                  <Link
                    href="/course/cia"
                    className={
                      pathname == "/course/cia" ? "nav-title active" : " nav-title"
                    }
                  >
                    CIA
                  </Link>
                  <Link
                    href="/course/ifrs"
                    className={
                      pathname == "/course/ifrs" ? "nav-title active" : " nav-title"
                    }
                  >
                    IFRS
                  </Link>
                  <Link
                    href="/data-analytics"
                    className={
                      pathname == "/data-analytics" ? "nav-title active" : " nav-title"
                    }
                  >
                    DA
                  </Link>
                  <Link
                    href="/finance-for-non-finance"
                    className={
                      pathname == "/finance-for-non-finance" ? "nav-title active" : " nav-title"
                    }
                  >FNF</Link>
                  
                  {/* <Link
                    href="/dataAnalytics"
                    className={
                      pathname == "/dataAnalytics"
                        ? "nav-title active"
                        : " nav-title"
                    }
                  >
                    DA
                  </Link>
                  <Link
                    href="/finance-for-non-finance"
                    className={
                      pathname == "/finance-for-non-finance"
                        ? "nav-title active"
                        : " nav-title"
                    }
                  >
                    Simandhar Saamarth
                  </Link> */}
                  {/* <div className='more_dropdown nav-title' >
                    More
                    <span><i><RiArrowDropDownLine /></i></span>
                    <ul className='navDropdown' style={{ display: !isShow1 ? 'none' : 'block' }}>
                      <li><Link href="/sripal">Saamarth</Link></li>
                      <li><Link href="/blogs/category/student-corner">DA</Link></li>
                    </ul>
                  </div>
                    <ul className='navDropdown'
                    // style={{ display: !isShow1 ? 'none' : 'block' }} 
                    >
                      <li><Link href="/finance-for-non-finance">Saamarth</Link></li>
                      <li><Link href="/dataAnalytics">DA</Link></li>
                    </ul>
                  </div> */}
                  {/* </Slider> */}

                  {/* <div className='nav-title'>More<span><i><RiArrowDropDownLine /></i></span>
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {showData ? <CpaProgram programData={programData.cpaPage} /> : " "}
        {showData1 ? <CpaProgram programData={programData.cmaPage} /> : " "}
      </header >

      {/* Form */}
    </>
  );
}

export default dynamic(() => Promise.resolve(Header), { ssr: false })
