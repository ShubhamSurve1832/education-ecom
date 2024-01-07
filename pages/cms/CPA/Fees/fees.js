import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import SideTab from '../../../../Dashboard/SideTab'
import { useState, useRef } from 'react'
import { useEffect } from 'react';
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai"
import axios from 'axios';
import AdminWithAuth from '../../AdminAuthRoute';
import secureLocalStorage from 'react-secure-storage';
import { cmsConstats, urlConstants } from '../../../../constants/urlConstants';
const fees = () => {
    let blinkOnAddOrEdit = useRef(null)
    let Token = secureLocalStorage.getItem('CMSTk');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [edit, setedit] = useState(false);
    const [data, setData] = useState({
        mainHeading: "",
        description: "",
        listDescription: "",
        list1: [''],
        list2: [''],
        table: [{
            perticulers: "",
            cost: ""
        }]
    })






    const clickUploadImage = (imgTagID) => {
        document.getElementById(imgTagID).click();
    }


    const handleInputChange = (e) => {
        // const {name,value} = e.target;

        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    const handleImageInputChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.files[0]
        });

    }







    let [DefaultData, setdefaultDeta] = useState({});
    useEffect(() => {
        fetchData();
    }, [])


const fetchData = async() =>{
  let res = await fetch(urlConstants.getFees)
  let data = await res.json();
  setdefaultDeta({...data.uscpaFees})
  console.log(data.uscpaFees);
}





    const handleEdit = async (data) => {
        blinkOnAddOrEdit.current?.focus()
        setedit(true)

        setData({
            mainHeading: data.mainHeading,
            description: data.description,
            listDescription: data.listDescription,
            list1: data.list1.map((d, id) => d),
            list2: data.list2.map((d, id) => d),
            table: data.table.map((d, id) => {
                return d
            })
        });

        window.scrollTo(0, 0)
    }

    console.log(data);



    const editData = async (e) => {
        e.preventDefault();

  const result = await axios.post(cmsConstats.editCPAFees, data, { headers: {'Content-Type': 'application/json',
  'Authorization': `JWT ${Token}`}})
  console.log("result", result);
  console.log(result.data)

        setedit(false)

        setData({
            mainHeading: "",
            description: "",
            listDescription: "",
            list1: [''],
            list2: [''],
            table: [{
                perticulers: "",
                cost: ""
            }]
        });

        fetchData();

    }



    const removeRow = (id) => {
        setData(() => {
            return {
                ...data,
                table: data.table.filter((d, ind) => {
                    return ind !== id
                })
            }
        })
    }


    const handletableChange = (e, i) => {
        let { name, value } = e.target;

        let newData = [...data.table]
        newData[i][name] = value;
        setData({
            ...data,
            table: [...newData]
        })
    }


    const handleListOneChange = (e, i) => {
        let { name, value } = e.target;

        let newData = [...data.list1];
        newData[i] = value;
        setData({
            ...data,
            list1: [...newData]
        })
    }



    const handleListTwoChange = (e, i) => {
        let { name, value } = e.target;

        let newData = [...data.list2];
        newData[i] = value;
        setData({
            ...data,
            list2: [...newData]
        })
    }


    const removelist = (id, type) => {
        if (type == 'list1') {
            setData({
                ...data,
                list1: data.list1.filter((d, ind) => {
                    return ind !== id
                })
            })
        } else {
            setData({
                ...data,
                list2: data.list2.filter((d, ind) => {
                    return ind !== id
                })
            })
        }
    }
    return (
        <>
            <Head>
                <title>Posts - Simandhar Education</title>
            </Head>
            <SideTab />
            <section className="section fixedPadd">
                <div className="container">
                    <h2 className='heading03'>Fees</h2>
                    <form action="" method='POST' className='mt-4' onSubmit={editData}>

                        <div>
                            <div>
                                <div>
                                    <div className="inputFileds bb wdt-full">
                                        <label htmlFor="" className='title01'>Main Heading</label>
                                        <input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' name='mainHeading' type="text" onChange={(e) => handleInputChange(e)} value={data.mainHeading} />
                                    </div>
                                    <div className="inputFileds bb wdt-full mt-4">
                                        <label htmlFor="" className='title01'>Description</label>
                                        <input className='wdt-full bordernone title01' name='description' type="text" onChange={(e) => handleInputChange(e)} value={data.description} />
                                    </div>



                                    <br /><br />


                                    {
                                        data.table.map((d, i) => {
                                            return (

                                                <div key={i}>
                                                    <br />
                                                    <div className="inputFileds bb wdt-full">
                                                        <label htmlFor="" className='title01'>{i + 1} Particular</label>
                                                        <input className='wdt-full bordernone title01' name='perticulers' type="text" onChange={(e) => handletableChange(e, i)} value={d.perticulers} />
                                                    </div>

                                                    <div className="inputFileds bb wdt-full mt-4">
                                                        <label htmlFor="" className='title01'>{i + 1} Cost</label>
                                                        <input className='wdt-full bordernone title01' name='cost' onChange={(e) => handletableChange(e, i)} type="text" value={d.cost} />
                                                    </div>

                                                    <div className="two-col">
                                                        <div className="addwrap">
                                                            {data.table.length !== 1 && <a className='btn maroon-border-btn mt-4 text-center' onClick={() => removeRow(i)}>Remove Record</a>}
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <div className="right">
                                                        <div className="addwrap">
                                                            <a className='btn maroon-border-btn mt-4 text-center' onClick={() => setData({ ...data, table: [...data.table, { perticulers: "", cost: "" }] })}>Add More Record</a>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        })
                                    }
                                    <div className="inputFileds bb wdt-full mt-4">
                                        <label htmlFor="" className='title01'>list Description</label>
                                        <input className='wdt-full bordernone title01' name='listDescription' type="text" onChange={(e) => handleInputChange(e)} value={data.listDescription} />
                                    </div>







                                    {
                                        data.list1.map((d, i) => {
                                            return (

                                                <div key={i} className='mt-4'>
                                                    <br />
                                                    <div className="inputFileds bb wdt-full">
                                                        <label htmlFor="" className='title01'>{i + 1} List One</label>
                                                        <input className='wdt-full bordernone title01' name='list' type="text" onChange={(e) => handleListOneChange(e, i)} value={d} />
                                                    </div>


                                                    <div className="two-col">
                                                        <div className="addwrap">
                                                            {data.list1.length !== 1 && <a className='btn maroon-border-btn mt-4 text-center' onClick={() => removelist(i, 'list1')}>Remove List One</a>}
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="addwrap">
                                                            <a className='btn maroon-border-btn mt-4 text-center' onClick={() => setData({ ...data, list1: [...data.list1, ''] })}>Add List One</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
















                                    {
                                        data.list2.map((d, i) => {
                                            return (

                                                <div key={i} className='mt-4'>
                                                    <br />
                                                    <div className="inputFileds bb wdt-full">
                                                        <label htmlFor="" className='title01'>{i + 1} List Two</label>
                                                        <input className='wdt-full bordernone title01' placeholder='List Two' name='listtwo' type="text" onChange={(e) => handleListTwoChange(e, i)} value={d} />
                                                    </div>


                                                    <div className="right">
                                                        <div className="addwrap">
                                                            {data.list2.length !== 1 && <a className='btn maroon-border-btn mt-4 text-center' onClick={() => removelist(i, 'list2')}>Remove List One</a>}
                                                        </div>
                                                    </div>
                                                    <br />


                                                </div>
                                            )
                                        })
                                    }





                                    <div className="right">
                                        <div className="addwrap">
                                            <a className='btn maroon-border-btn mt-4 text-center' onClick={() => setData({ ...data, list2: [...data.list2, ''] })}>Add List Two</a>
                                        </div>
                                    </div>




















                                </div>

                            </div>



                        </div>




                        <div className="two-col">
                            <div className="two-col">
                                <div className="addwrap">
                                    <input type="submit" className='btn maroon-border-btn mt-4 text-center' value="Save" onClick={editData} />
                                </div>
                            </div>
                        </div>


                    </form >


                </div>
            </section >



















            <section className="section fixedPadd testimonial-cms-section">
                <div className="container">
                    {/* <button className='cms-btn edit-box add-btn' onClick={()=>handleAddNew()}>Add New</button> */}
                    <table cellPadding="0" cellSpacing="0" className='cms-table'>
                        <thead>
                            <tr>
                                <th><p>Sr. No.</p></th>
                                <th><p>mainHeding</p></th>
                                <th><p>Description</p></th>
                                <th style={{ width: "100px" }}><p>Action</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>1.</p></td>
                                {/* <td><p><img src={DefaultData.img} alt="" /></p></td> */}
                                <td><p>{DefaultData.mainHeding ? DefaultData.mainHeding : 'no Heading Available'}</p></td>
                                <td><p>{DefaultData.description ? DefaultData.description : 'no description Available'}</p></td>
                                <td>
                                    <button className='cms-btn edit-box' onClick={() => handleEdit(DefaultData)}><BiEditAlt /></button>
                                    {/* <button className='cms-btn edit-box' onClick={()=>deleteListData(data.id)}><AiOutlineDelete /></button> */}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default AdminWithAuth(fees)