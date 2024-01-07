import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import SideTab from "../../../Dashboard/SideTab";
import { useForm } from "react-hook-form";
import { data } from "jquery";
import blank_image_For_banner_page from "../../../public/img/blank_image_For_banner_page.png";
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import AdminWithAuth from "../AdminAuthRoute";
import secureLocalStorage from "react-secure-storage";
import {  urlConstants, cmsConstats,  S3_buckets} from "../../../constants/urlConstants";
import { toast } from "react-hot-toast";

const placement = () => {
  let blinkOnAddOrEdit = useRef(null)
  let Token = secureLocalStorage.getItem("CMSTk");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [edit, setedit] = useState(false);
  const [data, setData] = useState({
    name: "",
    img: {},
    course: "",
    btn: "",
    path: "",
    altName: "",
    id: "",
  });

  const clickUploadImage = (imgTagID) => {
    document.getElementById(imgTagID).click();
  };

  const handleInputChange = (e, i) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageInputChange = (e, index) => {
    const { name, files } = e.target;
		const allowedTypes = ["image/jpeg", "image/png","image/webp"];
		if (files[0]) {
			if (allowedTypes.includes(files[0].type)) {
				let size = files[0] ? Math.round(files[0].size / 1024) : "";
				if (size < 5120) {
					toast.loading("Uploading...");
					toast.dismiss()
						toast.success("Uploaded")
					setTimeout(() => {
            setData({
              ...data,
              img: files[0],
            });
						
					}, 1000);
				}else{
					toast.error("File size is big, please select a file less than 5mb");
				}

			} else {
				toast.error("Supported Formats: Jpeg , Png  upto 5 MB");
			}
		} else {
			toast.error("Nothing Selected ?");
		}

    
  };

  const SubmitData = async (e) => {
    e.preventDefault();
  };

  let [DefaultData, setdefaultDeta] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let res = await fetch(urlConstants.indexData);
    let data = await res.json();
    // setdefaultDeta([data.partnerData.list])
    setdefaultDeta([...data.placementAlumni.list]);
    // console.log(data.placementAlumni.list);
  };

  const handleEdit = (data, ind) => {
    blinkOnAddOrEdit.current?.focus()
    setedit(true);
    setData({
      id: ind,
      name: data.name,
      img: {},
      course: data.course,
      btn: data.btn,
      path: data.path,
      altName: data.altName ? data.altName : "",
    });

    window.scrollTo(0, 0);
  };

  // console.log(data);

  const editData = async (e) => {
    e.preventDefault();

    const result = await axios.post(cmsConstats.editPlacements, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${Token}`,
      },
    });
    // console.log("result", result);
    // console.log(result.data)
    setedit(false);
    setData({
      name: "",
      img: {},
      course: "",
      btn: "",
      path: "",
      altName: "",
    });
    fetchData();
  };

  return (
    <>
      <Head>
        <title>Placement - Simandhar Education</title>
      </Head>
      <SideTab />
      <section className="section fixedPadd placement">
        <div className="container">
          <h2 className="heading03">Placements & Alumni</h2>

					<div>
						<div>
							<form action="" method='POST' className=' mt-4' onSubmit={editData}>
								<div className='two-col'>
									<div className="inputFileds bb  wdt-full">
										<label htmlFor="" className='title01'>Student Name :</label>
										<input ref={blinkOnAddOrEdit}className='wdt-full bordernone title01'  name='name' type="text" onChange={(e) => handleInputChange(e)} value={data.name} />
									</div>
									<div className="inputFileds bb wdt-full">
										<label htmlFor="" className='title01'>Course Info :</label>
										<input className='wdt-full bordernone title01'  name='course' type="text" onChange={(e) => handleInputChange(e)} value={data.course} />
									</div>
								</div>
								<div className='two-col'>
									<div className="inputFileds bb mt-4 wdt-full">
										<label htmlFor="" className='title01'>CTA Button Name :</label>
										<input className='wdt-full bordernone title01'  name='btn' type="text" onChange={(e) => handleInputChange(e)} value={data.btn} />
									</div>
									<div className="inputFileds bb mt-4 wdt-full">
										<label htmlFor="" className='title01'>CTA Link :</label>
										<input className='wdt-full bordernone title01'  name='path' type="text" onChange={(e) => handleInputChange(e)} value={data.path} />
									</div>
								</div>
								<div className='two-col'>
									<div className=" bb mt-4 wdt-full">
										<label htmlFor="" className='title01'>Student Photo Alt Text :</label>
										<input className='wdt-full inputFileds bordernone title01'  name='altName' type="text" onChange={(e) => handleInputChange(e)} value={data.altName} />
									</div>
									<div className="wdt-full mt-4">
										<label htmlFor="" className='title01'>Student Photo :</label>
										<h6 className='dimension'>*Dimensions : 440 * 479 px | Format : .jpg, .png</h6>
										<div className="inputFileds filedwrap two-col">
											<div className="imgBack">
												<p>{data.img.name}</p>
												<input type="file" style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e)} id={`img`} className='wdt-full bordernone title01 posiinput' name='img' />

											</div>
											<div className="one-col right">
												<div className="addwrap">
													<a className='btn maroon-border-btn text-center' onClick={() => clickUploadImage(`img`)}>Add Image</a>
												</div>

											</div>
										</div>
									</div>
								</div>
						


                <div className="two-col">
                  <div className="two-col">
                    <div className="addwrap">
                      <input
                        type="submit"
                        value="Save"
                        className="btn maroon-border-btn mt-4 text-center"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
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
                  <p>Name</p>
                </th>
                <th>
                  <p>Student Photo </p>
                </th>
                <th>
                  <p>Course Info</p>
                </th>
                <th style={{ width: "100px" }}>
                  <p>Action</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {DefaultData &&
                DefaultData.map((data, ind) => {
                  let img = `${S3_buckets}${data.img}`;
                  let mobileBanner = `${S3_buckets}${data.mobileBanner}`;
                  return (
                    <tr key={ind}>
                      <td>
                        <p>{ind + 1}.</p>
                      </td>
                      <td>
                        <p> {data.name}</p>
                      </td>
                      <td>
                        <p>
                          <img src={img} alt="" />
                        </p>
                      </td>
                      <td>
                        <p> {data.course} </p>
                      </td>
                      <td>
                        <button
                          className="cms-btn edit-box"
                          onClick={() => handleEdit(data, data.id)}
                        >
                          <BiEditAlt />
                        </button>
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

export default AdminWithAuth(placement);
