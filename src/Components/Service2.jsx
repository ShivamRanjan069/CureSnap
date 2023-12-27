import React from 'react'
import serv from "../assets/doctor-img03.png"
import servhead from "../assets/about-card.png"
const Service2 = () => {
  return (
    <section className=" text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-semibold leadi sm:text-6xl">Proud To Be One Nation Best 
			
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, esse obcaecati! Totam laudantium eum, rerum corporis laboriosam incidunt facilis! Illo reprehenderit aperiam neque architecto nihil. 
            <br />
			
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 text-gray-50">Learn More</a>
				
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src={servhead} alt="" className='lg:-mx-[90px] z-40 hidden'  />
			<img src={serv} alt="" className="object-contain h-72 sm:h-80 lg:h-[400px] xl:h-112 2xl:h-128 z-0"  />
		</div>
		
	</div>
</section>
  )
}

export default Service2