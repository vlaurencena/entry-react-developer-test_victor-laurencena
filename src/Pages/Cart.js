import React, { Component } from 'react';

//components 
import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";

//context
import CartContext from "../context/CartContext";

class Cart extends Component {
    static contextType = CartContext;
    render() {
        return (
            <div className="cart-page-container max-width-1240">
                <div className="cart-heading">CART</div>
                {this.context.cart.length > 0 ? <div><CartList /><CartSummary /></div> : <div>empty∆</div>}

            </div>
        );
    }
}

export default Cart;