import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    token:localStorage.getItem("myToken")||null
}
export const tokenSlice= createSlice(
    {
        name:"auth",
        initialState,
        reducers:{
            login:(state,action)=>{
                state.token=action.payload
                localStorage.setItem("myToken",action.payload)
            },
            logout:(state)=>{
                state.token=null
                localStorage.removeItem("myToken")
               
                
            }
        }
    }
)

export const {login,logout}=tokenSlice.actions;
export default tokenSlice.reducer