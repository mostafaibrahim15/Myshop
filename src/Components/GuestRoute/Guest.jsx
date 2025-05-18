import React from 'react'
import { Navigate } from 'react-router-dom';
import UserRoute from '../UserRoute/UserRoute';

export default function Guest({children}) {

    const token= localStorage.getItem("myToken")

if(!token){
    return children ;
}else

  return <Navigate to={"/"}/>
}
