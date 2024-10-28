import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value:number,
    initialized:boolean
}

const initialState: CounterState = {
    value:0,
    initialized:false
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        initCount: (state, action: PayloadAction<number>) => {
            if(state.initialized){
                return;
            }
            state.value = action.payload<0?0:action.payload;
            
            state.initialized = true;
        },
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }   
});

export const {increment, decrement, initCount} = counterSlice.actions;

export default counterSlice.reducer; 