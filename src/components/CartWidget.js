import React, { Component } from 'react';


//context
import CartContext from "../context/CartContext";

//queries

//componentes
import ProductAttributes from "./ProductAttributes";

class CartWidget extends Component {
    static contextType = CartContext;
    render() {
        return (
            <a href="/cart">
                {this.context.cart.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>{item.name}</div>
                            <div>{item.quantity}</div>
                            <ProductAttributes
                                attributes={item.attributes}
                                // handleSelection={this.handleSelection}
                                selectedAttributes={item.selectedAttributes}
                            />
                        </div>
                    );
                })}
            </a>
        );
    }
}

export default CartWidget;