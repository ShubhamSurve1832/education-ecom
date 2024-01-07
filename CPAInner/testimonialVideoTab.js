import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import _ from 'lodash'
import Link from 'next/link';
import { Tab } from "@headlessui/react"
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri'
import { urlConstants as urlConstant } from "@/constants/urlConstants";


const testimonialVideoTab = ({ testimonialVideoTab }) => {
	const corporateTitle = _.get(testimonialVideoTab, "corporateTitle", [])
	let testimonialVideoData = _.get(testimonialVideoTab, "testimonialVideoData", []);


	// console.log(testimonialVideoData.id)

	const [showAllRows, setShowAllRows] = useState(() =>
		testimonialVideoData.map(() => false)
	);
	const [buttonText, setButtonText] = useState(() =>
		testimonialVideoData.map(() => false)
	);


	const showContent = (index) => {
		setButtonText((prevText) => {
			const updatedText = [...prevText];
			updatedText[index] = !updatedText[index];
			return updatedText;
		});
		setShowAllRows((prevRows) => {
			const updatedRows = [...prevRows];
			updatedRows[index] = !updatedRows[index];
			return updatedRows;
		});
	};

	const [modal, setModal] = useState(true);
	const [videoLoading, setVideoLoading] = useState(true);

	const openModal = () => {
		setModal(!modal);
	};

	const partnerSlider = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	};

	const [isActive, setActive] = useState(false);

	const showTab = () => {
		setActive(!isActive);
	};

	const [selectedItem, setSelectedItem] = useState(null);

	const handleItemClick = (id) => {
		selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
		setActive(!isActive);
	};

	const [file, setFile] = useState(null)

	const [clicked, setClicked] = useState(0);
	const handleViewMore = (id) => {
		setButtonText(!buttonText);
		if (id === clicked) {
			return setClicked(0);
		}
		setClicked(id);
	}

	return (
		<>
			<section className="section partner-section testimonialVideotab" id='testimonial-video-tab'>
				<Tab.Group>
					<div className='container'>
						<div className='tab-head-row'>
							<p className='tab-button-mobile tab-btn' onClick={showTab}>
								{selectedItem ? corporateTitle.find(item => item.id == selectedItem).title : "Our Corporate Tie-Ups"}
								<span className={'tab-head-box ' + ' ' + (isActive ? 'active' : '')}><RiArrowDropDownLine />
								</span>
							</p>

							<Tab.List className={'tab-header tab-head-box ' + ' ' + (isActive ? 'active' : '')}>
								{corporateTitle.map((item, index) => (
									<Tab className="tab-btn" key={index} onClick={e => handleItemClick(item.id)}>
										{item.title}
									</Tab>
								))}
							</Tab.List>
						</div>

						<div className='tab-container'>
							<div className='tab-box'>
								<Tab.Panels>
									{testimonialVideoData.map((data, index) => {
										let lists = _.get(data, "lists", []);
										
										let newList = [...lists].reverse()
										// console.log(newList);
										const visibleRows = showAllRows[index]
											? newList
											: newList.slice(0, 4);
										return (
											<Tab.Panel key={index}>
												<div className="gridRow">
													{visibleRows.map((cardData) => {
														let image = urlConstant.S3_buckets + cardData.img
														return (
															<div className="box" key={cardData.id} onClick={() => setFile(cardData)}>
																<div className="content">
																	<div className="content_img">
																		<img loading='lazy' src={image} alt={cardData.title} fill={true} sizes='100vw' className='resp-img' />
																		<div className="overlay text-center">
																			<a className="overlay_img">
																				<Image loading='lazy' src="/img/cpa-inner/videoIcon.png" alt="video icon" fill={true} sizes='100vw' className='resp-img' />Watch Video</a>
																		</div>
																	</div>
																	<h2 className='heading06'>{cardData.title}</h2>
																</div>
															</div>
														)
													})}
												</div>
												<div className='popup' onClick={() => setFile(null)} style={{ display: file ? 'block' : 'none' }}>
													<span className='close-pp' onClick={() => setFile(null)}>
														<Image loading='lazy' src="/img/white_cross.png" alt="white cross icon" fill={true} sizes='100vw' className='resp-img' />
													</span>
													{file && <iframe src={`${file?.path}`} ></iframe>}
												</div>
												<div className="text-center">
													<div className='btn-wrap text-center' onClick={() => showContent(index)}>
														<Link href='javascript:;' className='btn maroon-border-btn maroon-border-btn-arrow'>
															{buttonText[index] ? "View Less" : "View More"}
														</Link>
													</div>
												</div>
											</Tab.Panel>
										);
									})}
								</Tab.Panels>
							</div>
						</div>
					</div>
				</Tab.Group>
			</section>
		</>
	);
}

export default testimonialVideoTab;
