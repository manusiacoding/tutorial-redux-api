import { createSlice } from "@reduxjs/toolkit";

export const globalAdoption = createSlice({
    name: "global",
    initialState: {
        counter: 0,
        dataAPI: []
    },
    reducers: {
        setIncrement: (state) => {
            state.counter += 1
        },
        setDecrement: (state) => {
            if(state.counter === 0) alert('GABISA DIKURANGIN LAGI WOI')
            else state.counter -= 1
        },
        setIncrementByAmount: (state, action) => {
            state.counter += action.payload
        },
        setDecrementByAmount: (state, action) => {
            if(state.counter === 0) alert('ASYNC GABISA DIKURANGIN LAGI WOI')
            else state.counter -= action.payload
        },
        setDataAPI: (state, action) => {
            state.dataAPI.push(action.payload)
        }
    }
})

export default globalAdoption.reducer