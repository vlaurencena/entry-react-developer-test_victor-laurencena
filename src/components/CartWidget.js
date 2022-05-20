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
            show: false
        };
        this.handleClickIn = this.handleClickIn.bind(this);
        this.handleClickOut = this.handleClickOut.bind(this);
    }

    handleClickIn() {
        if (this.context.cart.length > 0 && this.state.show === false) {
            this.setState({
                show: true
            });
        }
    }

    handleClickOut() {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <div className="cart-widget" onClick={this.handleClickIn} onMouseLeave={this.handleOnMouseLeave}>
                <img src="/media/cart-icon.svg" alt="Cart icon" />
                {this.context.getCartTotalItems() && <span className="cart-widget-number">{this.context.getCartTotalItems()}</span>}
                {this.state.show && this.context.cart.length !== 0 && <CartWidgetHover handleClickOut={this.handleClickOut} />}
            </div>
        );
    }
}

export default CartWidget;