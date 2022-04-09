import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td `
  border: 2px solid ;
  border-color: rgb(213, 213, 243);   
  width: 25vh;
`

export default class Coin extends Component {
  constructor(props){
    super(props);
    this.state = {
      price: this.props.price
    }
    this.handleClick = this.handleClick.bind(this);
  }
 /* componentDidMount(){
    const callback =() => {
      //ste the state to a new random value
      const randomPercentage = 0.995 + Math.random() * 0.01;
      //don't do this: 
      //this.state.price= this.state.price*randomPercentage;

      this.setState(function(oldState) {
        return {
          price: oldState.price * randomPercentage
        };
      });
    }
    //setInterval(callback, 1000);
  }*/

  handleClick(event){
    event.preventDefault();
    const randomPercentage = 0.995 + Math.random() * 0.01;
    this.setState(function(oldState) {
      return {
        price: oldState.price * randomPercentage
      };
    });
  }

  render() {
    return (
      <tr>
        <Td>{this.props.name}</Td>
        <Td>{this.props.ticker}</Td>
        <Td>${this.state.price}</Td>
        <Td>
          <form action ="#" method ="POST">
            <button onClick={this.handleClick}>Refresh</button>
          </form>
        </Td>
      </tr>
    );
  }
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
} 
