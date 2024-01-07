import { useState,useEffect } from "react";
import AlumniCard from '../../CPA/AlumniCardcpa';
import AlumniCard1 from '../../CPA/AlumniCard1';
// import AlumniCardInternational from '../../CPA/AlumniCardcpaInternational'
import { urlConstants as urlConstant } from '../../constants/urlConstants'
import AlumniCardData from '../../database/data/alumniPage.json'
import axios from 'axios';


const CpaAlumni = () => {

	//CPA ALUMINI CARD1 PAGE
	const [cpaAlumniData, setCpaAlumniData] = useState({
		CPAalumni: {},
	});
	useEffect(() => {
		axios({
			method: "get",
			url: urlConstant.getAlumniPage,
			responseType: "json",
		})
			.then((res) =>
				setCpaAlumniData((prevState) => ({
					CPAalumni: res.data.CPAalumni,
				}))
			)
			.catch((err) => console.log("error is ", err.message));
	}, []);

	//CPA ALUMINI CARD1 PAGE
	const [cpaAlumniCardData, setCpaAlumniCardTabData] = useState({
		cpaAlumniCard: [],
	});
	useEffect(() => {
		axios({
			method: "get",
			url: urlConstant.getAlumniPage,
			responseType: "json",
		})
			.then((res) =>
				setCpaAlumniCardTabData((prevState) => ({
					cpaAlumniCard: res.data.cpaAlumniCard,
				}))
			)
			.catch((err) => console.log("error is ", err.message));
	}, []);

	//CPA ALUMINI CARD1 PAGE
	const [cpaAlumniCardData1, setCpaAlumniCardTabData1] = useState({
		cpaAlumniCard1: [],
	});
	useEffect(() => {
		axios({
			method: "get",
			url: urlConstant.getAlumniPage,
			responseType: "json",
		})
			.then((res) =>
				setCpaAlumniCardTabData1((prevState) => ({
					cpaAlumniCard1: res.data.cpaAlumniCard1,
				}))
			)
			.catch((err) => console.log("error is ", err.message));
	}, []);
    return (
        <>
        <section className="alumniSection">
				<div className="container">
					<div className="achievers">
						

						{/* <h3 className="heading02 text-center">US CPA International Alumni</h3>
						<div className="achieversBox">
						<AlumniCardInternational />
						</div> */}
						<h3 className="heading02 text-center">US CPA Indian Alumni</h3>
						
						<div className="achieversBox">
					

							<AlumniCard AlumniCardData={cpaAlumniCardData.cpaAlumniCard} />
							<AlumniCard1 companyName={true} AlumniCardData={cpaAlumniCardData1.cpaAlumniCard1} />
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
 
export default CpaAlumni;