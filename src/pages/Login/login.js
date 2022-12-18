import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/UI/Input/Input";
import { login } from "../../actions";
import{useDispatch} from 'react-redux'
const Login = () => {
   const dispatch=useDispatch()

  const userLogin=(e)=>{
    e.preventDefault()
    const user={
        email:"ravi18016925@gmail.com",
        password:"123456"
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
              value=''
              onChange={()=>{}}      
              />

              <Input
              label='Password'
              placeholder='password'
              type='text'
              value=''
              onChange={()=>{}}      
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
