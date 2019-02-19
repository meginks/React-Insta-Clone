import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

function PostContainer(props) {
    
    return (
        <>
        {props.postdata.map(postdata => (
            <div key={postdata.timestamp} className="post">
            <img src={postdata.thumbnailUrl} alt={postdata.username} /> 
            <p>{postdata.username}</p>
            <img src={postdata.imageUrl} alt= " {postdata.username}'s instaclone pic" /> 
            <div>heart</div>
            <div>bubble</div>
            <div>{postdata.likes} likes</div>
            <div className="comment-section">
            {props.postdata.map((postdata, index ) =>
              <div key={index}>
            <CommentSection /> 
            </div> )} 
            </div>
            </div> 
        ))}
       </>
    )

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