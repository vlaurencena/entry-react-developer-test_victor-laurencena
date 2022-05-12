import React, { Component } from 'react';

class OutOfStockButton extends Component {
    render() {
        console.log(this.props.currentProduct);
        //console.log(this.context.checkIsInCart(this.props.currentProduct));
        return (
            <button className="add-to-cart-button out-of-stock-button">Out of stock</button>
        );
    }
}

export default OutOfStockButton;
