import React, { Component } from "react";
//context
import CartContext from "../context/CartContext";
//componentes
import AddToCartButton from "./AddToCartButton";
import CartListItemCarousel from "./CartListItemCarousel";
import ProductAttributes from "./ProductAttributes";
import ProductBrandAndName from "./ProductBrandAndName";
import ProductPrice from "./ProductPrice";

class CartListItem extends Component {
    static contextType = CartContext;
    render() {
        let price = this.props.item.prices.find(price => price.currency.label === this.context.currentCurrencyLabel);
        return (
            <div className="cart-list-item">
                <div className="cart-list-info">
                    <ProductBrandAndName
                        brand={this.props.item.brand}
                        name={this.props.item.name}
                    />
                    <ProductPrice
                        amount={price.amount}
                        onWidget={this.props.onWidget}
                        symbol={price.currency.symbol}
                    />
                    <ProductAttributes
                        attributes={this.props.item.attributes}
                        selectedAttributes={this.props.item.selectedAttributes}
                    />
                </div>
                <div className="cart-list-item__right-side">
                    <AddToCartButton
                        currentProduct={this.props.item}
                        onCart={true}
                    />
                    <CartListItemCarousel
                        gallery={this.props.item.gallery}
                        onWidget={this.props.onWidget}
                    />
                </div>
            </div>
        );
    }
}

export default CartListItem;