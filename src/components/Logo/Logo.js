import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { baseStyles } from '../../assets/styles/styles'

export default class Logo extends Component {

  constructor (props) {
    super(props);
    this.props = props
  }

  componentDidMount () {
    // console.log('Logo mounted', this.props);
  }

  render() {
    return (
      <section id={this.props.id} className={this.props.className} style={this.props.style}>
        <img src={this.props.logoURL} className="bank-logo  {this.props.bankName}" />
      </section>
    );
  }
}

Logo.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node
}

Logo.defaultProps = {
  style: {},
  className: 'Logo',
}
//export default Logo
