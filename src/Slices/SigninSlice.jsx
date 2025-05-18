import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const postLoginData= createAsyncThunk(
    "postSigninData",async(data,thunkAPI)=>{
        try {
            const option={
                url:"https://ecommerce.routemisr.com/api/v1/auth/signin",
                method:"POST",
                data:data
            }
            const request= await axios.request(option)
            console.log(request);
            return request.data
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
)

export const signinSlice= createSlice({
    name:"signin",
    initialState:{
        signin:[],
        status:"idle",
        error:null
    },
    extraReducers:builder =>
        builder.addCase(postLoginData.pending,(state)=>{
            state.status="pending"
        }).addCase(postLoginData.fulfilled,(state,action)=>{
            state.signin=action.payload
            state.status="done"
        }).addCase(postLoginData.rejected,(state,action)=>{
            state.error=action.payload
        })
})

export default signinSlice.reducer