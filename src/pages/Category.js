import React, { Component } from "react";
import { withRouter } from "react-router";
import ProductsListContainer from "../components/ProductsListContainer";
import WholePageBackground from "../components/WholePageBackground";

class Category extends Component {
    render() {
        return (
            <div className="position-relative">
                <WholePageBackground />
                <div className="position-relative">
                    <WholePageBackground />
                    <div className="category-container">
                        <div className="category-container__title">{this.props.match.params.category}</div>
                        <ProductsListContainer
                            category={this.props.match.params.category}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Category);