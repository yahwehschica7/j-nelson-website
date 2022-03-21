import React, {useState, useEffect} from 'react'


const BookContainer = () => {

  const [books, setBooks] = useState([])

   useEffect(() => {
    fetch("http://localhost:3001/books")
    .then((res) => res.json())
    .then((data) => {
         setBooks(data)
        }
      )
    }, []) 
    
  
     
   const bookList = books.map(book => 
    <ul key={book.id}> 
        <img src={book.cover}/>
        <h4>{book.title}</h4>
        <a href={book.link}>
        <button style={{backgroundColor: "orchid"}}>Buy Now</button>
        </a>
    </ul>
   )

  return (
    <div>
       {bookList}
    </div>
  )
}

export default BookContainer
