import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import ErroPage from './components/ErrorPage';
import Register from './components/Register';
import Login from './components/Login';


export default function App() {

  return (
    <Router>

      {/* Routes tries to find the first and only componet that we specify */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Creat Account</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='*' element={<ErroPage />} />
      </Routes>
    </Router>
  );
}

