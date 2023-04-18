export const INITIAL_STATE ={
    product : [],
    cart: [],
    collect_cart: [],
    total: 0
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


            const new_collect_cart = state.collect_cart.new_product.filter((c) => {
                return c.id != action.payload; 
            })


            return {
                ...state,
                cart: new_cart,
                collect_cart: new_collect_cart
            }
        case "GET_TOTAL":

            if(state.collect_cart.new_product.length == 0){
                return {
                    ...state,
                    total: 0
                }
            }

            const selected_product = state.collect_cart.new_product; 
            const collection_price = []; 

            selected_product.map((prod, index) => {
                collection_price.push(prod.price)
            })


            let new_total = collection_price.reduce(function(a, b){
                return a + b;
              });
     

            return {
                ...state,
                total: new_total
            }
        default:
            return state; 
    }
}