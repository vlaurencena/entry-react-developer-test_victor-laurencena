import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

class NavBarLink extends Component {

    render() {
        const pathname = this.props.location.pathname;
        let category;
        if (pathname.lastIndexOf("/") === 0) {
            category = pathname.slice(
                pathname.indexOf("/") + 1
            );
        } else {
            category = pathname.slice(
                pathname.indexOf("/") + 1,
                pathname.lastIndexOf("/")
            );
        }
        return (
            <NavLink exact key={this.props.key} to={`/${this.props.to}`} className={category === this.props.to ? "nav-bar__links--selected" : ""}>
                {this.props.text}
            </NavLink>
        );
    }
}

export default withRouter(NavBarLink);