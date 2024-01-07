import { useState, useEffect } from "react";
import AlumniCard from '../../CPA/AlumniCardcma';

import { urlConstants as urlConstant } from "../../constants/urlConstants";
import AlumniCardData from "../../database/data/alumniPage.json";
import axios from "axios";

const CmaAlumni = () => {
  //CPA ALUMINI PAGE
  const [cmaAlumniData, setCmaAlumniData] = useState({
    CMAalumni: {},
  });
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.getAlumniPage,
      responseType: "json",
    })
      .then((res) =>
        setCmaAlumniData((prevState) => ({
          CMAalumni: res.data.CMAalumni,
        }))
      )
      .catch((err) => console.log("error is ", err.message));
  }, []);

  // ACHIVER SECTION
  const [data, setData] = useState({
    cmaFaculty: {},
  });
  useEffect(() => {
    axios({
      method: "get",
      url: urlConstant.achiverSection,
      responseType: "json",
    })
      .then((res) =>
        setData((prevState) => ({ cmaFaculty: res.data.cmaFaculty }))
      )
      .catch((err) => console.log("error is ", err.message));
  }, []);

  return (
  <>
  <section className="alumniSection">
                <div className="container">
                    <div className="achievers">
                       
                        <h3 className="heading02 text-center">US CMA Alumni</h3>
                        <div className="achieversBox">
                            <AlumniCard AlumniCardData={AlumniCardData.cmaAlumniCard} companyName={true} />
                           
                        </div>

                    </div>
                </div>
            </section>
          
  </>
  );
};

export default CmaAlumni;
