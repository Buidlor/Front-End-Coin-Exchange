import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import './AccountStyle.css'
import styled from 'styled-components'


export default class AccountBalance extends Component {
  render() {
    return (
      <section className = 'styled' > 
        ${this.props.amount}
      </section>
    )
  }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  } 