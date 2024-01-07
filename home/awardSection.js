
import CommonForm from '../components/CommonForm'
import { memo, useState } from 'react';
import IndexData from '../database/index.json'
import Image from 'next/image';
import white_cross from '../public/img/white_cross.png'


 function awardSection({ indexData }) {
	const [isShow, setIsShow] = useState(false);
	const showDwnPopup = () => {
		setIsShow(!isShow);
	};
	return (
		<>
			<section className="award-section">
				<div className='award-container'>
					<h4 className='heading04'>{indexData.title01}</h4>
					<p>{indexData.description01}</p>
				</div>
				<div className='award-right-box'>
					<h3 className='heading04'>{indexData.title02}</h3>
					<p>{indexData.description02}</p>
					<a className='btn white-btn white-btn-arrow' onClick={showDwnPopup}>Download Free Prospectus</a>
				</div>
			</section>
			<div className='download-overlay' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}></div>
			<div className='download-popup right-form-box backer' style={{ display: !isShow ? 'none' : 'block' }}>
				<span className='close-pp' onClick={showDwnPopup} style={{ display: isShow ? 'block' : 'none' }}>
					<img priority src='/img/white_cross.png' alt="white_cross"  className='resp-img' />
				</span>
				<CommonForm showIcon DownloadForm={IndexData.downloadForm1} showDownloadMCQ showHeading2 showTitle={true}  indexData={IndexData.downloadProspectus} formName="home page award banner" />
				</div>
		</>
	)
}

export default memo(awardSection)