import React  from 'react';
import Book from './Book.js'



const BookContainer = props => {

    const displayBook = ()  => {
      return props.value.map((book) =>(     
        <Book
        book={book} key={book.id}
        />
      ))
    }


 
    return (
        <div>
          {displayBook()}
        </div>
       );
          
          
  }


export default BookContainer