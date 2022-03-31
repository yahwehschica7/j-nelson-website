
// Type word, click on submit button, increments the counter by the word length.

import React, {useState} from 'react'


const Counter = () => {

    const [word, setWord] = useState("")
    const [count, setCount] = useState(0)
    

    function handleChange(e) {
        setWord(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newCount = word.length + count
        setCount(newCount)
        setWord("")
    }
 
    return (
        <div>
            <h1>{count}</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Word:
                    <input type="text" value={word} onChange={handleChange}/>
                </label>
                <input type="submit" style={{backgroundColor: "salmon"}}/>
            </form>

        </div>
    )
}

export default Counter

// 1. have a number and a header
// 2. have a form
// 3. in the form, can type a word and the submit will update the word's length
// 
