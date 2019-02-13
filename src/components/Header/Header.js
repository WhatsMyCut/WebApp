import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { financeAccountItemStyles } from '../../assets/styles/styles'
import {
    Logo,
    CurrentUser,
    HelpLink
} from '../../components/'

export default class Header extends Component {

  constructor (props) {
    super(props);
    this.props = props
  }

  componentDidMount () {
    // console.log('Header mounted', this.props);
  }

  render() {
    return (
      <header id={this.props.id} className={this.props.className} style={this.props.style}>
        <Logo />
        <CurrentUser />
        <HelpLink />
      </header>
    );
  }
}

Header.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node
}

Header.defaultProps = {
  style: {},
  className: 'Header gradient-upli',
}
//export default Header
