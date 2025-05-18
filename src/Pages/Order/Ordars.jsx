import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getUserOrders } from '../../Slices/OrderSlice';
import { Box, Button } from '@mui/material';
import { useParams } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';






export default function Ordars() {
    // const[openOrders,setOpenOrders]=useState(true)
    const {id}= useParams()
    console.log(id);
    
const dispatch= useDispatch()
const {allOrders,userOrders}=useSelector(state=>state.shippingAddresses)
console.log(allOrders,"my all orders");
console.log(userOrders,"my  orders");

useEffect(()=>{

    dispatch(getUserOrders({id}))
},[])


//  dialog

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
   <section >
         
        
    <h1 className='py-3 px-15 '>All MY Orders</h1>
    
  
  
   <Box sx={{
    width:{
        xs:"95%",
        md:"60%"
    },
    m:"auto"
   }}>
     
    {userOrders?.map((order,index)=>(
         <div key={index} className='border border-slate-700 shadow-2xl my-4 py-12 px-4 rounded-3xl text-cyan-900'>
                    <h1>Name:  {order.user.name}</h1>
                    <h3>Phone:  {order.user.phone}</h3>
                    <h4>email:  {order.user.email}</h4>
                    <h5> status:   {order.isDelivered? "delivered":"in the way"}</h5>
                    <p> price:  {order.totalOrderPrice}</p>
                    <p> Products Items:  {order.cartItems.length}</p>
                    <p> Payment:  {order.paymentMethodType}</p>
                    <Button variant='contained' sx={{my:2}} onClick={handleClickOpen} >Show More Details</Button>  
                    <Dialog 
   fullScreen
    open={open}
    onClose={handleClose}
    sx={{bgcolor:"black"}}
    >
        <AppBar sx={{ position: 'fixed',bgcolor:"black" }}>
          <Toolbar>
            <IconButton
              edge="start"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon sx={{color:"white"}}/>
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              My Orders Items
            </Typography>
            
          </Toolbar>
        </AppBar>
    <div>
        {order.cartItems.map((item,index)=>(
            <div key={index} className='shadow-2xl  text-slate-900 w-[50%] m-auto my-32 py-8 rounded-2xl px-2'>
               
                <div className='flex justify-center items-center my-4'>
                    <img src={item.product.imageCover} alt={item.product.title} className=' h-[450px] rounded-4xl'/>
                </div>
                 <div className='flex flex-col justify-between items-center px-4 my-2'>
                    <h1>title : {item.product.title}</h1>
                    <p> price : {item.price}</p>
                      <p>Count: {item.count}</p>
                    <p>Rate: {item.product.ratingsAverage}</p>
                </div>
                
            </div>
        ))}
    </div>

    </Dialog>
    </div>
    ))}
   </Box>
    
    
    
 
   </section>
  )
}
