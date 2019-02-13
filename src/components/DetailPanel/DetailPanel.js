import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { baseStyles } from '../../assets/styles/styles'

export default class DetailPanel extends Component {

  constructor (props) {
    super(props);
    this.state = {
      detailTitle: 'Financial Accounts & Assets'
    }
  }

  componentDidMount () {
    // console.log('DetailPanel mounted', this.props);
  }

  render() {
    return (
      <section id={this.props.id} className={this.props.className} style={this.props.style}>
        <h2>{ this.state.detailTitle }</h2>
      </section>
    );
  }
}

DetailPanel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
}

DetailPanel.defaultProps = {
  style: {},
  className: 'DetailPanel'
}
