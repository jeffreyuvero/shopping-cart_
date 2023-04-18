export const INITIAL_STATE ={
    product : [],
    cart: []
}


export const postReducer = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                product: action
            }
        case "ADD_CART":
            console.log(action.payload)
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state; 
    }
}