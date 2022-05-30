import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//context
import CartContext from "../context/CartContext";
//componentes
import CartList from "./CartList";
import Button from "./Button";

class CartWidgetHover extends Component {
    static contextType = CartContext;
    render() {
        return (
            <div className="cart-widget-hover box-shadow z-index-2">
                <div className="cart-widget-hover__my-bag"><span>My bag, </span>{this.context.getCartTotalItems()} items</div>
                <div className="cart-widget-hover__list">
                    <CartList
                        onWidget={true}
                    />
                </div>
                <div className="cart-widget-hover__total">
                    <div>Total</div>
                    <div>{this.context.currentCurrencySymbol}{this.context.calculateTaxes().totalIncludingTaxes}</div>
                </div>
                <div className="cart-widget-hover__buttons">
                    <NavLink to={`/cart`} className="button-styled-link button button--white button-on-widget">
                        VIEW BAG
                    </NavLink>
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