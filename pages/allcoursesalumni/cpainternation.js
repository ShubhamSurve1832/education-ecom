import { useState,useEffect } from "react";
import AlumniCard from '../../CPA/AlumniCard';
import AlumniCard1 from '../../CPA/AlumniCard1';
import AlumniCardInternational from '../../CPA/AlumniCardcpaInternational'
import { urlConstants as urlConstant } from '../../constants/urlConstants'
import AlumniCardData from '../../database/data/alumniPage.json'
import axios from 'axios';


const CPAInternational = () => {


    return (
        <>
        <section className="alumniSection">
				<div className="container">
					<div className="achievers">
						
						<h3 className="heading02 text-center">US CPA International Alumni</h3>
						<div className="achieversBox">
						<AlumniCardInternational />
						</div>
						
					</div>
				</div>
			</section>

        </>

);
};
 
export default CPAInternational;