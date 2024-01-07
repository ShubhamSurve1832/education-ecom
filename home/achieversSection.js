import Image from 'next/image'

export default function achieversSection({ data }) {

	
	return (
		<section className="section achiever-section pt-0">
			<div className='container'>
				<h2 className='heading02'>What our Achievers have to say</h2>
				<div className='achiever-container'>
					{
						<figure className='achiever-box'>
							<div className='achiever-img resp-img-box'>
								<Image loading='lazy' src='/img/ashwiniNathan.jpg'fill={true} sizes='100vw' className='resp-img' alt='Ashwini Nathan'/>
							</div>

							<figcaption>
								<p>I'm thrilleed to share that I have cleared all 4 parts of the US CPA examination. It's been a challenging journey and a lot of ups and downs from deciding to quit my job to studying full time and..</p>
								<p><a href='#' className='rm-btn'>Read More</a></p>
								<div>
									<span className='achiever-name'>Ashwini Nathan</span>
									<span className='achiever-pos'>US CPA</span>
								</div>
							</figcaption>
						</figure>
					}
				
				</div>
				<div className='btn-wrap text-center'><a className='btn maroon-border-btn maroon-border-btn-arrow'>View All Testimonials</a></div>
			</div>

		</section>
	)
}