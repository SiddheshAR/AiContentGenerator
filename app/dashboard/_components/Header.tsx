"use client"
import React from 'react'
import { Search } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <div className='p-3 border-b-2 flex justify-between md:justify-end gap-2'>
        {/* <div className=' flex gap-2 items-center p-2 border rounded-md max-w-md'>
            <Search/>
            <input type='text' placeholder='Search...' className='outline-none'/>
            
        </div> */}
        <div className='md:hidden'>
            <Image src='/logo.svg' width={70} height={70} alt='logo' />
        </div>
        <div className='flex gap-5 text-[13px] items-center justify-center md:hidden'>
          <Link href={'/'}><p>Home</p></Link>
          <Link href={'/dashboard/history'}><p>History</p></Link>
          <Link href={'/dashboard/settings'}><p>Settings</p></Link>

        </div>
        <div className='hidden md:block bg-primary p-3 rounded-full text-xs text-white '>
            Join Membership just for 5.55$.
        </div>
        <UserButton/>

    </div>
  )
}

export default Header