import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



const Balance = styled.div`
  min-width: 250px;
  font-size: 2em;
  
`;
const Button = styled.button `
  margin: 0 4px;
`;
const ButtonTogleBalance = styled(Button)`
  width: 230px;
  align-items: center;
`;

var formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
export default function AccountBalance(props)  {
  
  const handlePress = (event) => {
    event.preventDefault();
    props.handleHide(props.showBalance);
  }
  
  const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';                      //showbalance true or false
  let content = '\u00A0';
  if(props.showBalance){
    content =<>{formatter.format(props.amount)}</>
  }
  const buttonClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-primary');
  // props.showBalance ? content = <>Balance: ${props.amount}</> :  content = null;         //true = show balance : false = hide balance

  return (
    <>
      <Balance>{content}</Balance>
      <section> 
        <ButtonTogleBalance onClick={handlePress} className={buttonClass}>
          {buttonText}
        </ButtonTogleBalance>
        <Button className='btn btn-success' onClick={props.handleBrrrr}>
          <i className="fa-solid fa-parachute-box"></i>
        </Button>
      </section>
    </>
  );
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  } 