import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    roles: string[];
}

const initialState: UserState = {
    roles: []
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        initUser: (state, action: PayloadAction<UserState>) => {
            state.roles = action.payload.roles;
        },
        remove: (state) => {
            state.roles = [];
        },
    }   
});

export const {remove, initUser} = userSlice.actions;

export default userSlice.reducer; 