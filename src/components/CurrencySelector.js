import React, { Component } from "react";
import { graphql } from "react-apollo";
//context
import CartContext from "../context/CartContext";
//queries
import { getCurrenciesQuery } from "../queries/queries";

class CurrencySelector extends Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    displayCurrencies() {
        let data = this.props.data;
        let space = " ";
        if (data.loading) {
            return (<div>Loading Links...</div>)
        } else {
            return data.currencies.map(currency => {
                return (
                    <div
                        onClick={this.handleClick}
                        selected={this.context.currentCurrencyLabel === currency.label}
                        className={`currency-item ${this.context.currentCurrencyLabel === currency.label ? "background-gray" : "background-white"}`}
                        key={currency.label}
                        id={currency.label}
                        title={currency.symbol}
                    >
                        {currency.symbol}{space}
                        {currency.label}
                    </div >
                );
            })
        }
    }

    handleClick(e) {
        this.context.updateCurrentCurrency(e.currentTarget.id, e.currentTarget.title);
    }

    render() {
        return (
            <div className="currency-selector">
                <div id="clicked-currency-selector" onClick={this.props.handleClickIn} className="display-flex">
                    <div className="money-icon">{this.context.currentCurrencySymbol}</div>
                    <img className={`currency-selector__expand-more ${this.props.showCurrencyList ? "rotate-180" : ""}`} src="/media/expand-icon.svg" alt="Logo" />
                </div>
                <div className={`z-index-2 currencies-list box-shadow ${this.props.showCurrencyList ? "display-flex" : "display-none"}`}>
                    {this.displayCurrencies()}
                </div>
            </div>
        )
    }
}

export default graphql(getCurrenciesQuery)(CurrencySelector);