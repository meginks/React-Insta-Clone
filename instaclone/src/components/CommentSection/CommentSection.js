import React from 'react'; 

function CommentSection (props){
    
        return (
            <div>
                {props.postdata.comments.username} {props.postdata.comments.text}
            </div>
        )
        }

export default CommentSection; 