import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../Slices/Product'
import { Box, Typography } from '@mui/material'
import ProductCard from '../../Components/Productcard/ProductCard'
import './product.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


export default function Products() {

  // get all products
const {products}=useSelector(state=>state.products)
const dispatch= useDispatch()
console.log(products);

useEffect(()=>{
  dispatch(getAllProduct())
},[])
  return (
    <>
       {/* Product*/}
   <section className=' productHeader' >
       <Swiper
      slidesPerView={3}
     breakpoints={
      {
        150:{
          slidesPerView:2
        },
        450:{
          slidesPerView:3
        },
        620:{
          slidesPerView:5
        },
        920:
        {
           slidesPerView:6
        }

      }
     }
    >
      {products?.slice(25,35).map((product,index)=>(
        <SwiperSlide key={index}><img src={product.imageCover} alt={product.title} className='h-[100vh]'/></SwiperSlide>
    ))}
    </Swiper>
   </section>

    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9 mx-3'>
      {products.map((product,index)=>(
        <ProductCard key={index} data={product}/>
      ))}
    </div>
    </>
  )
}
