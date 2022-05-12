import React, { Component } from "react";


//context
import CartContext from "../context/CartContext";

//queries

//componentes
import CartList from "./CartList";
import Button from "./Button";

class CartWidgetHover extends Component {
    static contextType = CartContext;
    render() {
        return (
            <div className="cart-widget-hover box-shadow">
                <CartList
                    onWidget={true}
                />
                <div className="cart-widget-hover__total">
                    <div>Total</div>
                    <div>{this.context.currentCurrencySymbol}{this.context.calculateTaxes().totalIncludingTaxes}</div>
                </div>
                <div className="cart-widget-hover__buttons">
                    <Button
                        text="VIEW BAG"
                        color="white"
                        onWidget={true}
                    />
                    <Button
                        text="CHECK OUT"
                        color="green"
                        onWidget={true}
                    />
                </div>
            </div>
        );
    }
}

export default CartWidgetHover;