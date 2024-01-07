import React from 'react';
import Image from 'next/image';
import { urlConstants as urlConstant } from "@/constants/urlConstants";
import Link from 'next/link'

const AlumniCard = ({ AlumniCardData, companyName }) => {

    const alumniData = [];
    const alumniName = [
        "Abhishek Kolati",
        "Peuli Dey Mohari",
        "Pankhuri Nathani",
        "Vijay Kumar",
        "Srinivas Choppakatla",
        "Shabina Parvin",
        "Neha Mahawar",
        "Nagarjun Rao",
        "Mohit Kamble",
        "Chiranjeevi Akhilesh",
        "Rajendra",
        "Sathyaraj K",
        "Soumya Singh",
        "SubbaRayudu Okkinti",
        "Virendra Prajapati",
        "Nuha Ganduli",
        "Pulkit Garg",
        "Nukula Murthy"

    ];
  
    const alumniLinkedin = [
        "https://www.linkedin.com/in/abhishekkolati/",
        "https://www.linkedin.com/in/abhishekkolati/",
        "https://www.linkedin.com/in/peuli-dey-mohari-79a875a3/",
        "https://www.linkedin.com/in/pankhuri-nathani-ea-8497b9188/",
        "https://www.linkedin.com/in/vijay-kumar-9ba036227/",
        "https://www.linkedin.com/in/srinivas-choppakatla-8b288b1a0/",
        "https://www.linkedin.com/in/shabina-parvin-377448265/",
        "https://www.linkedin.com/in/neha-mahawar-ea-a145bb76/",
        "https://www.linkedin.com/in/nagarjunrao/",
        "https://www.linkedin.com/in/mohit-kamble-ea-3aa0aa11a/",
        "https://www.linkedin.com/in/chiranjeevi-akhilesh-960b8149/",
        "https://www.linkedin.com/in/rajendra-ea-us-cpa-final-level-ca-india-cma-india-7087451b/",
        "https://www.linkedin.com/in/sathyaraj-k-a6b762129/",
        "https://www.linkedin.com/in/soumya-singh-875a0a193/",
        "https://www.linkedin.com/in/rayudu777/",
        "https://www.linkedin.com/in/virendra-prajapati-ea-4b428b1a1/",
        "https://www.linkedin.com/in/nuha-ganduli-ea-5830a1256/",
        "https://www.linkedin.com/in/pulkit-garg-ea-8624b993/",
        "No"
    ];
    const alumnicomapanyName = [ 
        "Oremus",
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
        "",
        "",
        ""
     ]
     
   
    const alumniLocation = [
        "Hyderabad",
        "Kolkata, West Bengal",
        "Raipur, Chhattisgarh",
        "Hyderabad",
        "Hyderabad",
        "Bengaluru",
        "Haryana",
        "Gurugram, Haryana",
        "Maharashtra",
        "Hyderabad",
        " Canada",
        "Bengaluru",
        "United Kingdom",
        "Vijayawada, Andhra Pradesh",
        "Ahmedabad, Gujarat",
        "Bengaluru",
        "Bengaluru",
        "Hyderabad"
    ];
    const alumniCompanyImage = [
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+New+Placement+data/MicrosoftTeams-image+(35).png",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/KPMG.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/KPMG.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/KPMG.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/Oremus.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/Analytix-Solutions.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/RSM.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/AKM-GLOBAL.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/company3.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/RSM.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/CRR-Tax-%26-Accounting.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/EY.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/EY.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/Entigrity.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/Entigrity.jpg",
        "",
        "",
        ""
      
       

    ];
    const descriptionStatus  = [ 
        "Placed at",
        "Placed at",
        "Placed at",
        "Placed at",
        "Placed at",
        "Placed at",
        "Working at",
        "Working at",
        "Working at",
        "Working at",
        "Working at",
        "Working at",
        "Working at",
        "Working at",
        "Working at",
    ""]
    const images = [
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+New+Placement+data/Abhishek-Kolati.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/1.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/2.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/3.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/4.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/5.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/6.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/7.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/8.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/9.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/10.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/11.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/12.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/13.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/14.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/15.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/16.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/17.jpg",
    ]

    for (let i = 1; i <= 17; i++) {
            // const imageUrl = `https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/EA+alumni+details/${i}.jpg`
        alumniData.push({
            imageUrl: images[i-1],
            title: alumniName[i - 1], // Use the names as titles
            description: "EA Alumni",
            description2: descriptionStatus[i - 1],
            location: alumniLocation[i - 1],
            linkedin: alumniLinkedin[i - 1],
            companyImage: alumniCompanyImage[i - 1],
            companyName: alumnicomapanyName[i - 1],
        });
    }


    return (
        <>

            {alumniData.map((alumni, index) => (
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
                    {/* {console.log(alumni)} */}
                </div>
            ))
            }

       
        </>
    );
}

export default AlumniCard;
