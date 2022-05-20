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
        this.state = {
            currencyList: true
        };
        this.handleClick = this.handleClick.bind(this)
        this.handleClickIn = this.handleClickIn.bind(this)
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this)
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

    handleClickIn() {
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
            <div className="currency-selector" onClick={this.handleClickIn} onMouseLeave={this.handleOnMouseLeave}>
                <div className="money-icon">{this.context.currentCurrencySymbol}</div>
                <img className={`currency-selector__expand-more ${this.state.hover ? "rotate-180" : ""}`} src="/media/expand-icon.svg" alt="Logo" />
                <div className={`currencies-list box-shadow ${this.state.hover ? "display-flex" : "display-none"}`}>
                    {this.displayCurrencies()}
                </div>
            </div>
        )
    }

}

export default graphql(getCurrenciesQuery)(CurrencySelector);