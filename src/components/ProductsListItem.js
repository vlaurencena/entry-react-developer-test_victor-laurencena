import React, { Component } from 'react';
import Link from "react-router-dom/Link";

//components 

class ProductsListItem extends Component {

    render() {
        //console.log(this.props.inStock);
        return (
            <div className="box-shadow product-item-container">
                <Link to={`${this.props.category}/${this.props.id}`}>
                    <div className="product-item-container__image" style={{ backgroundImage: 'url(' + this.props.image + ')' }}>
                        <span className="product-item-container__out-of-stock">{!this.props.inStock && "OUT OF STOCK"}</span>
                    </div>
                    <div className="product-item-container__name">{this.props.name}</div>
                    <div className="product-item-container__price">
                        <span>{this.props.prices.currency.symbol}</span>
                        <span>{this.props.prices.amount}</span>
                    </div>
                </Link>
            </div >
        );
    }
}

export default ProductsListItem;