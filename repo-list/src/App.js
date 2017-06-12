import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserName from './UserName';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <UserName />
      </div>
    );
  }
}

export default App;
