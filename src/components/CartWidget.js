import React, { Component } from "react";

//components 
import CartWidgetHover from "./CartWidgetHover"

//context
import CartContext from "../context/CartContext";

class CartWidget extends Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    }

    handleOnMouseEnter() {
        if (this.context.cart.length > 0) {
            this.setState({
                hover: true
            });
        }
    }

    handleOnMouseLeave() {
        this.setState({
            hover: false
        });
    }

    render() {
        return (
            <div className="cart-widget" onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
                <a href="/cart">
                <img src="/media/cart-icon.svg" alt="Cart icon"/>
                    {this.context.getCartTotalItems() && <span className="cart-widget-number">{this.context.getCartTotalItems()}</span>}
                </a>
                {this.state.hover && this.context.cart.length !== 0 && <CartWidgetHover />}
            </div>
        );
    }
}

export default CartWidget;