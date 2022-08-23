import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store/store"

type initialState = {
    count:number,
}

const initialState: initialState = {
    count:10,
}
export const CountSlice = createSlice({
    name:"count",
    initialState,
    reducers:{
        increase: (state,action: PayloadAction<number>) => {
            state.count += action.payload
        },
        decrease : (state,action: PayloadAction<number>) => {
            state.count -= action.payload
        },
        reset: (state) => {
            state.count = 0
        } 
    }
})

export default CountSlice.reducer;
export const {increase,decrease,reset} = CountSlice.actions
export const selectCount = (state:RootState) => state.counter.count