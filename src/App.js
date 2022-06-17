import React, { useState } from "react";
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
import { ToastContainer } from 'react-toastify';


export default function App() {
  const [activeUser, setActiveUser] = useState('');
  const [queryResult, setQueryResult] = useState('Atlanta')


  return (
    <Router>
      <ToastContainer />
      {/* Routes tries to find the first and only componet that we specify */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Login" >Login</Link>
        <Link to="/Register">Creat Account</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home setQueryResult={setQueryResult} queryResult={queryResult}/>} />
        <Route path='/Login' element={<Login setActiveUser={setActiveUser} activeUser={activeUser} setQueryResult={setQueryResult}/>} />
        <Route path='/Register' element={<Register setQueryResult={setQueryResult}/>} />
        <Route path='*' element={<ErroPage />} />
      </Routes>
    </Router>
  );
}

