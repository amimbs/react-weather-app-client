import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from './components/Home';
import ErroPage from './components/ErrorPage';
import Register from './components/Register';
import Login from './components/Login';
import Navigation from "./components/NavBar";
import LeftLink from "./components/LeftLink";


export default function App() {

  return (
    <Router>
      <Navigation leftLink={<LeftLink />}/>
      {/* Routes tries to find the first and only componet that we specify */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='*' element={<ErroPage />} />
      </Routes>
    </Router>
  );
}


