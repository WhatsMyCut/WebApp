import React from 'react'
import PropTypes from 'prop-types';
import { baseStyles } from '../../assets/styles/styles'

export default class Button extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        const tc =  'btn btn-primary '
        return (
            <a className={tc}  id={this.props.id} style={this.props.style}>
                {this.props.text}
            </a>
        );
    }
}

Button.propTypes = {
    style: PropTypes.object,
    id: PropTypes.string,
    text: PropTypes.string
}

Button.defaultProps = {
    style: baseStyles.button,
    text: "BUTTON DEFAULT TEXT"
}

//export default Button
