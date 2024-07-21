
import React from 'react'
import {TEMPLATE} from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

const TemplateCard = (item:TEMPLATE) => {
  return (
    <Link href={'/dashboard/content/'+item.slug}>
    <div className='p-5 flex flex-col gap-2 cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-105 transition-all'>
        <Image src={item.icon} height={50} width={50} alt="icons"/>
        <h2 className='text-[14px] font-semibold text-gray-900 line-clamp-2'>{item.name}</h2>
        <p className='line-clamp-3 text-[12px] text-gray-500'>{item.desc}</p>
    </div>
    </Link>
  )     
}

export default TemplateCard