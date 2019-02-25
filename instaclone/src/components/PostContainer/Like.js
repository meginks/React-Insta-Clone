import React from 'react'; 
import Styled from 'styled-components'; 

// Styled Components 

const ButtonDiv = Styled.div`
  font-size: 3rem;
  padding: 1rem;

`; 

const ButtonDivContainer = Styled.div`
  display: flex;
  flex-direction: row;

`;

const LikesDiv = Styled.div`
  padding: 0 1rem;
  font-size: 1.5rem;
`;

const LikeCommentSection = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;


// Like Component 

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeposts: props.postdata.likes 
        }
    }

    incrementLikes = () => {
        this.setState({ likes : this.state.likeposts + 1 });
      };

    render() {
        return (
        <LikeCommentSection>
        <ButtonDivContainer>
        <ButtonDiv onClick={this.incrementLikes}>
        <i className="far fa-heart"></i>
        </ButtonDiv>
        <ButtonDiv>
        <i className="far fa-comment"></i>
        </ButtonDiv>
        </ButtonDivContainer>
        <LikesDiv>{this.state.likes} likes</LikesDiv>
        </LikeCommentSection>
        )
    }
};

export default Like; 