import React, { Component } from 'react';
import { withRouter } from "react-router";

//components 
import ProductDetailContainer from "../components/ProductDetailContainer";

class Product extends Component {
    render() {
        return (
            <ProductDetailContainer
                productId={this.props.match.params.productId}
            />
        );
    }
}

export default withRouter(Product);