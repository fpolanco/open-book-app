import React, { Component } from 'react'

class CommentCard extends Component{
    
    
    render(){
        return(
            <div>
            <p>{this.props.comment.content}</p>
            <p>Rating: {this.props.comment.rating}</p>
            <button> {this.props.comment.likes} </button>  
            </div>
        )
    }
}

export default CommentCard;