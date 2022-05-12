import React, { Component } from "react";

//context
import CartContext from "../context/CartContext";

class Button extends Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }

    render() {
        return (
            <button
                className={`button button--${this.props.color} ${this.props.onWidget && "button-on-widget"}`}
                onClick={() => this.handleClick}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;