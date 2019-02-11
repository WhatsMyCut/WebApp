import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { baseStyles } from './styles'

export default class Container extends Component {

  constructor (props) {
    super(props);
    this.props = props
  }

  componentDidMount () {
    console.log('Container mounted', this.props);
  }

  render() {
    return (
      <div style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

Container.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
}

Container.defaultProps = {
  style: baseStyles.container
}
//export default Container
