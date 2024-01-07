import React from 'react';
import Image from 'next/image';
import { urlConstants as urlConstant } from "@/constants/urlConstants";
import Link from 'next/link'

const AlumniCard = ({ AlumniCardData, companyName }) => {

    const alumniData2 = [];
    const alumniName2 = [
        "Tony Thomas",
        "Piyush Jain",
        "Bobby Agarwal",
        "Swetha Kiran",
        "Ahsan Khan",
        "Abhi Garg",
        "Anoushka Baghla",
        "Priyal Ajmera",
        "Dhairya Arora",
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
        "Vaishnavi Patel",
        "Gaurav Gambhir",
        "SIRIN RATHOD",
        "Ayushi Choudhary",
        "Supriya Suvidha Shree",
        "Sri Charita",
        "Jay Bhanushali",
        "Chaitanya Grover",
        "Shravan TK",
        "Kirti Singh",
        "Priyanka Choudry",
        "Shalini Mimani",
        "Mayur Deshmuk",
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
        "Rinet D'Silva",
        "Sarika Dudela"
    ]
    const alumniLinkedin = [
        " https://www.linkedin.com/in/tony-thomas-371929161/",
        "https://www.linkedin.com/in/piyush-jain-m/",
        "https://www.linkedin.com/in/bobby-agarwal-63539b172/",
        "https://www.linkedin.com/in/swetha-kiran-parupalli-/",
        "",
        "https://www.linkedin.com/in/abhi-garg-cpa-licensed-b72092188/",
        "https://www.linkedin.com/in/anoushka2310/",
        "https://www.linkedin.com/in/priyal-ajmera-65a874124/",
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
        "https://www.linkedin.com/in/vaishnavipatel9/",
        "https://www.linkedin.com/in/gaurav-gambhir-828529255/",
        "https://www.linkedin.com/in/sirin-rathod-2365411a1/",
        "",
        "https://www.linkedin.com/in/supriya-s-30a7951b5/",
        "https://www.linkedin.com/in/sricharitapagadala/",
        "https://www.linkedin.com/in/jay-bhanushali-cpa-724a97183/",
        "https://www.linkedin.com/in/chaitanya-grover-179ba6168/",
        "https://www.linkedin.com/in/shravan-t-k-56555b79/",
        "https://www.linkedin.com/in/kirti-singh-572027194/",
        "https://www.linkedin.com/in/sirin-rathod-2365411a1/",
        "https://www.linkedin.com/in/shalini-mimani-34157852/",
        "https://www.linkedin.com/in/mayur-deshmukh-cpa-us-license-pending-6475782b/",
        "https://www.linkedin.com/in/pratyush-kapahi-cpa-9b7607188/",
        "https://www.linkedin.com/in/ca-cpa-shrikesh/",
        "https://www.linkedin.com/in/akanksha-jai-kumar-4b88a6211/",
        "https://www.linkedin.com/in/kavhan/",
        "https://www.linkedin.com/in/anju-nampoothiry-9063a4186/",
        "https://www.linkedin.com/in/akshay-jaiswal-ca-cpa-48086447/",
        "https://www.linkedin.com/in/goyalnitinca/",
        "https://www.linkedin.com/in/rithikjain67/",
        "https://www.linkedin.com/in/shriya-aradhyula-17b8611a7/",
        "https://www.linkedin.com/in/raghav-prassanna-padmanabhan-cpa-9290521b2/",
        "https://www.linkedin.com/in/ashwini-nathan-790101200/",
        "https://www.linkedin.com/in/ca-rinet-dsilva-a569311bb/",
        "https://www.linkedin.com/in/sarika-dudela-72626684/"
    ];
    const alumniCompany =
        [
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+New+Placement+data/Mphasis.jpg",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+New+Placement+data/CISCO.jpg",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/standard-chartered.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/jp.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/invesco.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Deloitte+(2).jpg",
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
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Infosys+(2).jpg",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/crowee-image-1.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/company3.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/kpmg.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/accenture.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/comscore.webp",
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
            "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp"
        ];
    const alumniCompanyName = [
        "Mphasis",
        "CISCO",
        "standard-chartered",
        "jp",
        "invesco",
        "ey",
        "ey",
        "ey",
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
        "Infosys",
        "KPMG",
        "KPMG",
        "KMPG",
        "Oremus Corporate Services",
        "Analytix Solution",
        "RSM US LLP",
        "AKM Global",
        "Deloitte",
        "RSM US LLP",
        "CRR Tax & Accounting",
        "EY",
        "EY",
        "Entigrity",
        "Entigrity",
        "Deloitte",
        "Solution",
        "RSM US LLP",
        "AKM Global",
        "Deloitte",
        "RSM US LLP",
        "CRR Tax & Accounting",
        "EY",
        "EY",
        "Entigrity",
        "Entigrity",
        "Deloitte"
    ];
    const alumniLocation = [
        "Kerala",
        "Chennai",
        "Mumbai",
        "Hyderabad",
        "India",
        "Bengaluru",
        "San Francisco",
        "Rajasthan",
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
        "Bengaluru",
        "Pune",
        "Bengaluru",
        "Delhi",
        "Austin, Texas Metropolitan",
        "Bengaluru",
        "Bathinda, Punjab",
        "Mumbai",
        "Hyderabad",
        "Hyderabad",
        "Secunderābād",
        "Pune",
        "Andhra Pradesh",
        "Bengaluru",
        "Delhi",
        "Austin, Texas Metropolitan",
        "Bengaluru",
        "Bathinda, Punjab",
        "Mumbai",
        "Hyderabad",
        "Hyderabad",
        "Secunderābād",
        "Pune",
        "Andhra Pradesh",
        "Andhra Pradesh",
        "Andhra Pradesh"
    ]
    const alumniImages = [
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+New+Placement+data/Tony-Thomas.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+New+Placement+data/Piyush-Jain.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Bobby_Agarwal.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/swetha-kiran.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Ahsan_Khan.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/1691911967724.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/anushka.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/priyal.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/1.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/2.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/3.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/4.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/5.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/6.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/7.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/8.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/9.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/10.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/11.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/12.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/13.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/14.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/15.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/16.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/gaurav.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/sirinrathod.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ayushi.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/supriya.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/sricharita.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/jay-bhanushali.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Chaitanya.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/shravan.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/kirti-singh.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/priyanka-choudry.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/shalini-mimani.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/mayur-deshmuk.webp",
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
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/sarika.webp"

    ]

    for (let i = 1; i <= 41; i++) {
        // const imageUrl = `https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/CPA+Alumni+Placed+200x200+Round+with+outline/${i}.jpg`;

        alumniData2.push({
            imageUrl: alumniImages[i - 1],
            title: alumniName2[i - 1], // Use the names as titles
            description: 'CPA Alumni',
            description2: 'Placed at',
            linkedin: alumniLinkedin[i - 1],
            companyImage: alumniCompany[i - 1],
            companyName: alumniCompanyName[i - 1],
            location: alumniLocation[i - 1],
        });
    }

    const alumniDatanew = [];
    const alumniNamenew = ["Arpitha Settipalli",
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
    const alumniLinkedinnew = [
        "https://www.linkedin.com/in/ca-cpa-al-arpitha-s-480197178/",
        "https://www.linkedin.com/in/catirthbarbhaya/",
        "https://www.linkedin.com/in/sanjay-kumar-45aaa245/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        "https://www.linkedin.com/in/nitesh-mittal-ca-us-cpa-license-pending-26a39960?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "https://www.linkedin.com/in/sumesh-jain-8bbbb09/",
        "https://www.linkedin.com/in/priyesh-agarwal-10a210211",
        "https://www.linkedin.com/in/ansh-iyer-cpa-acsi-1949661a3/",
        "https://www.linkedin.com/in/shivaji-bamgude-ca-cpa-usa-license-awaited-b856b457/",
        "https://www.linkedin.com/in/nikitakalia/",
        "https://www.linkedin.com/in/angad-pandher-207a82167/",
        "https://www.linkedin.com/in/saima-bhandari-945394183/",
        "https://www.linkedin.com/in/adarsh-jaiswal-cpa-38aa8b194/",
        "https://www.linkedin.com/in/ackshayraman/",
        "https://www.linkedin.com/in/sneha-ragh/",
        "https://www.linkedin.com/in/padmashree-srinivas-545141120/",
        "https://www.linkedin.com/in/ranjani-bhat-74783874/",
        "https://www.linkedin.com/in/urvisha-parmar-59342121b/",
        "https://www.linkedin.com/in/aashish-chaturvedi-1355b715a/",
        "https://www.linkedin.com/in/samanta-kanchan-002751159/",
        "https://www.linkedin.com/in/sachin-mall-741456197/",
        "https://www.linkedin.com/in/parminder-singh-69a55010b",
        "https://www.linkedin.com/in/hargun-kaur-9b95a814a/",
        "https://www.linkedin.com/in/tony-thomas-371929161/",
        "https://www.linkedin.com/in/agarwalpriyam24/",
        "https://www.linkedin.com/in/priya-mittal-ca-cpa-ea-llb-66a610b7/",
        "https://www.linkedin.com/in/subhiksha-vs/",
        "https://www.linkedin.com/in/rishap-jindal/",
        "https://www.linkedin.com/in/punit-agarwal-cpa/",
        "https://www.linkedin.com/in/hari-rupawala-cpa-us-ca-ind-5bba5366/",
        "https://www.linkedin.com/in/ishita-narang-848415171/",
        "https://www.linkedin.com/in/shilpi-jain-161161235/",
        "https://www.linkedin.com/in/divyanshi-jindal/",
        "https://www.linkedin.com/in/tanya-ranjan-721ba4160/",
        "https://www.linkedin.com/in/deepak-sharma-b39a7557/"
    ];
    const alumniCompanynew = [
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/Pwc.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/Ornate.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/Haier.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/Haier.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/UCSF.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/Unilever.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/tenableinc.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/grant.webp',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/giesecke-devrient.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/Unilever.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/grant.webp',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/Global-Ourteach.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/EY.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/Aptech.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/Cipla-Health.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/EY.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/EY.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/Ima.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/EY.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/EY.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/Apex.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/synex-renewable-energy.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/deloitte.webp',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/Contra-Costa-Health.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/company+name/Pwc.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/kpmg.webp'

    ];
    const alumniCompanyNamenew = [
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
    const alumniLocationnew = [
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
        "Virginia, United States",
        "Bengaluru, Karnataka",
        "Hyderabad",
        "Vadodara, Gujarat",
        "India",
        "Hyderabad",
        "Irving, Texas, United States",
        "Mumbai, Maharashtra",
        "New Delhi, Delhi",
        "India",
        "Bengaluru",
        "India",
        "New York City Area",
        "Mumbai",
        "Faridabad, Haryana",
        "Pune",
        "Bengaluru",
        "Delhi",
        "Austin, Texas Metropolitan",
        "Bengaluru",
        "Bathinda, Punjab",
        "Mumbai",
        "Hyderabad",
        "Hyderabad",
        "Secunderābād",
        "Pune",
        "Andhra Pradesh"
    ]
    const imagesurl = [
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/101.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/102.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/103.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/104.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/105.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/106.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/107.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/108.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/109.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/110.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/111.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/112.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/113.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/114.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/115.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/116.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/117.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/118.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/119.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/120.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/121.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/122.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/123.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/124.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/125.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/126.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/127.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/128.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/129.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/130.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/131.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/132.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/133.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/134.jpg"

    ]


    for (let i = 1; i <= 15; i++) {

        alumniDatanew.push({
            imagesurl: imagesurl[i - 1],
            title: alumniNamenew[i - 1], // Use the names as titles
            description: "CPA Alumni",
            description2: 'Working at',
            linkedin: alumniLinkedinnew[i - 1],
            companyImage: alumniCompanynew[i - 1],
            companyName: alumniCompanyNamenew[i - 1],
            location: alumniLocationnew[i - 1],
        });
    }

    const newalumni = [];
    const newalumniName = [
        'Vishal Doshi',
        'Vasudha Vadakattu',
        'Manali Joshi',
        'Sharmila Reddy Jonnala',
        'Afsheen Zeba',
        'Shreya Malhotra',
        'Vishal Patil',
        'Meena Gupta',
        'Yashvi Panchal',
        'Supriyo Mullick',
        'Haritha Kurada',
        'Sumila S',
        'Daksh Batra',
        'Hiren Agrawal',
        'Shreyas Srinivas Rao',
        'Pushpa Mudireddy',
        'Lakshmi Pillai',
        'Naizy Jabeen',
        'Tejaswini Chandolu',
        'Tina Chaturvedi',
        'Chetan Kumar',
        'Bitzy George',
        'Sreyas Chacko',
        'Anjali Goyal',
        'Pranita Nair',
        'Kaushal Sanghvi',
        'Deepa Harikumar',
        'Vedant Comar'
    ];
    const newalumniLocation = [
        'Mumbai',
        'Muscat, Oman',
        'Mumbai',
        'Florida, United States',
        'Hyderabad',
        'Canada',
        'Gujarat',
        'Utah, United States',
        'Mumbai',
        'Kolkata',
        'Hyderabad',
        'Chennai, Tamil Nadu',
        'Delhi',
        'Ahmedabad',
        'Newark, Delaware, United States',
        'United States',
        'United States',
        'Kerala',
        'California',
        'Texas, United States',
        'Visakhapatnam, Andhra Pradesh',
        'California, United States',
        'Bengaluru',
        'Punjab',
        'Mumbai',
        'Ahmedabad, Gujarat',
        'Australia',
        'Gurugram, Haryana'
    ];
    const newalumniLinkedin = [
        'https://www.linkedin.com/in/vishal-doshi-9a6796256/',
        'https://www.linkedin.com/in/vasudha-vadakattu-64a1051a8/',
        'https://www.linkedin.com/in/manali-g-joshi/',
        'https://www.linkedin.com/in/sharmila-reddy-jonnala-3bb96178/',
        'https://www.linkedin.com/in/afsheen-zeba-bb150a198/',
        'https://www.linkedin.com/in/shreyam29/',
        'https://www.linkedin.com/in/vishalcma/',
        'https://www.linkedin.com/in/meena-gupta-409032184/',
        'http://linkedin.com/in/yashvi-panchal-51aa0414a',
        'https://www.linkedin.com/in/supriyo-mullick-cpa-us-awaiting-license-acma-acs-1396112a/',
        'https://www.linkedin.com/in/haritha-kurada-7507a61b1/',
        'https://www.linkedin.com/in/sumila-s/',
        'https://www.linkedin.com/in/daksh-batra-567861205/',
        'https://www.linkedin.com/in/hirenagrawalcpa/',
        'https://www.linkedin.com/in/shreyas-s-280817172/',
        'https://www.linkedin.com/in/pushpamudireddy/',
        'https://www.linkedin.com/in/lakshmi-pillai-2b8b9976/',
        'https://www.linkedin.com/in/naizy-jabeen-75a411ba/',
        'https://www.linkedin.com/in/chandolu-tejaswini-9b98a613b/',
        'https://www.linkedin.com/in/tina-chaturvedi-a8075b136/',
        'https://www.linkedin.com/in/chetan-kumar-pavuluri-5655521a2/',
        'https://www.linkedin.com/in/bitzy-george/',
        'https://www.linkedin.com/in/sreyaschacko/',
        'https://www.linkedin.com/in/anjali-goyal-406270220/',
        'https://www.linkedin.com/in/pranita-nair-710a5021b/',
        'https://www.linkedin.com/in/kaushal-sanghvi-b1a40020/',
        'https://www.linkedin.com/in/deepa-harikumar-000942220/',
        'https://www.linkedin.com/in/vedant-comar-1368a6151/'
    ];

    for (let i = 135; i <= 162; i++) {
        const imageUrl = `https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/${i}.jpg`;

        newalumni.push({
            imageUrl,
            title: newalumniName[i - 135], // Use the names as titles
            description: 'CPA Alumni',
            linkedin: newalumniLinkedin[i - 135],
            location: newalumniLocation[i - 135],
        });
    }

    return (
        <>

            {alumniData2.map((alumni, index) => (
                <div className="box text-center" >
                    <div className="achiverImg">
                        <img loading='lazy' src={alumni.imageUrl}
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

                        <Link href={alumni.linkedin} target='_blank'> <img loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/icons8-linkedin-48.png" alt={alumni.title} fill={true} sizes='100vw' className='resp-img ' /></Link>
                    </div>
                    {console.log(alumni)}

                </div>
            ))
            }

            {alumniDatanew.map((alumni, index) => (
                <div className="box text-center" >
                    <div className="achiverImg">
                        <img loading='lazy' src={alumni.imagesurl}
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

                        <Link href={alumni.linkedin} target='_blank'> <img loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/icons8-linkedin-48.png" alt={alumni.title} fill={true} sizes='100vw' className='resp-img ' /></Link>
                    </div>
                    {/* {console.log(alumni)} */}
                </div>
            ))
            }


            {newalumni.map((alumni, index) => (
                <div className="box text-center" >
                    <div className="achiverImg">
                        <img loading='lazy' src={alumni.imageUrl}
                            alt={alumni.title} fill={true} sizes='100vw' className='resp-img alumni-img' />
                    </div>
                    <div className="title">
                        {alumni.title}
                    </div>
                    <div className="discription">
                        {alumni.description}, {alumni.location}
                    </div>
                    <div className="youtube">
                        <Link href={alumni.linkedin} target='_blank'> <img loading='lazy' src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/icons8-linkedin-48.png" alt={alumni.title} fill={true} sizes='100vw' className='resp-img ' /></Link>
                    </div>


                </div>
            ))
            }


        </>

    );
}

export default AlumniCard;
