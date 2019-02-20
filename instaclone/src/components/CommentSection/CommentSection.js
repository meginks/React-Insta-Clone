import React from 'react'; 
import Comment from './Comment';
// import PropTypes from 'prop-types';
import AddComment from './AddComment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comment.comments,
            comment: ''
        };
    }


    // addNewComment = (event, index) => { 
    //     console.log('is this working');
    //     event.preventDefault();
    //     const newComment = {  
    //         username: '', 
    //         text: ''
    //     }; 
    //     console.log("please work", this.state.comment);
    //     this.setState({
    //         comment: [...this.state.comment, 
    //         {
    //             text: this.state.comments.text,
    //             username: "username"
    //           } ]
    //     });
    // }; 
    
    handleChanges = event => { 
        this.setState({ comment: event.target.value }); 
    };
    submitComment = event => {
        // build out comment object -- then clone comments array -- then push object into new clone -- then set new clone as state and reset our comment string (the CS12 lecture is amazing) 
        event.preventDefault();
        const newComment = { text: this.state.comment, username: 'megan' }; 
        const comments = this.state.comments.slice(); 
        comments.push(newComment);

        this.setstate({comments, comment:''});

        console.log("submit comment" + event.target.value);
    }; 

    render() {
        return (
            <div>
                 {this.state.comments.map((comment, index) => {
                     return  <Comment comment={comment} key={index}/> 
                 })}
                 <AddComment submitComment={this.submitComment} handleChanges={this.handleChanges} comment={this.state.comment} />  
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