import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
    filter: string,
}

const initialState: FilterState = {
    filter: '',
}


export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        initFilter: (state, action: PayloadAction<string>) => {

            state.filter = action.payload;
            
        },
        remove: (state) => {
            state.filter = '';
        },
    }   
});

export const {remove, initFilter} = filterSlice.actions;

export default filterSlice.reducer; 