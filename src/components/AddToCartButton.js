import React, { Component } from 'react';


//components 

//context
import CartContext from "../context/CartContext";

//queries

class addToCartButton extends Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.context.updateProductQuantity(this.props.currentProduct, e.target.value);
    }

    handleClick(e) {
        this.context.updateProductQuantity(this.context.checkIsInCart(this.props.currentProduct)[1], e.target.value);
    }

    render() {
        //console.log(this.props.currentProduct);
        console.log(this.context.checkIsInCart(this.props.currentProduct));
        return (
            <div >
                {this.context.checkIsInCart(this.props.currentProduct)[0] ?
                    <div className="add-and-subtract-container">
                        <button className="add-and-subtract-button" onClick={this.handleClick}>+</button>
                        <div className="add-and-subtract-amount">{this.context.checkIsInCart(this.props.currentProduct)[1].quantity}</div>
                        <button className="add-and-subtract-button" value="subtract" onClick={this.handleClick}>-</button>
                    </div>
                    :
                    <button onClick={() => this.context.addToCart(this.props.currentProduct)}>Add to cart</button>}
            </div>
        );
    }
}

export default addToCartButton;
