import React from 'react'
import Link from 'next/link'

const NewsLetter = () => {
    return (
        <section className='newsletter-section'>
            <div className="container-l">
                <h2 className="heading02">Our Newsletters</h2>
                <div className='newletter_grid'>
                    <div className='box'>
                        <Link href='/img/July2022-This_Fiscal!!.pdf'  download={true} target='_blank'> <p className="title01">July-22 Newsletter</p></Link>
                    </div>
                    <div className='box'>
                        <Link href='/img/August_2022-This_Fiscal!!.pdf' download={true}  target='_blank'> <p className="title01">August-22 Newsletter</p></Link>
                    </div>
                    <div className='box'>
                        <Link href='/img/NL_September_2022-(Final_2).pdf' download={true}  target='_blank'> <p className="title01">September-22 Newsletter</p></Link>
                    </div>
                    <div className='box'>
                        <Link href='/img/October_2022-This_Fiscal!!.pdf' download={true}  target='_blank'> <p className="title01">October-22 Newsletter</p></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter