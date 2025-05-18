import { Box, Button, Dialog, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBrands } from '../../Slices/BrandSlice'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// HomeStyle

import './Home.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { getAllCategories} from '../../Slices/CategorySlice'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import ProductCard from '../../Components/Productcard/ProductCard'
import { getAllProduct } from '../../Slices/Product'
import Main from '../../Components/Main/Main'
import MobileLanding from '../../Components/mobileLanding/MobileLanding'
import CategoryHeader from '../Categories/CategoryHeader'
import ProductHeader from '../Products/ProductHeader'
import ClientsHeader from '../../Components/Clients/ClientsHeader'
import Comment from '../../Components/Clients/Comment'
import Contact from '../../Components/Contact/Contact'



export default function Home() {
  
  
 
  
const Navigator=useNavigate()
const dispatch= useDispatch()
// get all brands


// get all Categories
const {Categories}= useSelector(state=>state.Categories)
// get all products
const {products}=useSelector(state=>state.products)




 

useEffect(()=>{
  
  
  dispatch(getAllBrands())
  dispatch(getAllCategories())
  dispatch(getAllProduct())
},[])







  return (
   <>
   {/* home Landing on large screen  */}
     <Box sx={{ position: 'relative', display:{
      xs:"none",
      md:"block"
     } }}>
      <Main/>
    </Box>
   {/* home Landing on mobile screens  */}

   <Box sx={{display:{
    xs:"block",
    md:"none"
   }}}>

    <MobileLanding/>
   </Box>

  
    {/* Category */}

      <Box sx={{
        width:{
          xs:"99%",
          md:"90%"
        },
        m:{
          md:"auto"
        }
      }}>
        <CategoryHeader/>
      </Box>
      <Box 
      sx={{
         width:{
          xs:"99%",
          md:"90%"
        },
        m:{
          md:"auto"
        }
      }}
      
      >
          <Swiper 
   spaceBetween={30}
   slidesPerView={1}
 breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
  
  
  >
       {Categories.map((Category,index)=>(
         <SwiperSlide key={index}>
        <div className='flex-col text-center justify-center items-center '>
          <img alt={Category.name} src={Category.image} className=' rounded-2xl my-6'/>
          <p>{Category.name}</p>
        </div>
       </SwiperSlide>
       ))}
    
     </Swiper>
      </Box>
   

    {/* Product*/}
    <Box sx={{
        width:{
          xs:"99%",
          md:"90%"
        },
        m:{
          md:"auto"
        }
      }}>
        <ProductHeader/>

    </Box>
    <Box 
      sx={{
         width:{
          xs:"99%",
          md:"90%"
        },
        m:{
          xs:"auto",
         
        }
      }}
      
      >
          <Swiper 
   spaceBetween={30}
   slidesPerView={1}
 breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
  
  
  >
       {products.slice(0,16).map((product,index)=>(
         <SwiperSlide key={index}>
         
        <ProductCard key={index} data={product}/>
     
       </SwiperSlide>
       ))}
    
     </Swiper>
    </Box>
     
     {/* Comments */}

      <Box sx={{
        width:{
          xs:"99%",
          md:"90%"
        },
        m:{
          md:"auto"
        }
      }}>
        <ClientsHeader/>

      </Box>
        
      <Box sx={{
        width:{
          xs:"90%",
          md:"40%"
        },
        m:{
          xs:"auto",
          
        },
        
      }}>

         <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
       
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Comment/></SwiperSlide>
        <SwiperSlide><Comment/></SwiperSlide>
        <SwiperSlide><Comment/></SwiperSlide>
        <SwiperSlide><Comment/></SwiperSlide>
        <SwiperSlide><Comment/></SwiperSlide>
        <SwiperSlide><Comment/></SwiperSlide>
        <SwiperSlide><Comment/></SwiperSlide>
        <SwiperSlide><Comment/></SwiperSlide>
        <SwiperSlide><Comment/></SwiperSlide>
        <SwiperSlide><Comment/></SwiperSlide>
      </Swiper>
      </Box>
    {/* contact */}
     <Box sx={{
        width:{
          xs:"99%",
          md:"90%"
        },
        m:{
          md:"auto"
        }
      }}>
        <Contact/>

      </Box>


   </>
  )
}
