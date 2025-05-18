import React, { useEffect } from 'react'
import "./category.css"
export default function CategoryHeader() {

  useEffect(()=>{

    const items= document.querySelectorAll(".span")
     items.forEach((item)=>{
        item.classList.add("itemAnimation")
     })


  },[])




  return (
   <>
   
   <section className=' py-2 flex justify-between items center shadow-2xl rounded-3xl'>
        <div className='w-[35%] ml-2 px-2 py-9'>
            <h1 className=' text-xl md:text-2xl mb-3'>Category</h1>
            <p className=' typography text-[.5rem] md:text-[.8rem] lg:text-[1rem] my-3 text-slate-600 opacity-50 leading-3 md:leading-5 lg:leading-9 '>
                <span className='span'>Discover</span> the latest in cutting-edge technology with our wide selection of <span className='span'>electronics</span>.
             From smartphones and laptops to smart home devices and accessories, we offer everything you need to stay connected and powered up.
                Step into style with our collection of <span className='span'>men's shoes</span>, designed for comfort, performance, and fashion. Whether you need <span className='span'>dress shoes</span>, <span className='span'>sneakers</span>, or , find the perfect pair for any occasion.
                Refresh your living space with stylish and functional home décor. From wall art to throw pillows, find the perfect accents to personalize every room in your home.
                Nourish your skin naturally with our range of organic skincare products. Made with clean ingredients and free from harsh chemicals, our creams, cleansers, and serums are gentle on your skin and the planet.
            </p>
            

           
        </div>
        <div className='w-[50%]  mr-3'>
            <img src='https://i.pinimg.com/736x/d1/df/6e/d1df6e17d77bb55604879276afb89b5d.jpg' className='w-full h-full rounded-2xl'/>
        </div>
   </section>
   
   
   </>
  )
}
