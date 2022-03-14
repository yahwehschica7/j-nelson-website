import React from 'react'


const BookContainer = () => {

  // useEffect here
  const myBooks = () => {
    fetch("http://localhost:3001/books")
    .then((res) => res.json())
    .then((books) => {
         console.log(books)
    } 
  )   
}  

// put map here and state for each book

  return (
    <div>
        <RenderBooks myBooks={myBooks} />
    </div>
  )
}

export default BookContainer

// return (
//   <div>
//     {bookList}
//  </div>
// )