import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomeLoad from "./Pages/HomeLoad/HomeLoad"
import Layout from "./Components/Layout/Layout"
import Home from "./Pages/Home/Home"
import Products from "./Pages/Products/Products"
import Categorey from "./Pages/Categories/Categorey"
import Login from "./Pages/Login/Login"
import Regiester from "./Pages/Regiester/Regiester"
import Item from "./Pages/Item/Item"
import Cart from "./Pages/Cart/Cart"
import Guest from "./Components/GuestRoute/Guest"
import UserRoute from "./Components/UserRoute/UserRoute"
import OrderForm from "./Pages/Order/OrderForm"
import Ordars from "./Pages/Order/Ordars"






function App() {
const router= createBrowserRouter([

  {path:"/" ,

     element:
     <UserRoute>

       <Layout/>
     </UserRoute>
       
     ,
     children:[
     {index:true,element:<Home/>},
      {path:"/product",element:<Products/>},
    {path:"/orders/:id",element:<Ordars/>},
    {path:"/productItem/:id",element:<Item/>},
    {path:"/Cart",element:<Cart/>},
    {path:"/orderForm",element:<OrderForm/>},
     ]
    },

    {
      path:"/",
     
      element:
      <Guest>

        <Layout/>
      </Guest>
     
      ,
      
      children:[
        {path:"/login",element:<Login/>},
      {path:"/Register",element:<Regiester/>}, 
      ]
    }
    

    
   
])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
