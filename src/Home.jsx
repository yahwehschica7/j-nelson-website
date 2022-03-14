import React from 'react'


const Home = ({myBooks}) => {

  

  return (
    <div>
        <hr/> 
          <p>
          Welcome to one of the many cyber homes of Jessica Nelson. </p>
          <p>This is the place where she can devour as much chocolate as she wants 
          without ever gaining a pound or emptying her wallet. 
          She also inhales books, one delicious breath at a time. 😊
          </p>
          {myBooks}
          

          
      
    </div>
  )
}

export default Home