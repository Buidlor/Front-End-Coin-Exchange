import React from 'react';
import Coinlist from './components/Coinlist/Coinlist';
import AccountBalance from'./components/AccountBalance/AccountBalance';
import Header from './components/Header/Header';
import styled from 'styled-components';

const Div = styled.div ` 
  text-align: center;
  background-color: rgb(83, 77, 155);
  color: #61dafb;
`
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 40000
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 3000
        },
        {
          name: 'Terra',
          ticker: 'LUNA',
          price: 101
        },
        {
          name: 'Solana',
          ticker: 'SOL',
          price: 151
        },
        {
          name: 'Avalanche',
          ticker: 'AVAX',
          price: 85
        }
      ]
    }
  }
  render() {
    return (
      <Div>
        <Header />
        <AccountBalance amount={this.state.balance}/>
        <Coinlist coinData = {this.state.coinData}/>
      </Div>
    );
  }
}
export default App;
