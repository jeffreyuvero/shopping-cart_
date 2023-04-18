import cancel from '../images/cancel.png'
const cart = (props) => {
    if (!props.collections ) {
        return null; 
    }
    return(
        <div className = "row cart-margin">
            <div class="card col-12" >
                <div class="card-header">
                    Your Cart <strong> (Total Price: 88)  </strong>
                </div>
                {
                    props.collections.map((collect, index) => {
                        return(
                            <div className="card-body" key = {index}>
                                <div className="card">
                                    <div className = "row">
                                        <div className = "col-2">
                                                <img class="card-img-top img-thumbnail" src={collect.image} alt="Card image cap" />
                                            </div>
                                            <div className = "col-8 cart-descriptions">
                                                Title: <span class="card-text text-gray">{collect.title}</span> <br />
                                                Rate: <span className = "text-gray">{collect.rating.rate}</span> <br />
                                                Category: <span className = "text-gray">{collect.category}</span>
                                            </div>
                                            <div className = "col-2">
                                                {/* <button onClick = {props.onHandleRemoveCart(collect.id)}> 
                                                    <img src={cancel} alt="Card image cap" />
                                                </button> */}


                                                <button onClick = {() => props.onHandleRemoveCart(collect.id)} style = {{backgroundColor: "#9acc66", color : "white", fontFamily: "Sans-serif", fontWeight: "bold"}}>x</button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default cart; 