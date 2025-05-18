import { Button, Divider } from '@mui/material';
import React from 'react'
import { useDispatch,  } from 'react-redux';
import { deleteSpecificProduct, getUserCart, updateCartQuantity} from '../../Slices/CartSlice';



export default function CartItem({data}) {
   
 const dispatch= useDispatch()
  
console.log(data ,"may data");


const token= localStorage.getItem("myToken")

  return (
   <>
  
   
   <div className='w-full flex justify-between items-center m-auto py-2 px-2 border border-slate-300 rounded-3xl mb-3'>
        <div className='w-[20%] md:w-[40%] lg:w-[20%]'>
            <img src={data.product.imageCover} className='w-full'/>
        </div>
        <div className='w-[70%] md:w-[45%] lg:w-[55%]'>
            <h1 className='text-[.7rem] md:text-[.8rem]  text-slate-600'><em className='text-[.5rem] md:text-[.7rem] lg:text-[.9rem] mr-3'>title:</em>{data.product.title}</h1>
            <p className='text-[.7rem] md:text-[.8rem]  text-slate-600'><em className='text-[.5rem] md:text-[.7rem] lg:text-[.9rem] mr-3'>Brand:</em>{data?.product?.brand?.name}</p>
            <p className='text-[.7rem] md:text-[.8rem]  text-slate-600'><em className='text-[.5rem] md:text-[.7rem] lg:text-[.9rem] mr-3'>category:</em>{data?.product?.category?.name}</p>
            <p className='text-[.7rem] md:text-[.8rem]  text-slate-600'><em className='text-[.5rem] md:text-[.7rem] lg:text-[.9rem] mr-3'>price:</em>{data?.price}  L.E</p>
            <p className='text-[.7rem] md:text-[.8rem]  text-slate-600'><em className='text-[.5rem] md:text-[.7rem] lg:text-[.9rem] mr-3'>count:</em>{data.count}</p>
            <div className='flex justify-between items-center gap-1'>
                <div className='flex justify-center items-center my-4 gap-3'>
                <Button variant="contained"  sx={{fontSize:{
                    xs:".6rem",
                    md:"1.1rem"
                    
                }}}
                
                onClick={()=>{
                    
                 
                 dispatch(updateCartQuantity({id:data.product.id,token,count:data.count+1})).unwrap()
                 .then(()=>{
                    dispatch(getUserCart(token))
                 })
                    
                }}
                
                >
                    +
                    
                </Button>
             
               
                
               
               <Button variant="contained"  sx={{fontSize:{
                   xs:".6rem",
                     md:"1.1rem"
               }}}
              
               
               onClick={()=>{
                
                 dispatch(updateCartQuantity({id:data.product.id,token,count:data.count-1})).unwrap()
                 .then(()=>{
                    dispatch(getUserCart(token))
                 })
                    
            
            }}
               
               >
                   -
               </Button>
              
               
              
                </div>
                <Button variant="contained" sx={{bgcolor:"red",fontSize:{
                    xs:".6rem",
                    
                }}} onClick={()=>{
                    dispatch(deleteSpecificProduct({id:data.product.id,token})).unwrap()
                    .then(()=>{
                         dispatch(getUserCart(token))
                    })
                   
                }}>Cancel</Button>
            </div>
        </div>    

   </div>
   

  
   
   
   </>
  )
}
