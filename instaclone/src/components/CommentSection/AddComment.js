import React from 'react';

const AddComment = props => {

        return (
            <form onSubmit={props.submitComment}>
            <input 
            type="text" 
            value={props.comment}
            onChange={props.handleChanges}
            placeholder="add new comment"
            />
            </form>
        )
    }

export default AddComment; 