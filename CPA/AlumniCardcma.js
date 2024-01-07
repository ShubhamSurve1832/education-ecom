import React from 'react';
import Image from 'next/image';
import { urlConstants as urlConstant } from "@/constants/urlConstants";
import Link from 'next/link'

const AlumniCard = ({ AlumniCardData, companyName }) => {

    const alumniData = [];
    const alumniName = [
        'Shounak chittoor',
        'Pavan Reddy',
        'Ankur Yadav',
        'Nitya Sai T',
        'Surey Akash',
        'Satyam Jain',
        'Krtuhika MS',
        'Aniket Salvi',
        'Vaishakh',
        'Madhu',
        'Trupti Agarwal',
        'Kamal Krishna',
        'Sayeed Saleem',
        'Althi Haritha',
        'Abdul Wadood Khan',
        'Sameeruddin',
        'Adil Ayoob',
        'G Gokul',
        'Peter Kattady',
        'Hima Bindu',
        'Sri Durga',
        'Sakshi',
        'Rahul Pillai',
        'Mani Venkatesh',
        'Pooja Kamble',
        'Harsh Bansal',
        'Sankalp Bhatia',
        'Deepti Sasikumar',
        'Manash',
        'Gibin',
        'Smith MS',
        'Angad',
        'Ashrtih',
        'Shweta Kshirsagar',
        'Prerana Tiwari'

    ];
    const alumniImage = [
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+New+Placement+data/Shounak-Shittoor.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Pavan-reddy.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Ankur-Yadav.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Nitya-sai-T.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Surey-Akash.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Satyam-Jain.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Krtuhika-MS.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Aniket-Salv.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Vaishakh.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Madhu.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Trupti-Agarwal.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Kamal-krishna.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Sayeed-Saleem.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Althi-Haritha.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Abdul-wadood-khan.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Sameeruddin.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Adil-ayoob.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/G-gokul.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Peter-Kattady.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Hima-bindu.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/sri-durga.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Sakshi.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Rahul-pillai.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Mani-Venkatesh.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/Ellipse_34.webp',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Harsh-bansal.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Sankalp-bhatia.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/profile+logo.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Manash.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Gibin.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Smith-MS.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Angad.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+Update+on+Alumni+page/profile+logo.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Shweta-Kshirsagar.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Prerana-tiwari.jpg'

    ];
    const alumniLinkedin = [
        'https://www.linkedin.com/in/shounak-chittoor-922156294/',
        'https://www.linkedin.com/in/pavan-reddyj9/',
        'https://www.linkedin.com/in/ankur-yadav-75416a184/',
        'https://www.linkedin.com/in/nitya-sai-thadakamalla-41088a186/',
        'https://www.linkedin.com/in/akash-surey-15b2aa199/',
        'https://www.linkedin.com/in/satyam-jain-62aa851a0/',
        'https://www.linkedin.com/in/kruthika-ms-a619817b/',
        'https://www.linkedin.com/in/aniket-salvi-cma-fmva%C2%AE-859095141/',
        'https://www.linkedin.com/in/vaishakh-udaybhanu-7a245544/',
        'https://www.linkedin.com/in/madhu-mamidala-4494921aa/',
        'https://www.linkedin.com/in/trupti-agarwal-27ba45133/',
        'https://www.linkedin.com/in/krishna-kamal-vvs-b29175a8/',
        'https://www.linkedin.com/in/sayeed-saleem-ahmed-a81365169/',
        'https://www.linkedin.com/in/althi-haritha-5b05851ab/',
        'https://www.linkedin.com/in/abdulwadoodkhan/',
        'https://www.linkedin.com/in/mohammad-sameeruddin-8458b8164/',
        'https://www.linkedin.com/in/adilayoob/',
        'https://www.linkedin.com/in/cma-g-gokul/',
        'https://www.linkedin.com/in/peter-kattady/',
        'https://www.linkedin.com/in/cma-hima-bindu-yellampalli-a7362aa0/',
        'https://www.linkedin.com/in/sri-durga-269a4b58/',
        'https://www.linkedin.com/in/sakshi-kothari-633661205/',
        'https://www.linkedin.com/in/rahul-pillai-v-bab831126/',
        'https://www.linkedin.com/in/mani-venkatesh-888b50ab/',
        'https://www.linkedin.com/in/pooja-kamble-184ab21a7/',
        'https://www.linkedin.com/in/uscmaharshbansal/',
        'https://www.linkedin.com/in/sankalp-bhatia/',
        'https://www.linkedin.com/in/deepti2210/',
        'https://www.linkedin.com/in/manash-kumar-panda-751076164/',
        'https://www.linkedin.com/in/gibin-augustine-21b050222/',
        'https://www.linkedin.com/in/smitha-ms/',
        'https://www.linkedin.com/in/angad-pandher-207a82167/',
        'https://www.linkedin.com/in/ashrithpg/',
        'https://www.linkedin.com/in/shweta-kshirsagar-aa8076202/',
        'https://www.linkedin.com/in/prerana-tiwari-0a812318b/recent-activity/all/'

    ];
    const alumnicomapanyName = [
        'Electronic Arts',
        'Cognida',
        'Infosys Limited',
        'Virtusa',
        'Dupont',
        'Knowcraft Analytix',
        'BDO Rise',
        'Knowcraft Analytix',
        'Knowcraft Analytix',
        'Invesco',
        'JP Morgan',
        'Invesco',
        'Invesco',
        'Invesco',
        'Deloitte',
        'Wipro',
        'Invesco',
        'Pegasystems',
        'Oracle',
        'Virtusa',
        'Invesco',
        'Citrin',
        'Virtusa',
        'EY',
        'EY',
        'Virtusa',
        'Infosys Limited',
        'Infosys Limited',
        'Analytix Limited',
        'KPMG',
        'Infosys Limited',
        'GT USA',
        'Knowcraft Analytix',
        'Knowcraft Analytix',
        'Invesco'
    ];
    const alumniCompanyImage = [
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/Re_+New+Placement+data/EA.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Cognida.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Infosys.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Virtusa.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Dupont.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Knowcraft-Analytics.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/BDO-Rise.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Knowcraft-Analytics.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Knowcraft-Analytics.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Invesco.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/JP-Morgan.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Invesco.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Invesco.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Invesco.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Deloitte.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Wipro.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Invesco.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/PEGA.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Oracle.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Virtusa.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Invesco.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Citrin-Cooperman.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Virtusa.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/ey.webp',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Virtusa.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Infosys.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Infosys.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Analytix.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cpnAlu/kpmg.webp',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Infosys.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/GrantThornton.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Knowcraft-Analytics.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Knowcraft-Analytics.jpg',
        'https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/cma+almni+list/Invesco.jpg'

    ];

    for (let i = 1; i <= 34; i++) {

        alumniData.push({
            imagesurl: alumniImage[i - 1],
            title: alumniName[i - 1], // Use the names as titles
            description: "CMA Alumni",
            description2: "Placed at",
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
                        <img loading='lazy' src={alumni.imagesurl}
                            alt={alumni.title} fill={true} sizes='100vw' className='resp-img alumni-img' />
                    </div>
                    <div className="title">
                        {alumni.title}
                    </div>
                    <div className="discription">
                        {alumni.description}
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

            {AlumniCardData.map((data, index) => {
                // let image = urlConstant.S3_buckets + data.img;
                // return (
                //     <div className="box text-center" key={index}>
                //         <div className="achiverImg">
                //             <Image
                //                 loading="lazy"
                //                 src={image}
                //                 alt={data.name}
                //                 width={300}
                //                 height={200}
                //                 className="resp-img alumni-img"
                //             />
                //         </div>
                //         <div className="title">{data.name}</div>
                //         <div className="discription">{data.description}</div>

                //         {companyName ? <p>{data.company}</p> : null}
                //     </div>
                // );
            })}
        </>
    );
}

export default AlumniCard;
