import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    count:4,
}

export const counterSlice = createSlice({
    name: "My Counter",
    initialState,
    reducers : {
        increment:(state,action) => {
            state.count +=1
        },
        decrement:(state,action) => {
            state.count -=1
        }
    }
});

export const {increment,decrement} = counterSlice.reducer;

export default counterSlice.reducer;
