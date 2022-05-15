import React, { Component } from "react";

//components
import ProductBrandAndName from "./ProductBrandAndName";
import ProductAttributes from "./ProductAttributes";
import AddToCartButton from "./AddToCartButton";
import ProductPrice from "./ProductPrice";
import Button from "./Button";

//context
import CartContext from "../context/CartContext";


class ProductDetailSpecs extends Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.createMarkup = this.createMarkup.bind(this);
    }

    handleSelection(e) {
        const attributeName = e.target.parentNode.id;
        const attributeValue = e.target.id;
        this.setState({
            [attributeName]: attributeValue
        });
    }

    handleAddToCart() {
        const product = {
            id: this.props.id,
            brand: this.props.brand,
            name: this.props.name,
            prices: this.props.prices,
            attributes: this.props.attributes,
            gallery: this.props.gallery,
            selectedAttributes: this.state
        };
        this.context.addToCart(product);
    }

    componentDidMount() {
        for (let i = 0; i < this.props.attributes.length; i++) {
            this.setState({
                [this.props.attributes[i].name]: this.props.attributes[i].items[0].id
            })
        }
    }

    createMarkup() {
        return { __html: this.props.description };
    }

    render() {
        let price = this.props.prices.find(price => price.currency.label === this.context.currentCurrencyLabel);
        return (
            <div>
                <ProductBrandAndName
                    brand={this.props.brand}
                    name={this.props.name}
                />
                <ProductAttributes
                    attributes={this.props.attributes}
                    handleSelection={this.handleSelection}
                    selectedAttributes={this.state}
                />
                <ProductPrice
                    symbol={price.currency.symbol}
                    amount={price.amount.toFixed(2)}
                />
                {this.props.inStock ? <AddToCartButton
                    currentProduct={{
                        id: this.props.id,
                        brand: this.props.brand,
                        name: this.props.name,
                        prices: this.props.prices,
                        attributes: this.props.attributes,
                        gallery: this.props.gallery,
                        selectedAttributes: this.state,
                        inStock: this.props.inStock
                    }}
                /> :
                    <Button
                        text="out of stock"
                        color="black"
                    />
                }
                <div className="product-description" dangerouslySetInnerHTML={this.createMarkup()} />
            </div>
        );
    }
}

export default ProductDetailSpecs;