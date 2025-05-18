import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const addProductYoCart=createAsyncThunk(
    "addProductToCart",async({id , token},thunkAPI)=>{
        try {
            
            const request= await axios.post(
                "https://ecommerce.routemisr.com/api/v1/cart",
                {productId:id},
              {
                headers:{
                    token: token,
                   "Content-Type": "application/json"
               }
              }
            )
           
            return request.data
            
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
)
export const getUserCart=createAsyncThunk(
    "getUserCart",async(token,thunkAPI)=>{
        try {
            
            const request= await axios.get(
                "https://ecommerce.routemisr.com/api/v1/cart",
                
              {
                headers:{
                    token: token,
                   "Content-Type": "application/json"
               }
              }
            )
            
            return request.data
            
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
)

export const updateCartQuantity = createAsyncThunk(
    "updateCartQuantity",async({id,token,count},thunkAPI)=>{
        try {
            const options={
                url:`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
                method:"PUT",
                headers:{
                    token:token
                },
                data:{
                    count:count
                }
            }

           const request= await axios.request(options)
            
            return request.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
)

export const  deleteSpecificProduct= createAsyncThunk(
    "deleteSpecificProduct/delete",async({id,token},thunkApi)=>{
        try {
           const options= {
            url:`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
            method:"DELETE",
            headers:{
                token:token
            }
           } 
           const request= await axios.request(options)

        return request.data
        
        } catch (error) {
           return thunkApi.rejectWithValue(error.response?.data || error.message);
        }

    }
)
export const  deleteAllProductCart= createAsyncThunk(
    "deleteAllCartProduct/delete",async({token},thunkApi)=>{
        try {
           const options= {
            url:`https://ecommerce.routemisr.com/api/v1/cart`,
            method:"DELETE",
            headers:{
                token:token
            }
           } 
           const request= await axios.request(options)
        
     
     
        return request.data
        
        } catch (error) {
           return thunkApi.rejectWithValue(error.response?.data || error.message);
        }

    }
)

export const cartSlice=createSlice(
    {
        name:"Cart",
        initialState:{
            cartItems:[],
            userCart:[],
            newQuantity:[],
            status:"idle",
            error:null
        },
        extraReducers:builder=>
            builder.addCase(addProductYoCart.pending,(state)=>{
                state.status="pending"
            }).addCase(addProductYoCart.fulfilled,(state,action)=>{
                state.cartItems=action.payload
                state.status="done"
            }).addCase(addProductYoCart.rejected,(state)=>{
                state.error="new error"
            }).addCase(getUserCart.pending,(state)=>{
                state.status="pending"
            }).addCase(getUserCart.fulfilled,(state,action)=>{
                state.userCart=action.payload
                state.status="done"
            }).addCase(getUserCart.rejected,(state)=>{
                state.error="new error"
            }).addCase(updateCartQuantity.pending,(state)=>{
                state.status="pending"
            }).addCase(updateCartQuantity.fulfilled,(state,action)=>{
                state.newQuantity=action.payload
                state.status="done"
            }).addCase(updateCartQuantity.rejected,(state)=>{
                state.error="new error"
            }).addCase(deleteSpecificProduct.pending,(state)=>{
                state.status="pending"
            }).addCase(deleteSpecificProduct.fulfilled,(state)=>{
                
                state.status="done"
            }).addCase(deleteSpecificProduct.rejected,(state)=>{
                state.error="new error"
            }).addCase(deleteAllProductCart.pending,(state)=>{
                state.status="pending"
            }).addCase(deleteAllProductCart.fulfilled,(state,action)=>{
                state.userCart=action.payload
                state.status="done"
            }).addCase(deleteAllProductCart.rejected,(state)=>{
                state.error="new error"
            })
    
    }
)

export default cartSlice.reducer