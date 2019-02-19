import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      postdata: dummyData
    };
  }

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
        <PostContainer postdata={this.state.postdata} />
      </div>
    );
  }
}

export default App;
