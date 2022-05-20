import React, { Component } from "react";
import WholePageBackground from "../components/WholePageBackground";
class Footer extends Component {

    render() {
        return (
            <div className="position-relative">
                <WholePageBackground />
                <div className="footer">
                    <p>
                        Copyright ©
                        <script>
                            document.write(new Date().getFullYear())
                        </script>
                        vlaurencena
                    </p>
                    <a href="https://github.com/vlaurencena" target="_blank">
                        <img src="/media/github-icon.png" alt="GitHub icon" /></a>
                </div>
            </div>
        );
    }
}

export default Footer;