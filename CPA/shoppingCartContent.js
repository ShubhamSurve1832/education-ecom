import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { IoStar, IoStarHalf, IoClose } from "react-icons/io5";
import { useSelector, connect, useDispatch } from 'react-redux';
import { addToCart, addToCartAction, getCartItemsCount, removeFromCartAction, setSimilarCoursesAction } from '../redux/actions/cart';
import axios from 'axios';
import { coupons, urlConstants as urlConstant, urlConstants,PostActivityLeadAPI ,UpdateActivityLeadAPI} from '../constants/urlConstants';
import { AUTH_KEY_NAME, statusConstants as statusConstant, statusConstants, token } from '../constants/statusCodes';
import { toast } from 'react-hot-toast';
import { decryptValue, formatAmount, getPercentage } from '../utils';
import { checkCookies, getCookie } from 'cookies-next';
import dynamic from "next/dynamic";
import Spinner from '../components/comman/Spinner';
import GoToCourse from '../components/comman/GoToCourse';
import secureLocalStorage from "react-secure-storage";
import moment from "moment";
const ShoppingCartContent = () => {
    const dispatch = useDispatch();
    let Date = moment().format('Y-M-D')?.split('-')
    Date[1] < 10 && Date.splice(1,1,0+""+Date[1])
    Date[2] < 10 && Date.splice(2,1,0+""+Date[2])

    let Time = moment().format('h:mm:ss')?.split(':')
    Time[0] < 10 && Time.splice(0,1,0+""+Time[0]) 
    let prospectusId = secureLocalStorage.getItem('RelatedProspectId')
    const [isButtonDisabled, setButtonDisabled] = useState(null);
    const [apiError, setApiError] = useState('');
    const[courseData,setCourseData] = useState()
    // const [cartItem, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [goToCourseInfo, setGoToCourseInfo] = useState(null);

    const goToCourseRef = useRef(null);

    const cartDataFromRedux = useSelector((state) => state.cart);

    const { cartItems, price, similarCourses } = cartDataFromRedux;
    let totalPrice = 0, discountPrice = 0;
    if (price) {
        totalPrice = decryptValue(price.totalPrice)
        discountPrice = decryptValue(price.discountPrice)
    }

    const [cartData, setCartData] = useState([]);
    // const [similarCourses, setSimilarCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [couponName, setCouponName] = useState(null);
    const [activityId,setActivityId] = useState("")
    const [count,setCount] = useState(0)
    let EmailId = secureLocalStorage.getItem("UserEmail")
    const cartItemCount = useSelector(state => state.cart.cartItems);
    
    let cartItem = useSelector(state => state.cart.cartItems)
  useEffect(() => {
    setCount(cartItemCount.length);
  }, [cartItem]);

  
// CART ACTIVITY
  let postCartActivity = async (activityName,courseCode,sequence)=>{
    if(prospectusId !== null){
      // activityGetIDCaptureLead()
     let postactivity = {
       "RelatedProspectId": prospectusId,
       "ActivityEvent": 256,
       "ActivityNote": activityName,
       "ProcessFilesAsync": true,
      //  "ActivityDateTime": formattedDateTime,                        
       "Fields": [
           {
               "SchemaName":`mx_Custom_${sequence}`,
               "Value": courseCode
           }
       ]
       } 

     try{
      
      try {
        let activityIdRes = await axios.get(`https://www.theadroit.in/api/get-simandhat-activity-id?email=${EmailId}`,
        {
          headers:{"Content-Type":"application/json"}
      })
        console.log("activity res",activityIdRes)
        // setNewActivityId(activityIdRes.data.activity_id)
        console.log("activity res Activity id",activityIdRes.data.activity_id)
        
         //UPDATE ACTIVITY PAYLOAD
       let updateactivity = {
        "ProspectActivityId": activityIdRes.data.activity_id,
        "ActivityEvent": 256,
        "ActivityNote": activityName,
        "ProcessFilesAsync": true,
       //  "ActivityDateTime": formattedDateTime,                        
        "Fields": [
            {
                "SchemaName": `mx_Custom_${sequence}`,
                "Value": activityName === 'Course Added.!' ? courseCode : ''
            }
        ]
        }
    
        if (activityIdRes.data.activity_id !== "Fail"){
          console.log("UPDATE API Hitted")
          const ActivityResponsed = await axios.post(UpdateActivityLeadAPI, updateactivity,
            {
                headers:{"Content-Type":"application/json"}
            });
        } else{
          console.log("CREATE API Hitted")     
  
            const ActivityResponse = await axios.post(PostActivityLeadAPI, postactivity,
              {
                  headers:{"Content-Type":"application/json"}
              });
              console.log('ActivityResponse',ActivityResponse)
              if( ActivityResponse.status === 200){              
                setActivityId(ActivityResponse.data.Message.Id)
                console.log("Activity id CREATE",ActivityResponse.data.Message.Id)
  
                // let activityIdCaptureLead = async ()=>{
                  try {
                    console.log("PoST Call")
                    let activityIdRes = await axios.get(`https://www.theadroit.in/api/set-simandhat-activity-id?email=${EmailId}&activity_id=${ActivityResponse.data.Message.Id}`,
                    {
                      headers:{"Content-Type":"application/json"}
                  })
                    console.log("activity res",activityIdRes)
                  } catch(err) {
                console.log("post call SImandhar API ERROR",err)
                  }
                // }
              }
        }

      } catch(err) {
    console.log("get call SImandhar API ERROR",err)
      }      
       
        //  console.log(ActivityResponse)
     } catch(err){
            console.log(err)
     }    
    }else{
      console.log("Singup Or Login First To Post Activity On Lead.!")
    }
   } 

   // HANDLE CART 
    const handleCart = async (e, course, index) => {
        setCourseData(course)
        // setCount(cartItems?.length)
        e.preventDefault();

        if (!course.inCart) {
            const defaultMessage = 'You can add only one CPA Course bundle - Becker Unlimited or Becker Limited.';
            try {
                if (course.sequence === 1) {
                    if (cartItems.some(item => item.sequence === 2)) {
                        toast.error(defaultMessage);
                        return;
                    }
                } else if (course.sequence === 2) {
                    if (cartItems.some(item => item.sequence === 1)) {
                        toast.error(defaultMessage);
                        return;
                    }
                }
            } catch (error) {
                // console.log("🚀 ~ file: CourseList.js:28 ~ handleCart ~ error:", error)
            }
        }

        const token = `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`
        if (token) {
            try {
                setButtonDisabled(index);
                const object = {
                    courseId: course._id
                }

                const headers = {
                    Authorization: `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`,
                }

                let response = await axios.post(urlConstants.addToCart, object, { headers: headers });

                if (response.status === statusConstants.ok) {
                    course.inCart ? dispatch(removeFromCartAction(course)) : dispatch(addToCartAction(course))
                    course.inCart ? postCartActivity('Course Added.!',course.courseCode,course.sequence) : postCartActivity('Course Removed.!',course.courseCode,course.sequence)
                    // response.data.message === 'Course has been removed.' ? dispatch(removeFromCartAction(course)) : dispatch(addToCartAction(course))
                    toast.success(response.data.message)
                }
            } catch (error) {
                toast.error(error.response.data.message || 'An error occurred during adding to cart. Please try again later.')
            } finally {
                setButtonDisabled(null);
            }
        } else {
            course.inCart ? toast.success('Course has been removed.') : toast.success('Course has been added.')
            course.inCart ? dispatch(removeFromCartAction(course)) : dispatch(addToCartAction(course))
            course.inCart ? postCartActivity('Course Added.!',course.courseCode,course.sequence) : postCartActivity('Course Removed.!',course.courseCode,course.sequence)
        }
    }

    const getSimilarCourses = async () => {
        try {
            setLoading(true);
            const headers = {
                Authorization: `${getCookie(AUTH_KEY_NAME) ? `JWT ${getCookie(AUTH_KEY_NAME)}` : ''}`,
            }
            const response = await axios.get(urlConstant.getSimilarCourses, { headers });

            if (response.status === statusConstant.ok) {
                dispatch(setSimilarCoursesAction(response.data.courses))
            }
        } catch (error) {
            setError('Error retrieving Similar Courses.');
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (e) => {
        setCouponName({ ...couponName, [e.target.name]: e.target.value });
    }

    const applyCoupon = (e) => {
        if (coupons.includes(e.target.value)) {
            toast.success('Coupon Applied Successfully');
        } else {
            toast.error('Invalid/Expired Coupon');
        }
    }

    const submitChildForm = () => {
        if (goToCourseRef.current) {
            goToCourseRef.current.submitForm();
        }
    };
    const handleGoToCourse = async (e, item) => {
        e.preventDefault();
        await setGoToCourseInfo({ enrollmentId: item.enrollmentId })
        submitChildForm()
    }

    useEffect(() => {
        setCartCount(cartItems.length);
    }, [cartItems]);

    useEffect(() => {
        getSimilarCourses();
    }, []);

    return (
        <>
            <section className="pb-8 mt-4 shoppingCartSection">
                <div className="container-l">
                    <h1 className="heading02 text-center">Shopping Cart</h1>
                    <div className="title mt-4">
                        {cartCount || 0} courses in cart
                    </div>
                    <div className="cartBox">
                        <div className="cartItem">
                            {
                                cartItems ? cartItems.map((cartItem, index) => {
                                    return (
                                        <>
                                            <div key={cartItem._id} className="detailBox">
                                                <div className="cartImg">
                                                    <img loading='lazy' src={cartItem.thumbnail} alt={`${cartItem.title} course image`} fill={true} sizes='100vw' className='resp-img' />
                                                </div>
                                                <div className="details">
                                                    <div className="cartName title">
                                                        {cartItem.title}
                                                    </div>
                                                    {/* <div className="review">
                                                    <span>{cartItem.review}</span>
                                                    <IoStar color={color} /> <IoStar color={color} /> <IoStar color={color} /> <IoStar color={color} /> <IoStarHalf color={color} />
                                                    <div className="reviewNum">({cartItem.reviewNum})</div>
                                                    <div className="grade">{cartItem.popularity}</div>
                                                </div> */}
                                                    <div className="time">
                                                        {/* Duration: {cartItem.durationInDays} Days */}
                                                        {/* <span>  {cartItem.lectures}</span> */}
                                                    </div>
                                                </div>
                                                <div className="amount">
                                                    {formatAmount(cartItem.price.totalPrice || 0)}
                                                    <div className="strick">
                                                        <s>{formatAmount(cartItem.price.discountPrice || 0)}</s>
                                                    </div>
                                                </div>
                                                <div className="close-icon" onClick={(e) => handleCart(e, cartItem, index)}>
                                                    <IoClose />
                                                </div>
                                            </div>
                                        </>
                                    )
                                }) : (
                                    <>
                                        <div className="amountTotal">
                                            <div className="title">
                                                "Nothing in your cart!"
                                            </div>
                                        </div></>
                                )
                            }
                        </div>
                        <div className="amountTotal">
                            <div className="title">
                                Total
                            </div>

                            <div className="finalAmount">
                                {price && formatAmount(totalPrice) || 0}
                                <div className="strick">
                                    <s>{price && formatAmount(discountPrice)}</s>
                                    <span className='disscount'>{price && getPercentage(Number(discountPrice), Number(totalPrice)) || 0}% off</span>
                                </div>
                            </div>
                            {/* <div className="title01">
            {98090980}
        </div> */}
                            {/* <div className="inputFiled">
            <input type="text" placeholder='Enter Coupon' name='coupon' onChange={(e) => handleChange(e)} />
            <button href="" className='btn maroon-border-btn maroon-border-btn-arrow' onClick={(e) => applyCoupon(e)}>Apply</button>
        </div> */}
                            <div className="checkoutBtn">
                                <Link href="/checkout" className={`btn maroon-btn maroon-btn-arrow ${cartItems.length === 0 ? 'disabled' : ''}`}>Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="likeCart pb-8">
                <div className="container-l">
                    <div className="title mt-4">
                        You Might also like
                    </div>
                    {
                        loading ? (<Spinner />) : (
                            <div className="slideBox">
                                {
                                    similarCourses && similarCourses.filter((item) => item.price.totalPrice > 0 && !item.inCart && !item.IsBoughtAlready).map((item, index) => (
                                        <>
                                            <div key={item._id} className="box">
                                                <div className="likeImg">
                                                    <img loading='lazy' src={item.thumbnail} alt={`${item.title} 'course image'`} fill={true} sizes='100vw' className='resp-img' />
                                                </div>
                                                <div className="title01">
                                                    <Link href={`/courseDetail/${item.title?.split('(').join('').split(')').join('').split('|').join('').split('?').join('').split('  ').join(' ').split(' ').join('-').split('-').reverse().slice(1).join('-').split('-').reverse().join('-')}`}>{item.title}</Link>
                                                </div>
                                                {/* <div className="review">
                                                            <span>{item.review}</span>
                                                            <IoStar color={color} /> <IoStar color={color} /> <IoStar color={color} /> <IoStar color={color} />
                                                            <span className="reviewNum">{item.reviewNum}</span>
                                                        </div> */}
                                                <div className="time">
                                                    {/* Duration: {item.durationInDays} Days */}
                                                </div>
                                                <div className="amount">
                                                    {formatAmount(item.price.totalPrice)}
                                                    <span className="strick">
                                                        <s>{formatAmount(item.price.discountPrice)}</s>
                                                    </span>
                                                </div>
                                                <div className="addCartBtn">
                                                    {item.IsBoughtAlready ? (
                                                        <button onClick={(e) => handleGoToCourse(e, item)} className="btn maroon-btn maroon-btn-arrow">Go to course</button>
                                                    ) : (
                                                        <>
                                                            <button className={`btn maroon-btn maroon-btn-arrow ${isButtonDisabled === index ? 'disabled' : ''}`} disabled={isButtonDisabled === index} onClick={(e) => handleCart(e, item, index)}>
                                                                {isButtonDisabled === index ? 'Loading...' : (item.inCart) ? 'Remove from cart' : 'Add to cart'}
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </section>
            <GoToCourse ref={goToCourseRef} enrollmentId={goToCourseInfo?.enrollmentId} />
        </>
    )
}

export default dynamic(() => Promise.resolve(ShoppingCartContent), { ssr: false })
