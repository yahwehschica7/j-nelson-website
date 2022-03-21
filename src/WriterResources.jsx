import React, {useState, useEffect} from 'react'
import AddWritingTips from "./AddWritingTips"


const WriterResources = () => {
  const [resources, setResources] = useState([])
 
  useEffect(() => {
    fetch("http://localhost:3001/resources")
    .then(res => res.json())
    .then((data) => {
      setResources(data)
    })
  }, [])

  const resourceList = resources.map((resource) => 
    <ul key={resource.id}>
      <h2>{resource.name}</h2>
      <a href={resource.link}>
        <button style={{backgroundColor: "orchid"}}>Read Now</button>
      </a>
    </ul>
  )
  return (
    <div>
      
      <h2>Do you want to learn more about publishing? 
        Check out these amazing resources to learn more!
        {resourceList}
      </h2>
        <h3>Writing advice:
        <AddWritingTips />
        </h3>
        
        
    </div>
  )
}

export default WriterResources