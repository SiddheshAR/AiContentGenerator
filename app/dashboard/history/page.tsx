"use client"
import React, { useEffect, useState } from 'react'
import HistoryTable from './_components/historyTable'
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { desc,eq } from 'drizzle-orm';
interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string | null;
  createdAt: string | null;
}
const page =() => {
  const [historyData, setHistoryData] = useState<HISTORY[]>();
  const { user } = useUser();
       useEffect(()=>{
        const fetchUserHistory = async () => {
               if (!user) return; // Ensure user exists
        
               let userEmail = user?.primaryEmailAddress?.emailAddress;
               let results = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, userEmail));
               // console.log(results);
               // Update state with safetched data
               setHistoryData(results);
             };
            fetchUserHistory();
            //  console.log(historyData);
       },[user])

  return (
    <div>
      <HistoryTable data={historyData}/>
    </div>
  )
}

export default page   