import React from 'react'; 
import Comment from './Comment';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: props.comments
        };
    }
    
    render() {
        return (
            <div>
                 {this.props.comment.comments.map((comment, index) => ( <Comment comment={comment} key={index}/> ))}  
            </div>
        )
        }
        
    }
export default CommentSection; 