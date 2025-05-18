import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  deleteAllProductCart, getUserCart } from '../../Slices/CartSlice';
import { Box, Button, Paper } from '@mui/material';
import CartItem from '../../Components/CartItem/CartItem';
import { Link, Navigate, useNavigate } from 'react-router-dom';



export default function Cart() {
 
    
    const token= localStorage.getItem("myToken")
    const{userCart}=useSelector(state=>state.cartItems)
   
    const dispatch=useDispatch()
   const Navigator= useNavigate()

    

    useEffect(()=>{
        if(token){

            dispatch(getUserCart(token))
        }
    },[token,dispatch])



  return (
    <>
 
  {userCart.numOfCartItems>0?<>
  
   <Box sx={{
        width:{
            xs:"95%",
            md:"70%"
        },
        
        m:"auto",
        mt:"30px"
    }}>
        <div className='py-4 flex justify-between items-center gap-4 border-b-2 border-slate-600 mb-3 px-3'>
        <h1 className='text-[.7rem] md:text-[1.2rem]  text-slate-600'><em className='text-[.6rem] md:text-[.7rem] lg:text-[.9rem] mr-3'>total:</em>{userCart?.data?.totalCartPrice}</h1>
        <Button 
        onClick={()=>{
           dispatch(deleteAllProductCart({token})).unwrap()
           .then(()=>{
                dispatch(getUserCart(token))
           })
         
        }}
        variant="contained" sx={{bgcolor:"red",fontSize:{
                    xs:".6rem",
                    
                }}}>Clear All</Button>
        </div>
       
       {userCart?.data?.products.map((product,index)=>(
        <CartItem key={index} data={product}/>
       ))
       
       }

      <div className='my-6 w-full'>
         <Button variant='contained' sx={{width:{
        xs:"70%"
       },
       ml:"20%"
       
       
       }}
       onClick={()=>{
        Navigator("/orderForm")
       }}
       >Make Order</Button>

       
      </div>
    </Box>
  
  </>:<>
  
  <Box sx={{
        width:{
            xs:"95%",
            md:"70%"
        },
        
        m:"auto",
        mt:"30px",
        textAlign:"center"

    }}>
        <Paper sx={{
            padding:"15px"
        }} elevation={9}>

            <h1 className='text-red-800'>Your cart is empty</h1>
            <p className='my-2 text-slate-600'>Go back to products to add new cart items</p>
            <Button variant='outlined' sx={{my:2}}>
                <Link to={"/product"}>Products</Link>
            </Button>
        </Paper>
  </Box>
  
  
  </>}
   

    </>
  )
}
