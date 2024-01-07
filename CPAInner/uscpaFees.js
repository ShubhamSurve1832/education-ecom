import React from 'react'
import { cpaFees, cmaFees } from '../database/data/fees.json'
import _ from 'lodash'
const uscpaFees = ({ cpaTable, FeesData }) => {
    let table = _.get(FeesData,"table",[])
    let list1 = _.get(FeesData,"list1",[])
    let list2 = _.get(FeesData,"list2",[])
    let sum = 0;
    table.map((data) => {
        sum += (+data.cost)
    })
    return (
        <>
            <section className="section Fees-section">
                <div className="container">
                    <div className="part-table">
                        <h1 className="heading02">
                            {FeesData.mainHeading}
                        </h1>
                        <div className="title01">
                            {FeesData.description}
                        </div>
                    </div>
                    {
                        cpaTable ?
                            <div className='custom-scrollbar'>
                                <table cellpadding="0" cellspacing="0" className="strip custom-scrollbar">
                                    <thead>
                                        <tr>
                                            <th>Particulars</th>
                                            <th>Cost in INR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            table.map((lists, index) => {
                                                return (
                                                    <>
                                                        <tr key={index}>
                                                            <td>{lists.perticulers}</td>
                                                            <td>{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'INR' }).format(lists.cost)}</td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }

                                        <tr>
                                            <td className='red'>CPA exam fees </td>
                                            <td className='dark-red'>{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'INR' }).format(sum)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> : <div className='custom-scrollbar'>
                                <table cellpadding="0" cellspacing="0" className="strip custom-scrollbar">
                                    <thead>
                                        <tr>
                                            <th>US CMA Course Fee</th>
                                            <th>Student</th>
                                            <th>Professional</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            table.map((lists, index) => {
                                                return (
                                                    <>
                                                        <tr key={index}>
                                                            <td>{lists.perticulers}</td>
                                                            <td>{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(lists.cost)}</td>
                                                            <td>{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(lists.professional)}</td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        {/* <tr>
                                            <td>IMA Membership Fee</td>
                                            <td>$45</td>
                                            <td>$260</td>
                                        </tr>
                                        <tr>
                                            <td>Entrance Fee</td>
                                            <td>	$210</td>
                                            <td>	$280</td>
                                        </tr>
                                        <tr>
                                            <td>Exam Fee (Part-1)</td>
                                            <td>$345</td>
                                            <td>$460</td>

                                        </tr>
                                        <tr>
                                            <td>Total (Part-1 &amp; 2)</td>
                                            <td>$945</td>
                                            <td>$1460</td>

                                        </tr> */}

                                    </tbody>
                                </table>
                            </div>
                    }


                    {/* <div className="title01">
                        ** Please note International testing fees is not applicable If you are writing CPA exam in USA.
                    </div> */}

                    <div className="progam-info">
                        <p className="title01">{FeesData.listDescription}
                        </p>
                        <ul className='mt-2'>
                            {
                                list1.map((list, index) => {
                                    return (
                                        <li key={index}>{list}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {
                        cpaTable ?
                            <div className="progam-info mt-4">
                                <h2 className="heading02">CPA Fees in India</h2>
                                <ul className='listingFees mt-2'>
                                    {
                                        list2.map((list, index) => {
                                            return (
                                                <li key={index}>{list}</li>
                                            )
                                        })
                                    }
                                </ul>

                                <p className="title01">
                                    Overall, the cost of pursuing CPA in India would amount to INR 2,75,145 approximately. This is excluding Simandhar Training fees and Becker product.</p>

                            </div> : ""
                    }
                </div>
            </section>
        </>
    )

}

export default uscpaFees