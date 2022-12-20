import React from 'react'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
const Product = () => {
const navigate=useNavigate()
    useEffect(()=>{
        if(!(localStorage.getItem('user'))){
            navigate('/signin')
        }
    })
  return (
    <div>
      <Layout sidebar>
      <h1>product</h1>
      </Layout>
    </div>
  )
}

export default Product
