import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  './Header.css'


const Header = () => {
    return (
        <div className ='header'>
            <Navbar fixed="top" className='header' bg="white" expand="lg">
  <Container  className='header'>
    <Navbar.Brand  className='header'  as={Link} to="home">
    
        Go-Grocery</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="home">Home</Nav.Link>
        <Nav.Link href="#link">Items</Nav.Link>
        <Nav.Link href="#">Blogs</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
       
      </Nav>
      <Nav>
      <Nav.Link href="">About Us</Nav.Link>                   
      <Nav.Link href="">LogIn</Nav.Link>                   
                        
     </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;