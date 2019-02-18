import React from 'react';
import Post from '../Post/Post';
import CommentSection from '../CommentSection/CommentSection';

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
            <CommentSection /> 
            </div> 
        ))}
       </>
    )

}

export default PostContainer; 