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
  return !loading ?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'> test</div>
  ):null
}

export default App
