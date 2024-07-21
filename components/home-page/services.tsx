import { title } from 'process'
import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { LuSearchCheck } from "react-icons/lu";
import { BsPersonArmsUp } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import Link from 'next/link';
const servicesCards = [
    {
        "heading": "Content Generation",
        "desc": "Produce high-quality, personalized content within seconds.",
        "link": "content-generation-icon",
        "icon": <FaRegEdit/>
      },
      {
        "heading": "SEO Optimization",
        "desc": "Develop content optimized for search engines, enhancing your online presence.",
        "link": "seo-icon",
        "icon": <LuSearchCheck/>
      },
      {
        "heading": "Personalized Content",
        "desc": "Engage your audience with content crafted specifically for them.",
        "link": "personalized-content-icon",
        "icon": <BsPersonArmsUp/>
      },
      {
        "heading": "Security and Privacy",
        "desc": "Ensure robust data security and user privacy protections.",
        "link": "security-privacy-icon",
        "icon": <MdSecurity/>
      },
]


function ServiceSection() {
  return (
    <div className='md:max-w-7xl px-7 md:px-20  mx-auto my-4 md:my-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4'>
        {servicesCards.map((service,index)=>
            {return( 
            <div className='flex flex-col p-4 gap-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]' key={index}>
                <div className='bg-blue-600 p-2 w-[35px] h-[35px] inline-block rounded-md text-white'>{service?.icon}</div>
                <div className='font-semibold text-[14px]'>{service?.heading}</div>
                <div className='font-semibold text-gray-700 text-[12px]'>{service?.desc}</div>
                <Link className='font-semibold text-[14px] text-blue-600' href={'/dashboard'}>Learn more</Link>
            </div>)}
            )}
        </div>
    </div>
  )
}

export default ServiceSection    