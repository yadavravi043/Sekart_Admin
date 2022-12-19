import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import {useSelector} from 'react-redux'
const Home = () => {
  const navigate=useNavigate()
  const user=localStorage.getItem('user')
  // const auth=useSelector(state=>state.auth)
   useEffect(()=>{
    if(!user){
     navigate('/signin')
    }
  },[user])
  return (
    <div>
      <Layout>
      <h1 style={{textAlign:"center" ,marginTop:"50px"}}>Welcome in Admin Dashboard</h1>
      </Layout>
    </div>
  )
}

export default Home
