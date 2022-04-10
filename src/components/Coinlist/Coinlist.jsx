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
          </tr>
        </thead>
        <tbody>
          { 
            this.props.coinData.map(value=> <Coin key={value.ticker} name={value.name} ticker={value.ticker} price={value.price}/>)
          }
        </tbody>
        </Table>
    )
  }
}

