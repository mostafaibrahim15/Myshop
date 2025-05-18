import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBrands= createAsyncThunk(
    "brands/fetchAllBrands",async(_,thunkAPI)=>{
        try {
            const response= await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
           console.log(response,"my datad");
           
            return response.data.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);

            
        }
    }
)

export const BrandsSlice= createSlice({
    name:"Brands",
    initialState:{
        Brands:[],
        status:"idle",
        error:null
    },
    extraReducers:builder =>
        builder.addCase(getAllBrands.pending,(state)=>{
            state.status="pending"
        }).addCase(getAllBrands.fulfilled,(state,action)=>{
            state.Brands=action.payload
            state.status="done"
        }).addCase(getAllBrands.rejected,(state,action)=>{
            state.error=action.payload
        })
})

export default BrandsSlice.reducer