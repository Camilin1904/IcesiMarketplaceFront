import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./user/userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import filterSlice from "./filter/filterSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        filter: filterSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;