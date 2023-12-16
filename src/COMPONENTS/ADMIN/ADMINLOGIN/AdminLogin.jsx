import React, { useState } from 'react'
import './AdminLogin.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const AdminLogin = () => {
    const navigate=useNavigate()
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const Login=async(e)=>{
    e.preventDefault()
    try {
      const res=await axios.post("http://localhost:4078/api/adminlogin",{
        email:email,
        password:password
      })
      const data=res.data;
      console.log(data);
      if(res.status!==404){
        const token=data.token
        localStorage.setItem("token",JSON.stringify(token))
        navigate("/adminhome")
      }
    } catch (error) {
      alert("cant't Login",error)
    }
  }
  return (
    <div>
         <div className="adminlogin-main">
        <div className="adminlogin-card">
            <div className="admin-reg-card-heading"><h4>Admin Login</h4></div>
          <form action="" className='admin-reg-form'> 
            <div><input type="text" placeholder='Email' name='email' onChange={(e)=>setEmail(e.target.value)} /></div>
            <div><input type="password"  placeholder='Password' name='password' onChange={(e)=>setPassword(e.target.value)}/></div>
            <button onClick={Login} >Login</button>
            <div className='reg-btn'><Link to='/adminregister' className='regbtn'>Register</Link></div>
            </form>
        </div>
      </div>
      
    </div>
  )
}

export default AdminLogin
