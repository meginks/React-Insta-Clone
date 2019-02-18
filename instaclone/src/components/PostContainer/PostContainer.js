import React from 'react';
import Post from '../Post/Post';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    
    return (
        <>
        {props.postdata.map(postdata => (
            <div key={postdata.id} className="post">
            <img src={postdata.img} alt={postdata} /> 
            </div> 
        ))}
        <Post /> 
        <CommentSection /> 
       </>
    )

}

export default PostContainer; 