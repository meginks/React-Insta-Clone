import React from 'react'; 
import Comment from './Comment';
// import PropTypes from 'prop-types';
import AddComment from './AddComment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: props.comment.comments
        };
    }


    addNewComment(event, index) { 
        console.log('is this working');
        event.preventDefault();
        const newComment = {  
            username: '', 
            text: ''
        }; 
        console.log("please work", this.state.comment);
        this.setState({
            comment: [...this.state.comment, 
            {
                text: this.state.comment.text,
                username: "username"
              } ]
        });
    };
    
    render() {
        return (
            <div>
                 {this.props.comment.comments.map((comment, index) => {
                     return  <Comment comment={comment} key={index}/> 
                 })}
                 <AddComment addNewComment={this.addNewComment} />  
            </div>

        )
        }


    }

    // CommentSection.propTypes = {
    //     comments: PropTypes.arrayOf(
    //     PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    //     )
    // };    

    // CommentSection.defaultProps = {
    //     comment: []
    // }; 


export default CommentSection; 