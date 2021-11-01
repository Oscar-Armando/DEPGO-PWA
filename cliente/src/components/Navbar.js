import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../assets/img/logo.png';
import "../css/styles.css";

function Navigation() {
    return (
     <>
     <Navbar id="barra" expand="lg" bg="light" variant="light">
      <Container>
      <Navbar.Brand href="#home">
        <img src={logo} width="250" height="80" className="d-inline-block align-top" alt="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav" className="pocision">
        <Nav id="items" className="me-auto">
          <Nav.Link href="#como_funciona">Como funciona</Nav.Link>
          <Nav.Link href="#propietario">Soy propietario</Nav.Link>
          <Nav.Link href="#rentar">¿Quiero rentar?</Nav.Link>
          <Nav.Link href="#user">Mi cuenta</Nav.Link>
        </Nav>
       </Navbar.Collapse>
      </Container>
     </Navbar>
     </>
    );
  }
  
  export default Navigation;
  