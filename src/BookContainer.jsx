import React from 'react'
import RenderBooks from './RenderBooks'

const BookContainer = () => {

  const myBooks = () => {
    fetch("http://localhost:3001/books")
    .then((res) => res.json())
    .then((book) => {
         <h1>{book}</h1>
    } 
  )   
}  
  return (
    <div>
        <RenderBooks myBooks={myBooks} />
    </div>
  )
}

export default BookContainer