import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategories= createAsyncThunk(
    "categories/fetchAllCategories",async(_,thunkAPi)=>{
        try {
            const response= await axios.get("https://ecommerce.routemisr.com/api/v1/categories")

            return response.data.data
            
        } catch (error) {
            console.log(error,thunkAPi);
            
        }
    }
)

export const getSpecificCategory=createAsyncThunk(
    "specificCategory/fetchSpecificCategory",async(id,thunkAPi)=>{
        try {
            const Response= await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
            console.log(Response,"DFCVFC");
            
            return Response.data.data
        } catch (error) {
            console.log(error,thunkAPi);
            
        }
    }
)





export const categorySlice= createSlice({
    name:"Category",
    initialState:{
        status:"idle",
        Categories:[],
        specificCategory:[],
        error:null
    },
    extraReducers:builder =>
        builder.addCase(getAllCategories.pending,(state)=>{
            state.status="pending"
        }).addCase(getAllCategories.fulfilled,(state,action)=>{
            state.Categories=action.payload
            state.status="done"
        }).addCase(getAllCategories.rejected,(state,action)=>{
            state.error=action.payload
        })

        // specificCategory

        .addCase(getSpecificCategory.pending,(state)=>{
            state.status="pending"
        }).addCase(getSpecificCategory.fulfilled,(state,action)=>{
            state.specificCategory=action.payload
            state.status="done"
        }).addCase(getSpecificCategory.rejected,(state,action)=>{
            state.error=action.payload
        })
})


export default categorySlice.reducer