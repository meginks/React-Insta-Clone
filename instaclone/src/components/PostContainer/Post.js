import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import "./postcontainer.css";


const Post = (props) => {
  console.log("postcontainer props", props);
  return (
    <div>
      {console.log("WORK", props)}
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
          alt="instaclone pic"
        />
        <div className="icon-bar">
          <div>heart</div>
          <div>bubble</div>
        </div>
        <div>{props.postdata.likes} likes</div>
        <div className="comment-section">
          <CommentSection comment={props.postdata} />
        </div>
      </div>
      </div>
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
