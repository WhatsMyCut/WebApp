import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { baseStyles } from '../../assets/styles/styles'
const logoImage = require('../../assets/images/upli.png')
const mainImage = ''

export default class Logo extends Component {

  constructor (props) {
    super(props);
    this.props = props
  }

  componentDidMount () {
    // console.log('Logo mounted', this.props);
  }

  render() {
    let tagline;
    if (this.props.mainImage) {
      tagline = <img src={this.props.mainImage} className="tagline" />
    }
    return (
      <section id={this.props.id} className={this.props.className} style={this.props.style}>
        <img src={this.props.logoImage} className="bankLogo" />
        {tagline}
      </section>
    );
  }
}

Logo.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
  logoImage: PropTypes.string,
  mainImage: PropTypes.string,
  bankName: PropTypes.string
}

Logo.defaultProps = {
  style: {},
  className: 'Logo',
  logoImage: logoImage,
  mainImage: mainImage
}
//export default Logo
