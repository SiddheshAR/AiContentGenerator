"use client"
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UsageUpdateContext } from '@/app/(context)/UsageUpdateContext';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect,useState } from 'react'


interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string | null;
  createdAt: string | null;
}

function CreditUsage() {
  const {user} = useUser();
  // let [totalUsage,setTotalUsage]=useState(0);
  const {totalUsage,setTotalUsage}= useContext(TotalUsageContext);
  const {loadUsage,setLoadUsage}=useContext(UsageUpdateContext);
  let userEmail = user?.primaryEmailAddress?.emailAddress;

  const WordCounter = (UserContent:HISTORY[])=>{
    let a:number = 0;
    UserContent.forEach((e:HISTORY)=>{
      const words = e?.aiResponse?.split(/\s+/);
      a+=words?.length || 0;
    })
    setTotalUsage(a);
    console.log("A:",a);
  }
  // const RefreshCounter=()=>{
  //   const getData=async()=>{
  //     let results = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, userEmail));
  //     WordCounter(results);
  //   }
  //   getData();
  // }
  useEffect(()=>{
    const getData=async()=>{
      if(userEmail){
        let results = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, userEmail));
        WordCounter(results);
      }
    }
    getData();
  },[user])
  useEffect(()=>{
    const getData=async()=>{
      if(userEmail){
        let results = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, userEmail));
        WordCounter(results);
      }
    }
    getData();
  },[loadUsage,user])

  return (
    <div className=' md:m-5'>
        <div className='hidden md:block bg-primary text-white p-3 rounded-lg'>
            <h2>Credits</h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className='h-2 bg-white rounded-full' style={{width:(totalUsage/10000)*100}}>
                  
                </div>
            </div>
            <div className='my-2'>
             <p className='text-[12px]'>Total Usage: {totalUsage} /10,000</p> 
            </div>
            {/* <div>
              <p className='inline-block cursor-pointer text-[11px]' onClick={()=>RefreshCounter()}>Refresh</p>
            </div> */}
        </div>
        <div className='md:hidden bg-primary flex flex-row gap-2 text-white p-1.5 rounded-lg'>
            <h2 className='text-[14px] justify-center '>Credits used</h2>
            <div>
              <div className=' h-1.5 bg-[#9981f9] w-full rounded-full mt-1'>
                  <div className='h-1.5 bg-white rounded-full' style={{width:(totalUsage/10000)*100}}>
                    
                  </div>
              </div>
              <div className='mt-0.5'>  
              <p className='text-[8px]'>Total Usage: {totalUsage} /10,000</p> 
              </div>
            </div>
        </div>
    </div>
  )
}

export default CreditUsage    