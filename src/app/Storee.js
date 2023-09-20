import { configureStore} from "@reduxjs/toolkit";
import { counterSlice } from "../features/count/counterslice";

 const store = configureStore({
    reducer:{
        count : counterSlice
     
    }
})

export default store;