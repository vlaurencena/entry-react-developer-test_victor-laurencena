import React, { Component } from "react";
import Link from "react-router-dom/Link";

class ProductsListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    }

    handleOnMouseEnter() {
        this.setState({
            hover: true
        });
    }

    handleOnMouseLeave() {
        this.setState({
            hover: false
        });
    }

    render() {
        return (
            <div onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}
                className={"product-item-container " + (this.state.hover ? "box-shadow" : "")}>
                <Link to={`${this.props.category}/${this.props.id}`}>
                    <div className="product-item-container__image" style={{ backgroundImage: "url(" + this.props.image + ")" }}>
                        <span className="product-item-container__out-of-stock">{!this.props.inStock && "OUT OF STOCK"}</span>
                    </div>
                    <div className="product-item-container__name">{this.props.brand} {this.props.name}</div>
                    <div className="product-item-container__price">
                        <span>{this.props.price.currency.symbol}</span>
                        <span>{this.props.price.amount}</span>
                    </div>
                </Link>
            </div >
        );
    }
}

export default ProductsListItem;