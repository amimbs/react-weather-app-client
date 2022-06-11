import React, { useState } from 'react';
import axios from 'axios';

function Login() {

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const data = {
      userName: userName,
      password: password
    };

    axios.post('http://localhost:3001/register/login', data).then((res) => {
      console.log(res.data)
    });
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login