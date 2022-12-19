import React,{useState,useEffect} from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/UI/Input/Input";
import { login } from "../../actions";
import { useNavigate } from "react-router-dom";
import {useSelector}from 'react-redux'
import{useDispatch} from 'react-redux'
const Login = () => {
  const navigate=useNavigate()
   const dispatch=useDispatch()
   const auth=useSelector(state=>state.auth)
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    // const[error,setError]=useState('')
      const user=localStorage.getItem('user')
    useEffect(()=>{
      if(user){
        navigate('/')
      }
    },[user])
  const userLogin=(e)=>{
    e.preventDefault()
    const user={
        email,
        password
    }
   dispatch(login(user))
  }


  return (
    <>
      <Layout>
        <Container>
          <Row style={{marginTop:"50px"}}>
            <Col md={{span:6,offset:3}}>
              <Form onSubmit={userLogin}>
              <Input
              label='Email'
              placeholder='email'
              type='email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}      
              />

              <Input
              label='Password'
              placeholder='password'
              type='password'
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
    </>
  );
};

export default Login;
