import React, { useState } from "react";
//import Accordion from 'react-bootstrap/Accordion';
import { Accordion } from "react-bootstrap";
import Header from '../components/Header'
import Footer from "../components/footer";

import CpaAlumni from "./allcoursesalumni/cpaalumni";
import CmaAlumni from "./allcoursesalumni/cmaalumni";
import EAAlumni from "./allcoursesalumni/eaalumni";
import CPAInternational from "./allcoursesalumni/cpainternation";
 
const FaqSection = () => {
  return (
    <>
    <Header />
    <section className="alumniSection">
			
					<div className="achievers">

						<h3 className="heading02 text-center">Our Courses Alumni</h3>
            </div>
          
            </section>
      <section className="section faq-section faq-section-cpa pt-8">
        <div className="container-l">
      
          <div className="faq-container">
            <Accordion>
              <Accordion.Item eventKey="CPA-1" className="faq-row">
                <Accordion.Header className="faq-title">CPA Alumni</Accordion.Header>
                <Accordion.Body className="faq-box">
                <Accordion >
                      <CpaAlumni/>
                </Accordion>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="CPAInternational-1" className="faq-row">
                <Accordion.Header className="faq-title">CPA International Alumni</Accordion.Header>
                <Accordion.Body className="faq-box">
                <Accordion >
                   <CPAInternational/>
                </Accordion>
                </Accordion.Body>
              </Accordion.Item>
 
              <Accordion.Item eventKey="CMA-1" className="faq-row">
                <Accordion.Header className="faq-title">CMA Alumni</Accordion.Header>
                <Accordion.Body className="faq-box">
                <Accordion >
                    <CmaAlumni/>
                </Accordion>
 
                </Accordion.Body>
              </Accordion.Item>
 
 
              <Accordion.Item eventKey="EA-1" className="faq-row">
                <Accordion.Header className="faq-title">EA Alumni</Accordion.Header>
                <Accordion.Body className="faq-box">
                <Accordion >
               </Accordion>
               <EAAlumni/>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
 
 
 
          </div>
        </div>
      </section>
 
      <Footer />
 
    </>
  );
};
 
export default FaqSection;