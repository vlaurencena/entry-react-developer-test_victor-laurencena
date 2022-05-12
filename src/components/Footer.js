
import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <p>
                    Copyright ©
                    <script>
                        document.write(new Date().getFullYear())
                    </script>
                    vlaurencena
                </p>
                <a href="https://github.com/vlaurencena" target="_blank">
                    <img src="/media/github-icon.png" /></a>
            </div>

        );
    }
}

export default Footer;