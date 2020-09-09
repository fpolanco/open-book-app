import React, { Component } from 'react';
import Search from './Search';
import request from 'superagent';
import BookCardContainer from './BookCardContainer'


class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: ''
        }
    }

    searchBook = (e) => {
     e.preventDefault();
     request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField})
      .then((data) => {
          console.log(data)
          const cleanData = this.cleanData(data)
          this.setState({ books: cleanData })
      })
    }

    //set state for search input
    handleSearch = (e) => {
        //console.log(e.target.value)
        this.setState({ searchField: e.target.value})
    }

    handleSort = (e) => {
        console.log(e.target.value)
        this.setState({ sort: e.target.value })
    }

    cleanData = (data) => {
        //setting default properties for books w/o used properties
        const cleanedData = data.body.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty('publishedDate') === false) 
            { book.volumeInfo['publishedDate'] = '0000' }

            else if(book.volumeInfo.hasOwnProperty('imageLinks') === false) 
            { book.volumeInfo['imageLinks']= { thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIM3fqvuBBZVd-tPsR1fgnUVEsPjVzk3iBtg&usqp=CAU'}
            }

            return book;
        })

        return cleanedData
    }


    render() {
        const sortedBooks = this.state.books.sort((a,b) => {
            if(this.state.sort === 'Newest') {
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
            }
            else if(this.state.sort === 'Oldest') {
                return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
            }
        })
        return(
            <div>
             <Search   searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
             <BookCardContainer books={sortedBooks} />
            </div>
        )
    }
}

export default Books;