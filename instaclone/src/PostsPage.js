import React, { Component } from "react";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import Post from "./components/PostContainer/Post";
import Styled from "styled-components";

// Styled Components

const HeaderDiv = Styled.header`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: flex-start;
font-size: 4rem;
`;

const InstagramName = Styled.div`
font-family: 'Pacifico', cursive;
font-size: 3rem;
font-weight: lighter;
border-left: 2px solid black;
padding-left: 3rem;
`;

const PostsPageDiv = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconDiv = Styled.div`
padding: 2rem;
font-size: 3.5rem;

`;

// PostsPage Component (formerly App before Authentication page added)

class PostsPage extends Component {
  constructor(props) {
    console.log("constructor running");
    super(props);
    this.state = {
      postdata: [], 
      searchData: []
    };
  }

  componentDidMount() {
    console.log("cdm running");
    this.setState({ postdata: dummyData });
  }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("component did update working", "prevProps", prevProps, "prevState", prevState);
// //  I'm not sure if this is something I'd need or not to get my like button to work. 
//     if (prevProps.likes !== this.props.likes) {
//       console.log("Oh the props they are a changing. . . oh the props they are a changing!");
//     } 
//     if (prevState.postdata.likes !== this.state.postdata.likes) {
//       console.log("likes they are a changing. . . oh the likes they are a changing!");
//     }
//   } 

  searchBarHandler = (e) => {
    const posts = this.state.postdata.filter((post) => {
      if (post.username.includes(e.target.value)) {
        return post
      }
    });
    this.setState({
      searchData: posts
    })
  }

  render() {
    console.log("searchData", this.state.searchData);
    return (
      <PostsPageDiv>
        <HeaderDiv>
          <IconDiv>
            <i className="fab fa-instagram" /> {/** instagram logo */}
          </IconDiv>
          <IconDiv>
            <InstagramName>Instagram</InstagramName>
          </IconDiv>
          <SearchBar postdata={this.state.postdata} search={this.searchBarHandler} />
          <IconDiv>
            <i className="far fa-compass" /> {/** navigation button */}
          </IconDiv>
          <IconDiv>
            <i className="far fa-heart" /> {/** likes button */}
          </IconDiv>
          <IconDiv>
            <i className="far fa-user" /> {/** followers button */}
          </IconDiv>
        </HeaderDiv>
        <div>
        {this.state.searchData.length > 0 ? this.state.searchData.map(post => { 
          return (
          <Post key={post.imageUrl} postdata={post} incrementLikes={this.incrementLikes} likes={this.state.postdata.likes} />
        )}) : this.state.postdata.map(post => (
          <Post key={post.imageUrl} postdata={post} incrementLikes={this.incrementLikes} likes={this.state.postdata.likes} />
        ))} 
        </div>
      </PostsPageDiv>
    );
  }
}

export default PostsPage;


// // this.state.postdata.map(post => (
//   <Post key={post.imageUrl} postdata={post} incrementLikes={this.incrementLikes} likes={this.state.postdata.likes}  