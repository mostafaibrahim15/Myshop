import React from 'react'
import Guest from '../GuestRoute/Guest';
import { Navigate } from 'react-router-dom';

export default function UserRoute({ children}) {
    
      const token= localStorage.getItem("myToken")

if(token){
    return children ;
}else

  return <Navigate to={"/login"}/>
}


