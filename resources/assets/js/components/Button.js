import React, { Component } from "react";

class Button extends Component {

    render () {
        return (
            <>
                <button type={this.props.type} style={this.props.style} onClick={this.props.func}>{this.props.btnText}</button>
            </>
        )
    }
}

export default Button;