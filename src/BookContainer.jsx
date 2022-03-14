import React, {useState, useEffect} from 'react'


const BookContainer = () => {

  const [books, setBooks] = useState([])

  // useEffect here
  useEffect(() => {
    fetch("http://localhost:3001/books")
    .then((res) => res.json())
    .then((data) => {
          console.log(data)
          setBooks(data)
        }
      )
    }, [])   
     
   const bookList = books.map((book) => 
    book.title 
   )

// put map here and state for each book

  return (
    <div>
       <h1>{bookList}</h1>
        
    </div>
  )
}

export default BookContainer
