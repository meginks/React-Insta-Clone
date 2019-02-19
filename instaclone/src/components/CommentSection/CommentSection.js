import React from 'react'; 
import Comment from './Comment';
function CommentSection (props){
    
        return (
            <div>
                <p>this is a test</p> 
                 { props.comment.comments.map((comment) => ( <Comment comment={comment}/> ))}  
            </div>
        )
        }
        

export default CommentSection; 