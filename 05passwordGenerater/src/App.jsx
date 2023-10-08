import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [charAllowed, setCharAllowed] = useState(false)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [passoword, setPassoword] = useState();
  
  
  return (
    <h1 className="text-4xl text-center">Passoword generator</h1>
  )
}

export default App
