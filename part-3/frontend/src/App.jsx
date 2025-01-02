import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
const [jokes , setjokes ] = useState([]) 


 useEffect(() =>{
     axios.get('/api/jokes')
     .then((response) => {
      setjokes(response.data) ; 
     }
    
    )
     .catch((error) =>{
         console.log(error)
     })
 } , [])
  return (
    <>
     <h1>hii frontend</h1>
     <p>JOKES : {jokes.length}</p>


     {
         jokes.map((joke , index ) => (

          <div key ={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
         )
        
         )

     }
    </>
  )
}

export default App
