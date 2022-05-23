import React, { Component } from "react";
//components 
import CartWidgetHover from "./CartWidgetHover"
//context
import CartContext from "../context/CartContext";

class CartWidget extends Component {
    static contextType = CartContext;

    render() {
        return (
            <div className="cart-widget">
                <img id="clicked-cart-icon" src="/media/cart-icon.svg" alt="Cart icon" onClick={this.props.handleClickIn} />
                {this.context.getCartTotalItems() && <span className="cart-widget-number">{this.context.getCartTotalItems()}</span>}
                {this.props.showCartWidget && this.context.cart.length !== 0 && <CartWidgetHover />}
            </div>
        );
    }
}

export default CartWidget;