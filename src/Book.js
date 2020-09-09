import React from 'react';
import CommentCard from './CommentCard'


const Book = (props) => {
console.log(props.book.comments)
    const displayComments = () => {
        return props.book.comments.map((comment) =>(     
            <CommentCard
            comment={comment} key={comment.id}
            />
          ))
    }

    
        return (
        <div >
            
            <img  src={props.book.image_url} alt={props.book.name} /> <br></br>
            
            
            <h4 className="title">Title:{props.book.name}<br></br>
            Author:{props.book.author} <br></br>
            </h4> <br></br>
            Description:{props.book.description} <br></br>
            <em>{props.book.genre}</em><br></br>
            <div>{displayComments()}</div>
            
//       Rating:{props.book.comments.rating}
//       
//     </div>
            //newcommentform
        
        )

//         <div class="ui four cards">
//   <div class="card">
//     <div class="image">
//       <img src={props.book.image_url}>
//     </div>
//     <div class="extra">
//       Rating:
//       <div class="ui star rating" data-rating="4"></div>
//     </div>
//  </div>
//  </div>
}

export default Book;