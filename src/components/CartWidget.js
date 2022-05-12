import React, { Component } from 'react';

//components 
import CartWidgetHover from "./CartWidgetHover"

//context
import CartContext from "../context/CartContext";


class CartWidget extends Component {
    static contextType = CartContext;
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.state = {
            hover: true
        };
        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this)
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this)
    }

    // handleClick(e) {
    //     //console.log(e.currentTarget.id);
    //     //console.log(e.currentTarget.title);
    //     this.context.updateCurrentCurrency(e.currentTarget.id, e.currentTarget.title);
    // }

    handleOnMouseEnter() {
        this.setState({
            hover: true
        });
    }

    handleOnMouseLeave() {
        this.setState({
            hover: true
        });
    }
    render() {
        console.log();
        return (
            <div className="cart-widget" onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
                <a href="/cart">
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                   {this.context.getCartTotalItems() && <span className="cart-widget-number">{this.context.getCartTotalItems()}</span>} 
                </a>
                {this.state.hover && <CartWidgetHover />}
            </div>

            
        );
    }
}

export default CartWidget;

// <div className="currency-selector" onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
// <span className="money-icon">{this.context.currentCurrencySymbol}<span className={`material-symbols-outlined currency-selector__expand-more ${this.state.hover ? "rotate-180" : ""}`}>
//     expand_more
// </span></span>
// <div className={`currencies-list box-shadow ${this.state.hover ? "display-flex" : "display-none"}`}>
//     {this.displayCurrencies()}
// </div>
// </div>