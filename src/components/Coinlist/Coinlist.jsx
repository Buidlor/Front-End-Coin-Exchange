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
            <th>Balance</th>
            <th>Refresh</th>
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
                  balance = {value.balance}/>)
          }
        </tbody>
        </Table>
    )
  }
}

