import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}) => {
  return (
    <div className='p-10 flex flex-col gap-1 justify-center items-center bg-gradient-to-br from-purple-500 via-purple-600 to-blue-500'>
        <h2 className='text-3xl font-semibold text-white text-center'>Browse all Templates.</h2>
        <p className='text-white text-[14px] text-center'>What woulld you like to create today?</p>
        <div className='mt-4 w-full flex justify-center items-center'>
            <div className='flex gap-2  p-1.5 border rounded bg-white w-[90%] lg:w-[50%] '>
                <Search className='text-primary' />
                <input type='text' placeholder='Search'
                onChange={(event)=>onSearchInput(event.target.value)}
                className='w-full bg-transparent  focus:outline-none text-primary placeholder:text-primary '
                />
            </div>  
        </div>
    </div>
  )
}

export default SearchSection