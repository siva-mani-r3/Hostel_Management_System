// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from "axios";

// const WardenLogin = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [inputError, setInputError] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setInputError("");
//         if (!email || !password) {
//             setInputError("Please fill input fields");
//             return;
//         }
//         axios.post('https://hms-api-six.vercel.app/wardenlogin', { email, password })
//             .then(result => {
//                 if (result.data === "success") {
//                     localStorage.setItem('user', email);
//                     setTimeout(() => {
//                         navigate('/$2a$12$GUbLTBEOUWUg4FSgaPJSousyzQZkyiRr2dmmVt4OwXmDUbCzh9v22');
//                     }, 2000);
//                 } else {
//                     alert("Incorrect login details");
//                 }
//             })
//             .catch(() => {
//                 alert("Unable to reach the server. Please try again later.");
//             });
//     };

//     return (
//         <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: "turquoise" }}>
//             <div className='p-3 rounded w-60' style={{ backgroundColor: "white" }}>
//                 <center>
//                     <img src='2.png' className='img-fluid' style={{ height: "60px", width: "100px" }} alt="Logo" />
//                 </center>
//                 <center><h2 style={{ textShadow: "2px 2px 4px turquoise", fontFamily: "sans-serif" }}>Warden Login</h2></center>
                
//                 <form onSubmit={handleSubmit}>
//                     <input 
//                         type="email" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         placeholder="Email" 
//                         className="form-control my-2"
//                     />
//                     <input 
//                         type="password" 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)} 
//                         placeholder="Password" 
//                         className="form-control my-2"
//                     />
//                     <button type="submit" className='btn btn-primary w-100'>Login</button>
//                 </form>

//                 {inputError && <p className="text-danger mt-3 text-center">{inputError}</p>}
                
//                 <center><p className="mt-3">New user? Register below</p></center>
                
//                 <Link to="/wardenregister">
//                     <button className='btn btn-default border w-100 bg-light rounded-3'>Register</button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default WardenLogin;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const WardenLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [serverError, setServerError] = useState("");
    const [inputError, setInputError] = useState(""); 
    const[loading,setloading]=useState("")
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setServerError("");
        setInputError("");
        if (!email || !password) {
            setInputError("Please fill input fields");
            return;
        }
        setloading("Loading please wait.....")
        axios.post('https://hms-api-six.vercel.app/wardenlogin', { email, password })
            .then(result => {
                if (result.data === "success") {
                    localStorage.setItem('user', email); 
                    setTimeout(()=>{
                        navigate('/$2a$12$GUbLTBEOUWUg4FSgaPJSousyzQZkyiRr2dmmVt4OwXmDUbCzh9v22'); 
                    },2000);
                    
                } else {
                    alert("Incorrect login details");  
                }
            })
            .catch(err => {
                if (err.response === undefined) {
                    setServerError("Unable to reach the server.\nPlease try again later.");
                }
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: "turquoise" }}>
            <div className='p-3 rounded w-60' style={{ backgroundColor: "white" }}>
                <center>
                    <img src='2.png' className='img-fluid' style={{ height: "60px", width: "100px" }} alt="Logo" />
                </center>
                <center><h2  style={{ textShadow: "2px 2px 4px turquoise", fontFamily: "san serif" }}> Warden Login</h2></center>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            type='email'
                            placeholder='Enter email'
                            autoComplete='off'
                            name="email"
                            className='form-control rounded-2'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            autoComplete='off'
                            name="password"
                            className='form-control rounded-2'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-3'>Login</button>
                </form>

                {loading && <p className="text-info mt-3 text-center">{loading}</p>}
                {inputError && <p className="text-danger mt-3"><center>{inputError}</center></p>}

                {serverError && (
    <div className="text-danger mt-3">
        <p>Unable to reach our servers. <br/>Please try again later.</p>
       
    </div>
)}

            <center><p className="mt-3">New user? Register below</p></center>    
                <Link to="/wardenregister">
                    <button className='btn btn-default border w-100 bg-light rounded-3'>Register</button>
                </Link>
            </div>
        </div>
    );
}

export default WardenLogin;

