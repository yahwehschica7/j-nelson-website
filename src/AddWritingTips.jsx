import React, { useState, useEffect } from 'react'

const AddWritingTips = () => {

  const [advice, setNewAdvice] = useState([])
 

  useEffect(() => {
    fetch("http://localhost:3001/advice")
    .then(res => res.json())
    .then((data) => {
      setNewAdvice(data)
    })
  }, [])

  
  function handleChange(e) {
   console.log(e.target.value)
  }

  function handleAdd(e) {
    e.preventDefault()
    
    fetch("http://localhost:3001/advice", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
  },
    body: JSON.stringify(),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  }

  const adviceList = advice.map((tip) => 
  <p key={tip.id}>
    {tip.writingTip}
  </p>
)

  return (
    <div>
       <h2>Have your own great writing advice? Add it here!</h2>
        <form onSubmit={handleAdd}>
          <input type="text" value="" onChange={handleChange} />
          <input type="submit" />
        </form>
          

          {adviceList}
    </div>
  )
}

export default AddWritingTips