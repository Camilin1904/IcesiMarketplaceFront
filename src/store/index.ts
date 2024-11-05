import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./user/userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import categorySlice from "./category/categorySlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        category: categorySlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;