import React, {useState, useEffect} from 'react'


const BookContainer = () => {

  const [books, setBooks] = useState([])

   useEffect(() => {
    fetch("http://localhost:3001/books")
    .then((res) => res.json())
    .then((data) => {
          console.log(data)
          setBooks(data)
        }
      )
    }, [])   
     
   const bookList = books.map(book => 
    <p> {book.title} 
      <button onClick={book.link}>Buy Now</button>
      <img src={book.cover}/>
    </p>
   )

// put map here and state for each book

  return (
    <div>
       <h1>{bookList}</h1>
        
    </div>
  )
}

export default BookContainer
