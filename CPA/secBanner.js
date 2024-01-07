import React from 'react'
import CommonForm from "../components/CommonForm"
import Image from 'next/image'
import indexData from '../database/index.json'


const secBanner = () => {
    return (
        <>
            <section className='sec_banner_section section'>
                <div className="container-l">
                    <div className='banner-grid'>
                        <div className='right-form-box'>
                            <CommonForm showcity={false} showTitle={true} indexData={indexData.secPageTitle} formName='SEC Download Latest Newsletter' />
                        </div>
                        <div className='middel-box'>
                            <Image loading='lazy' src='/img/sec_banner_image.webp'fill={true} sizes='100vw'  className='resp-img' alt='' />
                        </div>
                        <div className='left-box'>
                            <div className='iframe-box'>
                            <iframe src="https://www.youtube.com/embed/naz6CutP7zw" frameborder="0" width='' allowFullscreen="true" height='390'></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default secBanner