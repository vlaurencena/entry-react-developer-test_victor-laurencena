import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import CartProvider from "../context/CartProvider";
import CartContext from "../context/CartContext";

//components 
import NavBarLink from "./NavBarLink";

//queries
import { getCategoriesQuery } from '../queries/queries';

class NavBar extends Component {
    displayCategoriesLinks() {
        let data = this.props.data;
        // console.log(data);
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
            <CartContext.Consumer>
                {context => (
                    <div>
                        <div className="nav-bar-container">
                            <ul>
                                {this.displayCategoriesLinks()}
                            </ul>
                        </div>
                        <div>{context.currency}</div>
                    </div>
                )}
            </CartContext.Consumer>
        );
    }
}

export default graphql(getCategoriesQuery)(NavBar);