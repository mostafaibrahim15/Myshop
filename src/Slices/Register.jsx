import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const postRegisterData= createAsyncThunk(
    "postRegisterData",async(data,thunkAPI)=>{
        try {
            const options= {
                url:"https://ecommerce.routemisr.com/api/v1/auth/signup",
                method:"POST",
                data:data
            }

            const request= await axios.request(options)
            console.log(request);
            return request.data
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
            
        }
    }
)






export const registerSlice= createSlice({
    name:"register",
    initialState:{
        data:{},
        status:"idle",
        error:null
    },
    extraReducers:builder =>
        builder.addCase(postRegisterData.pending,(state)=>{
            state.status="pending"
        }).addCase(postRegisterData.fulfilled,(state,action)=>{
            state.data=action.payload
            state.status="done"
        }).addCase(postRegisterData.rejected,(state,action)=>{
            console.log("there is an error", state,action);
            state.error=action.payload
        })
})

export default registerSlice.reducer