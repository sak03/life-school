export const loginMode = (value)=>{
    console.log("action caled", value)
    return {
        type:"USER_LOGIN_MODE",
        value: value
    }
}