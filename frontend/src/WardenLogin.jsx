import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const WardenLogin = () => {
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
        axios.post('https://hms-api-six.vercel.app/wardenlogin' , { email, password })
            .then(result => {
                if (result.data === "success") {
                    localStorage.setItem('user', email);
                    setTimeout(() => {
                        navigate('/$2a$12$GUbLTBEOUWUg4FSgaPJSousyzQZkyiRr2dmmVt4OwXmDUbCzh9v22');
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
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: "turquoise" }}>
            <div className='p-3 rounded w-60' style={{ backgroundColor: "white" }}>
                <center>
                    <img src='2.png' className='img-fluid' style={{ height: "60px", width: "100px" }} alt="Logo" />
                </center>
                <center><h2 style={{ textShadow: "2px 2px 4px turquoise", fontFamily: "sans-serif" }}>Warden Login</h2></center>

                {inputError && <p className="text-danger mt-3 text-center">{inputError}</p>}
                <center><p className="mt-3">New user? Register below</p></center>
                <Link to="/wardenregister">
                    <button className='btn btn-default border w-100 bg-light rounded-3'>Register</button>
                </Link>
            </div>
        </div>
    );
};
export default WardenLogin;
