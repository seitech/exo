import React, { Component } from 'react';
import './App.scss';

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import AdminMode from "./AdminMode";

import { v4 as uuidv4 } from 'uuid';



class Comment extends Component {
    state = { 
        comments: []
     }

    addComment = (name, message) => {
        let newComment = {
          id: uuidv4(),
          name: name,
          message: message
        }
        this.setState({
          comments: [...this.state.comments,newComment]
        })
      }

      deleteDelComment = (id) => {
          comments.delete(id)
          .then(res =>{
              let comments = this.state.comments.filter(comments => comments.id !== id);
              this setState({
                  comments: comments
              })
          })
      }
     
    render() { 
        return (
            <div className="App container">

            <AdminMode />
    
            <CommentForm addComment={this.addComment} />
    
            <CommentList comments={this.state.comments} 
            deleteDelComment={this.deleteDelComment} />
            
          </div>
          );
    }
}
 
export default Comment;