import axios from 'axios'; 


import Product from "./components/Product";
import Cart from "./components/Cart";
import Header from "./components/Header";

import { 
  useReducer, 
  useState, 
  useEffect
} from "react";


import {INITIAL_STATE, postReducer} from "./postReducer";




function App() {

  const [information, setInformation] = useState(); 
  const [ state, dispatch ] = useReducer(postReducer, INITIAL_STATE)

  const fetchdata = async () => {
      const response = axios.get('https://fakestoreapi.com/products?limit=10')
      response.then((data) => {
          dispatch({
              type: "GET_PRODUCTS", 
              payload: data.data
          })
          setInformation(data.data)
          // console.log(data.data)
      })
  }

  useEffect( () => {
      fetchdata();
  }, [])

  const onHandleAddToCart = (itemId) => {
      dispatch({
          type: "ADD_CART", 
          payload: itemId
      })

      dispatch({
          type: "GET_CART"
      })
      

      dispatch({
          type: "GET_TOTAL"
      })
      
  }


  const onHandleRemoveCart = (itemId) => {
    dispatch({
        type: "REMOVE_CART", 
        payload: itemId
    })

    dispatch({
        type: "GET_CART"
    })

    dispatch({
        type: "GET_TOTAL"
    })
  
  }


  return (
    <div className="App">
        <Header ordered = { state.cart.length }/>
        <div className = "row">
            <div className = "col-10">
                <Product information = {information} onHandleAddToCart= {onHandleAddToCart}/>
            </div>
            <div className = "col-2">
                <Cart collections = {state.collect_cart.new_product} total = {state.total} onHandleRemoveCart = {onHandleRemoveCart}/>
            </div>
        </div>
    </div>
  );
}

export default App;
