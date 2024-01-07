import React from 'react';
import Image from 'next/image';
import { urlConstants as urlConstant } from "@/constants/urlConstants";
import Link from 'next/link'

const AlumniCard = ({ AlumniCardData, companyName }) => {

    const alumniData = [];

    const alumniNames = [
        "Vishal Doshi",
        "Arpitha Settipalli",
        "Tirth Barbhaya",
        "Sanjay Kumar",
        "Vasudha vadakattu",
        "Sumesh Jain",
        "Manali Joshi",
        "Vineet Gupta",
        "Arpita Mondal",
        "Deepak Sharma",
        "Nitesh Mittal",
        "Sharmila Reddy Jonnala",
        "Afsheen Zeba",
        "Shreya Malhotra",
        "Vishal Patil",
        "Priyesh Agarwal",
        "Varun Bhandary",
        "Meena Gupta",
        "Yashvi Panchal",
        "Priyanka Dobariya",
        "Supriyo Mullick",
        "Haritha Kurada",
        "Tanya Ranjan",
        "Sumila S",
        "Hari Hk",
        "Daksh Batra",
        "Hiren Agrawal",
        "Shreyas Srinivas Rao",
        "Aanchal",
        "Pushpa Mudireddy",
        "Bharath",
        "Ansh Iyer",
        "Lakshmi Pillai",
        "Naizy Jabeen",
        "Shivaji Bamgude",
        "Nikita Kalia",
        "Angad Pandher",
        "Saima Bhandari",
        "Tejaswini Chandolu",
        "Tina Chaturvedi",
        "Adarsh jaiswal",
        "Chetan Kumar",
        "Ackshay Raman",
        "Sneha Raghavan",
        "Padmashree Srinivas",
        "Ranjani Bhat",
        "Bitzy George",
        "Sachin Mall",
        "Mansi Arora",
        "Sreyas_Chacko",
        "Jagdish Patel",
        "Urvisha Parmar",
        "Aashish Chaturvedi",
        "Samanta Kanchan",
        "Anjali Goyal",
        "Pranita Nair",
        "Parminder Singh",
        "Venkatesan Radhakrishnan",
        "Jai Gupta",
        "Anand",
        "Hargun Kaur",
        "Gautam",
        "Tony Thomas",
        "Priyam Agarwal",
        "Priya Mittal",
        "Subhiksha V S",
        "Kaushal Sanghvi",
        "Vaishnavi Patel",
        "Deepa Harikumar",
        "Rishap Jindal",
        "Punit Agarwal",
        "Kanika",
        "Piyush Jain",
        "Hari Rupawala",
        "Divyanshi",
        "Vedant Comar",
        "Shilpi Jain",
        "Nandhu",
        "Sharad",
        "Ritika",
        "Ishita Narang",
        "Sanam",
    ];

    for (let i = 1; i <= 82; i++) {
        const imageUrl = `https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Round+with+black+outline/${i}.jpg`;

        alumniData.push({
            imageUrl,
            title: alumniNames[i - 1], // Use the names as titles
            description: 'Cleared US CPA exams in 2023',
        });
    }
    const alumniData2 = [];
    const alumniName2 = [  "Dairya Arora",
    "Darshan Panchal",
    "Dushyant Joshi",
    "Bhawna Jain",
    "Priyank Bhambhwani",
    "Pranita Lewis",
    "Prerana Tata",
    "Debdip Ghosh",
    "Basit Tanveer",
    "Nathan Derham Inafo",
    "Deepali Agrawal",
    "Sree Sameera Gade",
    "Pranav Dua",
    "Aparna Devalla",
    "Archisman Das",
    "Vaishnavi Patel"];
    const alumniLinkedin = [
        "https://www.linkedin.com/in/dhairya--arora/",
        "https://www.linkedin.com/in/dpanchal1710/",
        "https://www.linkedin.com/in/dushyantjoshisantkumar/",
        "https://www.linkedin.com/in/bhawna-jain-696784219/",
        "https://www.linkedin.com/in/priyank-bhambhwani-3a290b1a7/",
        "https://www.linkedin.com/in/pranita-lewis-94b42118b/",
        "https://www.linkedin.com/in/prerana-tata-37214a167/",
        "https://www.linkedin.com/in/debdip-ghosh-us-cpa-license-awaiting-mba-f-b-com-h-5a788721/",
        "", // Placeholder for "No" case
        "https://www.linkedin.com/in/nathan-derham-inafo-42066b18b/",
        "https://www.linkedin.com/in/deepaliagr15/",
        "https://www.linkedin.com/in/sree-sameera-gade/",
        "https://www.linkedin.com/in/pranav-dua-36642a133/",
        "https://www.linkedin.com/in/aparna-devalla-17451565/",
        "https://www.linkedin.com/in/archisman-das-09a824166/",
        "https://www.linkedin.com/in/vaishnavipatel9/"
    ];
    const alumniCompany = ["https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Deloitte+(2).jpg",
    "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EideBailly+(1).jpg",
    "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EideBailly+(1).jpg",
    "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/KNAV+(2).jpg",
    "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/GrantThornton+(2).jpg",
    "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/kpmg.webp",
    "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/kpmg.webp",
    "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/kpmg.webp",
    "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/kpmg.webp",
    "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/kpmg.webp",
    "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/kpmg.webp",
    "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/kpmg.webp",
    "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/kpmg.webp",
    "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Oremus+(2).jpg",
    "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/GrantThornton+(2).jpg",
    "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Infosys+(2).jpg"
  ];
    const alumniCompanyName = [ "Deloitte",
    "Eide Bailley",
    "Eide Bailley",
    "KNAV",
    "Grant Thornton",
    "KPMG Global Services",
    "KPMG Global Services",
    "KPMG Global Services",
    "KPMG Global Services",
    "KPMG Global Services",
    "KPMG Global Services",
    "KPMG Global Services",
    "KPMG Global Services",
    "KPMG Global Services",
    "Oremus",
    "Grant Thornton",
    "Infosys"];
    const alumniLocation = [
        "Delhi, Gurgaon ",
        "Mumbai",
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Bengaluru",
        "Bengaluru",
        "Kolkata",
        "Kerala",
        "Bengaluru",
        "Bengaluru",
        "Hyderabad",
        "Bengaluru",
        "Bengaluru",
        "Kolkata",
        "Bengaluru"
    ]

    for (let i = 1; i <= 16; i++) {
        const imageUrl = `https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/${i}.jpg`;

        alumniData2.push({
            imageUrl,
            title: alumniName2[i - 1], // Use the names as titles
            description: 'CPA Alumi',
            description2: 'Placed at',
            linkedin: alumniLinkedin[i - 1],
            companyImage: alumniCompany[i - 1],
            companyName: alumniCompanyName[i - 1],
            location: alumniLocation[i - 1],
        });
    }


    const alumniData3 = [];
    const alumniImageUrls = [
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/gaurav.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/sirinrathod.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ayushi.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/supriya.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/sricharita.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/jay-bhanushali.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Chaitanya.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/shravan.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/kirti-singh.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Pratyush.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/shrikesh-lahoti.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Akanksha-Jai-Kumar.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/kavneet.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Anju.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Akshay.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Nitin_Goyal.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/rithik-jain.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Shriya_Aradhyula.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Raghav_Prassanna.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Ashwini_Nathan.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Rinet_Dsilva.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Bobby_Agarwal.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/surya-teja.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/vinita-agarwal.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/1691911967724.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ritika-malik.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/anushka.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/priyal.webp"
      ];
      const alumniTitle = [
        "Gaurav Gambhir",
        "SIRIN RATHOD",
        "Ayushi Choudhary",
        "Supriya Suvidha Shree",
        "Sri Charita",
        "Jay Bhanushali",
        "Chaitanya Grover",
        "Shravan TK",
        "Kirti Singh",
        "Pratyush",
        "Shrikesh Lahoti",
        "Akanksha Jai Kumar",
        "Kavneet Singh Hanspal",
        "Anju Nampoothiry",
        "Akshay Jaiswal",
        "Nitin Goyal",
        "Rithik Jain",
        "Shriya Aradhyula",
        "Raghav Prasanna",
        "Ashwini Nathan",
        "Rinet DSliva",
        "Bobby Agarwal",
        "Surya Teja",
        "Vinita Agarwal",
        "Abhi Garg",
        "Ritika Malik",
        "Anoushka Baghla",
        "Priyal Ajmera"
      ];
      
    const companyImageUrls = [
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/crowee-image-1.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/company3.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/kpmg.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/bdo.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/amazon.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/jp.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/standard-chartered.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/pwc.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/bitm.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp"
      ];
      
    for (let i = 1; i <= 16; i++) {
      
        alumniData3.push({
            alumniImageUrls: alumniImageUrls[i - 1],
            alumniTitle: alumniTitle[i - 1], // Use the names as titles
            description: 'CPA Alumi',
            description2: 'Placed at',
            // linkedin: alumniLinkedin[i - 1],
            companyImageUrls: companyImageUrls[i - 1],
            // companyName: alumniCompanyName[i - 1],
            // location: alumniLocation[i - 1],
        });
    }

    const alumniData4 = [];
    const alumniNames1 = ["Arpitha Settipalli",
    "Tirth Barbhaya",
    "Sanjay Kumar",
    "Nitesh Mittal",
    "Sumesh Jain",
    "Priyesh Agarwal",
    "Ansh Iyer",
    "Shivaji Bamgude",
    "Nikita Kalia",
    "Angad Pandher",
    "Saima Bhandari",
    "Adarsh Jaiswal",
    "Ackshay Raman",
    "Sneha Raghavan",
    "Padmashree Srinivas",
    "Ranjani Bhat",
    "Urvisha Parmar",
    "Aashish Chaturvedi",
    "Samanta Kanchan",
    "Sachin Mall",
    "Parminder Singh",
    "Hargun Kaur",
    "Tony Thomas",
    "Priyam Agarwal",
    "Priya Mittal",
    "Subhiksha V S",
    "Rishap Jindal",
    "Punit Agarwal",
    "Hari Rupawala",
    "Ishita Narang",
    "Shilpi Jain",
    "Divyanshi Jindal",
    "Tanya Ranjan",
    "Deepak Sharma"];

    
    const companyImageUrls1 = [];
    const alumniCompanyName1 = [
        "Working at PWC",
        "Working at Ornate Plastics Pvt. Ltd",
        "Working at Haier Appliances India Pvt Ltd",
        "Working at Haier Appliances India Pvt Ltd",
        "Working at University of California, San Francisco",
        "Working at Unilever",
        "Working at Deloitte",
        "Working at Tenable",
        "Working at Deloitte USI",
        "Working at Grant Thornton LLP (US)",
        "Working at Deloitte",
        "Working at Giesecke-Devrient",
        "Working at Unilever",
        "Working at Grant Thornton Singapore",
        "Working at Global Outreach Doctors",
        "Working at EY GDS",
        "Working at Aptech",
        "Working at Cipla Health Ltd",
        "Working at EY",
        "Working at Deloitte",
        "Working at EY",
        "Working at Deloitte India (Offices of the US)",
        "Working at IMA",
        "Working at EY",
        "Working at EY",
        "Working at Deloitte",
        "Working at Deloitte USI",
        "Working at Apex Group Ltd",
        "Working at Synex Renewable Energy Corporation (TSX:SXI)",
        "Working at Deloitte",
        "Working at Contra Costa Health",
        "Working at PWC",
        "Working at KPMG Global Services (KGS)",
        "Working at BT"
    ];
    const alumniLocation1 = [
        "Bangalore",
        "Gujarat",
        "Delhi",
        "Uttar Pradesh",
        "USA, San Francisco",
        "West Bengal",
        "Bengaluru",
        "Pune, Maharashtra",
        "Gurugram, Haryana",
        "California, United States",
        "Gurugram, Haryana",
        "New Delhi",
        "Delhi",
        "Singapore",
        "Ashburn, Virginia, United States",
        "Bengaluru, Karnataka",
        "Mumbai",
        "Mumbai",
        "Bengaluru",
        "Delhi",
        "Delhi",
        "Delhi",
        "Kerala",
        "Bengaluru",
        "Gurugram, Haryana",
        "Bengaluru",
        "Jharkhand",
        "Gurugram, Haryana",
        "Sarnia, Ontario, Canada",
        "Haryana",
        "California, United States",
        "Gurugram, Haryana",
        "Noida, UP",
        "Delhi"
    ];

    
// const imageUrl2 = [
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/101.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/102.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/103.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/104.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/105.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/106.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/107.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/108.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/109.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/110.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/111.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/112.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/113.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/114.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/115.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/116.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/117.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/118.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/119.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/120.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/121.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/122.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/123.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/124.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/125.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/126.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/127.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/128.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/129.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/130.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/131.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/132.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/133.jpg",
//     "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/134.jpg"

// ]
const alumniLinkedin2 = [
    "https://www.linkedin.com/in/dhairya--arora/"
       
];

    for (let i = 101; i <= 134; i++) {
        const imageUrl2 = `https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/${i}.jpg`;

        alumniData4.push({
            imageUrl2,
            alumniTitle: alumniNames1[i - 101], // Use the names as titles
            description: 'CPA Alumi',
            description2: 'Working at',
            companyImageUrls: companyImageUrls1[i - 101],
            companyName: alumniCompanyName1[i - 101],
            location: alumniLocation1[i - 101],
            linkedin2: alumniLinkedin2[i - 101],

        });
    }


    return (
        <>
        {alumniData4.map((alumni, index) => (
            <div className="box text-center" >
                            <div className="achiverImg">
                                <img loading='lazy'   src={alumni.imageUrl2}
                                alt={alumni.alumniTitle} fill={true} sizes='100vw' className='resp-img alumni-img' />
                            </div>
                            <div className="title">
                            {alumni.alumniTitle}
                            </div>
                            <div className="discription">
                            {alumni.description}, {alumni.location}
                            </div>
                            <div className="company">
                                <div className="caption">
                                    {alumni.description2}
                                </div>
                                <div className="icon">
                                    <img loading='lazy' src={alumni.companyImageUrls} alt={alumni.companyName} fill={true} sizes='100vw' className='resp-img' />
                                </div>
                            </div>
                            <div className="youtube">
                                
                                <Link href={alumni.imageUrl2} target='_blank'> <img loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/icons8-linkedin-48.png" alt= {alumni.title}fill={true} sizes='100vw' className='resp-img ' /></Link>
                            </div>
                        </div>
         ))
         }
         {/* {alumniData3.map((alumni, index) => (
            <div className="box text-center" >
                            <div className="achiverImg">
                                <img loading='lazy'   src={alumni.alumniImageUrls}
                                alt={alumni.alumniTitle} fill={true} sizes='100vw' className='resp-img alumni-img' />
                            </div>
                            <div className="title">
                            {alumni.alumniTitle}
                            </div>
                            <div className="discription">
                            {alumni.description}
                            </div>
                            <div className="company">
                                <div className="caption">
                                    {alumni.description2}
                                </div>
                                <div className="icon">
                                    <img loading='lazy' src={alumni.companyImageUrls} alt={alumni.alumniTitle} fill={true} sizes='100vw' className='resp-img' />
                                </div>
                            </div>
                        </div>
         ))
         } */}
         {alumniData2.map((alumni, index) => (
            <div className="box text-center" >
                            <div className="achiverImg">
                                <img loading='lazy'   src={alumni.imageUrl}
                                alt={alumni.title} fill={true} sizes='100vw' className='resp-img alumni-img' />
                            </div>
                            <div className="title">
                            {alumni.title}
                            </div>
                            <div className="discription">
                            {alumni.description}, {alumni.location}
                            </div>
                            <div className="company">
                                <div className="caption">
                                    {alumni.description2}
                                </div>
                                <div className="icon">
                                    <img loading='lazy' src={alumni.companyImage} alt={alumni.companyName} fill={true} sizes='100vw' className='resp-img' />
                                </div>
                            </div>
                            <div className="youtube">
                                
                                <Link href={alumni.linkedin} target='_blank'> <img loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/icons8-linkedin-48.png" alt= {alumni.title}fill={true} sizes='100vw' className='resp-img ' /></Link>
                            </div>
                        </div>
         ))
         }
                {alumniData.map((alumni, index) => (
                    <div key={index} className="box text-center">
                        <div className="achiverImg">
                            <Image
                                loading="lazy"
                                src={alumni.imageUrl}
                                alt={alumni.title}
                                width={300}
                                height={200}
                                className="resp-img alumni-img"
                            />
                        </div>
                        <div className="title">{alumni.title}</div>
                        {/* <div className="discription">{alumni.description}</div> */}
                    </div>
                ))}
          

            {AlumniCardData.map((data, index) => {
                let image = urlConstant.S3_buckets + data.img;
                return (
                    <div className="box text-center" key={index}>
                        <div className="achiverImg">
                            <Image
                                loading="lazy"
                                src={image}
                                alt={data.name}
                                width={300}
                                height={200}
                                className="resp-img alumni-img"
                            />
                        </div>
                        <div className="title">{data.name}</div>
                        {/* <div className="discription">{data.description}</div> */}

                        {companyName ? <p>{data.company}</p> : null}
                    </div>
                );
            })}
        </>
    );
}

export default AlumniCard;
