import React from 'react'; 
import Comment from './Comment';


function CommentSection (props){
    
        return (
            <div>
                 { props.comment.comments.map((comment, index) => ( <Comment comment={comment} key={index}/> ))}  
            </div>
        )
        }
        

export default CommentSection; 