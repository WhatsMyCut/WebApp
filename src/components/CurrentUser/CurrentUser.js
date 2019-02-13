import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  ProfileImage
} from '../../components/'
import { financeAccountItemStyles } from '../../assets/styles/styles'
const dropArrowImage = require('../../assets/images/Arrow-down.png')

export default class CurrentUser extends Component {

  constructor (props) {
    super(props);
    this.props = props
  }

  componentDidMount () {
    // console.log('CurrentUser mounted', this.props);
  }

  handleDropdownClick(event) {
    return () => {
      console.log('handleDropdownClick', event)
    };
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.className} style={this.props.style}>
        <ProfileImage/>
        <div className="currentUserName">{ this.props.currentUser }</div>
        <div className="dropdown">
          <Link to="/" innerRef={this.handleDropdownClick(this)} >
            <img className="dropdown" src={ dropArrowImage } />
          </Link>
        </div>
      </div>
    );
  }
}

CurrentUser.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
  currentUser: PropTypes.string
}

CurrentUser.defaultProps = {
  style: {},
  className: 'CurrentUser',
  currentUser: 'Login'
}
//export default CurrentUser
