import shoppingCart from '../images/shoppingCart.png'
import shoppingCart2 from '../images/shoppingCart2.png'


const Header = () => {
    return(
        <div className = "col-12 ">
                <div className = "row navigator">
                    <div className = "col-1">
                        <img 
                            src={shoppingCart} 
                            className="logo-home" 
                            title="Home" 
                            alt="Home"
                        />
                    </div>
                    <div className = "col-1">
                        <div className = "title">
                                Shopping Cart
                            </div>
                        </div>
                    <div className = "col-1">
                        
                    </div>
                    <div className = "col-1">
                        
                    </div>
                    <div className = "col-1">
                        
                    </div>
                    <div className = "col-1">
                        
                    </div>
                    <div className = "col-1">
                        
                    </div>
                    <div className = "col-1">
                        
                    </div>
                    <div className = "col-1">
                        
                    </div>
                    <div className = "col-1">
                        
                    </div>
                    <div className = "col-1">
                         <img 
                            src={shoppingCart2} 
                            className="logo-home" 
                            title="Home" 
                            alt="Home"
                        />
                        <span class="badge badge-pill badge-danger">2</span>
                    </div>
                </div>
        </div>
    )
}

export default Header; 
