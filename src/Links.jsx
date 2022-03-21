import React, {useState, useEffect} from 'react'

const Links = () => {

    const [links, setLinks] = useState([])

    useEffect(() => {
     fetch("http://localhost:3001/socialmedia")
     .then((res) => res.json())
     .then((data) => {
           setLinks(data)
         }
       )
     }, []) 
    
     const linkList = links.map(link => 
        <ul key={link.id}> 
            <a href={link.url}>
                <button style={{backgroundColor: "orchid"}}>{link.name}</button>
            </a>
        </ul>
       ) 
     
  return (
    <div>
        
        {linkList}
       
    </div>
  )
}

export default Links