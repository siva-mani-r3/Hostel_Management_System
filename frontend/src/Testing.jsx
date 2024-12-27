import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Testing = () => {
    const[name,setname]=useState()
    const[lname,setlname]=useState()
    const navigate=useNavigate()
    const Submit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3002/testing',{name,lname})
        .then(re=>{console.log(re)
            alert("Details submitted Successfully")
            navigate('/')
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
      <h2>This is for testing purpose</h2>
      <br/>
      <form onSubmit={Submit} style={{"padding":"20px"}}>
      <input type='text' placeholder='name..' onChange={(e)=>setname(e.target.value)}/>
      <br/>
      <br/>
      <input type='text' placeholder='lastname..' onChange={(e)=>setlname(e.target.value)}/>
      <br/>
      <br/>
      <button type='submit'>submit</button>
      </form>
    </div>
  )
}
export default Testing