import React, { Component } from 'react';
import { graphql } from 'react-apollo';

//components 
import NavBarLink from "./NavBarLink";
import CurrencySelector from "./CurrencySelector";
import CartWidget from "./CartWidget";

//queries
import { getCategoriesQuery } from '../queries/queries';

class NavBar extends Component {
    displayCategoriesLinks() {
        let data = this.props.data;
        //console.log(data);
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
            <div className="nav-bar-container">
                <div className="nav-bar-container__links">
                    <ul>
                        {this.displayCategoriesLinks()}
                    </ul>
                </div>
                <CurrencySelector
                />
                <CartWidget
                />
            </div>
        );
    }
}

export default graphql(getCategoriesQuery)(NavBar);