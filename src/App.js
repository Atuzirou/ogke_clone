import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <Main>
        <Title>Hello OGKE!</Title>
        <Kao>(´・ω・｀)</Kao>
      </Main>
    );
  }
}

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000046;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100%;
  height: 100vh;
`

const Title = styled.h1`
  font-size: 200px;
  font-weight: bold;
  color: #fff;
`

const Kao = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: #fff;
`