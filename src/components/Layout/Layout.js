import React from 'react'
import Header from '../../components/Header/Header'
import { Container,Row,Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './layout.css'
const Layout = (props) => {
  const user =localStorage.getItem('user')
  return (
    <div>
         <Header/>
         { props.sidebar ? 
          <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li>
                  <NavLink to={"/"}>home</NavLink>
                </li>
                <li>
                  <NavLink to={"/product"}>product</NavLink>
                </li>
                <li>
                  <NavLink to={"/order"}>order</NavLink>
                </li>
                <li>
                  <NavLink to={"/category"}>category</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: "auto" }}>
            {props.children}
            </Col>
          </Row>
        </Container> 
        :
        props.children
        }
       
    </div>
  )
}

export default Layout
