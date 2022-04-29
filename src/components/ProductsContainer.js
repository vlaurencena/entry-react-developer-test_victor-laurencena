import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { gql } from "apollo-boost";

//queries
import { getProductsByCategoryQuery } from '../queries/queries';

//components
import ProductItem from "./ProductItem"

class ProductsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryName: "",
        }
    }

    getProductsByCategory() {
        let data = this.props.data;
        // console.log(data);
        if (data.loading) {
            return (<div>Loading products...</div>)
        } else {
            console.log(data.category.products);
            return data.category.products.map(product => {
                return (
                    <ProductItem
                        id={product.id}
                        image={product.gallery[0]}
                        name={product.name}
                        prices={product.prices[0]}
                        inStock={product.inStock}
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
})(ProductsContainer);
