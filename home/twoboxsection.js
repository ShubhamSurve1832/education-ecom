import React from "react";
import { memo } from "react";
import { useState} from 'react';
import Image from 'next/image';

const twoboxsection = () => {

  const [showClick, setShowClick] = useState(false);
  const showIframe = () => {
    setShowClick(!showClick);
  };
  return (
    <>
      <section className="two-box-section mb-4">
        <div className="container">
          <div className="flex">
            <div className="w-50 iframe-box">
            <div className="video-click" onClick={showIframe} style={{ display: showClick ? 'none' : 'block' }}><Image loading='lazy' src="/img/video_img/exam_permanent1.jpg" alt="video img" fill={true} sizes='100vw' className='resp-img' /></div>
            {
              showClick ? <iframe src="https://www.youtube.com/embed/gN5AmCbBjnE?si=5Wi27ADKRGMdZRQA" frameborder="0"></iframe> : ""
            }
              
            </div>
            <div className="w-50 text-center mt-3">
              <h2 className="heading04 ">IS CPA EXAM PERMANENT IN INDIA ?</h2>
              
              <p className="justify">
                Yes, CPA exams were scheduled to be held every month in India,
                starting in January 2021! This brought continuous testing for
                CPA exams to India, which is a significant development.
                Simandhar Education conducted numerous exclusive webinar
                sessions in collaboration with AICPA and NASBA. Many candidates
                had questions about CPA exam prometric locations, NTS, CPA
                evaluation agencies, eligibility, and wondered if the CPA
                exam&#39;s presence in India was permanent. To get answers about
                CPA course fees, exams, and eligibility, people attended
                webinars by Simandhar Education, the official partner of Becker
                Professional Education, featuring India&#39;s popular CPA
                instructor and Co- Founder of Simandhar Education, Mr. Sripal
                Jain (CA, US CPA).
              </p>
              <p className="title mt-2">Sripal Jain, CA, CPA USA</p>
              <p>
                Co-founder &amp; Global Lead Instructor - Simandhar Education
                (Official Partner of Becker Professional Education and Channel
                Partner of AICPA)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(twoboxsection);
