import { authConstant } from "../constant/constant"
const initialState={
    token:null,
    user:{
        firstName:'',
        lastName:'',
        email:'',
        picture:''
    },
    authenticate:false,
    authenticating:false,
}
export const authReducer= (state=initialState,action)=>{
    console.log(action)
    switch(action.type){
        case authConstant.LOGIN_REQUEST:
            state={
                ...state,
                authenticating:true
            }
            break;
            case authConstant.LOGIN_SUCCESS:
                state={
                    ...state,
                    user:action.payload.user,
                    token:action.payload.token,
                    authenticate:true,
                    authenticating:false,
            }
            break;
            case authConstant.LOGOUT_REQUEST:
            state = {
                ...initialState
            }
            break;
    }
    return state
}