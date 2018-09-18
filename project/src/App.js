import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './lib/UserGists';


class App extends Component {
  componentDidMount(){
    this.fetchData();
  }
  
  fetchData(){
    fetch('https://api.github.com/users/segdeha/gists')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log('parsing failed', error))
  }
  render() {
    return (
      <div>
        <p>This is where the search bar will be</p>
        <button>Search</button>
        
      </div>
    );
  }
}

export default App;
