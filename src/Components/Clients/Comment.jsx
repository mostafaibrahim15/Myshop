import { Avatar } from '@mui/material'
import "./comment.css"

export default function Comment() {
  return (
    <>
    <section className='  comment flex flex-col justify-between items-start border border-slate-800 mb-32 py-9 px-3 bg-slate-900 text-white rounded-2xl'>
       
            <div className='flex justify-start items-center'>
                <Avatar src='https://i.pinimg.com/736x/6b/be/47/6bbe47ef7d09cbd0b708cd8ae1e7c106.jpg'/>
                <h5 className='ml-3'>mostafa</h5>
            </div>
            
        
        <div className='my-4 flex justify-center items-center'>
            <p className='px-7'>
            " The product works as expected. Nothing more, nothing less. "
            </p>
        </div>
        <div className='triangle bg-slate-900 '></div>
    </section>
    
    </>
  )
}
