import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCategories } from '../queries/queries';
import { gql } from "apollo-boost";


//components 

class NavBar extends Component {
    displayCategoriesLinks() {
        let data = this.props.data;
        console.log(data);
        if (data.loading) {
            return (<div>Loading Links...</div>)
        } else {
            return data.categories.map(category => {
                return (
                    <li key={category.name}><a href={category.name}>{category.name.toUpperCase()}</a></li>
                );
            })
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.displayCategoriesLinks()}
                </ul>
            </div>
        );
    }
}

export default graphql(getCategories)(NavBar);
