import React, { Component } from 'react'
import Coin from '../Coin/Coin'
import styled from 'styled-components'

const Table = styled.table `
  margin: 50px auto;
  display: inline-block;
  font-size: 1.3rem;
`
export default class Coinlist extends Component {
  render() {
    return (
        <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
            {this.props.showBalance ? <th>Balance</th> : null}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { 
            this.props.coinData.map(value => 
            <Coin key={value.ticker} 
                  handleRefresh={this.props.handleRefresh}
                  name={value.name} 
                  ticker={value.ticker} 
                  price={value.price}
                  showBalance = {this.props.showBalance}
                  balance={value.balance}/>)
          }
        </tbody>
        </Table>
    )
  }
}

