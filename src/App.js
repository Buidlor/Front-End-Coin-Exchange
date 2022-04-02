import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src = {logo} alt ="React logo"  className="App-logo" /> 
        <h1 className='App-title'>
          My Coin Exchange
        </h1>
        <img src = {logo} alt ="React logo 2"  className="App-logo-2" /> 
      </header>
      <table className='coin-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name = "Bitcoin" ticker="BTC" price={40000.00}/>
          <Coin name = "Ethereum" ticker="ETH" price={3000.00}/>
          <Coin name = "Terra" ticker="LUNA" price={101.00} />
          <Coin name = "Solana" ticker = "SOL" price={151.00}/>
        </tbody>
      </table>
    </div>
  );
}
export default App;
