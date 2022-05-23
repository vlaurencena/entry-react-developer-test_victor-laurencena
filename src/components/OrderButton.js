import React, { Component } from "react";
//context
import CartContext from "../context/CartContext";

class OrderButton extends Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert("Thanks for placing your order. This is just a demo, so when you clic OK cart will be emptied and you will be redirect to the Home page");
        localStorage.clear();
        window.location.replace("/");
    }

    render() {
        return (
            <button className="order-button" onClick={() => this.handleClick()}>ORDER</button>
        );
    }
}

export default OrderButton;
