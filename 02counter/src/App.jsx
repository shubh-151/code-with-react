import React, { useState } from 'react'
import './App.css'

const App = ()  => {
  
  const [counter, setcounter] = useState(15);

  const addValue = () => {
    if (counter === 20){      
    }
    else{
      setcounter(counter+1)
    }    
  }

  const removeValue = ()=>{
    if(counter===0){
    }
    else{      
      setcounter(counter-1)
    }    
  }

  return (
    <>
      <h1>counter project</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}> Remove Value</button>
    </>
  )
}

export default App
