import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  './Header.css'


const Header = () => {
    return (
        <div>
          <nav className=''>

          
            <Navbar bg="dark" variant="dark" fixed="top" className=''  expand="lg">
  <Container  className=''>
    <Navbar.Brand  className=''  as={Link} to="home">
    
        Go-Grocery</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="home">Home</Nav.Link>
        <Nav.Link href="home#items">Inventory Items</Nav.Link>
        
        <Nav.Link as={Link} to="blog">Blogs</Nav.Link>
        <Nav.Link as={Link} to="contact">Contact</Nav.Link>
       
      </Nav>
      <Nav>
      <Nav.Link as={Link} to="about">About Us</Nav.Link>                   
      <Nav.Link as={Link} to="mangeitems">Manage Items</Nav.Link>                   
      <Nav.Link as={Link} to="login">LogIn</Nav.Link>                   
                        
     </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</nav>   
</div> 
    );
};

export default Header;