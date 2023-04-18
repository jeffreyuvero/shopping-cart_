export const INITIAL_STATE ={
    product : [],
    cart: [1,2,3]
}


export const postReducer = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                product: action
            }
        default:
            return state; 
    }
}