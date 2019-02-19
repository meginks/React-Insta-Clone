import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import "./postcontainer.css";
const PostContainer = (props) => {
  return (
    <>
      {" "}
      {console.log(props)}
      <div key={props.postdata.timestamp} className="post">
        <div className="username-bar">
          <img
            className="user-image"
            src={props.postdata.thumbnailUrl}
            alt={props.postdata.username}
          />
          <p>{props.postdata.username}</p>
        </div>
        <img
          className="post-image"
          src={props.postdata.imageUrl}
          alt=" {postdata.username}'s instaclone pic"
        />
        <div className="icon-bar">
          <div>heart</div>
          <div>bubble</div>
        </div>
        <div>{props.postdata.likes} likes</div>
        <div className="comment-section">
          {console.log(props)}
          <CommentSection comment={props.postdata} />
        </div>
      </div>
    </>
  );
}

PostContainer.propTypes = {
  postdata: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        })
      )
    })
  )
};

PostContainer.defaultProps = {
  postdata: []
};

export default PostContainer;
