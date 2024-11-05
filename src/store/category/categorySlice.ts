import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
    category: string,
    initialized: boolean
}

const initialState: CategoryState = {
    category: '',
    initialized: false
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        initCategory: (state, action: PayloadAction<CategoryState>) => {
            if(state.initialized){
                return;
            }

            state.category = action.payload.category;
            
            state.initialized = true;
        },
        remove: (state) => {
            state.category = '';
            state.initialized = false;
        },
    }   
});

export const {remove, initCategory} = userSlice.actions;

export default userSlice.reducer; 