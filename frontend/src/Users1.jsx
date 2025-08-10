import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Users1 ()  {
const[users,setusers]=useState([]) 
useEffect(()=>{
    axios.get('http://localhost:3002/users1')
    .then(result=>setusers(result.data))
    .catch(err=>console.log(err))


},[])
const handleDelete =(id)=>{
    axios.delete('http://localhost:3002/deleteUser1/'+id)
    .then(res=>{console.log(res)
window.location.reload()})
    .catch(err=>console.log(err))
}
  return (
    <div> 
    <div className="container-fluid" >
     
        <div className='' style={{"marginTop":"90px"}}>
        <h2 style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}>Students Data List</h2>
        <Link to='/create'><button className='btn btn-warning'>Add Student</button></Link>
<table className='table table-hover'>
    <thead>
    <tr>
        <th>Name</th>
        <th>Rollno</th>
        <th>Edit</th>
        <th>Delete</th>
    </tr>
    </thead>
    <tbody>{
        users.map((user)=>{
           return  <tr>
                <td>{user.name}</td>
                <td>{user.rollno}</td>
                <td> 
                    <Link to={`/update/${user._id}`}><button className='btn btn-success'>Edit</button>
                    </Link></td>
                <td><button className='btn btn-danger' onClick={(e)=>handleDelete(user._id)}>Delete</button></td>
                
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

export default Users1
