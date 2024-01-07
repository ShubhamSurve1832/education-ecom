import React from 'react'
import RegistrationForm from '../components/registrationForm';
// import AlumniCard1 from '../CPA/AlumniCard1';
// import AlumniCard from '../CPA/AlumniCard';
// import AlumniCardData from '../database/data/alumniPage.json'
import dynamic from "next/dynamic";

const AlumniCard1 = dynamic(() => import('../CPA/AlumniCard1'))
const AlumniCard = dynamic(() => import('../CPA/AlumniCard'))
const AlumniCardData = dynamic(() => import('../database/data/alumniPage.json'))


const AlumniContent = () => {
    return (
        <>

            <section className="alumniSection">
                <div className="container">
                    <div className="achievers">
                        <h2 className="heading02 text-center">Our Achievers</h2>
                        <h3 className="heading03 text-center">Think CPA, Think Simandhar</h3>
                        <div className="achieversBox">
                            <AlumniCard AlumniCardData={AlumniCardData.cpaAlumniCard} />
                            <AlumniCard1 companyName={true} AlumniCardData={AlumniCardData.cpaAlumniCard1} />
                        </div>
                        {/* <div className="viewBtn text-center">
                            <p href="#" className="btn maroon-border-btn maroon-border-btn-arrow">View More</p>
                        </div> */}
                    </div>
                </div>
            </section>
            <RegistrationForm />
        </>
    )
}

export default AlumniContent