import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td `
  border: 2px solid ;
  border-color: rgb(213, 213, 243);   
  width: 25vh;
`

export default function Coin(props) {

  const handleClick = (event) => {
    event.preventDefault();
    props.handleRefresh(props.ticker);
   }

    return (
      <tr>
        <Td>{props.name}</Td>
        <Td>{props.ticker}</Td>
        <Td>${props.price}</Td>
        {props.showBalance ? <Td>{props.balance}</Td> : null}
        <Td>
          <form action ="#" method ="POST">
            <button onClick={handleClick}>Refresh</button>
          </form>
        </Td>
      </tr>
    );
  }


Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
} 