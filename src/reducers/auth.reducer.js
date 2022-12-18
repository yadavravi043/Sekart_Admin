import { authConstant } from "../constant/constant"
const initialState={
    name:"ravi"
}
export const authReducer= (state=initialState,action)=>{
    console.log(action)
    switch(action.type){
        case authConstant.LOGIN_REQUEST:
            state={
                ...state,...action.payload
            }
            break;
    }
    return state
}