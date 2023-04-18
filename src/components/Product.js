import axios from 'axios'; 
import { 
    useReducer, 
    useState, 
    useEffect
 } from "react";

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
        })
    }

    useEffect( () => {
        fetchdata();
    }, [])


    if (!information ) {
        return null
    }

    return(
        <div>
            Product
            {
                information.map((data) => {
                    return(
                        <div> {data.title} </div>
                    )
                })
            }
        </div>
    )
}

export default Product; 