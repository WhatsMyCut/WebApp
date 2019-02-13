import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { baseStyles, theme } from '../../assets/styles/styles';

import {
    AdminPanel,
    Header
} from '../../components/'
export default class AppView extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
      //console.log('AppView mounted');
  }

  render() {
    return (
      <div className="AppView" style={this.props.style}>
        <Header />
        <AdminPanel className="AdminPanel clearfix"/>
      </div>
    );
  }
}

AppView.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
}

AppView.defaultProps = {
  className: 'AppView',
  style: theme
}
//export default AppView
