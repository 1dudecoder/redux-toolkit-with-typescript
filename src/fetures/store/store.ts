import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from "../slice/ApiSlice";
import CountSlice from "../slice/CountSlice";

export const store = configureStore({
    reducer:{
        counter:CountSlice,
        api: ApiSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

