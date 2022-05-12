import React, { Component } from 'react';

//context
import CartContext from "../context/CartContext";

//components
import OrderButton from "./OrderButton";

class CartSummary extends Component {
    static contextType = CartContext;
    render() {
        return (
            <div className="">
                <div>Tax 21%: {this.context.currentCurrencySymbol}<span>{this.context.calculateTaxes().taxesAmount}</span></div>
                <div>Quantity: <span>{this.context.getCartTotalItems()}</span></div>
                <div>Total: <span>{this.context.currentCurrencySymbol}{this.context.calculateTaxes().totalIncludingTaxes}</span></div>
                <OrderButton />
            </div>
        );
    }
}

export default CartSummary;

// calculateTaxes() {
//     const totalWithoutTaxes = this.getCartTotalAmountWithoutTaxes();
//     const totalIncludingTaxes = this.getCartTotalAmountWithoutTaxes() * this.state.taxes;
//     return [totalWithoutTaxes, totalIncludingTaxes];
// }