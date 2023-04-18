


 import '../App.css'

 import {INITIAL_STATE, postReducer} from "../postReducer";

const Product = (props) => {

    if (!props.information ) {
        return null; 
    }
    
    return(
        <>
            <div className = "row product-margin">
              {
                    props.information.map((data) => {
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
                                <button onClick = {() => props.onHandleAddToCart(data.id)} style = {{backgroundColor: "#9acc66", color : "white", fontFamily: "Sans-serif", fontWeight: "bold"}}>
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