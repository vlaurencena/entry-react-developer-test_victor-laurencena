import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

class NavBarLink extends Component {

    render() {
        return (
                <NavLink exact key={this.props.key} to={`/${this.props.to}`} className={this.props.location.pathname === `/${this.props.to}` ? "nav-bar__links--selected" : ""}>
                    {this.props.text}
                </NavLink>
        );
    }
}

export default withRouter(NavBarLink);