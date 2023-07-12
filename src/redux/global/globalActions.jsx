import { globalAdoption } from "./globalReducer";

const {
    setIncrement,
    setDecrement,
    setIncrementByAmount,
    setDecrementByAmount
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