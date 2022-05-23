import React, { Component } from "react";
//context
import CartContext from "../context/CartContext";
//components
import OrderButton from "./OrderButton";

class CartSummary extends Component {
    static contextType = CartContext;
    render() {
        return (
            <div className="cart-summary">
                <div className="cart-summary__info">
                    <div>Tax 21%: </div>
                    <div>{this.context.currentCurrencySymbol}{this.context.calculateTaxes().taxesAmount}</div>
                    <div>Quantity: </div>
                    <div>{this.context.getCartTotalItems()}</div>
                    <div>Total: </div>
                    <div>{this.context.currentCurrencySymbol}{this.context.calculateTaxes().totalIncludingTaxes}</div>
                </div>
                <OrderButton />
            </div>
        );
    }
}

export default CartSummary;