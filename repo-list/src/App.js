import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserName from './UserName';
import RepoList from './RepoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <UserName />
        <RepoList username="jforaker" />
      </div>
    );
  }
}

export default App;
