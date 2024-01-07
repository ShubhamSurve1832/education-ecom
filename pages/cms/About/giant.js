import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import SideTab from '../../../Dashboard/SideTab'
import { useState, useRef } from 'react'
import blank_image_For_banner_page from '../../../public/img/blank_image_For_banner_page.png'


const giant = () => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm();

	const [data, setData] = useState([{img: "",alt: ""}])


	const clickUploadImage = (imgTagID) =>{
		document.getElementById(imgTagID).click();
	}

	const handleInputChange = (e,i) =>{
		const {name,value} = e.target;

		let InputDataArray = [...data];
		InputDataArray[i][name] = value;
		
		setData(InputDataArray)
	}


	const handleImageInputChange = (e,index) =>{
		const {name,files} = e.target;

		const reader = new FileReader();
        reader.addEventListener('load', () => {
			 let InputDataArray = [...data];
             InputDataArray[index][name] = reader.result;
		     setData(InputDataArray);
       })

    
     if(e.target.value.includes('fakepath')){
        reader.readAsDataURL(files[0]);
      }else{
    //   console.log('select files again')
     }

}


    const removeImage = (e,index) =>{
		let {name,value} = e.target;
		let InputDataArray = [...data];
		InputDataArray[index][name] = value;
		setData(InputDataArray);
	}


    const addRows = () =>{
		const addRowTable = {img: "",alt: ""};

		setData([...data,addRowTable])
	}


	const removeRow = (index) =>{
		setData(()=>{
			return data.filter((data,i)=>{
				return i!==index;
			})
		})
	}


	const SubmitData = (e) =>{
		e.preventDefault();
		console.log(data);
	}

	return (
		<>
			<Head>
				<title>Giant - Simandhar Education</title>
			</Head>
			<SideTab />


			<section className="section fixedPadd">
				<div className="container">
				<h2 className='heading03'>The right step to take a giant leap</h2>
					<form action="" method='POST' className='two-col mt-4'>
						{
							data.map((val, i) => {
								const {img,alt} = val;
								return(
									<div key={i}>
									<div>
										<div className="inputFileds wdt-full bb">
											<label htmlFor="" className='title01'> {i}.Image rq (Website Version) :</label>
											<h6 className='dimension'>*Dimensions : WxH | Format : .jpg, .png</h6>
											<div className="filedwrap two-col mb-4">
												<div className="imgBack">
													<input type="file" style={{ display: 'none' }} onChange={(e) => handleImageInputChange(e,i)} id={`img${i}`} className='wdt-full bordernone title01 posiinput' name='img' />
													{/* <span>Upload img</span> */}
													<span>{img ? <Image src={img} fill={true} className='resp-img' alt='img' /> : <Image src={blank_image_For_banner_page} fill={true} className='resp-img' alt='blank' />}</span>
												</div>
												<div className="one-col">
													<div className="addwrap">
														<a className='btn maroon-border-btn wdt-full text-center' onClick={(e) => clickUploadImage(`img${i}`)}>Add Image</a>
													</div>
													<div className="addwrap">
														<a className='btn maroon-border-btn wdt-full text-center' name="img" onClick={(e) => removeImage(e,i)}>Remove</a>
													</div>
												</div>
											</div>

											<div className="inputFileds wdt-full">
												<label htmlFor="" className='title01'>Image Alt text :</label>
												<input className='wdt-full bordernone title01' placeholder='Alt Text' name='alt' type="text" onChange={(e)=>handleInputChange(e,i)} value={alt}/>
											</div>
										</div>
										<div className="">
											<div className="two-col">
												<div className="addwrap">
													{data.length!==1 && <a className='btn maroon-border-btn mt-4 text-center' onClick={() => removeRow(i)}>Remove Row</a>}
												</div>
											</div>
										</div >
									</div>
								</div>
								)
							}
								
							)
						}
					</form>
					<div className="two-col">
						<div className="two-col">
							<div className="addwrap">
								<a className='btn maroon-border-btn mt-4 text-center' onClick={addRows}>Add Row</a>
							</div>
							{/* <div className="addwrap">
								<a className='btn maroon-border-btn mt-4 text-center' onClick={(i) => handleDelete(i)}>Remove Row</a>
							</div> */}
						</div>
					</div>
					<div className="two-col">
						<div className="two-col">
							<div className="addwrap">
								<a className='btn maroon-border-btn mt-4 text-center' onClick={SubmitData}>Submit</a>
							</div>
							{/* <div className="addwrap">
								<a className='btn maroon-border-btn mt-4 text-center' onClick={(i) => handleDelete(i)}>Remove Row</a>
							</div> */}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default giant