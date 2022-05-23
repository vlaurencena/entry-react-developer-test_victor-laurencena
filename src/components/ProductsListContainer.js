import React, { Component } from "react";
import { graphql } from "react-apollo";

//components 
import ProductsListItem from "./ProductsListItem";

//context
import CartContext from "../context/CartContext";

//queries
import { getProductsByCategoryQuery } from "../queries/queries";

class ProductsListContainer extends Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.state = {
            categoryName: "",
        }
    }

    getProductsByCategory() {
        let data = this.props.data;
        console.log(data);
        if (data.loading) {
            return (<div>Loading products...</div>)
        } else {
            return data.category.products.map(product => {
                return (
                    <ProductsListItem
                        key={product.id}
                        id={product.id}
                        category={product.category}
                        image={product.gallery[0]}
                        name={product.name}
                        brand={product.brand}
                        prices={product.prices}
                        price={product.prices.find(price => price.currency.label === this.context.currentCurrencyLabel)}
                        inStock={product.inStock}
                        attributes={product.attributes}
                        gallery={product.gallery}
                    />
                );
            })
        }

    }

    render() {
        return (
            <div className="products-container">
                {this.getProductsByCategory()}
            </div>
        );
    }
}

export default graphql(getProductsByCategoryQuery, {
    options: (props) => {
        return {
            variables: {
                title: props.category
            }
        }
    }
})(ProductsListContainer);
