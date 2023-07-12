import { globalAdoption } from "./globalReducer";
import axios from "axios";

const {
    setIncrement,
    setDecrement,
    setIncrementByAmount,
    setDecrementByAmount,
    setDataAPI
} = globalAdoption.actions

export const increment = () => async (dispatch) => {
    dispatch(setIncrement())
}

export const decrement = () => async (dispatch) => {
    dispatch(setDecrement())
}

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(setIncrementByAmount(amount))
    }, 1000)
}

export const decrementAsync = (amount) => async(dispatch) => {
    setTimeout(() => {
        dispatch(setDecrementByAmount(amount))
    }, 1000)
}

export const handleGetPublicAPI = () => async(dispatch) => {
    const res = await axios.get(`https://api.genderize.io/?name=luc`)
    dispatch(setDataAPI(res.data))
}