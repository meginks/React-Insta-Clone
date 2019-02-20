import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  constructor() {
    console.log('constructor running');
    super(); 
    this.state = {
      postdata: [], 
      counter: 0
    };
  }

  componentDidMount() {
    console.log('cdm running')
    this.setState({ postdata: dummyData });
  } 

  incrementLikes = () => { 
    this.setState = ((prevState, props) => {
      return {
        counter: prevState.counter + 1
      };
    });

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
        {this.state.postdata.map((post) => (
        <PostContainer key={post.imageUrl} postdata={post} />
        ))}
      </div>
    );
  }
}

export default App;
