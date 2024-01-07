import { useState,useEffect } from "react";
import AlumniCard from '../../CPA/AlumniCardea';


const EaAlumni = () => {

	
    return (
        <>
        <section className="alumniSection">
				<div className="container">
					<div className="achievers">
					
						<h3 className="heading02 text-center">EA Alumni</h3>
						
						<div className="achieversBox">
					

							<AlumniCard  />
						</div>
						<div className="achieversBox">

						</div>
						{/* <div className="viewBtn text-center">
                            <a href="#" className="btn maroon-border-btn maroon-border-btn-arrow">View More</a>
                        </div> */}
					</div>
				</div>
			</section>

        </>

);
};
 
export default EaAlumni;