import React, { Component } from 'react';
import './RepoList.css';

class RepoList extends Component {
  render() {
    return (
      <div className="RepoList">
        <div className="RepoList-header">
          <h2>List of Repos for: {`${this.props.username}`}</h2>
        </div>
        <div className="RepoList-error" >
        </div>
        <div className="RepoList-body">
        </div>
      </div>
    );
  }
}

export default RepoList;
