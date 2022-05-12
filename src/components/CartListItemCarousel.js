import React, { Component } from "react";

class CartListItemCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (e.target.parentNode.value === "plus") {
            if (this.props.gallery.length - 1 === this.state.index) {
                this.setState({
                    index: 0
                });
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }
        } else if (e.target.parentNode.value === "minus") {
            if (this.state.index === 0) {
                this.setState({
                    index: this.props.gallery.length - 1
                })
            } else {
                this.setState({
                    index: this.state.index - 1
                })
            }
        } else {
            console.log("Wow, this is weird");
        }
    }

    render() {
        return (
            <div
                className={this.props.onWidget
                    ? "cart-list-item-carrousel-on-widget"
                    : "cart-list-item-carrousel"
                }
                style={{ backgroundImage: "url(" + this.props.gallery[this.state.index] + ")" }}
            >
                {!this.props.onWidget &&
                    <div className="cart-list-item-carrousel__control">
                        <button value="plus" onClick={this.handleClick} ><span className="material-symbols-outlined">
                            chevron_right
                        </span></button>
                        <button value="minus" onClick={this.handleClick} ><span className="material-symbols-outlined">
                            chevron_left
                        </span></button>
                    </div>
                }
            </div >
        );
    }
}

export default CartListItemCarousel;