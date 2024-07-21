"use client"
import React,{useState} from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

const page = () => {
  const [userSearchInput,onSearchInput] = useState<string>('');
  return (
    <div>
        <SearchSection onSearchInput={onSearchInput}/>
        <div className='p-8'>
          <TemplateListSection userSearchInput={userSearchInput}/>  
        </div>    
    </div>
  )
}

export default page