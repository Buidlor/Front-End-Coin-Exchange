import React from 'react';
import Coinlist from './components/Coinlist/Coinlist';
import AccountBalance from'./components/AccountBalance/AccountBalance';
import Header from './components/Header/Header';
import styled from 'styled-components';
import axios from 'axios';
//import { element, symbol } from 'prop-types';

const Div = styled.div ` 
  text-align: center;
  background-color: rgb(83, 77, 155);
  color: #61dafb;
`


class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: []
  }
  componentDidMount = async () => {
    let response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false');  
    let response2 = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=2&sparkline=false');
    let coinData = response.data.concat(response2.data); //Combine both coingecko API responses in 1 array.
    
    coinData=coinData
      .filter(function(coin){ 
        return coin.symbol === 'divi' || coin.symbol === 'eth' || coin.symbol === 'luna'
      })
      .map(function(coin){
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
 
  handleRefresh = async (valueChangeTicker) => {
    let response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false');  
    let response2 = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=2&sparkline=false');
    let newPrice = response.data
    .concat(response2.data)
    .filter(function(filt){
      return filt.symbol === valueChangeTicker  ;    
    })  
    .map(function(coin){
      return coin.current_price;
    });  
  
    const newCoinData = this.state.coinData.map(function(values){
      let newValues = { ...values };
      if(valueChangeTicker === values.ticker ){
        newValues.price = newPrice;
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
