import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/Slice.jsx";


const store = configureStore({
    reducer:{
        info:userReducer,
    }
})
export default store