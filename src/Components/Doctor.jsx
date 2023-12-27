import React from 'react'
import hero from "../assets/hero-img02.png"
import hero1 from "../assets/hero-img03.png"
import hero2 from "../assets/doctor-img01.png"

const Doctor = () => {
  return (
    <section className="m-4 md:m-8  text-gray-800" id='dot'>
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-5xl font-bold">Our Great Doctors </h2>
		<p className="text-gray-600">Libero minima optio qui Lorem ipsum <br /> dolor sit amet consectetur adipisicing elit.</p>
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex flex-col items-center p-4">
			<img src={hero} alt="" />
			<h3 className="my-3 text-3xl font-semibold">Dr.Zyen Mssq</h3>
			<div className="space-y-1 leadi">
				<p>Similique quas ea veniam</p>
				<p>Tempore quasi porro</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<img src={hero1} alt="" />
			<h3 className="my-3 text-3xl font-semibold">Dr. Jone Jon</h3>
			<div className="space-y-1 leadi">
				<p>Similique quas ea veniam</p>
				
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<img src={hero2} alt="" className='lg:w-[280px]'/>
			<h3 className="my-3 text-3xl font-semibold">Dr.Yuzii Rana</h3>
			<div className="space-y-1 leadi">
				<p>Similique quas ea veniam</p>
				<p>Tempore quasi porro</p>
			</div>
		</div>
		
			
		
	</div>
</section>
  )
}

export default Doctor