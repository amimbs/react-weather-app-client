import { useEffect, useState } from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import Home from './components/Home';
import ErroPage from './components/ErrorPage';

//bootstrap imports
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'



export default function App() {

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link href="#Register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login'></Route>
        <Route path='/Register'></Route>
        <Route path='*' element={<ErroPage />}></Route>
      </Routes>
    </Router>
  );
}


