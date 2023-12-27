import React from 'react'
import logo from "E:/DOCTOR/medicure/src/assets/navlogo.png"
const Navbar = () => {
  return (
    <header className="p-4 text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<img src={logo} alt="" className='w-[40vh]'/>
		</a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#home" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-blue-600 border-blue-600">Home</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#ser" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Service</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#dot" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Doctors</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#foot" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Contact</a>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			
			<button className="self-center px-8 py-3 font-semibold rounded-lg bg-blue-600 text-gray-50">Login </button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
  )
}

export default Navbar