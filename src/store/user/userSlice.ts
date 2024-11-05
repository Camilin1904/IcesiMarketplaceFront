import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    user_id: string,
    email: string,
    token: string,
    initialized: boolean
}

const initialState: UserState = {
    user_id: '',
    email: '',
    token: '',
    initialized: false
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        initUser: (state, action: PayloadAction<UserState>) => {
            if(state.initialized){
                return;
            }

            state.user_id = action.payload.user_id;
            state.email = action.payload.email;
            state.token = action.payload.token;
            
            state.initialized = true;
        },
        remove: (state) => {
            state.user_id = '';
            state.email = '';
            state.token = '';
            state.initialized = false;
        },
    }   
});

export const {remove, initUser} = userSlice.actions;

export default userSlice.reducer; 