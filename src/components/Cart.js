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
                            <div className="card-body">
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
                                                <button> 
                                                    <img src={cancel} alt="Card image cap" />
                                                </button>
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