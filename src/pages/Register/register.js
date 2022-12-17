import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Input from '../../components/UI/Input/Input'
const Register = () => {
  return (
    <div>
    <Layout>
    <Container>
      <Row style={{marginTop:"50px"}}>
        <Col md={{span:6,offset:3}}>
          <Form>   
           <Row>
           <Col md={6}>
               
           <Input
           label='First Name'
           placeholder=' enter first name'
           type='text'
           value=''
           onChange={()=>{}}      
           />
            </Col>
            <Col md={6}>
            <Input
            label='Last Name'
            placeholder='enter last name'
            type='text'
            value=''
            onChange={()=>{}}      
            />
           </Col>
           </Row>


           <Input
           label='Email'
           placeholder='enter email'
           type='email'
           value=''
           onChange={()=>{}}      
           />

           <Input
           label='Password'
           placeholder='enter password'
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

    </div>
  )
}

export default Register
