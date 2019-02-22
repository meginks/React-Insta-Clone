import React from "react";
import styled from "styled-components";

// styled components

const FormComment = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: none;
`;

const ButtonComment = styled.button`
  width: 10%;
`;

const InputComment = styled.input`
  width: 90%;
  padding: 1rem;
  font-size: 1.5rem;
`;

// Add Comment Component

const AddComment = props => {
  return (
    <FormComment onSubmit={props.submitComment}>
      <InputComment
        type="text"
        value={props.comment}
        onChange={props.handleChanges}
        placeholder="add new comment"
      />
      <ButtonComment onClick={props.submitComment}>. . .</ButtonComment>
    </FormComment>
  );
};

export default AddComment;
