import React, { Component } from 'react';
import { graphql } from 'react-apollo';

//components 

//context
import CartContext from "../context/CartContext";

//queries
import { getCurrenciesQuery } from '../queries/queries';

class CurrencySelector extends Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
        this.handleClick = this.handleClick.bind(this)
        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this)
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this)
    }

    displayCurrencies() {
        let data = this.props.data;
        //  console.log(data.currencies);
        if (data.loading) {
            return (<div>Loading Links...</div>)
        } else {
            return data.currencies.map(currency => {
                return (
                    <div
                        onClick={this.handleClick}
                        selected={this.context.currentCurrency === currency.label}
                        className={`currency-item ${this.context.currentCurrency.label === currency.label ? "background-gray" : "background-white"}`}
                        key={currency.label}
                        id={currency.label}
                        title={currency.symbol}
                    >
                        {currency.symbol}
                        {currency.label}
                    </div >
                );
            })
        }
    }

    handleClick(e) {
        //console.log(e.currentTarget.id);
        //console.log(e.currentTarget.title);
        this.context.updateCurrentCurrency(e.currentTarget.id, e.currentTarget.title);
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
            <div className="currency-selector-container" onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
                <span className="money-icon">{this.context.currentCurrency.symbol}</span>
                <div className={`currencies-list box-shadow ${this.state.hover ? "display-flex" : "display-none"}`}>
                    {this.displayCurrencies()}
                </div>
            </div>
        )
    }

}

export default graphql(getCurrenciesQuery)(CurrencySelector);