"use client"
import React,{useState} from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { LoaderIcon } from 'lucide-react'

interface PROPS {
  SelectedTemplate?:TEMPLATE,
  SetFormInput:any,
  loading:boolean
}

function FormSection({SelectedTemplate,SetFormInput,loading}:PROPS) {
  const [formData,setFormData] = useState({});
  const handleInputChange = (event)=>{

      const {name,value} = event.target
      setFormData({
        ...formData,
        [name]:value
      })
  }

  const onSubmit = async(e:any)=>{
    e.preventDefault();
    console.log("execute 1")
    SetFormInput(formData);
  }

  return (
    <div className='border rounded-md shadow-sm p-5 bg-white'>
      <div className='flex flex-col gap-3'>
        <Image src={SelectedTemplate?.icon} height={70} width={70} alt="logo"/>
        <h2 className='text-2xl font-semibold text-purple-800'>{SelectedTemplate?.name}</h2>
      </div>
      <p className='text-[14px] text-gray-700 '>
        {SelectedTemplate?.desc}
      </p>  
      <div>
            <form onSubmit={onSubmit} className='mt-6 flex flex-col gap-4'>
                {SelectedTemplate?.form?.map((item,index)=>{
                  return(
                    <div className='flex flex-col gap-2' key={index}>
                        <label className='font-semibold text-gray-700'>{item.label}</label>
                        {item.field=="input"?
                        <Input name={item.name} required={item.required} onChange={(event)=>handleInputChange(event)}/>:
                        <Textarea name={item.name} required={item.required} onChange={(event)=>handleInputChange(event)} />}
                    </div>
                  )
                })}
                <button type='submit' className='bg-primary text-white py-2 rounded-md'>
                  {/* {loading && <LoaderIcon/>} */}
                  <div className='flex flex-row gap-1 justify-center items-center p-1'>
                   
                    {loading &&  <LoaderIcon className='animate-spin'/>}
                    <p>Generate Content</p>
                  </div>

                </button>
            </form>
      </div>
    </div>
  )
}

export default FormSection