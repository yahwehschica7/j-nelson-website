import React, { useState } from 'react'

const AddWritingTips = () => {

  const [advice, newAdvice] = useState("")
 
  const adviceList = advice.map((advice) => 
    <li key={advice.id}>
      <h2>{advice.writingTip}</h2>
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
    newAdvice(data);
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