import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import _ from 'lodash'
import { urlConstants as urlConstant } from "@/constants/urlConstants";

const BlogGridCard = ({ blogCardData }) => {
	return (
		<section className='Blog-grid-section'>
			<div className="container-l">
				<div className='grid'>
					{
						blogCardData.cardData.map((data, index) => {
							let image = urlConstant.S3_buckets + data.image
							return (
								<>
									<Link href={data.path} key={index}>
										< div className="blog-card" >
											<div>
												<img loading='lazy' src={image} alt={data.title} fill={true} sizes='100vw' className='resp-img' />
											</div>
											<div className='bolg-card-content'>
												<p className="title">{data.title}</p>
												<p className="title01">{data.heading}</p>
												<p className="subtitle">{data.subtitle}</p>
											</div>
										</div>
									</Link>
								</>
							)
						})
					}
				</div>
			</div>
		</section >
	)
}

export default BlogGridCard