import { authConstant } from "../constant/constant"

export const login=(user)=>{
    console.log(user)
    return (dispatch)=>{
        dispatch({type:authConstant.LOGIN_REQUEST,
        payload:{
            login:true
        }
        })
    }
}