import React, { Component } from 'react';
import './RepoList.css';

class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [{'id': '123', 'name': 'repo1'}]
    };
  }

  render() {
    return (
      <div className="RepoList">
        <div className="RepoList-header">
          <h2>List of Repos for: {`${this.props.username}`}</h2>
        </div>
        <div className="RepoList-error" >
        </div>
        <div className="RepoList-body">
          <ul id="repo_list">
            {this.state.repos.map(repo => 
              <li key={repo.id}>{repo.name}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default RepoList;
