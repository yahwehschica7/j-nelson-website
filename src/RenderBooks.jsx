import React from 'react'

const RenderBooks = () => {

  const myBooks = () => {
        fetch("http://localhost:3001/books")
        .then((res) => res.json())
        .then((book) => {
             book.map((eachBook) => {
            <h1>{eachBook.title}</h1>
            
             
           }
        )} 
      )   
    }

  return (
    <div>{myBooks}</div>
  )
}

export default RenderBooks

{/* <img src={window.location.origin + '/img/myImage.png'} /> */}