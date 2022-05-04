import React, { Component } from 'react';

//components
import ProductAttributes from "./ProductAttributes";
import AddToCartButton from "./AddToCartButton";

//context
import CartContext from "../context/CartContext";

class ProductDetailSpecs extends Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
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



    render() {
        //console.log(this.props.attributes);
        //console.log(this.context.cart);

        return (
            <div>
                <div className="product-detail-specs__brand">{this.props.brand}</div>
                <div className="product-detail-specs__name">{this.props.name}</div>
                <ProductAttributes
                    attributes={this.props.attributes}
                    handleSelection={this.handleSelection}
                    selectedAttributes={this.state}
                />
                <div className="product-detail-specs__price">Price</div>
                <div className="product-detail-specs__amount">{this.props.prices.currency.symbol}{this.props.prices.amount}</div>
                <AddToCartButton
                    currentProduct={{
                        id: this.props.id,
                        brand: this.props.brand,
                        name: this.props.name,
                        prices: this.props.prices,
                        attributes: this.props.attributes,
                        gallery: this.props.gallery,
                        selectedAttributes: this.state
                    }}
                />
                <div>{this.props.description}</div>
            </div>
        );
    }
}

export default ProductDetailSpecs;


// id={data.product.id}
// brand={data.product.brand}
// name={data.product.name}

// description={data.product.description}
// inStock={data.product.inStock}
// prices={data.product.prices}
// attributes={data.product.attributes}