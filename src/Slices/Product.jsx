import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProduct= createAsyncThunk(
    "products/fetchAllProducts",async(_,thunkAPI)=>{
        try {
            const response= await axios.get("https://ecommerce.routemisr.com/api/v1/products")
            return response.data.data
        } catch (error) {
           console.log(error,thunkAPI);
            
        }
    }
)

export const getSpecificProduct=createAsyncThunk(
    "specificProduct/fetchSpecificProduct",async(id,thunkAPI)=>{
        try {
            const Response= await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
            return Response.data.data
        } catch (error) {
           console.log(error,thunkAPI);
            
        }
    }
)
 






export const productSlice= createSlice({
    name:"Products",
    initialState:{
        status:"idle",
        products:[],
        product:[],
        error:null
    },
    extraReducers:builder =>
        builder.addCase(getAllProduct.pending,(state)=>{
            state.status="pending"
        }).addCase(getAllProduct.fulfilled,(state,action)=>{
            state.products=action.payload
            state.status="done"
        }).addCase(getAllProduct.rejected,(state,action)=>{
            state.error=action.payload
        }).addCase(getSpecificProduct.pending,(state)=>{
            state.status="pending"
        }).addCase(getSpecificProduct.fulfilled,(state,action)=>{
            state.product=action.payload
            state.status="done"
        }).addCase(getSpecificProduct.rejected,(state,action)=>{
            state.error=action.payload
        })
})

export default productSlice.reducer