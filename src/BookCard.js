import React from 'react'
import { Container } from 'semantic-ui-react';


const BookCard = (props) => {

    
    return(
        <div className="card-container">
          <img src={props.image} alt="" />
          <div className="desc">
             <h2>{props.title}</h2> 
             <h3>Author: {props.author}</h3>
             <p>Published: {props.published === '0000' ? 'Not available' : props.published.substring(0,4)}</p>
             <p>{props.genre}</p>
             <p>{props.rating}</p>
          </div>
        </div>
    )
}


export default BookCard;