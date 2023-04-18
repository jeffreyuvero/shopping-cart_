
import { 
  useReducer
} from "react";

import Product from "./components/Product";
import Cart from "./components/Cart";
import Header from "./components/Header";


import {INITIAL_STATE, postReducer} from "./postReducer";


function App() {
  const [ state  ] = useReducer(postReducer, INITIAL_STATE)
  return (
    <div className="App">
        <Header ordered = { state.cart.length }/>
        <Product />
        <Cart />
    </div>
  );
}

export default App;
