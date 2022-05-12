import React, { Component } from 'react';


//context
import CartContext from "../context/CartContext";

//queries

//componentes
import CartList from "./CartList";

class CartWidgetHover extends Component {
    static contextType = CartContext;
    render() {
        return (
            <div className="cart-widget-hover">
               <CartList />
            </div>
        );
    }
}

export default CartWidgetHover;