import React, { useEffect, useState } from "react";
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
import Logout from "./components/Logout";
import { ToastContainer } from 'react-toastify';


export default function App() {
  const [activeUser, setActiveUser] = useState('');
  const [queryResult, setQueryResult] = useState('Atlanta');

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('activeUser'))

    if (!activeUser) {
      setActiveUser(localUser)
    };

    if (activeUser && activeUser.defaultCity !== null) {
      setQueryResult(activeUser.defaultCity);
    };
  }, [activeUser])


  return (
    <Router>
      <ToastContainer />
      {/* Routes tries to find the first and only componet that we specify */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Login" >Login</Link>
        <Link to="/Register">Creat Account</Link>
        {activeUser ? <Link to="Logout">Log out</Link> : ''}
      </nav>

      <Routes>
        <Route path='/' element={<Home setQueryResult={setQueryResult} setActiveUser={setActiveUser} queryResult={queryResult} activeUser={activeUser}/>} />
        <Route path='/Login' element={<Login setActiveUser={setActiveUser} setQueryResult={setQueryResult}/>} />
        <Route path='/Register' element={<Register setQueryResult={setQueryResult}/>} />
        <Route path='Logout' element={<Logout activeUser={activeUser} />}/>
        <Route path='*' element={<ErroPage />} />
      </Routes>
    </Router>
  );
}

