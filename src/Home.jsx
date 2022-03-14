import React from 'react'
import About from './About';

const Home = () => {

  function displayCurrentBook() {
    
      fetch("http://localhost:3001/books")
      .then(res => res.json())
      .then(data => {
        data.map((data) => data.title)
      })
    }

  

  return (
    <div>
      <About displayCurrentBook={displayCurrentBook} />
      
    </div>
  )
}

export default Home