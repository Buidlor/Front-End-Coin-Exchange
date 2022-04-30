import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td `
  border: 2px solid ;
  border-color: rgb(213, 213, 243);   
  width: 16vh;
`;
const TdControls = styled(Td)`
  width: 34vw;  
`;

const TdName = styled(Td)`
  width: 24vw;
`;

const Button = styled.button `
  font-size: 12px;
  margin: 3px 5px 3px;
`;

export default function Coin(props) {

  const handleRefresh = (event) => {
    event.preventDefault();
    props.handleRefresh(props.ticker);
   }
  const handleBuy = (event) =>{
    event.preventDefault();
    props.handleTransaction(true, props.ticker)
  }
  const handleSell = (event) =>{
    event.preventDefault();
    props.handleTransaction(false, props.ticker)
  }

    return (
      <tr>
        <TdName>{props.name}</TdName>
        <TdName>{props.ticker}</TdName>
        <TdName>${props.price}</TdName>
        <TdName>{props.showBalance ? props.balance : '-'}</TdName>
        <TdControls>
          <form action ="#" method ="POST">
            <Button className = 'btn btn-info' onClick={handleRefresh}>
              Refresh
            </Button>
            <Button className = 'btn btn-success' onClick={handleBuy}>
              Buy
            </Button>
            <Button className = 'btn btn-danger' onClick={handleSell}>
              Sell
            </Button>
          </form>
        </TdControls>
      </tr>
    );
  }


Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
} 
