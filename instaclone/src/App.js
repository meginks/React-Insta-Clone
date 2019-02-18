import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <header className="header"> 
        <p>instalogo</p>
        <p>InstaClone</p> 
        <SearchBar /> 
        <p>Nav</p>
        <p>heart</p>
        <p>person</p>
        </header>
      </div>
    );
  }
}

export default App;
