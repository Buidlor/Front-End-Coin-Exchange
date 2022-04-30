import React from 'react'
import Coin from '../Coin/Coin'
import styled from 'styled-components'

const Table = styled.table `
  font-size: 1.5rem;
  margin: 10px 0px 0 0 ;
`

export default function Coinlist(props)  {
  return (
      <Table className='table table-primary table-bordered'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Balance</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { 
          props.coinData.map(value => 
          <Coin key={value.ticker} 
                handleRefresh={props.handleRefresh}
                handleTransaction ={props.handleTransaction}
                name={value.name} 
                ticker={value.ticker} 
                price={value.price}
                showBalance = {props.showBalance}
                balance={value.balance}/>)
        }
      </tbody>
      </Table>
  )
}


