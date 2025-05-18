import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSubCategory= createAsyncThunk(
    "subCategory/fetchSubcategory",async (_,thunkApi)=>{
        try {
            const Response= await axios.get("https://ecommerce.routemisr.com/api/v1/subcategories")
            return Response.data.data
        } catch (error) {
          console.log(error,thunkApi);
            
        }
    }


)









export const SubCategorySlice= createSlice({
    name:"SubCategory",
    initialState:{
        subCategory:[],
        status:"idle",
        error:null
    },
    extraReducers:builder =>
        builder.addCase(getSubCategory.pending,(state)=>{
            state.status="pending"
            
        }).addCase(getSubCategory.fulfilled,(state,action)=>{
            state.status="done"
            state.subCategory=action.payload
        }).addCase(getSubCategory.rejected,(state,action)=>{
            state.error=action.payload
        })
})

export default SubCategorySlice.reducer