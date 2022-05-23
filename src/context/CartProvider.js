import React, { Component } from "react";
import CartContext from "./CartContext";

export default class MyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCurrencyLabel: "USD",
            currentCurrencySymbol: "$",
            cart: [],
            taxes: 21 / 100,
            wholePageBackground: false,
            backgroundType: "transparent"
        };
        this.updateCurrentCurrency = this.updateCurrentCurrency.bind(this);
        this.updateLocalStorage = this.updateLocalStorage.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.checkIsInCart = this.checkIsInCart.bind(this);
        this.updateProductQuantity = this.updateProductQuantity.bind(this);
        this.deepEqual = this.deepEqual.bind(this);
        this.isObject = this.isObject.bind(this);
        this.getCartTotalItems = this.getCartTotalItems.bind(this);
        this.sortCart = this.sortCart.bind(this);
        this.calculateTaxes = this.calculateTaxes.bind(this);
        this.displayWholePageBackground = this.displayWholePageBackground.bind(this);
        this.hideWholePageBackground = this.hideWholePageBackground.bind(this);
    }

    displayWholePageBackground(type) {
        this.setState({
            wholePageBackground: true,
            backgroundType: type
        });
    }

    hideWholePageBackground() {
        this.setState({
            wholePageBackground: false,
        });
    }

    updateLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }

    componentDidMount() {
        const localStorageCurrentCurrencyLabel = localStorage.getItem("currentCurrencyLabel");
        const localStorageCurrentCurrencySymbol = localStorage.getItem("currentCurrencySymbol");
        if (localStorageCurrentCurrencyLabel === null && localStorageCurrentCurrencySymbol === null) {
            this.updateLocalStorage("currentCurrencyLabel", this.state.currentCurrencyLabel);
            this.updateLocalStorage("currentCurrencySymbol", this.state.currentCurrencySymbol);
        } else {
            this.setState({
                currentCurrencyLabel: localStorageCurrentCurrencyLabel
            });
            this.setState({
                currentCurrencySymbol: localStorageCurrentCurrencySymbol
            });
        }
        const localStorageCart = localStorage.getItem("cart");
        if (localStorageCart !== null) {
            this.setState({
                cart: [...JSON.parse(localStorageCart)]
            });
        }
    }

    //CURRENCY SELECTOR
    updateCurrentCurrency(newLabel, newSymbol) {
        this.setState({
            currentCurrencyLabel: newLabel,
            currentCurrencySymbol: newSymbol,
        });
        this.updateLocalStorage("currentCurrencyLabel", newLabel);
        this.updateLocalStorage("currentCurrencySymbol", newSymbol);
    }

    //CART
    deepEqual(object1, object2) {
        const keys1 = Object.keys(object1).filter(key => key !== "quantity");
        const keys2 = Object.keys(object2).filter(key => key !== "quantity");
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            const val1 = object1[key];
            const val2 = object2[key];
            const areObjects = this.isObject(val1) && this.isObject(val2);
            if (
                (areObjects && !this.deepEqual(val1, val2)) ||
                (!areObjects && val1 !== val2)
            ) {
                return false;
            }
        }
        return true;
    }

    isObject(object) {
        return object != null && typeof object === "object";
    }

    checkIsInCart(productToCheck) {
        let isInCart = false;
        let productFound = undefined;
        this.state.cart.length > 0 && this.state.cart.forEach(product => {
            if (this.deepEqual(productToCheck, product)) {
                isInCart = true;
                productFound = product;
            }
        });
        return [isInCart, productFound];
    }

    addToCart(productToAdd) {
        if (!this.checkIsInCart(productToAdd)[0]) {
            const oldCart = this.state.cart;
            productToAdd.quantity = 1;
            oldCart.push(productToAdd);
            oldCart.sort(this.sortCart);
            this.setState({
                cart: [...oldCart],
            });
            this.updateLocalStorage("cart", JSON.stringify([...oldCart]))
        }
    }

    getCartTotalItems() {
        let total = 0;
        if (this.state.cart.length > 0) {
            this.state.cart.forEach(product => {
                total += product.quantity;
            })
            return total;
        }
    }
    getCartTotalAmountWithoutTaxes() {
        let total = 0;
        if (this.state.cart.length > 0) {
            this.state.cart.forEach(product => {
                let price = product.prices.find(price => price.currency.label === this.state.currentCurrencyLabel);
                total += product.quantity * price.amount;
            })
            return total.toFixed(2);
        }
    }

    calculateTaxes() {
        const totalWithoutTaxes = Number(this.getCartTotalAmountWithoutTaxes());
        const taxesAmount = Number((this.getCartTotalAmountWithoutTaxes() * this.state.taxes).toFixed(2));
        const totalIncludingTaxes = Number(totalWithoutTaxes + taxesAmount).toFixed(2);
        return { taxesAmount, totalIncludingTaxes };
    }

    updateProductQuantity(product, operation) {
        let productToUpdate = product;
        let temporaryCart = this.state.cart.filter(item => item !== productToUpdate);
        if (operation === "subtract") {
            if (productToUpdate.quantity === 1) {
                this.setState({
                    cart: [...temporaryCart],
                });
            } else {
                productToUpdate.quantity -= 1;
                temporaryCart.push(productToUpdate)
                temporaryCart.sort(this.sortCart);
                this.setState({
                    cart: [...temporaryCart],
                });
            }
        } else {
            productToUpdate.quantity += 1;
            temporaryCart.push(productToUpdate);
            temporaryCart.sort(this.sortCart);
            this.setState({
                cart: [...temporaryCart],
            });
        }
        this.updateLocalStorage("cart", JSON.stringify([...temporaryCart]))
    }

    sortCart(x, y) {
        if (x.id === y.id) {
            let xString = "";
            for (const [key, value] of Object.entries(x.selectedAttributes)) {
                xString += xString + `${key}: ${value}`;
            }
            let yString = "";
            for (const [key, value] of Object.entries(y.selectedAttributes)) {
                yString += yString + `${key}: ${value}`;
            }
            return xString.localeCompare(yString);
        }
        else {
            return x.id.localeCompare(y.id);
        }
    }

    render() {
        return (
            <CartContext.Provider
                value={{
                    currentCurrencyLabel: this.state.currentCurrencyLabel,
                    currentCurrencySymbol: this.state.currentCurrencySymbol,
                    cart: this.state.cart,
                    taxes: this.state.taxes,
                    wholePageBackground: this.state.wholePageBackground,
                    backgroundType: this.state.backgroundType,
                    updateCurrentCurrency: this.updateCurrentCurrency,
                    addToCart: this.addToCart,
                    checkIsInCart: this.checkIsInCart,
                    updateProductQuantity: this.updateProductQuantity,
                    getCartTotalItems: this.getCartTotalItems,
                    calculateTaxes: this.calculateTaxes,
                    displayWholePageBackground: this.displayWholePageBackground,
                    hideWholePageBackground: this.hideWholePageBackground,
                }}
            >
                {this.props.children}
            </CartContext.Provider>
        );
    }
}