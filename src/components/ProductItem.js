import React, { Component } from 'react';

//components 

class ProductItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //console.log(this.props.inStock);
        return (
            <div className="box-shadow product-item-container">
                <div className="product-item-container__image" style={{ backgroundImage: 'url(' + this.props.image + ')' }}>
                    <span className="product-item-container__out-of-stock">{!this.props.inStock && "OUT OF STOCK"}</span>
                </div>
                <div className="product-item-container__name">{this.props.name}</div>
                <div className="product-item-container__price">
                    <span>{this.props.prices.currency.symbol}</span>
                    <span>{this.props.prices.amount}</span>
                </div>
            </div >
        );
    }
}

export default ProductItem;

// id={product.id}
// image={product.gallery[0]}
// name={product.name}
// prices={product.prices}
// inStock={product.inStock}