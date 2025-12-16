import { createSlice } from "@reduxjs/toolkit";
//initial state
const initialState={
    user:[],
}

export const userslic e=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=[...state.user,action.payload]
        },
        deleteuser:(state,action)=>{
            state.user=state.user.filter((user,index)=>index!=action.payload)
        }
    }
})

//export reducer and action of the reducer

export const {setUser,deleteuser}=userslice.actions
export default userslice.reducer