import React from 'react'
import style from "./styles";
import PropTypes from 'prop-types';

export default class Button extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <a className='btn btn-primary' style={this.props.style}>
                {this.props.text}
            </a>
        );
    }
}

Button.propTypes = {
    style: PropTypes.object,
    text: PropTypes.string
}

Button.defaultProps = {
    style: style.button,
    text: "BUTTON DEFAULT TEXT"
}

//export default Button
