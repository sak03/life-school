import { USER_LOGIN_MODE } from './constants';

export const userInfo = (data = "123", action) => {
    // console.log("reducer called", action);
    // if (action.type === USER_LOGIN_MODE) {
    //     console.log("reducer value", action);
    //     return action.data
    // } else {
    //     return "reducer value not matched"
    // }
    switch (action.type) {
        case USER_LOGIN_MODE:

            console.log("reducer called", action);

            return action.data;
        default:
            return "not result found"
    }
}