import React, { Component } from "react";

class CartWidgetHoverButton extends Component {

    render() {
        return (
            <button className="cart-widget-hover-button cart-widget-hover-button__">{this.props.text}</button>
        );
    }
}

export default CartWidgetHoverButton;
