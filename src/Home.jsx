import React from 'react'


const Home = () => {

  function displayCurrentBook() {
    
      fetch("http://localhost:3001/books")
      .then(res => res.json())
      .then(data => {
        data.map((book) => book.title)
      })
    }

  

  return (
    <div>
        <p>
        Welcome to one of the many cyber homes of Jessica Nelson. 
        This is the place where she can devour as much chocolate as she wants 
        without ever gaining a pound or emptying her wallet. 
        She also inhales books, one delicious breath at a time. :-)
        </p>
        <h1>{displayCurrentBook}</h1>
      
    </div>
  )
}

export default Home