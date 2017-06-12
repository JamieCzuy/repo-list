import React, { Component } from 'react';
import axios from 'axios';
import './RepoList.css';

class RepoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: [{'id': '123', 'name': 'repo1'}]
    };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.update(this.props.username)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.username !== nextProps.username) {
      this.update(nextProps.username)
    }
  }

  update(username) {
    axios.get(`https://api.github.com/users/${username}/repos`).then(
      res => {
        const repos = res.data.map(obj => obj);
        this.setState({ repos });
      }
    )
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
