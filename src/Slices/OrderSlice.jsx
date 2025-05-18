import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export  const CreateCashOrder= createAsyncThunk(
    "createCashOrder",async({id,token,values},thunkAPI)=>{
        try {
            const options= {
                url:`https://ecommerce.routemisr.com/api/v1/orders/${id}`,
                method:"POST",
                headers:{
                    token:token,
                    
                },
                data:{
                    values
                }

            }
            const response = await axios.request(options)
                
                return response.data
                
        } catch (error) {
              return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
)
export const getAllOrders= createAsyncThunk(
    "getAllOrders",async(_,thunkAPI)=>{
        try {

            const options= {
                url:"https://ecommerce.routemisr.com/api/v1/orders/",
                method:"GET"
            }
            const response= await axios.request(options)
            return response.data
            
        } catch (error) {
           return thunkAPI.rejectWithValue(error.response?.data || error.message); 
        }
    }
)

export const getUserOrders= createAsyncThunk(
    "getUserOrders/fetch", async({id},thunkAPI)=>{
       try {
         const options={
            url:`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
            method:"GET"
        }
        const response= await axios.request(options)
        return response.data
        
       } catch (error) {
         return thunkAPI.rejectWithValue(error.response?.data || error.message); 
       }
    }
)


export const orderSlice= createSlice({
      name:"order",
    initialState:{
        status:"idle",
        shippingAddresses:[],
        allOrders:[],
        userOrders:[],
        error:null
    },
    extraReducers:builder=>
        builder.addCase(CreateCashOrder.pending,(state)=>{
            state.status="pending"
        }).addCase(CreateCashOrder.fulfilled,(state,action)=>{
            state.shippingAddresses=action.payload
        }).addCase(CreateCashOrder.rejected,(state)=>{
            state.error="error"
        }).addCase(getAllOrders.pending,(state)=>{
            state.status="pending"
        }).addCase(getAllOrders.fulfilled,(state,action)=>{
            state.allOrders=action.payload
        }).addCase(getAllOrders.rejected,(state)=>{
            state.error="error"
        }).addCase(getUserOrders.pending,(state)=>{
            state.status="pending"
        }).addCase(getUserOrders.fulfilled,(state,action)=>{
            state.userOrders=action.payload
        }).addCase(getUserOrders.rejected,(state)=>{
            state.error="error"
        })
})

export default orderSlice.reducer