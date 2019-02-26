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
align-items: space-around;
font-size: 4rem;
`;

const InstagramName = Styled.img``;

const PostsPageDiv = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconDiv = Styled.div`
padding: 2rem;
font-size: 3rem;

`;

// PostsPage Component (formerly App before Authentication page added)

class PostsPage extends React.Component {
  constructor(props) {
    console.log("constructor running");
    super(props);
    this.state = {
      postdata: []
    };
  }

  componentDidMount() {
    console.log("cdm running");
    this.setState({ postdata: dummyData });
  }

  incrementLikes = (e) => {
    this.setState({ newLikes : this.state.postdata.likes + 1 });
  };

  render() {
    return (
      <PostsPageDiv>
        <HeaderDiv>
          <IconDiv>
            <i className="fab fa-instagram" /> {/** instagram logo */}
          </IconDiv>
          <IconDiv>
            <InstagramName src="../instagramname.png" alt="Instagram" />
          </IconDiv>
          <SearchBar />
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
        {this.state.postdata.map(post => (
          <Post key={post.imageUrl} postdata={post} incrementLikes={this.incrementLikes} newLikes={this.state.newLikes} />
        ))}
      </PostsPageDiv>
    );
  }
}

export default PostsPage;
