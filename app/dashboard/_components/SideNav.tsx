"use client"
import Image from 'next/image'
import React from 'react'
import { Home,FileClock,WalletCards,Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';
import CreditUsage from './CreditUsage';
import Link from 'next/link';
const SideNav = () => {
    const MenuItems = [
        {
            name: 'Home',
            icon: Home,
            path:'/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path:'/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path:'/'
        },
        {
            name: 'Settings',
            icon: Settings,
            path:'/dashboard/settings'
        }
    ]
    const params = usePathname();
    console.log(params);
  return (
    <div className='h-screen shadow-md p-5 border-r-2'>
        <div>
            <Image src='/logo.svg' width={100} height={100} alt='logo' />
        </div>
        <hr className='my-6'></hr>
        <div className='mt-3'>
            {MenuItems.map((item,index)=>
            <Link  key={index} href={item.path}>
                <div className={`flex flex-row my-1 gap-2 ${params==item.path?'bg-primary text-white':''} hover:bg-primary hover:text-white cursor-pointer p-3 rounded-md`}>
                     <item.icon/>   
                     <p>{item.name}</p>
                </div>
            </Link>
            )}
        </div>
        <CreditUsage />
    </div>
  )
}

export default SideNav