import React, { Component } from 'react';
import './UserName.css';

class UserName extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setUsername(event.target.value);
  }

  render() {
    return (
      <div className="UserName">
        <div className="UserName-header">
          <h2>Welcome to Repo-List</h2>
          Enter the github username you'd like to the list
          of repo for:
        </div>
        <div className="UserName-body">
          <form>
            <div>
              <input id="username_input" type="text" onChange={this.handleChange} />
            </div><div>
              <input id="submit_button" type="submit" 
                     value="List Repos" onChange={this.handleChange} />
            </div>
          </form>
        </div>
        <div className="UserName-error" >
        </div>
      </div>
    );
  }
}

export default UserName;
