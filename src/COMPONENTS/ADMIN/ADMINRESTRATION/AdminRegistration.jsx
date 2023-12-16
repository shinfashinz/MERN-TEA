import React, { useState } from 'react'
import './AdminRegistration.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AdminRegistration = () => {
    const navigate=useNavigate()
    const [val,setVal]=useState({
      email:"",
      username:"",
      phone:"",
      password:"",
      confirmpwsd:""
    })
  
    const Getdata=(e)=>{ 
      setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
      // console.log(val);
    }
  
    const registerData=async(e)=>{
      e.preventDefault()
      console.log(val);
      // 
      const{password,confirmpwsd}=val;
      if(password!=confirmpwsd){
        alert("your password is not match")
      }
      else{
        const res=await axios.post("http://localhost:4078/api/addadmin",{...val})
      
      if(res.status!=201){
        alert("Data Not Added")
      }else{
        alert("Seccussfully Registred")
        navigate("/adminlogin")
      }
      // console.log(res);
    }
  }
  return (
    <div>
      <div className="adminreg-main">
        <div className="adminreg-card">
            <div className="admin-reg-card-heading"><h4>Admin Register</h4></div>
          <form action="" className='admin-reg-form'> 
          <div> <input type="email" placeholder='email' name='email' onChange={Getdata}/></div>
            <div><input type="text" placeholder='Username' name='username' onChange={Getdata} /></div>
            <div><input type="text" placeholder='Phone Number' name='phone' onChange={Getdata} /></div>
            <div><input type="password"  placeholder='Password' name='password' onChange={Getdata}/></div>
            <div><input type="password"  placeholder=' Confirm Password' name='confirmpwsd' onChange={Getdata}/></div>
            <button onClick={registerData}>Register</button>
            </form>
       
            <div  className='admn-reg-ihave-ac'><Link to='/adminlogin' className='admn-reg-ihave-ac-text'>I have an account</Link></div>
        </div>
      </div>
    </div>
  )
}

export default AdminRegistration
