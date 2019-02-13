import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { baseStyles } from '../../assets/styles/styles'
const dropArrowImage = require('../../assets/images/Arrow-down.png')

export default class MenuPanel extends Component {

  constructor (props) {
    super(props);
    this.props = props
  }

  componentDidMount () {
    // console.log('MenuPanel mounted', this.props);
  }

  render() {
    return (
      <section id={this.props.id} className={this.props.className} style={this.props.style}>
        <h1>{ this.props.sectionTitle }</h1>
        <p className='description'>{ this.props.sectionDescription }</p>
        <div>
          <p>Submenus</p>
          <ul></ul>
        </div>
      </section>
    );
  }
}

MenuPanel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
  arrowImage: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string
}

MenuPanel.defaultProps = {
  style: {},
  className: 'MenuPanel',
  arrowImage: dropArrowImage,
  sectionTitle: 'Secure Document Storage',
  sectionDescription: "Store your important documents like a will, insurance policy, house deed, etc. in your secure vault. Share individual documents or folders with your spouse, family members or advisors. You control who has access to the documents you want to share."
}
//export default MenuPanel
