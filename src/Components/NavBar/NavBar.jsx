import './subNav.css'
import { Link } from 'react-router-dom'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import  ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import LogoutIcon from '@mui/icons-material/Logout';
import {  Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUserCart } from '../../Slices/CartSlice';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import { logout } from '../../Slices/TokenSlice';
import toast, { Toaster } from 'react-hot-toast';
import Guest from '../GuestRoute/Guest';






export default function NavBar() {

  const[open,setOpen]=useState(false)


  const Navigator= useNavigate()
 const token = useSelector(state=>state.auth.token)

 const dispatch= useDispatch()


  
    useEffect(()=>{
      if(token){

        dispatch(getUserCart(token))
      }
      
    },[token,dispatch])


  useEffect(()=>{

    const  handleIconColorOnScroll = ()=>{
      const scroll = window.scrollY
      const icons= document.querySelectorAll('.icon')
const navbar = document.querySelector(".Navbar");
      if(scroll >90)
      {
        icons.forEach((icon)=>{
          icon.style.color="white"
        })
      }else
      {
        icons.forEach((icon)=>{
          icon.style.color="black"
        })
      }
      if(scroll>160)
    {
        navbar.classList.add("navbarColor")
        
    }else
    {
        navbar.classList.remove("navbarColor")
        
    }

    }
    window.addEventListener("scroll",handleIconColorOnScroll)
  },[])
 
   
  
   
  return (
   <>
   <div><Toaster/></div>
    <section className='Navbar  py-4 px-4  flex justify-between items-center sticky top-0 left-0 z-50 '>
        
      
        <div className='flex justify-center items-center gap-2 lg:gap-20'>
         <h1 className='bg-slate-400 px-3 py-2 rounded-2xl'>MY SHOP</h1>
           <ul className='flex justify-center items-center gap-20'>
               <li className='navItem'><Link to={"/"}>Home</Link></li>
               <li className='navItem'><Link to={"/product"}>Products</Link></li> 
               <li className='navItem'><Link to={"/orders/:id"}>Orders</Link></li>
               <li className='relative menu' onClick={()=>{
                  setOpen(!open)
               }}>
                <DragHandleIcon sx={{color:"black"}} className='icon'/>
              {open?<>
                <ul className='subNav'>
                <li className=' mb-2 w-full border-b-2 border-slate-400 pb-2 text-black'><Link to={"/"}>Home</Link></li>
               <li className=' mb-2 w-full border-b-2 border-slate-400 pb-2 text-black'><Link to={"/product"}>Products</Link></li>
               <li className=' mb-2 w-full border-b-2 border-slate-400 pb-2 text-black'><Link to={"/orders"}>Orders</Link></li>
               <li className=' mb-2 w-full  pb-2 text-black'><Link to={"/Dashboard"}>Dashboard</Link></li>
                
               </ul>
              </>:""}
               
               </li>
           </ul>
         </div>
         {token?<>
          <div>
         <ul className='flex justify-center items-center gap-9'>
               <li><Link to={"/Cart"}><ShoppingCartIcon sx={{color:"black"}} className='icon'/></Link></li>
               
               <li onClick={()=>{
               dispatch(logout())
                toast.success("you'v logged out !!")
                setTimeout(()=>{
                  window.location.href="/login"
                  
                  
                },1000)
               }}><LogoutIcon sx={{color:"red"}} /></li>
           </ul>
         </div>
         </>:<>
         <div>
        <ul className='flex justify-center items-center gap-9'>
               <li className='relative login'>
                <Link to={"/login"}><LoginIcon sx={{color:"black"}} className='icon'/></Link>
                <span className='spn'>login</span>
                
                </li>
               
               
           </ul>

        </div>
         
         </>}
       
       
          
         
         
         
       </section>
   
   
   </>
  )
}
