import React, { Component } from 'react';


//components 

//context
import CartContext from "../context/CartContext";


class Cart extends Component {
    static contextType = CartContext;

    render() {
        // console.log(this.context);
        return (
            <div>Cart</div> 
        );
    }
}

export default Cart;