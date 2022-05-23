import React, { Component } from "react";
//context
import CartContext from "../context/CartContext";
//components
import CartListItem from "./CartListItem";

class CartList extends Component {
    static contextType = CartContext;

    render() {
        return (
            <div>
                {this.context.cart.length > 0 && this.context.cart.map((item, index) => {
                    return (
                        <CartListItem
                            key={index}
                            onWidget={this.props.onWidget}
                            item={item}
                        />
                    )
                })}
            </div>
        );
    }
}

export default CartList;