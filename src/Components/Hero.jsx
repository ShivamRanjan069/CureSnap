import React from 'react'
import head from "../assets/hero-img01.png"


const Hero = () => {
  return (
    <section className=" text-gray-800 overflow-hidden " id='home'>
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl lg:w-[600px]">We Help 
				<span className="text-blue-600">Patients</span>
                <br /> Live a healthy <br />
                longer life
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 text-gray-50">Request a Appointment</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Book Now</a>
			</div>
			<section className="p-6  text-gray-800">
	<div className="container mx-auto grid justify-center grid-cols-2 text-center  lg:grid-cols-3">
		<div className="flex flex-col justify-start m-2 lg:m-6 lg:mx-8">
			<p className="text-4xl font-bold leadi lg:text-6xl">50+</p>
			<p className="text-sm sm:text-base">Year of Exprience</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6 lg:mx-8">
			<p className="text-4xl font-bold leadi lg:text-6xl">16+</p>
			<p className="text-sm sm:text-base">Clinc Loaction</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6 lg:mx-16">
			<p className="text-4xl font-bold leadi lg:text-6xl">100%</p>
			<p className="text-sm sm:text-base">Patients Satisfaction</p>
		</div>
		
		
	</div>
</section>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={head} alt="" className="object-contain h-72 sm:h-80 lg:h-[500px] xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
  )
}

export default Hero