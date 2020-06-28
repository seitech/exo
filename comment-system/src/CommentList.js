import React, { Component } from 'react';
import DelComment from "./DelComment";
import Delete from "./Delete";

class CommentList extends Component {
    state = {  }
    render() { 
        let commentsList = this.props.comments.map(delComment => {
            return <li key={delComment.id} >
                {delComment.name}: {delComment.message}
                <DelComment delComment={delComment} />
                <button onClick={() => {this.props.deleteDelComment(delComment.id)}} ><Delete/></button>
                </li>
         })

        return (
            <ul className="comment-list">
                {commentsList}
            </ul>
          );
    }
}
 
export default CommentList;