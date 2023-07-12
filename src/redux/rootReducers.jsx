import { combineReducers } from "redux";
import globalRecucer from './global/globalReducer'

export default combineReducers({
    global: globalRecucer,
})