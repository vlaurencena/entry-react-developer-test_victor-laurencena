import React, { Component } from "react";
import Link from "react-router-dom/Link";

//context
import CartContext from "../context/CartContext";

class ProductsListItem extends Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleOnMouseEnter() {
        this.setState({
            hover: true
        });
    }

    handleOnMouseLeave() {
        this.setState({
            hover: false
        });
    }

    handleClick() {
        let selectedAttributes = {};
        for (let i = 0; i < this.props.attributes.length; i++) {
            selectedAttributes[this.props.attributes[i].name] = this.props.attributes[i].items[0].id;
        }
        const product = {
            id: this.props.id,
            brand: this.props.brand,
            name: this.props.name,
            prices: this.props.prices,
            attributes: this.props.attributes,
            gallery: this.props.gallery,
            selectedAttributes: selectedAttributes,
            inStock: this.props.inStock
        };
        if (this.context.checkIsInCart(product)[0]) {
            alert("This product is already in your cart")
        } else {
            this.context.addToCart(product);
        }
    }

    render() {
        return (
            <div onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}
                className={"product-item-container " + (this.state.hover && this.props.inStock ? "box-shadow" : "") + (!this.props.inStock ? "out-of-stock-opacity" : "")}>
                <Link to={`${this.props.category}/${this.props.id}`}>
                    <div className="product-item-container__image" style={{ backgroundImage: "url(" + this.props.image + ")" }}>
                        <span className="product-item-container__out-of-stock">{!this.props.inStock && "OUT OF STOCK"}</span>
                    </div>
                    <div className="product-item-container__name">{this.props.brand} {this.props.name}</div>
                    <div className="product-item-container__price">
                        <span>{this.props.price.currency.symbol}</span>
                        <span>{this.props.price.amount}</span>
                    </div>
                </Link>
                {this.props.inStock && this.state.hover && <button onClick={this.handleClick} className="add-to-cart-icon"><img src="/media/add-to-cart-icon.svg" alt="Add to cart icon" /></button>}
            </div >
        );
    }
}

export default ProductsListItem;