import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { baseStyles } from './styles'

export default class AppView extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
      //console.log('AppView mounted');
  }

  render() {
    return (
      <div style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

AppView.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
}

AppView.defaultProps = {
  style: baseStyles.container
}
//export default AppView
