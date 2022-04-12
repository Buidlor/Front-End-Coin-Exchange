import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.section `
font-size: 2rem;
text-align: center;
padding-top: 2rem;
`


export default class AccountBalance extends Component {
  handlePress(event){
    event.preventDefault();
    this.props.handleHide(this.props.showBalance);
  }
  render() {
    let content;
    const buttonText = this.props.showBalance ? 'Hide.Balance' : 'Show Balance';    //showbalance true or false
    this.props.showBalance ? content = <>Balance: ${this.props.amount}</> :  content = null;         //true = show balance : false = hide balance

    return (
      <Section> 
        {content}
        <button onClick={this.props.handleBalanceVisibilityChange}>{buttonText}</button>
      </Section>
    )
  }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  } 