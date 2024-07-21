import Template from '@/app/(data)/Template'
import React,{useState,useEffect} from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE{
  name:string,
  desc:string,
  icon:string,
  category:string,
  slug:string,
  aiPrompt:string,
  form?:FORM[]
}

export interface FORM{
  label:string,
  field:string,
  name:string,
  required?:boolean
}

const TemplateListSection = ({userSearchInput}:string) => {
  const [templateList,setTemplateList] = useState<TEMPLATE[]>(Template);


  useEffect(()=>{
    if(userSearchInput){
      const filteredList = Template.filter((item)=>{
        return item.name.toLowerCase().includes(userSearchInput.toLowerCase().trim());
      })
      setTemplateList(filteredList);
    }
  },[userSearchInput])

  return (
    <div className='px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {templateList.map((item:TEMPLATE,index:number)=>
        (
          <div key={index}>
            <TemplateCard {...item}/>
          </div>
        )
        )}
    </div>
  )
}

export default TemplateListSection