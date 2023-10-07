import { useState } from 'react'
import './App.css'

const App = ()  => {
  let [counter, setCounter] = useState(19)

  const addValue = () => {
    counter = counter+1;  
    setCounter(counter)
  }

  const removeValue = ()=>{
    counter = counter-1;
    setCounter(counter)
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
