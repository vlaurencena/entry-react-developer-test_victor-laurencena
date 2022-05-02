import React, { Component } from 'react';
import CartContext from './CartContext';

export default class MyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCurrency: {
                label: "USD",
                symbol: "$"
            },
            cart: ["1", "jacket"]
        };
        this.updateCurrentCurrency = this.updateCurrentCurrency.bind(this)
        this.updateLocalStorage = this.updateLocalStorage.bind(this)
    }

    updateCurrentCurrency(newLabel, newSymbol) {
        this.setState({
            currentCurrency: {
                label: newLabel,
                symbol: newSymbol
            },
        });
        this.updateLocalStorage("currentCurrency", JSON.stringify({ label: newLabel, symbol: newSymbol }))
    }

    updateLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }

    componentDidMount() {
        const localStorageCurrentCurrency = localStorage.getItem("currentCurrency");
        //console.log(localStorageCurrentCurrency);
        if (localStorageCurrentCurrency === null) {
            console.log("here");
            this.updateLocalStorage("currentCurrency", JSON.stringify(this.state.currentCurrency));
        } else {
            this.setState({
                currentCurrency: JSON.parse(localStorageCurrentCurrency)
            })
        }
    }

    render() {
        return (
            <CartContext.Provider
                value={{
                    currentCurrency: this.state.currentCurrency,
                    updateCurrentCurrency: this.updateCurrentCurrency,
                    cart: this.state.cart,
                }}
            >
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

