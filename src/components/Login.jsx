import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    axios.defaults.withCredentials = true;

    const login = async () => {
        try {
            await axios.post("http://localhost:3001/register/login", {
                userName: userName,
                password: password
            });
        } catch (error) {
          toast.error(error.response.data.error)
        }
        finally {
            setUserName('');
            setPassword('');
        };
    };

    return (
        <div className="Login">

            <h1>Login</h1>

            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => { setUserName(e.target.value) }}>
                </input>

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}>
                </input>

                <button onClick={login}> Login </button>
            </div>

        </div>
    );
};