import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const SocialMedia = () => {
    return (
        <section className="socialMedia-section">
            <div className="container-l">
                <h2 className="heading02">Follow SEC Social Media Pages</h2>
                <div className="grid">
                    <div className='sm-box'> <Link href="https://www.facebook.com/simandharSEC" target="_blank"> <Image loading='lazy' src='/img/Facebook.webp'fill={true} sizes='100vw'  className='resp-img' alt='Facebook' /></Link></div>
                    <div className='sm-box'> <Link href="https://www.instagram.com/simandhar.cpa.cma/" target="_blank"> <Image loading='lazy' src='/img/Instagram.webp'fill={true} sizes='100vw'  className='resp-img' alt='Instagram' /></Link></div>
                    <div className='sm-box'> <Link href="https://www.linkedin.com/company/simandhar-sec/" target="_blank"> <Image loading='lazy' src='/img/Linkdin.webp'fill={true} sizes='100vw'  className='resp-img' alt='Linkdin' /></Link></div>
                </div>
            </div>
        </section>
    )
}

export default SocialMedia