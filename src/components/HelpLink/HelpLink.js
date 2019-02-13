import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { baseStyles } from '../../assets/styles/styles'

export default class HelpLink extends Component {

  constructor (props) {
    super(props);
    this.props = props
  }

  componentDidMount () {
    // console.log('HelpLink mounted', this.props);
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.className} style={this.props.style}>
        <Link to='/help'>Help</Link>
      </div>
    );
  }
}

HelpLink.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node
}

HelpLink.defaultProps = {
  style: {},
  className: 'HelpLink',
}
//export default HelpLink
