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
padding: 20px;

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

  incrementLikes = () => {
    let likes = this.state.postdata.likes;
    this.setState({ likes });
  };

  render() {
    return (
      <PostsPageDiv>
        <HeaderDiv>
          <IconDiv>
            <i className="fab fa-instagram" /> {/** instagram logo */}
          </IconDiv>
          <IconDiv>
            <InstagramName src="/assets/instagramname.png" alt="Instagram" />
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
          <Post key={post.imageUrl} postdata={post} />
        ))}
      </PostsPageDiv>
    );
  }
}

export default PostsPage;
