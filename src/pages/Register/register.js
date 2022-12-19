import React,{useEffect,useState} from 'react'
import Layout from '../../components/Layout/Layout'
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Input from '../../components/UI/Input/Input'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { signup } from '../../actions';
const Register = () => {
  const navigate=useNavigate()
   const dispatch=useDispatch()
   const user=useSelector(state=>state.user)
   const auth=useSelector(state=>state.auth)
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    const userL=localStorage.getItem('user')
    useEffect(()=>{
      if(userL){
        navigate('/signin')
      }
    },[userL])
    const userSignup=(e)=>{
      e.preventDefault()
      const user1= {firstName,lastName,email,password}
      dispatch(signup(user1))
    }
    if(user.loading){
      return <h1>Loading...</h1>
    }
  return (
    <div>
    <Layout>
    <Container>
    {user.msg}
      <Row style={{marginTop:"50px"}}>
        <Col md={{span:6,offset:3}}>
          <Form onSubmit={userSignup}>   
           <Row>
           <Col md={6}>
               
           <Input
           label='First Name'
           placeholder=' enter first name'
           type='text'
           value={firstName}
           onChange={(e)=>setFirstName(e.target.value)}     
           />
            </Col>
            <Col md={6}>
            <Input
            label='Last Name'
            placeholder='enter last name'
            type='text'
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}      
            />
           </Col>
           </Row>


           <Input
           label='Email'
           placeholder='enter email'
           type='email'
           value={email}
           onChange={(e)=>setEmail(e.target.value)}     
           />

           <Input
           label='Password'
           placeholder='enter password'
           type='text'
           value={password}
           onChange={(e)=>setPassword(e.target.value)}      
           />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </Layout>

    </div>
  )
}

export default Register
