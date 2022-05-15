import React, { Component } from "react";

//context
import CartContext from "../context/CartContext";

class addToCartButton extends Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        this.context.updateProductQuantity(this.context.checkIsInCart(this.props.currentProduct)[1], e.target.value);
    }

    render() {
        return (
            <div>
                {this.context.checkIsInCart(this.props.currentProduct)[0] ?
                    <div className="add-and-subtract-container">
                        <button className="add-and-subtract-button" value="add" onClick={this.handleClick}><img src="/media/add-icon.svg" alt="Add icon"/></button>
                        <div className="add-and-subtract-amount">{this.context.checkIsInCart(this.props.currentProduct)[1].quantity}</div>
                        <button className="add-and-subtract-button" value="subtract" onClick={this.handleClick}><img src="/media/remove-icon.svg" alt="Remove icon"/></button>
                    </div>
                    :
                    <button className="add-to-cart-button" onClick={() => this.context.addToCart(this.props.currentProduct)}>Add to cart</button>}
            </div>
        );
    }
}

export default addToCartButton;
