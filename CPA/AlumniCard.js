import React from 'react';
import Image from 'next/image';
import { urlConstants as urlConstant } from "@/constants/urlConstants";
import Link from 'next/link'

const AlumniCard = ({ AlumniCardData, companyName }) => {

    return (
        <>
       
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
