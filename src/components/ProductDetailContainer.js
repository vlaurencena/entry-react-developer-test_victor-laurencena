import React, { Component } from "react";
import { graphql } from "react-apollo";

//components 
import ProductDetailGallery from "./ProductDetailGallery";

//context
import CartContext from "../context/CartContext";

//queries
import { getProductByIdQuery } from "../queries/queries";
import ProductDetailSpecs from "./ProductDetailSpecs";

class ProductDetailContainer extends Component {
    static contextType = CartContext;
    renderProductDetail() {
        let data = this.props.data;
        if (data.loading) {
            return (<div>Loading Links...</div>)
        }
        if (data.product === null) {
            return <div>This product doesn't exist</div>
        }
        return (
            <div className="product-detail-container max-width-1240">
                <ProductDetailGallery
                    gallery={data.product.gallery}
                />
                <ProductDetailSpecs
                    id={data.product.id}
                    brand={data.product.brand}
                    name={data.product.name}
                    description={data.product.description}
                    inStock={data.product.inStock}
                    prices={data.product.prices}
                    attributes={data.product.attributes}
                    gallery={data.product.gallery}
                />
            </div>
        )

    }
    render() {
        return (
            <div>
                {this.renderProductDetail()}
            </div>
        );
    }
}

export default graphql(getProductByIdQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.productId
            }
        }
    }
})(ProductDetailContainer);
