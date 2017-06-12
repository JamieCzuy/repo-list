import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserName from './UserName';
import RepoList from './RepoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { username: "jforaker" };
  }

  callbackToSetUsername = (valueFromUser) => {
    console.log("Setting username: " + valueFromUser)
    this.setState({ username: valueFromUser });
  }

  render() {
    console.log("App Render")
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <UserName setUsername={this.callbackToSetUsername} />
        <RepoList username={this.state.username} />
      </div>
    );
  }
}

export default App;
