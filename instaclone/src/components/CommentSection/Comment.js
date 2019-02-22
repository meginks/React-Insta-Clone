import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


// Styled Components

const WrapperComment = styled.div`
    display: block;
    font-size: 2rem;
    `;

const UsernameComment = styled.span`
    font-weight: bold;
    font-size: 1rem;
    `;

const TextComment = styled.p`
    padding: .2rem;
    `;



// Comment Component 
function Comment(props){
    return (
        <WrapperComment>
            <TextComment>
           <UsernameComment> {props.comment.username} </UsernameComment> 
            {props.comment.text}
            </TextComment>
        </WrapperComment>
    )
}

// PropTypes 

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}

export default Comment;