import React, { Component } from 'react';
import CartContext from './CartContext';

export default class MyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCurrencyLabel: "USD",
            currentCurrencySymbol: "$",
            cart: []
        };
        this.updateCurrentCurrency = this.updateCurrentCurrency.bind(this);
        this.updateLocalStorage = this.updateLocalStorage.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.checkIsInCart = this.checkIsInCart.bind(this);
        this.updateProductQuantity = this.updateProductQuantity.bind(this);
        this.deepEqual = this.deepEqual.bind(this);
        this.isObject = this.isObject.bind(this);
    }

    updateLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }

    componentDidMount() {
        const localStorageCurrentCurrencyLabel = localStorage.getItem("currentCurrencyLabel");
        //console.log(localStorageCurrentCurrency);
        if (localStorageCurrentCurrencyLabel === null) {
            this.updateLocalStorage("currentCurrencyLabel", JSON.stringify(this.state.currentCurrencyLabel));
        } else {
            this.setState({
                currentCurrencyLabel: JSON.parse(localStorageCurrentCurrencyLabel)
            })
        }

        //START TESTING
        const testingItem =
        {
            "id": "ps-5",
            "brand": "Sony",
            "name": "PlayStation 5",
            "prices": {
                "currency": {
                    "label": "JPY",
                    "symbol": "¥",
                    "__typename": "Currency"
                },
                "amount": 91147.25,
                "__typename": "Price"
            },
            "attributes": [
                {
                    "id": "Color",
                    "name": "Color",
                    "type": "swatch",
                    "items": [
                        {
                            "id": "Green",
                            "displayValue": "Green",
                            "value": "#44FF03",
                            "__typename": "Attribute"
                        },
                        {
                            "id": "Cyan",
                            "displayValue": "Cyan",
                            "value": "#03FFF7",
                            "__typename": "Attribute"
                        },
                        {
                            "id": "Blue",
                            "displayValue": "Blue",
                            "value": "#030BFF",
                            "__typename": "Attribute"
                        },
                        {
                            "id": "Black",
                            "displayValue": "Black",
                            "value": "#000000",
                            "__typename": "Attribute"
                        },
                        {
                            "id": "White",
                            "displayValue": "White",
                            "value": "#FFFFFF",
                            "__typename": "Attribute"
                        }
                    ],
                    "__typename": "AttributeSet"
                },
                {
                    "id": "Capacity",
                    "name": "Capacity",
                    "type": "text",
                    "items": [
                        {
                            "id": "512G",
                            "displayValue": "512G",
                            "value": "512G",
                            "__typename": "Attribute"
                        },
                        {
                            "id": "1T",
                            "displayValue": "1T",
                            "value": "1T",
                            "__typename": "Attribute"
                        }
                    ],
                    "__typename": "AttributeSet"
                }
            ],
            "gallery": [
                "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg"
            ],
            "selectedAttributes": {
                "Color": "Cyan",
                "Capacity": "512G"
            },
            "quantity": 1
        };

        const testingItemTwo =
        {
            "id": "huarache-x-stussy-le",
            "brand": "Nike x Stussy",
            "name": "Nike Air Huarache Le",
            "prices": {
                "currency": {
                    "label": "JPY",
                    "symbol": "¥",
                    "__typename": "Currency"
                },
                "amount": 15625.24,
                "__typename": "Price"
            },
            "attributes": [
                {
                    "id": "Size",
                    "name": "Size",
                    "type": "text",
                    "items": [
                        {
                            "id": "40",
                            "displayValue": "40",
                            "value": "40",
                            "__typename": "Attribute"
                        },
                        {
                            "id": "41",
                            "displayValue": "41",
                            "value": "41",
                            "__typename": "Attribute"
                        },
                        {
                            "id": "42",
                            "displayValue": "42",
                            "value": "42",
                            "__typename": "Attribute"
                        },
                        {
                            "id": "43",
                            "displayValue": "43",
                            "value": "43",
                            "__typename": "Attribute"
                        }
                    ],
                    "__typename": "AttributeSet"
                }
            ],
            "gallery": [
                "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
                "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
                "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
                "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
                "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087"
            ],
            "selectedAttributes": {
                "Size": "40"
            },
            "quantity": 5
        };
        this.setState({
            cart: [
                testingItem,
                testingItemTwo
            ]
        });
        //END TESTING
    }

    //CURRENCY SELECTOR
    updateCurrentCurrency(newLabel, newSymbol) {
        this.setState({
            currentCurrencyLabel: newLabel,
            currentCurrencySymbol: newSymbol,
        });

        this.updateLocalStorage("currentCurrencyLabel", JSON.stringify(newLabel))
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
                areObjects && !this.deepEqual(val1, val2) ||
                !areObjects && val1 !== val2
            ) {
                return false;
            }
        }
        return true;
    }

    isObject(object) {
        return object != null && typeof object === 'object';
    }

    checkIsInCart(productToCheck) {
        let isInCart = false;
        let productFound = undefined;
        this.state.cart.forEach(product => {
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
            this.setState({
                cart: [...oldCart],
            });
        }
    }

    updateProductQuantity(product, operation) {
        let productToUpdate = product;
        console.log(productToUpdate);
        let temporaryCart = this.state.cart.filter(item => item !== productToUpdate);
        if (operation === "subtract") {
            if (productToUpdate.quantity === 1) {
                this.setState({
                    cart: [...temporaryCart],
                });
            } else {
                productToUpdate.quantity -= 1;
                temporaryCart.push(productToUpdate);
                this.setState({
                    cart: [...temporaryCart],
                });
            }
        } else {
            productToUpdate.quantity += 1;
            temporaryCart.push(productToUpdate);
            this.setState({
                cart: [...temporaryCart],
            });
        }
    }

    render() {
        console.log("Cart:");
        console.log(this.state.cart);
        return (
            <CartContext.Provider
                value={{
                    currentCurrencyLabel: this.state.currentCurrencyLabel,
                    currentCurrencySymbol: this.state.currentCurrencySymbol,
                    updateCurrentCurrency: this.updateCurrentCurrency,
                    cart: this.state.cart,
                    addToCart: this.addToCart,
                    checkIsInCart: this.checkIsInCart,
                    updateProductQuantity: this.updateProductQuantity
                }}
            >
                {this.props.children}
            </CartContext.Provider>
        );
    }
}