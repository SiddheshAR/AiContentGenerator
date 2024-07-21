"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import { TotalUsageContext } from '../(context)/TotalUsageContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { UsageUpdateContext } from '../(context)/UsageUpdateContext'

const layout = ({children,}:Readonly<{children:React.ReactNode}>) => {
  const [totalUsage,setTotalUsage]= useState<Number>(0);
  const [loadUsage,setLoadUsage]=useState(null);
  return (
    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
      <UsageUpdateContext.Provider value={{loadUsage,setLoadUsage}}>
        <div>
            <div className='hidden md:block md:w-60 fixed'>
                <SideNav/>
            </div>
            <div className='md:ml-60'>
                <Header/>
                {children}
            </div>
        </div>
        <ToastContainer/>
      </UsageUpdateContext.Provider>
    </TotalUsageContext.Provider>
  )
}

export default layout