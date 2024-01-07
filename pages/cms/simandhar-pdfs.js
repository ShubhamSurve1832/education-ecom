import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import SideTab from "../../Dashboard/SideTab";
import { useState, useRef } from "react";
import blank_image_For_banner_page from "../../public/img/blank_image_For_banner_page.png";
import { useEffect } from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import AdminWithAuth from "./AdminAuthRoute";
import dynamic from "next/dynamic";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-hot-toast";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import { S3_buckets, cmsConstats, urlConstants } from "../../constants/urlConstants";

const courses = () => {
	
  let blinkOnAddOrEdit = useRef(null);

  let Token = secureLocalStorage.getItem("CMSTk");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();



  const [thumbName, setThumbName] = useState("");
  const [edit, setedit] = useState(false);
  const [data, setData] = useState({
    title:"",
    path:""
  });




  // Edit config
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    readonly: false,
    placeholder: "Start typings...",
  };



  const clickUploadImage = (certificate) => {
    document.getElementById(certificate).click();
  };



  const handleInputChange = (e) => {
    // const {name,value} = e.target;

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //SYNC COURSES
  let [syncs, setSync] = useState()

  useEffect(() => {
    sync()
  }, [])
  const sync = async () => {
    try {
      const response = await axios.get(cmsConstats.syncCourses,
        {
          headers: {
            Authorization: `JWT ${Token}`
          }
        }
      )
      if (response.status === 200) {

        setSync(response)
      
        // console.log(response)
      }

    } catch (err) {
      console.log(err, "in asycn request")
    }
  }


  const handleImageInputChange = (e) => {
    const { name, files } = e.target;
    const allowedTypes = ["application/pdf"];
    if (files[0]) {
      if (allowedTypes.includes(files[0].type)) {
        let size = files[0] ? Math.round(files[0].size / 1024) : "";
        if (size < 5120) {
          toast.loading("Uploading...");
          toast.dismiss();
          toast.success("Uploaded");
          setThumbName(files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setData({ ...data, thumbnail: reader.result });
          });

          if (e.target.value.includes("fakepath")) {
            reader.readAsDataURL(e.target.files[0]);
          } else {
            console.log("select files again");
          }
        } else {
          toast.error("File size is big, please select a file less than 5mb");
        }
      } else {
        toast.error("Supported Formats: Jpeg , Png  upto 5 MB");
      }
    } else {
      toast.error("Nothing Selected ?");
    }
  };

  const [certificate,setCertificate] = useState({});
  const [ErrorMsg,setErrorMsg] = useState("");

  const handleFileChange = (e) =>{
    const {name,value,files} = e.target; 
    
    const allowedTypes = ["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

    let size = files[0] ? Math.round(files[0].size / 1024) : ""
		if (size > 1120) {
		  setErrorMsg("File size is big, please select a file less than 5mb")
		}else{
      
			if(allowedTypes?.includes(files[0]?.type)){
				setCertificate(files[0])
				setErrorMsg("")
			}else{
				setErrorMsg("Supported Formats: doc, docx, rtf, pdf, upto 5 MB")
			}

		} 
  }

  console.log(certificate)

  let [DefaultData, setdefaultDeta] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let res = await axios.get(urlConstants.indexData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${Token}`,
      },
    });
    // let data = await res.json();
    // setdefaultDeta([res.data.pdfs]);
    createarray(res.data.pdfs);  
  };
  const createarray = (data) =>{
    console.log(data)
    let arrayofpdf = [];
    for(let pdf in data){
        arrayofpdf.push({[pdf]: data[pdf]})
    }
    setdefaultDeta([...arrayofpdf])
  }
//   console.log(DefaultData);

const SubmitData = async (e) => {
  e.preventDefault();
  postData();
}
const postData = async () => {
  const result = await axios.post(cmsConstats.addPdfs, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `JWT ${Token}`
    }
  })
  console.log("result", result);
  console.log(result.data)

  fetchData();
  setData({
    title:"",
    path: {},
  });

}



 



  return (
    <>
      <Head>
        <title>Courses : Simandhar Education</title>
      </Head>
      <SideTab />
      <section className="section fixedPadd cardelementSec">
        <div className="container">
          <h2 className="heading03">Simandhar Courses</h2>
          <form action="" method="POST" className="" 
          onSubmit={SubmitData}
          >
            <div className="two-col mt-4">
              <div className="inputFileds bb wdt-full">
                <label htmlFor="" className="title01">
                  Title
                </label>
                <input
                  ref={blinkOnAddOrEdit}
                  className="wdt-full bordernone title01"
                  name="title"
                  type="text"
                  onChange={(e) => handleInputChange(e)}
                  value={data.title}
                />
              </div>

         
            </div>
            <div className="two-col mt-4">
              <div
                className="inputFileds wdt-full bb"
                style={{ position: "relative" }}
              >
                <label htmlFor="" className="title01">
                  {" "}
                  Image rq (Website Version) :
                </label>
                <h6 className="dimension">
                   Format : .PDF
                </h6>

                
                  <div className="imgBack">
                    
                    <input
                      type="file"
                      style={{ display: "none" }}
                      onChange={(e) => handleFileChange(e)}
                      id={`certificate`}
                      className="wdt-full bordernone title01 posiinput"
                      name="thumbnail"
                    />
                  </div>
                  <p>{certificate?.name ? certificate?.name : ""}</p>
                    <p className='danger'>{ErrorMsg}</p>
                  <div className="one-col right">
                    <div className="addwrap">
                      <a
                        className="btn maroon-border-btn text-center"
                        onClick={() => clickUploadImage(`certificate`)}
                      >
                        Add PDF
                      </a>
                    </div>
                  </div>
              
              </div>
             
            </div>
            
            <div className="two-col">
              <div className="two-col">
                <div className="addwrap">
                  {/* {edit ? */}
                  <input
                    type="submit"
                    className="btn maroon-border-btn mt-4 text-center"
                    value="Save"
                    // onClick={editData}
                  />
                  {/* : <input type="submit" className='btn maroon-border-btn mt-4 text-center' onClick={SubmitData} value="Submit" />} */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="section fixedPadd testimonial-cms-section">
        <div className="container">        
          <table cellPadding="0" cellSpacing="0" className="cms-table">
            <thead>
              <tr>
                <th>
                  <p>Sr. No.</p>
                </th>               
                <th>
                  <p>PDF Name</p>
                </th>
                <th style={{ width: "100px" }}>
                  <p>Action</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {DefaultData &&
                DefaultData.map((data, ind) => {

                let propertyname = Object.keys(data)[0]
                let pdfUrl = urlConstants.S3_buckets+data[propertyname]
                  return (
                    <tr key={ind}>
                      <td>
                        <p>{ind + 1}.</p>
                      </td>
                      <td>
                        <p>{propertyname ? propertyname : "no Alt Available"}</p>
                      </td>
                      <td>
                        <button
                          className="cms-btn edit-box"
                          onClick={() => handleEdit(data, _id)}
                        >
                          <BiEditAlt />
                        </button>
                        {/* <button
                          className="cms-btn edit-box"
                          onClick={() => deleteListData(_id)}
                        >
                          <AiOutlineDelete />
                        </button> */}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default courses;
