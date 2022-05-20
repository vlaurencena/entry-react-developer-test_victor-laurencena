import React, { Component } from "react";
import { withRouter } from "react-router";

//components 
import ProductDetailContainer from "../components/ProductDetailContainer";
import WholePageBackground from "../components/WholePageBackground";

class Product extends Component {
    render() {
        return (
            <div className="position-relative">
                <WholePageBackground />
                <ProductDetailContainer
                    productId={this.props.match.params.productId}
                />
            </div>
        );
    }
}

export default withRouter(Product);