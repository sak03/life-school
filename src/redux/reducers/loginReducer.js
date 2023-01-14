import { ActionTypes } from "../constants/action_types";
const initialUserValue = {
    value :{
        userMode : 0
    }
}

export const userLoginReducer = (state = initialUserValue, { type, ...rest }) => {
    switch (type) {
        case ActionTypes.LOGIN_INFO:
            return { ...state, ...rest }
        default:
            return state;
    }
}