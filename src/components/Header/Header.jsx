import React, { Component } from 'react'
import logo from '../../logo.svg';
 

export default class Header extends Component {
  render() {
    return (
    <header className="App-header">
        <img src = {logo} alt ="React logo"  className="App-logo" /> 
        <h1 className='App-title'>
          My Coin Exchange
        </h1>
        <img src = {logo} alt ="React logo 2"  className="App-logo-2" /> 
      </header>
        
    )
  }
}
