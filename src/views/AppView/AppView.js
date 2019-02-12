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
      <Container className="AppView" style={this.props.style}>
        <Container id="leftPanel" className='left-panel'>
            Left
        </Container>
        <Container id="rightPanel" className={this.props.className}>
            Right
        </Container>
      </Container>
    );
  }
}

AppView.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
}

AppView.defaultProps = {
  style: baseStyles.container
}
//export default AppView
