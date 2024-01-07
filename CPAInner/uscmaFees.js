import React from 'react'

const uscmaFees = () => {
    return (
        <>
            <section className="section Fees-section">
                <div className="container">
                    <div className="part-table">
                        <h1 className="heading02">
                            US CMA Course/Exam Fees
                        </h1>
                        <div className="title01">
                            US CMA Course fee varies with the status of the aspirant, any aspirant not a pursuing student of any course is considered as a professional. Following are the different fees involved in this course.
                        </div>
                    </div>
                    <div className='custom-scrollbar'>
                        <table cellpadding="0" cellspacing="0" className="strip custom-scrollbar">
                            <thead>
                                <tr>
                                    <th>US CMA Course Fee</th>
                                    <th>Student</th>
                                    <th>Professional</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
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

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )

}

export default uscmaFees