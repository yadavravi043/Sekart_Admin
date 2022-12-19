import { userContants } from "../constant/constant"

const initState = {
    error: null,
    msg: '',
    loading: false
}

export const userReducer= (state = initState, action) => {
    switch(action.type){
        case userContants.USER_REGISTER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
            case userContants.USER_REGISTER_SUCCESS:
                state = {
                    ...state,
                    loading: false,
                    msg: action.payload.msg
                }
                break;
                case userContants.USER_REGISTER_FAILURE:
                  state = {
                     ...state,
                     loading: false,
                     error: action.payload.error
            }
            break;
    }

    return state;
}