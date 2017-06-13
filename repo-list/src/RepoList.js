import React, { Component } from 'react';

import ErrorComponent from './ErrorComponent';
import './RepoList.css';

class RepoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: [{ 'id': '123', 'name': 'repo1' }],
      error: false
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
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(res => {
          const repos = res.map(obj => obj);
          this.setState({ repos, error: false });
        }
      )
      .catch(e => {
        console.log('error fetching: ', e);
        this.setState({ repos: [], error: true });
      })
  }

  render() {
    const showErr = this.state.error;

    return (
      <div className="RepoList">
        <div className="RepoList-header">
          <h2>List of Repos for: {`${this.props.username}`}</h2>
        </div>
        <ErrorComponent error={showErr}/>
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
