import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.section `
font-size: 2rem;
text-align: center;
padding-top: 2rem;
`


export default function AccountBalance(props)  {
  const handlePress = (event) => {
    event.preventDefault();
    props.handleHide(props.showBalance);
  }
  
  let content;
  const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';                      //showbalance true or false
  props.showBalance ? content = <>Balance: ${props.amount}</> :  content = null;         //true = show balance : false = hide balance

  return (
    <Section> 
      {content} <br />
      <button onClick={props.handlePress}>{buttonText}</button>
    </Section>
    
  );
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  } 