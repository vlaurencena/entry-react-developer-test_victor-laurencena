import React, { Component } from 'react';

//context
import CartContext from "../context/CartContext";

//components
import CartListItem from "./CartListItem";

class CartList extends Component {
    static contextType = CartContext;

render() {
    //console.log(this.context.cart.length);
    return (
        <div>
            {this.context.cart.length > 0 && this.context.cart.map((item, index) => {
                return (
                    <CartListItem
                        key={index}
                        onWidget={false}
                        item={item}
                    />
                )
            })}
        </div>
    );
}
}

export default CartList;