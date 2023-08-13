import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/add" className="nav-link">
              Add
            </Link>
          </Nav>
          <div className="circle"></div>
        </Container>
        
      </Navbar>
    </>
  );
};

export default Header;
