import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { baseStyles, baseColors, theme } from './styles'

import { Container } from '../../components/'
import { Styles } from '../../styles/styles';

export default class AppView extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
      //console.log('AppView mounted');
  }

  render() {
    return (
      <Container style={this.props.style}>
        <Container id="leftPanel" style={Styles.left}>
            Left
        </Container>
        <Container id="rightPanel" style={Styles.right}>
            Right
        </Container>
      </Container>
    );
  }
}

AppView.propTypes = {
  style: PropTypes.object,
}

AppView.defaultProps = {
  style: baseStyles.container
}
//export default AppView
