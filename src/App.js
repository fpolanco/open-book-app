import React, {useState, useEffect}  from 'react';
import './App.css';
// import Sidebar from './Sidebar'
// import BookContainer from './BookContainer';
// import Book from './Book'
import Header from './Header'
import Books from './Books'

const App = () => {
  const [value, setValue] = useState([])
  

 
 

useEffect(() => {
  fetch("http://localhost:3000/books")
   .then(r => r.json())
   .then(data => {
       setValue(data)
       console.log("data", data)}
       )
  }, [] 
  );


  
           
        
  // }
   
  return (
 <div >
  <Header/>
  <Books/>
 {/* <BookContainer value={value} /> */}
 
 </div>
  );
}


export default App;
