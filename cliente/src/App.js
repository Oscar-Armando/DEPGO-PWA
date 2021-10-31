import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from './assets/img/logo.png';

function App() {
  return (
  <React.StrictMode>
   <Navbar expand="lg" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">
      <img src={logo} width="150" height="40" className="d-inline-block align-top" alt=" "/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav" class="justify-content-center" >
      <Nav className="me-auto">
        <Nav.Link href="#como_funciona">Como funciona</Nav.Link>
        <Nav.Link href="#propietario">Soy propietario</Nav.Link>
        <Nav.Link href="#rentar">¿Quiero rentar?</Nav.Link>
        <Nav.Link href="#user">Mi cuenta</Nav.Link>
      </Nav>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  </React.StrictMode>
  );
}

export default App;
