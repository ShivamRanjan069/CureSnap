import React from 'react'
import feature from "../assets/icon01.png"
import feature1 from "../assets/icon02.png"
import feature2 from "../assets/icon03.png"
const Feature = () => {
  return (
    <section className="m-4 md:m-8  text-gray-800">
	
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex flex-col items-center p-4">
			<img src={feature} alt="" />
			<h3 className="my-3 text-3xl font-bold">Find A Doctor</h3>
			<div className="space-y-1 leadi">
				<p>Similique quas ea veniam</p>
				<p>Tempore quasi porro</p>
				<p>Blanditiis aut mollitia ex</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<img src={feature1} alt="" />
			<h3 className="my-3 text-3xl font-semibold">Product</h3>
			<div className="space-y-1 leadi">
				<p>Similique quas ea veniam</p>
				<p>Tempore quasi porro</p>
				<p>Blanditiis aut mollitia ex</p>
			</div>
		</div>
	
	
		<div className="flex flex-col items-center p-4">
        <img src={feature2} alt="" />
			<h3 className="my-3 text-3xl font-semibold">Product</h3>
			<div className="space-y-1 leadi">
            <p>Private online consultations</p>
				<p>Similique quas ea veniam</p>
				<p>Tempore quasi porro</p>
			
			</div>
		</div>
	</div>
</section>
  )
}

export default Feature