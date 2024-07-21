"use client"
import React,{useContext, useEffect, useState} from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Template from '@/app/(data)/Template'
import { Button } from '@/components/ui/button'
import { IoArrowBackSharp } from "react-icons/io5";
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { AIOutput } from '@/utils/schema'
import { db } from '@/utils/db'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { toast } from 'react-toastify'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { UsageUpdateContext } from '@/app/(context)/UsageUpdateContext'
import CreditUsage from '../../_components/CreditUsage'

interface PROPS {
    params:{
        'template-slug':string
    }
}

const CreateNewContent = (props:PROPS) => {
  const [getFormInput,SetFormInput] = useState({});
  const [loading,setLoading] = useState(false);
  const [aiOutput,setAiOutput]=useState('');
  const {totalUsage,setTotalUsage}= useContext(TotalUsageContext);
  const {loadUsage,setLoadUsage}=useContext(UsageUpdateContext);
    let SelectedTemplate = Template.find((item)=>item.slug === props.params['template-slug']);
    const {user}= useUser();
    const SaveInDB = async(formData:any,slug:any,aiResp:any,userData:any)=>{
      const result = await db.insert(AIOutput).values({
        formData:formData,
        templateSlug:slug,
        aiResponse:aiResp,
        // createdBy:,
        createdBy:userData || "Dummy",
        createdAt:moment().format('DD/MM/YYYY')
      })
      console.log(result);
    }
    console.log(totalUsage);
    const GenerateContent = async()=>{
      if(totalUsage>10000){
        toast.error("Limit Reached")
        return null
      }
      setLoading(true);
      let selectedPrompt = SelectedTemplate?.aiPrompt;
      let selectedCategName = SelectedTemplate?.name;
      const FinalApiPrompt = JSON.stringify(getFormInput)+" "+selectedPrompt;
      // console.log(FinalApiPrompt);
      const result = await chatSession.sendMessage(FinalApiPrompt);
      setAiOutput(result.response.candidates[0].content.parts[0].text)
      await SaveInDB(getFormInput,selectedCategName,result.response.candidates[0].content.parts[0].text,user?.primaryEmailAddress?.emailAddress);
      // console.log(result.response.candidates[0].content.parts[0].text);
      // console.log(user);
      setLoadUsage(Date.now());
      setLoading(false);
    }
    useEffect(()=>{
      const runGenerate=async ()=>{
        await GenerateContent();
      }
      if(Object.keys(getFormInput).length>0){
        runGenerate();
      }
    },[getFormInput])
    // console.log(getFormInput)

  return (
    <div className='p-2 md:p-5 bg-slate-100'>
      <div className='flex flex-row justify-between'>
        <Link href={'/dashboard'}>
        <Button > 
            <div className='flex flex-row items-center gap-2 py-8'>
              <IoArrowBackSharp/> 
              <p >Back</p>
            </div>
          </Button>
          </Link>
          <div className='md:hidden'>
            <CreditUsage/>
          </div>
      </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 p-2 md:p-5'>
        <FormSection  SelectedTemplate={SelectedTemplate} SetFormInput={SetFormInput} loading={loading}/>
        <OutputSection aiOutput={aiOutput}/>
    </div>
    </div>
  )
}

export default CreateNewContent