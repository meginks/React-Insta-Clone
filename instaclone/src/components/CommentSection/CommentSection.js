import React from 'react'; 
import Comment from './Comment';
import PropTypes from 'prop-types';
import AddComment from './AddComment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: props.comments
        };
    }


    addNewComment(event, index) { 
        event.preventDefault();
        const newComment = {  
            username: '', 
            text: ''
        }; 
        this.setState({
            comment: [...this.state.comment, newComment]
        });
    }
    
    render() {
        return (
            <div>
                 {this.props.comment.comments.map((comment, index) => ( <Comment comment={comment} key={index}/> ))}
                 <AddComment addNewComment={this.addNewComment} />  
            </div>

        )
        }


    }

    CommentSection.propTypes = {
        comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
        )
    };    

    CommentSection.defaultProps = {
        comment: []
    }; 


export default CommentSection; 