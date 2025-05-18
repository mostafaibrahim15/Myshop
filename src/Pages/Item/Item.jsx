import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getSpecificProduct } from '../../Slices/Product';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function Item() {
    const navigator= useNavigate()
    const {id}=useParams()
    const dispatch= useDispatch() 
    const {product}=useSelector(state=>state.products)
    console.log(id);
    console.log(product);

    useEffect(()=>{

       dispatch( getSpecificProduct(`${id}`))
    },[])
    
  return (
  <>
    <Button variant="text" sx={{display:"flex", justifyContent:"center",alignItems:"center", mt:9}}onClick={()=>{
        navigator("/product")
    }}> <ArrowBackIcon sx={{mr:1}} /> Back</Button>
    
    <div className='flex flex-col md:flex-row ' >
    <div className='w-[450px] h-[450px] my-6'>
        <img src={product.imageCover} className='w-full h-full px-9 '/>
    </div>
    <div className=' py-4 md:py-30 px-3 flex-col justify-start items-start'>
            <div className='mb-5' >
                {product?.brand?.name?(<p className='text-slate-900'><em className='text-slate-400 mr-3'>Brand: </em>{product.brand.name}</p>):""}
                {product?.category?.name?(<p className='text-slate-900'><em className='text-slate-400 mr-3'>Category: </em>{product.category.name}</p>):""}
            </div>
            <p className='text-slate-900'><em className='text-slate-400 mr-3'>Description:</em>{product.description}</p>
            <p className='text-slate-900'><em className='text-slate-400 mr-3'>Price: </em>{product.price}L.E</p>
            <div className='flex gap-2 py-3'>
            <Button variant="contained" sx={{display:"flex", justifyContent:"center",alignItems:"center"}} ><ShoppingCartIcon /></Button>
            <Button variant="contained" sx={{display:"flex", justifyContent:"center",alignItems:"center"}}> <FavoriteIcon /></Button>
            </div>
          
        </div>
    </div>

  
  
  
  
  </>
  )
}
