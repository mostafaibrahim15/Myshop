import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
// import { closeDrawer } from '../../Functions'
export default function Layout() {
  return (
    <div>
     
     <div >
     <NavBar/>
     <Outlet></Outlet>
     </div>
    </div>
  )
}
