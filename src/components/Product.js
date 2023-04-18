import axios from 'axios'; 
import { 
    useReducer, 
    useState, 
    useEffect
 } from "react";

 import '../App.css'

 import {INITIAL_STATE, postReducer} from "./postReducer";

const Product = () => {

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
            console.log(data.data)
        })
    }

    useEffect( () => {
        fetchdata();
    }, [])


    if (!information ) {
        return null
    }

    return(
        <>
            <div className = "row" style={{margin: "5px 5px 5px 10px"}}>
              {
                    information.map((data) => {
                        return(
                            <div class="card" style={{width: "18rem", margin: "5px 5px 5px 5px"}}>
                                <img class="card-img-top img-property" src={data.image} alt="Card image cap" />
                                <div class="card-body">
                                    <strong >{data.title}</strong>
                                    <hr />
                                    {/* <p class="card-text">{data.description}</p> */}

                                    <div className = "row">
                                        <div className = "col-6">
                                            Price: <span className = "text-gray">{data.price}</span>
                                        </div>
                                        <div className = "col-6">
                                            Rate: <span className = "text-gray">{ data.rating.rate }</span>
                                        </div>
                                        <div className = "col-12">
                                             Category: <span className = "text-gray">{data.category}</span>
                                        </div>
                                        
                                    </div>

                                </div>
                                <button style = {{backgroundColor: "#9acc66", color : "white", fontFamily: "Sans-serif", fontWeight: "bold"}}>
                                    Add to Cart
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Product; 