import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { financeAccountItemStyles } from '../../assets/styles/styles'

export default class AdminPanel extends Component {

  constructor (props) {
    super(props);
    this.props = props
  }

  componentDidMount () {
    // console.log('AdminPanel mounted', this.props);
  }

  render() {
    return (
      <main id={this.props.id} className={this.props.className} style={this.props.style}>
        <section className="leftContent">Left</section>
        <section className="rightContent">rightContent</section>
      </main>
    );
  }
}

AdminPanel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node
}

AdminPanel.defaultProps = {
  style: financeAccountItemStyles.container,
  className: 'AdminPanel',
}
//export default AdminPanel
