import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container } from '../../components/'
import { baseStyles } from '../../assets/styles/styles';

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
        <Container id="leftPanel" >
            Left
        </Container>
        <Container id="rightPanel">
            Right
        </Container>
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
  style: {}
}
//export default AppView
