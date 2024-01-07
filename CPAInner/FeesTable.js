import React, { useState } from 'react'
import { cpaFees } from '../database/data/fees.json'

const Fees = ({FeesTable}) => {
    let sum = 0;
    FeesTable.table.map((data) => {
        sum += (+data.cost)
    })
    return (
        <>
            <section className="section Fees-section">
                <div className="container">
                    <div className="part-table">
                        <h1 className="heading02">
                            {cpaFees.mainHeading}
                        </h1>
                        <div className="title01">
                            {cpaFees.description}
                        </div>
                    </div>
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
                                    cpaFees.table.map((lists, index) => {
                                        return (
                                            <>
                                                <tr>
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
                    </div>
                    <div className="title01">
                        ** Please note International testing fees is not applicable If you are writing CPA exam in USA.
                    </div>
                </div>
            </section>
        </>
    )
}

export default Fees