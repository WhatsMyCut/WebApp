import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { financeAccountItemStyles } from '../../assets/styles/styles'
const profileImage = require('../../assets/images/profile-fpo.svg')

export default class ProfileImage extends Component {

  constructor (props) {
    super(props);
    //console.log('here', this.props)
  }

  componentDidMount () {
    // console.log('ProfileImage mounted', this.props);
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.className} style={this.props.style}>
        <img className="profileImageCircle" src={ profileImage } />
      </div>
    );
  }
}

ProfileImage.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node
}

ProfileImage.defaultProps = {
  style: {},
  className: 'ProfileImage',
}
//export default ProfileImage
