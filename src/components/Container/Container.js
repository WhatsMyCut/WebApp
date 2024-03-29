import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { baseStyles } from '../../assets/styles/styles'

export default class Container extends Component {

  constructor (props) {
    super(props);
    console.log('here', this.props)
  }

  componentDidMount () {
    // console.log('Container mounted', this.props);
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.className} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

Container.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node
}

Container.defaultProps = {
  style: {},
  className: 'container',
}
//export default Container
