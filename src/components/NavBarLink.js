import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom';


//components 

class NavBarLink extends Component {

    render() {
       //console.log(this.props);
        return (
            <li>
                <NavLink exact key={this.props.key} to={`/${this.props.to}`}>
                    {this.props.text}
                </NavLink>
            </li>
        );
    }
}

export default withRouter(NavBarLink);

//TODO ACTIVE CLASS NAME