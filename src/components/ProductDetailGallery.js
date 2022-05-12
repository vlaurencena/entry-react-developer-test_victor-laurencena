import React, { Component } from "react";

class ProductDetailGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: "url(" + this.props.gallery[0] + ")",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const clickedImage = window.getComputedStyle(e.currentTarget).getPropertyValue("background-image");
        this.setState({
            selectedImage: clickedImage
        })
    }

    render() {
        return (
            <div className="gallery-container">
                <div className="gallery-container__secondary-images-container">
                    {this.props.gallery.map(secondaryImage => {
                        return (
                            <div
                                key={secondaryImage}
                                onClick={this.handleClick}
                                className="gallery-container__secondary-image"
                                style={{ backgroundImage: "url(" + secondaryImage + ")" }} />
                        );
                    })}
                </div>
                <div
                    className="gallery-container__main-image"
                    style={{ backgroundImage: this.state.selectedImage }} />
            </div>
        );
    }
}

export default ProductDetailGallery;