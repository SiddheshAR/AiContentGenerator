import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaRegUser } from "react-icons/fa";
function Navbar() {
  return (
    <div className='py-3 px-2 md:px-20 border-b-2 flex justify-between items-center md:justify-between gap-2'>
        <Link href={'/'}>
            <div className='flex flex-row gap-2 cursor-pointer'>
                <Image src='/logo.svg' width={70} height={70} alt='logo' />
                <h2 className='font-bold text-transparent '><span className='bg-gradient-to-l from-sky-600 to-purple-800 bg-clip-text'>AI Content Generator</span> </h2>
            </div>    
        </Link>
        <Link href={'/dashboard'}>
            <div className='cursor-pointer flex flex-row justify-between items-center gap-2 text-[9px] md:text-[14px] text-purple-700 border border-gray-400 rounded-md p-1'>
                <FaRegUser/>
                <p>Get Started</p> 
            </div>
        </Link>
    </div>
  )
}

export default Navbar