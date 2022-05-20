import React, { Component } from "react";

//components 
import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";
import WholePageBackground from "../components/WholePageBackground";

//context
import CartContext from "../context/CartContext";

class Cart extends Component {
    static contextType = CartContext;
    render() {
        return (
            <div className="position-relative">
                <WholePageBackground />
                <div className="cart-page-container max-width-1240">
                    <div className="cart-heading">CART</div>
                    {this.context.cart.length > 0 ? <div><CartList /><CartSummary /></div> : <div>Your cart is empty.</div>}
                </div>
            </div>
        );
    }
}

export default Cart;