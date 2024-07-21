import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className='flex flex-col items-center py-12 gap-4 md:gap-7 w-[90%] md:w-[50%] mx-auto'>
     <div className='flex flex-row justify-center '>
        <h2 className='text-[24px] md:text-4xl font-bold text-gray-800'>AI Content  <span className='text-[24px] md:text-4xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700'>
             Generator
        </span></h2>

    </div>
    <div>
        <p className='text-[12px] md:text-md text-center font-semibold text-gray-600'>
        Elevate Your Content Game to New Heights with Our Innovative AI-Powered App, Tailored to Produce High-Quality and Engaging Content that Not Only Meets But Exceeds Your Expectations. Dive Into a World Where Technology and Creativity Converge to Transform Your Content Strategy.
        </p>
    </div>
    <div>
      <Link href={'./dashboard'} >
        <button className='text-[13px] font-semibold px-3 py-3 bg-gradient-to-r from-indigo-700 to-purple-600 text-white p-3 rounded-md'>Get Started</button>
        </Link>
    </div>

    </div>
  )
}

export default HeroSection