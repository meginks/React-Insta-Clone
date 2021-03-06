import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import AddComment from "./AddComment";
import Like from "../PostContainer/Like";
import styled from "styled-components";

//
// styled components

const WrapperComment = styled.div`
  display: block;
  text-align: left;
  padding: 1rem;
  font-size: 2rem;
`;

// Comment Section Component

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes,
      comments: props.comment.comments,
      comment: ""
    };
  }

  handleChanges = event => {
    this.setState({ comment: event.target.value });
  };

  submitComment = event => {
    event.preventDefault();
    const newComment = { text: this.state.comment, username: "megan" };
    const comments = this.state.comments.slice();
    comments.push(newComment);

    this.setState({
      comments: [...this.state.comments, newComment],
      comment: ""
    });
  };

  incrementLikes = e => {
    e.preventDefault();
    let likeCount = this.state.likes;
    console.log("like count", likeCount);
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    console.log("this.state.likes", this.state.likes);
    return (
      <div>
        <Like incrementLikes={this.incrementLikes} likes={this.state.likes} />

        <WrapperComment>
          {this.state.comments.map((comment, index) => {
            return <Comment comment={comment} key={index} />;
          })}
          <AddComment
            submitComment={this.submitComment}
            handleChanges={this.handleChanges}
            comment={this.state.comment}
          />
        </WrapperComment>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

CommentSection.defaultProps = {
  comment: []
};

export default CommentSection;
