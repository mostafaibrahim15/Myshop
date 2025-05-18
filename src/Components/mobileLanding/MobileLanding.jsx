import React, { useEffect } from 'react'

export default function MobileLanding() {

    useEffect(()=>{

        const handleScroll=()=>{
            const scroll = window.scrollY
            const imgSrc= document.querySelector(".bgImage")

            if(scroll >150)
            {
                imgSrc.setAttribute('src',"https://i.pinimg.com/736x/62/71/54/6271549c3e04b505b3648e86ced2b150.jpg")
            }else
            {
                imgSrc.setAttribute('src',"https://i.pinimg.com/736x/8f/61/88/8f618811b859e93e2c1cc19ea33447e8.jpg")
            }

        }

window.addEventListener("scroll",handleScroll)
    },[])
  return (
    <>
     
     <section className='relative top-[-80px]'>
        <div className='w-[100vw] h-[100vh]'>
            <img src='https://i.pinimg.com/736x/8f/61/88/8f618811b859e93e2c1cc19ea33447e8.jpg'className='w-full h-full bgImage'/>
        </div>

     </section>
    
    
    
    
    </>
  )
}
