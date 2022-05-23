import React, { Component } from "react";
import WholePageBackground from "../components/WholePageBackground";
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentYear: undefined
        }
    }

    componentDidMount() {
        this.setState({
            currentYear: new Date().getFullYear()
        })
    }
    render() {

        return (
            <div className="position-relative">
                <WholePageBackground />
                <div className="footer">
                    <p>Copyright © {this.state.currentYear} vlaurencena</p>
                    <a href="https://github.com/vlaurencena" target="_blank" rel="noopener noreferrer">
                        <img src="/media/github-icon.png" alt="GitHub icon" /></a>
                </div>
            </div>
        );
    }
}

export default Footer;