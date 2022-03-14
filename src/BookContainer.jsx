import React, {useState, useEffect} from 'react'


const BookContainer = () => {

  const [books, setBooks] = useState([])

  // useEffect here
  useEffect(() => {
    fetch("http://localhost:3001/books")
    .then((res) => res.json())
    .then((data) => {
        data.map((book) => {
          console.log(book)
        }
        
      )
         
    } 
  )   
  
}, [])  

// put map here and state for each book

  return (
    <div>
        <h1>Books</h1> 
    </div>
  )
}

export default BookContainer
