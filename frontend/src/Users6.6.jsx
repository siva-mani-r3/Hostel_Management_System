import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Users66 ()  {
const[users,setusers]=useState([]) 
useEffect(()=>{
    axios.get('http://localhost:3002/users6')
    .then(result=>setusers(result.data))
    .catch(err=>console.log(err))
},[])
  return (
    <div> 
    <div className="container-fluid" >
     
        <div className='' style={{"marginTop":"90px"}}>
        <h2 style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}>Students Data List</h2>
        
<table className='table table-hover'>
    <thead>
    <tr>
        <th>Name</th>
        <th>Rollno</th>
    </tr>
    </thead>
    <tbody>{
        users.map((user)=>{
           return  <tr>
                <td>{user.name}</td>
                <td>{user.rollno}</td>  
            </tr>
        })
    }
    </tbody>
</table>
    </div >
    </div>
    </div>
  )
}

export default Users66
