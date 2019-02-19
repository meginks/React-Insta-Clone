import React from 'react';

class AddComment extends React.Component {
    constructor (props) {
        super(props); 
        this.state = {
            username:'',
            comment: ''
        };
    }

    handleChanges = event => this.setState({ comment: event.target.value }); 

    submitComment = event => {
        event.preventDefault();
        console.log("submit comment" + event.target.value);
        this.setState({ comment: ' '});
        this.props.addNewComment(event, this.state.comment);
    }; 

    render() {
        return (
            <form onSubmit={this.submitComment}>
            <input 
            type="text" 
            value={this.state.comment}
            name="comment"
            onChange={this.handleChanges}
            addNewComment={this.addNewComment}
            placeholder="add new comment"
            />
            <button>. . .</button>
            </form>
        )
    }
}

export default AddComment; 