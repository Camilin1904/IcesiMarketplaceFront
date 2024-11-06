import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
    category: string,
}

const initialState: CategoryState = {
    category: '',
}


export const userSlice = createSlice({
    name: 'category',
    initialState,
    reducers:{
        initCategory: (state, action: PayloadAction<string>) => {

            state.category = action.payload;
            
        },
        remove: (state) => {
            state.category = '';
        },
    }   
});

export const {remove, initCategory} = userSlice.actions;

export default userSlice.reducer; 