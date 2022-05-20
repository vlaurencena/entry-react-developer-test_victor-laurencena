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
    }

    handleClickIn() {
        if (this.context.cart.length > 0) {
            this.setState({
                show: !this.state.show
            });
        }
        this.context.displayWholePageBackground("gray");
    }

    componentDidUpdate() {
        if (this.context.cart.length === 0 && this.state.show) {
            this.setState({
                show: false
            });
            this.context.hideWholePageBackground();
        }
        if (!this.context.wholePageBackground && this.state.show) {
            this.setState({
                show: false
            });
        }
        if(!this.state.show && this.context.wholePageBackground) {
            this.context.hideWholePageBackground();
        }
    }

    render() {
        return (
            <div className="cart-widget">
                <img src="/media/cart-icon.svg" alt="Cart icon" onClick={this.handleClickIn} />
                {this.context.getCartTotalItems() && <span className="cart-widget-number">{this.context.getCartTotalItems()}</span>}
                {this.state.show && this.context.cart.length !== 0 && <CartWidgetHover />}
            </div>
        );
    }
}

export default CartWidget;