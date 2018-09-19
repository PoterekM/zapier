import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserGists} from './lib/UserGists';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
    let username = this.state.username;
    event.preventDefault();
    UserGists(username);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.username} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;