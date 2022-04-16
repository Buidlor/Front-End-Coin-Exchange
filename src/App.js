import React from 'react';
import Coinlist from './components/Coinlist/Coinlist';
import AccountBalance from'./components/AccountBalance/AccountBalance';
import Header from './components/Header/Header';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div ` 
  text-align: center;
  background-color: rgb(83, 77, 155);
  color: #61dafb;
`

const COIN_COUNT = 10;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: []
  }
componentDidMount = async () => {
  let response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')  
  let coinData = response.data.slice(0, COIN_COUNT).map(function(coin){
    return { 
      key: coin.id,
      name: coin.name,
      ticker: coin.symbol,
      balance: 0,
      price: coin.current_price,
    };
  });
  this.setState({coinData});
     
}

  handleBalanceVisibilityChange = () => {
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }
 
  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map(function(values){
      let newValues = { ...values };
      if(valueChangeTicker === values.ticker ){
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price = newValues.price * randomPercentage
      }
      return newValues;
    });

  this.setState({coinData: newCoinData})
  }
  render() {
    return (
      <Div>
        <Header />
        <AccountBalance 
          amount={this.state.balance} 
          showBalance = {this.state.showBalance} 
          handleBalanceVisibilityChange ={this.handleBalanceVisibilityChange} />

        <Coinlist 
          coinData = {this.state.coinData} 
          handleRefresh={this.handleRefresh}
          showBalance = {this.state.showBalance} />
      </Div>
    );
  }
}
export default App;
