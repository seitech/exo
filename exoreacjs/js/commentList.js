import React, { Component } from 'react';

class CommentList extends Component {
    state = {  }
    render() { 
        let commentsList = this.props.comments.map(comment => {
            return <li>{comment.name}: {comment.message}</li>
        })

        return ( 
            <ul>{commentsList}</ul>
         );
    }
}
 
export default CommentList;