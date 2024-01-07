import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import { BiPhoneCall } from 'react-icons/bi'
import Link from 'next/link'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { useState, useRef, useEffect, memo } from 'react'
import Image from 'next/image';
import { urlConstants as urlConstant } from '@/constants/urlConstants';
import app_store_1 from '../public/img/app_store_1.png'
import app_store_2 from '../public/img/app_store_2.png'
import { getCookie,setCookie } from 'cookies-next';
import toast from 'react-hot-toast';

function ContactUs() {
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const { register, handleSubmit, formState: { errors }, formState, reset } = useForm();
    const router = useRouter()

    //Phone number validation
    const [values, setValues] = useState({})

    useEffect(() => {
        let url;
        if (window.location.href.includes('utm_source') && window.location.href.includes('utm_medium') && window.location.href.includes('utm_campaign')) {
            url = window.location.href;
            let utmSource = url.split('&')[0].split('?')[1].split('=')[1]
            setCookie('utmSource', utmSource)

            let utmMedium = url.split('&')[1].split("=")[1]
            setCookie('utmMedium', utmMedium)

            let utmCampaign = url.split('&')[2].split('=')[1]
            setCookie('utmCampaign', utmCampaign)
        }
        let utmSource = getCookie('utmSource');
        let utmMedium = getCookie('utmMedium');
        let utmCampaign = getCookie('utmCampaign');
        // console.log(utmSource,utmMedium,utmCampaign);

        setValues({
            name: "",
            email: "",
            number: "",
            course: "",
            formName: "contact us form",
            MainSource: utmSource ? utmSource : "Direct Traffic",
            utm_medium: utmMedium ? utmMedium : "",
            utm_campaign: utmCampaign ? utmCampaign : ""
        })
    }, [])
    const { name, email, number, course, MainSource, formName, utm_medium, utm_campaign } = values;
    const onFormSubmit = async (e) => {
        e.preventDefault()       
        setButtonDisabled(true)
        try {

            let data ={
                "emailAddress": email,
                "firstName": name,
                "phone": number,
                "mxCourse": course,
                "mxMainsource": formName,
                "mxLeadSubSource": MainSource,
                "SourceMedium": utm_medium,
                "SourceCampaign": utm_campaign
            };
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: urlConstant.commonForm,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            await axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    router.push("/thankyou")
                    console.log("success")
                })
                .catch((error) => {
                    // console.log(error);
                    toast.error("Please fill out all required fields.")
                    setButtonDisabled(false)
                    // console.log("Error")

                });
        
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({
                name: "",
                email: "",
                number: "",
                course: "",
            });

        }
    }, [formState, reset]);

    return (
        <><section className='container'>
            <div className="contact_us">
                <h2 className="heading02">Contact Us</h2>
                <div className="form_box_black grid">
                    <form  className='sec3-cnt1' onSubmit={onFormSubmit}>
                        <div className='input-box sec3-btns sec3-btns'>
                            <input type="text" name="name" placeholder='Enter your Name'
                                value={name} minLength="2"
                                {...register("name", {
                                    required: "Name is required",
                                    pattern: {
                                        value: /^[a-zA-Z ]*$/,
                                        message: "Enter letters only"
                                    },
                                    onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                })}
                                className={errors.name ? 'error-border' : null}


                            />
                            {errors.name && <span className='error-message'>{errors.name?.message}</span>}
                        </div>

                        <div className='input-box sec3-btns'>
                            <input type="text" name="email" placeholder='Enter Your Email Address'
                                {...register("email", {
                                    required: "Email Id is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                        message: "Enter valid email id"
                                    },
                                    onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                })}
                                className={errors.email ? 'error-border' : null}

                                value={email}
                            />
                            {errors.email && <span className='error-message'>{errors.email?.message}</span>}
                        </div>

                        <div className='input-box sec3-btns'>
                            <input id="enquiry" name="enquiry" type="tel" placeholder="Enter Your Mobile Number" minLength="10" maxLength="15"
                                {...register("number",
                                    {
                                        required: "Number is required",
                                        pattern: {
                                            value: /^[5-9]\d{9,14}/,
                                            message: "Enter Valid Number"
                                        },
                                        minLength: {
                                            value: 10,
                                            message: "Enter Min 10 Number"
                                        },
                                        maxLength: {
                                            value: 15,
                                            message: "Enter Max 15 Number"
                                        },
                                        onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                    })}
                                className={errors.number ? 'error-border' : null}
                                //onChange={handleChange}
                                value={number}
                            />
                            {errors.number && <span className='error-message'>{errors.number?.message}</span>}
                        </div>

                        <div className='input-box  custom-select sec3-btns'>
                            <select id="select-course" name="course" placeholder='Select Course'
                                {...register("course",
                                    {
                                        required: "Select Course",
                                        onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                    })}
                                className={errors.course ? 'error-border' : null}
                                value={course}
                            >
                                <option value="">Select Course</option>
                                <option value="CPA">US CPA</option>
                                <option value="CMA">US CMA</option>
                                <option value="EA">EA</option>
                                <option value="ACCA Skill Level">ACCA Skill Level</option>
                                <option value='CIA'>CIA</option>
                                <option value='IFRS'>IFRS</option>
                                <option value='Data-Analytics'>Data Analytics</option>
                                <option value='Samarth'>FNF</option>
                            </select>
                            {errors.course && <span className='error-message'>{errors.course?.message}</span>}
                        </div>
                        <div className='input-box'>
                            <button type='submit' className={`btn  white-border-btn white-border-btn-arrow ${isButtonDisabled ? 'disabled' : ''}`}>Submit</button>
                        </div>
                    </form>




                    <div className='contact_right_box '>
                        <div className='add_row'>
                            <span></span>
                            <h3 className='heading05 '>Headquarters</h3>
                        </div>
                        <div className='add_row'><span><i><HiOutlineLocationMarker /></i></span>
                            <div><p className=''>Plot no 35/1 and 39/1, 4-17-041, Dr Subbarao Colony, Picket,
                                Secunderabad, Hyderabad, Telangana, 500026</p></div>
                        </div>
                        <div className='add_row'><span><i><BiPhoneCall /></i></span>
                            <div>
                                <p className=''>Sales:<a href="tel:+91-7780273388">+91-7780273388</a></p>
                                <p className=''>Support: <a href="tel:+91-8977633523">+91-8977633523</a></p>
                                <p className=''>Evaluations: <a href="tel:080-45588550">080-45588550</a></p></div>
                        </div>
                        <div className='add_row'><span><i><HiOutlineMail /></i></span>
                            <div><p className='' ><a href="mailto:info@simandhareducation.com">info@simandhareducation.com</a> </p></div>
                        </div>
                        <div className='location-box add_row'>
                            <span></span>
                            <Link href="/contact-simandhar"> <p className='location-title btn white-border-btn white-border-btn-arrow'>Our Locations</p></Link>
                        </div>
                    </div>
                    <div className='map'>
                    <Link href="https://www.google.com/maps/place/Simandhar+Education+-+India's+award+winning+Institute+for+US+CPA+%26+IMA+approved+partner+for+US+CMA./@17.453167,78.501348,16z/data=!4m6!3m5!1s0x3bcb9a4010000075:0x95d6d292114c88f3!8m2!3d17.4531665!4d78.5013475!16s%2Fg%2F11gbkvnz3r?hl=en&entry=ttu" target='_blank'><Image loading='lazy' src="/img/video_img/map_img.jpg" alt="video img" fill={true} sizes='100vw' className='resp-img' /></Link>
                        
                    </div>
                </div>
            </div>
        </section>
            <div className='red_box'>
                <div className='container grid'>
                    <h3 className='title'>Simandhar Learn App (LMS) is Available
                        on all Platforms</h3>
                    <div>
                        <a href="https://apps.apple.com/us/app/simandhar-learn/id1628605439" target="_blank" rel="noopener noreferrer"> <Image loading='lazy' src={app_store_1} alt="apple store" fill={true} sizes='100vw' className='resp-img' /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.horizzon.simandhareducation&hl=en_IN&gl=US&pli=1" target="_blank" rel="noopener noreferrer"> <Image loading='lazy' src={app_store_2} alt="apple store" fill={true} sizes='100vw' className='resp-img' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(ContactUs)