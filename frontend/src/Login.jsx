import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [inputError, setInputError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputError("");
        if (!email || !password) {
            setInputError("Please fill input fields");
            return;
        }
        axios.post('http://localhost:3002/login', { email, password })
            .then(result => {
                if (result.data === "success") {
                    localStorage.setItem('user', email);
                    setTimeout(() => {
                        navigate('/$2a$12$GUbLTBEOUWUg4FSgaPJSousyzQZkyiRr2dmmVt4OwXmDUbCzh9v23');
                    }, 2000);
                } else {
                    alert("Incorrect login details");
                }
            })
            .catch(() => {
                alert("Unable to reach the server. Please try again later.");
            });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
           
            {inputError && <p className="text-danger mt-3 text-center">{inputError}</p>}
           
            <center><p className="mt-3">New user? Register below</p></center>
           
            <Link to="/">
                <button className='btn btn-default border w-100 bg-light rounded-3'>Register</button>
            </Link>
        </div>
    );
};

export default Login;
