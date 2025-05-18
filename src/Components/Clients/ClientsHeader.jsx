import { Button } from '@mui/material'
import React from 'react'

export default function ClientsHeader() {
  return (
    <>
    <section className='my-32 py-2 flex justify-between items center shadow-2xl rounded-3xl'>
         <div className='w-[35%] ml-2 px-2 py-9'>
            <h1 className=' text-xl md:text-2xl mb-3'>Our Clients and them Comments</h1>
            <p className=' typography text-[.5rem] md:text-[.8rem] lg:text-[1rem] my-3 text-slate-600 opacity-50 leading-3 md:leading-5 lg:leading-9 '>
                "We always care about following up on our customers' feedback and addressing any issues they may face, whether related to product quality or delays in order delivery, and we work on correcting these issues"
            </p>
            <Button variant="outlined" sx={{
                fontSize :{
                    xs:".4rem",
                    md:".8rem"
                }
            }}
            >See All Comments</Button>
            

           
        </div>
        <div className='w-[50%]  mr-3'>
            <img src='https://i.pinimg.com/736x/29/b6/93/29b693dea359e9aeb66c4c94e02f76ab.jpg' className='w-full h-full rounded-2xl'/>
        </div>


    </section>
    
    
    </>
  )
}
