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
        // this.handleClick = this.handleClick.bind(this);
        this.handleClickIn = this.handleClickIn.bind(this);
    }


    handleClickIn(e) {
        if (e.target.id === "clicked-cart-icon" && this.context.cart.length > 0) {
            console.log("tere");
            this.setState({
                showCurrencyList: false,
                showCartWidget: !this.state.showCartWidget
            });
            !this.context.wholePageBackground && this.context.displayWholePageBackground("gray");
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
    }

    displayCategoriesLinks() {
        let data = this.props.data;
        if (data.loading) {
            return (<div>Loading Links...</div>)
        } else {
            return data.categories.map(category => {
                return (
                    <NavBarLink
                        key={category.name}
                        to={category.name}
                        text={category.name.toUpperCase()}
                    />
                );
            })
        }
    }

    render() {
        return (
            <div className="nav-bar max-width-1240">
                <div className="nav-bar__links">
                    {this.displayCategoriesLinks()}
                </div>
                <img src="/media/logo.svg" alt="Logo" />
                <div className="nav-bar__currency-and-widget">
                    <CurrencySelector

                    />
                    <CartWidget
                        handleClickIn={this.handleClickIn}
                        showCartWidget={this.state.showCartWidget}
                    />
                </div>
            </div>
        );
    }
}

export default graphql(getCategoriesQuery)(NavBar);