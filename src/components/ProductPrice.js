import React, { Component } from "react";

class ProductPrice extends Component {

    render() {
        return (
            <div>
                <div className="product-detail-specs__price">Price</div>
                <div className="product-detail-specs__amount">{this.props.symbol}{this.props.amount}</div>
            </div>
        );
    }
}

export default ProductPrice;
