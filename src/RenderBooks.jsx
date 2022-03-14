import React from 'react'

const RenderBooks = () => {

  const myBooks = () => {
        fetch("http://localhost:3001/books")
        .then((res) => res.json())
        .then((book) => {
             book.map((eachBook) => eachBook.title)
        })    
    }

  return (
    <div>{myBooks()}</div>
  )
}

export default RenderBooks