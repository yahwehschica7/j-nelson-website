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

  const adviceList = advice.map((tip) => 
  <li key={tip.id}>
    <h4>{tip.writingTip}</h4>
  </li>
)

  function handleChange(e) {
    e.preventDefault()
    handleAdd(e.target.value)
  }

  function handleAdd() {
    fetch("http://localhost:3001/advice", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
  },
    body: JSON.stringify(handleChange),
  })
  .then(response => response.json())
  .then(data => {
    console.log(...advice, data);
  })
  }

    
  return (
    <div>
      {adviceList}
       <h2>Have your own great writing advice? Add it here!</h2>
        <input type="text" value={""} onChange={handleChange} />
          <button type="button" onClick={handleAdd}>
            Add
          </button>
    </div>
  )
}

export default AddWritingTips