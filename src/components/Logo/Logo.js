import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { baseStyles } from '../../assets/styles/styles'
const logoImage = require('../../assets/images/FOA.png')
const mainImage = require('../../assets/images/FOAMain.png')

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
        <img src={this.props.logoImage} className="bankLogo" />
        <img src={this.props.mainImage} className="bankMain" />
      </section>
    );
  }
}

Logo.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
  logoImage: PropTypes.object,
  mainImage: PropTypes.object,
  bankName: PropTypes.string
}

Logo.defaultProps = {
  style: {},
  className: 'Logo',
  logoImage: logoImage,
  mainImage: mainImage
}
//export default Logo
