import React, { Component } from 'react';
import CartContext from './CartContext';

export default class CartProvider extends Component {
    state = {
        currency: "$"
    };

    render() {
        return (
            <CartContext.Provider
                value={{
                    currency: this.state.currency
                }}
            >
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

