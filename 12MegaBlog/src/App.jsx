import { useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'

function App() {

  const [loading, setLoading] = useState(false);
  const dispatch  = useDispatch()
  return (
    <>
      <h1>hello react with app right</h1>
    </>
  )
}

export default App
