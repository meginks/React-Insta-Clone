import React from 'react'; 

class CommentSection extends React.Component {
    render (props) {
        return (
            <>
            {props.postdata.map(postdata => ( {
                return (
                <div key={postdata.timestamp}>
                    {postdata.comments.username}
                    {postdata.comments.text}
                </div>  )  
            } ))
            </>
        )
    }
}

export default CommentSection; 