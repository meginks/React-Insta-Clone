import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

function PostContainer(props) {
  return (
    <> {console.log(props)}
        <div key={props.postdata.timestamp} className="post">
          <img src={props.postdata.thumbnailUrl} alt={props.postdata.username} />
          <p>{props.postdata.username}</p>
          <img
            src={props.postdata.imageUrl}
            alt=" {postdata.username}'s instaclone pic"
          />
          <div>heart</div>
          <div>bubble</div>
          <div>{props.postdata.likes} likes</div>
          <div className="comment-section">
          {console.log(props)}
           <CommentSection comment={props.postdata} />
          </div>
        </div>
    </>
  );
}

// PostContainer.propTypes = {
//   postdata: PropTypes.arrayOf(
//     PropTypes.shape({
//       username: PropTypes.string.isRequired,
//       thumbnailUrl: PropTypes.string.isRequired,
//       imageUrl: PropTypes.string.isRequired,
//       likes: PropTypes.number.isRequired,
//       timestamp: PropTypes.string.isRequired,
//       comments: PropTypes.arrayOf(
//         PropTypes.shape({
//           username: PropTypes.string.isRequired,
//           text: PropTypes.string.isRequired
//         })
//       )
//     })
//   )
// };

// PostContainer.defaultProps = {
//   postdata: []
// };

export default PostContainer;
