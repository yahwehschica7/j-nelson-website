import React from 'react'

const RenderBooks = ({myBooks}) => {


  const bookList = () => {
    myBooks.map((book) => {
    console.log(book)
    // <h1>{book.title}</h1>,
    // <img src={book.cover} />
  })}

  return (
    <div>
      {bookList}
   </div>
  )
}

export default RenderBooks

{/* <img src={window.location.origin + '/img/myImage.png'} /> */}