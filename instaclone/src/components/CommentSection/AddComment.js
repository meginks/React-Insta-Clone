import React from 'react';

class AddComment extends React.Component {
    constructor (props) {
        super(props); 
        this.state = {
            comment: ''
        };
    }

    handleChanges = event => this.setState({ [event.target.name] : [event.target.value ]}); 

    submitComment = event => {
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
            />
            <button>Comment</button>
            </form>
        )
    }
}

export default AddComment; 