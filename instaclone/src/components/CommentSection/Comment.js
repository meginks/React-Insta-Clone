import React from 'react';


function Comment(props){
    return (
        <div>
            {props.comment.username} 
            {props.comment.text}
        </div>
    )
}


export default Comment;