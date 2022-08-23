import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataArr } from "../../models";
import { RootState } from "../store/store";

type apitype = {
  loading: boolean;
  data?: DataArr[];
  error?: string;
};

const initialState: apitype = {
  loading: false,
  data: [],
  error: "",
};


export const getData = createAsyncThunk("api/getData",
    async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(res => res)
            .catch(e => e.message)

            if(typeof(response) === "string"){
                console.log(response,"this is checking data")
                return new Error(response)
            }else{
                return response
            }
    }
)

export const ApiSlice = createSlice({
    name:"api",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(getData.fulfilled, (state,action: PayloadAction<DataArr[]>) => {
            state.loading = false
            state.data = action.payload
        }),
        builder.addCase(getData.rejected, (state) => {
            state.loading = false
            state.error = "oops fetch request get failed"
        })
    }
}) 


export default ApiSlice.reducer;
export const apiStore = (state:RootState) => state.api 
