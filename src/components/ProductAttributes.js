import React, { Component } from 'react';

class ProductAttributes extends Component {
    constructor(props) {
        super(props);
        this.checkIsSelected = this.checkIsSelected.bind(this)
    }

    checkIsSelected(value) {
        if(this.props.selectedAttributes) {
            return Object.values(this.props.selectedAttributes).includes(value);
        }
    }
    render() {

        return (
            <div>
                {this.props.attributes.map(attribute => (
                    <div key={attribute.name}><div className="product-detail-specs__attribute-name">{attribute.name}:</div>
                        <div id={attribute.id} className="product-detail-specs__attributes-list">
                            {attribute.items.map(item => (
                                attribute.type === "text" ?
                                    <div
                                        //TODO DINAMYC CLASSES
                                        onClick={this.props.handleSelection}
                                        key={item.value}
                                        id={item.id}
                                        className={"product-attribute-type-text " + (this.checkIsSelected(item.id) ? "selected-text-attribute" : "")}
                                    >
                                        {item.value}
                                    </div>
                                    :
                                    <div
                                        onClick={this.props.handleSelection}
                                        key={item.value}
                                        id={item.id}
                                        className={"product-attribute-type-color " + (this.checkIsSelected(item.id) ? "selected-color-attribute" : "")}
                                        style={{ backgroundColor: item.value }}>
                                    </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ProductAttributes;