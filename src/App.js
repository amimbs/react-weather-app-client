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
// import Navigation from "./components/NavBar";
// import LeftLink from "./components/LeftLink";


export default function App() {

  return (
    <Router>
      {/* <Navigation leftLink={<LeftLink />}/> */}
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

// 11:14 / 32:58 Form Validation - Full Stack Web Development Course [4] | ReactJS, NodeJS, MySQL
// starts using formik for form submission and validation



// 25:45 / 38:34 Full Stack Web Development Course [8] | ReactJS, NodeJS, MySQL - Registration and Login

