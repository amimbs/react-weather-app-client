import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


export default function Login({setActiveUser}) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate()

    const login = async () => {
        try {
            let response = await axios.post(process.env.REACT_APP_SERVER + "/users/login", {
                userName: userName,
                password: password
            });
            setActiveUser(response.data.foundUser);
            localStorage.setItem('activeUser', JSON.stringify(response.data.foundUser))
        } catch (error) {
            toast.error(error.response.data.error);
        }
        finally {
            setUserName('');
            setPassword('');
            nav('/');
        };
    };

    return (
        <StyledLogin>
            <div className="Login">
                <h1>Login</h1>

                <div className='loginForm'>
                <label> Username: </label>
                    <input
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => { setUserName(e.target.value) }}>
                    </input>

                    <label> Password: </label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}>
                    </input>

                    <button onClick={login}> Login </button>
                </div>

            </div>
        </StyledLogin>
    );
};

const StyledLogin = styled.div`
    .Login {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
    }

    .Login h1 {
        margin-bottom: 10px;
    }

    .loginForm {
        display: flex;
        flex-direction: column;
        width: 500px;
        height: auto;
        padding: 20px;
        border: 5px solid dodgerblue;
        border-radius: 5px;
        background-color: white;
    }

    .loginForm label {
        font-weight: bold;
    }

    .loginForm input {
        height: 40px;
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid grey;
        border-radius: 5px;
        padding-left: 10px;
        font-size: 20px;
    }

    .loginForm button {
        margin-top: 15px;
        height: 40px;
        border-radius: 5px;
    }

    .loginForm button:hover {
        cursor: pointer;
        background-color: #d6d6d6;
    }
`