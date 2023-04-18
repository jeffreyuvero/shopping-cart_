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
  }

  console.log(state)

  console.log("state.cart.length" )
  console.log( state.cart )

  return (
    <div className="App">
        <Header ordered = { state.cart.length }/>
        <Product information = {information} onHandleAddToCart= {onHandleAddToCart}/>
        <Cart />
    </div>
  );
}

export default App;
