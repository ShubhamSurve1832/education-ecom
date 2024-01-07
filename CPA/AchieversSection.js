import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import ReactReadMoreReadLess from "react-read-more-read-less";
import _ from 'lodash'
import Link from 'next/link';
import { memo } from 'react';
import { urlConstants as urlConstant } from "@/constants/urlConstants";





const AchieversSection = ({ achieverData, showData, showData1, showlogo, showbtn, showAchiverbtn }) => {

	// READ MORE FUNCTINALITY DONE HERE 
	const [showAllRows, setShowAllRows] = useState(false);
	const [buttonText, setButtonText] = useState(false);
	const showContent = () => {
		setShowAllRows(!showAllRows);
		setButtonText(!buttonText);
	};



	// const [show, setShow] = useState(false);
	// const showMenu = () => {
	// 	setShow(!show);
	// };

	// const [active, setActive] = useState(false);
	// const addActiveClass = () => {
	// 	setActive(!active);
	// };

	let heading = _.get(achieverData, "mainHeading")
	let lists = _.get(achieverData, "list", [])

	const visibleRows = showAllRows ? lists : lists.slice(0, 6);
	return (
		<section className="section achiever-section pt-8">
			<div className='container'>
				<h2 className='heading02'>{heading}</h2>
				{
					showData1 ? (<h3 className='title01'>{achieverData.description}</h3>) : ("")
				}


				<div className='achiever-container' >

					{visibleRows.map((box, index) => {
						let image = `${urlConstant.S3_buckets + _.get(box,"img")}`
						return (
							<figure className='achiever-box' key={index}>
								<div className='achiever-img resp-img-box'>
									<img priority src={image}className='resp-img' alt={box.title} />
								</div>
								<figcaption>
									<div className='content'>
										{
											showData ? (
												<p>
													<ReactReadMoreReadLess
														readMoreClassName="readMoreClassName"
														charLimit={170}
														readMoreText="Read More"
														readLessText="Read Less">
														{box.para}
													</ReactReadMoreReadLess>
												</p>
											) : ("")
										}
									</div>

									<div className='flex-row'>
										<div>
											<span className='achiever-name'>{box.title}</span>
											<span className='achiever-pos'>{box.caption}</span>
										</div>

										{showlogo ?
											<div className='logo'>
												<Link href={box.path} target='_blank'>
													<Image priority src={box.logo} fill={true} sizes='100vw' className='resp-img' alt={box.title} />
												</Link>
											</div> : " "
										}

										{
											showData1 ? (
												<>
													<span className='achiever-pos'>{box.position}</span>
													<span className='achiever-name'>{box.company}</span>
												</>

											) :
												("")
										}
									</div>
								</figcaption>
							</figure>
						)

					})}


				</div>


				<div className="text-center mt-4" >
					{
						showbtn ?
							(
								(
									<button className='btn maroon-btn maroon-btn-arrow' onClick={showContent}>{buttonText ? "View Less " : "View More"}</button>
								))
							: ""
					}
				</div>
			</div>

		</section>
	)
}
export default memo(AchieversSection)
