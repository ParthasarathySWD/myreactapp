import React from 'react';
import Header from './components/Header'
import Container from './components/Container'
import logo from './logo.svg';
import './App.css';

function App() {
  const secret_key = "ancod@33";
  return (
    <div className="App">
      <Header></Header>
      <Container></Container>
    </div>
  );
}

export default App;
