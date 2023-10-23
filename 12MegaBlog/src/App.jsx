import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from "./store/authSlice"
import './App.css'

function App() {

  const [loading, setLoading] = useState(false);
  const dispatch  = useDispatch()


  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))        
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>  setLoading(false))
  },[])
  return (
    <>
      <h1>hello react with app right</h1>
    </>
  )
}

export default App
