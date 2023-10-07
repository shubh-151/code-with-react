import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(19)

  const addValue = ()=>{
    counter= counter+1;  
    setCounter(counter)  
    console.log(counter)
  }

  const removeValue = ()=>{

  }

  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}> Remove Value</button>
    </>
  )
}

export default App
