import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/UI/Input/Input";
const Login = () => {
  return (
    <>
      <Layout>
        <Container>
          <Row style={{marginTop:"50px"}}>
            <Col md={{span:6,offset:3}}>
              <Form>
              <Input
              label='Email'
              placeholder='email'
              type='email'
              value='email'
              onChange={()=>{}}      
              />

              <Input
              label='Password'
              placeholder='password'
              type='text'
              value='password'
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
