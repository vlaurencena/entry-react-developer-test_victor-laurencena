import React, { Component } from "react";

class ProductBrandAndName extends Component {

    render() {
        return (
            <div className="product-brand-and-name">
                <div className="product-detail-specs__brand">{this.props.brand}</div>
                <div className="product-detail-specs__name">{this.props.name}</div>
            </div>
        );
    }
}

export default ProductBrandAndName;
