import { ActionTypes } from "../constants/action_types";

export const setLoginUserInfo = (value)=>{
    return {
        type: ActionTypes.LOGIN_INFO,
        user:value
    }
}