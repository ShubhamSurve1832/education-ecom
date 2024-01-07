import React,{useState,useEffect} from 'react'
import Head from "next/head";
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";
import SideTab from "../../Dashboard/SideTab";
import { API_BASE_URL } from '../../constants/urlConstants';
import { CSVLink } from "react-csv"
import AdminWithAuth from './AdminAuthRoute';

const EnrolledUsers = () =>{
    let Token = secureLocalStorage.getItem("CMSTk");
	const Role = secureLocalStorage.getItem("RoleAdmin")
    const[userData,setUserData] = useState([])
    let [TotalPages,setTotalPages] = useState(1);
    let [n,setN] = useState(1);
    // console.log(n)
    
    useEffect(()=>{
        fetchData()
       },[n])
    let fetchData = async () =>{
        const data = {
            sortField: "createdAt",
            sortOrder: -1 ,
            page:n
        }
        try{     
            let response = await axios.post(`${API_BASE_URL}enroll/getEnrollStudents`,data,{
                headers: {
                  Authorization: `JWT ${Token}`
                }
              })
            if(response.status=== 200){
                // console.log(response.data)
                setUserData(response?.data?.items)
                setTotalPages(response?.data?.totalPages)
            }            
        }catch(err){
            console.log(err)
        }
    }

    
	const SwitchPage = (e) =>{
		setN(parseInt(e.target.value))
	}
    
	const Prev = () =>{
		if(n>1 && n<=TotalPages){
			setN(+n-1)
		}
	}

	const Next = () =>{
		if(n>0 && n<TotalPages){
			setN(()=>+n+1)
		}
	}


       //  DOWNLOAD CSV FILE OF ALL USERS
   let headers = [
    { label: "Name", key: "full_nam" },
   { label: "Email", key: "email" },
   { label: "Phone", key: "phone" },
   { label: "Address", key: "address_line1" },
   { label: "City", key: "city" },
   { label: "State", key: "state" },
   { label: "Zip Code", key: "zip_code" },
   { label: "Counsellor Namer", key: "counsellor_name" },
   { label: "Course Name", key: "course_name" },
   { label: "Amount", key: "amount" },
   { label: "Profession", key: "profession" },
   { label: "Company Name", key: "company_name" },
   { label: "Payment Type", key: "payment_type" },
   { label: "Currency", key: "currency" },
   { label: "status", key: "status" }
   ]

    return(
        <>
        <Head>
        <title>Courses : Simandhar Education</title>
        </Head>
        <SideTab />

        <section className='section fixedPadd testimonial-cms-section pt-8'>
        {
              userData && userData?.length > 0 ?
              <div className='relative'>
              {
                Role && (Role === 'enroll') ?
                <CSVLink className="downloadbtn  cms-btn edit-box add-btn absolute" style={{"top": "-50px","right": "5%"}} filename="Enrolled Users.csv" data={userData} headers={headers}>  Export to CSV </CSVLink>
                :""
              }
              </div> : ""
            }
            <div className='container'>
           
                <div className="custom-scrollbar">            
                <table cellPadding="0" cellSpacing="0" className='cms-table '>
						<thead>
							<tr>
								<th><p>Sr. No.</p></th>
								<th><p>Created On</p></th>
								<th><p>Name</p></th>
                                <th><p>Email</p></th>                                
                                <th><p>Number</p></th>                                
                                <th><p>Counsellor Name</p></th>                                
                                <th><p>Course Name</p></th>                                
                                <th><p>Address</p></th>                                
                                <th><p>State</p></th>                                
                                <th><p>Pincode</p></th>                                
                                <th><p>Profession</p></th>                                
								<th style={{ width: "100px" }}><p>Amount</p></th>
							</tr>
						</thead>
						<tbody>
							{
                                userData && userData.map((data,ind)=>{
                                let date = new Date(data?.createdAt).toDateString()
                                let time = new Date(data?.createdAt).toLocaleTimeString()
                                    return(
                                        <tr key={ind}>
											<td><p>{`${(ind + 1) + (10*(n-1)) }`}.</p></td>
											<td><p style={{whiteSpace: "nowrap"}}>{date +" - "+ time}.</p></td>
											<td><p style={{whiteSpace: "nowrap"}}>{data?.full_name ? data?.full_name : 'no Name Available'}</p></td>
											<td><p>{data?.email ? data?.email : 'no Email Available'}</p></td>
                                            <td><p>{data && data?.phone}</p></td>        
                                            <td><p>{data && data?.counsellor_name}</p></td>        
                                            <td><p>{data && data?.course_name}</p></td>       
                                            <td><p>{data && data?.address_line1 +" "+ data?.address_line2}</p></td>       
                                            <td><p>{data && data?.state}</p></td>       
                                            <td><p>{data && data?.zip_code}</p></td>       
                                            <td><p>{data && data?.profession}</p></td>       
                                            <td><p>{data && data?.amount}</p></td>       

											
										</tr>
                                    )
                                })
                            }
						</tbody>
				</table>
                </div>
                <div className='width-100'>

                
                {
				TotalPages > 1
				&&
				<div className="input_field w-50" style={{display : 'flex',alignItems : "center",gap : "10px" , margin : "2rem auto",justifyContent: "center"  }}>
				 {
            n === 1 ?	<button className="btn disabled-btn" disabled >
            Prev
          </button> : 	<button className="btn maroon-border-btn prev-btn" onClick={Prev}>
                Prev
              </button>
          }
                <select
                  name="state"
                  value={n}
                  onChange={SwitchPage}
                  required
				  style={{width : "100px" , padding : "7px" , textAlign : "center" , fontSize : "15px" , border : "1px solid #760B28"}}
                >
                  {
                    TotalPages>1 && new Array(TotalPages)?.fill(0)?.map((data,ind)=>{
                      return(
                        <option value={ind+1}>{ind+1}</option>
                      )
                    })
                  }
                </select>
				{
                     n === TotalPages?	<button className="btn disabled-btn" disabled >
                        Next
                    </button> : 	<button className="btn maroon-border-btn prev-btn" onClick={Next}>
                        Next
                     </button>
                }
            </div>
			}
            </div>
            </div>
        </section>

        </>
    )
}

export default AdminWithAuth(EnrolledUsers)