import React from 'react';
import Image from 'next/image';
import { urlConstants as urlConstant } from "@/constants/urlConstants";
import Link from 'next/link'

const AlumniCard = ({ AlumniCardData, companyName }) => {

    const international = []
    const internationalname = [
        "Anju",
        "Akhil Reddy (Pursuing CPA)",
        "Bhavya Manwani",
        "Sakshi Jain",
        "Khushboo Shah",
        "Surya Kanukollu",
        "Archan Gujja",
        "Rashmi Kiran",
        "Varshitha Nadipineni",
        "Shalini Mimani",
        "Sherin Esther",
        "Gyan Chapai",
        "Mohit Vaidya",
        "Vinita Agarwal",
        "Sharanya Rajagopal"
    ]
    const internationalImage = [
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Anju-Nampoothiry-BDO%2C-USA.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Akhil-Reddy-Koduganti-SPA-Associate.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Bhavya-M-SPA-Associates.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Sakshi-Jain-SPA-Associates.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Khushboo-Shah-SPA-Associates%2C-USA.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Surya-Kanukollu-SPA-Associates%2C-USA.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Archana-Gujja-WRATHELL%2C-HUNT-%26-ASSOCIATES%2C-LLC.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Rashmi-Karan-Amtrust-International.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Varshitha-N-BDO-UK-LLP.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Shalini-Mimani-EY.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Sherin-Esther-Cherian-Harrys-inc.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Gyan.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Mohit-Vaidya-Pwc.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Vinita-Agarwal-PWC.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Sharanya-Rajagopal-RSM.jpg"

    ]
    const internationallinkedin = [
        "https://www.linkedin.com/in/anju-nampoothiry-9063a4186/",
        "https://www.linkedin.com/in/akhil-reddy-koduganti-27a296177/",
        "https://www.linkedin.com/in/bhavya-m-2bba4958/",
        "https://www.linkedin.com/in/sakshi-jain-4456b2172/",
        "https://www.linkedin.com/in/khushbooojasvora/",
        "https://www.linkedin.com/in/surya-kanukollu-a61b74193/",
        "https://www.linkedin.com/in/archanagujja/",
        "https://www.linkedin.com/in/rashmi-karan-7ab9a2172/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "https://www.linkedin.com/in/varshitha-n-67256b132/",
        "https://www.linkedin.com/in/shalini-mimani-34157852/",
        "https://www.linkedin.com/in/sherinecherian/",
        "https://www.linkedin.com/in/gyan-chapai-29b2b941/",
        "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAABWyt5cB7acd-kz6ZQQpsmgUIBg8YvtqdLQ&keywords=mohit%20vaidya&origin=RICH_QUERY_SUGGESTION&position=0&searchId=34621a44-9521-4f8a-acec-c5079ea63aa6&sid=PPc&spellCorrectionEnabled=false",
        "https://www.linkedin.com/in/agarwalvinita/",
        "https://www.linkedin.com/in/sharanyarjg/"

    ]
    const internationalcomapanyName = [
        "BDO, USA",
        "SPA Associates",
        "SPA Associates, Canada",
        "SPA Associates, Canada",
        "SPA Associates, USA",
        "SPA Associates, USA",
        "WRATHELL, HUNT & ASSOCIATES, LLC",
        "Amtrust International",
        "BDO UK LLP",
        "EY",
        "Harrys inc",
        "KPMG",
        "PWC",
        "PWC",
        "RSM"

    ]
    const internationalcomapanyImage = [
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/BDO.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/SPA-Associates.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/SPA-Associates.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/SPA-Associates.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/SPA-Associates.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/SPA-Associates.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/WRATHELL%2C-HUNT-%26-ASSOCIATES%2C-LLC.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Amtrust-International.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/BDO.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Harrys-inc.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/KPMG.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Pwc.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/Pwc.jpg",
        "https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+CPA+and+CMA+Alumnii+List/RSM.jpg"

    ]
    const internationalWorkingPlaced = [
        "Placed",
        "Placed",
        "Placed",
        "Placed",
        "Placed",
        "Placed",
        "Placed",
        "Working",
        "Working",
        "Working",
        "Working",
        "Working",
        "Working",
        "Working",
        "Working"
    ]

    for (let i = 1; i <= 15; i++) {

        international.push({
            imagesurl: internationalImage[i - 1],
            title: internationalname[i - 1], // Use the names as titles
            description: "CPA Alumni",
            linkedin: internationallinkedin[i - 1],
            companyImage: internationalcomapanyImage[i - 1],
            companyName: internationalcomapanyName[i - 1],
            placement: internationalWorkingPlaced[i - 1],
        });
    }

    return (
        <>

            {international.map((alumni, index) => (
                <div className="box text-center" >
                    <div className="achiverImg">
                        <img loading='lazy' src={alumni.imagesurl}
                            alt={alumni.title} fill={true} sizes='100vw' className='resp-img alumni-img' />
                    </div>
                    <div className="title">
                        {alumni.title}
                    </div>
                    <div className="discription">
                        {alumni.description}, {alumni.placement}
                    </div>
                    <div className="company">
                        <div className="caption">
                            {/* {alumni.description2} */}
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
