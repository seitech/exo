import React, { Component } from 'react';

class DelComment extends Component {
    state = {  }
    render() { 
        let delComment = this.props.delComment;

        return ( 
            <div className="delComment">
                <p>{delComment.title}</p> 
            </div>
        );
    }
}
 
export default DelComment;