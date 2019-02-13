import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../Logo/'
import { baseStyles } from '../../assets/styles/styles'
const FOABankImage = require('../../assets/images/FOA.png')
const mainImage = require('../../assets/images/FOAMain.png')

export default class FOABank extends Logo {

  constructor (props) {
    super(props);
    this.props = props
  }

  componentDidMount () {
    // console.log('FOABank mounted', this.props);
  }

  render() {
    return (
      <section id={this.props.id} className={this.props.className} style={this.props.style}>
        <img src={this.props.FOABankImage} className="bankFOABank" />
        <img src={this.props.mainImage} className="tagline" />
      </section>
    );
  }
}

FOABank.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
  FOABankImage: PropTypes.object,
  mainImage: PropTypes.object,
  bankName: PropTypes.string
}

FOABank.defaultProps = {
  style: {},
  className: 'FOABank',
  FOABankImage: FOABankImage,
  mainImage: mainImage
}
//export default FOABank
