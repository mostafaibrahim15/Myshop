import React, { useEffect } from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import SettingsIcon from '@mui/icons-material/Settings';
import "./main.css"
import NavBar from '../NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands } from '../../Slices/BrandSlice';


export default function Main() {
    const {Brands}= useSelector(state=>state.Brands)
    const dispatch=useDispatch()
console.log(Brands ,'mybrands');


useEffect(()=>{
 dispatch(getAllBrands())
},[])

    useEffect(()=>{

        

const handleScroll=()=>{
    const scroll = window.scrollY
    const header = document.querySelector(".header");
    const landing = document.querySelector(".pageLanding");
    
   


    if(scroll >= 30)
    {
        landing.classList.add("landingImage2")
        header.textContent="welcome !"
        header.classList.add("yellowText")
        const elements= document.querySelectorAll(".child")
        elements.forEach((element,index)=>{
            const images=[
                "https://i.pinimg.com/736x/f8/1b/87/f81b87e21f8ad3acd29a16f4033169f8.jpg",
                "https://i.pinimg.com/736x/72/6c/1d/726c1d9f7cd66522977c8dfc36906f34.jpg",
                "https://i.pinimg.com/736x/51/bb/c8/51bbc8b2b42af33e48238b76c18f4114.jpg"
            ]
            element.setAttribute("src",images[index])
          
        })

       
    }else
    {
        landing.classList.remove("landingImage2")
        header.textContent="Happy shopping with us!"
        header.classList.remove("yellowText")

        const elements= document.querySelectorAll(".child")
        elements.forEach((element,index)=>{
            const images=[
                "https://i.pinimg.com/736x/80/62/fc/8062fc25243b68c02309fd1ad02ccfaa.jpg",
                "https://i.pinimg.com/736x/f7/ef/66/f7ef668eca95bc59cd05f2d294eec667.jpg",
                "https://i.pinimg.com/736x/b3/36/dc/b336dcbfa5262d766b8da61b13546a8e.jpg"
            ]
            element.setAttribute("src",images[index])
          
        })
       
    }
    
    

    


}
     
        window.addEventListener("scroll",handleScroll)
    },[])


       





    

    

 
  return (
    <>
   
    <section className='w-full h-[100vh]  relative top-[-80px] left-0 flex '>
      
    <h1 className='absolute top-[25%] left-[5%] text-[80px] z-30 text-slate-700 header'>Happy shopping with us!</h1>
        <div className='w-[50%] bg-white h-[100vh] flex justify-center items-center px-19'>
            <p className='text-gray-600'>Welcome to our shop! Discover amazing products, enjoy secure shopping, fast delivery, and great customer service. We're glad you're here—happy shopping with us!   </p>
        </div>
        <div className='w-[50%] bg-yellow-200 h-[100vh] relative pageLanding landingImage'>
            <div className=' absolute top-[65px] right-0 px-0 bg-white h-[100%]  flex flex-col justify-around  items-center brand'>
                <p className='textDirection'>Music</p>
                <p className='textDirection'>Books</p>
                <p className='textDirection'>clothes</p>
                <p className='textDirection'>electronics</p>
            </div>
            <div className='absolute bottom-0 right-[10%] w-[40%] bg-white'>
               <ul className='flex justify-between items-center py-2 px-3'>
                <li><FacebookIcon/></li>
                <li><InstagramIcon/></li>
                <li><XIcon/></li>
                <li><SettingsIcon/></li>
               </ul>
            </div>
        </div>
        <div className='absolute bottom-0 left-0   w-[70%] overflow-hidden parent'>
            <div className='flex justify-around items-center gap-0 pl-6 '>
                <div className='w-[350px] h-[200px] '>
                    <img src='https://i.pinimg.com/736x/80/62/fc/8062fc25243b68c02309fd1ad02ccfaa.jpg' className='w-full h-full child'/>
                </div>
                <div className='w-[350px] h-[200px] '>
                    <img src='https://i.pinimg.com/736x/f7/ef/66/f7ef668eca95bc59cd05f2d294eec667.jpg' className='w-full h-full child'/>
                </div>
                <div className='w-[390px] h-[200px] '>
                    <img src='https://i.pinimg.com/736x/b3/36/dc/b336dcbfa5262d766b8da61b13546a8e.jpg' className='w-full h-full child'/>
                </div>
                
               
            </div>
        </div>
    </section>
    
   
    
    
    </>
  )
}
