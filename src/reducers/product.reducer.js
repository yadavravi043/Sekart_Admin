import { productConstants } from "../constant/constant";

const initialState = {
    products: []
};

export const productReducer= (state = initialState, action) => {
    switch(action.type){
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                products: action.payload.products
            }
            break;
    }

    return state;
}