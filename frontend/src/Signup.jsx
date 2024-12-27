import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [serverError, setServerError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();


        setMessage("");
        setServerError(false);


        if (!name || !email || !password) {
            setMessage("All fields are required.");
            return;
        }

        axios.post('http://localhost:3002/register', { name, email, password })
            .then(result => {
                if (result.data.message === "Email already exists") {
                    setMessage("Email already exists.");
                } else {
                    setMessage("Registration successful! Check your email for confirmation.");
                    navigate('/login');
                }
            })
            .catch(err => {
                console.error(err);
                setServerError(true);
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: "turquoise" }}>
            <div className='p-3 rounded w-60' style={{ backgroundColor: "white" }}>
                <center>
                    <h2 style={{ textShadow: "2px 2px 4px turquoise", fontFamily: "san serif" }}>Welcome To HMS</h2>
                    <h5 style={{ textShadow: "2px 2px 4px turquoise", fontFamily: "san serif" }}>Student Registration</h5>
                    <img src='2.png' className='img-fluid' style={{ height: "60px", width: "100px" }} alt="Logo" />
                </center>
                <form onSubmit={handleSubmit}>
                    <div className='mb-1'>
                        <label htmlFor='name'><strong>Username</strong></label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            name="name"
                            className='form-control rounded-2'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            type='email'
                            placeholder='Enter email'
                            name="email"
                            className='form-control rounded-2'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            name="password"
                            className='form-control rounded-2'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-3' style={{marginTop:"10px"}}>Register</button><br/><br/>
                </form>
                <div>
                
                </div>
                <center>   {message && <p className="mt-1" style={{ color: "red" }}>{message}</p>}
                    {serverError && <p className="text-danger mt-1">Unable to reach servers.<br />Please try again later.</p>}
                    <p style={{fontFamily:"sans-serif"}}>Already have an account?</p>
                    <Link to="/login">
                    <button className='btn btn-default border w-100 bg-light rounded-2'>Student Login</button>
                </Link>
                <span>     <Link to="/wardenregister" style={{textDecoration:"none",textShadow: "2px 2px 4px turquoise", fontFamily: "san serif"}}><h5 style={{marginTop:'10px'}} >Register as Warden</h5></Link>
               <Link to="/wardenlogin" style={{textDecoration:"none",textShadow: "2px 2px 4px turquoise", fontFamily: "san serif"}}><h5 style={{marginTop:'10px'}} >Login as Warden</h5></Link></span> </center>
              
            </div>
        </div>
    );
}

export default Signup;
