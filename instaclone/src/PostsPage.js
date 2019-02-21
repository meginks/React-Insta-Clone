import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import Post from './components/PostContainer/Post';
import './App.css';

class PostsPage extends React.Component {
  constructor(props) {
    console.log('constructor running');
    super(props); 
    this.state = {
      postdata: [], 
    };
  }

  componentDidMount() {
    console.log('cdm running')
    this.setState({ postdata: dummyData });
  } 

  incrementLikes = () => {
    let likes = this.state.postdata.likes; 
    this.setState({ likes })
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
        <Post key={post.imageUrl} postdata={post} />
        ))}
      </div>
    );
  }
}

export default PostsPage;
