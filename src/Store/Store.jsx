import { configureStore } from "@reduxjs/toolkit";
import BrandsReducer from "../Slices/BrandSlice"
import SubCategoryReducer from "../Slices/SubCategory"
import CategoryReducer from "../Slices/CategorySlice"
import ProductsReducer from "../Slices/Product"
import registerReducer from "../Slices/Register"
import signinReducer from "../Slices/SigninSlice"
import authReducer from "../Slices/TokenSlice"
import CartReducer from "../Slices/CartSlice"
import orderReducer from "../Slices/OrderSlice"
export  const Store= configureStore(
  {
    reducer:{
      Brands:BrandsReducer,
      subCategory:SubCategoryReducer,
      Categories:CategoryReducer,
      products:ProductsReducer,
      Register:registerReducer,
      signin:signinReducer,
      auth:authReducer,
      cartItems:CartReducer,
     shippingAddresses:orderReducer,
    
    }
  }
)


