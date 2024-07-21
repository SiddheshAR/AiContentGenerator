import React,{useEffect, useRef} from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { CopyIcon } from 'lucide-react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
interface props{
  aiOutput:string
}

function OutputSection({aiOutput}:props) {
  const editorRef:any = useRef();
  useEffect(()=>{
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput])
  
  return (
    <div className=' border'>
      <div className='bg-white'>
        <div className='flex flex-row justify-between p-4'>
            <h2 className='text-primary text-xl font-semibold'>Your Result:</h2>
            <CopyToClipboard text={aiOutput}>
                <div className='flex flex-row gap-1 cursor-pointer'>
                    <CopyIcon  className=''/>
                    <p>Copy</p>
                </div>
              </CopyToClipboard>
        </div>
      <Editor
        ref={editorRef}
        initialValue="Your Results will appear here.!"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        // onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  />
      </div>
    </div>
  )
}

export default OutputSection