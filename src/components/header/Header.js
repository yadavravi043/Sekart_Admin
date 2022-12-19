import React,{useState,useEffect} from 'react'
import { Navbar,Nav,Container} from 'react-bootstrap'
import { NavLink,Link } from 'react-router-dom'
const Header = () => {
  //  const[user,setUser]=useState('')
  //  useEffect(()=>{
  //    if(localStorage.getItem('user')){
  //     setUser(localStorage.getItem(JSON.stringyfy(user)))
  //     console.log("user test",user)
  //    }
  //  },[user])
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container fluid>
      <Link to="/" className='navbar-brand'>Admin Dashboard</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
            </NavDropdown>*/}
        </Nav>
        <Nav>
        <li className='nav-item'>
        <NavLink to='/signin' className='nav-link'>signin</NavLink>
        </li>
        <li className='nav-item'>
        <NavLink to='/signup' className='nav-link' >signup</NavLink>
        </li>
         
      
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default Header
