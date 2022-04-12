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
          price: 40000,
          balance: 0.5
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 3000,
          balance: 32
        },
        {
          name: 'Terra',
          ticker: 'LUNA',
          price: 101,
          balance: 100
        },
        {
          name: 'Solana',
          ticker: 'SOL',
          price: 151,
          balance: 0
        },
        {
          name: 'Avalanche',
          ticker: 'AVAX',
          price: 85,
          balance: 40
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
   
  }
 
  handleRefresh(valueChangeTicker){
    const newCoinData = this.state.coinData.map(function({ticker, name, price, balance}){
      let newPrice = price; 
      if(valueChangeTicker === ticker ){
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage
      }
      return{
       ticker,
       name,
       price: newPrice,
       balance
      }
    });

  this.setState({coinData: newCoinData})
  }
  render() {
    return (
      <Div>
        <Header />
        <AccountBalance amount={this.state.balance} showBalance = {false}/>
        <Coinlist coinData = {this.state.coinData} 
        Refresh={this.handleRefresh}/>
      </Div>
    );
  }
}
export default App;
