import React,{useState, useEffect} from 'react'
import {Container,PostForm} from '../components'
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const [posts, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useState(()=>{
        if (slug) {
            appwriteService.getPost(slug).then((post)=>{
                if (post) {
                    setPosts(post)
                }
            })
        } else{
            navigate("/")
        }
    },[slug, navigate])
  return (
    <div>
      
    </div>
  )
}

export default EditPost
