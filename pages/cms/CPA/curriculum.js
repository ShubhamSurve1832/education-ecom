import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import SideTab from '../../../Dashboard/SideTab'
import { useState, useEffect, useRef } from 'react'
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import axios from 'axios';
import AdminWithAuth from '../AdminAuthRoute';
import secureLocalStorage from 'react-secure-storage';
import { cmsConstats, urlConstants } from '../../../constants/urlConstants';
import { toast } from "react-hot-toast";

const curriculum = () => {
    let blinkOnAddOrEdit = useRef(null)
    let Token = secureLocalStorage.getItem('CMSTk');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const [edit, setedit] = useState(false);

    const [data, setData] = useState({
        name: "",
        time: "Duration",
        hour: "",
        questions: [{
            question: '',
            answers: ""
        }]
    })





    const SubmitData = async (e) => {

        e.preventDefault();
        postData();
    }






    const postData = async () => {


        const result = await axios.post(cmsConstats.addCPACurriculum, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${Token}`
            }
        })
        // console.log("result", result);
        // console.log(result.data)

        fetchData();

        setData({
            name: "",
            time: "Duration",
            hour: "",
            questions: [{
                question: '',
                answers: ""
            }]
        });

    }



    let [DefaultData, setdefaultDeta] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])




    const fetchData = async () => {
        let res = await fetch( urlConstants.curriculumSection)
        let data = await res.json();
        setdefaultDeta([...data.cpaPage.tab_button])
        // console.log(data);
    }









    const handleEdit = async (data, ind) => {
        blinkOnAddOrEdit.current?.focus()
        setedit(true)

        let res = await fetch(urlConstants.curriculumSection)
        let newdata = await res.json();
        let newVal = newdata.cpaPage.description.filter((d, id) => {
            return data.id === d.id
        })

        // console.log('got the value ---',newVal);


        // console.log({
        //     id : ind,
        //         name: data.name,
        //     time: "Duration",
        //     hour: newVal[0].hour,
        //     questions : newVal[0].quesans.map((d,id)=>{
        //         return {question : d.question , answers : d.answers.map((d,id)=>d)}
        //     })
        // });



        setData({
            id: ind,
            name: data.name,
            time: "Duration",
            hour: newVal[0].hour,
            questions: newVal[0].quesans.map((d, id) => {
                return { question: d.question, answers: d.answers.map((d, id) => d) }
            })
        });

        window.scrollTo(0, 0)
    }

    // console.log(data);










    const editData = async (e) => {
        e.preventDefault();

        const result = await axios.post(cmsConstats.editCPACurriculum, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${Token}`
            }
        })
        // console.log("result", result);
        // console.log(result.data)

        setedit(false)

        setData({
            name: "",
            time: "Duration",
            hour: "",
            questions: [{
                question: '',
                answers: ""
            }]
        });

        fetchData();

    }








    const handleAddNew = () => {
        blinkOnAddOrEdit.current?.focus()
        setedit(false)
        setData({
            name: "",
            time: "Duration",
            hour: "",
            questions: [{
                question: '',
                answers: ""
            }]
        });
        window.scrollTo(0, 0)
    }






    const deleteListData = async (ind) => {


        if (confirm("Data Will Be Deleted Permanently.!")) {
            const result = await axios.post(cmsConstats.deleteCPACurriculum, { id: ind }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${Token}`
                }
            })
            // console.log("result", result);
            // console.log(result.data)

            setedit(false)
            setData({
                name: "",
                time: "Duration",
                hour: "",
                questions: [{
                    question: '',
                    answers: ""
                }]
            });
            fetchData();
        }

    }








    const addRows = () => {
        setData(() => {
            return {
                ...data,
                questions: [...data.questions, {
                    question: '',
                    answers: ""
                }]
            }
        })
    }


    const removeRow = (ind) => {
        let newQA = data.questions.filter((data, id) => {
            return id !== ind;
        })

        setData(() => {
            return {
                ...data,
                questions: [...newQA]
            }
        })
    }



    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }



    const handleQuestionInput = (e, i) => {
        let { name, value } = e.target;

        let newQA = [...data.questions];
        newQA[i][name] = value;

        setData(() => {
            return {
                ...data,
                questions: [...newQA]
            }
        })
    }



    const handleAnswerInput = (e, i) => {
        let { name, value } = e.target;

        let newQA = [...data.questions];
        newQA[i][name] = value.split(',');

        setData(() => {
            return {
                ...data,
                questions: [...newQA]
            }
        })
    }

    return (
        <>
            <Head>
                <title>Posts - Simandhar Education</title>
            </Head>
            <SideTab />
            <section className="section fixedPadd">
                <div className="container">
                    <h2 className='heading03'>CPA Curriculum section</h2>
                    <form action="" method='POST' className='mt-4'>
                        <div>
                            <div>
                                <div>
                                    <div className="inputFileds bb wdt-full">
                                        <label htmlFor="" className='title01'>LHS Title</label>
                                        <input ref={blinkOnAddOrEdit} className='wdt-full bordernone title01' name='name' type="text" onChange={(e) => handleInputChange(e)} value={data.name} />
                                    </div>

                                    <div className="inputFileds bb wdt-full mt-4">
                                        <label htmlFor="" className='title01'>Duration</label>
                                        <input className='wdt-full bordernone title01' name='hour' onChange={(e) => handleInputChange(e)} type="text" value={data.hour} />
                                    </div><br /><br />

                                    {
                                        data.questions.map((d, i) => {
                                            return (
                                                <div key={i}>
                                                    <div className="inputFileds bb wdt-full">
                                                        <label htmlFor="" className='title01'>{i + 1} RHS Title</label>
                                                        <input className='wdt-full bordernone title01' name='question' type="text" onChange={(e) => handleQuestionInput(e, i)} value={d.question} />
                                                    </div>

                                                    <div className="inputFileds bb wdt-full mt-4">
                                                        <label htmlFor="" className='title01'>{i + 1} Bullets (separate each point with comma,)</label>
                                                        <input className='wdt-full bordernone title01' name='answers' onChange={(e) => handleAnswerInput(e, i)} type="text" value={d.answers} />
                                                    </div>

                                                    <div className="two-col">
                                                        <div className="addwrap">
                                                            {data.questions.length !== 1 && <a className='btn maroon-border-btn mt-4 text-center' onClick={() => removeRow(i)}>Remove Q/A</a>}
                                                        </div>
                                                    </div>
                                                    <br />


                                                </div>
                                            )
                                        })
                                    }


                                    <div className="two-col">
                                        <div className="addwrap">
                                            <a className='btn maroon-border-btn mt-4 text-center' onClick={addRows}>Add More Q/A</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="two-col">
                            <div className="two-col">
                                <div className="addwrap">
                                    {edit ? <input type="submit" className='btn maroon-border-btn mt-4 text-center' value="Save" onClick={editData} /> : <input type="submit" className='btn maroon-border-btn mt-4 text-center' onClick={SubmitData} value="Submit" />}
                                </div>
                            </div>
                        </div>
                    </form >
                </div>
            </section >











            <section className="section fixedPadd testimonial-cms-section">
                <div className="container">
                    <button className='cms-btn edit-box add-btn' onClick={() => handleAddNew()}>Add New</button>
                    <table cellPadding="0" cellSpacing="0" className='cms-table'>
                        <thead>
                            <tr>
                                <th><p>Sr. No.</p></th>
                                {/* <th><p>Image</p></th> */}
                                <th><p>Test Name</p></th>
                                <th style={{ width: "100px" }}><p>Action</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                DefaultData && DefaultData.map((data, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td><p>{ind + 1}.</p></td>
                                            {/* <td><p><img src={img} alt="" /></p></td> */}
                                            <td><p>{data.name ? data.name : 'no Name Available'}</p></td>
                                            <td>
                                                <button className='cms-btn edit-box' onClick={() => handleEdit(data, data.id)}><BiEditAlt /></button>
                                                <button className='cms-btn edit-box' onClick={() => deleteListData(data.id)}><AiOutlineDelete /></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default AdminWithAuth(curriculum)