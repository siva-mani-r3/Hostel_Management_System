import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Createuser5 = () => {
    const[name,setName]=useState()
    const[rollno,setroll]=useState()
    const navigate = useNavigate()
    const Submit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3002/create5',{name,rollno})
        .then(result=>{console.log(result)
            navigate('/users5')
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className="container-fluid" style={{"marginTop":"90px"}} >
    <div className="">
    <h2 style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><b>Add Student Details</b></h2>
        <form onSubmit={Submit}>
            
            <div className='mb-2'>
            <label style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><h3>Name</h3></label>
                <input type='text' placeholder='Enter-name' className='form-control' onChange={(e)=>setName(e.target.value)}/>

            </div>
            <div className='mb-2'>
            <label style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><h3>RollNo</h3></label>
                <input type='text' placeholder='Enter-Rollno' className='form-control'
                onChange={(e)=>setroll(e.target.value)}/>

            </div>
            <div className='mb-2'>
                <button className='btn btn-success'>Add Student</button>

            </div>
        </form>
    </div>
    </div>
  )
}

export default Createuser5
