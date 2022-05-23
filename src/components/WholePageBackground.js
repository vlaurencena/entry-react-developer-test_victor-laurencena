import React, { Component } from "react";
//context
import CartContext from "../context/CartContext";

class WholePageBackground extends Component {
    static contextType = CartContext;
    render() {
        return (
            <div>
                {this.context.wholePageBackground && <div
                    className={"whole-page-background " + (this.context.backgroundType === "transparent" ? "whole-page-background__transparent" : "whole-page-background__gray")}
                    onClick={this.context.hideWholePageBackground}
                ></div>}
            </div>
        )
    }
}

export default WholePageBackground;
