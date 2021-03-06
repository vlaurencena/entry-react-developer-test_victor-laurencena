import React, { Component } from "react";
import { graphql } from "react-apollo";
//components
import NavBarLink from "./NavBarLink";
import CurrencySelector from "./CurrencySelector";
import CartWidget from "./CartWidget";
import WholePageBackground from "./WholePageBackground";
//queries
import { getCategoriesQuery } from "../queries/queries";
//context
import CartContext from "../context/CartContext";

class NavBar extends Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.state = {
            showCurrencyList: false,
            showCartWidget: false
        };
        this.handleClickIn = this.handleClickIn.bind(this);
        this.handleClickOnCurrencyItem = this.handleClickOnCurrencyItem.bind(this);
    }

    handleClickOnCurrencyItem() {
        setTimeout(() => this.setState({
            showCurrencyList: false,
        }), 100)
    }
    handleClickIn(e) {
        if (e.target.id === "clicked-cart-icon" && this.context.cart.length > 0) {
            this.setState({
                showCurrencyList: false,
                showCartWidget: !this.state.showCartWidget
            });
            !this.context.wholePageBackground && this.context.displayWholePageBackground("gray");
            this.context.wholePageBackground && this.context.hideWholePageBackground();
        } else if (e.target.parentNode.id === "clicked-currency-selector") {
            this.setState({
                showCurrencyList: !this.state.showCurrencyList,
                showCartWidget: false
            });
            !this.context.wholePageBackground && this.context.displayWholePageBackground("transparent");
            this.context.wholePageBackground && this.context.hideWholePageBackground();
        }
    }

    componentDidUpdate() {
        if (!this.context.wholePageBackground) {
            if (this.state.showCurrencyList || this.state.showCartWidget)
                this.setState({
                    showCurrencyList: false,
                    showCartWidget: false
                });
        }
        if (this.context.cart.length === 0 && this.context.wholePageBackground) {
            this.state.showCurrencyList === false && this.context.hideWholePageBackground();
        }
    }

    displayCategoriesLinks() {
        let data = this.props.data;
        if (data.loading) {
            return (<div>Loading Links...</div>)
        }
        return data.categories.map(category => <NavBarLink
            key={category.name}
            to={category.name}
            text={category.name.toUpperCase()}
        />
        );
    }

    render() {
        return (
            <div className="position-relative nav-bar-whole-page-background">
                <WholePageBackground />
                <div className="nav-bar max-width-1240">
                    <div className="nav-bar__links">
                        {this.displayCategoriesLinks()}
                    </div>
                    <img src="/media/logo.svg" alt="Logo" />
                    <div className="nav-bar__currency-and-widget">
                        <CurrencySelector
                            handleClickIn={this.handleClickIn}
                            showCurrencyList={this.state.showCurrencyList}
                            handleClickOnCurrencyItem={this.handleClickOnCurrencyItem}
                        />
                        <CartWidget
                            handleClickIn={this.handleClickIn}
                            showCartWidget={this.state.showCartWidget}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default graphql(getCategoriesQuery)(NavBar);