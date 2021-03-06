import React, { Component } from 'react'
import logo from './logo.svg';
import styled from 'styled-components'

 
const HEADER = styled.header ` 
background-color: #282c34;
min-height: 20vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
font-size: 2rem;
`
const H1 = styled.h1 `
  color: white;
`
const Img = styled.img `
    height: 6rem;
    pointer-events: none;
    animation: App-logo-spin infinite 20s linear;
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
`
export default class Header extends Component {
  render() {
    return (
      <HEADER>
        <Img src = {logo} alt ="logo is here" /> 
        <H1>
          Coin Portfolio 
        </H1>
        <Img src = {logo} alt ="logo is here" /> 
        
      </HEADER>
      
    );
  }
}
