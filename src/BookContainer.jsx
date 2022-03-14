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
    <p> 
        <img src={book.cover}/>
        <h4>{book.title}</h4>
        <a href={book.link}>
        <button>Buy Now</button>
        </a>
    </p>
   )

  return (
    <div>
       {bookList}
    </div>
  )
}

export default BookContainer
