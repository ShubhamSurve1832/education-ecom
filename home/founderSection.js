import { memo } from "react"

 function founderSection({indexData}) {
  return (
    <section className=" founder-section pb-0">
      <div className='founder-container'>
        <div className='founder-info'>
            <h2 className='heading02'>{indexData.mainheading}</h2>
            <div className='founder-innerbox'>
                <p>{indexData.description} </p>
                <h3 className='heading04'>{indexData.qoute}</h3>
                <h5 className='heading05'>{indexData.name}</h5>
                {/* <p>(Equivalent to UK CMA)</p> */}
                <p>{indexData.nameDescription}</p>
            </div>
        </div>
      </div>
      <div className="clear"></div>
    </section>
  )
}

export default memo(founderSection)