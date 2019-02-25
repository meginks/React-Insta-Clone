import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import Styled from 'styled-components';


// Styled Components 

const PostDiv = Styled.div` 
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  padding: 2rem;
`; 

const UsernameBarDiv = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 3rem;
  width: 100%;
  max-width: 500px;
  max-height: 100px;
  height: auto;
 
`;

const UserImage = Styled.img`
  border-radius: 50%;
  padding: 2rem;
  height: 100px;
  width: 100px;
`; 

const PostImage = Styled.img`
 max-width: 500px;
 height: auto;
`;

const ButtonDiv = Styled.div`
  font-size: 3rem;
  padding: 1rem;

`; 

const ButtonDivContainer = Styled.div`
  display: flex;
  flex-direction: row;

`;

const LikesDiv = Styled.div`
  padding: 0 1rem;
  font-size: 1.5rem;
`;

const InteractionSection = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CommentSectionDiv = Styled.div``; 

// Post Component 

const Post = (props) => {
  console.log("postcontainer props", props);
  return (
      <PostDiv key={props.postdata.timestamp}>
        <UsernameBarDiv>
          <UserImage
            src={props.postdata.thumbnailUrl}
            alt={props.postdata.username}
          />
          <p>{props.postdata.username}</p>
        </UsernameBarDiv>
        <PostImage
          src={props.postdata.imageUrl}
          alt="instaclone pic"
        /> 
        <InteractionSection>
        <ButtonDivContainer>
        <ButtonDiv>
        <i className="far fa-heart"></i>
        </ButtonDiv>
        <ButtonDiv>
        <i className="far fa-comment"></i>
        </ButtonDiv>
        </ButtonDivContainer>
        <LikesDiv>{props.postdata.likes} likes</LikesDiv>
        </InteractionSection>
        <CommentSectionDiv>
          <CommentSection comment={props.postdata} />
        </CommentSectionDiv>
        </PostDiv>
      
  );
}

Post.propTypes = {
  postdata: 
    PropTypes.shape({
      // username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          // username: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        })
      )
    })
  
};

Post.defaultProps = {
  postdata: []
};

export default Post;
