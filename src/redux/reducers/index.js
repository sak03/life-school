import { combineReducers } from "redux";
import {userLoginReducer} from "./loginReducer"


const reducers = combineReducers({
    loginUser: userLoginReducer,
})

export default reducers
