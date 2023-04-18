export const INITIAL_STATE ={
    product : [],
    cart: [],
    collect_cart: []
}


export const postReducer = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                product: action
            }
        case "ADD_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "GET_CART":
            const new_product = state.product.payload.filter((p) => {
                return state.cart.includes(p.id); 
            })

            return {
                ...state,
                collect_cart: {...state.collect_cart, new_product}
            }
        case "REMOVE_CART":
            const new_cart = state.cart.filter((c) => {
                return c != action.payload; 
            })


            // console.log(state.collect_cart.new_product)
            const new_collect_cart = state.collect_cart.new_product.filter((c) => {
                return c.id != action.payload; 
            })


            return {
                ...state,
                cart: new_cart,
                collect_cart: new_collect_cart
            }
        default:
            return state; 
    }
}