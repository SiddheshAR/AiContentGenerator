import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  // import {CopyToClipboard} from 'react-copy-to-clipboard';
  interface PROPS{
    data:any
  }

function HistoryTable({data}:PROPS) {

  const wordCount = (content:string)=>{
    const words = content.split(/\s+/);
    
    // Returning the length of the words array
    return words.length;
    
  }
  // let cb = wordCount("ajsas dashd as dhaaaada sj  hsad as dashdjka dajshas  ksah")
  // console.log(cb);  
  // console.log(data);
  return (
    <div className='m-1 md:m-10'>
        <h2 className='text-center font-bold text-xl md:text-3xl my-8 text-purple-500'>History</h2>
        <Table>
  <TableCaption>List of Previous Queries.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Template Name</TableHead>
      <TableHead className="md:w-[350px]">Output</TableHead>
      <TableHead className="md:w-[150px]">Date</TableHead>
      <TableHead className="md:w-[150px]">Words</TableHead>
      <TableHead className="md:w-[150px] ">Copy</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {data?.map((e:any,index:any)=>
    <TableRow key={index}>
    <TableCell className="text-[12px]">{e?.templateSlug}</TableCell>
    <TableCell>
      <p className='text-clip line-clamp-3'>
        {e?.aiResponse}
        </p>
    </TableCell>
    <TableCell>{e?.createdAt}</TableCell>
    <TableCell>{wordCount(e?.aiResponse)}</TableCell>
    <TableCell className="">
                {/* <CopyToClipboard text={e?.aiResponse} > */}
                  <button onClick={()=>navigator.clipboard.writeText(e?.aiResponse)} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700">
                    Copy
                  </button>
                {/* </CopyToClipboard> */}
    </TableCell>
  </TableRow>)}
  </TableBody>
</Table>

    </div>
  )
}

export default HistoryTable