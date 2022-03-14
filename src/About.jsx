import React from 'react'

const About = () => {



  const currentRelease = () => {
    fetch("http://localhost:3001/books")
    .then(res => res.json())
    .then(data => displayBooks(data))
  }
      
    
  return (
    <div>
        
        <p>
        Welcome to one of the many cyber homes of Jessica Nelson. 
        This is the place where she can devour as much chocolate as she wants 
        without ever gaining a pound or emptying her wallet. 
        She also inhales books, one delicious breath at a time. :-)
        {currentRelease()}
        </p>
        


    </div>
        
    
  )
}

export default About