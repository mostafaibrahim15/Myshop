import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductHeader() {
  return (
    <>
    
    <section className='my-32 py-2 flex justify-between items center shadow-2xl rounded-3xl'>
         <div className='w-[35%] ml-2 px-2 py-9'>
            <h1 className=' text-xl md:text-2xl mb-3'>Products</h1>
            <p className=' typography text-[.5rem] md:text-[.8rem] lg:text-[1rem] my-3 text-slate-600 opacity-50 leading-3 md:leading-5 lg:leading-9 '>
                <span className='span'>Discover</span> the latest in cutting-edge technology with our wide selection of <span className='span'>electronics</span>.
             From smartphones and laptops to smart home devices and accessories, we offer everything you need to stay connected and powered up.
            </p>
            <Button variant="outlined" 
            ><Link to={"/product"} className='text-[.5rem] md:text-md lg:text-[.9rem]'>See All Products</Link></Button>
            

           
        </div>
        <div className='w-[50%]  mr-3'>
            <img src='https://i.pinimg.com/736x/80/19/7d/80197dee1cdb694b4081168ba6704bd3.jpg' className='w-full h-full rounded-2xl'/>
        </div>


    </section>
    
    
    
    </>
  )
}
