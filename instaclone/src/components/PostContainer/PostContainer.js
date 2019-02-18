import React from 'react';
import Post from '../Post/Post';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {
    render() {
        return (
            <div className="post-container">
            <Post /> 
            <CommentSection /> 
            </div>
        )
    }
}

export default PostContainer; 