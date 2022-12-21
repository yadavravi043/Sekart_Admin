import { categoryConstansts } from "../constant/constant";

const initState = {
    categories: [],
    loading: false,
    error: null
};
export const categoryReducer=(state = initState, action) => {
    switch(action.type){
        case categoryConstansts.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        case categoryConstansts.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstansts.ADD_NEW_CATEGORY_SUCCESS:
            const category = action.payload.category;
            // const updatedCategories = buildNewCategories(category.parentId, state.categories, category);
            // console.log('updated categoires', updatedCategories);
            
            state = {
                ...state,
                // categories: updatedCategories,
                loading: false,
            }
            break;
        case categoryConstansts.ADD_NEW_CATEGORY_FAILURE:
            state = {
                ...initState,
                loading: false,
                error: action.payload.error
            }
            break;
    //     case categoryConstansts.UPDATE_CATEGORIES_REQUEST:
    //         state = {
    //             ...state,
    //             loading: true
    //         }
    //         break;
    //     case categoryConstansts.UPDATE_CATEGORIES_SUCCESS:
    //         state = {
    //             ...state,
    //             loading: false
    //         }
    //         break;
    //     case categoryConstansts.UPDATE_CATEGORIES_FAILURE:
    //         state = {
    //             ...state,
    //             error: action.payload.error,
    //             loading: false
    //         }
    //         break;
    //     case categoryConstansts.DELETE_CATEGORIES_REQUEST:
    //         state = {
    //             ...state,
    //             loading: true
    //         }
    //         break;
    //     case categoryConstansts.DELETE_CATEGORIES_SUCCESS:
    //         state = {
    //             ...state,
    //             loading: false
    //         }
    //         break;
    //     case categoryConstansts.DELETE_CATEGORIES_FAILURE:
    //         state = {
    //             ...state,
    //             loading: false,
    //             error: action.payload.error
    //         }
    //         break;
     }

    return state;
}